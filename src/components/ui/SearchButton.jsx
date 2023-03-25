import React from 'react';
import styles from '../styles/SearchButton.module.css'

const SearchButton = ({buttonTitle, ...props }) => {
    return (
        <button {...props} className={styles.btn}>
                {buttonTitle}
        </button>
    );
};

export default SearchButton;