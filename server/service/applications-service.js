const ApplicationSchema = require('../models/applications-model');
const { getAll } = require('./helpers');

class ApplicationService {
  async addApplication({ title, text, numberSignatures, userId }) {
    try {
      const application = await ApplicationSchema.create({
        title,
        text,
        user: userId,
        numberSignatures,
      });

      if (!application) {
        throw new Error('application is undefined');
      }
      return application;
    } catch (err) {
      return err;
    }
  }

  async getAllApplications(page, category) {
    try {
      const result = await getAll(ApplicationSchema, category, page);

      return {
        applications: result.arr,
        total: result.total,
      };
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

        app.numberSignatures += result;
      } else {
        if (app.votedUsers[userResaultIndex].result === result) {
        } else {
          app.votedUsers[userResaultIndex].result = result;
          app.numberSignatures += result;
        }
      }

      app.save();
      return app.numberSignatures;
    } catch (err) {
      return err;
    }
  }
}

module.exports = new ApplicationService();
