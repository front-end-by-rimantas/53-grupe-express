import { isValidEmail } from './isValidEmail.js';

describe('Nevalidus duomenu tipai', () => {
    test('Nepateikta jokia reiksme', () => {
        expect(isValidEmail()).toBe('El pastas turi buti teksto tipo.');
        expect(isValidEmail(undefined)).toBe('El pastas turi buti teksto tipo.');
    });

    test('Negali buti skaicius', () => {
        expect(isValidEmail(0)).toBe('El pastas turi buti teksto tipo.');
        expect(isValidEmail(1)).toBe('El pastas turi buti teksto tipo.');
        expect(isValidEmail(56256256)).toBe('El pastas turi buti teksto tipo.');
    });

    test('Negali buti boolean', () => {
        expect(isValidEmail(true)).toBe('El pastas turi buti teksto tipo.');
        expect(isValidEmail(false)).toBe('El pastas turi buti teksto tipo.');
    });

    test('Negali buti objektas', () => {
        expect(isValidEmail({})).toBe('El pastas turi buti teksto tipo.');
        expect(isValidEmail({ name: 'Jonas' })).toBe('El pastas turi buti teksto tipo.');
        expect(isValidEmail(null)).toBe('El pastas turi buti teksto tipo.');
    });

    test('Negali buti array (masyvas, listas, sąrašas)', () => {
        expect(isValidEmail([])).toBe('El pastas turi buti teksto tipo.');
        expect(isValidEmail([1, 2])).toBe('El pastas turi buti teksto tipo.');
        expect(isValidEmail(['a', 'b'])).toBe('El pastas turi buti teksto tipo.');
    });

    test('Negali buti data', () => {
        expect(isValidEmail(new Date())).toBe('El pastas turi buti teksto tipo.');
    });

    test('Negali buti funkcija', () => {
        expect(isValidEmail(isValidEmail)).toBe('El pastas turi buti teksto tipo.');
        expect(isValidEmail(() => { })).toBe('El pastas turi buti teksto tipo.');
    });

    test('Negali buti class', () => {
        expect(isValidEmail(Date)).toBe('El pastas turi buti teksto tipo.');
    });
});

describe('Netinkamas email', () => {
    test('Nera @ simbolio', () => {
        expect(isValidEmail('adsfdgdfasg')).toBe('El paste turi buti tik 1 @ simbolis.');
    });

    test('Yra daugiau nei 1 @ simbolis', () => {
        expect(isValidEmail('aaaa@bbbb@ccc.com')).toBe('El paste turi buti tik 1 @ simbolis.');
    });

    test('Netinkama @ simbolio pozicija', () => {
        expect(isValidEmail('@pastas.com')).toBe('El pasto adresas negali prasideti @ simboliu.');
        expect(isValidEmail('vardenis@')).toBe('El pasto adresas negali baigtis @ simboliu.');
    });

    test('Netinkami naudoti simboliai', () => {
        expect(isValidEmail('vardenis pavardenis@pastas.lt')).toBe('El pasto dalyje esancioje pries @ simboli, rastas neleistinas " " simbolis.');
        expect(isValidEmail('vardenis.pavardenis@pastas lt')).toBe('El pasto dalyje esancioje uz @ simbolio, rastas neleistinas " " simbolis.');
        expect(isValidEmail('#vardenis@pastas.lt')).toBe('El pasto dalyje esancioje pries @ simboli, rastas neleistinas "#" simbolis.');
        expect(isValidEmail('vard%enis@pastas.lt')).toBe('El pasto dalyje esancioje pries @ simboli, rastas neleistinas "%" simbolis.');
        expect(isValidEmail('vardeni^s@pastas.lt')).toBe('El pasto dalyje esancioje pries @ simboli, rastas neleistinas "^" simbolis.');
        expect(isValidEmail('vardenis&@pastas.lt')).toBe('El pasto dalyje esancioje pries @ simboli, rastas neleistinas "&" simbolis.');
        expect(isValidEmail('vardenis@*pastas.lt')).toBe('El pasto dalyje esancioje uz @ simbolio, rastas neleistinas "*" simbolis.');
        expect(isValidEmail('vardenis@pa$stas.lt')).toBe('El pasto dalyje esancioje uz @ simbolio, rastas neleistinas "$" simbolis.');
        expect(isValidEmail('vardenis@pastas!.lt')).toBe('El pasto dalyje esancioje uz @ simbolio, rastas neleistinas "!" simbolis.');
        expect(isValidEmail('vardenis@pastas.?lt')).toBe('El pasto dalyje esancioje uz @ simbolio, rastas neleistinas "?" simbolis.');
        expect(isValidEmail('vardenis@pastas.lt>')).toBe('El pasto dalyje esancioje uz @ simbolio, rastas neleistinas ">" simbolis.');
        expect(isValidEmail('!#$%^&*@pastas.lt')).toBe('El pasto dalyje esancioje pries @ simboli, rastas neleistinas "!" simbolis.');
        expect(isValidEmail('vardenis@!#$%^&*')).toBe('El pasto dalyje esancioje uz @ simbolio, rastas neleistinas "!" simbolis.');
        expect(isValidEmail('!#$%^&*@!#$%^&*')).toBe('El pasto dalyje esancioje pries @ simboli, rastas neleistinas "!" simbolis.');
    });

    test('Local dalyje esanciu + neleistinos kombinacijos', () => {
        expect(isValidEmail('+vardenis@pastas.lt')).toBe('Local dalis negali prasideti + simboliu.');
        expect(isValidEmail('vardenis+@pastas.lt')).toBe('Local dalis negali baigtis + simboliu.');
        expect(isValidEmail('vardenis++2@pastas.lt')).toBe('Local dalyje negali buti dvieju is eiles + simboliu.');
    });

    test('Local dalyje esanciu . (tasku) neleistinos kombinacijos', () => {
        expect(isValidEmail('.vardenis@pastas.lt')).toBe('Local dalis negali prasideti . simboliu.');
        expect(isValidEmail('vardenis.@pastas.lt')).toBe('Local dalis negali baigtis . simboliu.');
        expect(isValidEmail('vardenis..2@pastas.lt')).toBe('Local dalyje negali buti dvieju is eiles . simboliu.');
    });

    test('Domain dalyje esanciu . (tasku) neleistinos kombinacijos', () => {
        expect(isValidEmail('vardenis@.pastas.lt')).toBe('Domain dalis negali prasideti . simboliu.');
        expect(isValidEmail('vardenis@pastas.lt.')).toBe('Domain dalis negali baigtis . simboliu.');
        expect(isValidEmail('vardenis2@pas..tas.lt')).toBe('Domain dalyje negali buti dvieju is eiles . simboliu.');
    });

    test('Domain dalies sudedamuju daliu kiekis', () => {
        expect(isValidEmail('vardenis@lt')).toBe('Domain dalis nera panasi i pasto paslaugos tiekejo adresa.');
        expect(isValidEmail('vardenis@sub.sub.pastas.lt')).toBe('Domain dalyje per daug sudetiniu daliu.');
    });
});

describe('Tinkamas email', () => {
    test('', () => {
        expect(isValidEmail('vardenis@pastas.lt')).toBe('');
        expect(isValidEmail('vardenis@vidinis.pastas.lt')).toBe('');
        expect(isValidEmail('vardenis@kanceliarija.lrs.lt')).toBe('');
        expect(isValidEmail('vardenis@AAAministerija.lrs.lt')).toBe('');
        expect(isValidEmail('vardenis@BBBministerija.lrs.lt')).toBe('');
    });
});