import { FaWindowClose } from "react-icons/fa";
function Model({ className, setIsModel }) {
  return (
    <div className="model">
      <div className={`item ${className}`}>
        <div className="head">
          <h3 className="title">Request Call Back</h3>
          <a onClick={() => setIsModel((e) => !e)}>
            <FaWindowClose />
          </a>
        </div>
        <form action="#" className="form">
          <div className="field input">
            <input
              type="text"
              name="name"
              id="name"
              className="input"
              placeholder="Name"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="field input">
            <input
              type="email"
              name="email"
              id="email"
              className="input"
              placeholder="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="field input">
            <input
              type="text"
              name="phone"
              id="phone"
              className="input"
              placeholder="Phone"
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="field">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit" className="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Model;
