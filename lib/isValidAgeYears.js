/**
 * Amžiaus (metais) validavimas.
 * @param {number} age Amžius
 * @returns {[boolean, string]} Pirmasis masyvo narys reiškia: ar yra klaida; antrasis - klaidos žinutė.
 */
export function isValidAgeYears(age) {
    if (typeof age !== 'number') {
        return [true, 'Turi buti skaicius'];
    }

    if (isNaN(age)) {
        return [true, 'Turi buti tikras skaicius'];
    }

    if (age < 1) {
        return [true, 'Turi buti ne maziau 1 (vieno)'];
    }

    if (!Number.isInteger(age)) {
        return [true, 'Turi buti teigiamas sveikasis skaicius'];
    }

    if (age > 130) {
        return [true, 'Turi buti adekvatus amzius'];
    }

    return [false, ''];
}
