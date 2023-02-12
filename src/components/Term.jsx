import React from "react";

export default function Term(props) {
  return (
    <section className="term">
      <article className="term-header">
        <h2>{props.term.name}</h2>
        <img
          src={props.term.image}
          alt={props.term.name}
          title={props.term.name}
        />
      </article>
      <p className="term-desc">{props.term.desc}</p>
      {props.term.source ? (
        <a className="term-source" href={props.term.source} target="_blank">
          Learn More...
        </a>
      ) : null}
    </section>
  );
}
