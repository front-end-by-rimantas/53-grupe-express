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

    const men = parseInt(sid[3] + sid[4]);
    if (men > 12) {
        return [true, 'Neteisingas menuo'];
    }

    const diena = parseInt(sid[5] + sid[6]);
    if (diena > 31) {
        return [true, 'Neteisinga diena'];
    }

    const maxDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (diena > maxDays[men - 1]) {
        return [true, 'Neteisinga diena'];
    }

    return [false, ''];
}