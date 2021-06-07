import React, { useState, useEffect, useCallback, useContext } from 'react';
import Link from "next/link"

export default function HomePage(props) {
    return (
        <>
            <ul>
                <li>
                    <Link href="/game/greedySnake">贪吃蛇</Link>
                </li>
            </ul>
        </>
    )
}


export async function getStaticProps({ params }) {
    return {
        props: {

        },
    }
}