import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  // Interactive Hero Grid State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  // Section Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden selection:bg-[#807DFE]/20">
      
      {/* SECTION 1: HERO - INTERACTIVE ISOMETRIC VERTEX ENGINE */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 py-20 overflow-hidden"
      >
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2">
              <span className="h-px w-12 bg-[#807DFE]"></span>
              <span className="text-sm font-semibold tracking-widest uppercase text-[#12239E]">
                Innovation Architecture
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#12239E] leading-[1.1]">
              Cloud Vertex <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#807DFE] via-[#348CD7] to-[#27C2AA]">
                Technologies
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#348CD7] font-medium max-w-xl leading-relaxed border-l-4 border-[#27C2AA] pl-4">
              Elevating Businesses Through Intelligent Cloud Solutions
            </motion.p>
          </div>

          {/* REDESIGNED ANIMATION CANVAS: Cursor-Tracking Grid & Geometric Vertex Mesh */}
          <motion.div 
            variants={itemVariants}
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="lg:col-span-6 relative h-112.5 w-full bg-slate-50/50 rounded-3xl border border-slate-100 flex items-center justify-center overflow-hidden cursor-crosshair group/canvas"
          >
            {/* Dynamic CSS Grid Layer shifting slightly with mouse position */}
            <div 
              className="absolute inset-0 opacity-30 transition-transform duration-300 ease-out pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#348CD7 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                transform: `translate(${(mousePos.x - 50) * 0.1}px, ${(mousePos.y - 50) * 0.1}px)`
              }}
            />

            {/* Premium Multi-Layer Structural Graphic Mesh */}
            <div className="relative w-72 h-72 flex items-center justify-center transform group-hover/canvas:scale-105 transition-transform duration-700 ease-out">
              
              {/* Back Layer Architecture: Rotating Tech Wireframes */}
              <div className="absolute w-full h-full border border-slate-200 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-[80%] h-[80%] border border-dashed border-[#807DFE]/30 rounded-xl animate-[spin_30s_linear_infinite_reverse]" />
              
              {/* Main Structural Linear Path SVG */}
              <svg className="w-full h-full absolute inset-0 pointer-events-none drop-shadow-md" viewBox="0 0 200 200">
                {/* Dynamic responsive lines targeting the cursor position */}
                <line x1="30" y1="40" x2={40 + mousePos.x * 1.2} y2={50 + mousePos.y * 0.8} stroke="#12239E" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="170" y1="60" x2={40 + mousePos.x * 1.2} y2={50 + mousePos.y * 0.8} stroke="#807DFE" strokeWidth="1.5" />
                <line x1="140" y1="160" x2={40 + mousePos.x * 1.2} y2={50 + mousePos.y * 0.8} stroke="#27C2AA" strokeWidth="1.2" />
                <line x1="50" y1="150" x2={40 + mousePos.x * 1.2} y2={50 + mousePos.y * 0.8} stroke="#348CD7" strokeWidth="1" />
                
                {/* Outer Constant Silhouette Wireframe */}
                <polygon points="30,40 170,60 140,160 50,150" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
              </svg>

              {/* Central Dynamic Tracker Node - Intersects exactly with mouse direction */}
              <div 
                className="absolute w-5 h-5 bg-linear-to-tr from-[#12239E] to-[#807DFE] rounded-full shadow-lg shadow-[#807DFE]/50 transition-all duration-300 ease-out pointer-events-none"
                style={{
                  left: `${40 + mousePos.x * 1.2}px`,
                  top: `${50 + mousePos.y * 0.8}px`
                }}
              >
                <span className="absolute inset-0 rounded-full bg-[#807DFE] animate-ping opacity-70" />
              </div>

              {/* Anchored Peripheral Key-Nodes */}
              <div className="absolute top-8 left-6 w-3 h-3 bg-[#12239E] rounded-full shadow" />
              <div className="absolute top-12 right-6 w-4 h-4 bg-[#807DFE] rounded-full shadow transform hover:scale-150 transition-transform" />
              <div className="absolute bottom-8 right-12 w-3.5 h-3.5 bg-[#27C2AA] rounded-full shadow animate-pulse" />
              <div className="absolute bottom-10 left-10 w-3 h-3 bg-[#348CD7] rounded-full shadow" />
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* SECTION 2: NARRATIVE - TYPOGRAPHIC SHOWCASE */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-24 px-6 lg:px-16 bg-linear-to-b from-white via-slate-50/50 to-white relative"
      >
        <div className="max-w-5xl mx-auto space-y-16">
          
          <div className="space-y-4">
            <motion.span variants={itemVariants} className="text-xs font-bold tracking-[0.3em] uppercase text-[#27C2AA] block">
              Our Mission
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-[#12239E] max-w-3xl leading-tight">
              Accelerating Digital Transformation Through Cloud Innovation
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 text-slate-700 leading-relaxed text-lg">
            <motion.div variants={itemVariants} className="md:col-span-7 space-y-6">
              <p className="font-medium text-xl text-slate-800 border-l-2 border-[#807DFE] pl-6 py-2">
                Cloud Vertex Technologies is a leading technology solutions company specializing in cloud
                computing, digital transformation, enterprise software, cybersecurity, artificial intelligence, data
                engineering, and IT infrastructure services. We help organizations modernize their technology
                landscape, optimize business operations, and unlock new opportunities for growth through innovative
                and scalable digital solutions.
              </p>
              <p className="pl-6 text-slate-600">
                As businesses continue to evolve in an increasingly digital world, cloud technology has become the
                foundation for agility, resilience, and innovation. At Cloud Vertex Technologies, we work closely with
                organizations to design, implement, and manage cloud-based solutions that improve operational
                efficiency, strengthen security, and enable long-term business success.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="md:col-span-5 flex flex-col justify-end relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-tr from-[#348CD7]/10 to-transparent rounded-bl-[80px]" />
              <p className="bg-white p-8 border border-slate-100 shadow-xl shadow-slate-200/50 rounded-2xl relative z-10 text-base italic text-[#12239E] font-medium">
                Whether you are migrating to the cloud, modernizing legacy systems, developing enterprise
                applications, or implementing advanced data solutions, our experienced professionals provide end-to-
                end technology services tailored to your unique business objectives.
              </p>
            </motion.div>
          </div>

        </div>
      </motion.section>

      {/* SECTION 3: VALUES - CLEAN TYPOGRAPHIC MESH LAYOUT */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-24 px-6 lg:px-16 bg-[#348CD7] border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 sticky top-8">
              <motion.span variants={itemVariants} className="text-xs font-bold tracking-[0.3em] uppercase text-[#348CD7] block mb-2">
                Capabilities
              </motion.span>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Why Cloud Vertex Technologies?
              </motion.h2>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {[
                "Cloud-First Technology Solutions",
                "Enterprise Software Development",
                "Secure Cloud Infrastructure",
                "Artificial Intelligence & Data Analytics",
                "Cybersecurity Services",
                "DevOps & Automation",
                "24/7 Technical Support",
                "Industry-Specific Digital Solutions"
              ].map((feature, idx) => {
                const colorIndicators = ['bg-white'];
                const currentBadge = colorIndicators[idx % colorIndicators.length];

                return (
                  <motion.div 
                    variants={itemVariants}
                    key={idx} 
                    className="flex items-start space-x-4 py-2"
                  >
                    <div className="flex flex-col items-center mt-2">
                      <div className={`w-2 h-2 rounded-full ${currentBadge}`} />
                      <div className="w-px h-10 bg-slate-100 mt-2" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-white tracking-tight leading-snug">
                        {feature}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </motion.section>

    </div>
  );
}