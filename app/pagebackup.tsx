import React from 'react';
import { ChevronRight, Users, Briefcase, PlayCircle, BookOpen, MessageCircle, TrendingUp, CheckCircle, Quote, ArrowUpRight, Percent } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';

// --- ADVANCED SEO & AEO METADATA ---
export const metadata: Metadata = {
  title: 'CapTech Academy | India\'s Premier CFA, FRM, CFP & CAIA Institute',
  description: 'Launch your global finance career with CapTech Academy. Practitioner-led, rigorous coaching for CFA, FRM, CFP, and CAIA certifications in India with 100% placement support.',
  keywords: ['CFA coaching India', 'Best CFA institute India', 'FRM coaching India', 'CFP certification', 'CAIA charter', 'Finance courses Pune', 'Investment banking course', 'H.K. Dwivedi'],
  openGraph: {
    title: 'CapTech Academy | Master Finance. Build Careers.',
    description: 'Structured, practitioner-led preparation for the industry\'s most respected global finance credentials.',
    url: 'https://captechacademy.com',
    siteName: 'CapTech Academy',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  // --- JSON-LD STRUCTURED DATA FOR AI MODELS ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "CapTech Academy",
    "url": "https://captechacademy.com",
    "logo": "https://captechacademy.com/captech-logo.png",
    "description": "India's premier destination for CFA, CFP, FRM and CAIA certification training built on a scalable EdTech platform with full LMS and placement support.",
    "founder": {
      "@type": "Person",
      "name": "H. K. Dwivedi",
      "jobTitle": "CFA Charterholder, Founder"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Global Finance Credentials",
      "itemListElement": [
        { "@type": "Course", "name": "CFA® Program Coaching", "description": "Chartered Financial Analyst Level I, II, and III training." },
        { "@type": "Course", "name": "FRM® Program Coaching", "description": "Financial Risk Manager Part I and II preparation." },
        { "@type": "Course", "name": "CFP® Certification", "description": "Certified Financial Planner comprehensive training." },
        { "@type": "Course", "name": "CAIA® Charter", "description": "Chartered Alternative Investment Analyst preparation." }
      ]
    }
  };

  return (
    <>
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-yellow-500/30">
        
        {/* --- NAVIGATION --- */}
        <header>
          <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-slate-100" aria-label="Main Navigation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-20 items-center">
                <div className="flex-shrink-0 flex items-center">
                  <Image 
                    src="/captech-logo.png" 
                    alt="CapTech Academy - Best CFA Institute in India" 
                    width={190} 
                    height={48} 
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="hidden md:flex space-x-8 items-center">
                  <a href="#about" className="text-xs font-bold tracking-wider text-slate-600 hover:text-[#0E1844] transition-colors">ABOUT</a>
                  <a href="#programmes" className="text-xs font-bold tracking-wider text-slate-600 hover:text-[#0E1844] transition-colors">PROGRAMMES</a>
                  <a href="#careers" className="text-xs font-bold tracking-wider text-slate-600 hover:text-[#0E1844] transition-colors">CAREERS</a>
                  <button className="bg-yellow-500 text-[#0E1844] px-6 py-2.5 rounded font-bold text-xs tracking-wider uppercase hover:bg-yellow-400 transition-all shadow-sm" aria-label="Enquire Now">
                    ENQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* --- HERO SECTION --- */}
        <section className="pt-32 pb-24 bg-[#0E1844] text-white min-h-[90vh] flex items-center relative overflow-hidden" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.08),transparent_45%)]" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-8">
                <div className="flex flex-wrap gap-2" aria-label="Offered Programs">
                  {['CFA®', 'CFP®', 'FRM®', 'CAIA®'].map((badge) => (
                    <span key={badge} className="px-3 py-1 text-xs font-bold bg-white/10 text-yellow-500 rounded border border-white/5 tracking-wider">
                      {badge}
                    </span>
                  ))}
                </div>
                
                <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                  Launch Your Global <br className="hidden sm:inline" />
                  <span className="text-yellow-500">Finance Career</span>
                </h1>
                
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                  Where the serious come to become exceptional. Structured, practitioner-led preparation for the industry's most respected global finance credentials in India.
                </p>
                
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
                  <button className="bg-yellow-500 text-[#0E1844] px-7 py-4 rounded font-bold text-sm tracking-wide hover:bg-yellow-400 transition-all shadow-md flex items-center justify-center gap-2">
                    APPLY NOW <ArrowUpRight size={16} />
                  </button>
                  <button className="bg-white/10 border border-white/20 text-white px-7 py-4 rounded font-bold text-sm tracking-wide hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                    BOOK COUNSELLING
                  </button>
                  <button className="bg-transparent border border-slate-500 text-slate-300 px-7 py-4 rounded font-bold text-sm tracking-wide hover:text-white hover:border-slate-300 transition-all">
                    DOWNLOAD BROCHURE
                  </button>
                </div>
              </div>
              
              <div className="lg:col-span-5">
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-2xl text-slate-900 border-t-4 border-yellow-500 relative z-10">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0E1844]">Begin Your Journey Here</h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-6">Enrollment for the 2026 batch is open. Seats are deliberately limited.</p>
                  
                  <form className="space-y-4" aria-label="Admissions Enquiry Form">
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" name="firstName" placeholder="First Name" aria-label="First Name" className="w-full px-4 py-3 text-sm rounded bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0E1844] focus:ring-1 focus:ring-[#0E1844] outline-none transition-all" required />
                      <input type="text" name="lastName" placeholder="Last Name" aria-label="Last Name" className="w-full px-4 py-3 text-sm rounded bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0E1844] focus:ring-1 focus:ring-[#0E1844] outline-none transition-all" required />
                    </div>
                    <input type="email" name="email" placeholder="Email Address" aria-label="Email Address" className="w-full px-4 py-3 text-sm rounded bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0E1844] focus:ring-1 focus:ring-[#0E1844] outline-none transition-all" required />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="tel" name="phone" placeholder="Mobile Number" aria-label="Mobile Number" className="w-full px-4 py-3 text-sm rounded bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0E1844] focus:ring-1 focus:ring-[#0E1844] outline-none transition-all" required />
                      <input type="text" name="location" placeholder="City / Location" aria-label="City or Location" className="w-full px-4 py-3 text-sm rounded bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0E1844] focus:ring-1 focus:ring-[#0E1844] outline-none transition-all" required />
                    </div>
                    <select name="education" aria-label="Highest Education Level" className="w-full px-4 py-3 text-sm rounded bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0E1844] focus:ring-1 focus:ring-[#0E1844] outline-none text-slate-600" defaultValue="" required>
                      <option value="" disabled>Highest Education Level</option>
                      <option value="undergrad">Undergraduate Student</option>
                      <option value="graduate">Graduate / MBA</option>
                      <option value="professional">Working Professional</option>
                    </select>
                    <select name="program" aria-label="Programme of Interest" className="w-full px-4 py-3 text-sm rounded bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0E1844] focus:ring-1 focus:ring-[#0E1844] outline-none text-slate-600" defaultValue="" required>
                      <option value="" disabled>Programme of Interest</option>
                      <option value="cfa">Chartered Financial Analyst (CFA)</option>
                      <option value="frm">Financial Risk Manager (FRM)</option>
                      <option value="cfp">Certified Financial Planner (CFP)</option>
                      <option value="caia">Alternative Investments (CAIA)</option>
                    </select>
                    <button type="submit" className="w-full bg-[#0E1844] text-white py-3.5 rounded font-bold text-sm tracking-wide hover:bg-slate-800 transition-all mt-2 shadow-sm">
                      SUBMIT ENQUIRY
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- CORPORATE PARTNERS --- */}
        <section className="bg-slate-50 py-10 border-b border-slate-200/60" aria-label="Corporate Placement Partners">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Our Alumni Power Global Finance</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[
                { file: 'deloitte.png', alt: 'Deloitte Corporate Partner' },
                { file: 'nomura.png', alt: 'Nomura Corporate Partner' },
                { file: 'bny-mellon.png', alt: 'BNY Mellon Corporate Partner' },
                { file: 'jpmorgan.png', alt: 'JPMorgan Chase Corporate Partner' },
                { file: 'goldman-sachs.png', alt: 'Goldman Sachs Corporate Partner' }
              ].map((company, idx) => (
                <div key={idx} className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
                  <Image src={`/${company.file}`} alt={company.alt} width={110} height={35} className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHY CAPTECH --- */}
        <section id="about" className="py-24 bg-white" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 id="features-heading" className="text-3xl font-extrabold tracking-tight text-[#0E1844] sm:text-4xl">Four Reasons the Serious Choose Us</h2>
              <p className="text-slate-500 mt-4 text-base">Not marketing promises. Core operational advantages engineered for professional execution.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Industry Mentors", desc: "Learn directly from active charterholders and wealth managers, not career book instructors." },
                { icon: Briefcase, title: "Placement Support", desc: "Built straight into your curriculum: resume optimization, portfolio labs, and tracked recruiter loops." },
                { icon: PlayCircle, title: "Live Cohort Classes", desc: "Interactive lectures tailored specifically for deep conceptual case-based analysis." },
                { icon: BookOpen, title: "High-Yield Learning Hub", desc: "Full structured video playback arrays, templates, and downloadable presentation packs." },
                { icon: MessageCircle, title: "Rapid Doubt Resolution", desc: "Topic-linked support ticketing queues alongside student community discussion modules." },
                { icon: TrendingUp, title: "Career Outcomes Engine", desc: "Built specifically to navigate career transformations from operations or IT into high finance." }
              ].map((signal, idx) => (
                <article key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-white hover:shadow-md transition-all group">
                  <div className="w-10 h-10 bg-[#0E1844]/5 text-[#0E1844] group-hover:bg-yellow-500 group-hover:text-[#0E1844] rounded flex items-center justify-center mb-5 transition-all">
                    <signal.icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0E1844] mb-2">{signal.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{signal.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- PRACTITIONER MOAT --- */}
        <section className="py-20 bg-slate-50 border-t border-b border-slate-100" aria-labelledby="faculty-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0E1844] text-white rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
              <div className="lg:w-7/12 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
                <span className="px-3 py-1 bg-yellow-500 text-[#0E1844] text-xs font-bold uppercase tracking-wider rounded w-max">
                  Faculty Moat
                </span>
                <h2 id="faculty-heading" className="text-3xl font-bold tracking-tight">Finance Education Built by a Practitioner</h2>
                <div className="h-0.5 bg-yellow-500/30 w-24" aria-hidden="true" />
                <h3 className="text-xl font-bold text-yellow-500">H. K. Dwivedi <span className="text-sm font-normal text-slate-400 block sm:inline sm:ml-2">M.Tech (IITK) · MBA · CFA Charterholder</span></h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Most coaching platforms rely entirely on standard workbook instruction. At CapTech Academy, lessons are led by a practitioner who spent 40 years managing active corporate assets and advising global wealth networks.
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  When you review equity multiples or debt valuation with us, you learn exactly how these models function under real market risk environments, bridging the gap between theory and actual financial markets.
                </p>
              </div>
              <div className="lg:w-5/12 bg-slate-800 relative min-h-[350px] flex items-center justify-center text-slate-500 text-xs tracking-wider">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1844] to-transparent lg:hidden" aria-hidden="true" />
                <span>FACULTY PORTRAIT MOUNT POINT</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- ACADEMIC PORTFOLIO --- */}
        <section id="programmes" className="py-24 bg-white" aria-labelledby="programs-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 id="programs-heading" className="text-3xl font-extrabold tracking-tight text-[#0E1844]">Three Paths to Global Credentials</h2>
              <p className="text-slate-500 mt-3 text-sm">Rigorous architecture matching the exact Learning Outcome Statements (LOS) of international certifying bodies.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "CFA® Program", sub: "Chartered Financial Analyst", lines: ["Level I: Financial Tools & Frameworks", "Level II: Advanced Valuation Models", "Level III: Portfolio Architecture"] },
                { title: "FRM® Program", sub: "Financial Risk Manager", lines: ["Part I: Quantitative Foundations & Risk", "Part II: Market, Credit, & Operational Scenario Labs"] },
                { title: "CFP® Certification", sub: "Certified Financial Planner", lines: ["Module Core: Retail Investment Assets", "Module Advanced: Retirement & Comprehensive Tax Strategy"] },
                { title: "CAIA® Charter", sub: "Alternative Investment Analyst", lines: ["Level I: Private Equity & Real Estate Foundations", "Level II: Structured Credit & Hedge Fund Masterclasses"] }
              ].map((prog, idx) => (
                <article key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col group">
                  <div className="h-1.5 bg-[#0E1844]" aria-hidden="true" />
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#0E1844]">{prog.title}</h3>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5 mb-6">{prog.sub}</p>
                    <ul className="space-y-3 mb-6 text-xs text-slate-600 flex-1" aria-label={`${prog.title} curriculum highlights`}>
                      {prog.lines.map((line, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <CheckCircle size={14} className="text-yellow-500 mt-0.5 shrink-0" aria-hidden="true" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-2.5 rounded border border-slate-200 text-xs font-bold text-[#0E1844] hover:bg-[#0E1844] hover:text-white transition-all tracking-wide uppercase mt-auto" aria-label={`View Course Plan for ${prog.title}`}>
                      View Course Plan
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- ROI / SALARY BENCHMARKS --- */}
        <section id="careers" className="py-20 bg-slate-50 border-t border-slate-200/60" aria-labelledby="roi-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 rounded text-green-700 text-xs font-bold tracking-wide">
                  <Percent size={14} aria-hidden="true" /> CLEAR INVESTMENT TRANSPARENCY
                </div>
                <h2 id="roi-heading" className="text-3xl font-extrabold text-[#0E1844] tracking-tight">Engineered for Clear ROI</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We believe in full structural clarity. Every course layout features inline pricing models alongside verified Indian finance hub salary benchmarks.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  All portfolios feature flexible 2 to 4 tranche installment options and integrated low-cost EMI routes to prevent upfront financial barrier dependencies.
                </p>
              </div>
              
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                {[
                  { role: "Portfolio Manager", metric: "₹12L - ₹28L Lakhs Base", focus: "Asset management & strategy tracking" },
                  { role: "Equity Research Analyst", metric: "₹8L - ₹18L Lakhs Base", focus: "Corporate valuation & multiples mapping" },
                  { role: "Financial Risk Manager", metric: "₹9L - ₹22L Lakhs Base", focus: "Counterparty & market exposure labs" },
                  { role: "Investment Banker", metric: "₹14L - ₹35L Lakhs Base", focus: "M&A, ECM corporate deal execution" }
                ].map((bench, i) => (
                  <article key={i} className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">{bench.role}</h3>
                    <p className="text-xl font-extrabold text-[#0E1844] mt-1 mb-2">{bench.metric}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{bench.focus}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS --- */}
        <section className="py-24 bg-[#0E1844] text-white" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight">Hear from the Exceptional</h2>
              <p className="text-slate-400 mt-4 text-sm">Verified feedback from candidates who transformed their capabilities through our program loops.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Aditya Sharma", spec: "CFA Track Candidate", text: "The practitioner focus changes everything. Concepts are matched directly to real balance sheets rather than just abstract text definitions." },
                { name: "Rohan Nair", spec: "FRM Portfolio Alumnus", text: "The High-Yield revision systems and custom assessment setups saved me hundreds of study track hours." },
                { name: "Priya Kulkarni", spec: "Research Analyst Placement", text: "The mock interview panels and dedicated resume alignment loops were vital during my transition phase into corporate asset evaluation." }
              ].map((t, idx) => (
                <blockquote key={idx} className="bg-slate-900/40 p-6 sm:p-8 rounded-xl border border-slate-800 relative">
                  <Quote size={28} className="text-slate-700 absolute top-6 right-6 opacity-40" aria-hidden="true" />
                  <p className="text-slate-300 text-sm italic leading-relaxed mb-6">"{t.text}"</p>
                  <footer className="mt-4">
                    <strong className="font-bold text-white text-base block">{t.name}</strong>
                    <span className="text-xs font-bold text-yellow-500 uppercase tracking-wider mt-1 block">{t.spec}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Site Footer</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 space-y-4">
            <Image 
              src="/captech-logo-white.png" 
              alt="CapTech Academy - White Logo" 
              width={170} 
              height={42} 
              className="object-contain mb-2" 
            />
            <p className="text-xs sm:text-sm max-w-xs leading-relaxed">
              Master Finance. Build Careers. Lead Markets. <br />
              Premium practitioner certification frameworks.
            </p>
            <address className="text-xs text-slate-500 pt-2 not-italic">
              Corporate Campus: Pune, Maharashtra, India. <br />
              Inquiries: <a href="mailto:info@captechacademy.com" className="hover:text-white">info@captechacademy.com</a> · <a href="tel:+917498579125" className="hover:text-white">+91 74985 79125</a>
            </address>
          </div>
          
          <div className="lg:col-span-3 lg:col-start-8">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Core Focus</h3>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">CFA® Learning Outcomes</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">FRM® Risk Management</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">CFP® Investment Planning</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">CAIA® Alternative Assets</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Academy</h3>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Founder Moat</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Methodology</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Admissions 2026</a></li>
            </ul>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 CapTech Academy. All rights reserved.</p>
          <nav className="flex gap-6" aria-label="Footer Legal Navigation">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </nav>
        </div>
      </footer>
    </>
  );
}