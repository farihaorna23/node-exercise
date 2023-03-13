//Controllers: The functions that actually query the database and connect the dots between our routes
//A Controller is "a software component that manages or directs the flow of data between two entities."
//software components that are connecting the api endpoints to the database. Controlling the flow of data between the two
//Routes will use the controllers to get data

import query from "../db/utils";

const findAll = async () => {
  return await query(
    "SELECT EmployeeID, FirstName, LastName, Title FROM employees"
  );
};

//async/await for the result to come from the datbase
const findOne = async id => {
  return await query(
    "SELECT EmployeeID, FirstName, LastName, Title FROM employees WHERE EmployeeID = ?",
    [id]
  );
};

//will receive an object with all the details
const addOne = async employee => {
  //the infromation from the object will be spread
  return await query("INSERT INTO employees SET ?", [employee]);
};

const updateOne = async (employee, id) => {
  return await query("UPDATE employees SET ? WHERE EmployeeID = ?", [
    employee,
    id
  ]);
};

const removeOne = async id => {
  return await query("DELETE FROM employees WHERE EmployeeID = ?", [id]);
};

export default { findAll, findOne, addOne, updateOne, removeOne };
