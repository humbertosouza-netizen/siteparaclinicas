'use client';

import { FiMessageCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  // Número de telefone para o WhatsApp (substitua pelo número real)
  const phoneNumber = '5566996410251';
  const message = 'Olá! Gostaria de mais informações sobre os tratamentos da Clínica Azambuja.';

  // Cria a URL do WhatsApp com o número e mensagem
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary text-light p-4 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 1
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FiMessageCircle size={24} />
      <span className="sr-only">Contato via WhatsApp</span>
    </motion.a>
  );
} 