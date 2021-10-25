
const transporter = require("../config/mail.js")


module.exports = async ({ to, subject, html, text }) => {

    await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>',
        to: to,
        subject: subject,
        text: text,
        html: html,
    });

}