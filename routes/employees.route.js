import express from "express";
//importing the functions that are in an object
import employees from "../controllers/employees.controller";

const router = express.Router();

//Creating API Routes for Employee Data
router.get("/:id?", async (req, res, next) => {
  let { id } = req.params; //will be read and parse as a string because they are coming from url
  let data;

  try {
    if (id) {
      if (isNaN(parseInt(id))) {
        res.status(400).json({ msg: "Invalid Id" });
      }
      //get request returns an object in array
      //so we can destructure it to just return the object
      [data] = await employees.findOne(parseInt(id)); //parse it as a number because it will be expecting number as an input
    } else {
      data = await employees.findAll();
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  let employeeDTO = req.body;
  try {
    let data = await employees.addOne(employeeDTO); //will return an object with properties such as insertId
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  let { id } = req.params;
  try {
    let employeeDTO = req.body;
    let data = await employees.updateOne(employeeDTO, parseInt(id));
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  let { id } = req.params;
  try {
    let data = await employees.removeOne(parseInt(id));
    res.json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
