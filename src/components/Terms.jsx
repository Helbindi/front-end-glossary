import React, { Suspense } from "react";
import { useRef, forwardRef } from "react";
import { useCallback, useState } from "react";
import Term from "./Term";
import { useEffect } from "react";

const LastTerm = forwardRef((props, ref) => {
  return (
    <section className="term" ref={ref}>
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
});

export default function Terms(props) {
  const [count, setCount] = useState(1);

  const termsPerScroll = 5;
  const lastTermIndex =
    termsPerScroll * count >= props.data.length
      ? props.data.length
      : termsPerScroll * count;
  const hasMore = lastTermIndex === props.data.length ? false : true;
  const display = props.data.slice(0, lastTermIndex);

  const observer = useRef(null);
  const lastTermElementRef = useCallback(
    (node) => {
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setCount((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  useEffect(() => {
    setCount(1);
  }, [props]);

  return (
    <section className="glossary-terms">
      <Suspense fallback={<div className="loading-screen">Loading...</div>}>
        {display.map((term, idx) => (
          <>
            {display.length === idx + 1 ? (
              <>
                <LastTerm term={term} key={term.id} ref={lastTermElementRef} />
              </>
            ) : (
              <Term term={term} key={term.id} />
            )}
          </>
        ))}
      </Suspense>
    </section>
  );
}
