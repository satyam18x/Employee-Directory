/**
 * Displays the details of a single employee.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.employee - Employee information.
 * @returns {JSX.Element}
 */
function EmployeeCard({
  employee,
  handleEmployeeEdit,
  handleEmployeeDelete,
}) {
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
<div className="mt-4 flex gap-3">
  <button
    onClick={() => handleEmployeeEdit(employee)}
    className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
  >
    Edit
  </button>

  <button
    onClick={() =>
      handleEmployeeDelete(employee.id)
    }
    className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
  >
    Delete
  </button>
</div>
    </div>
  );
}

export default EmployeeCard;