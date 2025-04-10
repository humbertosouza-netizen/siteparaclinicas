'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiCheck, FiArrowRight, FiSend } from '../components/icons';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    concerns: [] as string[],
    preferredTreatments: [] as string[],
    availability: '',
    budget: '',
    additionalInfo: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const skinConcerns = [
    'Rugas e linhas finas',
    'Flacidez facial',
    'Manchas na pele',
    'Acne',
    'Olheiras',
    'Poros dilatados',
  ];

  const bodyConcerns = [
    'Gordura localizada',
    'Flacidez corporal',
    'Celulite',
    'Estrias',
    'Varizes',
    'Retenção de líquidos',
  ];

  const treatments = [
    'Botox',
    'Preenchimento facial',
    'Bioestimuladores de colágeno',
    'Harmonização facial',
    'Peeling',
    'Microagulhamento',
    'Intradermoterapia',
    'Drenagem linfática',
    'Radiofrequência',
    'Criolipólise',
    'PEIM',
    'Harmonização íntima',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, category: string) => {
    const { value, checked } = e.target;
    
    if (category === 'concerns') {
      setFormState(prev => ({
        ...prev,
        concerns: checked 
          ? [...prev.concerns, value] 
          : prev.concerns.filter(item => item !== value)
      }));
    } else if (category === 'preferredTreatments') {
      setFormState(prev => ({
        ...prev,
        preferredTreatments: checked 
          ? [...prev.preferredTreatments, value] 
          : prev.preferredTreatments.filter(item => item !== value)
      }));
    }
  };

  const nextStep = () => {
    window.scrollTo({ top: document.getElementById('formContainer')?.offsetTop || 0, behavior: 'smooth' });
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    window.scrollTo({ top: document.getElementById('formContainer')?.offsetTop || 0, behavior: 'smooth' });
    setStep(prev => prev - 1);
  };

  const formatWhatsAppMessage = () => {
    return `*Nova Consulta - Clínica Azambuja*
    
*Nome:* ${formState.name}
*Telefone:* ${formState.phone}
*Email:* ${formState.email}

*Preocupações:* 
${formState.concerns.join(', ')}

*Tratamentos de Interesse:* 
${formState.preferredTreatments.join(', ')}

*Disponibilidade:* 
${formState.availability}

*Orçamento:* 
${formState.budget}

*Informações Adicionais:* 
${formState.additionalInfo}`;
  };

  const handleFinish = () => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsFinished(true);
    }, 1000);
  };

  const goToWhatsApp = () => {
    const message = encodeURIComponent(formatWhatsAppMessage());
    window.open(`https://wa.me/5566996410251?text=${message}`, '_blank');
  };
  
  const renderProgressBar = () => {
    const totalSteps = 5;
    const progress = (step / totalSteps) * 100;
    
    return (
      <div className="w-full mb-8">
        <div className="flex justify-between mb-1 text-xs text-gray-500">
          <span>Seus Dados</span>
          <span>Preocupações</span>
          <span>Tratamentos</span>
          <span>Preferências</span>
          <span>Resumo</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-primary h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-primary">Vamos começar sua jornada de transformação!</h3>
            <p className="text-gray-600 mb-6">
              Compartilhe seus dados para que possamos entender melhor como ajudá-la a realçar sua beleza natural.
            </p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Como podemos chamá-la?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Seu Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Seu Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={nextStep}
                disabled={!formState.name || !formState.phone}
                className="w-full py-3 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Próximo Passo</span>
                <FiArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>
        );
        
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-primary">Conte-nos sobre suas preocupações estéticas</h3>
            <p className="text-gray-600 mb-6">
              Selecione as áreas que mais te incomodam e que você gostaria de melhorar.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Preocupações com a Pele:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {skinConcerns.map(concern => (
                    <div key={concern} className="flex items-center">
                      <input
                        type="checkbox"
                        id={concern}
                        value={concern}
                        checked={formState.concerns.includes(concern)}
                        onChange={(e) => handleCheckboxChange(e, 'concerns')}
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <label htmlFor={concern} className="ml-2 text-sm text-gray-700">
                        {concern}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Preocupações com o Corpo:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {bodyConcerns.map(concern => (
                    <div key={concern} className="flex items-center">
                      <input
                        type="checkbox"
                        id={concern}
                        value={concern}
                        checked={formState.concerns.includes(concern)}
                        onChange={(e) => handleCheckboxChange(e, 'concerns')}
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <label htmlFor={concern} className="ml-2 text-sm text-gray-700">
                        {concern}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                onClick={prevStep}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                Voltar
              </button>
              <button
                onClick={nextStep}
                disabled={formState.concerns.length === 0}
                className="flex-1 py-3 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Próximo</span>
                <FiArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>
        );
        
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-primary">Tratamentos que podem te interessar</h3>
            <p className="text-gray-600 mb-6">
              Selecione os procedimentos que você tem interesse ou gostaria de saber mais.
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              {treatments.map(treatment => (
                <div key={treatment} className="flex items-center">
                  <input
                    type="checkbox"
                    id={treatment}
                    value={treatment}
                    checked={formState.preferredTreatments.includes(treatment)}
                    onChange={(e) => handleCheckboxChange(e, 'preferredTreatments')}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label htmlFor={treatment} className="ml-2 text-sm text-gray-700">
                    {treatment}
                  </label>
                </div>
              ))}
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                onClick={prevStep}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                Voltar
              </button>
              <button
                onClick={nextStep}
                disabled={formState.preferredTreatments.length === 0}
                className="flex-1 py-3 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Próximo</span>
                <FiArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>
        );
        
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-primary">Quase lá! Mais algumas informações...</h3>
            <p className="text-gray-600 mb-6">
              Para podermos te oferecer a melhor experiência possível, conte-nos suas preferências.
            </p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                  Qual sua disponibilidade para consultas?
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formState.availability}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="Manhãs">Manhãs</option>
                  <option value="Tardes">Tardes</option>
                  <option value="Noites">Noites</option>
                  <option value="Finais de semana">Finais de semana</option>
                  <option value="Flexível">Flexível</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                  Qual seu orçamento para os procedimentos?
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formState.budget}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="Até R$ 500">Até R$ 500</option>
                  <option value="De R$ 500 a R$ 1.000">De R$ 500 a R$ 1.000</option>
                  <option value="De R$ 1.000 a R$ 2.000">De R$ 1.000 a R$ 2.000</option>
                  <option value="De R$ 2.000 a R$ 5.000">De R$ 2.000 a R$ 5.000</option>
                  <option value="Acima de R$ 5.000">Acima de R$ 5.000</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                  Alguma informação adicional que queira compartilhar?
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formState.additionalInfo}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Conte-nos mais sobre suas expectativas e necessidades..."
                ></textarea>
              </div>
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                onClick={prevStep}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                Voltar
              </button>
              <button
                onClick={nextStep}
                disabled={!formState.availability || !formState.budget}
                className="flex-1 py-3 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Revisar</span>
                <FiArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>
        );
        
      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-primary">Confirme suas informações</h3>
            <p className="text-gray-600 mb-6">
              {isFinished 
                ? "Ótimo! Suas informações foram enviadas com sucesso. Agora você pode encaminhar este resumo para o nosso WhatsApp."
                : "Verifique se todas as informações estão corretas antes de finalizar."}
            </p>
            
            <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Nome:</h4>
                  <p className="text-gray-800">{formState.name}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Telefone:</h4>
                  <p className="text-gray-800">{formState.phone}</p>
                </div>
                <div className="col-span-2">
                  <h4 className="text-sm font-medium text-gray-500">Email:</h4>
                  <p className="text-gray-800">{formState.email || "Não informado"}</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500">Preocupações estéticas:</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {formState.concerns.map(concern => (
                    <span key={concern} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {concern}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500">Tratamentos de interesse:</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {formState.preferredTreatments.map(treatment => (
                    <span key={treatment} className="bg-secondary/10 text-secondary text-xs px-2 py-1 rounded-full">
                      {treatment}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Disponibilidade:</h4>
                  <p className="text-gray-800">{formState.availability}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Orçamento:</h4>
                  <p className="text-gray-800">{formState.budget}</p>
                </div>
              </div>
              
              {formState.additionalInfo && (
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Informações adicionais:</h4>
                  <p className="text-gray-800">{formState.additionalInfo}</p>
                </div>
              )}
            </div>

            {!isFinished ? (
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={prevStep}
                  className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  Voltar
                </button>
                <button
                  onClick={handleFinish}
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span>Processando...</span>
                      <div className="ml-2 animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    </>
                  ) : (
                    <>
                      <span>Finalizar</span>
                      <FiCheck className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="pt-4">
                <button
                  onClick={goToWhatsApp}
                  className="w-full py-3 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center justify-center"
                >
                  <span>Enviar para WhatsApp</span>
                  <FiSend className="ml-2" />
                </button>
              </div>
            )}
          </motion.div>
        );
        
      default:
        return null;
    }
  };

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
              Transforme-se com <span className="text-primary">Confiança</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
              Dê o primeiro passo para realçar sua beleza natural e aumentar sua autoestima.
              Nossa equipe especializada está pronta para criar um plano personalizado para você.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 justify-center px-4 lg:px-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/3 max-w-md"
          >
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md h-full">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-secondary">Por que nos escolher?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 shrink-0">
                    <FiCheck className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Profissionais Especializados</h4>
                    <p className="text-gray-600 text-sm">
                      Nossa equipe é formada por especialistas com anos de experiência em tratamentos estéticos avançados.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 shrink-0">
                    <FiCheck className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Tecnologia de Ponta</h4>
                    <p className="text-gray-600 text-sm">
                      Utilizamos os equipamentos mais modernos e técnicas inovadoras para garantir resultados excepcionais.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 shrink-0">
                    <FiCheck className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Atendimento Personalizado</h4>
                    <p className="text-gray-600 text-sm">
                      Cada cliente é única e merece um tratamento exclusivo, adaptado às suas necessidades específicas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 shrink-0">
                    <FiCheck className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Resultados Comprovados</h4>
                    <p className="text-gray-600 text-sm">
                      Nossos protocolos de tratamento são cientificamente validados e com resultados visíveis.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <FiPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Agende por telefone</h4>
                    <a href="tel:+556699641-0251" className="text-gray-600 hover:text-primary transition-colors">
                      (66) 99641-0251
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Seg-Sex: 08:00 - 18:00 <br />
                      Sáb: 08:00 - 12:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/3 max-w-2xl"
            id="formContainer"
          >
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              {renderProgressBar()}
              
              <AnimatePresence mode="wait">
                {renderStepContent()}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
