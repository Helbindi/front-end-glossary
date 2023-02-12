import React, { useState, useEffect, useRef } from "react";
import { getTerms } from "./firebase";
import Query from "./components/Query";
import Terms from "./components/Terms";

export default function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({
    search: "",
    letter: null,
    type: null,
  });
  const [showButton, setShowButton] = useState(false);

  // Allow users to scroll back to top of document.
  const topScreenRef = useRef();
  function scrollBackTop(e) {
    e.preventDefault();
    topScreenRef.current.scrollIntoView();
  }
  const scrollTopBtn = (
    <button className="top-btn" onClick={(e) => scrollBackTop(e)}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/front-end-glossary.appspot.com/o/icons%2Fscroll-up-64.png?alt=media"
        alt="scroll-up-button"
      />
    </button>
  );

  // Filter the data based on current queries
  const queried = data.filter((term) => {
    return applyQueries(term);
  });

  function applyQueries(term) {
    const queryResults = [];
    if (query.search) {
      const compareTerm = term.name.toLowerCase();
      const compareQuery = query.search.toLowerCase();
      const result = compareTerm.includes(compareQuery);
      queryResults.push(result);
    }
    if (query.letter) {
      const compareTerm = term.name.toLowerCase();
      const compareQuery = query.letter.toLowerCase();
      const result = compareTerm.startsWith(compareQuery);
      queryResults.push(result);
    }
    if (query.type) {
      const compareTerm = term.type.toLowerCase();
      const compareQuery = query.type.toLowerCase();
      const result = compareTerm === compareQuery;
      queryResults.push(result);
    }

    if (queryResults.length >= 1) {
      for (let i = 0; i < queryResults.length; i++) {
        if (queryResults[i] === false) {
          return false;
        }
      }
      return true;
    } else {
      return true;
    }
  }

  const fetchData = async () => {
    try {
      const terms = await getTerms();
      setData(terms);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  window.addEventListener("scroll", (e) => {
    if (window.scrollY >= 300) {
      if (showButton === false) {
        setShowButton(true);
      }
    } else {
      if (showButton === true) {
        setShowButton(false);
      }
    }
  });

  return (
    <div className="glossary" ref={topScreenRef}>
      <h1 className="header-title">Front-End Glossary</h1>
      {showButton && scrollTopBtn}
      <Query query={query} setQuery={setQuery} />
      <Terms data={queried} />
    </div>
  );
}
