'use strict';

const functions = require('firebase-functions');
const { dialogflow } = require('actions-on-google');
const SimpleReplyService = require('./service/SimpleReplyService');
const ReplyToLineModel = require('./model/ReplyToLineModel');

const app = dialogflow();

app.intent('CasleyChatBotIntents', async (conv, params) => {
  let simpleReplyService = new SimpleReplyService();
  let ansLine = await simpleReplyService.findAnsLineInStream(params.simple_question);
  let ans = ansLine.split(',')[1];

  let replyToLineModel = new ReplyToLineModel();
  let replyJson = replyToLineModel.buildReplyJson(ans);
  conv.json(JSON.stringify(replyJson));
});

const REGION = 'asia-northeast1';
exports.reply = functions.region(REGION).https.onRequest(app);
