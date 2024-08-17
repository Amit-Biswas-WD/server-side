import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Share/Footer";
import Navbar from "../Share/Navbar";

const Main = () => {
    const location = useLocation(); 

    const noHeaderFooter =
        location.pathname.includes("login") || location.pathname.includes("registation");

    return (
        <div>
            {noHeaderFooter || <Navbar />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;
