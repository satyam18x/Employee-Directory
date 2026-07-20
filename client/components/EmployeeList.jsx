import EmployeeCard from "./EmployeeCard";

/**
 * Displays a list of employees.
 *
 * @param {Object} props - Component properties.
 * @param {Array} props.employeeList - List of employee objects.
 * @returns {JSX.Element}
 */
function EmployeeList({ employeeList }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {employeeList.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
        />
      ))}
    </div>
  );
}

export default EmployeeList;