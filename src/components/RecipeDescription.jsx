import React from 'react';
import styles from './styles/RecipeDescription.module.css'

const RecipeDescription = ({close, recipeData, recipe}) => {
    console.log('recipeData', recipeData)
    console.log('recipe', recipe)

    return (
        <div className={styles.item}>
            <div className={styles.recipeCard}>
                { recipeData.map((ingredient, i) => (
                    <p key={i}>{ingredient.name} - {ingredient.amount.metric.value} {ingredient.amount.metric.unit}</p>
                ))}
                <button onClick={() => close(false)}>Close</button>
            </div>
        </div>
    );
};

export default RecipeDescription;