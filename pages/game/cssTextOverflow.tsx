import React from 'react'
import styles from '../../styles/game.module.scss'

export default function CssTextOverflowPage() {
    return (
        <div className={styles.cssTextOverflow}>
            <div className={styles.container}>
                <h1>CSS多行文本溢出实现</h1>
                <p className={styles.description}>
                    这个demo展示了如何使用CSS实现多行文本溢出效果。
                </p>
            </div>
            <div className={styles.demo}>
                <div className={styles.textContainer}>
                    <div className={styles.content}>这里是一些示例文本，用于展示多行文本溢出效果。这里是一些示例文本，用于展示多行文本溢出效果。这里是一些示例文本，用于展示多行文本溢出效果。这里是一些示例文本，用于展示多行文本溢出效果。这里是一些示例文本，用于展示多行文本溢出效果。</div>
                </div>
                <div className={styles.textContainer2}>
                    <div className={styles.more}>...</div>
                    <div className={styles.content}>这里是一些示例文本，用于展示多行文本溢出效果。这里是一些示例文本，用于展示多行文本溢出效果。这里是一些示例文本，用于展示多行文本溢出效果。这里是一些示例文本，用于展示多行文本溢出效果。这里是一些示例文本，用于展示多行文本溢出效果。</div>
                </div>
            </div>
        </div>
    )
}

CssTextOverflowPage.layout = 'none'