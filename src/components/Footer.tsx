import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-secondary text-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-primary">
                  <span className="text-accent">A</span>zambuja
                </div>
                <div className="text-xs">
                  <p>CLÍNICA DE ESTÉTICA AVANÇADA</p>
                </div>
              </div>
            </Link>
            <p className="text-gray-300 mb-4">
              Especialistas em estética facial e corporal com tradição 
              e excelência em Rondonópolis.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/azambuja.estetica/" target="_blank" rel="noopener noreferrer" 
                className="text-light hover:text-primary transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="https://g.co/kgs/f7e7UcM" target="_blank" rel="noopener noreferrer" 
                className="text-light hover:text-primary transition-colors">
                <FiMapPin size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="text-gray-300 hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-gray-300 hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#especialistas" className="text-gray-300 hover:text-primary transition-colors">
                  Especialistas
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-gray-300 hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-primary transition-colors">
                <Link href="#servicos-facial">Estética Facial</Link>
              </li>
              <li className="text-gray-300 hover:text-primary transition-colors">
                <Link href="#servicos-corporal">Estética Corporal</Link>
              </li>
              <li className="text-gray-300 hover:text-primary transition-colors">
                <Link href="#bioestimuladores">Bioestimuladores</Link>
              </li>
              <li className="text-gray-300 hover:text-primary transition-colors">
                <Link href="#harmonizacao">Harmonização Facial</Link>
              </li>
              <li className="text-gray-300 hover:text-primary transition-colors">
                <Link href="#harmonizacao-intima">Harmonização Íntima</Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="mr-2 mt-1 text-primary" />
                <a 
                  href="https://g.co/kgs/f7e7UcM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  R. Irmã Bernada, 925 - Jardim Tropical, Rondonópolis - MT, 78715-194
                </a>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2 text-primary" />
                <a href="tel:+556699641-0251" className="text-gray-300 hover:text-primary transition-colors">
                  (66) 99641-0251
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2 text-primary" />
                <a href="mailto:contato@azambuja.com.br" className="text-gray-300 hover:text-primary transition-colors">
                  contato@azambuja.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Azambuja Clínica de Estética Avançada. Todos os direitos reservados.</p>
          <div className="mt-2 flex items-center justify-center">
            <p>Desenvolvido por</p>
            <a 
              href="https://www.instagram.com/humbertodev.js/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 text-primary hover:text-accent transition-colors inline-flex items-center"
            >
              <span className="italic font-script">Humberto Azambuja</span>
              <FiInstagram className="ml-1" size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 