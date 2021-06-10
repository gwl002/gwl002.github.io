import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Header from "../components/Header";

export default function SiteLayout(props) {
    return (
        <>
            <NavBar />
            <Header {...props} />
            {props.children}
            <Footer />
        </>
    )
}

