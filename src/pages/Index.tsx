import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Palette, Monitor, Smartphone } from 'lucide-react';
import LiquidGlassNavbar from '../components/LiquidGlassNavbar';
import RetroNavbar from '../components/RetroNavbar';
import AnimatedButton from '../components/AnimatedButton';
import CassettePlayer from '../components/CassettePlayer';
import ParallaxSection from '../components/ParallaxSection';
import PortfolioCard from '../components/PortfolioCard';
const Index = ()=>{
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    useEffect(()=>{
        const handleMouseMove = (e: MouseEvent)=>{
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return ()=>window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    const portfolioItems = [
        {
            title: "Vintage Brand Identity",
            description: "Complete brand overhaul for a coffee roastery, inspired by 70s aesthetics with modern functionality.",
            image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
            category: "Branding",
            link: "#"
        },
        {
            title: "Retro Music Festival Poster",
            description: "Eye-catching poster design combining cassette tape elements with bold typography and vibrant colors.",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
            category: "Print Design",
            link: "#"
        },
        {
            title: "Analog-Digital UI Design",
            description: "Mobile app interface that bridges analog warmth with digital functionality for a music streaming service.",
            image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop",
            category: "UI/UX",
            link: "#"
        },
        {
            title: "Vintage Product Packaging",
            description: "Nostalgic packaging design for artisanal products, featuring hand-drawn illustrations and warm color palettes.",
            image: "https://images.unsplash.com/photo-1586953983027-d7508a64f4bb?w=400&h=300&fit=crop",
            category: "Packaging",
            link: "#"
        },
        {
            title: "Retro Website Design",
            description: "Full website design combining vintage aesthetics with modern responsive design principles.",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
            category: "Web Design",
            link: "#"
        },
        {
            title: "Album Cover Art",
            description: "Vinyl record cover design featuring cassette tape motifs and bold geometric patterns.",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
            category: "Illustration",
            link: "#"
        }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-red-200 overflow-x-hidden" data-spec-id="nTn4NA9jaghkVIqd">
      {}
      <motion.div className="fixed w-4 h-4 bg-orange-500/30 rounded-full pointer-events-none z-40 mix-blend-multiply" animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8
    }} transition={{
        type: "spring",
        stiffness: 500,
        damping: 28
    }}/>

      <LiquidGlassNavbar data-spec-id="rIkLeOfTezy7HI54"/>
        <RetroNavbar />

      {}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16" data-spec-id="SFGdmcapIrqyRXhr">
        <ParallaxSection speed={0.5} className="w-full" data-spec-id="XJmW8P7EZ7NhsvgU">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-spec-id="iL7p6r5X2iaafbX6">
            <motion.div data-spec-id="hero-title" className="mb-8" initial={{
        opacity: 0,
        y: 50
    }} animate={{
        opacity: 1,
        y: 0
    }} transition={{
        duration: 0.8,
        delay: 0.2
    }}>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-700 bg-clip-text text-transparent mb-4" data-spec-id="WAyGbhnqobctSIli">
                RETRO
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6" data-spec-id="bP397R0rrm6hR7KM">
                Graphic Designer
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" data-spec-id="DEswdrez263VtzCR">
                Bringing vintage aesthetics to modern design. Specialized in creating nostalgic visual experiences 
                that resonate with contemporary audiences.
              </p>
            </motion.div>

            <motion.div data-spec-id="hero-buttons" className="flex flex-col sm:flex-row gap-4 justify-center mb-12" initial={{
        opacity: 0,
        y: 30
    }} animate={{
        opacity: 1,
        y: 0
    }} transition={{
        duration: 0.8,
        delay: 0.4
    }}>
              <AnimatedButton variant="cassette" dataSpecId="view-portfolio-btn" onClick={()=>document.getElementById('portfolio')?.scrollIntoView({
            behavior: 'smooth'
        })} data-spec-id="KM16X9i1N236BQmc">
                <Palette size={20} data-spec-id="nER5iCDSc6Jeajxu"/>
                View Portfolio
              </AnimatedButton>
              <AnimatedButton variant="secondary" dataSpecId="download-resume-btn" data-spec-id="00KmhWO35fg4iURm">
                <Download size={20} data-spec-id="eo0ckXN1MCWJz4JE"/>
                Download Resume
              </AnimatedButton>
            </motion.div>

            <motion.div data-spec-id="cassette-player-container" initial={{
        opacity: 0,
        scale: 0.8
    }} animate={{
        opacity: 1,
        scale: 1
    }} transition={{
        duration: 1,
        delay: 0.6
    }}>
              <CassettePlayer data-spec-id="yaiOkv0oDesP0Jil"/>
            </motion.div>
          </div>
        </ParallaxSection>

        {}
        <motion.div className="absolute top-1/4 left-10 w-8 h-8 bg-orange-400/20 rounded-full" animate={{
        y: [
            0,
            -20,
            0
        ]
    }} transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
    }}/>
        <motion.div className="absolute top-1/3 right-16 w-6 h-6 bg-red-400/20 rounded-full" animate={{
        y: [
            0,
            20,
            0
        ]
    }} transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
    }}/>
      </section>

      {}
      <section id="about" className="py-20 relative" data-spec-id="xyeCXYk33gXa7vI2">
        <ParallaxSection speed={0.3} data-spec-id="VHswcLBzqT8myaLX">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-spec-id="TTWsxJAVqhOuDAq9">
            <motion.div data-spec-id="about-title" className="text-center mb-16" initial={{
        opacity: 0,
        y: 30
    }} whileInView={{
        opacity: 1,
        y: 0
    }} transition={{
        duration: 0.8
    }} viewport={{
        once: true
    }}>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent mb-4" data-spec-id="TREtgeTSdCym5OVt">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" data-spec-id="6ZE1y4itTlvC0hay"/>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center" data-spec-id="M8YjRFbuRcxn0jQC">
              <motion.div data-spec-id="about-content" initial={{
        opacity: 0,
        x: -50
    }} whileInView={{
        opacity: 1,
        x: 0
    }} transition={{
        duration: 0.8
    }} viewport={{
        once: true
    }}>
                <h3 className="text-3xl font-bold text-gray-800 mb-6" data-spec-id="xBKHfo6IwC6RYJ3J">
                  Where Analog Meets Digital
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6" data-spec-id="33rdlltH0vbwu3eI">
                  I'm a passionate graphic designer who believes that the warmth and character of vintage design 
                  can breathe life into modern digital experiences. My work spans across brand identity, 
                  packaging design, and digital interfaces.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8" data-spec-id="qfZiLzHp0WWRIXlu">
                  Inspired by the golden age of analog technology—especially cassette tapes, vinyl records, 
                  and retro electronics—I create designs that evoke nostalgia while solving contemporary design challenges.
                </p>
                
                <div className="grid grid-cols-3 gap-6" data-spec-id="VNayT4J5PPEI1Q0M">
                  <div className="text-center" data-spec-id="oLOBSyaEr9Ur4o5q">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3" data-spec-id="KzhUjPW5jI04PwT7">
                      <Palette className="text-white" size={24} data-spec-id="Rk5pk8Q9kXX39RFe"/>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1" data-spec-id="pVz0Z4IZqo7PLIDT">50+</h4>
                    <p className="text-sm text-gray-600" data-spec-id="eb06PuhHvmHIwyWu">Projects</p>
                  </div>
                  <div className="text-center" data-spec-id="fmkGFYhok08cm137">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3" data-spec-id="7YZRIjvFxxsUfU8d">
                      <Monitor className="text-white" size={24} data-spec-id="8tDXIEmUIWX01zS9"/>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1" data-spec-id="KjydTMChAGvHphJ6">3+</h4>
                    <p className="text-sm text-gray-600" data-spec-id="37nF96aRzYOj8g9s">Years</p>
                  </div>
                  <div className="text-center" data-spec-id="m7I7wQB07VhM991C">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3" data-spec-id="0KMbyqoHzPieq4LL">
                      <Smartphone className="text-white" size={24} data-spec-id="W1xCfVMezq7g2Lz3"/>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1" data-spec-id="T7Nn7S1lDcR7a9cr">25+</h4>
                    <p className="text-sm text-gray-600" data-spec-id="YrYUXWY7hdnY9Awa">Clients</p>
                  </div>
                </div>
              </motion.div>

              <motion.div data-spec-id="about-image" className="relative" initial={{
        opacity: 0,
        x: 50
    }} whileInView={{
        opacity: 1,
        x: 0
    }} transition={{
        duration: 0.8
    }} viewport={{
        once: true
    }}>
                <div className="relative bg-gradient-to-br from-amber-200 via-orange-300 to-red-400 rounded-2xl p-8 shadow-2xl" data-spec-id="DIMAwcPYG1xvN2F7">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" alt="Designer portrait" className="rounded-xl w-full h-80 object-cover" data-spec-id="3nvSXh0eUZek1dut"/>
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-500 rounded-full shadow-lg" data-spec-id="0140AY4Zaj15t8Gd"/>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-orange-500 rounded-full shadow-lg" data-spec-id="G52ZoqxjnmuHJiVL"/>
                </div>
              </motion.div>
            </div>
          </div>
        </ParallaxSection>
      </section>

      {}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-amber-100" data-spec-id="33wKos8nzTqMPNSm">
        <ParallaxSection speed={0.2} data-spec-id="07iwLRXIAlRRl0aA">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-spec-id="OZWSjsm1FtSEaQr7">
            <motion.div data-spec-id="portfolio-title" className="text-center mb-16" initial={{
        opacity: 0,
        y: 30
    }} whileInView={{
        opacity: 1,
        y: 0
    }} transition={{
        duration: 0.8
    }} viewport={{
        once: true
    }}>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent mb-4" data-spec-id="wj0nh3ULQTp0Zneb">
                Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-spec-id="jlDATXBFbHhiY6pY">
                A collection of projects that blend vintage aesthetics with modern functionality
              </p>
            </motion.div>

            <motion.div data-spec-id="portfolio-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" initial={{
        opacity: 0
    }} whileInView={{
        opacity: 1
    }} transition={{
        duration: 0.8
    }} viewport={{
        once: true
    }}>
              {portfolioItems.map((item, index)=>(<motion.div key={index} initial={{
            opacity: 0,
            y: 50
        }} whileInView={{
            opacity: 1,
            y: 0
        }} transition={{
            duration: 0.6,
            delay: index * 0.1
        }} viewport={{
            once: true
        }}>
                  <PortfolioCard dataSpecId={`portfolio-card-${index}`} {...item} data-spec-id="oIAMYbB7MtZvjbGs"/>
                </motion.div>))}
            </motion.div>
          </div>
        </ParallaxSection>
      </section>

      {}
      <section id="contact" className="py-20" data-spec-id="kyPfgu2kCxaNWKi1">
        <ParallaxSection speed={0.1} data-spec-id="BtOSl8of3x8uf3rw">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-spec-id="gdx4nT0yZAio4gEU">
            <motion.div data-spec-id="contact-title" initial={{
        opacity: 0,
        y: 30
    }} whileInView={{
        opacity: 1,
        y: 0
    }} transition={{
        duration: 0.8
    }} viewport={{
        once: true
    }}>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent mb-8" data-spec-id="MdHc7PgcLTV0aLuG">
                Let's Create Together
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12" data-spec-id="nbA6LTP4LqWVaog5">
                Ready to bring some vintage charm to your next project? Let's discuss how we can create something amazing together.
              </p>
            </motion.div>

            <motion.div data-spec-id="contact-buttons" className="flex flex-col sm:flex-row gap-6 justify-center mb-12" initial={{
        opacity: 0,
        y: 30
    }} whileInView={{
        opacity: 1,
        y: 0
    }} transition={{
        duration: 0.8,
        delay: 0.2
    }} viewport={{
        once: true
    }}>
              <a 
                href="mailto:adityanakhate262007@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <AnimatedButton variant="cassette" dataSpecId="email-btn" data-spec-id="FQErxFye9JjBNFDj">
                  <Mail size={20} data-spec-id="STFPjNsnugbzbIdG"/>
                  Send Email
                </AnimatedButton>
              </a>
              <a 
                href="https://www.linkedin.com/in/aditya-nakhate-66197331a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <AnimatedButton variant="secondary" dataSpecId="linkedin-btn" data-spec-id="vLzY57kfCvLnzAq6">
                  <Linkedin size={20} data-spec-id="CKEaXSOxiPujBWpK"/>
                  LinkedIn
                </AnimatedButton>
              </a>
              <a 
                href="https://github.com/H4D35-401" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <AnimatedButton variant="secondary" dataSpecId="github-btn" data-spec-id="QUg7q518BjGxUatL">
                  <Github size={20} data-spec-id="KcGL6bnwyR1J1KVy"/>
                  GitHub
                </AnimatedButton>
              </a>
            </motion.div>

            <motion.div data-spec-id="contact-footer" className="text-gray-500 text-sm" initial={{
        opacity: 0
    }} whileInView={{
        opacity: 1
    }} transition={{
        duration: 0.8,
        delay: 0.4
    }} viewport={{
        once: true
    }}>
              <p data-spec-id="HHbnbtkHI3CUFoct">© 2025 MIT. Crafted with nostalgia and modern technology.</p>
            </motion.div>
          </div>
        </ParallaxSection>
      </section>
    </div>);
};
export default Index;
