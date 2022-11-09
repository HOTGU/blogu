import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let mongoUrl;

if (process.env.NODE_ENV === "development") {
    mongoUrl = process.env.DEV_MONGO_URL;
}

mongoose.connect(mongoUrl);

const db = mongoose.connection;

const error = () => {
    console.log("❌DB연결 실패");
};
const success = () => {
    console.log(`✅${mongoUrl}에 DB연결 성공`);
};

db.on("error", error);
db.once("open", success);
