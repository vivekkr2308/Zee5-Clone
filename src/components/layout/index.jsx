import { useEffect } from "react";
import Navbar from "../navbar";
import { startListeningToResize, stopListeningToResize } from "../utils/WindowResizeListener";
import { useSelector } from "react-redux";
import Footer from "../footer";
import BackToTopBtn from "../utils/BackToTopBtn";
import { useLocation } from "react-router-dom";

//This defines a functional component named Layout. It takes a prop named children, which represents the child components that will be wrapped by this Layout component.
const Layout = ({ children }) => {
    const location = useLocation();
    //This imports the useLocation hook from the "react-router-dom" library. useLocation is a hook that returns the current location object, which represents where the app is now.
  //The location object provides information about the current URL.

    const { width } = useSelector(state => state.windowSize);
    useEffect(() => {
        startListeningToResize();
        return () => {
            stopListeningToResize();
        }
    }, []);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [location]);

    return (
        <>
            <Navbar />
            <div className={`${width < 900 ? 'mt-[160px]' : 'mt-[90px]'}`}>
                {children}
            </div>
            <Footer />
            <BackToTopBtn />
        </>
    )
}

export default Layout;