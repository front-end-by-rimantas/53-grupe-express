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

export const PORT = process.env.PORT || 3000;
export const PROJECT_LANG = process.env.PROJECT_LANG || 'en';
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "user";
export const DB_PASS = process.env.DB_PASS || "";
export const DB_PORT = process.env.DB_PORT || 1111;
export const XXXX_API_KEY = process.env.XXXX_API_KEY || "";