import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/game.module.scss'
import { PageProps } from '../../types/PageProps'

export default function GamePage() {
    return (
        <div className="container">
            <div className="column">
                <div className="content">
                    <ul className={styles.gameList}>
                        <li>
                            <Link href="/game/greedySnake">rxjs贪吃蛇</Link>
                        </li>
                        <li>
                            <a
                                href="https://jirengu-inc.github.io/animating-resume/public/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                会动的简历
                            </a>
                            <span>(https://github.com/jirengu-inc/animating-resume)</span>
                        </li>
                        <li>
                            <Link href="/game/cssTextOverflow">CSS多行文本溢出实现</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
    return {
        props: {
            title: '小游戏',
            subTitle: '一些demo展示',
        },
    }
}
