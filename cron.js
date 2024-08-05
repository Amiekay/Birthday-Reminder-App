const cron = require('node-cron');
const nodeMailer = require('nodemailer');
const userModel = require('./model/userModel');

const email_transporter = {
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

const transporter = nodeMailer.createTransport(email_transporter);

cron.schedule('0 7 * * *', async () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  try {
    const users = await userModel
      .find({
        $expr: {
          $and: [
            { $eq: [{ $dayOfMonth: '$dateOfBirth' }, day] },
            { $eq: [{ $month: '$dateOfBirth' }, month] },
          ],
        },
      })
      .select('-password -__v -_id');
    console.log(users);

    for (const user of users) {
      const emailContent = `
          <p>Hello <strong>${user.username}</strong>,</p>
          <p>Happy Birthday! We wish you a wonderful birthday filled with love, joy, and happiness.</p>
          <p>May all your dreams and desires come true in this coming year.</p>
          <p>Regards,<br>Wellfare Team</p>
        `;

      await transporter.sendMail({
        from: 'marachiks@gmail.com',
        to: user.email,
        subject: 'Happy Birthday',
        html: emailContent,
      });

      console.log(`Email sent to ${user.username}`);
    }
    console.log('running everyday at 7am');

  } catch (error) {
    console.log(error.message);
  }

});