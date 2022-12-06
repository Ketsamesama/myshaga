const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const adsController = require('../controllers/ads-controller');
const applicationsContoller = require('../controllers/applications-contoller');
const router = new Router();
const { body } = require('express-validator');
const { upload } = require('../middlewares/ads-meddleware');

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);

router.get('/ads', adsController.getAds);
router.get('/ads/:id', adsController.getAd);
router.post('/ads', upload.array('files', 4), adsController.addAd);

router.post('/applications', applicationsContoller.addApplocation);
router.get('/applications', applicationsContoller.getApplocations);
router.put('/applicationsvoting', applicationsContoller.voting);

router.patch(
  '/profileupdateavatar',
  upload.single('avatar'),
  userController.updateAvatar
);

router.patch('/profileupdate', userController.updateUserData);

module.exports = router;
