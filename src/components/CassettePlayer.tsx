import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const CassettePlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [volume, setVolume] = useState(0.7);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    
    const audioRef = useRef<HTMLAudioElement>(null);
    const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
    
    const tracks = [
        {
            title: "Thriller ",
            artist: "Michael Jackson",
            url: "https://open.spotify.com/track/3S2R0EVwBSAVMd5UMgKTL0?si=7fbb8e8c73fc4cd6",
            duration: "5:57"
        },
        {
            title: "Here we go around again", 
            artist: "Mariah Carey",
            url: "https://open.spotify.com/track/10A03OyuWyErmqSxsMGX96?si=92b4819b83304232",
            duration: "3:55"
        },
        {
            title: "Beggin - Original Mix",
            artist: "Madcon",
            url: "https://open.spotify.com/track/7eXrGBrl1mBKhxlWX0IoOQ?si=93e7f05a5cb3452e", 
            duration: "3:38"
        },
        {
            title: "Brand Identity",
            artist: "Design Studio",
            url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            duration: "4:05"
        }
    ];

    // Audio functionality
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume;
        }
    }, [volume, isMuted]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = tracks[currentTrack].url;
            audioRef.current.load();
            setIsLoading(true);
        }
    }, [currentTrack]);

    useEffect(() => {
        if (isPlaying && audioRef.current) {
            audioRef.current.play().catch(console.error);
        } else if (audioRef.current) {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        if (isPlaying) {
            progressIntervalRef.current = setInterval(() => {
                if (audioRef.current) {
                    setCurrentTime(audioRef.current.currentTime);
                    setDuration(audioRef.current.duration);
                }
            }, 100);
        } else {
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
            }
        }

        return () => {
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
            }
        };
    }, [isPlaying]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const nextTrack = () => {
        setCurrentTrack((prev) => (prev + 1) % tracks.length);
        setIsPlaying(false);
    };

    const prevTrack = () => {
        setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
        setIsPlaying(false);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (newVolume === 0) {
            setIsMuted(true);
        } else if (isMuted) {
            setIsMuted(false);
        }
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <audio 
                ref={audioRef}
                onLoadedData={() => setIsLoading(false)}
                onEnded={() => setIsPlaying(false)}
                onError={() => setIsLoading(false)}
            />
            <motion.div 
                data-spec-id="cassette-player" 
                className="relative w-full max-w-md mx-auto" 
                initial={{
                    scale: 0.8,
                    opacity: 0
                }} 
                animate={{
                    scale: 1,
                    opacity: 1
                }} 
                transition={{
                    duration: 0.8,
                    ease: "easeOut"
                }}
            >
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
            <div className="text-green-400 font-mono text-sm mb-1" data-spec-id="gdA5BPUNsLqnfgUx">
              {isLoading ? "LOADING..." : "NOW PLAYING"}
            </div>
            <motion.div className="text-green-300 font-bold text-lg" key={currentTrack} initial={{
                opacity: 0,
                y: 10
            }} animate={{
                opacity: 1,
                y: 0
            }} transition={{
                duration: 0.3
            }}>
              {tracks[currentTrack].title}
            </motion.div>
            <div className="text-green-400 font-mono text-xs mt-1">
              {tracks[currentTrack].artist}
            </div>
            <div className="text-green-500 font-mono text-xs mt-1">
              {formatTime(currentTime)} / {tracks[currentTrack].duration}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="relative w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-400 rounded-full transition-all duration-100"
              style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
            />
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
            <motion.button 
                onClick={toggleMute}
                className="text-amber-800 hover:text-amber-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </motion.button>
            <div className="relative w-16 h-1 bg-amber-300 rounded-full" data-spec-id="85gurCA5JqIyitSa">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div 
                className="h-full bg-amber-600 rounded-full transition-all duration-200" 
                style={{ width: `${(isMuted ? 0 : volume) * 100}%` }}
              />
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
            </motion.div>
        </>
    );
};
export default CassettePlayer;
