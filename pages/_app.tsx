import SiteLayout from '../layout/SiteLayout'
import NoLayout from '../layout/NoLayout'
import NoHeaderLayout from '../layout/NoHeaderLayout'
import 'normalize.css'
import '../styles/global.scss'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps & { Component: { layout: string } }) {
    let Layout = null
    switch (Component.layout) {
        case 'none':
            Layout = NoLayout
            break
        case 'noHeader':
            Layout = NoHeaderLayout
            break
        default:
            Layout = SiteLayout
            break
    }

    return (
        <>
            <DefaultSeo
                title={'暮天云光-Devinの个人小站'}
                description={'记录工作学习兴趣爱好笔记'}
                additionalMetaTags={[
                    {
                        httpEquiv: 'x-ua-compatible',
                        content: 'IE=edge; chrome=1',
                    },
                    {
                        name: 'application-name',
                        content: "gwl002's blog",
                    },
                ]}
            />
            <Layout {...pageProps}>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
