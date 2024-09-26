import "./card.css";

function Card({ link, tittle, author }) {
  return (
    <div className="container">
      <div className="imgDiv">
        <img src={link} alt="" />
      <div className="text">
        <p>{tittle}</p>
        <p>{author}</p>
      </div>
      </div>
    </div>
  );
}
export default Card;
