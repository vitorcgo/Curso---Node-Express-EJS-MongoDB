const moongose = require("mongoose");

const userSchema = new moongose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
  },
});

const UserModel = moongose.model('User', userSchema);

module.exports = UserModel