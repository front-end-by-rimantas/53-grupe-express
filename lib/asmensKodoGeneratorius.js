export function asmensKodas(lytis, metai, menuo, diena, kiekis) {
    const amzius = Math.ceil(metai / 100);
    const a = (amzius - 19) * 2 + 1 + (lytis === 'vyras' ? 0 : 1);
    const b = metai % 100;
    const c = menuo < 10 ? ('0' + menuo) : menuo;
    const d = diena < 10 ? ('0' + diena) : diena;
    let e = kiekis;
    if (kiekis < 100) {
        e = '0' + e;
    }
    if (kiekis < 10) {
        e = '0' + e;
    }

    const x = '' + a + b + c + d + e;

    const s1 = x[0] * 1 + x[1] * 2 + x[2] * 3 + x[3] * 4 + x[4] * 5 + x[5] * 6 + x[6] * 7 + x[7] * 8 + x[8] * 9 + x[9] * 1;

    if (s1 % 11 !== 10) {
        return x + (s1 % 11);
    }

    const s2 = x[0] * 3 + x[1] * 4 + x[2] * 5 + x[3] * 6 + x[4] * 7 + x[5] * 8 + x[6] * 9 + x[7] * 1 + x[8] * 2 + x[9] * 3;

    if (s2 % 11 !== 10) {
        return x + (s2 % 11);
    }

    return x + '0';
}

console.log(asmensKodas('vyras', 1899, 1, 1, 1));
console.log(asmensKodas('moteris', 1899, 1, 1, 1));
console.log(asmensKodas('vyras', 1981, 5, 31, 99));
console.log(asmensKodas('moteris', 1981, 5, 31, 100));
console.log(asmensKodas('vyras', 2025, 1, 29, 999));
console.log(asmensKodas('moteris', 2025, 1, 29, 17));

// 33309240064
console.log(asmensKodas('vyras', 1933, 9, 24, 6));
