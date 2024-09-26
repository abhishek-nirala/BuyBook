import "./Home.css"
import Card from '../../Components/Card/Card.jsx'
import items from '../../assets/items.json'
function Home(){

    return<main>
        <div className="main">
            <div className="container">
            <Card link={items.items[0].Link} tittle={items.items[0].Title} author={items.items[0].author}/>
            <Card className="card1"link={items.items[1].Link} tittle={items.items[1].Title} author={items.items[1].author}/>
            <Card link={items.items[2].Link} tittle={items.items[2].Title} author={items.items[2].author}/>
            <Card link={items.items[0].Link} tittle={items.items[0].Title} author={items.items[0].author}/>
            <Card className="card1"link={items.items[1].Link} tittle={items.items[1].Title} author={items.items[1].author}/>
            <Card link={items.items[2].Link} tittle={items.items[2].Title} author={items.items[2].author}/>
            <Card link={items.items[0].Link} tittle={items.items[0].Title} author={items.items[0].author}/>
            <Card className="card1"link={items.items[1].Link} tittle={items.items[1].Title} author={items.items[1].author}/>
            <Card link={items.items[2].Link} tittle={items.items[2].Title} author={items.items[2].author}/>
            </div>
        </div>
    </main>
}
export default Home