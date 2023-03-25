import React, {useState} from 'react';
import styles from './styles/Recipe.module.css'
import axios from "axios";
import {API_KEY} from "./assets/API_KEY";
import RecipeDescription from "./RecipeDescription";

const Recipe = ({recipe}) => {
    const [isDescription, setIsDescription] = useState(false)
    const [recipeData, setRecipeData] = useState([])
    console.log(recipe)

    const getRecipeData = async (id) => {
        const recipesData = await axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?${API_KEY}`)
        await setRecipeData(recipesData.data.ingredients)
        setIsDescription(true)
    }
    const close = (state) => {
        setIsDescription(state)
    }

    return (
        <div key={recipe.id} className={styles.item}>
            <h3 className={styles.header}>{recipe.title}</h3>
            <div style={{backgroundImage: `url(${recipe.image})`}} className={styles.image}></div>
            <button className={styles.button} onClick={() => getRecipeData(recipe.id)}>Inregidents</button>
            { isDescription
                ? <RecipeDescription recipe={recipe} recipeData={recipeData} close={close}/>
                : <></>
            }
        </div>
    );
};
export default Recipe;