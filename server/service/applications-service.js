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
    } catch (err) {
      return err;
    }
  }

  async getAllApplications(page) {
    try {
      const application = await ApplicationSchema.find();
      const end = page * 10;
      const start = end - 10;

      return application.slice(start, end);
    } catch (err) {
      return err;
    }
  }

  async voting({ userId, result, appId }) {
    try {
      const app = await ApplicationSchema.findById(appId);

      const userResaultIndex = app.votedUsers.findIndex(
        (item) => item.user !== userId
      );

      if (userResaultIndex === -1) {
        app.votedUsers.push({
          user: userId,
          result: result,
        });
      } else {
        app.votedUsers[userResaultIndex].result = result;
      }

      if (result === '+') {
        app.numberSignatures += 1;
      } else if (result === '-') {
        app.numberSignatures -= 1;
      }

      return app.numberSignatures;
    } catch (err) {
      return err;
    }
  }
}

module.exports = new ApplicationService();
