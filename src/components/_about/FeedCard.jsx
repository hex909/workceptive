import React from "react";

function FeedCard({ card }) {
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
              <h3 className="content__title">{ele.Heading}</h3>
              <p>{ele.Details}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FeedCard;
