import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TextType from './TextType';

const LiquidGlassNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    
    useEffect(() => {
        let lastScrollY = window.scrollY;
        
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Hide when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }
            
            // Always show when at the top
            if (currentScrollY <= 100) {
                setIsVisible(true);
            }
            
            setIsScrolled(currentScrollY > 50);
            lastScrollY = currentScrollY;
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const handleMouseEnter = () => {
        setIsHovering(true);
        setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovering(false);
        // Don't hide immediately on mouse leave, let scroll behavior take over
    };
    return (
        <motion.nav 
            data-spec-id="liquid-glass-navbar" 
            className={`fixed top-4 left-[3%] md:left-[30%] -translate-x-1/2 z-50 w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] max-w-sm md:max-w-md lg:max-w-2xl transition-all duration-300 rounded-full ${isScrolled ? 'backdrop-blur-xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 border border-amber-400/30 shadow-2xl' : 'backdrop-blur-lg bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 border border-amber-400/20 shadow-lg'}`} 
            initial={{
                y: -100
            }} 
            animate={{
                y: isVisible ? 0 : -100,
                opacity: isVisible ? 1 : 0
            }} 
            transition={{
                duration: 0.3,
                ease: "easeOut"
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="px-3 md:px-4 py-2 md:py-3 rounded-full">
                <motion.div 
                    className="flex items-center justify-center" 
                    whileHover={{
                        scale: 1.05
                    }} 
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17
                    }}
                >
                    <TextType 
                        text={["Aditya Nakhate"]}
                        typingSpeed={100}
                        pauseDuration={1000}
                        showCursor={true}
                        cursorCharacter="_" 
                        cursorClassName="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-extrabold text-3xl leading-none"
                        className="text-2xl font-extrabold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent tracking-wide" 
                        data-spec-id="ibxjHLpq7LDyWZOR"
                    />
                </motion.div>
            </div>
        </motion.nav>
    );
};
export default LiquidGlassNavbar;
