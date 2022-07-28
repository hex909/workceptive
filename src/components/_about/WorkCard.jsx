export default function WorkCard({ imgSRC, heading, paragrah }) {
  return (
    <div className="card">
      <img src={imgSRC} alt={heading} className="card__image" />
      <h4>{heading}</h4>
      <p>{paragrah}</p>
    </div>
  );
}
