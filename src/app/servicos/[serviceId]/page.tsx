import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServiceData, getServiceLinks, getCategoryTitle } from '@/data/services';
import type { Metadata, ResolvingMetadata } from 'next';

type ServicePageProps = {
  params: {
    serviceId: string;
  };
};

export async function generateMetadata(
  { params }: ServicePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const serviceId = params.serviceId;
  
  try {
    const serviceData = getServiceData(serviceId);
    return {
      title: `${serviceData.title} | Azambuja Clínica de Estética`,
      description: serviceData.description,
    };
  } catch (error) {
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
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-lg font-medium text-primary mb-4">{categoryTitle}</h2>
          <div className="flex flex-wrap gap-2">
            {serviceLinks.map((link) => (
              <Link 
                key={link.id}
                href={`/servicos/${link.id}`}
                className={`px-4 py-2 rounded-md text-sm ${
                  link.id === serviceId 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-primary mb-4">{serviceData.title}</h1>
          <p className="text-gray-700 mb-6">{serviceData.description}</p>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Sobre o tratamento</h2>
            {serviceData.longDescription.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-3">{paragraph}</p>
            ))}
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Benefícios</h2>
            <ul className="list-disc pl-5">
              {serviceData.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-700 mb-2">{benefit}</li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Duração</h2>
              <p className="text-gray-700">{serviceData.duration}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Sessões</h2>
              <p className="text-gray-700">{serviceData.sessions}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Cuidados pós-procedimento</h2>
            <ul className="list-disc pl-5">
              {serviceData.aftercare.map((care, index) => (
                <li key={index} className="text-gray-700 mb-2">{care}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8">
            <Link
              href="https://wa.me/5566996410251"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md inline-block font-medium transition-colors"
            >
              Agendar consulta
            </Link>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
} 