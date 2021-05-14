const dotenv = require('dotenv');
dotenv.config();

export const defaultTimeout: number = 5000;
export const baseAuthUrl: string = process.env.TEST_API_URL;
export const validUser: string = process.env.VALID_USER;
export const validPass: string = process.env.VALID_PASS;
export const testUser: string = null;
export const testPass: string = null;