const AdsSchema = require('../models/ads-model');
const { formatDate } = require('../helpers/controllers');
const { getAll } = require('./helpers');

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

  async getAllAds(page, category) {
    try {
      const result = await getAll(AdsSchema, category, page);

      // let ads = await AdsSchema.find();
      // ads = ads.filter((item) => item.category === category);
      // const end = page * 10;
      // const start = end - 10;

      // const total = Math.ceil(ads.length / 10);

      // return { ads: ads.slice(start, end), total };

      return { ads: result.arr, total: result.total };
    } catch (err) {
      return err;
    }
  }

  async getAd(id) {
    const ad = await AdsSchema.findById(id);
    return ad;
  }
}

module.exports = new AdService();
