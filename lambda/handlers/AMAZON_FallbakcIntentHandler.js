// AMAZON_FallbackIntentHandler.js

const handler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const { responseBuilder, t } = handlerInput;
        
        const outputSpeech = t('FALLBACK_MSG');
        
        return responseBuilder
            .speak(outputSpeech)
            .withShouldEndSession(false)
            .getResponse();
    },
};

module.exports = handler;