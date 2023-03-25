import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_KEY} from "./components/assets/API_KEY";
import Recipe from "./components/Recipe";
import styles from './components/styles/App.module.css'
import SearchButton from "./components/ui/SearchButton";
import SearchInput from "./components/ui/SearchInput";

function App() {
    console.log(SearchButton)
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://api.spoonacular.com/recipes/random?number=10&${API_KEY}`)
            setRecipes(response.data.recipes)
            console.log(response.data.recipes)
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
          <div className={styles.header}>
              <h1>Recipe App</h1>
              <form>
                  <SearchInput value={search} handleChange={(e) => setSearch(e.target.value)} type="text"/>
                  <SearchButton onClick={e => searchRecipe(e)} buttonTitle={'Search'}></SearchButton>
              </form>
          </div>
          <div className={styles.wrapper}>
              {recipes.map(recipe => (
                  <Recipe key={recipe.id} recipe={recipe}/>
              ))}
          </div>
      </div>
  );
}

export default App;
