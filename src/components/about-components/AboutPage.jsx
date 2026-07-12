import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden selection:bg-[#807DFE]/20">
      
      {/* SECTION 1: EDITORIAL OVERVIEW */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 py-20 overflow-hidden"
      >
        {/* Abstract background vector line matching theme colors */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
          <svg className="w-full h-full" viewBox="0 0 500 800" fill="none">
            <path d="M500,0 L100,400 L500,800" stroke="#807DFE" strokeWidth="2" />
            <path d="M500,50 L150,450 L500,850" stroke="#27C2AA" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          <div className="lg:col-span-5 space-y-6">
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2">
              <span className="h-px w-12 bg-[#807DFE]"></span>
            </motion.div>  
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#12239E] leading-[1.1]">
              Empowering Businesses Through <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#807DFE] via-[#348CD7] to-[#27C2AA]">
                Cloud-Driven Innovation
              </span>
            </motion.h1>
          </div>

          <div className="lg:col-span-7 space-y-8 text-slate-700 text-lg leading-relaxed pt-2">
            <motion.p variants={itemVariants} className="font-medium text-xl text-slate-900 border-l-4 border-[#27C2AA] pl-6 py-1">
              Cloud Vertex Technologies is a modern technology company committed to helping organizations
              embrace digital transformation with confidence. We deliver comprehensive cloud and IT solutions
              that simplify business operations, improve efficiency, and support sustainable growth across
              industries.
            </motion.p>
            <motion.p variants={itemVariants} className="pl-6">
              Our name reflects our vision—Cloud represents limitless digital possibilities, while Vertex
              symbolizes reaching the highest level of technological excellence. Together, Cloud Vertex
              Technologies stands for delivering advanced cloud solutions that elevate businesses to their full
              potential.
            </motion.p>
            <motion.p variants={itemVariants} className="pl-6">
              Our multidisciplinary team brings together expertise in cloud architecture, software engineering,
              cybersecurity, artificial intelligence, business intelligence, infrastructure management, and enterprise
              consulting. By combining technical excellence with a deep understanding of business processes, we
              create customized solutions that address today's challenges while preparing organizations for
              tomorrow's opportunities.
            </motion.p>
            <motion.p variants={itemVariants} className="pl-6">
              We believe technology should enable businesses—not complicate them. That's why every solution we
              develop is carefully planned, professionally executed, and designed for long-term scalability, security,
              and performance.
            </motion.p>
            <motion.p variants={itemVariants} className="pl-6">
              Our commitment extends beyond implementation. We establish lasting partnerships by providing
              continuous support, proactive monitoring, technology optimization, and strategic consulting that help
              businesses remain competitive in an ever-changing digital landscape.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: PURPOSE (MISSION & VISION) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-24 px-6 lg:px-16 bg-linear-to-b from-white via-slate-50/60 to-white relative"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Mission Segment */}
          <div className="space-y-6">
            <div className="space-y-2">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold text-[#12239E] uppercase tracking-wide">
                OUR MISSION
              </motion.h2>
            </div>           
            <motion.div variants={itemVariants} className="space-y-6 text-slate-700 leading-relaxed text-lg border-t border-slate-200 pt-6">
              <p>
                Our mission is to enable businesses to harness the full potential of cloud technology by delivering
                innovative, secure, and scalable digital solutions that enhance operational efficiency, improve business
                agility, and support sustainable growth.
              </p>
              <p>
                We are dedicated to understanding each client's unique business environment and delivering
                customized technology solutions that address real-world challenges. Through continuous innovation,
                technical excellence, and a customer-centric approach, we strive to simplify complex technology,
                accelerate digital transformation, and create long-term value for every organization we serve.
              </p>
              <p className="text-base italic text-[#348CD7] font-medium">
                Beyond technology implementation, our mission is to build trusted partnerships by providing reliable
                support, strategic guidance, and future-ready solutions that empower businesses to adapt, innovate,
                and succeed in an increasingly connected world.
              </p>
            </motion.div>
          </div>

          {/* Vision Segment */}
          <div className="space-y-6">
            <div className="space-y-2">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold text-[#12239E] uppercase tracking-wide">
                OUR VISION
              </motion.h2>
            </div>
            <motion.div variants={itemVariants} className="space-y-6 text-slate-700 leading-relaxed text-lg border-t border-slate-200 pt-6">
              <p>
                Our vision is to become a globally recognized leader in cloud technologies and digital transformation,
                helping organizations redefine the way they operate through intelligent, secure, and innovative
                technology solutions.
              </p>
              <p>
                We aspire to create a future where businesses of every size can leverage cloud computing, automation,
                artificial intelligence, and advanced digital platforms to achieve operational excellence and
                sustainable competitive advantage. By fostering a culture of innovation, continuous learning, and
                customer success, we aim to contribute meaningfully to the advancement of industries and the global
                digital economy.
              </p>
              <p>
                As technology continues to evolve, Cloud Vertex Technologies will remain committed to delivering
                solutions that are reliable, scalable, environmentally responsible, and designed to meet the changing
                needs of businesses worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: CORE VALUES */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-24 px-6 lg:px-16 bg-[#348CD7] border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wide">
              OUR CORE VALUES
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              {
                title: "Innovation",
                text: "We embrace emerging technologies and continuously seek better ways to solve business challenges through creative and forward-thinking solutions.",
              },
              {
                title: "Integrity",
                text: "We conduct every engagement with honesty, transparency, accountability, and professional ethics.",
              },
              {
                title: "Excellence",
                text: "We maintain the highest standards of quality in every solution, service, and customer interaction.",
              },
              {
                title: "Customer Commitment",
                text: "Our clients are at the center of everything we do. Their success is our greatest achievement.",
              },
              {
                title: "Collaboration",
                text: "We believe that strong partnerships, teamwork, and open communication create exceptional outcomes.",
              },
              {
                title: "Continuous Improvement",
                text: "We invest in learning, research, innovation, and skill development to remain at the forefront of technology.",
              }
            ].map((value, idx) => (
              <motion.div 
                variants={itemVariants}
                key={idx} 
                className="flex flex-col space-y-4 border-l border-slate-100 pl-6 relative"
              >
                {/* Micro linear bullet vector marker */}
                <div className={`absolute top-2 left-0 w-1 h-4 ${value.color}`} />
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {value.title}
                </h3>
                <p className="text-white leading-relaxed text-base">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}