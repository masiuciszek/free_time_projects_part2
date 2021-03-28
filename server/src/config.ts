import * as dotenv from "dotenv";
dotenv.config();

export default {
  jwt_scrert: process.env.JWT_SECRET ?? "",
};
