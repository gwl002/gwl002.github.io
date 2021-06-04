import Head from 'next/head'
import React, { useState, useEffect, useCallback, useContext } from 'react';
import Link from "next/link"

export default function HomePage() {
    return (
        <div>
            <h2>gwl002.github.io</h2>
            <Link href="/greedySnake">贪吃蛇小游戏</Link>
            <a href="https://www.baidu.com">百度一下，你就知道</a>
            <a href="https://www.google.com">google</a>
        </div>
    )
}