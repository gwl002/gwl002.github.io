import React, { useState, useEffect, useCallback, useContext } from 'react';
import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import cn from "classnames";

export default function NavBar(props) {
    const [showNav, setShowNav] = useState(false);

    const toggleShowNav = () => {
        setShowNav(showNav => !showNav);
    }

    const handleClick = useCallback((e) => {
        setShowNav(false);
    }, [])

    useEffect(() => {
        if (showNav) {
            window.document.addEventListener("click", handleClick)
        } else {
            window.document.removeEventListener("click", handleClick)
        }
    }, [showNav])

    return (
        <nav className={styles.navbar}>
            <div className={styles.containerFluid}>
                <a href="/" className={styles.navbarHeader}>暮天云光</a>
                <ul className={cn(styles.nav, { [styles.in]: showNav })} >
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/about">关于</Link>
                    </li>
                    <li>
                        <Link href="/game">小游戏</Link>
                    </li>
                    <li>
                        <Link href="/archives">归档</Link>
                    </li>
                    <li>
                        <Link href="/tag">标签</Link>
                    </li>
                </ul>
                <button className={styles.navToggle} id="nav-toggle" onClick={toggleShowNav}>
                    <span className={styles.iconBar}></span>
                    <span className={cn(styles.iconBar, styles.mid)}></span>
                    <span className={styles.iconBar}></span>
                </button>
            </div>
        </nav>
    )
}

