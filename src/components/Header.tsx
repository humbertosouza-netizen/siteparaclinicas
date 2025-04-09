'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-secondary/95 shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary">
                <span className="text-accent">A</span>zambuja
              </div>
              <div className="hidden md:block ml-2 text-xs text-light">
                <p>CLÍNICA DE ESTÉTICA AVANÇADA</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-light hover:text-primary font-medium transition">
              Início
            </Link>
            <Link href="#sobre" className="text-light hover:text-primary font-medium transition">
              Sobre
            </Link>
            <Link href="#servicos" className="text-light hover:text-primary font-medium transition">
              Serviços
            </Link>
            <Link href="#especialistas" className="text-light hover:text-primary font-medium transition">
              Especialistas
            </Link>
            <Link href="#agendar" className="text-light hover:text-primary font-medium transition">
              Agende
            </Link>
            <Link href="#contato" className="text-light hover:text-primary font-medium transition">
              Contato
            </Link>
            <a href="https://wa.me/5566996410251?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20tratamentos%20da%20Clínica%20Azambuja." className="bg-primary hover:bg-primary-dark text-light py-2 px-4 rounded-full flex items-center transition-colors">
              <FiPhone className="mr-2" /> (66) 99641-0251
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 text-light focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-secondary shadow-lg py-4 md:hidden"
        >
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-light hover:text-primary font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
              <Link 
                href="#sobre" 
                className="text-light hover:text-primary font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                href="#servicos" 
                className="text-light hover:text-primary font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                href="#especialistas" 
                className="text-light hover:text-primary font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                Especialistas
              </Link>
              <Link 
                href="#agendar" 
                className="text-light hover:text-primary font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                Agende
              </Link>
              <Link 
                href="#contato" 
                className="text-light hover:text-primary font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
              <a 
                href="https://wa.me/5566996410251?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20tratamentos%20da%20Clínica%20Azambuja." 
                className="bg-primary hover:bg-primary-dark text-light py-2 px-4 rounded-full flex items-center justify-center transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <FiPhone className="mr-2" /> (66) 99641-0251
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
} 