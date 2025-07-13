import cn from 'classnames'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import styles from '../styles/navbar.module.scss'

const NavBar: React.FunctionComponent = () => {
    const [showNav, setShowNav] = useState(false)

    const toggleShowNav = () => {
        setShowNav(showNav => !showNav)
    }

    const handleClick = useCallback(e => {
        setShowNav(false)
    }, [])

    useEffect(() => {
        if (showNav) {
            window.document.addEventListener('click', handleClick)
        } else {
            window.document.removeEventListener('click', handleClick)
        }
    }, [handleClick, showNav])

    return (
        <nav className={styles.navbar}>
            <div className={styles.containerFluid}>
                <Link href="/" >
                    <a className={styles.navbarHeader}>暮天云光</a>
                </Link>
                <ul className={cn(styles.nav, { [styles.in]: showNav })}>
                    <li>
                        <Link href="/" ><a>HOME</a></Link>
                    </li>
                    <li>
                        <Link href="/about" ><a>关于</a></Link>
                    </li>
                    <li>
                        <Link href="/game" ><a>小游戏</a></Link>
                    </li>
                    <li>
                        <Link href="/archives" ><a>归档</a></Link>
                    </li>
                    <li>
                        <Link href="/tag" ><a>标签</a></Link>
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

export default NavBar