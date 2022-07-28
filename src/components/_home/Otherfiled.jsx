function Otherfiled({ data }) {
  return (
    <section
      className="block"
      style={{ backgroundImage: `url(${data.Backgroundimage})` }}
    >
      <div
        className="img__container"
        style={{ backgroundImage: `url(${data.Backgroundimage})` }}
      ></div>
      <div className="container">
        <h3>{data.Heading}</h3>
        <div className="buttons">
          <div>
            {data.button1.map((ele, index) => (
              <a className="btn" href={ele.link} key={index}>
                {ele.heading}
              </a>
            ))}
          </div>
          <div>
            {data.button2.map((ele, index) => (
              <a className="btn" href={ele.link} key={index}>
                {ele.heading}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Otherfiled;
