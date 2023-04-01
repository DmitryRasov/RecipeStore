import React, {useState} from "react";
import Header from "./components/Header";
import RandomRecipes from "./components/RandomRecipes";
import { Routes, Route } from "react-router-dom";
import FavoriteRecipes from "./components/FavoriteRecipes";
import NoPage from "./components/NoPage";
import SearchedRecipes from "./components/SearchedRecipes";

function App() {
    const [ser, setSer] = useState([])

    const getSearch = (e) => {
        setSer(e)
    }

  return (
      <div>
          <Header getSearch={getSearch}></Header>
          <Routes>
              <Route path="*" element={<NoPage/>}/>
              <Route path="/random" element={<RandomRecipes />}/>
              <Route path="/favorite" element={<FavoriteRecipes />}/>
              <Route path="/search" element={<SearchedRecipes ser={ser} />}/>
          </Routes>
      </div>
  );
}

export default App;
