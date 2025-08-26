import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
interface PortfolioCardProps {
    title: string;
    description: string;
    image: string;
    category: string;
    link?: string;
    dataSpecId?: string;
}
const PortfolioCard = ({ title, description, image, category, link, dataSpecId }: PortfolioCardProps)=>{
    return (<motion.div data-spec-id={dataSpecId} className="group relative bg-gradient-to-br from-amber-50 via-orange-100 to-red-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-amber-200/50" initial={{
        opacity: 0,
        y: 50
    }} animate={{
        opacity: 1,
        y: 0
    }} transition={{
        duration: 0.6
    }} whileHover={{
        scale: 1.02
    }}>
      {}
      <div className="relative h-48 overflow-hidden" data-spec-id="Og4EoJcQbsAgLoNL">
        <motion.img src={image} alt={title} className="w-full h-full object-cover" whileHover={{
        scale: 1.1
    }} transition={{
        duration: 0.3
    }}/>
        
        {}
        <motion.div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" initial={{
        opacity: 0
    }} whileHover={{
        opacity: 1
    }}>
          <div className="flex space-x-3" data-spec-id="AOBN7T4SIfKvf5Oq">
            <motion.button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors" whileHover={{
        scale: 1.1
    }} whileTap={{
        scale: 0.9
    }}>
              <Eye size={20} data-spec-id="0TySE8W7oOU72TOo"/>
            </motion.button>
            {link && (<motion.a href={link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors" whileHover={{
        scale: 1.1
    }} whileTap={{
        scale: 0.9
    }}>
                <ExternalLink size={20} data-spec-id="3VPhbecNVHqvGwvd"/>
              </motion.a>)}
          </div>
        </motion.div>

        {}
        <div className="absolute top-3 left-3" data-spec-id="whtkhKUSIxrrUqBL">
          <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-semibold rounded-full" data-spec-id="UdxYxhSLO8c7j0SL">
            {category}
          </span>
        </div>
      </div>

      {}
      <div className="p-6" data-spec-id="U8JUcZ3i7GGyjACX">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors" data-spec-id="7wOZykB38DbP8WjI">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed" data-spec-id="rMlJTZNDYY3eL0Lm">
          {description}
        </p>
      </div>

      {}
      <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full opacity-70" data-spec-id="M8Y9HUuPp3N4M7tg"/>
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-amber-600 rounded-full opacity-50" data-spec-id="PtY6incZX2CaYzEH"/>
    </motion.div>);
};
export default PortfolioCard;
