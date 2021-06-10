import React, { useState, useEffect, useCallback, useContext } from 'react';
import styles from "../styles/footer.module.scss";

export default function Footer(props) {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className={styles.copywriting}>
                <p>
                    Copyright © 暮天云光 {year}
                </p>
                <p>
                    <span>Posted by &nbsp;
                    <a href="https://github.com/gwl002" target="_blank" rel="noopener">gwl002</a>
                    </span>
                    <span>
                        &nbsp;|&nbsp;订阅本站
                    <iframe style={{ marginLeft: "2px", marginBottom: "-5px" }} frameBorder="0" scrolling="0" width="91px" height="20px" src="https://ghbtns.com/github-btn.html?user=gwl002&amp;repo=gwl002.github.io&amp;type=star&amp;count=false">
                        </iframe>
                    </span>
                </p>
            </div>
        </footer>
    )
}

