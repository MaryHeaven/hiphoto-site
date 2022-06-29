const emailRouter = require('express').Router();
const mailer = require('../config/nodemailer');

emailRouter.route('/')
  .post(async (req, res) => {
    const { username, email, phone } = req.body;
    // const maillist = `${FrendsEmail}`;
    console.log(username, email, phone);
    const message = {
      to: `${email}`,
      subject: `Приветствую, ${username}.`,
      ContentType: File,
      html: `
        <h2>Добро пожаловать в INFLUENCE!</h2>
        
        <p>Для успешной регистрации используйте уникальный ключ:</p>

        <p>Данное письмо не требует ответа.</p>`,
    };
    mailer(message);
    res
      .status(200)
      .json({ message: 'frends__img-block' });
  });

module.exports = emailRouter;
