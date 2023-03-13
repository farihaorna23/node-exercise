import express from "express";
import userRoute from "./users.route";
import employeesRouter from "./employees.route";
// TODO: import router from users.route

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/users", userRoute);
router.use("/employees", employeesRouter);

// TODO: use the imported router to handle all routes matching "/users"

export default router;
