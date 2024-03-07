import { useEffect, useState } from "react";
import Header from "./components/Header/index.jsx";
import { Routes,Route } from "react-router-dom";
import Home from "./components/pages/Home/index.jsx";
import Popular from "./components/pages/Popular/index.jsx";
import TopRated from "./components/pages/TopRated/index.jsx";
import NowPlaying from "./components/pages/NowPlaying/index.jsx";
import Search from "./components/pages/Search/index.jsx";
import MovieDetail from "./components/pages/MovieDetail/index.jsx";
import Admin from "./components/Admin/index.jsx";
import Modal from "./components/Modal/index.jsx";

function App() {
  const [value, setValue] = useState("")

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="App">
      <Header value={value} setValue={setValue}/>
      {/* <Search/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/top_rated" element={<TopRated/>}/>
        <Route path="/now_playing" element={<NowPlaying/>}/>
        <Route path="/search-movie" element={<Search value={value}/>}/>
        <Route path="/movie-detail/:movieId" element={<MovieDetail/>}/>
        <Route path="/modal" element={<Modal/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
