'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

// Tipos para os serviços
type Service = {
  id: string;
  name: string;
  description: string;
};

type ServiceCategory = {
  id: string;
  title: string;
  services: Service[];
};

export default function Services() {
  // Categorias de serviços
  const serviceCategories: ServiceCategory[] = [
    {
      id: 'facial',
      title: 'Facial',
      services: [
        { id: 'botox', name: 'Botox', description: 'Tratamento para rugas e linhas de expressão com toxina botulínica.' },
        { id: 'skinbooster', name: 'Skinbooster', description: 'Hidratação profunda da pele, melhorando textura e luminosidade.' },
        { id: 'bioestimuladores', name: 'Bioestimuladores', description: 'Estimulação da produção de colágeno para rejuvenescimento facial.' },
        { id: 'microagulhamento', name: 'Microagulhamento', description: 'Tratamento que estimula a regeneração da pele e produção de colágeno.' },
        { id: 'fios', name: 'Fios de Sustentação', description: 'Lifting não-cirúrgico com fios que promovem sustentação facial.' },
        { id: 'limpezapele', name: 'Limpeza de Pele', description: 'Remoção de impurezas e células mortas para uma pele mais saudável.' },
        { id: 'plasma', name: 'Jato de Plasma', description: 'Tratamento avançado para rejuvenescimento e correção de imperfeições.' },
        { id: 'papada', name: 'Lipo de Papada', description: 'Redução da gordura localizada na região do pescoço e queixo.' },
        { id: 'peeling', name: 'Peeling', description: 'Renovação celular com aplicação de substâncias que promovem a esfoliação da pele.' },
      ]
    },
    {
      id: 'corporal',
      title: 'Corporal',
      services: [
        { id: 'emagrecimento', name: 'Emagrecimento Rápido (Intramuscular)', description: 'Protocolo de emagrecimento com aplicação intramuscular de substâncias que aceleram o metabolismo.' },
        { id: 'intradermoterapia', name: 'Intradermoterapia', description: 'Aplicação de substâncias na camada dérmica da pele para tratamento de gordura localizada e flacidez.' },
        { id: 'gordura', name: 'Gordura Localizada (Lip Enzimática)', description: 'Tratamento que utiliza enzimas para dissolução da gordura localizada.' },
        { id: 'peim', name: 'Peim (Microvasinhos)', description: 'Tratamento para eliminação de microvasos e vasinhos nas pernas.' },
      ]
    },
    {
      id: 'especial',
      title: 'Tratamentos Especiais',
      services: [
        { id: 'harmonizacao', name: 'Harmonização Facial', description: 'Conjunto de procedimentos que visam harmonizar os traços faciais, realçando a beleza natural.' },
        { id: 'harmonizacaointima', name: 'Harmonização Íntima', description: 'Procedimentos especializados para região íntima feminina, incluindo Ninfoplastia sem cortes, realizado pela Dra. Mayra Azambuja.' },
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState<string>(serviceCategories[0].id);

  // Encontre a categoria ativa
  const activeCategoryData = serviceCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-secondary">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray max-w-2xl mx-auto">
              Oferecemos uma ampla gama de tratamentos estéticos avançados para cuidar 
              da sua beleza de forma segura e eficaz.
            </p>
          </motion.div>
        </div>

        {/* Tabs para categorias */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-gray-200 p-1">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-light'
                    : 'text-gray hover:text-primary'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de serviços */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activeCategoryData?.services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-3 text-secondary group-hover:text-primary transition-colors">
                {service.name}
              </h3>
              <p className="text-gray mb-4">
                {service.description}
              </p>
              <Link href={`/servicos/${service.id}`} className="flex items-center text-primary font-medium group">
                <span className="group-hover:underline">Saiba mais</span>
                <FiChevronRight className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 