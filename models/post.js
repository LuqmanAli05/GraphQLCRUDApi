import mongoose from "mongoose"


const postSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default  mongoose.model("Post", postSchema)