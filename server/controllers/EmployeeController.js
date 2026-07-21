const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "../data/Employees.json"
);
/**
 * Reads employee data from the JSON file.
 *
 * @returns {Array}
 */
function readEmployees() {
  const employeeData = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(employeeData);
}

/**
 * Writes employee data to the JSON file.
 *
 * @param {Array} employeeList
 */
function writeEmployees(employeeList) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(employeeList, null, 2)
  );
}
/**
 * Returns all employees.
 *
 * @param {Object} request - Express request object.
 * @param {Object} response - Express response object.
 */
/**
 * Returns all employees.
 *
 * @param {Object} request
 * @param {Object} response
 */
function getEmployees(request, response) {
  const employeeList = readEmployees();

  response.json(employeeList);
}

/**
 * Adds a new employee.
 *
 * @param {Object} request - Express request object.
 * @param {Object} response - Express response object.
 */
/**
 * Adds a new employee.
 *
 * @param {Object} request
 * @param {Object} response
 */
function addEmployee(request, response) {
  const employeeList = readEmployees();

  const newEmployee = {
    id: employeeList.length + 1,
    name: request.body.name,
    role: request.body.role,
    department: request.body.department,
  };

  employeeList.push(newEmployee);

  writeEmployees(employeeList);

  response.status(201).json(newEmployee);
}
/**
 * Updates an existing employee.
 *
 * @param {Object} request - Express request object.
 * @param {Object} response - Express response object.
 */
/**
 * Updates an existing employee.
 *
 * @param {Object} request
 * @param {Object} response
 */
function updateEmployee(request, response) {
  const employeeList = readEmployees();

  const employeeId = Number(request.params.id);

  const employeeIndex = employeeList.findIndex(
    (employee) => employee.id === employeeId
  );

  if (employeeIndex === -1) {
    return response.status(404).json({
      message: "Employee not found.",
    });
  }

  employeeList[employeeIndex] = {
    ...employeeList[employeeIndex],
    ...request.body,
  };

  writeEmployees(employeeList);

  response.json(employeeList[employeeIndex]);
}

module.exports = {
  getEmployees,
  addEmployee,
  updateEmployee,
};