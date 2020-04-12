// LaunchRequestHandler.js

const utils = require('../lib/utils');

const handler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const { responseBuilder } = handlerInput;
        
        const t = utils.getTFunction(handlerInput);

        var outputSpeech = '';

        const { person } = handlerInput.requestEnvelope.context.System;

        if (person) {
            outputSpeech = t('WELCOME_MSG_PSN', person.personId, utils.SKILL_NAME) + t('CAN_DO');
        } else {
            outputSpeech = t('WELCOME_MSG', utils.SKILL_NAME) + t('CAN_DO');
        }

        return responseBuilder
            .speak(outputSpeech)
            .withShouldEndSession(false)
            .getResponse();
    },
};

module.exports = handler;