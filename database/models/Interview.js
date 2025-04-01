import mongoose, { models } from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    level: {
      type: String,
      required: true,
    },
    techstack: {
      type: Array,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    questions: {
      type: Array,
      required: true,
    },
    finalized: {
      type: Boolean,
      default: false,
    },
    coverImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Interview =
  models.Interview || mongoose.model("Interview", interviewSchema);

export default Interview;
