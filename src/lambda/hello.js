


//require('dotenv').config()
//const result = require('dotenv').config()
const nodemailer = require('nodemailer');


export async function handler(event, context, callback){
 // const { user, pass} = process.env
    var min = "10000";
   // const max = 99999;
   // const num = Math.floor(Math.random() * (max - min + 1)) + min;
    const transport = nodemailer.createTransport({
    host: "smtp.163.com", // 主机
    secureConnection: true, // 使用 SSL
    port: 465, // SMTP 端口
    auth: {
        user: "wulibin1122@163.com",
        pass: "987654321"
    }
    });

    //const { email }  = JSON.parse(event.body) 
    let mailOptions = {
      from: "wulibin1122@163.com",
      to: "tyszz@21cn.com",
      subject: "Verification Code",
      text: "88888",
  };

try{
 min="777";
  let value = await transport.sendMail(mailOptions);
  //transport.sendMail(mailOptions);
  //console.log(value, mailOptions )
 min="77997";
  return {
    statusCode: 200,
    body: //require('dotenv').config()
//const result = require('dotenv').config()
const nodemailer = require('nodemailer');


export async function handler(event, context, callback){
 // const { user, pass} = process.env
    var min = "10000";
   // const max = 99999;
   // const num = Math.floor(Math.random() * (max - min + 1)) + min;
    const transport = nodemailer.createTransport({
    host: "smtp.163.com", // 主机
    secureConnection: true, // 使用 SSL
    port: 465, // SMTP 端口
    auth: {
        user: "wulibin1122@163.com",
        pass: "987654321"
    }
    });

    //const { email }  = JSON.parse(event.body) 
    let mailOptions = {
      from: "wulibin1122@163.com",
      to: "tyszz@21cn.com",
      subject: "Verification Code",
      text: "88888",
  };

try{
 min="777";
  let value = await transport.sendMail(mailOptions);
  //transport.sendMail(mailOptions);
  //console.log(value, mailOptions )
 min="77997";
  return {
    statusCode: 200,
    body: //require('dotenv').config()
//const result = require('dotenv').config()
const nodemailer = require('nodemailer');


export async function handler(event, context, callback){
 // const { user, pass} = process.env
    var min = "10000";
   // const max = 99999;
   // const num = Math.floor(Math.random() * (max - min + 1)) + min;
    const transport = nodemailer.createTransport({
    host: "smtp.163.com", // 主机
    secureConnection: true, // 使用 SSL
    port: 465, // SMTP 端口
    auth: {
        user: "wulibin1122@163.com",
        pass: "987654321"
    }
    });

    //const { email }  = JSON.parse(event.body) 
    let mailOptions = {
      from: "wulibin1122@163.com",
      to: "tyszz@21cn.com",
      subject: "Verification Code",
      text: "88888",
  };

try{
 min="777";
  let value = await transport.sendMail(mailOptions);
  //transport.sendMail(mailOptions);
  //console.log(value, mailOptions )
 min="77997";
  return {
    statusCode: 200,
    body: value
  }
}catch(err){
//console.log(err)
  return {
    statusCode: 400,
    body: min
  };
}

}
  }
}catch(err){
//console.log(err)
  return {
    statusCode: 400,
    body: min
  };
}

}
  }
}catch(err){
//console.log(err)
  return {
    statusCode: 400,
    body: min
  };
}

}
