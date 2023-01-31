const { Schema, model } = require("mongoose")

const bulletinSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = model("BulletinBoard", bulletinSchema)
