'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight, FiSend } from '../components/icons';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    concerns: [] as string[],
    preferredTreatments: [] as string[],
    availability: '',
    budget: '',
    additionalInfo: '',
  });
  const [isFinished, setIsFinished] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const skinConcerns = [
    'Rugas e Linhas Finas',
    'Flacidez Facial',
    'Manchas na Pele',
    'Acne e Cicatrizes',
    'Poros Dilatados',
    'Olheiras',
    'Papada',
    'Vermelhidão/Rosácea'
  ];

  const bodyConcerns = [
    'Gordura Localizada',
    'Flacidez Corporal',
    'Celulite',
    'Estrias',
    'Varizes',
    'Gordura Abdominal',
    'Retenção de Líquidos',
    'Cicatrizes'
  ];

  const treatments = [
    'Botox',
    'Preenchimento Facial',
    'Bioestimuladores de Colágeno',
    'Peeling Químico',
    'Limpeza de Pele',
    'Microagulhamento',
    'Depilação a Laser',
    'Tratamento para Celulite',
    'Criolipólise',
    'Radiofrequência',
    'Drenagem Linfática',
    'Massagem Modeladora'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'concerns' | 'preferredTreatments') => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormState(prev => ({
        ...prev,
        [field]: [...prev[field], value]
      }));
    } else {
      setFormState(prev => ({
        ...prev,
        [field]: prev[field].filter(item => item !== value)
      }));
    }
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFinish = async () => {
    if (!formState.name || !formState.phone) {
      alert('Por favor, preencha os campos obrigatórios');
      return;
    }

    setIsSubmitting(true);
    
    // Simulando envio de dados para API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsFinished(true);
  };

  const formatWhatsAppMessage = () => {
    return `*Nova Consulta - Clínica Azambuja*
    
*Nome:* ${formState.name}
*Telefone:* ${formState.phone}

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

  const goToWhatsApp = () => {
    const message = encodeURIComponent(formatWhatsAppMessage());
    window.open(`https://wa.me/5566996410251?text=${message}`, '_blank');
  };

  return (
    <section id="agendar" className="py-20 bg-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-secondary">
              Agende uma <span className="text-primary">Avaliação</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray max-w-2xl mx-auto px-4 md:px-0">
              Conte-nos sobre suas preocupações e agende uma avaliação personalizada para transformar sua beleza.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 px-4 lg:px-0">
          {/* Formulário Persuasivo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(step / 5) * 100}%` }}
                  ></div>
                </div>
                <div className="hidden sm:flex justify-between text-xs text-gray-500">
                  <span className={step >= 1 ? "text-primary font-medium" : ""}>Preocupações</span>
                  <span className={step >= 2 ? "text-primary font-medium" : ""}>Tratamentos</span>
                  <span className={step >= 3 ? "text-primary font-medium" : ""}>Preferências</span>
                  <span className={step >= 4 ? "text-primary font-medium" : ""}>Seus Dados</span>
                  <span className={step >= 5 ? "text-primary font-medium" : ""}>Resumo</span>
                </div>
                <div className="flex sm:hidden justify-between text-xs text-gray-500">
                  <span className={step >= 1 ? "text-primary font-medium" : ""}>1</span>
                  <span className={step >= 2 ? "text-primary font-medium" : ""}>2</span>
                  <span className={step >= 3 ? "text-primary font-medium" : ""}>3</span>
                  <span className={step >= 4 ? "text-primary font-medium" : ""}>4</span>
                  <span className={step >= 5 ? "text-primary font-medium" : ""}>5</span>
                </div>
              </div>

              {isFinished ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-10"
                >
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <FiCheck size={30} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">Avaliação Agendada com Sucesso!</h3>
                  <p className="text-gray-600 mb-8 text-sm sm:text-base">
                    Obrigado por compartilhar suas preocupações conosco. Estamos ansiosos para ajudá-la a alcançar seus objetivos estéticos.
                  </p>
                  <button
                    onClick={goToWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 sm:px-8 py-2 sm:py-3 font-medium flex items-center justify-center mx-auto transition w-full sm:w-auto text-sm sm:text-base"
                  >
                    <FiSend className="mr-2" /> Confirmar Agendamento
                  </button>
                </motion.div>
              ) : (
                <div>
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-secondary">Quais são suas preocupações?</h3>
                      <p className="text-gray-600 mb-6">Selecione as áreas que mais te incomodam e ganhe uma <span className="font-semibold text-primary">avaliação personalizada gratuita!</span></p>
                      
                      <div className="mb-6">
                        <h4 className="font-medium text-primary mb-3">Preocupações Faciais:</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {skinConcerns.map(concern => (
                            <div key={concern} className="flex items-start sm:items-center">
                              <input
                                type="checkbox"
                                id={concern}
                                name="concerns"
                                value={concern}
                                onChange={(e) => handleCheckboxChange(e, 'concerns')}
                                className="w-4 h-4 mt-1 sm:mt-0 text-primary border-gray-300 rounded focus:ring-primary"
                              />
                              <label htmlFor={concern} className="ml-2 text-sm text-gray-700">
                                {concern}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-primary mb-3">Preocupações Corporais:</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {bodyConcerns.map(concern => (
                            <div key={concern} className="flex items-start sm:items-center">
                              <input
                                type="checkbox"
                                id={concern}
                                name="concerns"
                                value={concern}
                                onChange={(e) => handleCheckboxChange(e, 'concerns')}
                                className="w-4 h-4 mt-1 sm:mt-0 text-primary border-gray-300 rounded focus:ring-primary"
                              />
                              <label htmlFor={concern} className="ml-2 text-sm text-gray-700">
                                {concern}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-secondary">Tratamentos de Interesse</h3>
                      <p className="text-gray-600 mb-6">Quais tratamentos você gostaria de saber mais? (selecione quantos quiser)</p>
                      
                      <div className="grid grid-cols-1 gap-3">
                        {treatments.map(treatment => (
                          <div key={treatment} className="flex items-start sm:items-center">
                            <input
                              type="checkbox"
                              id={treatment}
                              name="preferredTreatments"
                              value={treatment}
                              onChange={(e) => handleCheckboxChange(e, 'preferredTreatments')}
                              className="w-4 h-4 mt-1 sm:mt-0 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label htmlFor={treatment} className="ml-2 text-sm text-gray-700">
                              {treatment}
                            </label>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-secondary">Suas Preferências</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="availability" className="block text-sm font-medium text-gray mb-1">
                            Qual sua disponibilidade para realizar os tratamentos?
                          </label>
                          <select
                            id="availability"
                            name="availability"
                            value={formState.availability}
                            onChange={handleChange}
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition text-sm sm:text-base"
                          >
                            <option value="">Selecione sua disponibilidade</option>
                            <option value="Manhãs">Manhãs</option>
                            <option value="Tardes">Tardes</option>
                            <option value="Noites">Noites</option>
                            <option value="Finais de semana">Finais de semana</option>
                            <option value="Flexível">Flexível</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-gray mb-1">
                            Qual é o seu orçamento mensal para cuidados estéticos?
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formState.budget}
                            onChange={handleChange}
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition text-sm sm:text-base"
                          >
                            <option value="">Selecione seu orçamento</option>
                            <option value="Até R$ 300">Até R$ 300</option>
                            <option value="R$ 300 a R$ 600">R$ 300 a R$ 600</option>
                            <option value="R$ 600 a R$ 1.000">R$ 600 a R$ 1.000</option>
                            <option value="R$ 1.000 a R$ 2.000">R$ 1.000 a R$ 2.000</option>
                            <option value="Acima de R$ 2.000">Acima de R$ 2.000</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray mb-1">
                            Alguma informação adicional que gostaria de compartilhar?
                          </label>
                          <textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            value={formState.additionalInfo}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Conte-nos mais sobre suas expectativas, dúvidas ou questões específicas..."
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition text-sm sm:text-base"
                          ></textarea>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-secondary">Seus Dados</h3>
                      <div className="space-y-4">
                        <p className="text-gray-600">Apenas mais dois campos para agendar sua <span className="font-semibold text-primary">avaliação personalizada gratuita!</span></p>
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray mb-1">
                            Qual é o seu nome completo?* <span className="text-primary">Obrigatório</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            placeholder="Digite seu nome completo"
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition text-sm sm:text-base"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray mb-1">
                            Qual é o seu número de WhatsApp?* <span className="text-primary">Obrigatório</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            required
                            placeholder="(00) 00000-0000"
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition text-sm sm:text-base"
                            inputMode="tel"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 5 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-secondary">Resumo da Sua Consulta</h3>
                      
                      <div className="bg-gray-50 rounded-lg p-4 sm:p-6 space-y-4 text-sm sm:text-base">
                        <div>
                          <h4 className="font-medium text-primary">Suas Informações:</h4>
                          <p className="text-gray-700">Nome: <span className="font-semibold">{formState.name}</span></p>
                          <p className="text-gray-700">Telefone: <span className="font-semibold">{formState.phone}</span></p>
                        </div>
                        
                        {formState.concerns.length > 0 && (
                          <div>
                            <h4 className="font-medium text-primary">Preocupações Selecionadas:</h4>
                            <ul className="list-disc pl-5 text-gray-700">
                              {formState.concerns.map(item => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {formState.preferredTreatments.length > 0 && (
                          <div>
                            <h4 className="font-medium text-primary">Tratamentos de Interesse:</h4>
                            <ul className="list-disc pl-5 text-gray-700">
                              {formState.preferredTreatments.map(item => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {formState.availability && (
                          <div>
                            <h4 className="font-medium text-primary">Disponibilidade:</h4>
                            <p className="text-gray-700">{formState.availability}</p>
                          </div>
                        )}
                        
                        {formState.budget && (
                          <div>
                            <h4 className="font-medium text-primary">Orçamento:</h4>
                            <p className="text-gray-700">{formState.budget}</p>
                          </div>
                        )}
                        
                        {formState.additionalInfo && (
                          <div>
                            <h4 className="font-medium text-primary">Informações Adicionais:</h4>
                            <p className="text-gray-700">{formState.additionalInfo}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4">
                        <p className="text-xs sm:text-sm text-yellow-800">
                          <strong>Próximo passo:</strong> Ao finalizar, você será redirecionada para confirmar seu agendamento via WhatsApp 
                          com todos os detalhes já preenchidos.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <div className="mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-200 text-gray-800 rounded-lg px-4 sm:px-6 py-2 font-medium hover:bg-gray-300 transition w-full sm:w-auto order-2 sm:order-1 text-sm sm:text-base"
                      >
                        Voltar
                      </button>
                    )}
                    
                    {step < 5 && (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="bg-primary text-white rounded-lg px-4 sm:px-6 py-2 font-medium hover:bg-primary-dark transition w-full sm:w-auto sm:ml-auto order-1 sm:order-2 text-sm sm:text-base"
                      >
                        Próximo <FiArrowRight className="inline ml-1" />
                      </button>
                    )}
                    
                    {step === 5 && (
                      <button
                        type="button"
                        onClick={handleFinish}
                        disabled={isSubmitting}
                        className="bg-primary text-white rounded-lg px-4 sm:px-6 py-2 font-medium hover:bg-primary-dark transition w-full sm:w-auto sm:ml-auto flex items-center justify-center order-1 sm:order-2 text-sm sm:text-base"
                      >
                        {isSubmitting ? 'Processando...' : 'Agendar Avaliação'}
                        {!isSubmitting && <FiCheck className="ml-1" />}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 