import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serviços | Azambuja Clínica de Estética Avançada',
  description: 'Conheça em detalhes os tratamentos estéticos faciais e corporais oferecidos pela Clínica Azambuja.',
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="fixed w-full z-50 bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-primary font-bold">← Voltar para o início</Link>
        </div>
      </header>
      <main className="pt-20">
        {children}
      </main>
      <footer className="bg-secondary py-8 text-center">
        <p className="text-sm text-gray-700">© 2025 Clínica de Estética Avançada. Todos os direitos reservados.</p>
      </footer>
      <WhatsAppButton />
    </>
  );
} 