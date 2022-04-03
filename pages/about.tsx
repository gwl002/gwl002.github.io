import React from 'react'
import { GetStaticProps } from 'next'
import { PageProps } from '../types/PageProps'

export default function HomePage() {
    // const downloadPDF = async () => {
    //     let response = await fetch("/api/createPdf", {
    //         responseType: 'arraybuffer',
    //         headers: {
    //             'Accept': 'application/pdf'
    //         }
    //     });
    //     let blob = await response.blob();
    //     // const blob = new Blob([response.body], { type: 'application/pdf' })
    //     const link = document.createElement('a')
    //     link.href = window.URL.createObjectURL(blob)
    //     link.download = `your-file-name.pdf`
    //     link.click()
    // }

    return (
        <div className="container">
            <div className="column">
                <h4 style={{ textAlign: 'center' }}>暂无内容</h4>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
    return {
        props: {
            title: '关于',
            subTitle: 'Hi,我是Devin!',
        },
    }
}
