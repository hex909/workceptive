function OurClients({ data }) {
  return (
    <section className="container">
      <div className="contain">
        <h3 className="title">Our Clients</h3>
      </div>
      <div className="clients">
        {data.map((ele, index) => {
          return (
            <div className="client" key={index}>
              <img src={ele.Image} alt={ele.heading} />
            </div>
          );
        })}
      </div>

      <a href="#" className="btn">
        View all
      </a>
    </section>
  );
}

export default OurClients;
