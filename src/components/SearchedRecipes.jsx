import React, {useEffect, useState} from 'react';
import styles from "./styles/RandomRecipes.module.css";
import Recipe from "./Recipe";

const SearchedRecipes = ({ser}) => {
    const [recipes, setRecipe] = useState([])

    useEffect(()=> {
        const main = () => {
            setRecipe(ser)
        }
        main()
    })

    return (
        <div className={styles.wrapper}>
            {recipes.map(recipe => (
                <Recipe par={'random'} key={recipe.id} recipe={recipe}/>
            ))}
        </div>
    );
};

export default SearchedRecipes;