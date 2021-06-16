import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Header from "../components/header";

export default function NoHeadLayout(props) {
    return (
        <>
            <NavBar />
            {props.children}
            <Footer />
        </>
    )
}

