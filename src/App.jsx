import "./App.css";
import FootBar from "./Components/Footer/FootBar.jsx";
import Header from "./Components/Header/HeadBar.jsx";
import Home from "./Page/Home/Home.jsx";
import Text from './Components/Text/Text.jsx'

function App() {
  return (
    <>
      <Header />
      <Text/>
      <Home/>
      <FootBar />
    </>
  );
}

export default App;
