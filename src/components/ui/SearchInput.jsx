import React from 'react';
import styles from '../styles/SearchInput.module.css'

const SearchInput = ({handleChange, value}) => {
    return (
        <input value={value} onChange={e => handleChange(e)} className={styles.myinput}>

        </input>
    );
};

export default SearchInput;