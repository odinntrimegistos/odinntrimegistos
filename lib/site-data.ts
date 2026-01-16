// Configuração centralizada - ESTRUTURA DEFINITIVA
export const siteConfig = {
  name: "Odinn Trimegistos",
  pillars: "CORPO • MENTE • ALMA",
  heroLines: ["CLAREZA.", "DIREÇÃO.", "PRESENÇA."],

  links: {
    whatsapp: "https://wa.me/5500000000000",
    instagram: "https://instagram.com/odinntrimegistos",
    email: "contato@odinntrimegistos.com",
  },

  // HERO
  hero: {
    intro: "Há momentos em que a vida pede silêncio.",
    sublines: ["Não mais opiniões externas.", "Não mais tentativas de forçar respostas."],
    keyWord: "Pede clareza.",
    myWork: "Meu trabalho começa aí.",
    myWorkSub: "Quando algo precisa ser visto com honestidade e profundidade.",
    offer:
      "Aqui você encontra oráculos que revelam, rituais que organizam, decisões e direcionamento para não se perder.",
    cta: "Agendar Atendimento",
  },

  // A ORIGEM
  quemSouEu: {
    title: "A ORIGEM",
    blocks: [
      {
        heading: "DA AMAZÔNIA",
        text: "Onde a realidade nunca se apresenta em uma única camada e o invisível dita as regras do visível.",
      },
      {
        heading: "DA ARTE",
        text: "14 anos de estrada aprendendo a ler contextos, silêncios e a verdade por trás das máscaras humanas.",
      },
      {
        heading: "DA MAGIA",
        text: "Hermetismo, Cabala e Goetia não como crença cega, mas como ferramentas técnicas de leitura e atuação.",
      },
    ],
    traditions: [
      "Trabalhei com Tarot e Runas como oráculos diretos.",
      "Com Astrologia como leitura precisa do tempo e dos ciclos.",
      "Com Alquimia como mapa concreto de transformação em etapas.",
      "Com Hermetismo, Cabala, Magia Enoquiana e Goetia como sistemas completos de compreensão e invocação, sempre com critério e responsabilidade.",
    ],
    closing: "Não vendo conforto. Entrego a arquitetura da realidade para quem precisa de transformação real.",
  },

  // COMO EU TRABALHO
  comoTrabalho: {
    title: "COMO EU TRABALHO",
    intro: "Três movimentos para sustentar qualquer decisão:",
    movements: [
      { name: "1. LEITURA", description: "Ver o cenário sem ilusões. O diagnóstico frio do agora." },
      { name: "2. CONSCIÊNCIA", description: "Entender a origem de ciclos, padrões repetitivos e travas." },
      { name: "3. INTEGRAÇÃO", description: "Consolidar a mudança na vida prática. O ritual que vira hábito." },
    ],
    closing: "Quando a clareza chega, o próximo passo se mostra.",
  },

  // OS ORÁCULOS
  oraculos: {
    title: "TAROT & RUNAS",
    subtitle: "",
    intro: "Os oráculos são linguagens que revelam como a consciência se move no presente.",
    description:
      "O Tarot desenha o processo interno. As Runas apontam a ação externa.",
    tarotDesc: "O Espelho da Mente",
    runasDesc: "A Mecânica da Ação",
    note: "Eles não criam respostas; trazem à superfície aquilo que já está ativo.",
    closing: "",
  },

  // SERVIÇOS - TAROT
  tarot: {
    title: "TAROT",
    icon: "🃏",
    services: [
      {
        name: "Oráculo do Espelho Interno",
        duration: "60 min",
        price: 240,
        description: "Clareza sobre o momento atual e o que pede decisão agora.",
      },
      {
        name: "Chave do Propósito",
        duration: "90 min",
        price: 360,
        description: "Leitura profunda sobre sentido de vida e direção.",
      },
    ],
    perguntas: {
      title: "Tarot por Pergunta",
      items: [
        { name: "Véu Levantado", detail: "1 pergunta", price: 90 },
        { name: "Tríade da Verdade", detail: "3 perguntas", price: 210 },
        { name: "Círculo do Destino", detail: "5 perguntas + síntese", price: 320 },
      ],
    },
  },

  // SERVIÇOS - RUNAS
  runas: {
    title: "RUNAS",
    icon: "ᚠ",
    services: [
      {
        name: "Oráculo Nórdico de Direção",
        duration: "60 min",
        price: 240,
        description: "Posicionamento e decisão.",
      },
      {
        name: "Tiragem da Encruzilhada",
        duration: "60 min",
        price: 260,
        description: "Caminhos opostos e riscos reais.",
      },
      {
        name: "Tiragem da Raiz",
        duration: "60 min",
        price: 260,
        description: "Origem profunda de padrões repetitivos.",
      },
      {
        name: "Tiragem do Caminho",
        duration: "75 min",
        price: 320,
        description: "Agora, próximo passo e consequência.",
      },
    ],
  },

  // ASTROLOGIA
  astrologia: {
    title: "O MAPA DO TEMPO",
    icon: "🌙",
    intro: "A Astrologia descreve o cenário. Você escolhe como atuar nele.",
    description: "",
    note: "",
    subNote: "",
    closing: "",
    services: [
      {
        name: "Ciclos da Alma (Mapa Natal + Trânsitos)",
        subtitle: "90 min",
        icon: "☿",
        duration: "90 min",
        price: 420,
        description:
          "Compreensão da fase atual. O que pede movimento e o que pede paciência.",
        indications: "Decisões importantes, transições de vida e autoconhecimento profundo.",
      },
      {
        name: "Roda do Tempo e do Destino",
        subtitle: "Astrologia + Oráculos Integrados",
        icon: "☉",
        duration: "90 min",
        price: 540,
        description:
          "Sessão estratégica para momentos em que uma escolha muda rumos. Os astros mostram o tempo; os oráculos revelam como você vive esse tempo internamente.",
        indications: "Mudanças de carreira, relações, mudanças de cidade ou propósito.",
      },
      {
        name: "Mapa do Vínculo (Sinastria)",
        subtitle: "R$ 520",
        icon: "♀ ♂",
        duration: "90 min",
        price: 520,
        description:
          "Como duas pessoas interagem. Onde flui e onde trava.",
        details: [
          "Como vocês se afetam emocionalmente",
          "Onde existe fluidez e onde existe tensão",
          "Quais aprendizados a relação ativa",
          "O que sustentar e o que precisa de consciência",
        ],
        indications:
          "Casais, relações afetivas em dúvida, parcerias de trabalho profundas, vínculos que geram intensidade ou repetição.",
      },
      {
        name: "Mapa Composto do Relacionamento",
        subtitle: "(Opcional, nível mais profundo)",
        icon: "♊",
        duration: "90 min",
        price: 620,
        description:
          "Além da sinastria, esse serviço analisa o mapa do relacionamento em si, como se a relação fosse uma terceira entidade.",
        details: [
          "Propósito do vínculo",
          "Temas centrais da relação",
          "Desafios inevitáveis",
          "Potencial de crescimento conjunto",
        ],
        indications: "Relações duradouras, casamentos, sociedades ou vínculos kármicos.",
      },
    ],
    sinastryNote: {
      title: "Diferença entre os dois serviços",
      lines: [
        "A sinastria mostra como duas pessoas interagem.",
        "O mapa composto mostra o que nasce quando elas se unem.",
        "Um fala da dinâmica.",
        "O outro fala do sentido do vínculo.",
      ],
    },
  },

  // RITUAIS
  rituais: {
    title: "RITUAIS",
    icon: "🔥",
    intro: "Um ritual é um marco consciente. Ele sinaliza para a mente, o corpo e a atenção que algo foi decidido.",
    description:
      "O gesto simbólico não cria magia. Ele alinha intenção e presença, ajudando a encerrar ciclos e sustentar mudanças.",
    closing: "O ritual não faz por você. Ele muda como você se posiciona — e o caminho responde a isso.",
    services: [
      {
        name: "Rito da Travessia",
        duration: "90 min",
        price: 420,
        description: "Abertura de ciclos e mudanças de rota.",
      },
      {
        name: "Rito da Purificação e Reequilíbrio",
        duration: "60 min",
        price: 360,
        description: "Organização simbólica do campo pessoal.",
      },
      {
        name: "Rito do Guardião Interior",
        duration: "60 min",
        price: 380,
        description: "Fortalecimento, limites e sustentação.",
      },
      {
        name: "Rito do Encerramento Consciente — Nível I",
        duration: "",
        price: 480,
        description: "Encerramento consciente de ciclos.",
      },
      {
        name: "Rito do Encerramento Consciente — Nível II (Desatamento Profundo)",
        duration: "",
        price: 520,
        description: "Desatamento profundo de vínculos.",
      },
      {
        name: "Rito da Direção Interior",
        duration: "90 min",
        price: 420,
        description: "Clareza de propósito e próximo passo.",
      },
      {
        name: "Opera Interior",
        duration: "90 min",
        price: 560,
        description: "Integração alquímica do que já foi compreendido.",
      },
      {
        name: "Solve et Coagula",
        duration: "120 min",
        price: 720,
        description: "Transformação profunda e iniciática.",
      },
    ],
    invocacoes: {
      title: "Invocações Personalizadas",
      subtitle: "Tradição Enoquiana & Goética",
      description:
        "Trabalho com invocações personalizadas a partir de sistemas tradicionais como a Magia Enoquiana e a Goetia.",
      note: "Não existem funções fixas nem resultados genéricos.",
      detail:
        "Cada invocação é construída conforme o momento, a intenção e o contexto real de quem procura o trabalho.",
      closing: "Essas inteligências respondem à relação estabelecida — não a pedidos padronizados.",
    },
  },

  // MENTORIAS
  mentorias: {
    title: "ACOMPANHAMENTO",
    icon: "🌿",
    programs: [
      {
        name: "Mentoria Lunar",
        price: 480,
        priceLabel: "/ mês",
        description: "Acompanhamento mensal para clareza e sustentação.",
      },
      {
        name: "Opus Magnum",
        duration: "12 meses",
        price: 8400,
        priceAlt: "ou 12x de R$ 700",
        description: "Processo completo baseado no ciclo alquímico.",
        highlight: true,
      },
    ],
  },

  // COMBOS
  combos: {
    oraculos: {
      title: "COMBOS DOS ORÁCULOS",
      subtitle: "(Tarot & Runas)",
      items: [
        {
          symbol: "🜂",
          name: "Combo Visão e Verdade",
          services: "Tarot (Oráculo do Espelho Interno) + Runas (Oráculo Nórdico de Direção)",
          price: 420,
          forWho: "Quando você entende o que sente, mas ainda não sabe como agir.",
          whyWorks: "O Tarot explica o processo interno; as Runas mostram a direção prática.",
        },
        {
          symbol: "🜁",
          name: "Combo Encruzilhada",
          services: "Tarot por Pergunta (Tríade da Verdade) + Tiragem da Encruzilhada (Runas)",
          price: 420,
          forWho: "Decisões difíceis, com caminhos opostos.",
          whyWorks: "O Tarot amplia a visão, as Runas apontam o caminho mais coerente a sustentar.",
        },
        {
          symbol: "🜄",
          name: "Combo Raiz do Problema",
          services: "Tarot Reflexivo + Tiragem da Raiz (Runas)",
          price: 460,
          forWho: "Padrões que se repetem sem explicação clara.",
          whyWorks: "O Tarot mostra o padrão; as Runas revelam a origem real.",
        },
        {
          symbol: "🜃",
          name: "Combo Direção Clara",
          services: "Tarot por Pergunta (Círculo do Destino) + Tiragem do Caminho (Runas)",
          price: 520,
          forWho: "Quem precisa decidir agora e entender consequências.",
          whyWorks: "Visão ampla + leitura de próximos passos.",
        },
      ],
    },
    jornada: {
      title: "COMBOS DA JORNADA",
      subtitle: "(Leituras, rituais e acompanhamento)",
      items: [
        {
          number: "1",
          name: "Combo Clareza Imediata",
          services: "Oráculo do Espelho Interno + Véu Levantado",
          price: 300,
          forWho: "Confusão mental, excesso de possibilidades.",
          whyWorks: "Organiza o cenário e foca a decisão principal.",
        },
        {
          number: "2",
          name: "Combo Caminho do Iniciado",
          services: "Mapa dos Ciclos da Alma + Mentoria Lunar (1º mês)",
          price: 820,
          forWho: "Início de uma nova fase de vida.",
          whyWorks: "Entende o ciclo e aprende a atravessá-lo com consciência.",
        },
        {
          number: "3",
          name: "Combo Direção Consciente",
          services: "Roda do Tempo e do Destino + Rito da Direção Interior",
          price: 880,
          forWho: "Decisões que mudam rumos.",
          whyWorks: "Leitura do tempo + ritual que sustenta a escolha.",
        },
        {
          number: "4",
          name: "Combo Encerramento & Novo Ciclo",
          services: "Rito do Encerramento Consciente (Nível I) + Rito da Travessia",
          price: 820,
          forWho: "Quem sabe que algo terminou, mas ainda não conseguiu seguir.",
          whyWorks: "Fecha o que ficou aberto e marca um novo começo.",
        },
        {
          number: "5",
          name: "Combo Fortalecimento e Sustentação",
          services: "Rito do Guardião Interior + Mentoria Lunar (1º mês)",
          price: 780,
          forWho: "Quem decide mudar, mas teme perder firmeza.",
          whyWorks: "Fortalece o campo e sustenta o processo no tempo.",
        },
        {
          number: "6",
          name: "Combo Alinhamento Profundo",
          services: "Chave do Propósito + Opera Interior",
          price: 860,
          forWho: "Quem já entendeu o que precisa mudar, mas ainda não vive isso.",
          whyWorks: "Consciência primeiro, integração depois.",
        },
        {
          number: "7",
          name: "Combo Transmutação",
          services: "Opera Interior + Solve et Coagula",
          price: 1180,
          forWho: "Padrões antigos que chegaram ao limite.",
          whyWorks: "Integra o aprendizado e transforma a estrutura interna.",
        },
        {
          number: "8",
          name: "Combo Porta do Opus",
          services: "Rito da Travessia + Mentoria Lunar (2 meses)",
          price: 1200,
          forWho: "Quem sente o chamado do Opus Magnum.",
          whyWorks: "Marca a passagem e permite sentir o caminho antes do compromisso maior.",
        },
      ],
    },
  },

  // CÍRCULO DA CHAVE
  circuloChave: {
    title: "CÍRCULO DA CHAVE",
    subtitle: "Sistema de Fidelidade",
    moeda: {
      name: "Chaves",
      rule: "A cada R$ 100 investidos → 1 Chave",
      icon: "🗝️",
    },
    cargos: {
      title: "CARGOS DA ORDEM",
      ranks: [
        {
          symbol: "🜁",
          name: "Neófito",
          range: "0 a 9 Chaves",
          description: "Entrada no caminho. Primeiro contato consciente.",
          benefits: ["Participação no sistema", "Prioridade leve de agenda", "Orientação de próximos passos"],
        },
        {
          symbol: "🜂",
          name: "Adeptus Minor",
          range: "10 a 29 Chaves",
          description: "Quem já pratica e retorna.",
          benefits: [
            "5% de desconto permanente",
            "Tarot por Pergunta de brinde ao atingir o grau",
            "Prioridade média de agenda",
            "Acesso antecipado a novos serviços",
          ],
        },
        {
          symbol: "🜃",
          name: "Adeptus Major",
          range: "30 a 59 Chaves",
          description: "Quem sustenta o trabalho no tempo.",
          benefits: [
            "10% de desconto permanente",
            "1 leitura completa gratuita por ano (Tarot ou Runas)",
            "Prioridade alta de agenda",
            "Acesso a combos e rituais não públicos",
          ],
        },
        {
          symbol: "🜄",
          name: "Magister",
          range: "60+ Chaves",
          description: "Autoridade conquistada pela constância.",
          benefits: [
            "15% de desconto permanente vitalício",
            "Ritual exclusivo anual",
            "Acesso direto à agenda",
            "Convites privados e experiências fechadas",
          ],
        },
        {
          symbol: "🜍",
          name: "Magister Templi",
          range: "Acesso direto via Opus Magnum",
          description: "Grau máximo do Círculo.",
          benefits: [
            "Todos os benefícios anteriores",
            "Trabalhos personalizados fora do catálogo",
            "Prioridade absoluta",
            "Acesso a experiências restritas",
          ],
          note: "Este grau não é comprado. É conferido.",
          highlight: true,
        },
      ],
    },
    extras: {
      title: "BRINDES & EXCLUSIVIDADES",
      items: [
        "Brindes na elevação de grau",
        "Descontos permanentes",
        "Rituais e experiências restritos aos graus superiores",
      ],
    },
    regras: {
      title: "REGRAS",
      items: ["Chaves não expiram", "Graus não retrocedem", "Descontos não acumulam", "Parcelamento não gera Chaves"],
    },
  },

  // METODOLOGIA (Página /metodologia)
  metodologia: {
    metadata: {
      title: "Metodologia Trimegista | Odinn Trimegistos",
      description:
        "A ciência simbólica aplicada à vida real. Conheça a Metodologia Trimegista: Tarot, Astrologia, Runas, Rituais e Alquimia para transformação consciente.",
    },
    hero: {
      badge: "Ciência Simbólica",
      title: "METODOLOGIA TRIMEGISTA",
      subtitle: "A ciência simbólica aplicada à vida real",
    },
    principioFundamental: {
      intro: [
        [{ text: "Meu trabalho nasce do encontro entre tradição, experiência prática e observação profunda do ser humano." }],
        [
          { text: "Não sigo dogmas, não repito fórmulas prontas e não uso espiritualidade como fuga da realidade. Tudo o que aplico nos atendimentos tem " },
          { text: "função, coerência simbólica e impacto prático", className: "text-gold" },
          { text: "." },
        ],
        [
          { text: "Chamo esse caminho de " },
          { text: "Metodologia Trimegista", className: "text-bone font-medium" },
          { text: " porque ele se baseia na integração entre " },
          { text: "consciência, propósito e ação", className: "text-gold" },
          { text: "." },
        ],
      ],
      label: "PRINCÍPIO FUNDAMENTAL",
      statement: [
        { text: "A verdadeira transformação acontece quando " },
        { text: "corpo, mente e alma", className: "text-gold" },
        { text: " caminham juntos." },
      ],
      cards: [
        {
          parts: [
            { text: "Qualquer trabalho espiritual que ignore o " },
            { text: "corpo", className: "text-bone" },
            { text: " vira " },
            { text: "fantasia", className: "text-gold/80" },
            { text: "." },
          ],
        },
        {
          parts: [
            { text: "Qualquer trabalho que ignore a " },
            { text: "mente", className: "text-bone" },
            { text: " vira " },
            { text: "confusão", className: "text-gold/80" },
            { text: "." },
          ],
        },
        {
          parts: [
            { text: "Qualquer trabalho que ignore a " },
            { text: "alma", className: "text-bone" },
            { text: " vira " },
            { text: "vazio", className: "text-gold/80" },
            { text: "." },
          ],
        },
      ],
      closing:
        "Minha metodologia organiza essas três dimensões de forma progressiva, respeitando o tempo, a história e os limites de cada pessoa.",
    },
    comoFunciona: {
      title: "COMO FUNCIONA NA PRÁTICA",
      description:
        "Cada atendimento — seja pontual ou em mentoria — é conduzido a partir de três movimentos essenciais:",
      movimentos: [
        { iconKey: "eye", num: "1", title: "Leitura", description: "Compreensão clara do momento" },
        { iconKey: "brain", num: "2", title: "Consciência", description: "Entendimento dos padrões e ciclos" },
        { iconKey: "sparkles", num: "3", title: "Integração", description: "Aplicação real na vida cotidiana" },
      ],
      closing: [
        { text: "Nada é feito para impressionar.", className: "text-sand/60 italic" },
        { text: "Tudo é feito para funcionar.", className: "text-gold font-medium" },
      ],
    },
    praticas: {
      title: "PRÁTICAS UTILIZADAS NOS ATENDIMENTOS",
      description: "Todas as práticas, saberes e ferramentas que emprego, sempre de forma integrada e ética.",
      items: [
        {
          iconKey: "layers",
          title: "TAROT",
          subtitle: "Oráculo de Consciência",
          description: "Utilizo o Tarot como linguagem simbólica profunda, não como instrumento de previsão fatalista.",
          aplicacoes: [
            "Leitura de padrões emocionais e mentais",
            "Compreensão de conflitos internos",
            "Clareza sobre escolhas e possibilidades",
            "Orientação em momentos de decisão",
          ],
          nota: "As cartas funcionam como espelho. Elas revelam o que já está ativo na psique e na vida.",
        },
        {
          iconKey: "moon",
          title: "ASTROLOGIA",
          subtitle: "Leitura do Tempo e dos Ciclos",
          description: "A Astrologia é utilizada como ferramenta de contextualização do momento de vida.",
          aplicacoes: ["Mapa natal", "Trânsitos atuais", "Ciclos de amadurecimento e encerramento"],
          objetivos: ["Em que fase está", "O que pede movimento", "O que pede paciência", "O que pede encerramento"],
          nota: "A astrologia devolve tempo e maturidade às decisões.",
        },
        {
          iconKey: "compass",
          title: "RUNAS",
          subtitle: "Direção e Verdade",
          description: "As runas são utilizadas como oráculo direto e objetivo.",
          aplicacoes: ["Escolhas", "Consequências", "Forças ativas no momento", "Desafios que não podem mais ser evitados"],
          nota: "As runas não suavizam. Elas mostram o que precisa ser encarado com honestidade.",
        },
        {
          iconKey: "flame",
          title: "RITUAIS SIMBÓLICOS",
          subtitle: "Passagem e Integração",
          description: "Os rituais que conduzo não pertencem a religiões institucionais. São rituais simbólicos conscientes.",
          aplicacoes: ["Marcar encerramentos", "Sustentar decisões", "Abrir novos ciclos", "Integrar mudanças internas"],
          nota: "O ritual não pede algo ao invisível. Ele organiza a intenção e ancora a escolha no corpo e na consciência.",
        },
        {
          iconKey: "flask",
          title: "ALQUIMIA",
          subtitle: "Transformação Interior",
          description: "A alquimia é a base filosófica do meu método.",
          aplicacoes: ["Compreender processos internos", "Dissolver padrões antigos", "Integrar aprendizados", "Transformar consciência em postura"],
          nota: "O ciclo alquímico (Nigredo, Albedo, Citrinitas e Rubedo) orienta tanto atendimentos pontuais quanto o processo completo do Opus Magnum.",
        },
        {
          iconKey: "wind",
          title: "CORPO, RESPIRAÇÃO E PRESENÇA",
          subtitle: "Vaso Alquímico",
          description: "Sem corpo presente, não existe transformação real.",
          aplicacoes: ["Respiração (pranayama funcional)", "Presença corporal", "Percepção de tensões e ritmo vital"],
          nota: "O corpo é tratado como vaso alquímico do processo espiritual.",
        },
        {
          iconKey: "brain",
          title: "LEITURA DE PADRÕES PSÍQUICOS",
          subtitle: "Consciência Aplicada",
          description: "Ao longo dos atendimentos, trabalho a identificação de padrões inconscientes.",
          aplicacoes: ["Padrões emocionais recorrentes", "Mecanismos de defesa", "Repetições inconscientes", "Conflitos entre desejo, medo e ação"],
          nota: "Isso não é terapia clínica, mas consciência aplicada.",
        },
      ],
    },
    pilares: {
      title: "OS PILARES DA METODOLOGIA",
      description: "Nos processos recorrentes, o trabalho se organiza em três pilares:",
      items: [
        { sigilKey: "body", title: "Corpo", description: "Presença, energia, sustentação e ritmo.", color: "from-slate/30 to-graphite/50" },
        { sigilKey: "mind", title: "Mente", description: "Clareza, leitura simbólica, ciclos e escolhas conscientes.", color: "from-graphite/50 to-slate/30" },
        { sigilKey: "soul", title: "Alma", description: "Propósito, sentido e coerência entre quem se é e como se vive.", color: "from-deepred/10 to-graphite/50" },
      ],
      closing: [
        { text: "Esses pilares não são trabalhados separadamente, mas ", className: "text-sand/60 italic" },
        { text: "integrados ao longo do tempo", className: "text-gold/80" },
        { text: ".", className: "text-sand/60 italic" },
      ],
    },
    formacao: {
      title: "FORMAÇÃO E BASE DE CONHECIMENTO",
      intro: "Minha formação é construída a partir de estudo contínuo e prática real, incluindo:",
      items: [
        "Hermetismo clássico e filosofia trimegista",
        "Tarot simbólico e arquetípico",
        "Astrologia tradicional e aplicada",
        "Alquimia espiritual",
        "Cabala hermética",
        "Runas do Elder Futhark",
        "Práticas de respiração e presença",
        "Estudo comparado de tradições simbólicas",
        "Experiência direta em atendimentos e mentorias",
      ],
      closing: ["Não reproduzo dogmas.", "Trabalho com o que foi vivido, testado e integrado."],
    },
    etica: {
      title: "ÉTICA E RESPONSABILIDADE",
      principles: [
        { iconKey: "shield", text: "Todo atendimento é confidencial" },
        { iconKey: "heart", text: "O trabalho não substitui acompanhamento médico ou psicológico" },
        { iconKey: "scale", text: "Não incentivo dependência espiritual" },
        { iconKey: "compass", text: "O símbolo orienta, mas a escolha é sempre do consulente" },
      ],
      closing: "Espiritualidade sem responsabilidade não serve ao crescimento.",
    },
    essencia: {
      badge: "EM ESSÊNCIA",
      titleLines: [
        "A Metodologia Trimegista não promete iluminação instantânea.",
        "Ela oferece clareza contínua, maturidade e coerência.",
      ],
      titleHighlightLineIndex: 1,
      intro: "É um caminho para quem quer:",
      chips: ["Compreender a própria vida", "Assumir escolhas com consciência", "Viver com mais verdade"],
      closing: [
        { text: "Sem fantasia." },
        { text: "Sem fuga." },
        { text: "Com presença.", className: "text-gold" },
      ],
      cta: { href: "/#servicos", label: "Ver Serviços e Mentorias" },
    },
  },

  // ÉTICA
  etica: {
    title: "ÉTICA E RESPONSABILIDADE",
    items: [
      "Atendimentos confidenciais",
      "Não substituem acompanhamento médico ou psicológico",
      "O símbolo orienta — a escolha é sempre sua",
    ],
  },

  // ENCERRAMENTO
  encerramento: {
    text: "Você não precisa acreditar em nada.",
    subtext: "Precisa apenas estar disposto a ver com clareza.",
  },
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(price)
}
