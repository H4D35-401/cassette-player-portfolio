import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode } from 'react';
interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
    speed?: number;
    dataSpecId?: string;
}
const ParallaxSection = ({ children, className = '', speed = 0.5, dataSpecId }: ParallaxSectionProps)=>{
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [
            "start end",
            "end start"
        ]
    });
    const y = useTransform(scrollYProgress, [
        0,
        1
    ], [
        0,
        speed * 100
    ]);
    return (<div ref={ref} className={`relative overflow-hidden ${className}`} data-spec-id="lIeLYiYfz00Fj9be">
      <motion.div data-spec-id={dataSpecId} style={{
        y
    }} className="will-change-transform">
        {children}
      </motion.div>
    </div>);
};
export default ParallaxSection;
