const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');
const generatePassword = require('password-generator');
const fs = require('fs');
const path = require('path');

class UserService {
  async registration(email, firstName, lastName, city, dormitory, room) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest(
        `Пользователь с почтовым адресом ${email} уже существует`
      );
    }

    const password = generatePassword(8, false);
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();

    const user = await UserModel.create({
      email,
      password: hashPassword,
      activationLink,
      firstName,
      lastName,
      city,
      dormitory,
      room,
    });

    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`,
      password
    );

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async activate(activationLink) {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest('Неккоректная ссылка активации');
    }
    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw ApiError.BadRequest('Пользователь с таким email не найден');
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest('Неверный пароль');
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }
    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async getAllUsers() {
    const users = await UserModel.find();
    return users;
  }

  async getUser(id) {
    return await UserModel.findById(id);
  }

  async updateAva(userData, img) {
    const user = await UserModel.findOne({ email: userData.email });

    const oldAva = user.avatar;

    if (oldAva) {
      fs.unlink(`uploads/${oldAva}`, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Deleted');
        }
      });
    }

    user.avatar = img;
    user.save();
    return user.avatar;
  }

  async updateUserData({ newUserData, userData }) {
    const LFP = newUserData.LFP.trim();

    const firstName = LFP.split(' ')[0].trim();
    const lastName = LFP.split(' ')[1].trim();

    const user = await UserModel.findOne({ email: userData.email });

    const keysUserData = Object.keys(newUserData);

    keysUserData.forEach((key) => {
      user[key] = newUserData[key];
    });

    const hashPassword = await bcrypt.hash(newUserData.password, 3);

    user.password = hashPassword;
    user.save();

    const userDto = new UserDto(user);

    return userDto;
  }
}

module.exports = new UserService();
