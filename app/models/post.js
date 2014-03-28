module.exports = function (compound, Post) {
  // define Post here
  Post.validatesPresenceOf('title', 'body');
};