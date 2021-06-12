import React, { useState, useEffect, useCallback, useContext } from 'react';
import Link from "next/link"

export default function GamePage(props) {
    return (
        <div className="container">
            <div className="column">
                <div className="content">
                    <ul>
                        <li>
                            <Link href="/game/greedySnake">贪吃蛇</Link>
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