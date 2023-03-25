import React from 'react';
import styles from "./styles/Header.module.css";
import SearchInput from "./ui/SearchInput";
import SearchButton from "./ui/SearchButton";
import {Link} from "react-router-dom";

const Header = ({search, searchRecipe, setSearch}) => {
    return (
        <div className={styles.header}>
            <h1>Recipe App</h1>
            <Link to="/random">Random Recipes</Link>
            <Link to="/favorite">Favorite Recipes</Link>
            <form className={styles.input_fields}>
                <SearchInput value={search} handleChange={(e) => setSearch(e.target.value)} type="text"/>
                <SearchButton onClick={e => searchRecipe(e)} buttonTitle={'Search'}></SearchButton>
            </form>
        </div>
    );
};

export default Header;