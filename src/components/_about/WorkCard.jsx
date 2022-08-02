import { useValues } from "../../Context";

export default function WorkCard({ imgSRC, heading, paragrah }) {
  const { purify } = useValues();

  return (
    <div className="card">
      <img src={imgSRC} alt={heading} className="card__image" />
      <h4 dangerouslySetInnerHTML={purify(heading)}></h4>
      <p dangerouslySetInnerHTML={purify(paragrah)}></p>
    </div>
  );
}
