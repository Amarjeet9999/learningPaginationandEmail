
const transporter = require("../config/mail.js")


module.exports = async ({ to, subject, html, text }) => {
    await transporter.sendMail({
        from: '"Masai Student 👻" <amarjeet_fw10_058@masai.com>',
        to: to,
        subject: subject,
        text: text,
        html: html,
    });
}


