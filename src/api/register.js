import { isValidEmail } from "../../lib/isValidEmail.js";
import { isValidPassword } from "../../lib/isValidPassword.js";

export function register(obj) {
    if (typeof obj !== 'object'
        || obj === null
        || Array.isArray(obj)
        || obj.constructor.name !== 'Object'
    ) {
        return {
            status: 'error',
            msg: 'Duomenys turi buti objekte',
        };
    }

    if (Object.keys(obj).length !== 2) {
        return {
            status: 'error',
            msg: 'Netinkama struktura, turi buti email ir password',
        };
    }

    const { email, password } = obj;

    if (email === undefined || password === undefined) {
        return {
            status: 'error',
            msg: 'Truksta duomenu, turi buti email ir password',
        };
    }

    const emailMsg = isValidEmail(email);
    if (emailMsg !== '') {
        return {
            status: 'error',
            msg: emailMsg,
        };
    }

    if (!isValidPassword(password)) {
        return {
            status: 'error',
            msg: 'Netinkamas slaptazodis',
        };
    }

    // jau panaudoto email tikrinimas
    // irasoma i duombaze

    return {
        status: 'success',
        msg: 'Sekminga registracija',
    };
}