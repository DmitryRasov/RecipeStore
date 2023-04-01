import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import styles from './styles/FavoriteRecipes.module.css'
import {fetchFavoriteService} from "./services/fetchFavoriteService";

const FavoriteRecipes = () => {
    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        const faves = async () => {
            setFavorite(await fetchFavoriteService())
        }
        faves()
    }, [])

    return (
        <div className={styles.wrapper}>
            {favorite.map(fav => (
                <Recipe par={'favorite'} key={fav.id} recipe={fav}/>
            ))}
        </div>
    );
};

export default FavoriteRecipes;