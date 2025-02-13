import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollControl() {
  const location = useLocation();

  useEffect(() => {
    const pagesWithoutScroll = ["/", "/login", "/dashboard", "/configuracao", "/notificacoes", "/suporte"];

    if (pagesWithoutScroll.includes(location.pathname)) {
        document.documentElement.style.overflow = "hidden"; 
        document.body.style.overflow = "hidden";
    } else {
        document.documentElement.style.overflow = "auto";
        document.body.style.overflow = "auto";
    }

    return () => {
        document.documentElement.style.overflow = "auto";
        document.body.style.overflow = "auto";
    };
}, [location]);

}

export default ScrollControl;
