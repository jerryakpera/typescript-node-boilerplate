import dotenv from 'dotenv-safe';
import add from '@src/math/add';

dotenv.config();

console.log(process.env.MY_NAME);
const sum = add(1, 5);
console.log({ sum });
