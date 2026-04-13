const mongoose = require("mongoose");

const MoodSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    value: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    mood: {
      type: String,
      enum: [
        "ecstatic",
        "happy",
        "content",
        "calm",
        "neutral",
        "low",
        "sad",
        "distressed",
        "angry",
        "numb",
      ],
      required: true,
    },
    optional_text: {
      type: String,
      trim: true,
      required: false,
    },
    occurred_at: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  { timestamps: true },
);

const MoodModel = mongoose.model("Mood", MoodSchema);

module.exports = {
  MoodSchema,
  MoodModel,
};
