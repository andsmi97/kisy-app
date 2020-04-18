const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const express = require('express');
const app = express();
const cors = require('cors')();
const nodemailer = require('nodemailer');
app.use(cors);
app.use(require('./Routes'));

// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const yandexEmail = functions.config().yandex.email;
const yandexPassword = functions.config().yandex.password;
const mailTransport = nodemailer.createTransport({
  service: 'Yandex',
  auth: {
    user: yandexEmail,
    pass: yandexPassword,
  },
});

// sends email on create document in table `documents` in firestore
exports.sendOrderEmail = functions.firestore
  .document('/documents/{uid}')
  .onCreate(async (snap, context) => {
    //data of created document stored in val
    const val = snap.data();
    const mailOptions = {
      from: yandexEmail,
      to: yandexEmail,
      subject: 'subject',
      text: `text`,
    };

    try {
      await mailTransport.sendMail(mailOptions);
    } catch (error) {
      console.error('There was an error while sending the email:', error);
    }
    return null;
  });

// Expose the API as a function
exports.api = functions.https.onRequest(app);
