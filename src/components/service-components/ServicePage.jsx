import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 } 
    }
  };

  const elementVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: 'easeOut' } 
    }
  };

  const servicesData = [
    {
      title: "Cloud Consulting & Strategy",
      desc: "A successful cloud journey begins with a well-defined strategy. We help organizations evaluate their current infrastructure, identify opportunities for improvement, and develop customized cloud adoption roadmaps aligned with business objectives.",
      items: ["Cloud Readiness Assessment", "Cloud Strategy Development", "Technology Roadmaps", "Infrastructure Planning", "Cost Optimization", "Governance Framework", "Compliance Planning"],
      themeColor: "text-[#807DFE]",
      lineColor: "bg-[#807DFE]"
    },
    {
      title: "Cloud Migration Services",
      desc: "We help organizations transition from traditional infrastructure to secure and scalable cloud environments with minimal disruption to business operations. Our migration process ensures careful planning, data protection, performance optimization, and business continuity throughout every stage of the transition.",
      items: ["Infrastructure Migration", "Application Migration", "Database Migration", "Storage Migration", "Hybrid Cloud Deployment", "Multi-Cloud Integration", "Migration Testing"],
      themeColor: "text-[#27C2AA]",
      lineColor: "bg-[#27C2AA]"
    },
    {
      title: "Cloud Infrastructure Management",
      desc: "Our cloud management services ensure that your infrastructure remains secure, reliable, optimized, and available around the clock.",
      items: ["Infrastructure Monitoring", "Performance Optimization", "Capacity Planning", "Server Management", "Backup & Recovery", "Patch Management", "Cost Monitoring", "Disaster Recovery Planning"],
      themeColor: "text-[#348CD7]",
      lineColor: "bg-[#348CD7]"
    },
    {
      title: "Software Development",
      desc: "We build customized software applications that simplify business operations, automate workflows, and improve customer experiences.",
      items: ["Enterprise Software", "CRM Systems", "ERP Solutions", "Business Portals", "SaaS Applications", "API Integration", "Workflow Automation", "Custom Dashboards"],
      themeColor: "text-[#12239E]",
      lineColor: "bg-[#12239E]"
    },
    {
      title: "Mobile & Web Application Development",
      desc: "We develop secure, responsive, and user-friendly digital applications that support business growth across mobile and web platforms.",
      items: ["Android Applications", "iOS Applications", "Cross-Platform Development", "Corporate Websites", "E-Commerce Platforms", "Customer Portals", "Learning Management Systems", "Business Applications"],
      themeColor: "text-[#807DFE]",
      lineColor: "bg-[#807DFE]"
    },
    {
      title: "Artificial Intelligence & Data Analytics",
      desc: "We help organizations transform data into meaningful insights using intelligent analytics and AI-powered solutions.",
      items: ["Machine Learning", "Predictive Analytics", "Business Intelligence", "Dashboard Development", "Data Warehousing", "AI Chatbots", "Process Automation", "Intelligent Reporting"],
      themeColor: "text-[#27C2AA]",
      lineColor: "bg-[#27C2AA]"
    },
    {
      title: "Cybersecurity Solutions",
      desc: "Digital security is fundamental to business continuity. We provide comprehensive cybersecurity services that protect critical systems, sensitive information, and digital assets.",
      items: ["Security Risk Assessment", "Vulnerability Assessment", "Penetration Testing", "Identity & Access Management", "Endpoint Security", "Security Monitoring", "Compliance Consulting", "Incident Response"],
      themeColor: "text-[#348CD7]",
      lineColor: "bg-[#348CD7]"
    },
    {
      title: "DevOps & Automation",
      desc: "We streamline software delivery and infrastructure management through automation and modern DevOps practices.",
      items: ["CI/CD Pipeline Implementation", "Infrastructure Automation", "Containerization", "Kubernetes Management", "Monitoring Solutions", "Configuration Management", "Performance Optimization"],
      themeColor: "text-[#12239E]",
      lineColor: "bg-[#12239E]"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden selection:bg-[#807DFE]/20">
      
      {/* SECTION 1: SERVICES LAYOUT MATRIX */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-24 px-6 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="mb-20">
          <motion.div variants={elementVariants} className="inline-flex items-center space-x-2 mb-4">
            <span className="h-px w-12 bg-[#807DFE]"></span>
          </motion.div>
          <motion.h1 variants={elementVariants} className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#12239E]">
            Our Technology Services
          </motion.h1>
        </div>

        <div className="space-y-32">
          {[
            {
              title: "Cloud Consulting & Strategy",
              desc: "A successful cloud journey begins with a well-defined strategy. We help organizations evaluate their current infrastructure, identify opportunities for improvement, and develop customized cloud adoption roadmaps aligned with business objectives.",
              items: ["Cloud Readiness Assessment", "Cloud Strategy Development", "Technology Roadmaps", "Infrastructure Planning", "Cost Optimization", "Governance Framework", "Compliance Planning"],
              color: "border-[#807DFE]"
            },
            {
              title: "Cloud Migration Services",
              desc: "We help organizations transition from traditional infrastructure to secure and scalable cloud environments with minimal disruption to business operations. Our migration process ensures careful planning, data protection, performance optimization, and business continuity throughout every stage of the transition.",
              items: ["Infrastructure Migration", "Application Migration", "Database Migration", "Storage Migration", "Hybrid Cloud Deployment", "Multi-Cloud Integration", "Migration Testing"],
              color: "border-[#27C2AA]"
            },
            {
              title: "Cloud Infrastructure Management",
              desc: "Our cloud management services ensure that your infrastructure remains secure, reliable, optimized, and available around the clock.",
              items: ["Infrastructure Monitoring", "Performance Optimization", "Capacity Planning", "Server Management", "Backup & Recovery", "Patch Management", "Cost Monitoring", "Disaster Recovery Planning"],
              color: "border-[#348CD7]"
            },
            {
              title: "Software Development",
              desc: "We build customized software applications that simplify business operations, automate workflows, and improve customer experiences.",
              items: ["Enterprise Software", "CRM Systems", "ERP Solutions", "Business Portals", "SaaS Applications", "API Integration", "Workflow Automation", "Custom Dashboards"],
              color: "border-[#12239E]"
            },
            {
              title: "Mobile & Web Application Development",
              desc: "We develop secure, responsive, and user-friendly digital applications that support business growth across mobile and web platforms.",
              items: ["Android Applications", "iOS Applications", "Cross-Platform Development", "Corporate Websites", "E-Commerce Platforms", "Customer Portals", "Learning Management Systems", "Business Applications"],
              color: "border-[#807DFE]"
            },
            {
              title: "Artificial Intelligence & Data Analytics",
              desc: "We help organizations transform data into meaningful insights using intelligent analytics and AI-powered solutions.",
              items: ["Machine Learning", "Predictive Analytics", "Business Intelligence", "Dashboard Development", "Data Warehousing", "AI Chatbots", "Process Automation", "Intelligent Reporting"],
              color: "border-[#27C2AA]"
            },
            {
              title: "Cybersecurity Solutions",
              desc: "Digital security is fundamental to business continuity. We provide comprehensive cybersecurity services that protect critical systems, sensitive information, and digital assets.",
              items: ["Security Risk Assessment", "Vulnerability Assessment", "Penetration Testing", "Identity & Access Management", "Endpoint Security", "Security Monitoring", "Compliance Consulting", "Incident Response"],
              color: "border-[#348CD7]"
            },
            {
              title: "DevOps & Automation",
              desc: "We streamline software delivery and infrastructure management through automation and modern DevOps practices.",
              items: ["CI/CD Pipeline Implementation", "Infrastructure Automation", "Containerization", "Kubernetes Management", "Monitoring Solutions", "Configuration Management", "Performance Optimization"],
              color: "border-[#12239E]"
            }
          ].map((service, idx) => (
            <motion.div 
              variants={elementVariants} 
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-l-2 ${service.color} pl-6 lg:pl-10`}
            >
              <div className="lg:col-span-5 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#12239E] tracking-tight">{service.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed">{service.desc}</p>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-slate-800 font-medium flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SECTION 2: VERTICAL STRIPES MARKET FOOTPRINT */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-32 px-6 lg:px-16 bg-[#807DFE] border-t border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center lg:text-left">
            <motion.h2 variants={elementVariants} className="text-4xl md:text-5xl font-black text-white leading-tight">
              INDUSTRIES WE SERVE
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-8">
            {[
              "Healthcare", "Banking & Financial Services", "Insurance", "Manufacturing", 
              "Retail & E-Commerce", "Education", "Government", "Logistics & Transportation", 
              "Energy & Utilities", "Telecommunications", "Information Technology", "Startups", 
              "Professional Services", "Hospitality", "Real Estate"
            ].map((industry, idx) => (
              <motion.div 
                variants={elementVariants} 
                key={idx} 
                className="group flex flex-col justify-between border-l border-slate-200 pl-6 py-2 hover:border-[#27C2AA] transition-colors duration-300"
              >
                <span className="text-xl font-bold text-white tracking-tight">
                  {industry}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: EDITORIAL BOLD ACCENT BLOCK */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-32 px-6 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <motion.h2 variants={elementVariants} className="text-4xl md:text-6xl font-black text-[#12239E] tracking-tight">
              WHY CHOOSE <br />CLOUD VERTEX TECHNOLOGIES
            </motion.h2>
          </div>

          <div className="space-y-24 max-w-5xl">
            {[
              {
                title: "Experienced Cloud Professionals",
                desc: "Our certified experts possess extensive experience in designing and managing enterprise cloud environments.",
                accent: "border-[#807DFE]"
              },
              {
                title: "Tailored Technology Solutions",
                desc: "Every organization has unique requirements. We develop customized solutions aligned with your business objectives.",
                accent: "border-[#27C2AA]"
              },
              {
                title: "Security-First Approach",
                desc: "We integrate security into every stage of solution design, implementation, and management.",
                accent: "border-[#348CD7]"
              },
              {
                title: "End-to-End Digital Services",
                desc: "From consulting and implementation to optimization and long-term support, we provide complete technology lifecycle services.",
                accent: "border-[#12239E]"
              },
              {
                title: "Innovation-Driven Culture",
                desc: "We continuously adopt emerging technologies to help our clients remain competitive and future-ready.",
                accent: "border-[#807DFE]"
              },
              {
                title: "Reliable Customer Support",
                desc: "Our dedicated support team ensures timely assistance, proactive monitoring, and continuous system improvement.",
                accent: "border-[#27C2AA]"
              }
            ].map((item, idx) => (
              <motion.div 
                variants={elementVariants} 
                key={idx} 
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-l-4 ${item.accent} pl-6`}
              >
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-extrabold text-[#12239E] tracking-tight leading-none">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-slate-600 text-lg leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 4: HORIZONTAL CONTINUOUS PIPELINE */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-32 px-6 lg:px-16 bg-slate-50/40 border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <motion.h2 variants={elementVariants} className="text-4xl md:text-5xl font-black text-[#12239E]">
              OUR IMPLEMENTATION PROCESS
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12 relative">
            {[
              "Business Discovery", "Technology Assessment", "Solution Design",
              "Architecture Planning", "Development & Configuration", "Testing & Validation",
              "Deployment", "User Training", "Continuous Monitoring & Support"
            ].map((step, idx) => (
              <motion.div 
                variants={elementVariants} 
                key={idx}
                className="flex flex-col justify-between h-32 border-b border-slate-200 pb-6 group"
              >
                <span className="text-2xl font-extrabold text-[#12239E] tracking-tight">
                  {step}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
}