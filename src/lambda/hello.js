


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
var  mm;
var  tmp;
var  mmm=mm.split(';')[0];
 var  pp=mm.split(';')[1];
 var  hh="smtp."+mmm.split('@')[1];
  var  ss = body.send;
  var  tt = body.tmp;
   switch (ss) {
    case 1:
     mm =process.env.m1;
      break;
    case 2:
     mm =process.env.m2;
      break;
    case 3:
     mm =process.env.m3;
      break;
    case 4:
     mm =process.env.m4;
      break;
    case 5:
     mm =process.env.m5;
      break;
    case 6:
     mm =process.env.m6;
      break;
    case 7:
     mm =process.env.m7;
      break;
    case 8:
     mm =process.env.m8;
      break;
    case 9:
     mm =process.env.m9;
      break;
    case 10:
     mm =process.env.m10;
      break;
    default:
     mm =process.env.m1;
  }
 
   switch (tt) {
    case 1:
      tmp = mailUtils.getMailBody1(body);
      break;
    case 2:
      tmp = mailUtils.getMailBody2(body);
      break;
    case 3:
      tmp = mailUtils.getMailBody3(body);
      break;
    case 4:
      tmp = mailUtils.getMailBody4(body);
      break;
    case 5:
      tmp = mailUtils.getMailBody5(body);
      break;
    default:
      tmp = mailUtils.getMailBody1(body);
  }
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
      text: tmp,
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
