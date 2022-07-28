import React from "react";

function RequsetCallback() {
  return (
    <section className="request">
      <h4 className="title">Any Questions. Request a call back.</h4>
      <div className="form__container">
        <form action="#">
          <input type="text" name="name" id="name" placeholder="John Doe" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="+917022151541"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default RequsetCallback;
