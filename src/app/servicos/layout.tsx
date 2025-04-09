import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
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
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
} 