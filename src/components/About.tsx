'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiAward, FiHeart, FiUsers } from 'react-icons/fi';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Imagem */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-lg"></div>
              <div className="relative overflow-hidden rounded-lg">
                {/* Imagem da fachada da clínica */}
                <div className="aspect-square w-full relative">
                  <Image
                    src="/images/clinic/fachada.png"
                    alt="Fachada da Clínica Azambuja"
                    width={500}
                    height={500}
                    priority
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Conteúdo */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-secondary">
              Sobre a <span className="text-primary">Azambuja</span>
            </h2>
            
            <div className="w-20 h-1 bg-primary mb-6"></div>
            
            <p className="text-gray mb-6">
              A Clínica Azambuja é referência em estética avançada em Rondonópolis, 
              oferecendo serviços de alta qualidade com profissionais altamente 
              qualificados. Nossa missão é realçar a beleza natural de cada cliente 
              com tratamentos personalizados e tecnologia de ponta.
            </p>
            
            <p className="text-gray mb-8">
              Fundada pela Dra. Eliziane Azambuja, biomédica desde 2009 e especialista 
              em procedimentos estéticos há mais de 7 anos, nossa clínica traz o que há 
              de mais moderno em tratamentos estéticos para valorizar sua beleza natural.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <FiAward className="text-primary mb-3 text-3xl" />
                <h3 className="font-semibold text-lg mb-1 text-secondary">Experiência</h3>
                <p className="text-gray text-sm">Mais de 7 anos de experiência em estética avançada</p>
              </div>
              
              <div className="p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <FiHeart className="text-primary mb-3 text-3xl" />
                <h3 className="font-semibold text-lg mb-1 text-secondary">Especialização</h3>
                <p className="text-gray text-sm">Especialistas em harmonização facial e corporal</p>
              </div>
              
              <div className="p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <FiUsers className="text-primary mb-3 text-3xl" />
                <h3 className="font-semibold text-lg mb-1 text-secondary">Pacientes</h3>
                <p className="text-gray text-sm">Centenas de clientes satisfeitos em Rondonópolis</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 