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
            title: "归档",
            subTitle: "历年的文章"
        },
    }
}