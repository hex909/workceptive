import FeedCard from "./FeedCard";

function Clients({ clients }) {
  return (
    <section className="clients">
      <h2 className="title">
        Feedback from Our <span className="special">{clients.Heading}</span>
      </h2>
      <div className="feed">
        <FeedCard card={clients.Card} />
      </div>
    </section>
  );
}

export default Clients;
