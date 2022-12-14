module.exports = class UserDto {
  email;
  id;
  isActivated;
  firstName;
  lastName;
  city;
  dormitory;
  room;
  avatar;
  university;

  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
    this.firstName = model.firstName;
    this.lastName = model.lastName;
    this.city = model.city;
    this.dormitory = model.dormitory;
    this.room = model.room;
    this.avatar = model.avatar
      ? `${process.env.API_URL}/static/${model.avatar}`
      : null;
    this.university = model.university;
  }
};
