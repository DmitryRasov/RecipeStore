import React from 'react';
import styles from "../styles/MainButton.module.css"

type MainButtonProps = {
    buttonTitle: string,
    role: string,
}

const MainButton: React.FunctionComponent<MainButtonProps> = ({buttonTitle, role, ...props}) => {
    return (
        <button {...props} className={role === 'ingredient' ? `${styles.btn} ${styles.ingredient}` : `${styles.btn} ${styles.favorite}`}>
            {buttonTitle}
        </button>
    );
};

export default MainButton;