import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "kailyn10@ethereal.email",
    pass: "hgMHtdjnJ38bKTyYKw",
  },
});
const sendEmail = async (req, res) => {
  const info = await transporter.sendMail({
    from: '"Andrew Nikolaus 👻" <andrew31@ethereal.email>', // sender address
    to: "mabdullah2037@gmail.com", // list of receivers
    subject: "Congratulation! Benizar income support (SINDH BANK)✔",
    text: "Mubarak ho appka benazir income support ma 10 lac cash or 20 tola sona nikla haa. Abhi 2000rs 03221767616 ma bhejain or inaam hasil krain", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.send("email sent");
};
export { sendEmail };
