const express  = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const feedbackRouter = require("./routes/feedbackRouter");
const fileRouter = require("./routes/fileRouter");
const commentRouter = require("./routes/commentRouter");
app.use(cors({
    origin: "http://localhost:5173",
    methods:["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true
}))
app.use("/user",userRouter);
app.use("/feedback",feedbackRouter);
app.use("/file",fileRouter);
app.use("/comment",commentRouter)