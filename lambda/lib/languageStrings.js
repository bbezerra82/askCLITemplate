/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            WELCOME_MSG: [
                'Hello and welcome to %s. ',
                'Hi! Welcome to %s. ',
                'Hello and thanks for launching %s. ',
                'Hello and thank you for launching %s. ',
                'Hi! This is %s. '
            ],
            WELCOME_MSG_PSN: [
                'Hello <alexa:name type="first" personId="%s"/> and welcome to %s. ',
                'Hi <alexa:name type="first" personId="%s"/>! Welcome to %s. ',
                'Hello <alexa:name type="first" personId="%s"/> and thanks for launching %s. ',
                'Hello <alexa:name type="first" personId="%s"/> and thank you for launching %s. ',
                'Hi <alexa:name type="first" personId="%s"/>! This is %s. '
            ],
            CAN_DO: [
                'Describe what can be done'
            ],
            HELP_MSG: [
                'You asked for help. Which one would you like now?',
                'Welcome to the help part of the skill. What do you wnat to do now?'
            ],
            HELP_REPROMPT: [
                'help reprompt'
            ],
            GOODBYE_MSG: [
                'Thank you for using %s. See you soon!',
                'Thanks for using %s. Can\'t wait to see you again!',
                'Come back soon to use %s again!'
            ],
            FALLBACK_MSG: [
                'Sorry, I don\'t know about that. Please try again.',
                'Sorry I didn\'t catch what you said, can you please repeat?',
                'I didn\'t understand what you can said. Please repeat.'
            ],
            ERROR_MSG: [
                'Sorry, I had trouble doing what you asked. Please try again.',
                'Sorry, I had an issue trying to do what you asked. Can you please try again?',
                'I am sorry, something went wrong. Plese try again.',
            ],
            NOT_SURE_MSG: 'Sorry, I am not sure what you are trying to do. Please try again.',
            MORE_MSG: [
                'Do you want to hear more?',
                'Do you want me to continue?'
            ],
        }
    },
    pt: {
        translation: {
            WELCOME_MSG: [
                'Olá e boas vindas à skill <lang xml:lang="en-GB">%s</lang>. ',
                'Oi! Boas vindas à skill <lang xml:lang="en-GB">%s</lang>. ',
                'Olá e obrigada por iniciar a skill <lang xml:lang="en-GB">%s</lang>. ',
                'Olá e obrigada por iniciar essa skill <lang xml:lang="en-GB">%s</lang>. ',
                'Oi! Esta é a skill <lang xml:lang="en-GB">%s</lang>. '
            ],
            WELCOME_MSG_PSN: [
                'Olá <alexa:name type="first" personId="%s"/> e boas vindas à skill <lang xml:lang="en-GB">%s</lang>. ',
                'Oi <alexa:name type="first" personId="%s"/>! Boas vindas à skill <lang xml:lang="en-GB">%s</lang>. ',
                'Olá <alexa:name type="first" personId="%s"/> e obrigada por iniciar a skill <lang xml:lang="en-GB">%s</lang>. ',
                'Olá <alexa:name type="first" personId="%s"/> e obrigada por iniciar essa skill <lang xml:lang="en-GB">%s</lang>. ',
                'Oi <alexa:name type="first" personId="%s"/>! Esta é a skill <lang xml:lang="en-GB">%s</lang>. '
            ],
            CAN_DO: [
                'Descrever o que pode ser feito. ',
            ],
            HELP_MSG: [
                'Você pediu ajuda. O que você deseja fazer agora? ',
                'Boas vindas à seção de ajuda da skill. O que gostaria de fazer agora? ',
            ],
            HELP_REPROMPT: [
                'reprompt'
            ],
            GOODBYE_MSG: [
                'Obrigada por utilizar <lang xml:lang="en-GB">%s</lang>. Espero ver você em breve!',
                'Obrigada por usar <lang xml:lang="en-GB">%s</lang>. Mal possa esperar para ver você de novo!',
                'Volte logo para usar <lang xml:lang="en-GB">%s</lang> de novo!'
            ],
            FALLBACK_MSG: [
                'Desculpe, eu não entendi o que você falou. Poderia repertir, por favor?',
                'Desculpe, não entendi. Poderia tentar de novo, por favor?',
                'Não estou entendendo o que você está querendo dizer. Seria possível repetir?'
            ],
            ERROR_MSG: [
                'Desculpe, estou tendo probelmas em fazer o que você pediu. Por favor tente de novo. ',
                'Desculpe, eu tive um problema ao tentar fazer o que vocie solicitou. Poderia tentar de novo, por favor?',
                'Sinto muito, algo deu errado. Tente novamente, por favor.',
            ],
            NOT_SURE_MSG: 'Desculpe, eu não sei o que você está tentando fazer. Por favor tente novamente. ',
            MORE_MSG: [
                'Você quer ouvir mais?',
                'Você quer que eu continue?',
                'Devo continuar?',
            ],
        }
    },
    es: {
        translation: {
            WELCOME_MSG: 'Bienvenido, puedes decir Hola o Ayuda. Cual prefieres?',
            HELLO_MSG: 'Hola Mundo!',
            HELP_MSG: 'Puedes decirme hola. Cómo te puedo ayudar?',
            GOODBYE_MSG: 'Hasta luego!',
            REFLECTOR_MSG: 'Acabas de activar {{intentName}}',
            FALLBACK_MSG: 'Lo siento, no se nada sobre eso. Por favor inténtalo otra vez.',
            ERROR_MSG: 'Lo siento, ha habido un error. Por favor inténtalo otra vez.'
        }
    },
    de: {
        translation: {
            WELCOME_MSG: 'Wilkommen, du kannst Hallo oder Hilfe sagen. Was würdest du gern tun?',
            HELLO_MSG: 'Hallo!',
            HELP_MSG: 'Du kannst hallo zu mir sagen. Wie kann ich dir helfen?',
            GOODBYE_MSG: 'Tschüss!',
            REFLECTOR_MSG: 'Du hast gerade {{intentName}} ausgelöst',
            FALLBACK_MSG: 'Es tut mir leid, ich weiss das nicht. Bitte versuche es erneut.',
            ERROR_MSG: 'Es tut mir leid, ich konnte das nicht machen. Bitte versuche es erneut.'
        }
    },
    ja: {
        translation: {
            WELCOME_MSG: 'ようこそ。こんにちは、または、ヘルプ、と言ってみてください。どうぞ！',
            HELLO_MSG: 'ハローワールド',
            HELP_MSG: 'こんにちは、と言ってみてください。どうぞ！',
            GOODBYE_MSG: 'さようなら',
            REFLECTOR_MSG: '{{intentName}}がトリガーされました。',
            FALLBACK_MSG: 'ごめんなさい。ちょっとよくわかりませんでした。もう一度言ってみてください。',
            ERROR_MSG: 'ごめんなさい。なんだかうまく行かないようです。もう一度言ってみてください。'
        }
    },
    fr: {
        translation: {
            WELCOME_MSG: 'Bienvenue sur le génie des salutations, dites-moi bonjour et je vous répondrai',
            HELLO_MSG: 'Bonjour à tous!',
            HELP_MSG: 'Dites-moi bonjour et je vous répondrai!',
            GOODBYE_MSG: 'Au revoir!',
            REFLECTOR_MSG: 'Vous avez invoqué l\'intention {{intentName}}',
            FALLBACK_MSG: 'Désolé, je ne sais pas. Pouvez-vous reformuler?',
            ERROR_MSG: 'Désolé, je n\'ai pas compris. Pouvez-vous reformuler?'
        }
    },
    it: {
        translation: {
            WELCOME_MSG: 'Buongiorno! Puoi salutarmi con un ciao, o chiedermi aiuto. Cosa preferisci fare?',
            HELLO_MSG: 'Ciao!',
            HELP_MSG: 'Dimmi ciao e io ti risponderò! Come posso aiutarti?',
            GOODBYE_MSG: 'A presto!',
            REFLECTOR_MSG: 'Hai invocato l\'intento {{intentName}}',
            FALLBACK_MSG: 'Perdonami, penso di non aver capito bene. Riprova.',
            ERROR_MSG: 'Scusa, c\'è stato un errore. Riprova.'
        }
    },
    hi: {
        translation: {
            WELCOME_MSG: 'नमस्ते, आप hello या help कह सकते हैं. आप क्या करना चाहेंगे?',
            HELLO_MSG: 'नमस्ते दुनिया ',
            HELP_MSG: 'आप मुझसे hello बोल सकते हो.',
            GOODBYE_MSG: 'अलविदा ',
            REFLECTOR_MSG: 'आपने {{intentName}} trigger किया हैं ',
            FALLBACK_MSG: 'Sorry, मैं वो समझ नहीं पायी. क्या आप दोहरा सकते हैं ',
            ERROR_MSG: 'Sorry, मैं वो समझ नहीं पायी. क्या आप दोहरा सकते हैं '
        }
    }
}