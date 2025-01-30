function arYraKeliamiejiMetai(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function isValidPersonId(id) {
    if (typeof id !== 'number') {
        return [true, 'Turi buti skaicius'];
    }

    const sid = '' + id;
    if (sid.length !== 11) {
        return [true, 'Turi buti 11 skaitmenu'];
    }

    if (sid[0] === '7' || sid[0] === '8' || sid[0] === '9') {
        return [true, 'Toks zmogus dar negime'];
    }

    let metai = parseInt(sid[1] + sid[2]);

    if (sid[0] === '1' || sid[0] === '2') {
        metai += 1800;
    } else if (sid[0] === '3' || sid[0] === '4') {
        metai += 1900;
    } else if (sid[0] === '5' || sid[0] === '6') {
        metai += 2000;
    }

    const men = parseInt(sid[3] + sid[4]);
    if (men > 12) {
        return [true, 'Neteisingas menuo'];
    }

    const diena = parseInt(sid[5] + sid[6]);
    if (diena > 31) {
        return [true, 'Neteisinga diena'];
    }

    // if (!arYraKeliamiejiMetai(metai) && men === 2 && diena > 28) {
    //     return [true, 'Neteisinga kelemuju metu Vasario diena'];
    // }

    const maxDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (diena > maxDays[men - 1]) {
        return [true, 'Neteisinga diena'];
    }

    const personBirthday = (new Date(metai, men - 1, diena)).getTime();
    const now = Date.now();

    if (personBirthday > now) {
        return [true, 'Toks zmogus dar negime'];
    }

    return [false, ''];
}