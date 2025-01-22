import { isMostPopularPassword } from "./isMostPopularPassword";

export function isValidPassword(text) {
    const min = 12;
    const max = 100;

    if (typeof text !== 'string'
        || text === ''
        || text.length < min
        || text.length > max
        || text.toUpperCase() === text
        || text.toLowerCase() === text
        || text[0].repeat(text.length) === text
    ) {
        return false;
    }

    if (isMostPopularPassword(text)) {
        return false;
    }

    return true;
}