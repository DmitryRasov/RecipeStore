import React, {useState} from "react";
import Header from "./components/Header";
import RandomRecipes from "./components/RandomRecipes";
import { Routes, Route } from "react-router-dom";
import FavoriteRecipes from "./components/FavoriteRecipes";
import NoPage from "./components/NoPage";
import SearchedRecipes from "./components/SearchedRecipes";

function App() {
    const [ser, setSer] = useState([])
    const [show, setShow] = useState(false)

    const getSearch = (e) => {
        setSer(e)
    }
    const handleShow = (val) => {
        setShow(val)
    }

  return (
      <div>
          <Header getSearch={getSearch} show={show}></Header>
          <Routes>
              <Route path="*" element={<NoPage/>}/>
              <Route path="/random" element={<RandomRecipes handleShow={handleShow}/>}/>
              <Route path="/favorite" element={<FavoriteRecipes handleShow={handleShow}/>}/>
              <Route path="/search" element={<SearchedRecipes ser={ser} handleShow={handleShow} />}/>
          </Routes>
      </div>
  );
}

export default App;
