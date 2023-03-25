import React from 'react';
import styles from "./styles/RandomRecipes.module.css";
import Recipe from "./Recipe";

const RandomRecipes = ({recipes}) => {
    return (
        <div className={styles.wrapper}>
            {recipes.map(recipe => (
                <Recipe key={recipe.id} recipe={recipe}/>
            ))}
        </div>
    );
};

export default RandomRecipes;