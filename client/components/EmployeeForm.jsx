import { useState } from "react";

/**
 * Displays a form for adding a new employee.
 *
 * @returns {JSX.Element}
 */
function EmployeeForm() {
  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    role: "",
    department: "",
  });

  /**
   * Updates the employee form fields.
   *
   * @param {Object} event - Input change event.
   */
  function handleInputChange(event) {
    const { name, value } = event.target;

    setEmployeeDetails((previousEmployeeDetails) => ({
      ...previousEmployeeDetails,
      [name]: value,
    }));
  }

  /**
   * Handles employee form submission.
   *
   * @param {Object} event - Form submit event.
   */
  function handleEmployeeSubmit(event) {
    event.preventDefault();

    console.log(employeeDetails);

    setEmployeeDetails({
      name: "",
      role: "",
      department: "",
    });
  }

  return (
    <form
      onSubmit={handleEmployeeSubmit}
      className="mb-8 rounded-lg bg-white p-6 shadow-md"
    >
      <h2 className="mb-4 text-2xl font-semibold">
        Add Employee
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employeeDetails.name}
          onChange={handleInputChange}
          className="rounded border p-3"
          required
        />

        <input
          type="text"
          name="role"
          placeholder="Employee Role"
          value={employeeDetails.role}
          onChange={handleInputChange}
          className="rounded border p-3"
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employeeDetails.department}
          onChange={handleInputChange}
          className="rounded border p-3"
          required
        />
      </div>

      <button
        type="submit"
        className="mt-5 rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
      >
        Add Employee
      </button>
    </form>
  );
}

export default EmployeeForm;