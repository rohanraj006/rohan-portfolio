// src/components/Skills.tsx
"use client"; // Required for Framer Motion


import { FaPython, FaReact, FaDatabase, FaBrain, FaRobot, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { SiC, SiCplusplus, SiTypescript, SiJavascript, SiFastapi, SiFlask, SiDjango, SiNextdotjs, SiMongodb, SiPostgresql, SiPandas, SiNumpy, SiJupyter, SiFigma } from "react-icons/si";
import { BsStars } from "react-icons/bs";
import { motion, Variants } from "framer-motion";

const skillCategories = [
  // ... (Keep your exact same skillCategories array here to save space)
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    ],
  },
  {
    title: "Web & Databases",
    skills: [
      { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
      { name: "Flask", icon: <SiFlask className="text-[var(--color-text)]" /> },
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-[var(--color-text)]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "SQL", icon: <FaDatabase className="text-[#F29111]" /> },
    ],
  },
  {
    title: "AI & Deep Learning",
    skills: [
      { name: "Transformers", icon: <FaRobot className="text-[#FF9D00]" /> },
      { name: "Whisper AI", icon: <BsStars className="text-[var(--color-accent)]" /> },
      { name: "GenAI", icon: <FaBrain className="text-[#FF4081]" /> },
      { name: "NLP", icon: <FaDatabase className="text-[#4CAF50]" /> },
      { name: "Machine Learning", icon: <FaBrain className="text-[#2196F3]" /> },
    ],
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
      { name: "Pandas", icon: <SiPandas className="text-[#150458]" /> },
      { name: "NumPy", icon: <SiNumpy className="text-[#013243]" /> },
      { name: "Jupyter", icon: <SiJupyter className="text-[#F37626]" /> },
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub className="text-[var(--color-text)]" /> },
    ],
  },
];


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// 3. Add `: Variants` here too
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: -15, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  },
};

export default function Skills() {
  return (
    <section id="skills" className="w-full mt-32 perspective-1000">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center mb-12 text-center"
      >
        <motion.h2 variants={cardVariants} className="text-3xl font-bold text-[var(--color-text)] mb-4">
          Tech Stack & Skills
        </motion.h2>
        <motion.p variants={cardVariants} className="text-[var(--color-text-muted)] max-w-2xl">
          Technologies and tools I use to build high-performance applications and AI-driven solutions.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group p-6 md:p-8 rounded-3xl bg-[var(--color-surface)]/30 backdrop-blur-2xl border border-[var(--color-border)]/50 shadow-[0_8px_32px_0_rgba(139,92,246,0.05)] hover:border-[var(--color-accent)] hover:shadow-[0_0_30px_var(--color-glow)] transition-all duration-300 flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-bg)]/50 backdrop-blur-md border border-[var(--color-border)]/40 text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-accent)] hover:bg-[var(--color-surface)] transition-all duration-300 cursor-default"
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}