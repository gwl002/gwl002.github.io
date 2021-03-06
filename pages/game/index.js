import React, { useState, useEffect, useCallback, useContext } from 'react';
import Link from "next/link"
import styles from "../../styles/game.module.scss";

export default function GamePage(props) {
    return (
        <div className="container">
            <div className="column">
                <div className="content">
                    <ul className={styles.gameList}>
                        <li>
                            <Link href="/game/greedySnake">rxjs贪吃蛇</Link>
                        </li>
                        <li>
                            <a href="https://jirengu-inc.github.io/animating-resume/public/" target="_blank">会动的简历</a>
                            <span>(https://github.com/jirengu-inc/animating-resume)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export async function getStaticProps({ params }) {
    return {
        props: {
            title: "小游戏",
            subTitle: "一些demo展示"
        },
    }
}