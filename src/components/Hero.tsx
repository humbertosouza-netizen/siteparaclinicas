'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-r from-secondary to-black overflow-hidden">
      {/* Overlay com efeito de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-black/70"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-2">
              <span className="text-primary">Realce sua beleza</span> com tecnologia avançada
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              A Clínica Azambuja traz o que há de mais moderno em tratamentos estéticos 
              faciais e corporais para valorizar sua beleza natural.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#servicos" className="bg-primary hover:bg-primary-dark text-light font-medium py-3 px-6 rounded-full flex items-center justify-center transition duration-300 ease-in-out">
              Conheça nossos serviços
              <FiChevronRight className="ml-2" />
            </Link>
            
            <Link href="#contato" className="bg-transparent hover:bg-light/10 text-light border border-light/30 font-medium py-3 px-6 rounded-full flex items-center justify-center transition duration-300 ease-in-out">
              Agende uma consulta
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Elementos decorativos animados */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl"
      />
    </section>
  );
} 