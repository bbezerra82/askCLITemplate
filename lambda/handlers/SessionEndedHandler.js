// SessionEndedHandler.js

const handler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        const { error, reason } = handlerInput.requestEnvelope.request;
        console.log(`[INFO] Session ended with reason: ${reason}`);

        if (error) {
            console.error(`Type: ${error.type}`)
            console.error(`Message: ${error.message}`)
        }
        return handlerInput.responseBuilder.getResponse();
    }
};

module.exports = handler;