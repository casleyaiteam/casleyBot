'use strict';

const ReplyToLineModel = class {

    constructor () {
        this.templateJson = {
            fulfillmentText: "",
            fulfillmentMessages: [
                {
                    text: {
                        text: []
                    },
                    platform: "LINE"
                }
            ]
        }
    }

    buildReplyJson (reply) {
        this.templateJson.fulfillmentMessages[0].text.text = Array.isArray(reply) ? reply : [reply];
        return this.templateJson;
    }
}

module.exports = ReplyToLineModel;