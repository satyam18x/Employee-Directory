import { useState } from "react";
import EmployeeList from "../components/EmployeeList";
import SearchBar from "../components/SearchBar";
import EmployeeForm from "../components/EmployeeForm";


function App() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const employeeList = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Frontend Developer",
      department: "IT",
    },
    {
      id: 2,
      name: "Priya Singh",
      role: "HR Manager",
      department: "HR",
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Backend Developer",
      department: "IT",
    },
    {
      id: 4,
      name: "Neha Verma",
      role: "UI Designer",
      department: "Design",
    },
  ];

  /**
   * Updates the search keyword whenever the user types.
   *
   * @param {Object} event - Input change event.
   */
  function handleSearchChange(event) {
    setSearchKeyword(event.target.value);
  }

  const filteredEmployeeList = employeeList.filter((employee) =>
    employee.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
  <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="mb-8 text-center text-4xl font-bold text-blue-600">
      Employee Directo
    </h1>

    <EmployeeForm />

    <SearchBar
      searchKeyword={searchKeyword}
      handleSearchChange={handleSearchChange}
    />

    <EmployeeList employeeList={filteredEmployeeList} />
  </div>
);
}

export default App;