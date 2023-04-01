import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_KEY} from "./components/assets/API_KEY";
import Header from "./components/Header";
import RandomRecipes from "./components/RandomRecipes";
import { Routes, Route } from "react-router-dom";
import FavoriteRecipes from "./components/FavoriteRecipes";
import {fetchRandoService} from "./components/services/fetchRandomService";

function App() {
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')


    useEffect(() => {
        const fetchData = async () => {
            setRecipes(await fetchRandoService())
        }
        fetchData()
    }, [])
    
    const searchRecipe = async (e) => {
        e.preventDefault()
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&${API_KEY}`)
        setRecipes(response.data.results)
        setSearch('')
    }

  return (
      <div>
          <Header search={search} setSearch={setSearch} searchRecipe={searchRecipe}></Header>
          <Routes>
              <Route path="*" element={<div>Page doesn't exist :(</div>}/>
              <Route path="/random" element={<RandomRecipes recipes={recipes}/>}/>
              <Route path="/favorite" element={<FavoriteRecipes/>}/>
          </Routes>
      </div>
  );
}

export default App;
