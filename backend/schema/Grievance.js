const { Schema, model } = require("mongoose")

const grievanceSchema = Schema(
  {
    type: {
      type: String,
      required: true,
    },
    netId: {
      type: String,
      required: true,
    },
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

module.exports = model("Grievance", grievanceSchema)
