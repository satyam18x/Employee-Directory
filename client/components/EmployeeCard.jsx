/**
 * Displays the details of a single employee.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.employee - Employee information.
 * @returns {JSX.Element}
 */
function EmployeeCard({ employee }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-gray-800">
        {employee.name}
      </h2>

      <p className="text-gray-600 mt-2">
        <span className="font-medium">Role:</span> {employee.role}
      </p>

      <p className="text-gray-600">
        <span className="font-medium">Department:</span>{" "}
        {employee.department}
      </p>

      <button
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
      >
        Edit
      </button>
    </div>
  );
}

export default EmployeeCard;