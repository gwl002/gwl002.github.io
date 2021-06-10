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
            title: "关于",
            subTitle: "Hi,我是Devin!"
        },
    }
}