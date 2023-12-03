import { config } from "dotenv";

config();

export const env = {
  PORT: process.env.PORT || 4000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/mongodb",
};
