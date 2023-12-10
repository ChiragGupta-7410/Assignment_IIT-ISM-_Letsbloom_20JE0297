const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    ISBN: {
      type: Number,
      unique: true,
      required: [true, "Book ISBN Not Added"],
      validate: {
        validator: function (val) {
          return val.toString().length === 13;
        },
        message: (val) => `${val.value} has to be 13 digit`,
      },
    },
    name: {
      type: String,
      required: [true, "Book Name Not Added"],
    },
    description: {
      type: String,
      required: [true, "Book Description Not Added"],
    },
    price: {
      type: Number,
      required: [true, "Book Price Not Added"],
      default: 0,
      maxLength: [10, "Price cannot exceed 10 characters"],
    },
    stock: {
      type: Number,
      required: [true, "Book Stock Not Added"],
      default: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
