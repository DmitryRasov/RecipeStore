import React from 'react';
import styles from '../styles/SearchButton.module.css'

const SearchButton = ({buttonName, ...props }) => {
    return (
        <button {...props} className={styles.btn}>
                {buttonName}
        </button>
    );
};

export default SearchButton;