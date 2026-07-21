const express = require("express");
const router = express.Router();

const {
  getEmployees,
  addEmployee,
  updateEmployee,
} = require("../controllers/EmployeeController");

router.get("/", getEmployees);

router.post("/", addEmployee);

router.put("/:id", updateEmployee);

module.exports = router;