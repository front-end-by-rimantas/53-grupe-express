export function isValidEmail(text) {
    if (typeof text !== 'string') {
        return false;
    }

    let etaCount = 0;
    for (const symbol of text) {
        if (symbol === '@') {
            etaCount++;
        }
    }

    if (etaCount !== 1) {
        return false;
    }

    return true;
}