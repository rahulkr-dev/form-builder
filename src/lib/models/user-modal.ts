import { Schema, model, models, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstName: string;
  lastName: string;
  role:string
}

const UserSchema = new Schema<IUser>(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      // required: true,
      // unique: true,
    },
    photo: {
      type: String
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    role:{
      type: String,
      default: "admin"
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = models?.User || model("User", UserSchema);

export default User;
