import express from "express";
import db from "../mockdb";

const router = express.Router();

//:id? -> idea is optional
router.get("/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;
    if (isNaN(parseInt(id))) {
      res.status(404).json({ msg: "Invalid Id number" });
    }
    let data;
    if (id) {
      data = await db.getOne(id);
    } else {
      data = await db.getAll();
    }
    res.json({ data });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    // TODO
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    // TODO
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    // TODO
  } catch (error) {
    next(error);
  }
});

export default router;
