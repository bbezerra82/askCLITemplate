// This is an empty template
const Alexa = require('ask-sdk');

// default handlers
const AMAZON_CancelStopIntent_Handler = require('./handlers/AMAZON_CancelStopHandler');
const AMAZON_FallbackIntent_Handler = require('./handlers/AMAZON_FallbakcIntentHandler');
const AMAZON_HelpIntent_Handler = require('./handlers/AMAZON_HelpIntentHandler');
const ErrorHandler = require('./handlers/ErrorHandler');
const LaunchRequest_Handler = require('./handlers/LaunchRequestHandler');
const SessionEndedHandler = require('./handlers/SessionEndedHandler');

// interceptors
const InitMemoryAttributesInterceptor = require('./interceptors/InitMemoryAttributesInterceptor');
const LocalisationRequestInterceptor = require('./interceptors/LocalisationRequestInterceptor');
const RequestHistoryInterceptor = require('./interceptors/RequestHistoryInterceptor');
const RequestLogInterceptor = require('./interceptors/RequestLogInterceptor');
const ResponseLogInterceptor = require('./interceptors/ResponseLogInterceptor');

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.standard()
    .addRequestHandlers(
        LaunchRequest_Handler,
        AMAZON_HelpIntent_Handler,
        AMAZON_CancelStopIntent_Handler,
        SessionEndedHandler,
        AMAZON_FallbackIntent_Handler,
    ) 
    .addErrorHandlers(
        ErrorHandler,
    )
    .addRequestInterceptors(
        InitMemoryAttributesInterceptor,
        LocalisationRequestInterceptor,
        RequestHistoryInterceptor,
        RequestLogInterceptor,
    )
    .addResponseInterceptors(
        ResponseLogInterceptor
    )
    .lambda();
