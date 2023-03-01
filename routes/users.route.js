import express from "express";
import db from "../mockdb";

const router = express.Router();

//:id? -> idea is optional
router.get("/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;
    let data;
    if (id) {
      if (isNaN(parseInt(id))) {
        res.status(404).json({ msg: "Invalid Id number" });
      }
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
    const newUser = req.body;
    let data = await db.add(newUser);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    let data;
    if (id) {
      if (isNaN(parseInt(id))) {
        res.status(404).json({ msg: "Invalid Id number" });
      }
      const updatedUser = req.body;
      const data = await db.update(id, updatedUser);
      res.json(data);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    let data;
    if (id) {
      if (isNaN(parseInt(id))) {
        res.status(404).json({ msg: "Invalid Id number" });
      }
      const data = await db.remove(id);
      res.json(data);
    }
  } catch (error) {
    next(error);
  }
});

export default router;
