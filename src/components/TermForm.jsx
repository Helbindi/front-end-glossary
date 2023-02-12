import React, { useEffect, useState } from "react";
import { addTerm } from "../firebase";

function TermForm() {
  const [term, setTerm] = useState({
    name: "",
    type: "html",
    desc: "",
    image: "",
    source: "",
  });

  async function addData() {
    try {
      await addTerm(term);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    addData();
    setTerm({
      name: "",
      type: "html",
      desc: "",
      image: "",
      source: "",
    });
    e.target.reset();
  }

  useEffect(() => {
    switch (term.type.toLowerCase()) {
      case "html":
        setTerm((prev) => {
          return {
            ...prev,
            image:
              "https://firebasestorage.googleapis.com/v0/b/front-end-glossary.appspot.com/o/icons%2Fhtml-64.png?alt=media",
          };
        });
        break;
      case "css":
        setTerm((prev) => {
          return {
            ...prev,
            image:
              "https://firebasestorage.googleapis.com/v0/b/front-end-glossary.appspot.com/o/icons%2Fcss-64.png?alt=media",
          };
        });
        break;
      case "javascript":
        setTerm((prev) => {
          return {
            ...prev,
            image:
              "https://firebasestorage.googleapis.com/v0/b/front-end-glossary.appspot.com/o/icons%2Fjavascript-64.png?alt=media",
          };
        });
        break;
      case "https":
        setTerm((prev) => {
          return {
            ...prev,
            image:
              "https://firebasestorage.googleapis.com/v0/b/front-end-glossary.appspot.com/o/icons%2Fhttps-64.png?alt=media",
          };
        });
        break;
      case "react":
        setTerm((prev) => {
          return {
            ...prev,
            image:
              "https://firebasestorage.googleapis.com/v0/b/front-end-glossary.appspot.com/o/icons%2Freact-64.png?alt=media",
          };
        });
        break;

      default:
        break;
    }
  }, [term.type]);

  useEffect(() => {
    console.log(term);
  }, [term]);

  return (
    <form onSubmit={handleSubmit} className="term-form">
      <input
        type="text"
        name="text"
        placeholder="Name"
        id="input-name"
        autoComplete="off"
        onChange={(e) =>
          setTerm((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
      />

      <select
        name="type"
        id="type"
        defaultValue="html"
        onChange={(e) =>
          setTerm((prev) => {
            return { ...prev, type: e.target.value };
          })
        }
      >
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">Javascript</option>
        <option value="https">HTTPS</option>
        <option value="react">React</option>
      </select>

      <textarea
        name=""
        id=""
        cols="70"
        rows="10"
        placeholder="Description"
        onChange={(e) => {
          setTerm((prev) => {
            return { ...prev, desc: e.target.value };
          });
        }}
      ></textarea>

      <input
        type="text"
        name="text"
        placeholder="Source Src"
        id="source-input"
        autoComplete="off"
        onChange={(e) =>
          setTerm((prev) => {
            return { ...prev, source: e.target.value };
          })
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TermForm;
