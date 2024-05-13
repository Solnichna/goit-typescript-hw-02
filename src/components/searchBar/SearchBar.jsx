import { toast, Toaster } from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchInput = form.elements.searchInput.value;

    if (searchInput.trim() === "") {
      toast.error("The search field cannot be empty!");
      return;
    }

    if (onSearch) {
      onSearch(searchInput);
    }

    form.reset();
  };

  return (
    <header>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="searchBar-container">
        <input
          className="searchBar-search"
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className="searchBar-button" type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;