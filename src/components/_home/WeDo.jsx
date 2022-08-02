import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { observer } from "../../scripts/lazyLoad";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WeDo({ data, purify }) {
  const [isActive, setIsActive] = useState("1");
  let tl;

  useEffect(() => {
    const images = document.querySelectorAll("[data-src]");
    if (images) images.forEach((image) => observer.observe(image));
  }, []);

  useEffect(() => {
    let to = gsap.to(".wedo__container .title", {
      scrollTrigger: {
        trigger: ".wedo__container .title",
        start: "bottom 70%",
      },
      opacity: 1,
      immediateRender: false,
      duration: 1,
      ease: "back.out(1.7)",
      y: 0,
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <article className="wedo">
      <div className="wedo__container">
        <h3
          className="title"
          dangerouslySetInnerHTML={purify(data.Heading)}
          style={{ opacity: 0, transform: "translateY(15px)" }}
        ></h3>
        {/* <img src="/image/logo-only.png" alt="logo image" /> */}
      </div>

      <section className="accordion">
        <ul className="items-container">
          {data.data.map((element, index) => {
            let i = index + 1;
            return (
              <AccordionItem
                key={i}
                index={i}
                setIsActive={setIsActive}
                isActive={isActive}
                section={element}
                purify={purify}
              />
            );
          })}
        </ul>
      </section>
    </article>
  );
}

function AccordionItem({ index, setIsActive, isActive, section, purify }) {
  return (
    <li className={`item ${isActive === index.toString() ? "is-active" : ""}`}>
      <div className="top">
        <h3>
          <button
            data-accordion={index}
            onClick={(e) => {
              let data = e.currentTarget.dataset.accordion;
              setIsActive((prevData) => (data !== prevData ? data : "-1"));
            }}
          >
            <IoIosArrowUp />
            {/* <div>
              <img src={imgSRC} alt="" className="image" />
            </div> */}
            <span dangerouslySetInnerHTML={purify(section.Heading)}></span>
          </button>
        </h3>
      </div>

      <div className="bottom">
        <div className="para-c">
          <p dangerouslySetInnerHTML={purify(section.Details)}></p>
        </div>
        <img
          data-src={section.Image}
          alt="window logo"
          className="bottom_img"
        />
      </div>
    </li>
  );
}

export default WeDo;
