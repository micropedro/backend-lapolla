const nodemailer = require("nodemailer");
const { GMAILPASS } = require('../services/temporalEnv')
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "manuelperez.0000@gmail.com",
    pass: GMAILPASS
  }
})

async function sendMail({email,temporalPass}) {
  // send mail with defined transport object
  await transporter.sendMail({
    from: 'recuperacion@apuestaslapolla.com',
    to:email,
    subject: "Recuperacion de contraseña apuestaslapolla.com",
    html: `
    <img src="https://www.apuestaslapolla.com/assets/logo-bK1-zAXK.png" alt="lapolla" height='100px' />
    <h3> Utiliza este codigo para recuperar tu contraseña </h3>
    <br />
    <b>`+ temporalPass + `</b>
    `
  });

}

module.exports = sendMail
