import axios from "axios";

const BASE_URL = "http://localhost:5000/employees";

/**
 * Retrieves all employees.
 *
 * @returns {Promise<Array>}
 */
export async function fetchEmployees() {
  const response = await axios.get(BASE_URL);
  return response.data;
}

/**
 * Adds a new employee.
 *
 * @param {Object} employeeDetails
 * @returns {Promise<Object>}
 */
export async function addEmployee(employeeDetails) {
  const response = await axios.post(BASE_URL, employeeDetails);

  return response.data;
}
/**
 * Updates an employee.
 *
 * @param {number} employeeId
 * @param {Object} employeeDetails
 * @returns {Promise<Object>}
 */
export async function updateEmployee(employeeId, employeeDetails) {
  const response = await axios.put(
    `${BASE_URL}/${employeeId}`,
    employeeDetails
  );

  return response.data;
}