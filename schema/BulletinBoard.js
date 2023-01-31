const { Schema, model, models } = require("mongoose")

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

module.exports = models.BulletinBoard || model("BulletinBoard", bulletinSchema)
