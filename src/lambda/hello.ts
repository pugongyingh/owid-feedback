import { Handler, Context, Callback, APIGatewayEvent } from 'aws-lambda'

import * as nodemailer from 'nodemailer'

const {EMAIL_HOST, EMAIL_PORT, EMAIL_HOST_USER, EMAIL_HOST_PASSWORD} = process.env

const transporter = nodemailer.createTransport({
    host: "smtp.sina.com.cn",
    port: 465,
    secure: 465,
    auth: {
        user: "zyybin@sina.com.cn",
        pass: "6017837"
    }
})

export async function sendMail(options: nodemailer.SendMailOptions): Promise<any> {
    return new Promise((resolve, reject) => {
        transporter.sendMail(options, (err, info) => {
            if (err) return reject(err)
            else resolve(info)
        })
    })
}

const handler: Handler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
    if (event.httpMethod === "POST") {
        const data = JSON.parse(event.body)

        if (data.message && data.message.length) {
            let shortMessage = data.message.split(" ").slice(0, 10).join(" ")
            if (shortMessage.length < data.message.length)
                shortMessage += "..."
    
            sendMail({
                from: `zyybin@sina.com.cn`,
                replyTo: `pgyhh@sina.cn`,
                to: `mit777@sina.com`,
                subject: `User Feedback:`,
                text: `data.message`
            }).then(() => console.log("Message sent"))
            .catch((err) => console.error(err))    
        }
    }

    callback(null, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, X-Requested-With"
        },
        statusCode: 200,
        body: "done",
    });    
};

export { handler }
