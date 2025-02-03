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

    return {
        status: 'success',
        msg: 'Sekminga registracija',
    };
}