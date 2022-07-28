import { useLayoutEffect } from "react";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { observer } from "../../scripts/lazyLoad";

function WeDo({ data }) {
  const [isActive, setIsActive] = useState("1");

  useEffect(() => {
    const images = document.querySelectorAll("[data-src]");
    if (images) images.forEach((image) => observer.observe(image));
  }, []);

  return (
    <article className="wedo">
      <div className="wedo__container">
        <h3 className="title">{data.Heading}</h3>
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
              />
            );
          })}
        </ul>
      </section>
    </article>
  );
}

function AccordionItem({ index, setIsActive, isActive, section }) {
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
            {section.Heading}
          </button>
        </h3>
      </div>

      <div className="bottom">
        <div className="para-c">
          <p>{section.Details}</p>
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
