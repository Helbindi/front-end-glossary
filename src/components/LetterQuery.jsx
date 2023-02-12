import React from "react";

function LetterQuery(props) {
  const letters = [];
  for (let i = 65; i <= 90; i++) {
    const char = String.fromCharCode(i);
    letters.push(char);
  }

  function handleClick(e) {
    const value = e.target.id;

    if (props.query.letter !== value) {
      // update query with new letter
      props.setQuery((prev) => {
        return { ...prev, letter: value };
      });
    } else {
      // remove letter query and focus if already selected
      props.setQuery((prev) => {
        return { ...prev, letter: null };
      });
      e.target.blur();
    }
  }

  return (
    <div className="letter-query">
      {letters.map((letter, idx) => (
        <button
          id={letter}
          className="letter-btn"
          aria-selected={props.query.letter === letter ? true : false}
          key={idx}
          onClick={handleClick}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default LetterQuery;
