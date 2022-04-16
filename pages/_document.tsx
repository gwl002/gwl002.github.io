import React from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext
} from 'next/document';

const isProduction = process.env.NODE_ENV === 'production';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico?" />
                    <link
                        href="https://cdn.staticfile.org/font-awesome/4.5.0/css/font-awesome.min.css"
                        rel="stylesheet"
                        type="text/css"
                    />
                    {isProduction && (
                        <>
                            <script
                                dangerouslySetInnerHTML={{
                                    __html: `window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject
                                =function(){}`
                                }}
                            />
                            {/* 删除 react_devtool_backend.js */}
                            <script
                                async
                                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
                            />
                            <script
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{
                                    __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', '${process.env.GA_TRACKING_ID}');
                                    `
                                }}
                            />
                        </>
                    )}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
