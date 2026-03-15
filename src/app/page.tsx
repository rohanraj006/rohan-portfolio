// app/page.tsx
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full max-w-5xl mx-auto px-6 pb-24 flex flex-col items-center pt-32">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="w-full min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-12">
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <div className="inline-block px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-accent)] text-sm font-semibold w-max mx-auto md:mx-0">
            Data Science & Software Engineering
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--color-text)] leading-tight">
            Hi, <br></br>I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Rohan K R</span>
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-lg">
            Aspiring software engineer specializing in machine learning, NLP, and data science. Experienced in developing full-stack applications with Flask, FastAPI, and modern web frameworks.
          </p>
          
        </div>

        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-purple-500 rounded-full blur-[80px] opacity-30"></div>
          <Image
            src="/profile.jpg"
            alt="Rohan K R"
            fill
            className="rounded-full object-cover border-3 border-[var(--color-surface)] z-10 relative"
            priority
          />
        </div>
      </section>

      {/* Experience & Leadership Section */}
      <section id="experience" className="w-full mt-32">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8 text-center">Experience & Leadership</h2>
        <div className="flex flex-col gap-6">
          
          {/* ISRO */}
          <div className="p-6 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:shadow-[0_0_15px_var(--color-glow)] transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[var(--color-text)]">ISRO - URSC Space Navigation Group</h3>
              <span className="text-sm text-[var(--color-accent)]">Mar 2025 - Apr 2025</span>
            </div>
            <p className="text-[var(--color-text-muted)]">
              Transitioned C programming workflows to Python to store satellite geo-coordinates. Built a database system to convert and store real-time satellite coordinates into PostgreSQL.
            </p>
          </div>

          {/* Numinous */}
          <div className="p-6 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:shadow-[0_0_15px_var(--color-glow)] transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[var(--color-text)]">Founding Member - Numinous</h3>
              <span className="text-sm text-[var(--color-accent)]">Department Technical Club</span>
            </div>
            <p className="text-[var(--color-text-muted)]">
              Spearheaded the creation of the department's technical club. Fostered a community of developers and hosted an intercollege hackathon to drive innovation and technical collaboration among students.
            </p>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full mt-32">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1 */}
          <div className="group relative rounded-3xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all p-6 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-[var(--color-text)] mt-2">AI-Driven Healthcare Platform</h3>
            <p className="text-[var(--color-text-muted)] text-sm mb-4">
              Developed a platform for wellness plans and real-time audio consultations. Integrated an AI-powered workspace using Whisper and LLMs to summarize medical records and auto-generate prescriptions.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="text-xs px-2 py-1 bg-[var(--color-bg)] rounded-md text-[var(--color-accent)] border border-[var(--color-border)]">Python</span>
              <span className="text-xs px-2 py-1 bg-[var(--color-bg)] rounded-md text-[var(--color-accent)] border border-[var(--color-border)]">FastAPI</span>
              <span className="text-xs px-2 py-1 bg-[var(--color-bg)] rounded-md text-[var(--color-accent)] border border-[var(--color-border)]">MongoDB</span>
              <span className="text-xs px-2 py-1 bg-[var(--color-bg)] rounded-md text-[var(--color-accent)] border border-[var(--color-border)]">Whisper AI</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative rounded-3xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all p-6 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-[var(--color-text)] mt-2">Market Basket Analysis</h3>
            <p className="text-[var(--color-text-muted)] text-sm mb-4">
              Processed 500,000+ retail transactions using Pandas. Implemented the Apriori algorithm for product association and K-Means clustering to segment a customer base of 4,000+ IDs.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="text-xs px-2 py-1 bg-[var(--color-bg)] rounded-md text-[var(--color-accent)] border border-[var(--color-border)]">Machine Learning</span>
              <span className="text-xs px-2 py-1 bg-[var(--color-bg)] rounded-md text-[var(--color-accent)] border border-[var(--color-border)]">Pandas</span>
              <span className="text-xs px-2 py-1 bg-[var(--color-bg)] rounded-md text-[var(--color-accent)] border border-[var(--color-border)]">K-Means</span>
            </div>
          </div>

        </div>
      </section>
      
      <footer className="w-full mt-32 pt-12 border-t border-[var(--color-border)] flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold text-[var(--color-text)]">Let's Connect</h2>
        <a href="mailto:krrohan060404@gmail.com" className="text-[var(--color-accent)] hover:underline text-lg">
          krrohan060404@gmail.com
        </a>
        <p className="text-[var(--color-text-muted)] text-sm mt-8">
          © {new Date().getFullYear()} Rohan K R. All rights reserved.
        </p>
      </footer>
    </main>
  );
}