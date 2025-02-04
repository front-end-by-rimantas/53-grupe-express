// nuotrauka, pvz.: dydis mb, px min max, failo formatas

/**
 * 
 * @param {number} size byte
 * @param {number} width px
 * @param {number} height px
 * @param {string} fileFormat extension
 * @returns 
 */
export function isValidImage(size, width, height, fileFormat) {
    // size: 1kb..3mb
    // width: 50..2000
    // height: 50..1000
    // extension: png, jpg/jpeg, gif, svg, webp

    // return [true, 'Klaidos pavadinimas'];
    return [false, ''];
}


isValidImage(5_000_000, 5, 5, 'png');

/*
logotipas   - 2,5kb..8kb    -> 15kb
hero        - 1,1..1,5mb    -> 2mb
service     - 150kb..320kb  -> 350kb
*/