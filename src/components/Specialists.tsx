'use client';

import { motion } from 'framer-motion';
import { FiInstagram } from 'react-icons/fi';
import Image from 'next/image';

type Specialist = {
  id: string;
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  instagram: string;
  // Adicione a URL da imagem quando disponível
  image: string;
};

export default function Specialists() {
  // Especialistas da clínica
  const specialists: Specialist[] = [
    {
      id: 'eliziane',
      name: 'Dra. Eliziane Azambuja',
      role: 'Biomédica Esteta',
      bio: 'Biomédica desde 2009 e esteta há 7 anos, especialista em Bioestimuladores de colágeno, Fios coreanos, Harmonização Facial e Glúteo.',
      credentials: ['CRBM 4048', 'Biomédica desde 2009', 'Esteta há 7 anos'],
      instagram: 'https://www.instagram.com/azambuja.estetica/',
      image: '/images/specialists/dra-eliziane.jpg'
    },
    {
      id: 'mayra',
      name: 'Dra. Mayra Azambuja',
      role: 'Especialista em Harmonização Íntima',
      bio: 'Expert em Harmonização Íntima feminina e especialista em Ninfoplastia sem cortes, trazendo soluções estéticas para a região íntima.',
      credentials: ['Especialista em Harmonização Íntima', 'Expert em Ninfoplastia sem cortes'],
      instagram: 'https://www.instagram.com/azambujaharmonizacao/',
      image: '/images/specialists/dra-mayra.png'
    },
  ];

  return (
    <section id="especialistas" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-secondary">
              Nossas <span className="text-primary">Especialistas</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray max-w-2xl mx-auto">
              Conheça as profissionais altamente qualificadas que vão cuidar da sua beleza 
              com expertise e dedicação.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {specialists.map((specialist) => (
            <motion.div
              key={specialist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 items-center"
            >
              {/* Imagem */}
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent relative">
                <Image 
                  src={specialist.image}
                  alt={specialist.name}
                  width={192}
                  height={192}
                  className={`w-full h-full ${specialist.id === 'mayra' ? 'object-top' : 'object-cover'}`}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFDQJKrQhTKgAAAABJRU5ErkJggg=="
                />
              </div>
              
              {/* Informações */}
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold text-secondary">{specialist.name}</h3>
                <p className="text-primary font-medium mb-3">{specialist.role}</p>
                <p className="text-gray mb-3">{specialist.bio}</p>
                
                <ul className="mb-4 flex flex-wrap gap-2">
                  {specialist.credentials.map((credential, index) => (
                    <li key={index} className="inline-flex text-xs bg-light text-secondary px-2 py-1 rounded">
                      {credential}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={specialist.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                >
                  <FiInstagram className="mr-1" /> {specialist.id === 'eliziane' ? '@azambuja.estetica' : '@azambujaharmonizacao'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 