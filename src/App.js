import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/home/Home";
import Navbar from './components/navbar/Navbar';
import Searchbar from './components/searchbar/Searchbar';
import Best from './components/best/Best';
import BestDetail from './components/best/BestDetail';
import Footer from "./components/footer/Footer";

function App() {
  const location = useLocation();
  const searchbar = location.pathname === '/';

  return (
    <div className="App">
      <header className="fixed top-0 w-full z-[3]">
        {searchbar && <Searchbar />}
        <Navbar onOffSearchbar={searchbar} />
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best"  element={<Best />}/>
        <Route path="/best/:id"  element={<BestDetail style={{backgroundColor: '#F8F5EE'}} />}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
