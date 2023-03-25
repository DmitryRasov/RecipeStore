import React from 'react';
import styles from '../styles/MainButton.module.css'

const MainButton = ({buttonTitle, role, ...props}) => {
    return (
        <button {...props} className={role === 'ingredient' ? `${styles.btn} ${styles.ingredient}` : `${styles.btn} ${styles.favorite}`}>
            {buttonTitle}
        </button>
        // <button {...props} className={styles.btn +''+ styles.}>
        //     {buttonTitle}
        // </button>
    );
};

export default MainButton;