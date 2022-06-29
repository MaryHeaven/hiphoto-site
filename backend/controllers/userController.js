const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const error = require('../error/error');
const { User, Order } = require('../db/models/index');
const { SALT_ROUNDS, SECRET_KEY } = require('../app/variables');

class UserController {
  async rega(req, res, next) {
    const {
      username, firstName, lastName, phone, email, password,
    } = req.body;
    if (!email || !password) {
      return next(error.badRequest('Некорректный email или пароль'));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(error.badRequest('Пользователь с таким email уже существует'));
    }
    const hashPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await User.create({
      username, firstName, lastName, phone, email, password: hashPassword,
    });
    const order = await Order.create({ user_id: user.id });
    const token = jwt.sign({
      id: user.id, username, firstName, lastName, phone, email, password,
    }, process.env.SECRET_KEY, { expiresIn: '24h' });
    return req.json({ token });
  }

  async loga(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(error.internal('Пользователь не найден'));
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(error.internal('Неверный пароль'));
    }
    const token = jwt.sign({ id: user.id, email: user.email, password: user.password }, process.env.SECRET_KEY, { expiresIn: '24h' });
    return req.json({ token });
  }

  async logout(req, res) {

  }
}

export default UserController;
