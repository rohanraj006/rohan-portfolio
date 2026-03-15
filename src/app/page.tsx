// src/app/page.tsx
"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import { motion, Variants } from "framer-motion";
import { FaLinkedin, FaGraduationCap } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center pt-32 overflow-hidden relative">
      {/* High-Performance Backgrounds */}
      <div className="bg-grid-pattern"></div>
      <div className="ambient-glow"></div>

      <Navbar />

      <div className="w-full max-w-5xl mx-auto px-6 pb-24">
        {/* Hero Section */}
        <section id="home" className="w-full min-h-[60vh] flex flex-col-reverse md:flex-row items-center justify-between gap-20 mt-20 ">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col gap-4 text-center md:text-left"
          >
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--color-text)] leading-tight tracking-tight">
              Hi, <br />I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Rohan K R</span>
            </h1>
            
            
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-rose-400 mt-2"
            >
              Software Engineer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-lg font-light leading-relaxed mt-2"
            >
              Data Science Student at SJBIT. Bridging the gap between <strong className="text-purple-300 font-medium">Complex Analytics</strong> and <strong className="text-purple-300 font-medium">Intuitive Design</strong>.
            </motion.p>
          </motion.div>

          {/* Optimized Profile Picture */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            <div className="absolute inset-0 rounded-full profile-ring z-0"></div>
            
              <Image
                src="/profile.jpg"
                alt="Rohan K R"
                fill
                className="rounded-full object-cover border-4 border-[#150e28] shadow-2xl"
                priority
              />
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                className="absolute -bottom-2 -right-2 md:-bottom-6 md:-right-6 bg-[var(--color-surface)]/90 backdrop-blur-xl border border-[var(--color-border)] p-3 md:p-4 rounded-2xl shadow-[0_10px_40px_rgba(139,92,246,0.3)] z-20 flex items-center gap-3"
              >
                <div className="p-2 md:p-3 bg-purple-500/20 rounded-full text-purple-400">
                  <FaGraduationCap className="text-xl md:text-2xl" />
                </div>
                <div className="flex flex-col text-left pr-2">
                  <span className="text-[10px] md:text-xs text-[var(--color-text-muted)] font-bold uppercase tracking-wider">Current CGPA</span>
                  <span className="text-lg md:text-xl font-extrabold text-[var(--color-text)]">8.7</span>
                </div>
              </motion.div>
            
          </motion.div>
        </section>

        {/* --- NEW About Me Section --- */}
        <section id="about" className="w-full mt-32">
          <motion.h2 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-3xl font-bold text-[var(--color-text)] mb-8 text-center tracking-wide"
          >
            About Me
          </motion.h2>
          
          <motion.div 
            variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="p-8 md:p-10 rounded-3xl bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border)]/40 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] transition-all duration-300"
          >
            <div className="flex flex-col gap-6 text-[var(--color-text-muted)] text-lg leading-relaxed font-light">
              <p>
                I am an aspiring <strong className="text-purple-300 font-medium">software engineer</strong> specializing in machine learning, NLP, and data science. I am highly experienced in developing robust, full-stack applications using Flask, FastAPI, and modern web frameworks like Next.js.
              </p>
              <p>
                Currently pursuing my B.E. in Computer Science Engineering (Data Science) at SJB Institute of Technology, I am deeply passionate about building AI-powered solutions that solve real-world problems. My recent work focuses on creating intelligent systems—ranging from AI-driven healthcare platforms for symptom analysis, to high-performance data pipelines for market basket analysis.
              </p>
              <p>
                Beyond writing code, I recently interned at the <strong className="text-purple-300 font-medium">ISRO - URSC Space Navigation Group</strong>, where I modernized critical satellite coordinate systems. I also actively foster developer communities as a Founding Member of my department's technical club, Numinous.
              </p>
            </div>
          </motion.div>
        </section>
        {/* Experience Section */}
        <section id="experience" className="w-full mt-32">
          <motion.h2 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-3xl font-bold text-[var(--color-text)] mb-8 text-center tracking-wide"
          >
            Experience & Leadership
          </motion.h2>
          
          <div className="flex flex-col gap-6">
            <motion.div 
              variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              className="p-6 md:p-8 rounded-2xl bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border)]/40 hover:border-purple-500/50 hover:bg-[var(--color-surface)] transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <h3 className="text-xl font-bold text-[var(--color-text)] group-hover:text-purple-300 transition-colors">ISRO - URSC Space Navigation Group</h3>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300">Mar 2025 - Apr 2025</span>
              </div>
              <p className="text-[var(--color-text-muted)] leading-relaxed font-light">
                Transitioned C programming workflows to Python to store satellite geo-coordinates. Built a database system to convert and store real-time satellite coordinates into PostgreSQL.
              </p>
            </motion.div>

            <motion.div 
              variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              className="p-6 md:p-8 rounded-2xl bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border)]/40 hover:border-purple-500/50 hover:bg-[var(--color-surface)] transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <h3 className="text-xl font-bold text-[var(--color-text)] group-hover:text-purple-300 transition-colors">Founding Member - Numinous</h3>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300">Department Technical Club</span>
              </div>
              <p className="text-[var(--color-text-muted)] leading-relaxed font-light">
                Spearheaded the creation of the department's technical club. Fostered a community of developers and hosted an intercollege hackathon to drive innovation and technical collaboration among students.
              </p>
            </motion.div>
          </div>
        </section>

        <Skills />

        {/* Projects Section */}
        <section id="projects" className="w-full mt-32">
          <motion.h2 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-3xl font-bold text-[var(--color-text)] mb-12 text-center tracking-wide"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={revealVariants} initial="hidden" whileInView="visible" whileHover={{ y: -5 }} viewport={{ once: true, margin: "-50px" }}
              className="group relative rounded-2xl bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border)]/40 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] transition-all duration-300 p-6 md:p-8 flex flex-col gap-4"
            >
              <h3 className="text-2xl font-bold text-[var(--color-text)] group-hover:text-purple-300 transition-colors">AI-Driven Healthcare Platform</h3>
              <p className="text-[var(--color-text-muted)] text-base mb-4 leading-relaxed font-light">
                Developed a platform for wellness plans and real-time audio consultations. Integrated an AI-powered workspace using Whisper and LLMs to summarize medical records and auto-generate prescriptions.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['Python', 'FastAPI', 'MongoDB', 'Whisper AI'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 bg-purple-500/10 rounded-lg text-purple-300 border border-purple-500/20">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={revealVariants} initial="hidden" whileInView="visible" whileHover={{ y: -5 }} viewport={{ once: true, margin: "-50px" }}
              className="group relative rounded-2xl bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border)]/40 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] transition-all duration-300 p-6 md:p-8 flex flex-col gap-4"
            >
              <h3 className="text-2xl font-bold text-[var(--color-text)] group-hover:text-purple-300 transition-colors">Market Basket Analysis</h3>
              <p className="text-[var(--color-text-muted)] text-base mb-4 leading-relaxed font-light">
                Processed 500,000+ retail transactions using Pandas. Implemented the Apriori algorithm for product association and K-Means clustering to segment a customer base of 4,000+ IDs.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                 {['Machine Learning', 'Pandas', 'K-Means'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 bg-purple-500/10 rounded-lg text-purple-300 border border-purple-500/20">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="w-full mt-32 pt-12 pb-8 border-t border-[var(--color-border)]/30 flex flex-col items-center gap-4 relative z-10">
          <h2 className="text-3xl font-bold text-[var(--color-text)]">Let's Connect</h2>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-4">
            <a href="mailto:krrohan060404@gmail.com" className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-purple-400 text-lg transition-all group">
              <SiGmail className="text-2xl text-[#EA4335] group-hover:scale-110 transition-transform" />
              <span>krrohan060404@gmail.com</span>
            </a>
            <span className="hidden md:block text-[var(--color-text-muted)] opacity-50">•</span>
            <a href="https://www.linkedin.com/in/rohan-raj-gowda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-purple-400 text-lg transition-all group">
              <FaLinkedin className="text-2xl text-[#0A66C2] group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
          </div>
          <p className="text-[var(--color-text-muted)]/50 text-sm mt-8 font-light">
            © {new Date().getFullYear()} Rohan K R. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}