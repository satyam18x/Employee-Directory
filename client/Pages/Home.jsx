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

  const filteredEmployeeList = employeeList.filter((employee) =>
    employee.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-center text-4xl font-bold text-blue-600">
        Employee Directory
      </h1>

      <EmployeeForm
        handleEmployeeSubmit={handleEmployeeSubmit}
        selectedEmployee={selectedEmployee}
      />

      <SearchBar
        searchKeyword={searchKeyword}
        handleSearchChange={handleSearchChange}
      />
      <EmployeeList
        employeeList={filteredEmployeeList}
        handleEmployeeEdit={handleEmployeeEdit}
        handleEmployeeDelete={handleEmployeeDelete}
      />
    </div>
  );
}

export default Home;