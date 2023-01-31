const { Schema, model } = require("mongoose")

const odSchema = Schema(
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
    from: {
      type: Date,
      required: true,
    },
    to: {
      type: Date,
      required: true,
    },
    ciApproved: {
      type: Boolean,
      default: false,
    },
    hodApproved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = model("ODML", odSchema)
