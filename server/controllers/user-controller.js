const userService = require('../service/user-service');
const tokenService = require('../service/token-service');
const UserDto = require('../dtos/user-dto');

class UserController {
  async registration(req, res, next) {
    try {
      const { email, firstName, lastName, city, dormitory, room } = req.body;
      const userData = await userService.registration(
        email,
        firstName,
        lastName,
        city,
        dormitory,
        room
      );
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json({
        accessToken: userData.accessToken,
        user: userData.user,
      });
    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json({
        accessToken: userData.accessToken,
        user: userData.user,
      });
    } catch (err) {
      next(err);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (err) {
      next(err);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (err) {
      next(err);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json({
        accessToken: userData.accessToken,
        user: userData.user,
      });
    } catch (err) {
      next(err);
    }
  }

  async updateAvatar(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = tokenService.validateRefreshToken(refreshToken);

      const userAva = await userService.updateAva(userData, req.file.filename);

      const puthAva = `${process.env.API_URL}/static/${userAva}`;
      res.json({ avatar: puthAva });
    } catch (err) {
      next(err);
    }
  }

  async updateUserData(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = tokenService.validateRefreshToken(refreshToken);

      const user = await userService.updateUserData({
        newUserData: req.body.user,
        userData,
      });

      res.json(user);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();
