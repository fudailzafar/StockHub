import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://fudailzafar:zafarfudail@cluster0.rzlgc.mongodb.net/blog-app"
  );
  console.log("DB Connected");
};
