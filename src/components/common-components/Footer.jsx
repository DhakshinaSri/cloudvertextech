import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const menus = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const servicesList = [
    { name: "Cloud Consulting & Strategy", path: "/services" },
    { name: "Cloud Migration Services", path: "/services" },
    { name: "Cloud Infrastructure Management", path: "/services" },
    { name: "Software Development", path: "/services" },
    { name: "Mobile & Web Application Development", path: "/services" },
    { name: "Artificial Intelligence & Data Analytics", path: "/services" },
    { name: "Cybersecurity Solutions", path: "/services" },
    { name: "DevOps & Automation", path: "/services" },
  ];

  return (
    <footer className="bg-white text-slate-900 font-sans border-t border-slate-100 px-6 lg:px-16 py-16 selection:bg-[#807DFE]/20">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP BLOCK: Intro, Quick Links, Services */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-100">
          
          {/* Intro Segment */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-2xl font-black text-[#12239E] tracking-tight">
              Cloud Vertex <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#807DFE] via-[#348CD7] to-[#27C2AA]">
                Technologies
              </span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed max-w-sm">
              Cloud Vertex Technologies is a leading technology solutions company specializing in cloud
              computing, digital transformation, enterprise software, cybersecurity, artificial intelligence, data
              engineering, and IT infrastructure services.
            </p>
          </div>

          {/* Quick Links Nav Segment */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#348CD7] block">
              Quick Links
            </span>
            <nav className="flex flex-col space-y-3">
              {menus.map((menu, idx) => (
                <Link 
                  key={idx} 
                  to={menu.path}
                  className="text-slate-700 hover:text-[#12239E] font-medium tracking-tight transition-colors duration-200 self-start"
                >
                  {menu.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services List Nav Segment */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#27C2AA] block">
              Our Services
            </span>
            <nav className="flex flex-col space-y-3">
              {servicesList.map((service, idx) => (
                <Link 
                  key={idx} 
                  to={service.path}
                  className="text-slate-700 hover:text-[#12239E] font-medium tracking-tight transition-colors duration-200 text-left"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

        </div>

        {/* MIDDLE BLOCK: Address, Email, Business Hours */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-slate-100 text-slate-700">
          
          {/* Address and Email Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">Corporate Address</span>
              <p className="text-base font-medium leading-relaxed max-w-xs text-slate-800">
                Address
              </p>
            </div>
            <div className="space-y-1 pt-2">
              <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">Communications</span>
              <a 
                href="mailto:contact@cloudvertextech.com"
                className="text-base font-bold text-[#12239E] hover:text-[#807DFE] transition-colors duration-200"
              >
                info@cloudvertextech.in
              </a>
            </div>
          </div>

          {/* Business Hours List */}
          <div className="md:col-span-7 space-y-3">
            <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider mb-2">Business Hours</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="border-l-2 border-[#807DFE] pl-4 py-1">
                <span className="text-xs text-slate-400 font-mono block">MON – FRI</span>
                <span className="text-base font-bold text-slate-800">9:00 AM – 6:00 PM</span>
              </div>
              <div className="border-l-2 border-[#27C2AA] pl-4 py-1">
                <span className="text-xs text-slate-400 font-mono block">SATURDAY</span>
                <span className="text-base font-bold text-slate-800">9:00 AM – 1:00 PM</span>
              </div>
              <div className="border-l-2 border-slate-200 pl-4 py-1">
                <span className="text-xs text-slate-400 font-mono block">SUNDAY</span>
                <span className="text-base font-bold text-slate-400">Closed</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BLOCK: Copyrights */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono text-slate-400 tracking-wider">
          <p>
            © {new Date().getFullYear()} CLOUD VERTEX TECH. ALL RIGHTS RESERVED.
          </p>
          <p className="mt-2 sm:mt-0 text-[10px]">
            ELEVATING BUSINESSES THROUGH INTELLIGENT CLOUD SOLUTIONS
          </p>
        </div>

      </div>
    </footer>
  );
}