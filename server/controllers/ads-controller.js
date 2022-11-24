const AdService = require('../service/ads-service');
const UserDto = require('../dtos/user-dto');

const userService = require('../service/user-service');
const tokenService = require('../service/token-service');
const { transfromAdsToDto, AdsDto } = require('../dtos/ads-dto');

class AdsController {
  async addAd(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = tokenService.validateRefreshToken(refreshToken);

      const resault = AdService.addAd({
        text: req.body.text,
        title: req.body.title,
        category: req.body.category,
        images: req.files,
        userId: userData.id,
      });

      return res.sendStatus(201);
    } catch (e) {
      next(e);
    }
  }

  async getAds(req, res, next) {
    try {
      const ads = await AdService.getAllAds();
      const adsDto = transfromAdsToDto(ads);
      return res.json(adsDto);
    } catch (e) {
      next(e);
    }
  }

  async getAd(req, res, next) {
    try {
      const { id } = req.params;
      const ad = await AdService.getAd(id);
      const adDto = new AdsDto(ad);

      const user = await userService.getUser(adDto.user);
      const userDto = new UserDto(user);
      adDto.user = userDto;
      res.json(adDto);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new AdsController();
