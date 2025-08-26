import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const LiquidGlassNavbar = ()=>{
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    useEffect(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    const navItems = [
        {
            label: 'Home',
            href: '#home'
        },
        {
            label: 'About',
            href: '#about'
        },
        {
            label: 'Portfolio',
            href: '#portfolio'
        },
        {
            label: 'Contact',
            href: '#contact'
        }
    ];
    const scrollToSection = (href: string)=>{
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };
    return (<motion.nav data-spec-id="liquid-glass-navbar" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-white/10 border-b border-white/20' : 'bg-transparent'}`} initial={{
        y: -100
    }} animate={{
        y: 0
    }} transition={{
        duration: 0.8,
        ease: "easeOut"
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-spec-id="DHXFTXuAVcDw0R2F">
        <div className="flex items-center justify-between h-16" data-spec-id="RwVySoF2PUe2QX6Q">
          {}
          <motion.div className="flex-shrink-0" whileHover={{
        scale: 1.05
    }} transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
    }}>
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent" data-spec-id="ibxjHLpq7LDyWZOR">
              Aditya Nakhate
            </div>
          </motion.div>

          {}
          <div className="hidden md:block" data-spec-id="eQAHtEB507qynWxM">
            <div className="ml-10 flex items-baseline space-x-8" data-spec-id="MQTHCquFLnWHOGHX">
              {navItems.map((item, index)=>(<motion.button key={item.label} onClick={()=>scrollToSection(item.href)} className="relative px-3 py-2 text-black/90 hover:text-white transition-colors duration-200" whileHover={{
            scale: 1.05
        }} whileTap={{
            scale: 0.95
        }} initial={{
            opacity: 0,
            y: -20
        }} animate={{
            opacity: 1,
            y: 0
        }} transition={{
            delay: index * 0.1
        }}>
                  <span className="relative z-10" data-spec-id="VhdgaJbL9M0eutbc">{item.label}</span>
                  <motion.div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 to-red-500/20 backdrop-blur-sm" initial={{
            scale: 0,
            opacity: 0
        }} whileHover={{
            scale: 1,
            opacity: 1
        }} transition={{
            duration: 0.2
        }}/>
                </motion.button>))}
            </div>
          </div>

          {}
          <div className="md:hidden" data-spec-id="NlDMhEQVLhVMbA1T">
            <motion.button onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white/90 hover:text-white p-2" whileTap={{
        scale: 0.95
    }}>
              {isMobileMenuOpen ? <X size={24} data-spec-id="Uh26mS4bP41VZC67"/> : <Menu size={24} data-spec-id="2sgjRZzHzLdYmaf9"/>}
            </motion.button>
          </div>
        </div>
      </div>

      {}
      <motion.div className={`md:hidden overflow-hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} initial={{
        height: 0,
        opacity: 0
    }} animate={{
        height: isMobileMenuOpen ? 'auto' : 0,
        opacity: isMobileMenuOpen ? 1 : 0
    }} transition={{
        duration: 0.3
    }}>
        <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-lg bg-black/20 border-t border-white/10" data-spec-id="nWpEcqQAoSJMVWxJ">
          {navItems.map((item, index)=>(<motion.button key={item.label} onClick={()=>scrollToSection(item.href)} className="block w-full text-left px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200" initial={{
            x: -20,
            opacity: 0
        }} animate={{
            x: 0,
            opacity: 1
        }} transition={{
            delay: index * 0.1
        }}>
              {item.label}
            </motion.button>))}
        </div>
      </motion.div>
    </motion.nav>);
};
export default LiquidGlassNavbar;
