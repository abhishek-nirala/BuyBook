import "./Home.css";
import Card from "../../Components/Card/Card.jsx";
import items from "../../assets/items.json";
function Home() {
  return (
    <main>
      <div className="main">
        <div className="container">
          {items.items.map((item) => {
            return (
              <Card
                key="index"
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
