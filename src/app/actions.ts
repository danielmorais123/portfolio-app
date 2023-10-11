"use server";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.NEXT_PUBLIC_EMAIL, //emailtesteportefolio@gmail.com
    pass: process.env.NEXT_PUBLIC_PASSWORD,
  },
});

async function sendEmail(
  from: string,
  to: string,
  subject: string,
  message: string,
  whoSent: string,
  name: string,
  phone: string
) {
  await transporter.sendMail({
    from, // sender address
    to, // list of receivers
    subject, // Subject line
    html: `<div><p> ${message} </p> <p>By ${whoSent} - Name: ${name} - Phone: ${phone} </p>   </div>`,
  });
}

export async function sendContactUs(data: FormData) {
  const from = String(data.get("from"));
  const subject = String(data.get("subject"));
  const message = String(data.get("message"));
  const name = String(data.get("name"));
  const phone = String(data.get("phone"));
  await sendEmail(
    "emailtesteportefolio@gmail.com",
    "moraisartic01@gmail.com",
    subject,
    message,
    from,
    name,
    phone
  );
}
