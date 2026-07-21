import { useEffect, useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import SearchBar from "../components/SearchBar";
import {
  fetchEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/employeeService";

/**
 * Displays the Employee Directory page.
 *
 * @returns {JSX.Element}
 */
function Home() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [employeeList, setEmployeeList] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showEmployeeForm, setShowEmployeeForm] = useState(false);

  /**
   * Updates the search keyword.
   *
   * @param {Object} event - Input change event.
   */
  function handleSearchChange(event) {
    setSearchKeyword(event.target.value);
  }

  /**
 * Adds a new employee.
 *
 * @param {Object} employeeDetails
 */
  async function handleEmployeeSubmit(employeeDetails) {
    try {
      if (selectedEmployee) {
        await updateEmployee(
          selectedEmployee.id,
          employeeDetails
        );

        setSelectedEmployee(null);
      } else {
        await addEmployee(employeeDetails);
      }

      loadEmployees();

      setSelectedEmployee(null);
      setShowEmployeeForm(false);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Retrieves employees from the backend.
   */
  async function loadEmployees() {
    try {
      const employeeData = await fetchEmployees();
      setEmployeeList(employeeData);
    } catch (error) {
      console.error("Unable to load employees.", error);
    }
  }
  useEffect(() => {
    loadEmployees();
  }, []);

  /**
  * Selects an employee for editing.
  *
  * @param {Object} employee
  */
  function handleEmployeeEdit(employee) {
    setSelectedEmployee(employee);

    setShowEmployeeForm(true);
  }
  /**
   * Closes the employee form.
   */
  function handleCancel() {
    setSelectedEmployee(null);

    setShowEmployeeForm(false);
  }
  async function handleEmployeeDelete(employeeId) {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!isConfirmed) {
      return;
    }

    try {
      await deleteEmployee(employeeId);

      if (
        selectedEmployee &&
        selectedEmployee.id === employeeId
      ) {
        setSelectedEmployee(null);
      }

      loadEmployees();
    } catch (error) {
      console.error(error);
    }
  }
  /**
 * Displays the employee form.
 */
  function handleOpenForm() {
    setSelectedEmployee(null);

    setShowEmployeeForm(true);
  }

  const filteredEmployeeList = employeeList.filter((employee) =>
    employee.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-6xl p-8">

        {/* Heading */}

        <h1 className="mb-8 text-center text-4xl font-bold text-black">
          Employee Directory
        </h1>

        {/* Search + Button */}

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div className="w-full md:flex-1">
            <SearchBar
              searchKeyword={searchKeyword}
              handleSearchChange={handleSearchChange}
            />
          </div>

          <button
            onClick={handleOpenForm}
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 md:ml-4 md:w-auto"
          >
            Add Employee
          </button>

        </div>

      </div>

      {/* Form */}

      {showEmployeeForm && (
        <EmployeeForm
          handleEmployeeSubmit={handleEmployeeSubmit}
          selectedEmployee={selectedEmployee}
          handleCancel={handleCancel}
        />
      )}

      {/* Cards */}

      <EmployeeList
        employeeList={filteredEmployeeList}
        handleEmployeeEdit={handleEmployeeEdit}
        handleEmployeeDelete={handleEmployeeDelete}
      />

    </div>
  );
}

export default Home;