import React from "react";
import { useValues } from "../../Context";

function FeedCard({ card }) {
  const { purify } = useValues();
  return (
    <>
      {card.map((ele, index) => {
        let cardID = `card-${++index}`;
        return (
          <div className={`feed__card ${cardID}`} key={index}>
            <div className="imgcontainer">
              <img src={ele.Image} alt="" className="image_card" />
            </div>
            <div className="content">
              <h3
                className="content__title"
                dangerouslySetInnerHTML={purify(ele.Heading)}
              ></h3>
              <p dangerouslySetInnerHTML={purify(ele.Details)}></p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FeedCard;
