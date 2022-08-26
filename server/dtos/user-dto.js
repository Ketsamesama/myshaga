module.exports = class UserDto {
  email;
  id;
  isActivated;
  firstName;
  lastName;
  city;
  dormitory;
  rooms;
  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
    this.firstName = model.firstName;
    this.lastName = model.lastName;
    this.city = model.city;
    this.dormitory = model.dormitory;
    this.rooms = model.rooms;
  }
};
