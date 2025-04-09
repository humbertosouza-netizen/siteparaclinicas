import { notFound } from 'next/navigation';
import ServiceDetail from '@/components/ServiceDetail';
import ServiceNavigation from '@/components/ServiceNavigation';
import { getServiceData, getServiceLinks, getCategoryTitle } from '@/data/services';
import type { Metadata } from 'next';

type ServicePageProps = {
  params: {
    serviceId: string;
  };
};

export async function generateMetadata(
  { params }: ServicePageProps,
): Promise<Metadata> {
  const serviceId = params.serviceId;
  
  try {
    const serviceData = getServiceData(serviceId);
    return {
      title: `${serviceData.title} | Azambuja Clínica de Estética`,
      description: serviceData.description,
    };
  } catch {
    return {
      title: 'Serviço não encontrado',
      description: 'O serviço que você está procurando não existe ou foi removido.',
    };
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const { serviceId } = params;
  
  try {
    const serviceData = getServiceData(serviceId);
    const serviceLinks = getServiceLinks(serviceData.category);
    const categoryTitle = getCategoryTitle(serviceData.category);
    
    return (
      <>
        <ServiceNavigation 
          serviceList={serviceLinks} 
          currentServiceId={serviceId} 
          categoryTitle={categoryTitle}
        />
        <ServiceDetail {...serviceData} />
      </>
    );
  } catch {
    notFound();
  }
} 