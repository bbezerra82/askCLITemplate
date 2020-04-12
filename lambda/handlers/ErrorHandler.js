// ErrorHandler.js

const utils = require('../lib/utils')

const handler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const t = utils.getTFunction(handlerInput);

        const outputSpeech = t('ERROR_MSG');

        console.error(`Error handled: ${error.message}`);        

        return handlerInput.responseBuilder
            .speak(outputSpeech)
            .reprompt(outputSpeech)
            .getResponse();
    }
};

module.exports = handler;