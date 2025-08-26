import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion } from 'framer-motion';

function Navigation({ activeId, onNavClick }) {
    const links = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "portfolio", label: "Portfolio" },
        { id: "contact", label: "Contact" },
    ];
    
    return (
        <ul className="flex items-center gap-4 md:gap-8 text-sm md:text-lg">
            {links.map(link => (
                <li key={link.id}>
                    <a
                        href={`#${link.id}`}
                        data-id={link.id}
                        onClick={(e) => onNavClick(e, link.id)}
                        className={`relative px-2 md:px-3 pt-3 md:pt-4 pb-1 transition-colors font-medium font-['IBM_Plex_Sans'] ${
                            activeId === link.id 
                                ? "text-black font-semibold" 
                                : "text-black/70 hover:text-black"
                        }`}
                    >
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}

const RetroNavbar = () => {
    const [activeId, setActiveId] = useState("home");
    const containerRef = useRef(null);
    const navRef = useRef(null);
    const [indicator, setIndicator] = useState({ left: 8, width: 0 });

    // Ensure page starts at top on mount/reload
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
        setActiveId("home");
    }, []);

    useEffect(() => {
        const sectionIds = ["home", "about", "portfolio", "contact"];
        const sections = sectionIds
            .map(id => document.getElementById(id))
            .filter(Boolean);

        const resetToHome = () => {
            setActiveId("home");
            window.scrollTo({ top: 0, behavior: "auto" });
        };

        resetToHome();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px 0px -60% 0px",
                threshold: 0.2,
            }
        );

        sections.forEach(sec => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    const updateIndicator = useCallback(() => {
        const container = containerRef.current;
        const nav = navRef.current;
        if (!container || !nav) return;
        const activeEl = nav.querySelector(`a[data-id="${activeId}"]`);
        if (!activeEl) return;
        const containerRect = container.getBoundingClientRect();
        const elRect = activeEl.getBoundingClientRect();
        const left = elRect.left - containerRect.left + container.scrollLeft;
        const width = elRect.width;
        setIndicator({ left, width });
    }, [activeId]);

    useEffect(() => {
        updateIndicator();
        const rAF = requestAnimationFrame(updateIndicator);
        const timeoutId = setTimeout(updateIndicator, 100);
        return () => {
            cancelAnimationFrame(rAF);
            clearTimeout(timeoutId);
        };
    }, [activeId, updateIndicator]);

    useEffect(() => {
        const onResize = () => updateIndicator();
        const onLoad = () => updateIndicator();
        
        const handleBeforeUnload = () => {
            sessionStorage.setItem('reloading', 'true');
        };
        
        const handleLoad = () => {
            if (sessionStorage.getItem('reloading') === 'true') {
                setActiveId("home");
                window.scrollTo({ top: 0, behavior: "auto" });
                sessionStorage.removeItem('reloading');
            }
            onLoad();
        };
        
        window.addEventListener("resize", onResize);
        window.addEventListener("load", handleLoad);
        window.addEventListener("beforeunload", handleBeforeUnload);
        
        const container = containerRef.current;
        const nav = navRef.current;
        if (container) container.addEventListener("scroll", onResize, { passive: true });
        let ro;
        if (nav && 'ResizeObserver' in window) {
            ro = new ResizeObserver(onResize);
            ro.observe(nav);
        }
        return () => {
            window.removeEventListener("resize", onResize);
            window.removeEventListener("load", handleLoad);
            window.removeEventListener("beforeunload", handleBeforeUnload);
            if (container) container.removeEventListener("scroll", onResize);
            if (ro) ro.disconnect();
        };
    }, [updateIndicator]);

    const onNavClick = useCallback((e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveId(id);
            requestAnimationFrame(() => updateIndicator());
        }
    }, [updateIndicator]);
    
    return (
        <motion.div 
            className="fixed bottom-4 left-[3%] md:left-[30%] -translate-x-1/2 z-50 w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] max-w-sm md:max-w-md lg:max-w-2xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="backdrop-blur-xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 border border-amber-400/30 shadow-2xl rounded-full px-3 md:px-4 py-2 md:py-3">
                <nav ref={containerRef} className="relative flex items-center justify-center overflow-x-auto">
                    {indicator.width > 0 && (
                        <motion.span
                            aria-hidden
                            className="absolute bottom-1 h-[3px] rounded-full transition-[left,width] duration-400 ease-out will-change-[left,width] bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 shadow-lg"
                            style={{ left: indicator.left, width: indicator.width }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    )}
                    <div ref={navRef}>
                        <Navigation activeId={activeId} onNavClick={onNavClick} />
                    </div>
                </nav>
            </div>
        </motion.div>
    );
};

export default RetroNavbar;
