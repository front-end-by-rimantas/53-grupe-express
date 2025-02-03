import express from 'express';
import { PORT, PROJECT_LANG } from './env.js';
import { isValidEmail } from './lib/isValidEmail.js';
import { isValidPassword } from './lib/isValidPassword.js';
import { homePage } from './src/pages/home.js';
import { register } from './src/api/register.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  return res.send('Labas rytas, Lietuva! Ką tu? Ką vakare?');
});

app.get('/register', (req, res) => {
  return res.send(homePage());
});

app.post('/api/register', (req, res) => {
  const result = register(req.body);

  return res.json(result);

  // const { email, password } = req.body;

  // const errEmail = isValidEmail(email);
  // const errPassword = isValidPassword(password);

  // if (errEmail) {
  //   return res.json({
  //     status: 'error',
  //     msg: errEmail,
  //   });
  // }

  // if (errPassword) {
  //   return res.json({
  //     status: 'error',
  //     msg: errPassword,
  //   });
  // }

  // return res.json({
  //   status: 'success',
  //   msg: 'Sekminga registracija',
  // });
});

app.listen(PORT, () => {
  console.log(`Projektas veikia: http://localhost:${PORT}`);
});