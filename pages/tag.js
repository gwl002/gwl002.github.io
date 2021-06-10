import React, { useState, useEffect, useCallback, useContext } from 'react';

export default function HomePage(props) {
    return (
        <>
            <div>

            </div>
        </>
    )
}


export async function getStaticProps({ params }) {
    return {
        props: {
            title: "标签",
            subTitle: "把文章按标签整理分类"
        },
    }
}