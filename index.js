'use strict';

const { dialogflow } = require('actions-on-google');
const functions = require('firebase-functions');
const { SheetsService } = require('./sheetsService');

const app = dialogflow();

const sheetsService = new SheetsService();

const id = '1lMN7hRV3Hw5zrcEi2MM3NHLAm4x-51BWY-tYusZdx5s';
const range = 'sheet1!A2:B6';
const orient = 'vertical';

let replyJson = {
    fulfillmentText: "",
    fulfillmentMessages: [
      {
        text: {
          text: []
        },
        platform: "LINE"
      }
    ]
  };

sheetsService
  .readValues(id, range, orient)
  .then(response => {
    replyJson.fulfillmentMessages[0].text.text.push(JSON.stringify(response));
  })
  .catch(errors => {
    replyJson.fulfillmentMessages[0].text.text.push(JSON.stringify(errors));
  });


app.intent('CasleyChatBotIntents', (conv, params) => {
  conv.json(JSON.stringify(replyJson));
});

exports.helloWorld = functions.https.onRequest(app);