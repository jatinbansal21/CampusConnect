import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.routes.js";
import groupRoutes from "./routes/groups.routes.js";
import doubtRoutes from "./routes/doubts.routes.js";
import dotenv from "dotenv";
import router from "./routes/cloudinary.router.js";
import projectRouter from "./routes/project.routes.js";
import courseRoutes from "./routes/courses.routes.js";
import userRoutes from "./routes/user.routes.js";
import spamcheckRoutes from "./routes/spamcheck.routes.js";
const app = express();
app.use(cookieParser());

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "https://umiam-kriti24.netlify.app" },
});

dotenv.config();

app.use(
  cors({
    origin: "https://umiam-kriti24.netlify.app",
    credentials: true,
  })
);

app.use(express.json());

io.on("connection", (socket) => {
  socket.on("join", ({ id }) => {
    socket.join(id);
  });

  socket.on("send_msg", (data) => {
    io.to(data.id).emit("msg_rcvd", {
      msg: data.msg,
      sender: data.sender, // Include the sender's name in the data sent to clients
    });
  });

  socket.on("disconnect", () => {});
});

mongoose.connect(process.env.ATLAS_URI);
mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
app.use("/api/apisignreq", router);
app.use("/api/project", projectRouter);
app.use("/", authRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/doubts", doubtRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/user", userRoutes);
app.use("/api/checkspam", spamcheckRoutes);

app.use(function(err, req, res, next){
  console.log(err);
  res.status(500).json({msg: "An internal server error occurred"});
  next("/logout")
});

const port = process.env.PORT || 5050;
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
