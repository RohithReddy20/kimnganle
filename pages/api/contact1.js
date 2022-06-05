// import dotenv from "dotenv-safe";
// dotenv.config();
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  try {
    if (
      !req.body ||
      req.body.firstName === "" ||
      req.body.lastName === "" ||
      req.body.subject === "" ||
      req.body.message === "" ||
      req.body.email === ""
    ) {
      res.status(561).json({ error: "Failed to send message" });
    } else {
      //       require("dotenv").config();

      const passwordG = process.env.NEXT_PUBLIC_PASSWORD;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "rohith18151821@gmail.com",
          pass: passwordG,
        },
      });

      await new Promise((resolve, reject) => {
        transporter.verify(function(error, success){
          if(error){
       console.log(error)
            reject(error)
          }else{
            resolve(success)
          }
        })
      })

      const mailOptions = {
        from: "rohith18151821@gmail.com",
        to: "19105008rohith@gmail.com",
        subject: `${req.body.subject}, Message from  ${req.body.firstName} ${req.body.lastName}`,
        html: `
    <div style="display:flex"><span>From: <h3>${req.body.email}</h3></span></div>
  <div>
  ${req.body.message}
  </div>
  `,
      };

     await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error)
          res.status(500).json({ error: "Failed to send message" });
          reject(error)
        } else {
          console.log("Email Sent " + info.response);
          resolve(info)
        }
      });

      res.status(200).json({ result: "success" });
     })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
    console.log(error)
  }
}
