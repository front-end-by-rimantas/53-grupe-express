import { isValidAgeYears } from "./isValidAgeYears.js";

describe('Nevalidus duomenu tipai', () => {
    test('Nepateikta jokia reiksme', () => {
        expect(isValidAgeYears()).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidAgeYears(undefined)).toStrictEqual([true, 'Turi buti skaicius']);
    });
    test('Negali buti tekstas', () => {
        expect(isValidAgeYears('1')).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidAgeYears('vienas')).toStrictEqual([true, 'Turi buti skaicius']);
    });
    test('Negali buti boolean', () => {
        expect(isValidAgeYears(true)).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidAgeYears(false)).toStrictEqual([true, 'Turi buti skaicius']);
    });
    test('Negali buti array', () => {
        expect(isValidAgeYears([])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidAgeYears([5])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidAgeYears([5, 5])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidAgeYears(['1'])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidAgeYears(['1', '2'])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidAgeYears(['asd'])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidAgeYears([true])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidAgeYears([false])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidAgeYears([false, true])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidAgeYears([{}])).toStrictEqual([true, 'Turi buti skaicius']);
    });
    test('Negali buti object', () => {
        expect(isValidAgeYears(null)).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidAgeYears({})).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidAgeYears({ name: 'Jonas' })).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidAgeYears({ age: 99 })).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidAgeYears({ 99: 99 })).toStrictEqual([true, 'Turi buti skaicius']);
    });
    test('Negali buti function', () => {
        expect(isValidAgeYears(isValidAgeYears)).toStrictEqual([true, 'Turi buti skaicius']);
    });
    test('Negali buti class', () => {
        expect(isValidAgeYears(Date)).toStrictEqual([true, 'Turi buti skaicius']);
    });
});

describe('Tinkamas tipas, bet netinkamos reiksmes', () => {
    test('Negali buti NaN', () => {
        expect(isValidAgeYears(NaN)).toStrictEqual([true, 'Turi buti tikras skaicius']);
    });
    test('Negali buti neigiami skaiciai', () => {
        expect(isValidAgeYears(-1)).toStrictEqual([true, 'Turi buti ne maziau 1 (vieno)']);
        expect(isValidAgeYears(-1000)).toStrictEqual([true, 'Turi buti ne maziau 1 (vieno)']);
        expect(isValidAgeYears(-1000000)).toStrictEqual([true, 'Turi buti ne maziau 1 (vieno)']);
        expect(isValidAgeYears(-3.14)).toStrictEqual([true, 'Turi buti ne maziau 1 (vieno)']);
        expect(isValidAgeYears(-314.15926)).toStrictEqual([true, 'Turi buti ne maziau 1 (vieno)']);
    });
    test('Negali buti maziau nei 1', () => {
        expect(isValidAgeYears(0)).toStrictEqual([true, 'Turi buti ne maziau 1 (vieno)']);
        expect(isValidAgeYears(0.000001)).toStrictEqual([true, 'Turi buti ne maziau 1 (vieno)']);
        expect(isValidAgeYears(0.5)).toStrictEqual([true, 'Turi buti ne maziau 1 (vieno)']);
        expect(isValidAgeYears(0.99999)).toStrictEqual([true, 'Turi buti ne maziau 1 (vieno)']);
    });
    test('Negali buti teigiami dešimtainiai skaiciai', () => {
        expect(isValidAgeYears(1.14)).toStrictEqual([true, 'Turi buti teigiamas sveikasis skaicius']);
        expect(isValidAgeYears(22.333)).toStrictEqual([true, 'Turi buti teigiamas sveikasis skaicius']);
    });
    test('Negali buti per didelis', () => {
        expect(isValidAgeYears(1000)).toStrictEqual([true, 'Turi buti adekvatus amzius']);
        expect(isValidAgeYears(131)).toStrictEqual([true, 'Turi buti adekvatus amzius']);
    });
});

describe('Normalus variantai', () => {
    test('', () => {
        expect(isValidAgeYears(1)).toStrictEqual([false, '']);
        expect(isValidAgeYears(77)).toStrictEqual([false, '']);
        expect(isValidAgeYears(130)).toStrictEqual([false, '']);
    });
});
