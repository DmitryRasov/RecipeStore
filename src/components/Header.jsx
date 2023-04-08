import React, {useState} from 'react';
import styles from "./styles/Header.module.css";
import SearchInput from "./ui/SearchInput";
import SearchButton from "./ui/SearchButton";
import {Link} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "./assets/API_KEY.ts";

const Header = ({getSearch, show}) => {
    const [search, setSearch] = useState('')

    const searchRecipe = async (e, search) => {
        e.preventDefault()
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&${API_KEY}`)
        getSearch(response.data.results)
        setSearch('')
        return response.data.results
    }

    return (
        <div className={styles.header}>
            <h1>Recipe App</h1>
            <Link className={styles.link} to="/random">Random Recipes</Link>
            <Link className={styles.link} to="/search">Search Recipes</Link>
            <Link className={styles.link} to="/favorite">Favorite Recipes</Link>
            { show === true
                ? <form className={styles.input_fields}>
                    <SearchInput value={search} handleChange={(e) => setSearch(e.target.value)} type="text"/>
                    <SearchButton onClick={e => searchRecipe(e, search)} buttonTitle={'Search'}></SearchButton>
                  </form>
                : <></>
                }
        </div>
    );
};

export default Header;