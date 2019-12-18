'use strict';

const Promise = require('promise');
const { Storage } = require('@google-cloud/storage');

const BUCKET_NAME = 'casley-chat-bot-bucket1';
const FILE_NAME   = 'chatbot-reply.csv';

const storage = new Storage();

const SimpleReplyService = class {

    constructor () {
        // コンストラクタで返答を探すためのcsvファイルストリームを生成しておく
        this.replyStream = storage.bucket(BUCKET_NAME).file(FILE_NAME).createReadStream();
    }

    findAnsLineInStream (questionWord) {
        return new Promise(resolve => {
            let ansData = '';
            this.replyStream
            .on('data', d => {
                let filtered = String(d)
                    .replace(/"/g, '')
                    .split('\n')
                    .filter(line => line.split(',')[0] === questionWord);
                ansData = filtered.length > 0 ? filtered[0] : '';
            })
            .on('end', () => {
                resolve(ansData);
            });
        });
    }
}

module.exports = SimpleReplyService;