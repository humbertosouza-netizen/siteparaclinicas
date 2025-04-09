'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiCheck, FiClock, FiCalendar, FiInfo, FiPhone } from 'react-icons/fi';

type ServiceDetailProps = {
  title: string;
  description: string;
  longDescription: string[];
  benefits: string[];
  duration: string;
  sessions: string;
  aftercare: string[];
  imageUrl?: string;
  imageAlt?: string;
};

export default function ServiceDetail({
  title,
  description,
  longDescription,
  benefits,
  duration,
  sessions,
  aftercare,
  imageUrl = '/images/service-placeholder.jpg',
  imageAlt = 'Imagem do serviço',
}: ServiceDetailProps) {
  return (
    <div className="py-16 bg-light">
      <div className="container mx-auto px-4">
        {/* Título e descrição principais */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-secondary mb-4"
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray">{description}</p>
          </motion.div>
        </div>

        {/* Conteúdo principal */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Lado esquerdo - Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="rounded-lg overflow-hidden shadow-md relative">
              {/* Mostrando um placeholder enquanto não tiver a imagem real */}
              <div className="bg-gray-300 aspect-video w-full relative">
                {imageUrl.includes('placeholder') ? (
                  <div className="absolute inset-0 flex items-center justify-center text-gray">
                    <p>Imagem ilustrativa do procedimento</p>
                  </div>
                ) : (
                  <Image 
                    src={imageUrl} 
                    alt={imageAlt} 
                    fill 
                    className="object-cover" 
                  />
                )}
              </div>
            </div>

            {/* Informações rápidas */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <FiClock className="text-primary mr-2" />
                  <h3 className="font-medium text-secondary">Duração da sessão</h3>
                </div>
                <p className="text-gray-700">{duration}</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <FiCalendar className="text-primary mr-2" />
                  <h3 className="font-medium text-secondary">Número de sessões</h3>
                </div>
                <p className="text-gray-700">{sessions}</p>
              </div>
            </div>
          </motion.div>

          {/* Lado direito - Informações detalhadas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Sobre o tratamento</h2>
              <div className="space-y-4">
                {longDescription.map((paragraph, index) => (
                  <p key={index} className="text-gray-700">{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Benefícios</h2>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {aftercare.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">Cuidados após o procedimento</h2>
                <ul className="space-y-2">
                  {aftercare.map((care, index) => (
                    <li key={index} className="flex items-start">
                      <FiInfo className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{care}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-secondary mb-4">Agende uma consulta</h2>
              <p className="text-gray-700 mb-4">
                Tem interesse neste tratamento? Entre em contato para uma avaliação personalizada.
              </p>
              <Link 
                href="/#contato" 
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-light font-medium py-3 px-6 rounded-full transition duration-300"
              >
                <FiPhone className="mr-2" /> Entrar em contato
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 