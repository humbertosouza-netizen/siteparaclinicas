import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-5xl font-bold text-primary mb-6">404</h1>
        <h2 className="text-2xl font-semibold text-secondary mb-4">
          Página não encontrada
        </h2>
        <p className="text-gray mb-8">
          A página que você está procurando não existe ou foi removida.
          Por favor, verifique o endereço ou retorne à página inicial.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center bg-primary hover:bg-primary-dark text-light font-medium py-3 px-6 rounded-full transition duration-300"
        >
          <FiArrowLeft className="mr-2" /> Voltar para o início
        </Link>
      </div>
    </div>
  );
} 