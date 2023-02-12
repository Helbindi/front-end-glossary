import React, { useRef } from "react";

function SearchBar(props) {
  const inputRef = useRef();

  function handleChange(e) {
    const value = inputRef.current.value;

    if (value) {
      props.setQuery((prev) => {
        return { ...prev, search: value, letter: null, type: null };
      });
    } else {
      props.setQuery((prev) => {
        return { ...prev, search: "", letter: null, type: null };
      });
    }
  }

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search Terms..."
      id="search-bar"
      className="input-searchbar"
      name="text"
      autoComplete="off"
      onChange={handleChange}
    />
  );
}

export default SearchBar;
