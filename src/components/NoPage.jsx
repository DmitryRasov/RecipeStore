import React from 'react';
import {Link} from "react-router-dom";
import styles from  './styles/NoPage.module.css'

const NoPage = () => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.header}>Page with url - {window.location.href} doesn't exist</h3>
            <Link className={styles.link} to="/random">Return to main page</Link>
        </div>
    );
};

export default NoPage;