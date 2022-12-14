const applicationsService = require('../service/applications-service');
const tokenService = require('../service/token-service');
const { transfromApplicationsToDto } = require('../dtos/applications-dto');

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
    } catch (err) {
      next(err);
    }
  }

  async getApplocations(req, res, next) {
    try {
      const result = await applicationsService.getAllApplications(
        req.query.page,
        req.query.currentCategory
      );

      const applicationsDto = transfromApplicationsToDto(result.applications);
      res.json({ applications: applicationsDto, total: result.total });
    } catch (err) {
      next(err);
    }
  }

  async voting(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = tokenService.validateRefreshToken(refreshToken);

      const { result, appId } = req.body;

      const newResult = await applicationsService.voting({
        userId: userData.id,
        result,
        appId,
      });

      res.json(newResult);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ApplicationsContoller();
