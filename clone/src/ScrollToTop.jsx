import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // scrolls page to top on every route change
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};