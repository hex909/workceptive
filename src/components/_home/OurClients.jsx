import gsap from "gsap";
import { useRef } from "react";
import { useLayoutEffect, useState } from "react";

function OurClients({ data }) {
  const total = data.length;
  const [showClient, setShowClient] = useState({
    row1: 1,
    row2: 2,
    row3: 3,
    row4: 4,
    row5: 5,
  });
  const prevImage = useRef(1);
  const prevRow = useRef(1);

  function randomValue() {
    return Math.floor(Math.random() * total);
  }

  function selectRow() {
    let max;
    if (window.innerWidth > 1080) max = 5;
    else if (window.innerWidth > 900) max = 4;
    else max = 3;

    let row = Math.floor(Math.random() * max + 1);

    if (row === prevRow.current) {
      if (row !== max) row += 1;
      else {
        row -= 1;
      }
    }

    return row;
  }

  function setRow() {
    let row = selectRow();
    let value = randomValue();

    if (value === prevImage.current) {
      if (value !== total) value = value + 1;
      else {
        value = value - 1;
      }
    }
    prevRow.current = row;
    prevImage.current = value;

    setShowClient((el) => {
      return { ...el, ["row" + row]: value };
    });
  }

  useLayoutEffect(() => {
    let imageUpdate = setInterval(() => {
      setRow();
    }, 2000);

    return () => {
      clearInterval(imageUpdate);
    };
  }, []);

  return (
    <section className="container">
      <div className="contain">
        <h3 className="title">Our Clients</h3>
      </div>
      <div className="clients">
        <div className="client" data-client="one">
          {data.map((el, index) => {
            return (
              <div
                key={index}
                className="client-image"
                data-is-image={`${index == showClient.row1}`}
              >
                <img src={el.Image} alt={el.heading} />
              </div>
            );
          })}
        </div>
        <div className="client" data-client="two">
          {data.map((el, index) => {
            return (
              <div
                key={index}
                className="client-image"
                data-is-image={`${index == showClient.row2}`}
              >
                <img src={el.Image} alt={el.heading} />
              </div>
            );
          })}
        </div>
        <div className="client" data-client="three">
          {data.map((el, index) => {
            return (
              <div
                key={index}
                className="client-image"
                data-is-image={`${index == showClient.row3}`}
              >
                <img src={el.Image} alt={el.heading} />
              </div>
            );
          })}
        </div>
        <div className="client" data-client="four">
          {data.map((el, index) => {
            return (
              <div
                key={index}
                className="client-image"
                data-is-image={`${index == showClient.row4}`}
              >
                <img src={el.Image} alt={el.heading} />
              </div>
            );
          })}
        </div>
        <div className="client" data-client="five">
          {data.map((el, index) => {
            return (
              <div
                key={index}
                className="client-image"
                data-is-image={`${index == showClient.row5}`}
              >
                <img src={el.Image} alt={el.heading} />
              </div>
            );
          })}
        </div>
      </div>
      <a className="btn" onClick={setRow}>
        View all
      </a>
    </section>
  );
}

export default OurClients;
