import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll al top de la página cuando cambie la ruta
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        
        // También asegurar que el body no tenga scroll extra
        document.body.style.minHeight = '100vh';
        document.documentElement.style.minHeight = '100vh';
        
    }, [pathname]);

    return null;
};

export default ScrollToTop;
