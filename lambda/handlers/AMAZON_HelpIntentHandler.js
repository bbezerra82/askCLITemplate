// AMAZON_HelpIntentHandler.js

const utils = require('../lib/utils');

const handler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const { responseBuilder } = handlerInput;
        
        const t = utils.getTFunction(handlerInput);
        
        const outputSpeech = t('HELP_MSG');
        const reprompt = t('HELP_REPROMPT');

        return responseBuilder
            .speak(outputSpeech)
            .reprompt(reprompt)
            .getResponse();
    },
};

module.exports = handler;