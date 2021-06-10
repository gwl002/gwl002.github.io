import SiteLayout from "../layout/SiteLayout";
import NoLayout from "../layout/NoLayout";
import "normalize.css";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {
    const Layout = Component.layout === "none" ? NoLayout : SiteLayout;
    return (
        <Layout {...pageProps}>
            <Component {...pageProps} />
        </Layout>
    )
}