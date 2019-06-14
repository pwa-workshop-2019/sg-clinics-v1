/* eslint-disable */
let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let webPush = require('web-push');
let path = require('path');
let vapidKeys = require('./vapidKeys');

const app = express();
const port = process.env.PORT || '4000';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'../build')));
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https') {
    res.redirect(`https://${req.header('host')}${req.url}`)
  }
  else {
    next();
  }
});

app.use(function (req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next()
});

app.listen(port, ()=>{
  console.log(`server started using port:${port}`);
});

app.post('/book', (req, res) => {
  const subscriptionObj = req.body;
  console.log(`pushSubscription-${JSON.stringify(subscriptionObj)}`);
  res.sendStatus(201);
  setTimeout(() => sendNotification('Your appointment is booked successfully', subscriptionObj), 5000);
});

function sendNotification(msg, subscriptionObj) {
  let options = {
    TTL: 60,
    vapidDetails: {
      subject: 'mailto: noorul.it@gmail.com',
      publicKey: vapidKeys.publicKey,
      privateKey: vapidKeys.privateKey
    }
  };
  console.log(`push message options-${JSON.stringify(options)}`);
  webPush.sendNotification(subscriptionObj, msg,options);
}






