import { isValidPassword } from './isValidPassword.js';

describe('Nevalidus duomenu tipai', () => {
    test('Nepateikta jokia reiksme', () => {
        expect(isValidPassword()).toBe(false);
        expect(isValidPassword(undefined)).toBe(false);
    });
});

describe('Slaptazodis yra tekstinis', () => {
    test('Tuscias tekstas', () => {
        expect(isValidPassword('')).toBe(false);
    });
});

describe('Tinkami slaptazodziai', () => {
    test('Minimalus ilgis', () => {
        expect(isValidPassword('asD9sd')).toBe(true);
    });
});