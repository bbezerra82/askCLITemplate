// AMAZON_CancelIntentHandler.js

const utils = require('../lib/utils');

const handler = {
	canHandle(handlerInput) {
		const request = handlerInput.requestEnvelope.request;
		return request.type === 'IntentRequest' && 
			(request.intent.name === 'AMAZON.CancelIntent' || request.intent.name === 'AMAZON.StopIntent');
	},
	handle(handlerInput) {
		const { responseBuilder } = handlerInput;

		const t = utils.getTFunction(handlerInput);
		
		const outputSpeech = t('GOODBYE_MSG');

		return responseBuilder
			.speak(outputSpeech)
			.withShouldEndSession(true)
			.getResponse();
	},
};

module.exports = handler;