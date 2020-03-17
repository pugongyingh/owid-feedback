


//require('dotenv').config()
//const result = require('dotenv').config()
const nodemailer = require('nodemailer');

const mailUtils = require("../mail");
export async function handler(event, context, callback){
 // const { user, pass} = process.env
 const body = JSON.parse(event.body);
    var min = "10000";
   // const max = 99999;
   // const num = Math.floor(Math.random() * (max - min + 1)) + min;
var  mm=process.env.m1;
var  mmm=mm.split(';')[0];
 var  pp=mm.split(';')[1];
 var  hh="smtp."+mmm.split('@')[1];
    const transport = nodemailer.createTransport({
    host: hh, // 主机
    secureConnection: true, // 使用 SSL
    port: 465, // SMTP 端口
    auth: {
        user: mmm,
        pass: pp
    }
    });

    //const { email }  = JSON.parse(event.body) 
    let mailOptions = {
      from: mmm,
      to: `${body.email}`,
      subject: `${body.name}`,
      text: mailUtils.getMailBody(event.body),
  };

try{
 //min="777";
  let value = await transport.sendMail(mailOptions);
  //transport.sendMail(mailOptions);
  //console.log(value, mailOptions )
 min= JSON.stringify(value.response);
 //min= JSON.stringify(body.name);
// min=process.env.yyy;
  return {
    statusCode: 200,
    body: min.substring(1,28)
  }
}catch(err){
//console.log(err)
  return {
    statusCode: 400,
    body: "err"
  };
}

}
