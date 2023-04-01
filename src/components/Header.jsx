import React, {useState} from 'react';
import styles from "./styles/Header.module.css";
import SearchInput from "./ui/SearchInput";
import SearchButton from "./ui/SearchButton";
import {Link} from "react-router-dom";

const Header = ({searchRecipe}) => {
    const [search, setSearch] = useState('')

    const searchHandler = (e) => {
        searchRecipe(e, search)
        setSearch('')
    }


    return (
        <div className={styles.header}>
            <h1>Recipe App</h1>
            <Link className={styles.link} to="/random">Random Recipes</Link>
            <Link className={styles.link} to="/favorite">Favorite Recipes</Link>
            <form className={styles.input_fields}>
                <SearchInput value={search} handleChange={(e) => setSearch(e.target.value)} type="text"/>
                <SearchButton onClick={e => searchHandler(e)} buttonTitle={'Search'}></SearchButton>
            </form>
        </div>
    );
};

export default Header;