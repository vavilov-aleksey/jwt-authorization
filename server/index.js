require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookiesParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./router");
const errorMiddleware = require("./middlewares/error-middleware");
const PORT = process.env.SERVER_PORT || 5000;

const app = express();
app.use(express.json());
app.use(cookiesParser());
app.use(cors());
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
    try {
        await mongoose.connect(process.env.URL_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
