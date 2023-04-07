import React, {useEffect, useState} from 'react';
import styles from "./styles/RandomRecipes.module.css";
import Recipe from "./Recipe";
import {fetchRandomService} from "./services/fetchRandomService.ts";

const RandomRecipes = () => {
    const [recipes, setRecipes] = useState([])


    useEffect(() => {

        const fetchData = async () => setRecipes(await fetchRandomService())

        fetchData()
    }, [])

    return (
        <div className={styles.wrapper}>
            {recipes.map(recipe => (
                <Recipe par={'random'} key={recipe.id} recipe={recipe}/>
            ))}
        </div>
    );
};

export default RandomRecipes;