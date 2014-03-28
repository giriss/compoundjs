module.exports = function (compound, User) {
  // define User here
  User.validatesPresenceOf('name', 'age', 'email');
};