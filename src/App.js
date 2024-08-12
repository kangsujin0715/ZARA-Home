import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/home/Home";
import Navbar from './components/navbar/Navbar';
import Searchbar from './components/searchbar/Searchbar';
import Best from './components/best/Best';
import BestDetail from './components/best/BestDetail';
import Footer from "./components/footer/Footer";
// import Songs from "./routes/songs/Songs";
// import SongDetail from "./routes/songs/SongDetail";
// import Breads from "./routes/breads/Breads";
// import ChicorBoard from "./routes/chicor_board/ChicorBoard";
// import Skincare from "./routes/skincare/Skincare";
// import Makeup from "./routes/makeup/Makeup";
// import SidebarLayout from "./components/sidebar_layout/SidebarLayout";
// import BestItem from "./components/best/BestItem";

function App() {
  const location = useLocation();
  const searchbar = location.pathname === '/';

  return (
    <div className="App">
      <header className="fixed top-0 w-full z-[2]">
        {searchbar && <Searchbar />}
        <Navbar onOffSearchbar={searchbar} />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/best"  element={ <Best /> }/>
        <Route path="/best/:id"  element={ <BestDetail style={{backgroundColor: '#F8F5EE'}} /> }/>





 {/* <Route path="/breads" element={<Breads />} /> */}
{/* 
           <Route path="/breads"  element={ <Breads /> }/>
          <Route path="/chicor_board"  element={ <ChicorBoard /> }/>
          <Route path="/skincare"  element={
            <SidebarLayout>
              <Skincare />
            </SidebarLayout>
           }  />
          <Route path="/makeup"  element={
              <SidebarLayout>
                <Makeup />
              </SidebarLayout>
           }  /> */}
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
