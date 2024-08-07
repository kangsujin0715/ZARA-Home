import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/home/Home";
import Navbar from './components/navbar/Navbar'
import Searchbar from './components/searchbar/Searchbar'
import BestDetail from './components/best/BestDetail'
import Songs from "./routes/songs/Songs";
import SongDetail from "./routes/songs/SongDetail";
import Breads from "./routes/breads/Breads";
import ChicorBoard from "./routes/chicor_board/ChicorBoard";
import Skincare from "./routes/skincare/Skincare";
import Makeup from "./routes/makeup/Makeup";
import SidebarLayout from "./components/sidebar_layout/SidebarLayout";

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
        <Route path="/breads" element={<Breads />} />
        <Route path="/songs"  element={ <Songs /> }/>
        <Route path="/beast/:id"  element={ <BestDetail /> }/>




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
           }  />
      </Routes>

      <footer className={`mt-[130px]`}>
        <div className="top border-t py-20">
        <div className={`w-[1180px] m-auto`}>
          <div>
            <h5>이메일 등록</h5>
            <p>
              이메일을 등록해 최신 자라 홈의 뉴스레터에
              대한 업데이트를 받아보세요.
            </p>
          </div>
          <div>
            <h5>정책</h5>
            <div></div>
          </div>
          <div>
            <h5>회사</h5>
            <div></div>
          </div>
          <div>
            <h5>연락처</h5>
            <div></div>
            <h5>매장찾기</h5>
            <div></div>
            </div>
          </div>
        </div>
        <div className="bottom border-t py-20">
          <div className={`w-[1180px] m-auto`}>
          <p>자라홈코리아 유한회사 (Zara Home Korea Ltd.) | 서울시 강남구 영동대로 511 33층 | 사업자 등록 번호:120-88-16920
            대표자:Lorena Mosquera | 연락처:080-500-6445 (수신자 부담 번호)
            이메일:info.kr@zarahome.com | 호스팅 서비스 제공업체:ITX Merken B.V. | 통신판매업신고:2018-서울강남-0045
            개인정보 보호 정책</p>
          <div>
            <h6>Follow</h6>
            <div></div>
          </div>
          <div>
            <h6>APP Download</h6>
            <div></div>
          </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
