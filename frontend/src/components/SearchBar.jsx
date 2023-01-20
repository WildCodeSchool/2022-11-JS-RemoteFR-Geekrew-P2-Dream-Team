import PropTypes from "prop-types";

function SearchBar({ search, setSearch }) {
  SearchBar.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
  };

  return (
    <div className="flex bg-searchBarCloud bg-center bg-no-repeat h-20 bg-contain px-4 py-1 m-2 justify-center w-full">
      <input
        className="h-1/3  flex self-end rounded-md bg-searchBarIcon bg-no-repeat bg-right text-black"
        type="text"
        id="search-input"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Quel rêve recherchez vous ?"
      />
    </div>
  );
}

export default SearchBar;
