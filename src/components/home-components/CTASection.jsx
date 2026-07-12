import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CTASection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.15 } 
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
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="py-32 px-6 lg:px-16 bg-white border-t border-slate-100 relative overflow-hidden"
    >
      {/* Decorative background mesh element matching the primary theme colors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#807DFE]/5 via-[#348CD7]/5 to-[#27C2AA]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        <div className="space-y-4">
          <motion.span variants={itemVariants} className="text-xs font-bold tracking-[0.3em] uppercase text-[#348CD7] block">
            Next Steps
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black text-[#12239E] tracking-tight max-w-3xl mx-auto leading-[1.1]">
            Unlock New Opportunities For Growth
          </motion.h2>
        </div>

        <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Whether you are migrating to the cloud, modernizing legacy systems, developing enterprise
          applications, or implementing advanced data solutions, our experienced professionals provide end-to-end technology services tailored to your unique business objectives.
        </motion.p>

        {/* Clean, high-contrast asymmetric action triggers */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <Link
            to="/services"
            className="w-full sm:w-auto px-8 py-4 bg-[#12239E] text-white font-bold tracking-tight rounded-xl shadow-lg shadow-[#12239E]/20 hover:bg-[#807DFE] hover:shadow-[#807DFE]/30 transition-all duration-300 text-center"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#12239E] font-bold tracking-tight rounded-xl border-2 border-slate-200 hover:border-[#27C2AA] hover:text-[#27C2AA] transition-all duration-300 text-center"
          >
            Contact Our Team
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}