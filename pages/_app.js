import SiteLayout from "../layout/SiteLayout";
import NoLayout from "../layout/NoLayout";
import NoHeaderLayout from "../layout/NoHeaderLayout";
import "normalize.css";
import "../styles/global.scss";

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
        <Layout {...pageProps}>
            <Component {...pageProps} />
        </Layout>
    )
}