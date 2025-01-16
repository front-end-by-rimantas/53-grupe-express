import dotenv from 'dotenv';

const envObj = {};

for (const param of process.argv.slice(2)) {
    const parts = param.split('=');
    if (parts.length === 2) {
        const name = parts[0];
        const value = parts[1];

        envObj[name] = value;
    }
}

dotenv.config({
    path: envObj.env,
});

export const PORT = process.env.PORT;
export const PROJECT_LANG = process.env.PROJECT_LANG;