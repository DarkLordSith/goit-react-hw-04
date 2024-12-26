import PropTypes from "prop-types";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    onSubmit(query.trim());
    setQuery("");
  };

  return (
    <header className={s.searchBar}>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <HiOutlineSearch />
        </button>
        <input
          type="text"
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
