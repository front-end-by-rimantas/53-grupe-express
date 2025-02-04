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

describe('Tinkamo tipo, bet neteisingos reiksmes', () => {
    test('Tuscias objektas', () => {
        expect(register({})).toStrictEqual({
            status: 'error',
            msg: 'Netinkama struktura, turi buti email ir password',
        });
    });

    test('Objektas su pertekline informacija', () => {
        expect(register({
            email: 'jonas@jonas.lt',
            password: 'g48s15fe84gsf5gFGHs4f',
            extra: true,
        })).toStrictEqual({
            status: 'error',
            msg: 'Netinkama struktura, turi buti email ir password',
        });
    });

    test('Truksta email', () => {
        expect(register({ password: 'e5rg8s45f65as84g' })).toStrictEqual({
            status: 'error',
            msg: 'Netinkama struktura, turi buti email ir password',
        });
    });

    test('Truksta password', () => {
        expect(register({ email: 'petras@petras.lt' })).toStrictEqual({
            status: 'error',
            msg: 'Netinkama struktura, turi buti email ir password',
        });
    });

    test('Netinkamas email', () => {
        expect(register({
            email: 2154562,
            password: 'a5gs4dh51gf26f5sgf'
        })).toStrictEqual({
            status: 'error',
            msg: 'El pastas turi buti teksto tipo.',
        });

        expect(register({
            email: '#petras@petras.lt',
            password: 'a5gs4dh51gf26f5sgf'
        })).toStrictEqual({
            status: 'error',
            msg: 'El pasto dalyje esancioje pries @ simboli, rastas neleistinas "#" simbolis.',
        });

        expect(register({
            email: 'petras petraitis@petras.lt',
            password: 'a5gs4dh51gf26f5sgf'
        })).toStrictEqual({
            status: 'error',
            msg: 'El pasto dalyje esancioje pries @ simboli, rastas neleistinas " " simbolis.',
        });

        expect(register({
            email: 'petras@petraitis@petras.lt',
            password: 'a5gs4dh51gf26f5sgf'
        })).toStrictEqual({
            status: 'error',
            msg: 'El paste turi buti tik 1 @ simbolis.',
        });
    });

    test('Netinkamas password', () => {
        expect(register({
            email: 'petras@petras.lt',
            password: []
        })).toStrictEqual({
            status: 'error',
            msg: 'Netinkamas slaptazodis',
        });

        expect(register({
            email: 'petras@petras.lt',
            password: ''
        })).toStrictEqual({
            status: 'error',
            msg: 'Netinkamas slaptazodis',
        });

        expect(register({
            email: 'petras@petras.lt',
            password: 'afsghdyjgfjhgsfasghdjfh'
        })).toStrictEqual({
            status: 'error',
            msg: 'Netinkamas slaptazodis',
        });
    });
});

describe('Teisingos reiksmes', () => {
    test('jonas', () => {
        expect(register({
            email: 'jonas@jonas.lt',
            password: '5r4gs51ff65resFVGBHJ5fetr84hd5rgt84',
        })).toStrictEqual({
            status: 'success',
            msg: 'Sekminga registracija',
        });
    });

    test('maryte', () => {
        expect(register({
            email: 'maryte@maryte.lt',
            password: 'ADFG4514-gshd_+?<',
        })).toStrictEqual({
            status: 'success',
            msg: 'Sekminga registracija',
        });
    });
});