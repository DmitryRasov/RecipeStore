import React from 'react';
import styles from '../styles/MainButton.module.css'

const MainButton = ({buttonTitle, ...props}) => {
    return (
        <button {...props} className={styles.btn}>
            {buttonTitle}
        </button>
    );
};

export default MainButton;