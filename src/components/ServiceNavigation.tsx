'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiArrowLeft, FiArrowRight } from '../components/icons';
import { motion } from 'framer-motion';

type ServiceLink = {
  id: string;
  name: string;
  category: string;
};

type ServiceNavigationProps = {
  serviceList: ServiceLink[];
  currentServiceId: string;
  categoryTitle: string;
};

export default function ServiceNavigation({ serviceList, currentServiceId, categoryTitle }: ServiceNavigationProps) {
  const pathname = usePathname();
  
  // Encontra o índice do serviço atual
  const currentIndex = serviceList.findIndex(service => service.id === currentServiceId);
  
  // Calcula o serviço anterior e próximo
  const prevService = currentIndex > 0 ? serviceList[currentIndex - 1] : null;
  const nextService = currentIndex < serviceList.length - 1 ? serviceList[currentIndex + 1] : null;
  
  return (
    <div className="bg-white py-8 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <Link 
              href="/#servicos" 
              className="text-gray-700 hover:text-primary transition-colors flex items-center"
            >
              <FiArrowLeft className="mr-2" />
              Voltar para todos os serviços
            </Link>
          </div>
          
          <div className="text-center mb-4 sm:mb-0">
            <span className="text-gray-700 font-medium">{categoryTitle}</span>
          </div>
          
          <div className="flex space-x-4">
            {prevService && (
              <motion.div whileHover={{ x: -3 }} transition={{ duration: 0.2 }}>
                <Link
                  href={`/servicos/${prevService.id}`}
                  className="flex items-center text-gray-700 hover:text-primary transition-colors"
                >
                  <FiArrowLeft className="mr-2" />
                  <span>{prevService.name}</span>
                </Link>
              </motion.div>
            )}
            
            {nextService && (
              <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href={`/servicos/${nextService.id}`}
                  className="flex items-center text-gray-700 hover:text-primary transition-colors"
                >
                  <span>{nextService.name}</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 