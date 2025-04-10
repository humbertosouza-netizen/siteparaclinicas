'use client';

import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-secondary to-white p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-center">
        Clínica de Estética Avançada
      </h1>
      
      <p className="text-xl text-gray-700 max-w-3xl text-center mb-10">
        Bem-vindo ao nosso site. Estamos trabalhando para trazer os melhores tratamentos estéticos para você. 
        Em breve, nosso site completo estará disponível.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="tel:+5566996410251" 
          className="btn-primary py-3 px-8 text-lg font-medium"
        >
          Ligar Agora
        </a>
        
        <a 
          href="https://wa.me/5566996410251" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors"
        >
          WhatsApp
        </a>
      </div>
      
      <WhatsAppButton />
    </main>
  );
}
