import React, { useState, useEffect, useCallback, useContext } from 'react';
import cn from "classnames";
import styles from "../styles/header.module.scss";

export default function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.siteHeading}>
                <h1 className={styles.title}>{props.title}</h1>
                <span className={styles.subTitle}>{props.subTitle}</span>
            </div>
        </header>
    )
}
