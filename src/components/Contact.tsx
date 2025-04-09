'use client';

import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-secondary">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray max-w-2xl mx-auto px-4 md:px-0">
              Estamos aqui para responder suas dúvidas e ajudar você a alcançar seus objetivos estéticos.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 justify-center px-4 lg:px-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 max-w-2xl mx-auto"
          >
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md h-full">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-secondary">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <span className="bg-primary/10 p-2 sm:p-3 rounded-lg mr-3 shrink-0">
                    <FiPhone className="text-primary text-lg sm:text-xl" />
                  </span>
                  <div>
                    <h4 className="font-medium text-secondary">Telefone</h4>
                    <a href="tel:+556699641-0251" className="text-gray hover:text-primary transition-colors">
                      (66) 99641-0251
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 shrink-0">
                    <FiMail className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Email</h4>
                    <a href="mailto:contato@azambuja.com.br" className="text-gray hover:text-primary transition-colors break-words">
                      contato@azambuja.com.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 shrink-0">
                    <FiMapPin className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Endereço</h4>
                    <a 
                      href="https://g.co/kgs/f7e7UcM" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray hover:text-primary transition-colors"
                    >
                      R. Irmã Bernada, 925 - Jardim Tropical, Rondonópolis - MT
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-medium text-secondary mb-4">Horário de Atendimento</h4>
                <ul className="space-y-2 text-gray text-sm sm:text-base">
                  <li className="flex justify-between">
                    <span>Segunda - Sexta:</span>
                    <span>08:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado:</span>
                    <span>08:00 - 12:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Fechado</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.8326143137006!2d-54.653042724759406!3d-16.64431483221471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379caa605caad13%3A0x4cd2661a8d695db1!2sR.%20Irm%C3%A3%20Bernada%2C%20925%20-%20Jardim%20Tropical%2C%20Rondon%C3%B3polis%20-%20MT%2C%2078715-194!5e0!3m2!1spt-BR!2sbr!4v1698762972633!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica Azambuja"
                className="w-full h-full min-h-[450px]"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 