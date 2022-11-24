const ApplicationSchema = require('../models/applications-model');

class ApplicationService {
  async addApplication({ title, text, numberSignatures, userId }) {
    try {
      const adplication = await ApplicationSchema.create({
        title,
        text,
        user: userId,
        numberSignatures,
      });

      if (!adplication) {
        throw new Error('ad is undefined');
      }

      return ad;
    } catch (e) {
      return e;
    }
  }

  // async getAllAds() {
  //   const ads = await AdsSchema.find();
  //   return ads;
  // }

  // async getAd(id) {
  //   const ad = await AdsSchema.findById(id);

  //   return ad;
  // }
}

module.exports = new ApplicationService();
