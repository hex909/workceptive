import { gsap } from "gsap";
import { useState } from "react";
import { useLayoutEffect } from "react";

function Hero({ data }) {
  return (
    <article className="hero">
      <section className="hero__one">
        <div className="container">
          <h1>{data.Right.Heading}</h1>
          <p>{data.Right.Details}</p>
        </div>
      </section>
      <section className="hero__two">
        <img className="image" src={data.Right.Backgroundimage} alt="" />
      </section>
    </article>
  );
}

export default Hero;
