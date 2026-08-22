import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <input placeholder="Search by employee name or role..." />
      <button>Clear</button>
    </div>
  );
}

export default SearchBar;