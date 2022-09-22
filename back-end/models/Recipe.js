import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    sections: {
      type: Array,
      default: [],
      required: true,
    },
    ingredients: {
      type: Array,
      default: [],
    },
    viewsCount: {
      type: Number,
      default: 0,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Recipe", RecipeSchema);
