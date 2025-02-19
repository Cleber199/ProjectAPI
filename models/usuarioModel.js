import mongoose from "mongoose";

const User = mongoose.model("User", {
  nome: String,
  email: String,
  password: String,
});

export default User;
