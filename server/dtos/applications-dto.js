class ApplicationDto {
  id;
  title;
  text;
  user;
  numberSignatures;

  constructor(model) {
    this.id = model._id;
    this.user = model.user;
    this.title = model.title;
    this.text = model.text;
    this.numberSignatures = model.numberSignatures;
  }
}

function transfromApplicationsToDto(applications) {
  const applicationsDto = applications.map((app) => new ApplicationDto(app));

  return applicationsDto;
}

module.exports = { ApplicationDto, transfromApplicationsToDto };
