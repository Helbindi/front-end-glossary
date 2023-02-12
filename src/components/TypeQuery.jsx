import React from "react";

function TypeQuery(props) {
  const TYPES = [
    {
      name: "HTML",
      image:
        "https://firebasestorage.googleapis.com/v0/b/front-end-glossary.appspot.com/o/icons%2Fhtml-64.png?alt=media",
    },
    {
      name: "CSS",
      image:
        "https://firebasestorage.googleapis.com/v0/b/front-end-glossary.appspot.com/o/icons%2Fcss-64.png?alt=media",
    },
    {
      name: "JavaScript",
      image:
        "https://firebasestorage.googleapis.com/v0/b/front-end-glossary.appspot.com/o/icons%2Fjavascript-64.png?alt=media",
    },
    {
      name: "HTTPS",
      image:
        "https://firebasestorage.googleapis.com/v0/b/front-end-glossary.appspot.com/o/icons%2Fhttps-60.png?alt=media",
    },
    {
      name: "React",
      image:
        "https://firebasestorage.googleapis.com/v0/b/front-end-glossary.appspot.com/o/icons%2Freact-64.png?alt=media",
    },
  ];

  function handleClick(e) {
    const value = e.target.id;

    if (props.query.type !== value) {
      // update query with new type
      props.setQuery((prev) => {
        return { ...prev, type: value };
      });
    } else {
      // remove type query and focus if already selected
      props.setQuery((prev) => {
        return { ...prev, type: null };
      });
    }
  }
  return (
    <div className="type-query">
      {TYPES.map((type, idx) => (
        <img
          src={type.image}
          alt={type.name}
          title={type.name}
          id={type.name}
          className="type-btn"
          aria-selected={props.query.type === type.name ? true : false}
          key={idx}
          onClick={handleClick}
        ></img>
      ))}
    </div>
  );
}

export default TypeQuery;
