const SALT_ROUNDS = 9;
const USER_NOT_FOUND = 'Пользователя с таким логином или паролем не существует';
const PORT = process.env.PORT ?? 3000;
const SECRET_KEY = 'random_secr_key';

module.exports = {
  SALT_ROUNDS,
  USER_NOT_FOUND,
  PORT,
  SECRET_KEY,
};
