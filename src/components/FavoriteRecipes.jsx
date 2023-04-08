import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import styles from './styles/FavoriteRecipes.module.css'
import {fetchFavoriteService} from "./services/fetchFavoriteService.ts";

const FavoriteRecipes = ({handleShow}) => {
    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        const faves = async () => {
            setFavorite(await fetchFavoriteService())
        }
        handleShow(false)
        faves()
    }, [])
    const deleteFavorite = (id) => {
        const filteredFavorites = favorite.filter((fav) => fav.id !== id)
        setFavorite(filteredFavorites)
    }

    return (
        <div className={styles.wrapper}>
            {favorite.map(fav => (
                <Recipe par={'favorite'} key={fav.id} recipe={fav} deleteFavorite={deleteFavorite}/>
            ))}
        </div>
    );
};

export default FavoriteRecipes;