const applicationsService = require('../service/applications-service');
const tokenService = require('../service/token-service');

class ApplicationsContoller {
  async addApplocation(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = tokenService.validateRefreshToken(refreshToken);

      const resault = applicationsService.addApplication({
        text: req.body.text,
        title: req.body.title,
        userId: userData.id,
        numberSignatures: 0,
      });

      return res.sendStatus(201);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ApplicationsContoller();
