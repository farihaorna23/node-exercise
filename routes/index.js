import express from "express";
import userRoute from "./users.route";
// TODO: import router from users.route

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/users", userRoute);

// TODO: use the imported router to handle all routes matching "/users"

export default router;
