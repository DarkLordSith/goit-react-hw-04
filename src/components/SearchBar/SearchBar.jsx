import PropTypes from "prop-types";
import s from "./SearchBar.module.css";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";

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
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={s.searchBar}>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <div className={s.inputWrapper}>
          <button type="submit" className={s.button}>
            <HiOutlineSearch size={20} />
          </button>
          <input
            type="text"
            className={s.input}
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
        </div>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
