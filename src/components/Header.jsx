import React from 'react';
import styles from "./styles/Header.module.css";
import SearchInput from "./ui/SearchInput";
import SearchButton from "./ui/SearchButton";

const Header = ({search, searchRecipe, setSearch}) => {
    return (
        <div className={styles.header}>
            <h1>Recipe App</h1>
            <form className={styles.input_fields}>
                <SearchInput value={search} handleChange={(e) => setSearch(e.target.value)} type="text"/>
                <SearchButton onClick={e => searchRecipe(e)} buttonTitle={'Search'}></SearchButton>
            </form>
        </div>
    );
};

export default Header;