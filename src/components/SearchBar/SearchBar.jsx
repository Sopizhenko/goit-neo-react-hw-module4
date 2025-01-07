import Styles from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSubmit, onChange }) => {
  const handleOnSumbit = (event) => {
    event.preventDefault();

    if (event.target.elements.search.value.trim() === "") {
      toast.error("Please enter your search query!");
      return;
    }

    const data = new FormData(event.target);
    const searchString = data.get("search");
    onSubmit(searchString);

    event.target.reset();
  };

  const handleChange = () => {
    onChange();
  };

  return (
    <header className={Styles.searchbar}>
      <form onSubmit={handleOnSumbit} className={Styles.searchForm}>
        <input
          className={Styles.searchFormInput}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
        <button type="submit" className={Styles.searchButton}>
          <FaSearch className={Styles.searchIcon} />
        </button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
