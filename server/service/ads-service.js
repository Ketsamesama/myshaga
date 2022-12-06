const AdsSchema = require('../models/ads-model');
const { formatDate } = require('../helpers/controllers');

class AdService {
  async addAd({ title, text, category, images, userId }) {
    const dataCreated = formatDate(new Date());

    const imagesPath = images.map((item) => {
      return item.filename;
    });

    const ad = await AdsSchema.create({
      title,
      text,
      category,
      user: userId,
      images: imagesPath,
      dataCreated,
    });

    return ad;
  }

  async getAllAds(page) {
    const ads = await AdsSchema.find();
    const end = page * 10;
    const start = end - 10;

    return ads.slice(start, end);
  }

  async getAd(id) {
    const ad = await AdsSchema.findById(id);

    return ad;
  }
}

module.exports = new AdService();
