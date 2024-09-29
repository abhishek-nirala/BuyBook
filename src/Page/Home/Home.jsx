import "./Home.css";
import Card from "../../Components/Card/Card.jsx";
import items from "../../assets/items.json";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  function handleOnclick(index) {
    console.log("in handleOnClick");
    navigate("/book");
    console.log("index clicked : ", index);
    console.log("out handleOnClick");
  }
  return (
    <main>
      <div className="main">
        <div className="container">
          {items.items.map((item, index) => {
            return (
              <Card
                onClick={() => handleOnclick(index)} //its a prop sending it to the
                key={index}
                link={item.Link}
                tittle={item.Title}
                author={item.author}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
export default Home;
