import { motion } from 'framer-motion';
import { ReactNode } from 'react';
interface AnimatedButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'cassette';
    className?: string;
    dataSpecId?: string;
}
const AnimatedButton = ({ children, onClick, variant = 'primary', className = '', dataSpecId }: AnimatedButtonProps)=>{
    const baseClasses = "relative overflow-hidden px-8 py-3 rounded-full font-semibold transition-all duration-300 transform";
    const variantClasses = {
        primary: "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg hover:shadow-orange-500/25",
        secondary: "bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
        cassette: "bg-gradient-to-r from-amber-600 via-orange-600 to-red-700 text-white shadow-lg hover:shadow-amber-500/30"
    };
    return (<motion.button data-spec-id={dataSpecId} className={`${baseClasses} ${variantClasses[variant]} ${className}`} onClick={onClick} whileHover={{
        scale: 1.05,
        rotateX: -5
    }} whileTap={{
        scale: 0.95,
        rotateX: 0
    }} initial={{
        opacity: 0,
        y: 20
    }} animate={{
        opacity: 1,
        y: 0
    }} transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
        opacity: {
            duration: 0.6
        },
        y: {
            duration: 0.6
        }
    }}>
      {}
      <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12" initial={{
        x: '-100%'
    }} whileHover={{
        x: '100%'
    }} transition={{
        duration: 0.6
    }}/>
      
      {}
      <span className="relative z-10 flex items-center gap-2" data-spec-id="Px2NaQzZUnm4XfBI">
        {children}
      </span>
      
      {}
      {variant === 'cassette' && (<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" data-spec-id="4iszQWLz3zrc8W6Z">
          <div className="absolute top-2 left-2 right-2 h-px bg-white/20" data-spec-id="gd0NoX8VEh9jdFb5"/>
          <div className="absolute bottom-2 left-2 right-2 h-px bg-black/20" data-spec-id="uYUKpRc9QI19scNT"/>
        </div>)}
    </motion.button>);
};
export default AnimatedButton;
