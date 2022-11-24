class AdsDto {
  email;
  id;
  user;
  title;
  text;
  category;
  images;
  dataCreated;
  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.user = model.user;
    this.title = model.title;
    this.text = model.text;
    this.category = model.category;
    this.images = convertPathImg(model.images);
    this.dataCreated = model.dataCreated;
  }
}

function convertPathImg(images) {
  const convertImages = images.map(
    (img) => `${process.env.API_URL}/static/${img}`
  );
  return convertImages;
}

function transfromAdsToDto(ads) {
  const adsDto = ads.map((ad) => new AdsDto(ad));

  return adsDto;
}

module.exports = { transfromAdsToDto, AdsDto, convertPathImg };
