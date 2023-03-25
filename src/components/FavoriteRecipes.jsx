import React, {useEffect, useState} from 'react';
import axios from "axios";
import Recipe from "./Recipe";
import {API_KEY} from "./assets/API_KEY";
import styles from './styles/FavoriteRecipes.module.css'

const FavoriteRecipes = () => {
    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        const fetchFavorite = async () => {
            if (localStorage.length > 0) {
                for (let i = 0; i < localStorage.length; i++) {
                    let key = localStorage.key(i)
                    let id = localStorage.getItem(key)
                    const recipe = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?${API_KEY}`)
                    setFavorite(prev => [...prev, recipe.data])
                }
            } else {
                return
            }
        }
        fetchFavorite()
    }, [])

    console.log(favorite)
    return (
        <div className={styles.wrapper}>
            {favorite.map(fav => (
                <Recipe key={fav.id} recipe={fav}/>
            ))}
        </div>
    );
};

export default FavoriteRecipes;