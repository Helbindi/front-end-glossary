import React from "react";
import SearchBar from "./SearchBar";
import LetterQuery from "./LetterQuery";
import TypeQuery from "./TypeQuery";

function Query(props) {
  return (
    <div className="queries">
      <SearchBar query={props.query} setQuery={props.setQuery} />
      <LetterQuery query={props.query} setQuery={props.setQuery} />
      <TypeQuery query={props.query} setQuery={props.setQuery} />
    </div>
  );
}

export default Query;
