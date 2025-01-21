export function isValidPassword(text) {
    if (typeof text === 'number'
        || typeof text === 'boolean'
        || typeof text === 'undefined'
    ) {
        return false;
    }

    return true;
}