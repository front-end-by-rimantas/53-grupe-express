export function isValidEmail(text) {
    if (typeof text !== 'string') {
        return 'El pastas turi buti teksto tipo.';
    }

    let etaCount = 0;
    for (const symbol of text) {
        if (symbol === '@') {
            etaCount++;
        }
    }

    if (etaCount !== 1) {
        return 'El paste turi buti tik 1 @ simbolis.';
    }

    if (text[0] === '@') {
        return 'El pasto adresas negali prasideti @ simboliu.';
    }

    if (text.at(-1) === '@') {
        return 'El pasto adresas negali baigtis @ simboliu.';
    }

    const allowedLocalSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-._';
    const allowedDomainSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-.';

    const [localPart, domainPart] = text.split('@');

    for (const symbol of localPart) {
        if (!allowedLocalSymbols.includes(symbol)) {
            return `El pasto dalyje esancioje pries @ simboli, rastas neleistinas "${symbol}" simbolis.`;
        }
    }

    for (const symbol of domainPart) {
        if (!allowedDomainSymbols.includes(symbol)) {
            return `El pasto dalyje esancioje uz @ simbolio, rastas neleistinas "${symbol}" simbolis.`;
        }
    }

    if (localPart[0] === '+') {
        return 'Local dalis negali prasideti + simboliu.';
    }

    if (localPart.at(-1) === '+') {
        return 'Local dalis negali baigtis + simboliu.';
    }

    if (localPart.includes('++')) {
        return 'Local dalyje negali buti dvieju is eiles + simboliu.';
    }

    if (localPart[0] === '.') {
        return 'Local dalis negali prasideti . simboliu.';
    }

    if (localPart.at(-1) === '.') {
        return 'Local dalis negali baigtis . simboliu.';
    }

    if (localPart.includes('..')) {
        return 'Local dalyje negali buti dvieju is eiles . simboliu.';
    }

    if (domainPart[0] === '.') {
        return 'Domain dalis negali prasideti . simboliu.';
    }

    if (domainPart.at(-1) === '.') {
        return 'Domain dalis negali baigtis . simboliu.';
    }

    if (domainPart.includes('..')) {
        return 'Domain dalyje negali buti dvieju is eiles . simboliu.';
    }

    const domainSubParts = domainPart.split('.');

    if (domainSubParts.length < 2) {
        return 'Domain dalis nera panasi i pasto paslaugos tiekejo adresa.';
    }

    if (domainSubParts.length > 3) {
        return 'Domain dalyje per daug sudetiniu daliu.';
    }

    return '';
}