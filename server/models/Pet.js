let mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Pet name is required"],
      minlength: [3, "Pet name needs at least 3 characters"],
      unique: true
      // dropDups: true
    },
    type: {
      type: String,
      require: [true, "Pet type is required"],
      minlength: [3, "Pet type needs at least 3 characters"]
    },
    description: {
      type: String,
      require: [true, "Pet description is required"],
      minlength: [3, "Pet description needs at least 3 characters"]
    },
    skill: {
      type: Array,
      validate: [arrayLimit, '{PATH} exceeds the limit of 3']
    },
    like: {
      type: Number,
      default: 0
    }
    // _Pets: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Pet'
    // }]
  },
  { timestamps: true }
);
// create an object that contains methods for mongoose to interface with MongoDB
function arrayLimit(val) {
  return val.length <= 3;
}
PetSchema.plugin(uniqueValidator, { message: 'Error, {PATH} needs to be unique.' });
const Pet = mongoose.model("Pet", PetSchema);
