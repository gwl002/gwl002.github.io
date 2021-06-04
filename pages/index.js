import Head from 'next/head'
import React, { useState, useEffect, useCallback, useContext } from 'react';
import Link from "next/link"

export default function HomePage() {
    return (
        <div>
            <h2>gwl002.github.io</h2>
            <Link href="/greedySnake">贪吃蛇小游戏</Link>
        </div>
    )
}