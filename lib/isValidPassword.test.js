import { isValidPassword } from './isValidPassword.js';

describe('Nevalidus duomenu tipai', () => {
    test('Negali buti skaicius', () => {
        expect(isValidPassword(0)).toBe(false);
        expect(isValidPassword(1)).toBe(false);
        expect(isValidPassword(56256256)).toBe(false);
    });

    test('Negali buti boolean', () => {
        expect(isValidPassword(true)).toBe(false);
        expect(isValidPassword(false)).toBe(false);
    });

    test('Nepateikta jokia reiksme', () => {
        expect(isValidPassword()).toBe(false);
        expect(isValidPassword(undefined)).toBe(false);
    });
});

// describe('Slaptazodis yra tekstinis', () => {
//     test('Normalus slaptazodis', () => {
//         expect(isValidPassword('dadsfdfhgfgfafad')).toBe(true);
//     });

//     test('Normalus slaptazodis 2', () => {
//         expect(isValidPassword('aaaaaaaa')).toBe(true);
//     });

//     test('Normalus slaptazodis 3', () => {
//         expect(isValidPassword('5g4g15sf26f5esg')).toBe(true);
//     });

//     test('Tuscias slaptazodis', () => {
//         expect(isValidPassword('')).toBe(false);
//     });

//     test('Ne teksto tipas', () => {
//         expect(isValidPassword(2152)).toBe(false);
//     });

//     test('Per ilgas slaptazodis', () => {
//         expect(isValidPassword('qwertyuiop_')).toBe(false);
//     });

//     test('Per ilgas slaptazodis', () => {
//         expect(isValidPassword(5555555)).toBe(false);
//     });
// });