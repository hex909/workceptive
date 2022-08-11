import { useEffect, useRef } from "react";

import Clients from "../components/_about/Clients";
import RequsetCallback from "../components/_about/RequsetCallback";
import Tabs from "../components/_about/Tabs";
import WorkCard from "../components/_about/WorkCard";
import { useValues } from "../Context";
import gsap from "gsap";

function About() {
  let { aboutData, purify, loading } = useValues();
  let feature_scroll = useRef(null);

  useEffect(() => {
    document.documentElement.querySelector("title").textContent =
      "About - Workceptive";
  }, []);

  let pos = { x: 0, left: 0 };

  const mouseDownHandler = function (e) {
    feature_scroll.current.style.cursor = "grabbing";
    pos = {
      left: feature_scroll.current.scrollLeft,
      x: e.clientX,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    const dx = e.clientX - pos.x;
    feature_scroll.current.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);

    feature_scroll.current.style.cursor = "grab";
  };

  function animateImage() {
    gsap.to(".img__container", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      delay: 0.5,
      duration: 1,
      ease: "power2.ease",
    });
  }

  return (
    !loading &&
    aboutData.success && (
      <>
        <article className="about maxWidth">
          <section className="about__hero">
            {/* <h1 className="title">
            About <span className="company">Workceptive</span>
          </h1> */}
            <div className="about__container">
              <div className="img__container">
                <img
                  className="img__container__placeholder"
                  src={aboutData.data.Section1.Image}
                />
              </div>
              <div className="about__content">
                <p
                  className="shot__para"
                  dangerouslySetInnerHTML={purify(
                    aboutData.data.Section1["Paragraph 1"]
                  )}
                ></p>
                <p
                  className="long__para"
                  dangerouslySetInnerHTML={purify(
                    aboutData.data.Section1["Paragraph 2"]
                  )}
                ></p>
              </div>
            </div>
          </section>

          <section className="works">
            <h2 className="title">
              Our{" "}
              <span
                className="special"
                dangerouslySetInnerHTML={purify(
                  aboutData.data.Section2.Heading
                )}
              ></span>
            </h2>

            <div
              className="cards"
              ref={feature_scroll}
              onMouseDown={mouseDownHandler}
            >
              {aboutData.data.Section2.slide.map((e, i) => {
                return (
                  <WorkCard
                    key={i}
                    imgSRC={e.Image}
                    heading={e.Heading}
                    paragrah={e.Details}
                  />
                );
              })}
            </div>
          </section>

          <section className="tab__container">
            <Tabs tabs={aboutData.data.Section3} />
          </section>

          <Clients clients={aboutData.data.Section4} />
        </article>
        <RequsetCallback />
      </>
    )
  );
}

export default About;
