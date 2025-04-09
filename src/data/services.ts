// Tipos para os dados dos serviços
export type ServiceLink = {
  id: string;
  name: string;
  category: string;
};

export type ServiceData = {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  benefits: string[];
  duration: string;
  sessions: string;
  aftercare: string[];
  category: string;
  imageUrl?: string;
  imageAlt?: string;
};

type ServiceCategory = {
  id: string;
  title: string;
};

// Categorias de serviços
const serviceCategories: ServiceCategory[] = [
  { id: 'facial', title: 'Estética Facial' },
  { id: 'corporal', title: 'Estética Corporal' },
  { id: 'especial', title: 'Tratamentos Especiais' },
];

// Dados completos dos serviços
export const servicesData: ServiceData[] = [
  // Serviços Faciais
  {
    id: 'botox',
    title: 'Botox',
    description: 'Tratamento para rugas e linhas de expressão com toxina botulínica.',
    longDescription: [
      'O Botox, ou toxina botulínica, é um procedimento minimamente invasivo que diminui temporariamente as rugas faciais ao relaxar os músculos que causam as linhas de expressão.',
      'Este procedimento é especialmente eficaz para suavizar rugas da testa, "pés de galinha" ao redor dos olhos e linhas de expressão entre as sobrancelhas.',
      'Realizado com microinjeções precisas, o tratamento tem efeito progressivo que começa a aparecer após 3 a 7 dias, com resultado completo em até 15 dias.'
    ],
    benefits: [
      'Suaviza rugas e linhas de expressão',
      'Previne o aprofundamento de rugas existentes',
      'Resultado natural e expressivo',
      'Procedimento rápido e com mínimo desconforto',
      'Não necessita de recuperação',
      'Efeitos duradouros (4 a 6 meses)'
    ],
    duration: 'Aproximadamente 30 minutos',
    sessions: 'Sessão única com manutenção a cada 4-6 meses',
    aftercare: [
      'Evitar deitar ou abaixar a cabeça nas primeiras 4 horas',
      'Não massagear a área tratada por 24 horas',
      'Evitar atividades físicas intensas por 24-48 horas',
      'Evitar exposição ao calor excessivo (saunas, banhos muito quentes) no dia do procedimento'
    ],
    category: 'facial'
  },
  {
    id: 'skinbooster',
    title: 'Skinbooster',
    description: 'Hidratação profunda da pele, melhorando textura e luminosidade.',
    longDescription: [
      'O Skinbooster é um tratamento revolucionário de hidratação profunda da pele que utiliza ácido hialurônico em sua formulação, substância naturalmente presente em nosso organismo.',
      'Este procedimento promove a hidratação da pele de dentro para fora, aumentando a firmeza, elasticidade e luminosidade da pele envelhecida ou com danos solares.',
      'As microinjeções de ácido hialurônico são aplicadas na derme média, atraindo água para a área e estimulando a produção natural de colágeno ao longo do tempo.'
    ],
    benefits: [
      'Hidratação profunda e duradoura da pele',
      'Melhora da elasticidade e firmeza',
      'Aumento da luminosidade natural',
      'Redução de cicatrizes de acne',
      'Melhora da textura da pele',
      'Tratamento preventivo para o envelhecimento'
    ],
    duration: '30 a 40 minutos',
    sessions: 'Protocolo inicial de 3 sessões com intervalo de 30 dias, manutenção a cada 4-6 meses',
    aftercare: [
      'Evitar exposição solar direta por pelo menos 48 horas',
      'Não realizar atividades físicas intensas no dia do procedimento',
      'Evitar maquiagem nas primeiras 12 horas',
      'Manter a pele hidratada conforme orientação profissional'
    ],
    category: 'facial'
  },
  {
    id: 'bioestimuladores',
    title: 'Bioestimuladores de Colágeno',
    description: 'Estimulação da produção de colágeno para rejuvenescimento facial.',
    longDescription: [
      'Os bioestimuladores de colágeno são substâncias que, quando injetadas na pele, estimulam a produção natural de colágeno pelo organismo.',
      'Diferente dos preenchedores que têm efeito imediato, os bioestimuladores trabalham progressivamente, com resultados que se intensificam ao longo de 2 a 3 meses.',
      'Este tratamento é ideal para combater a flacidez facial, melhorar o contorno do rosto e restaurar o volume perdido com o envelhecimento, oferecendo resultados naturais e duradouros.'
    ],
    benefits: [
      'Aumento da firmeza e elasticidade da pele',
      'Melhora do contorno facial',
      'Tratamento da flacidez cutânea',
      'Resultados naturais e progressivos',
      'Efeito lifting sem cirurgia',
      'Longa duração (até 24 meses dependendo do produto)'
    ],
    duration: '40 a 60 minutos',
    sessions: 'Geralmente 1 a 2 sessões com intervalo de 30-90 dias, manutenção anual',
    aftercare: [
      'Aplicar compressas frias para minimizar inchaço',
      'Evitar exercícios físicos intensos por 48 horas',
      'Não massagear vigorosamente a área tratada',
      'Evitar exposição solar direta e usar protetor solar diariamente'
    ],
    category: 'facial'
  },
  {
    id: 'microagulhamento',
    title: 'Microagulhamento',
    description: 'Tratamento que estimula a regeneração da pele e produção de colágeno.',
    longDescription: [
      'O microagulhamento é um procedimento que utiliza pequenas agulhas para criar microlesões controladas na pele, ativando o processo natural de cicatrização do corpo e estimulando a produção de colágeno e elastina.',
      'Também conhecido como terapia de indução de colágeno, este tratamento pode ser potencializado com a aplicação de ativos específicos que penetram mais profundamente através dos microcanais criados.',
      'É uma técnica versátil que trata diversas condições como cicatrizes de acne, rugas finas, estrias, manchas e melhora a textura e firmeza da pele.'
    ],
    benefits: [
      'Estímulo natural da produção de colágeno e elastina',
      'Melhora de cicatrizes de acne e outras cicatrizes',
      'Redução de rugas finas e linhas de expressão',
      'Diminuição de poros dilatados',
      'Melhora da textura e tonalidade da pele',
      'Aumento da absorção de produtos cosméticos'
    ],
    duration: '45 a 60 minutos',
    sessions: 'Protocolo de 3 a 6 sessões com intervalo de 30 dias',
    aftercare: [
      'Evitar exposição solar direta por 7 dias',
      'Não aplicar maquiagem nas primeiras 24 horas',
      'Usar apenas os produtos recomendados pelo profissional',
      'Manter a pele bem hidratada',
      'Usar protetor solar de amplo espectro diariamente'
    ],
    category: 'facial'
  },
  {
    id: 'fios',
    title: 'Fios de Sustentação',
    description: 'Lifting não-cirúrgico com fios que promovem sustentação facial.',
    longDescription: [
      'Os fios de sustentação são uma técnica minimamente invasiva que utiliza fios especiais inseridos sob a pele para promover sustentação e estimular a produção de colágeno.',
      'Também conhecidos como fios PDO ou fios coreanos, este tratamento oferece um efeito lifting sem cirurgia, reposicionando os tecidos faciais que sofreram com a ação da gravidade.',
      'Os fios são absorvidos pelo organismo gradualmente (6 a 8 meses), mas o efeito de sustentação permanece por mais tempo devido ao colágeno formado ao redor dos fios.'
    ],
    benefits: [
      'Efeito lifting imediato e natural',
      'Reposicionamento dos contornos faciais',
      'Melhora da flacidez da pele',
      'Estimulação contínua de colágeno',
      'Procedimento minimamente invasivo',
      'Recuperação rápida (poucos dias)'
    ],
    duration: '30 a 60 minutos dependendo da área',
    sessions: 'Sessão única com duração de resultados de 1 a 2 anos',
    aftercare: [
      'Evitar movimentos faciais excessivos nos primeiros dias',
      'Dormir de barriga para cima por 7 dias',
      'Não realizar tratamentos dentários por 15 dias',
      'Evitar massagens faciais por 30 dias',
      'Não praticar exercícios físicos intensos por 7 dias'
    ],
    category: 'facial'
  },
  {
    id: 'limpezapele',
    title: 'Limpeza de Pele',
    description: 'Remoção de impurezas e células mortas para uma pele mais saudável.',
    longDescription: [
      'A limpeza de pele profissional é um procedimento estético que remove impurezas, cravos, células mortas e excesso de oleosidade da pele.',
      'Um tratamento completo envolve várias etapas, incluindo higienização, esfoliação, vapor, extração e finalização com produtos específicos para o tipo de pele.',
      'Além de limpar profundamente os poros, o procedimento prepara a pele para absorver melhor os princípios ativos de outros tratamentos e produtos cosméticos.'
    ],
    benefits: [
      'Remoção de cravos e impurezas',
      'Desobstrução dos poros',
      'Controle da oleosidade',
      'Prevenção de acne e espinhas',
      'Renovação celular',
      'Pele mais luminosa e saudável'
    ],
    duration: '60 a 90 minutos',
    sessions: 'Recomendado a cada 30-45 dias, dependendo do tipo de pele',
    aftercare: [
      'Evitar exposição solar direta por 48 horas',
      'Não usar maquiagem nas primeiras 12 horas',
      'Evitar produtos com ácidos por 24-48 horas',
      'Manter a pele hidratada conforme orientação profissional',
      'Usar protetor solar de amplo espectro diariamente'
    ],
    category: 'facial'
  },
  {
    id: 'plasma',
    title: 'Jato de Plasma',
    description: 'Tratamento avançado para rejuvenescimento e correção de imperfeições.',
    longDescription: [
      'O Jato de Plasma é uma tecnologia avançada que utiliza energia plasmática (o quarto estado da matéria) para tratar diversas imperfeições da pele sem contato direto.',
      'Este procedimento causa uma micro-sublimação controlada da pele, que promove contração imediata dos tecidos e estimula intensamente a produção de colágeno.',
      'Muito eficaz para o rejuvenescimento periocular (pálpebras), linhas de expressão, cicatrizes, estrias e remoção de pequenas lesões benignas da pele.'
    ],
    benefits: [
      'Efeito lifting não-cirúrgico',
      'Redução significativa de rugas e linhas finas',
      'Melhora da flacidez das pálpebras (blefaroplastia sem cirurgia)',
      'Diminuição de cicatrizes e estrias',
      'Remoção de manchas e lesões superficiais',
      'Resultados progressivos e duradouros'
    ],
    duration: '30 a 60 minutos dependendo da área',
    sessions: '1 a 3 sessões com intervalo de 45-60 dias',
    aftercare: [
      'Formação de crostas que não devem ser removidas (caem naturalmente em 5-7 dias)',
      'Aplicar produtos cicatrizantes conforme orientação',
      'Evitar exposição solar direta por pelo menos 30 dias',
      'Não usar maquiagem até a completa cicatrização',
      'Usar protetor solar de amplo espectro após cicatrização'
    ],
    category: 'facial'
  },
  {
    id: 'papada',
    title: 'Lipo de Papada',
    description: 'Redução da gordura localizada na região do pescoço e queixo.',
    longDescription: [
      'A Lipo de Papada é um procedimento não-cirúrgico que utiliza substâncias específicas para eliminar o acúmulo de gordura na região submentoniana (papada).',
      'Esse tratamento atua dissolvendo as células de gordura localizada, que são depois naturalmente eliminadas pelo sistema linfático do organismo.',
      'Além de reduzir o volume da papada, o procedimento também melhora o contorno facial, definindo melhor a linha do maxilar e proporcionando uma aparência mais jovem.'
    ],
    benefits: [
      'Redução da gordura localizada na papada',
      'Definição do contorno mandibular',
      'Melhora do perfil facial',
      'Resultados permanentes (desde que mantido o peso)',
      'Procedimento minimamente invasivo',
      'Pouco tempo de recuperação'
    ],
    duration: '30 a 45 minutos',
    sessions: '2 a 4 sessões com intervalo de 30-45 dias',
    aftercare: [
      'Inchaço e possível hematoma nos primeiros dias (normal e esperado)',
      'Usar compressas frias para reduzir o inchaço',
      'Evitar atividades físicas intensas por 48-72 horas',
      'Manter a cabeça elevada ao dormir por 2-3 dias',
      'Usar bandagem compressiva conforme orientação'
    ],
    category: 'facial'
  },
  {
    id: 'peeling',
    title: 'Peeling',
    description: 'Renovação celular com aplicação de substâncias que promovem a esfoliação da pele.',
    longDescription: [
      'O Peeling é um procedimento estético que utiliza substâncias químicas, enzimáticas ou físicas para promover a esfoliação controlada das camadas da pele.',
      'Este tratamento acelera o processo natural de renovação celular, removendo células mortas e estimulando a produção de colágeno e elastina.',
      'Existem diferentes tipos de peelings com profundidades variadas, desde os superficiais (mais suaves) até os profundos, cada um indicado para condições específicas da pele.'
    ],
    benefits: [
      'Renovação celular acelerada',
      'Uniformização do tom da pele',
      'Redução de manchas e melasma',
      'Melhora da textura e luminosidade',
      'Diminuição de linhas finas',
      'Controle da oleosidade e acne'
    ],
    duration: '30 a 60 minutos',
    sessions: 'Varia conforme o tipo de peeling: superficial (4-6 sessões), médio (2-3 sessões) ou profundo (sessão única)',
    aftercare: [
      'Descamação controlada nos dias seguintes (varia conforme intensidade do peeling)',
      'Evitar exposição solar direta por pelo menos 7-30 dias',
      'Não esfoliar a pele durante o período de descamação',
      'Manter a pele bem hidratada',
      'Usar protetor solar de amplo espectro rigorosamente'
    ],
    category: 'facial'
  },

  // Serviços Corporais
  {
    id: 'emagrecimento',
    title: 'Emagrecimento Rápido (Intramuscular)',
    description: 'Protocolo de emagrecimento com aplicação intramuscular de substâncias que aceleram o metabolismo.',
    longDescription: [
      'O tratamento de Emagrecimento Rápido Intramuscular utiliza uma combinação específica de substâncias que, aplicadas via injeção intramuscular, potencializam o metabolismo e a queima de gordura.',
      'Este protocolo atua em múltiplas frentes: acelerando o metabolismo, melhorando a circulação sanguínea e linfática, e otimizando a queima de gordura localizada.',
      'As aplicações são parte de um programa completo que inclui orientações nutricionais e de atividade física para potencializar os resultados.'
    ],
    benefits: [
      'Aceleração do metabolismo',
      'Redução da retenção de líquidos',
      'Diminuição da fome ansiosa',
      'Aumento da energia e disposição',
      'Melhora da circulação',
      'Resultados visíveis em curto prazo'
    ],
    duration: '15 a 20 minutos por sessão',
    sessions: 'Protocolo de 8 a 10 sessões semanais ou bissemanais',
    aftercare: [
      'Manter boa hidratação (pelo menos 2 litros de água por dia)',
      'Seguir as orientações nutricionais fornecidas',
      'Praticar atividade física regularmente conforme orientação',
      'Evitar alimentos ultraprocessados e excesso de carboidratos simples'
    ],
    category: 'corporal'
  },
  {
    id: 'intradermoterapia',
    title: 'Intradermoterapia',
    description: 'Aplicação de substâncias na camada dérmica da pele para tratamento de gordura localizada e flacidez.',
    longDescription: [
      'A Intradermoterapia, também conhecida como mesoterapia, é um procedimento que consiste na aplicação de injeções de substâncias específicas na camada dérmica da pele.',
      'Este tratamento utiliza microinjeções de ativos liporeductores, drenantes e firmadores que atuam diretamente nas áreas de gordura localizada e flacidez.',
      'O procedimento é altamente personalizável, com diferentes protocolos e ativos que são escolhidos conforme as necessidades específicas de cada paciente e área a ser tratada.'
    ],
    benefits: [
      'Redução da gordura localizada',
      'Melhora da flacidez cutânea',
      'Diminuição do aspecto "casca de laranja" (celulite)',
      'Definição do contorno corporal',
      'Ação localizada e direcionada',
      'Procedimento minimamente invasivo'
    ],
    duration: '30 a 45 minutos',
    sessions: '8 a 10 sessões, com frequência semanal ou quinzenal',
    aftercare: [
      'Possível vermelhidão e pequenos hematomas que desaparecem em poucos dias',
      'Manter boa hidratação',
      'Evitar exposição solar direta na área tratada por 48 horas',
      'Seguir as orientações de alimentação e atividade física para potencializar resultados'
    ],
    category: 'corporal'
  },
  {
    id: 'gordura',
    title: 'Gordura Localizada (Lipo Enzimática)',
    description: 'Tratamento que utiliza enzimas para dissolução da gordura localizada.',
    longDescription: [
      'A Lipo Enzimática é um procedimento minimamente invasivo que utiliza enzimas específicas para promover a dissolução da gordura localizada.',
      'Este tratamento atua quebrando as células de gordura (adipócitos) que posteriormente são eliminadas naturalmente pelo sistema linfático do organismo.',
      'A técnica é precisa e permite trabalhar áreas específicas, sendo uma alternativa não cirúrgica para redução de gordura localizada em regiões como abdômen, flancos, culotes e papada.'
    ],
    benefits: [
      'Redução efetiva da gordura localizada',
      'Remodelação do contorno corporal',
      'Procedimento minimamente invasivo',
      'Recuperação rápida',
      'Resultados duradouros com manutenção de peso',
      'Pode ser aplicado em diversas áreas do corpo'
    ],
    duration: '45 a 60 minutos',
    sessions: '2 a 4 sessões com intervalo de 30 a 45 dias',
    aftercare: [
      'Inchaço e possíveis hematomas nos primeiros dias',
      'Usar cinta compressiva conforme orientação',
      'Evitar atividades físicas intensas por 48-72 horas',
      'Massagens drenantes podem ser recomendadas após 72 horas',
      'Manter boa hidratação para facilitar a eliminação da gordura'
    ],
    category: 'corporal'
  },
  {
    id: 'peim',
    title: 'Peim (Microvasinhos)',
    description: 'Tratamento para eliminação de microvasos e vasinhos nas pernas.',
    longDescription: [
      'O PEIM (Procedimento Estético Injetável para Microvasos) é uma técnica especializada para o tratamento de microvasos, vasinhos e pequenas varizes nas pernas.',
      'Este procedimento utiliza substâncias esclerosantes que, quando injetadas dentro dos vasos, causam uma irritação controlada que leva ao fechamento e posterior absorção desses vasos pelo organismo.',
      'O tratamento é preciso e direcionado, permitindo tratar especificamente os vasos inestéticos sem afetar a circulação principal das pernas.'
    ],
    benefits: [
      'Eliminação efetiva de microvasos e vasinhos',
      'Melhora significativa na aparência estética das pernas',
      'Procedimento ambulatorial e minimamente invasivo',
      'Pouco desconforto durante a aplicação',
      'Não interfere nas atividades diárias',
      'Resultados visíveis após poucas sessões'
    ],
    duration: '30 a 45 minutos',
    sessions: '3 a 6 sessões com intervalo de 15 a 30 dias',
    aftercare: [
      'Usar meias de compressão conforme orientação (geralmente por 24-48 horas)',
      'Evitar exposição solar direta nas áreas tratadas por 30 dias',
      'Não praticar atividades físicas intensas por 48 horas',
      'Evitar calor local (banhos quentes, saunas) por 48 horas',
      'Caminhar regularmente para estimular a circulação'
    ],
    category: 'corporal'
  },

  // Tratamentos Especiais
  {
    id: 'harmonizacao',
    title: 'Harmonização Facial',
    description: 'Conjunto de procedimentos que visam harmonizar os traços faciais, realçando a beleza natural.',
    longDescription: [
      'A Harmonização Facial é um conceito que engloba diversos procedimentos estéticos minimamente invasivos combinados de forma personalizada para cada paciente.',
      'O objetivo é equilibrar as proporções e simetria do rosto, valorizar os pontos fortes e corrigir assimetrias, sempre respeitando as características naturais da pessoa.',
      'Este tratamento pode incluir toxina botulínica, preenchedores de ácido hialurônico, bioestimuladores de colágeno, fios de sustentação e outras técnicas, aplicadas de forma artística e tecnicamente precisa.'
    ],
    benefits: [
      'Correção de assimetrias faciais',
      'Definição do contorno facial',
      'Suavização de rugas e linhas de expressão',
      'Restauração de volumes perdidos com o envelhecimento',
      'Melhora do aspecto da pele',
      'Resultados naturais e personalizados'
    ],
    duration: '60 a 120 minutos (dependendo dos procedimentos)',
    sessions: 'Protocolo personalizado, geralmente 1 a 3 sessões iniciais com manutenções periódicas',
    aftercare: [
      'Cuidados específicos variam conforme os procedimentos realizados',
      'Evitar exposição solar direta',
      'Não realizar atividades físicas intensas por 24-48 horas',
      'Evitar manipular ou massagear as áreas tratadas',
      'Seguir rigorosamente as orientações pós-procedimento específicas'
    ],
    category: 'especial'
  },
  {
    id: 'harmonizacaointima',
    title: 'Harmonização Íntima',
    description: 'Procedimentos especializados para região íntima feminina, incluindo Ninfoplastia sem cortes, realizado pela Dra. Mayra Azambuja.',
    longDescription: [
      'A Harmonização Íntima engloba procedimentos estéticos minimamente invasivos voltados para a região genital feminina, com foco em melhorar tanto a estética quanto a funcionalidade.',
      'A Dra. Mayra Azambuja é especialista em Ninfoplastia sem cortes, uma técnica revolucionária e não-cirúrgica para redução dos pequenos lábios, oferecendo resultados naturais sem a necessidade de cirurgia tradicional.',
      'Além da ninfoplastia, o programa pode incluir tratamentos para clareamento da região, aumento do ponto G, tratamento para flacidez e ressecamento vaginal, e outros procedimentos personalizados para cada paciente.'
    ],
    benefits: [
      'Melhora da estética da região íntima',
      'Correção de assimetrias ou hipertrofia dos pequenos lábios',
      'Aumento da confiança e autoestima',
      'Redução do desconforto físico em algumas atividades',
      'Procedimentos minimamente invasivos',
      'Recuperação rápida em comparação com cirurgias tradicionais'
    ],
    duration: '60 a 90 minutos',
    sessions: 'Varia conforme o protocolo, geralmente 1 a 3 sessões',
    aftercare: [
      'Evitar relações sexuais pelo período recomendado (geralmente 7-14 dias)',
      'Cuidados de higiene específicos conforme orientação',
      'Uso de roupas íntimas de algodão e evitar roupas muito justas',
      'Evitar atividades físicas intensas por 7-10 dias',
      'Retornos para acompanhamento conforme agendamento'
    ],
    category: 'especial'
  }
];

// Função para buscar dados completos de um serviço pelo ID
export const getServiceData = (serviceId: string): ServiceData => {
  const service = servicesData.find(service => service.id === serviceId);
  
  if (!service) {
    throw new Error(`Serviço não encontrado: ${serviceId}`);
  }
  
  return service;
};

// Função para obter links de serviços de uma categoria
export const getServiceLinks = (categoryId: string): ServiceLink[] => {
  return servicesData
    .filter(service => service.category === categoryId)
    .map(service => ({
      id: service.id,
      name: service.title,
      category: service.category
    }));
};

// Função para obter o título da categoria
export const getCategoryTitle = (categoryId: string): string => {
  const category = serviceCategories.find(cat => cat.id === categoryId);
  return category ? category.title : 'Serviços';
}; 