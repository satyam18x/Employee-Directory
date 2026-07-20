/**
 * Displays a search input for filtering employees.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.searchKeyword - Current search text.
 * @param {Function} props.handleSearchChange - Updates the search text.
 * @returns {JSX.Element}
 */
function SearchBar({ searchKeyword, handleSearchChange }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search employees by name..."
        value={searchKeyword}
        onChange={handleSearchChange}
        className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
}

export default SearchBar;