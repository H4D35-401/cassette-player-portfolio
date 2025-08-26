import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
const CassettePlayer = ()=>{
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const tracks = [
        "Creative Process",
        "Design Philosophy",
        "Visual Storytelling",
        "Brand Identity"
    ];
    const togglePlay = ()=>{
        setIsPlaying(!isPlaying);
    };
    const nextTrack = ()=>{
        setCurrentTrack((prev)=>(prev + 1) % tracks.length);
    };
    const prevTrack = ()=>{
        setCurrentTrack((prev)=>(prev - 1 + tracks.length) % tracks.length);
    };
    return (<motion.div data-spec-id="cassette-player" className="relative w-full max-w-md mx-auto" initial={{
        scale: 0.8,
        opacity: 0
    }} animate={{
        scale: 1,
        opacity: 1
    }} transition={{
        duration: 0.8,
        ease: "easeOut"
    }}>
      {}
      <div className="relative bg-gradient-to-br from-amber-100 via-orange-200 to-red-200 rounded-2xl p-6 shadow-2xl border-4 border-amber-800/30" data-spec-id="wAnM4pw3JG5rHjIU">
        
        {}
        <div className="bg-black/80 rounded-lg p-4 mb-4" data-spec-id="FKq1QnOolqDHEGCa">
          <div className="flex justify-center space-x-4 mb-3" data-spec-id="XaGnHh5shJe06Y7G">
            {}
            <motion.div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full border-4 border-gray-700 flex items-center justify-center" animate={{
        rotate: isPlaying ? 360 : 0
    }} transition={{
        duration: 2,
        repeat: isPlaying ? Infinity : 0,
        ease: "linear"
    }}>
              <div className="w-3 h-3 bg-gray-400 rounded-full" data-spec-id="F8MhTFj3yXFnCc2q"/>
            </motion.div>
            <motion.div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full border-4 border-gray-700 flex items-center justify-center" animate={{
        rotate: isPlaying ? -360 : 0
    }} transition={{
        duration: 2,
        repeat: isPlaying ? Infinity : 0,
        ease: "linear"
    }}>
              <div className="w-3 h-3 bg-gray-400 rounded-full" data-spec-id="7zNVi9KRNc5jZ3O0"/>
            </motion.div>
          </div>
          
          {}
          <div className="text-center" data-spec-id="plTb14IBhEQYdtQp">
            <div className="text-green-400 font-mono text-sm mb-1" data-spec-id="gdA5BPUNsLqnfgUx">NOW PLAYING</div>
            <motion.div className="text-green-300 font-bold text-lg" key={currentTrack} initial={{
        opacity: 0,
        y: 10
    }} animate={{
        opacity: 1,
        y: 0
    }} transition={{
        duration: 0.3
    }}>
              {tracks[currentTrack]}
            </motion.div>
          </div>
        </div>

        {}
        <div className="flex justify-center space-x-3 mb-4" data-spec-id="8UZ8h3oLaySHAoMu">
          <motion.button onClick={prevTrack} className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-white hover:from-gray-600 hover:to-gray-700 transition-colors" whileHover={{
        scale: 1.1
    }} whileTap={{
        scale: 0.9
    }}>
            <SkipBack size={20} data-spec-id="dZY2Eyjgm3k9FOWr"/>
          </motion.button>
          
          <motion.button onClick={togglePlay} className="p-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-white hover:from-red-500 hover:to-red-600 transition-colors shadow-lg" whileHover={{
        scale: 1.1
    }} whileTap={{
        scale: 0.9
    }}>
            {isPlaying ? <Pause size={24} data-spec-id="PoISmWKqRiMkfwXB"/> : <Play size={24} data-spec-id="pcWYwS6WYCHGT03q"/>}
          </motion.button>
          
          <motion.button onClick={nextTrack} className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-white hover:from-gray-600 hover:to-gray-700 transition-colors" whileHover={{
        scale: 1.1
    }} whileTap={{
        scale: 0.9
    }}>
            <SkipForward size={20} data-spec-id="vPUJh67fc7UBLhkq"/>
          </motion.button>
        </div>

        {}
        <div className="flex items-center justify-between" data-spec-id="xWhnfiVBNG1PE1sh">
          <div className="flex items-center space-x-2" data-spec-id="IVyu5mrp5UgkCQTT">
            <Volume2 size={16} className="text-amber-800" data-spec-id="KBHrGVd5IsUjynUI"/>
            <div className="w-16 h-1 bg-amber-300 rounded-full" data-spec-id="85gurCA5JqIyitSa">
              <div className="w-3/4 h-full bg-amber-600 rounded-full" data-spec-id="bz75xpuCgiVCcPME"/>
            </div>
          </div>
          
          <div className="text-xs text-amber-800 font-mono" data-spec-id="UTFT200QCJumwhIw">
            {String(currentTrack + 1).padStart(2, '0')}/{String(tracks.length).padStart(2, '0')}
          </div>
        </div>

        {}
        <div className="absolute top-2 left-2 w-3 h-3 bg-red-500 rounded-full shadow-inner" data-spec-id="qJMuYX6CfU9l47JP"/>
        <div className="absolute top-2 right-2 w-2 h-2 bg-amber-600 rounded-full" data-spec-id="YpcZlKmmwl9ZEoNf"/>
        <div className="absolute bottom-2 left-2 text-xs text-amber-800/60 font-mono" data-spec-id="W5infMIL8yYKLtzU">RETRO</div>
        <div className="absolute bottom-2 right-2 text-xs text-amber-800/60 font-mono" data-spec-id="SinpkihyOfXzPtWq">DESIGN</div>
      </div>

      {}
      <div className="absolute top-4 left-4 w-2 h-2 bg-gray-600 rounded-full shadow-inner" data-spec-id="sJopgW7kuZBrV69Q"/>
      <div className="absolute top-4 right-4 w-2 h-2 bg-gray-600 rounded-full shadow-inner" data-spec-id="ASaGkAKCOj6v21Qd"/>
      <div className="absolute bottom-4 left-4 w-2 h-2 bg-gray-600 rounded-full shadow-inner" data-spec-id="jvIEBUMWumXicBRm"/>
      <div className="absolute bottom-4 right-4 w-2 h-2 bg-gray-600 rounded-full shadow-inner" data-spec-id="uOV2uReSS7cKcSMa"/>
    </motion.div>);
};
export default CassettePlayer;
