// components/Navbar.tsx
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border)] px-6 py-4 rounded-full z-50 flex justify-between items-center shadow-[0_0_20px_var(--color-glow)] transition-colors duration-300">
      <div className="text-[var(--color-text)] font-bold text-xl tracking-wider">
        Rohan<span className="text-[var(--color-accent)]"></span>
      </div>
      <div className="hidden md:flex gap-6 text-sm font-medium text-[var(--color-text-muted)]">
        <Link href="#home" className="hover:text-[var(--color-accent)] transition-colors">Home</Link>
        <Link href="#experience" className="hover:text-[var(--color-accent)] transition-colors">Experience</Link>
        <Link href="#projects" className="hover:text-[var(--color-accent)] transition-colors">Projects</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}