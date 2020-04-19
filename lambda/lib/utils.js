// utils.js

const MAX_HISTORY_SIZE = 20;

const SKILL_NAME = "<skillName>";

function ambiguityCheck(slot) {
    return (slot.matches.length > 1)
}

function readArray(values, t) {
    let speech = '';
    for (var i = 1; i < values.length; i++) {
        const item = t(`${values[i]}`)
        speech += `${item}`;
        if (i === values.length - 2) {
            speech += t('AND_MSG')
        } else if (i !== values.length - 1 ) {
            speech += ', '
        }
    }
    return speech;
}

function getMemoryAttributes() {
	const memoryAttributes = {
		"history": [],
		// "launchCount": 0,
		// "lastUseTimestamp": 0,
		// "lastSpeechOutput": {},
	};
	return memoryAttributes;
};

function getSlotValues(filledSlots) {
    const slotValues = {};

    Object.keys(filledSlots).forEach((item) => {
        const name = filledSlots[item].name;

        if (filledSlots[item] &&
            filledSlots[item].resolutions &&
            filledSlots[item].resolutions.resolutionsPerAuthority[0] &&
            filledSlots[item].resolutions.resolutionsPerAuthority[0].status &&
            filledSlots[item].resolutions.resolutionsPerAuthority[0].status.code) {
            switch (filledSlots[item].resolutions.resolutionsPerAuthority[0].status.code) {
                case 'ER_SUCCESS_MATCH':
                    const numberOfMatches = filledSlots[item].resolutions.resolutionsPerAuthority[0].values.length;
                    slotValues[name] = {
                        heardAs: filledSlots[item].value,
                        resolved: filledSlots[item].resolutions.resolutionsPerAuthority[0].values[0].value.name,
                        ERstatus: 'ER_SUCCESS_MATCH',
                        matches: []
                    };
                    for (i = 0; i < numberOfMatches; i++) {
                        slotValues[name].matches.push(filledSlots[item].resolutions.resolutionsPerAuthority[0].values[i].value.name);
                    }
                    break;
                case 'ER_SUCCESS_NO_MATCH':
                    slotValues[name] = {
                        heardAs: filledSlots[item].value,
                        resolved: '',
                        ERstatus: 'ER_SUCCESS_NO_MATCH'
                    };
                    break;
                default:
                    break;
            }
        } else {
            slotValues[name] = {
                heardAs: filledSlots[item].value,
                resolved: '',
                ERstatus: ''
            };
        }
    }, this);

    return slotValues;
};

function getTFunction(handlerInput) {
    const { attributesManager } = handlerInput;

    const rAttributes = attributesManager.getRequestAttributes();

    return rAttributes.t;
}

function shuffle(array) {
    let a = array;
    for (let i = 0; i < array.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

module.exports = {
    MAX_HISTORY_SIZE,
    SKILL_NAME,
    ambiguityCheck,
    getMemoryAttributes,
    getSlotValues,
    getTFunction,
    readArray,
    shuffle
}