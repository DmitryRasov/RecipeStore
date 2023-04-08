import React, {useState} from 'react';
import styles from './styles/Recipe.module.css'
import axios from "axios";
import {API_KEY} from "./assets/API_KEY.ts";
import RecipeDescription from "./RecipeDescription";
import MainButton from "./ui/MainButton.tsx";

const Recipe = ({recipe, par, deleteFavorite}) => {
    const [isDescription, setIsDescription] = useState(false)
    const [recipeData, setRecipeData] = useState([])
    // console.log(recipe)

    const getRecipeData = async (id) => {
        const recipesData = await axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?${API_KEY}`)
        await setRecipeData(recipesData.data.ingredients)
        setIsDescription(true)
    }
    const close = (state) => {
        setIsDescription(state)
    }
    const storeLocal = (id) => {
        localStorage.setItem(`recipe_${id}`, id)
    }
    const removeLocal = (id) => {
        localStorage.removeItem(`recipe_${id}`)
        deleteFavorite(id)
    }

    return (
        <div key={recipe.id} className={styles.item}>
            <h3  className={styles.header}>{recipe.title}</h3>
            <div style={{backgroundImage: `url(${recipe.image})`}} className={styles.image}></div>
            <div className={styles.wrapper}>
                { par === 'random'
                    ? <MainButton role={"favorite"} onClick={() => storeLocal(recipe.id)} buttonTitle={'Add to favorite'}></MainButton>
                    : <MainButton role={"removeFavorite"} onClick={() => removeLocal(recipe.id)} buttonTitle={'Remove'}></MainButton>
                }
                <MainButton role={"ingredient"} onClick={() => getRecipeData(recipe.id)} buttonTitle={'Ingredients'}></MainButton>
            </div>
            { isDescription
                ? <RecipeDescription recipe={recipe} recipeData={recipeData} close={close}/>
                : <></>
            }
        </div>
    );
};
export default Recipe;