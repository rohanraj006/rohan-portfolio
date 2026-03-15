// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Array of links to make rendering easier
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border)] px-6 py-4 rounded-full z-50 flex justify-between items-center shadow-[0_0_20px_var(--color-glow)] transition-colors duration-300">
      
      {/* Logo */}
      <div className="text-[var(--color-text)] font-bold text-xl tracking-wider z-50">
        Rohan<span className="text-[var(--color-accent)]">.</span>
      </div>

      {/* Desktop Navigation (Hidden on Mobile) */}
      <div className="hidden md:flex gap-6 text-sm font-medium text-[var(--color-text-muted)]">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="hover:text-[var(--color-accent)] transition-colors">
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right Side: Theme Toggle, Resume & Mobile Menu Button */}
      <div className="flex items-center gap-3 z-50">
        
        {/* Desktop Download Resume Button */}
        <a 
          href="/resume.pdf" 
          download="Rohan_KR_Resume.pdf"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-[var(--color-accent)] border border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)] hover:text-white transition-all text-sm font-medium shadow-[0_0_15px_var(--color-glow)]"
        >
          <FaDownload className="text-xs" /> Resume
        </a>

        <ThemeToggle />
        
        {/* Hamburger Icon (Visible only on Mobile) */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus:outline-none"
          aria-label="Toggle Mobile Menu"
        >
          {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Animated Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-4 w-full bg-[var(--color-surface)]/95 backdrop-blur-2xl border border-[var(--color-border)] rounded-3xl p-6 flex flex-col gap-6 shadow-2xl md:hidden z-40"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu} // Closes the menu when a link is clicked
                  className="text-lg font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors text-center"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Download Resume Button */}
            <div className="pt-4 border-t border-[var(--color-border)]/50 flex justify-center">
              <a 
                href="/resume.pdf" 
                download="Rohan_KR_Resume.pdf"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[var(--color-accent)] text-white font-medium hover:opacity-90 transition-all shadow-[0_0_15px_var(--color-glow)]"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}