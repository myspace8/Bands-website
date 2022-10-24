import { Button } from "./AddtoCartBtn";

export function Card({src, cardTitle, cardtDesc, actualPrice, reducedPrice}) {
  return (
    <div className="card-wrapper">
        <img src={src} alt={cardTitle} />
        <div className="card-content">
          <h1>{cardTitle}</h1>
          <p>{cardtDesc}<span><a className="link" href="/"> Learn more</a></span></p>
          <div className="price">
            <p>{reducedPrice}</p>
            <span>{actualPrice}</span>
          </div>
        </div>
        <Button />
    </div>
  );
}
