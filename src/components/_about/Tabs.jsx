import { useState } from "react";
import { useValues } from "../../Context";
function Tabs({ tabs }) {
  const { purify } = useValues();

  const [tab, setTab] = useState("tab-01");

  return (
    <>
      <div className="tabs is-fullwidth is-large is-toggle">
        <ul>
          {tabs.Heading.map((ele, index) => {
            let tabID = `tab-0${++index}`;
            return (
              <li
                key={index}
                className={`${tab === tabID && "is-active"}`}
                data-tab={tabID}
              >
                <a onClick={(e) => setTab(e.target.parentNode.dataset.tab)}>
                  {ele.heading}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="tab__content">
        {tabs.Details.map((ele, index) => {
          let tabID = `tab-0${++index}`;

          return (
            <div
              key={index}
              className={`content ${tab === tabID && "is-active"}`}
            >
              <div>
                <p dangerouslySetInnerHTML={purify(ele["Paragraph 1"])}></p>
              </div>
              <div className="last">
                <p dangerouslySetInnerHTML={purify(ele["Paragraph 2"])}></p>
              </div>
              <img src={ele.Image} alt="" className="image_bg" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Tabs;
