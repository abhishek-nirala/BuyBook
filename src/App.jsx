import "./App.css";
import FootBar from "./Components/Footer/FootBar.jsx";
import Header from "./Components/Header/HeadBar.jsx";
import Home from "./Page/Home/Home.jsx";
import Text from './Components/Text/Text.jsx'
import Book from './Page/BookPage/Book.jsx'
import { BrowserRouter, Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Header /> */}
      {/* <Text/> */}
      <Route path="/" element={<Home/>} />
      <Route path="/book" element={<Book/>} />
      {/* <Route path="/" element={<Header/>} /> */}
      {/* <FootBar /> */}
    </Routes>
    </BrowserRouter>
      {/* <Home/> */}
      
   
    </>
  );
}

export default App;
