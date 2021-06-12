import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function NoLayout(props) {
    return (
        <>
            <NavBar />
            {props.children}
            <Footer />
        </>
    )
}

