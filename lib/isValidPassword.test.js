import { isValidPassword } from './isValidPassword.js';

describe('Nevalidus duomenu tipai', () => {
    test('Nepateikta jokia reiksme', () => {
        expect(isValidPassword()).toBe(false);
        expect(isValidPassword(undefined)).toBe(false);
    });

    test('Negali buti skaicius', () => {
        expect(isValidPassword(0)).toBe(false);
        expect(isValidPassword(1)).toBe(false);
        expect(isValidPassword(56256256)).toBe(false);
    });

    test('Negali buti boolean', () => {
        expect(isValidPassword(true)).toBe(false);
        expect(isValidPassword(false)).toBe(false);
    });

    test('Negali buti objektas', () => {
        expect(isValidPassword({})).toBe(false);
        expect(isValidPassword({ name: 'Jonas' })).toBe(false);
        expect(isValidPassword(null)).toBe(false);
    });

    test('Negali buti array (masyvas, listas, sąrašas)', () => {
        expect(isValidPassword([])).toBe(false);
        expect(isValidPassword([1, 2])).toBe(false);
        expect(isValidPassword(['a', 'b'])).toBe(false);
    });

    test('Negali buti data', () => {
        expect(isValidPassword(new Date())).toBe(false);
    });

    test('Negali buti funkcija', () => {
        expect(isValidPassword(isValidPassword)).toBe(false);
        expect(isValidPassword(() => { })).toBe(false);
    });

    test('Negali buti class', () => {
        expect(isValidPassword(Date)).toBe(false);
    });
});

describe('Slaptazodis yra tekstinis', () => {
    test('Tuscias tekstas', () => {
        expect(isValidPassword('')).toBe(false);
    });

    test('Per trumpas', () => {
        expect(isValidPassword('a'.repeat(5))).toBe(false);
    });

    test('Per ilgas', () => {
        expect(isValidPassword('a'.repeat(101))).toBe(false);
    });

    test('Visi simboliai is didziuju raidziu', () => {
        expect(isValidPassword('AAAAAAAAA')).toBe(false);
        expect(isValidPassword('BBBBBCCCC')).toBe(false);
        expect(isValidPassword('FGHJKKUHY')).toBe(false);
        expect(isValidPassword('HYGVH548562')).toBe(false);
        expect(isValidPassword('HYGVH;<>+')).toBe(false);
    });

    test('Visi simboliai is mazuju raidziu', () => {
        expect(isValidPassword('aaaaaaaa')).toBe(false);
        expect(isValidPassword('bbbbcccc')).toBe(false);
        expect(isValidPassword('dafsgdhdgsfd')).toBe(false);
        expect(isValidPassword('6f5gs84sd5s')).toBe(false);
    });

    test('Visi simboliai is skaiciu', () => {
        expect(isValidPassword('1456251')).toBe(false);
    });

    test('Visi simboliai yra vienodi', () => {
        expect(isValidPassword('kkkkkkkkkk')).toBe(false);
        expect(isValidPassword('            ')).toBe(false);
    });

    // test('Per mazas kompleksiškumas', () => {
    //     expect(isValidPassword('gggihhhijjji')).toBe(false);
    //     expect(isValidPassword('asasassasasasasaas')).toBe(false);
    // });

    test('"Paprastas" slaptazodis', () => {
        expect(isValidPassword('123456')).toBe(false);
        expect(isValidPassword('234567')).toBe(false);
        expect(isValidPassword('345678')).toBe(false);
        expect(isValidPassword('qwerty')).toBe(false);
        expect(isValidPassword('wertyu')).toBe(false);
        expect(isValidPassword('ertyui')).toBe(false);
        expect(isValidPassword('iloveyou')).toBe(false);
        expect(isValidPassword('iLoveyou')).toBe(false);
        expect(isValidPassword('iLoveYou')).toBe(false);
        expect(isValidPassword('jesus')).toBe(false);
        expect(isValidPassword('password')).toBe(false);
        expect(isValidPassword('Password')).toBe(false);
        expect(isValidPassword('admin')).toBe(false);
        expect(isValidPassword('Admin')).toBe(false);
    });
});

describe('Tinkami slaptazodziai', () => {
    test('Minimalus ilgis', () => {
        expect(isValidPassword('asD9sd')).toBe(true);
    });

    test('Maksimalus ilgis', () => {
        expect(isValidPassword('qwE5t'.repeat(20))).toBe(true);
    });

    test('Bazinis kompleksiškumas', () => {
        expect(isValidPassword('5r8GGGGg4sf5659sff')).toBe(true);
        expect(isValidPassword('5r8GGGG584RRRasds???')).toBe(true);
    });
});