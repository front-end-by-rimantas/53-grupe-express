import { register } from "./register.js";

describe('Netinkamo tipo duomenys', () => {
    test('Nepateikta jokia reiksme', () => {
        expect(register()).toStrictEqual({
            status: 'error',
            msg: 'Duomenys turi buti objekte',
        });
        expect(register(undefined)).toStrictEqual({
            status: 'error',
            msg: 'Duomenys turi buti objekte',
        });
    });

    test('Negali buti skaicius', () => {
        expect(register(0)).toStrictEqual({
            status: 'error',
            msg: 'Duomenys turi buti objekte',
        });
        expect(register(1)).toStrictEqual({
            status: 'error',
            msg: 'Duomenys turi buti objekte',
        });
        expect(register(56256256)).toStrictEqual({
            status: 'error',
            msg: 'Duomenys turi buti objekte',
        });
    });

    test('Negali buti boolean', () => {
        expect(register(true)).toStrictEqual({
            status: 'error',
            msg: 'Duomenys turi buti objekte',
        });
        expect(register(false)).toStrictEqual({
            status: 'error',
            msg: 'Duomenys turi buti objekte',
        });
    });

    test('Negali buti null', () => {
        expect(register(null)).toStrictEqual({
            status: 'error',
            msg: 'Duomenys turi buti objekte',
        });
    });

    test('Negali buti array (masyvas, listas, sąrašas)', () => {
        expect(register([])).toStrictEqual({
            status: 'error',
            msg: 'Duomenys turi buti objekte',
        });
        expect(register([1, 2])).toStrictEqual({
            status: 'error',
            msg: 'Duomenys turi buti objekte',
        });
        expect(register(['a', 'b'])).toStrictEqual({
            status: 'error',
            msg: 'Duomenys turi buti objekte',
        });
    });

    test('Negali buti data', () => {
        expect(register(new Date())).toStrictEqual({
            status: 'error',
            msg: 'Duomenys turi buti objekte',
        });
    });

    test('Negali buti funkcija', () => {
        expect(register(register)).toStrictEqual({
            status: 'error',
            msg: 'Duomenys turi buti objekte',
        });
        expect(register(() => { })).toStrictEqual({
            status: 'error',
            msg: 'Duomenys turi buti objekte',
        });
    });

    test('Negali buti class', () => {
        expect(register(Date)).toStrictEqual({
            status: 'error',
            msg: 'Duomenys turi buti objekte',
        });
    });
});

// describe('Tinkamo tipo, bet neteisingos reiksmes', () => {
//     test('Demo', () => {
//         expect(register()).toStrictEqual({
//             status: 'success',
//             msg: 'Sekminga registracija',
//         });
//     });
// });

describe('Teisingos reiksmes', () => {
    test('Demo', () => {
        expect(register({
            email: 'jonas@jonas.lt',
            password: '5r4gs51ff65resg5rg445fetr84hd5rgt84',
        })).toStrictEqual({
            status: 'success',
            msg: 'Sekminga registracija',
        });
    });
});