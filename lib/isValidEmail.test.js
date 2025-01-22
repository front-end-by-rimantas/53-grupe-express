import { isValidEmail } from './isValidEmail.js';

describe('Nevalidus duomenu tipai', () => {
    test('Nepateikta jokia reiksme', () => {
        expect(isValidEmail()).toBe(false);
        expect(isValidEmail(undefined)).toBe(false);
    });

    test('Negali buti skaicius', () => {
        expect(isValidEmail(0)).toBe(false);
        expect(isValidEmail(1)).toBe(false);
        expect(isValidEmail(56256256)).toBe(false);
    });

    test('Negali buti boolean', () => {
        expect(isValidEmail(true)).toBe(false);
        expect(isValidEmail(false)).toBe(false);
    });

    test('Negali buti objektas', () => {
        expect(isValidEmail({})).toBe(false);
        expect(isValidEmail({ name: 'Jonas' })).toBe(false);
        expect(isValidEmail(null)).toBe(false);
    });

    test('Negali buti array (masyvas, listas, sąrašas)', () => {
        expect(isValidEmail([])).toBe(false);
        expect(isValidEmail([1, 2])).toBe(false);
        expect(isValidEmail(['a', 'b'])).toBe(false);
    });

    test('Negali buti data', () => {
        expect(isValidEmail(new Date())).toBe(false);
    });

    test('Negali buti funkcija', () => {
        expect(isValidEmail(isValidEmail)).toBe(false);
        expect(isValidEmail(() => { })).toBe(false);
    });

    test('Negali buti class', () => {
        expect(isValidEmail(Date)).toBe(false);
    });
});

describe('Netinkamas email', () => {
    test('Nera @ simbolio', () => {
        expect(isValidEmail('adsfdgdfasg')).toBe(false);
    });

    test('Yra daugiau nei 1 @ simbolis', () => {
        expect(isValidEmail('aaaa@bbbb@ccc.com')).toBe(false);
    });

    // test('galune .lt arba .com', () => {
    //     expect(isValidEmail('adsfdgdfasg.com')).toBe(false);
    //     expect(isValidEmail('adsfdgdfasg.lt')).toBe(false);
    // });
});

describe('Tinkamas email', () => {
    test('', () => {
        expect(isValidEmail('vardenis@pastas.lt')).toBe(true);
        expect(isValidEmail('vardenis@vidinis.pastas.lt')).toBe(true);
        expect(isValidEmail('vardenis@kanceliarija.lrs.lt')).toBe(true);
        expect(isValidEmail('vardenis@AAAministerija.lrs.lt')).toBe(true);
        expect(isValidEmail('vardenis@BBBministerija.lrs.lt')).toBe(true);
    });
});