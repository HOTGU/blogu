import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();
import "./db.js";

const app = express();

const PORT = process.env.PORT || 5000;

const handleListen = () => {
    console.log(`✅서버가 ${PORT}에서 실행중입니다`);
};

app.use(helmet());
app.use(morgan("dev"));

app.listen(PORT, handleListen);
