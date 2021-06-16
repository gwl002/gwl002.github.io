import SiteLayout from "../layout/SiteLayout";
import NoLayout from "../layout/NoLayout";
import NoHeaderLayout from "../layout/NoHeaderLayout";
import "normalize.css";
import "../styles/global.scss";
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }) {
    let Layout = null;
    switch (Component.layout) {
        case "none":
            Layout = NoLayout
            break;
        case "noHeader":
            Layout = NoHeaderLayout
            break;
        default:
            Layout = SiteLayout
            break;
    }
    return (
        <>
            <DefaultSeo
                title={"暮天云光-Devinの个人小站"}
                description={"记录工作学习兴趣爱好笔记"}
            />
            <Layout {...pageProps}>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}