import { isValidPersonId } from "./isValidPersonId.js";

describe('Nevalidus duomenu tipai', () => {
    test('Nepateikta jokia reiksme', () => {
        expect(isValidPersonId()).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidPersonId(undefined)).toStrictEqual([true, 'Turi buti skaicius']);
    });
    test('Negali buti tekstas', () => {
        expect(isValidPersonId('1')).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidPersonId('vienas')).toStrictEqual([true, 'Turi buti skaicius']);
    });
    test('Negali buti boolean', () => {
        expect(isValidPersonId(true)).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidPersonId(false)).toStrictEqual([true, 'Turi buti skaicius']);
    });
    test('Negali buti array', () => {
        expect(isValidPersonId([])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidPersonId([5])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidPersonId([5, 5])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidPersonId(['1'])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidPersonId(['1', '2'])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidPersonId(['asd'])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidPersonId([true])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidPersonId([false])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidPersonId([false, true])).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidPersonId([{}])).toStrictEqual([true, 'Turi buti skaicius']);
    });
    test('Negali buti object', () => {
        expect(isValidPersonId(null)).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidPersonId({})).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidPersonId({ name: 'Jonas' })).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidPersonId({ age: 99 })).toStrictEqual([true, 'Turi buti skaicius']);
        expect(isValidPersonId({ 99: 99 })).toStrictEqual([true, 'Turi buti skaicius']);
    });
    test('Negali buti function', () => {
        expect(isValidPersonId(isValidPersonId)).toStrictEqual([true, 'Turi buti skaicius']);
    });
    test('Negali buti class', () => {
        expect(isValidPersonId(Date)).toStrictEqual([true, 'Turi buti skaicius']);
    });
});

describe('Validus duomenu tipai, bet ne logiskos reiksmes', () => {
    test('Netinkamas skaitmenu kiekis', () => {
        expect(isValidPersonId(1990101001)).toStrictEqual([true, 'Turi buti 11 skaitmenu']);
        expect(isValidPersonId(199010100142)).toStrictEqual([true, 'Turi buti 11 skaitmenu']);
    });
    test('Netinkama lyties ir amziaus kuriame gyme zmogus, kombinacija (siai dienai)', () => {
        expect(isValidPersonId(79901010014)).toStrictEqual([true, 'Toks zmogus dar negime']);
        expect(isValidPersonId(89901010014)).toStrictEqual([true, 'Toks zmogus dar negime']);
        expect(isValidPersonId(99901010014)).toStrictEqual([true, 'Toks zmogus dar negime']);
    });
    test('Neteisingas menuo', () => {
        expect(isValidPersonId(19913010014)).toStrictEqual([true, 'Neteisingas menuo']);
        expect(isValidPersonId(19999010014)).toStrictEqual([true, 'Neteisingas menuo']);
    });
    test('Neteisinga diena', () => {
        expect(isValidPersonId(19901320014)).toStrictEqual([true, 'Neteisinga diena']);
        expect(isValidPersonId(19902310014)).toStrictEqual([true, 'Neteisinga diena']);
        expect(isValidPersonId(19902300014)).toStrictEqual([true, 'Neteisinga diena']);
        expect(isValidPersonId(19903320014)).toStrictEqual([true, 'Neteisinga diena']);
        expect(isValidPersonId(19904310014)).toStrictEqual([true, 'Neteisinga diena']);
        expect(isValidPersonId(19905320014)).toStrictEqual([true, 'Neteisinga diena']);
        expect(isValidPersonId(19906310014)).toStrictEqual([true, 'Neteisinga diena']);
        expect(isValidPersonId(19907320014)).toStrictEqual([true, 'Neteisinga diena']);
        expect(isValidPersonId(19908320014)).toStrictEqual([true, 'Neteisinga diena']);
        expect(isValidPersonId(19909310014)).toStrictEqual([true, 'Neteisinga diena']);
        expect(isValidPersonId(19910320014)).toStrictEqual([true, 'Neteisinga diena']);
        expect(isValidPersonId(19911310014)).toStrictEqual([true, 'Neteisinga diena']);
        expect(isValidPersonId(19912320014)).toStrictEqual([true, 'Neteisinga diena']);
        expect(isValidPersonId(19901990014)).toStrictEqual([true, 'Neteisinga diena']);
    });
    // test('Neteisinga Vasario menesio, kelemuju metu, diena', () => {
    //     expect(isValidPersonId(19902290014)).toStrictEqual([true, 'Neteisinga kelemuju metu Vasario diena']);
    //     expect(isValidPersonId(30002300014)).toStrictEqual([true, 'Neteisinga kelemuju metu Vasario diena']);
    //     expect(isValidPersonId(60102290014)).toStrictEqual([true, 'Neteisinga kelemuju metu Vasario diena']);
    //     expect(isValidPersonId(60202290014)).toStrictEqual([true, 'Neteisinga kelemuju metu Vasario diena']);
    //     expect(isValidPersonId(60302290014)).toStrictEqual([true, 'Neteisinga kelemuju metu Vasario diena']);
    //     expect(isValidPersonId(60402300014)).toStrictEqual([true, 'Neteisinga kelemuju metu Vasario diena']);
    // });
    test('Einamojo amžiaus, ateities datos yra neleistinos', () => {
        expect(isValidPersonId(52602150014)).toStrictEqual([true, 'Toks zmogus dar negime']);
        expect(isValidPersonId(62602150014)).toStrictEqual([true, 'Toks zmogus dar negime']);
    });
});

describe('Validus duomenys', () => {
    test('vyras, 1899-01-01, 1, k=4', () => {
        expect(isValidPersonId(19901010014)).toStrictEqual([false, '']);
    });

    test('Ok', () => {
        expect(isValidPersonId(29901010015)).toStrictEqual([false, '']);
        expect(isValidPersonId(38105310998)).toStrictEqual([false, '']);
        expect(isValidPersonId(48105311004)).toStrictEqual([false, '']);
        expect(isValidPersonId(52501299992)).toStrictEqual([false, '']);
        expect(isValidPersonId(62501290170)).toStrictEqual([false, '']);
        expect(isValidPersonId(33309240064)).toStrictEqual([false, '']);
    });
});