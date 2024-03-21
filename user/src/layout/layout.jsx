import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

export default function Layout() {

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer/>
        </>
    )
}