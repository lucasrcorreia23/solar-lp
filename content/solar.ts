import type { NomeIcone } from "@/components/ui/icons";

export interface ClientLogo {
  nome: string;
  src: string;
  width: number;
  height: number;
  escala: number;
}

export interface Img {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CaseCard {
  slug: string;
  cliente: string;
  disciplinas: readonly string[];
  descricao: string;
  /** O resultado em uma frase: `valor` abre a frase e recebe o destaque. */
  dado: { valor: string; texto: string };
  capa: Img;
}

export interface Animacao {
  segmento: string;
  cliente: string;
  src: string;
  srcMobile: string;
  poster: Img;
}

const WA = "https://api.whatsapp.com/send/?phone=5548991138593";

function whatsappComTexto(texto: string): string {
  return `${WA}&text=${encodeURIComponent(texto)}`;
}

/**
 * Copy da LP de energia solar — briefing em anexo, com a revisão
 * "LP Mercado Solar" aplicada (terminologia "mercado", RCE → RGC, cases da WEG e
 * do Fórum, apoio visual em todo bloco de texto).
 */
export const SOLAR = {
  abertura: {
    headline: [
      "O estúdio de estratégia, design e tecnologia",
      "do mercado solar.",
    ],
    apoio:
      "Atendemos integradoras, gestoras de usina, fabricantes e plataformas do segmento que precisam de marca, produto digital ou automação à altura da operação que já construíram.",
    ctaPrimario: {
      label: "Falar com o Estúdio no WhatsApp",
      href: WA,
    },
    ctaSecundario: {
      label: "Ver cases do mercado",
      href: "/#cases",
    },
  },
  logos: {
    desde: "Desde 2019 no mercado solar",
    intro: "Já atuamos com",
    marcas: [
      {
        nome: "WEG",
        src: "/clients/weg.png",
        width: 600,
        height: 422,
        escala: 1.2,
      },
      {
        nome: "UNIFIQUE Energia",
        src: "/clients/unifique.png",
        width: 600,
        height: 112,
        escala: 1,
      },
      {
        nome: "Solan Group",
        src: "/clients/solan-group.png",
        width: 600,
        height: 327,
        escala: 1.4,
      },
      {
        nome: "PV Operation",
        src: "/clients/pv-operation.png",
        width: 1115,
        height: 233,
        escala: 1.05,
      },
    ] satisfies ClientLogo[],
  },
  padrao: {
    titulo: "Cresce a geração de energia. A forma de operar por trás dela nem sempre acompanha.",
    dores: [
      {
        titulo: "Cálculo",
        icone: "produto" as NomeIcone,
        copy: "A gente ainda calcula isso na mão, usina por usina.",
      },
      {
        titulo: "Sistemas",
        icone: "tecnologia" as NomeIcone,
        copy: "Cada sistema que usamos fala uma língua diferente.",
      },
      {
        titulo: "Marca",
        icone: "marca" as NomeIcone,
        copy: "Nossa marca não parece o tamanho da operação que a gente já tem.",
      },
      {
        titulo: "Automação",
        icone: "construcao" as NomeIcone,
        copy: "Sabemos que dá pra automatizar isso, mas ninguém aqui tem tempo pra construir.",
      },
      {
        titulo: "IA",
        icone: "evolucao" as NomeIcone,
        copy: "Todo mundo fala de IA, mas a gente não sabe onde ela realmente ajudaria.",
      },
    ],
  },
  // Só o diagnóstico: o crescimento do mercado x operação manual já está na
  // seção de dores logo acima. Os vídeos são as aberturas de três cases, um
  // por elo da cadeia que o texto nomeia.
  diagnostico: {
    titulo: "Ferramenta não falta. Falta método.",
    apoio:
      "Existem dezenas de ferramentas para o mercado solar. O que falta é um método comum entre integradoras, comercializadoras e fabricantes.",
    animacoes: [
      {
        segmento: "Integradora",
        cliente: "Solan Group",
        src: "/cases/solan-iot/hero.mp4",
        srcMobile: "/cases/solan-iot/hero-540.mp4",
        poster: {
          src: "/cases/solan-iot/hero-poster.jpg",
          alt: "Três técnicos instalando placas solares no telhado de um condomínio, sob o lockup solan group",
          width: 1280,
          height: 720,
        },
      },
      {
        segmento: "Comercializadora",
        cliente: "Unifique Energia",
        src: "/cases/unifique-energia/hero.mp4",
        srcMobile: "/cases/unifique-energia/hero-540.mp4",
        poster: {
          src: "/cases/unifique-energia/hero-poster.jpg",
          alt: "Casa com telhado de placas solares ao sol, sob o lockup unifique energia",
          width: 1280,
          height: 720,
        },
      },
      {
        segmento: "Fabricante",
        cliente: "WEG",
        src: "/cases/weg-sunweg/hero.mp4",
        srcMobile: "/cases/weg-sunweg/hero-540.mp4",
        poster: {
          src: "/cases/weg-sunweg/hero-poster.jpg",
          alt: "Caderno aberto com o conceito da marca SUN WEG (sol, usina e conexão somados) ao lado do lockup SUN | WEG",
          width: 1280,
          height: 720,
        },
      },
    ] satisfies Animacao[],
  },
  prova: {
    titulo: "Não é teoria. É o que o Estúdio já fez dentro do mercado solar.",
    cases: [
      {
        slug: "r4-energias",
        cliente: "R4 Energias Renováveis",
        disciplinas: ["BRANDING", "PRODUTO DIGITAL", "IA"],
        descricao:
          "Rebranding, site institucional e o RGC (Relatório de Geração e Consumo) automatizado: a IA lê a fatura de energia, cruza com a geração da usina e calcula segundo a regra da operação. O cálculo manual virou relatório automático.",
        dado: { valor: "70%", texto: "da R4 integra hoje o grupo Unifique." },
        capa: {
          src: "/cases/r4-energias/capa.jpg",
          alt: "Plataforma R4 Energias em notebook e celular: dashboard de economia e login da área do investidor",
          width: 1600,
          height: 1033,
        },
      },
      {
        slug: "pv-operation",
        cliente: "PV Operation",
        disciplinas: ["PRODUTO DIGITAL", "UX/UI", "EVOLUÇÃO"],
        descricao:
          "Extensão do time de produto, estruturando as interfaces de monitoramento, performance, manutenção e administração financeira de usinas fotovoltaicas.",
        dado: { valor: "3+ anos", texto: "evoluindo o produto junto com o time." },
        capa: {
          src: "/cases/pv-operation/capa.jpg",
          alt: "Módulo de performance da PV Operation em monitor, notebook, tablet e celular, com geração de energia bruta e indicadores",
          width: 1920,
          height: 1280,
        },
      },
      {
        slug: "weg-sunweg",
        cliente: "WEG",
        disciplinas: ["BRANDING", "PRODUTO DIGITAL", "UX/UI"],
        descricao:
          "Dentro do trabalho com a PV Operation, desenhamos a marca e a experiência do app que leva a gestão de usinas ao celular de quem gera a própria energia.",
        dado: {
          valor: "SUN WEG,",
          texto: "marca e app criados em parceria com a WEG.",
        },
        capa: {
          src: "/cases/weg-sunweg/capa.jpg",
          alt: "Telas do aplicativo SUN WEG em cinco celulares: login, painel de operação, economia e cadastro",
          width: 1600,
          height: 1173,
        },
      },
      {
        slug: "unifique-energia",
        cliente: "Unifique Energia",
        disciplinas: ["PRODUTO DIGITAL", "UX/UI", "COMUNICAÇÃO"],
        descricao:
          "Experiência digital de ponta a ponta para energia por assinatura, transformando a comercialização em uma jornada simples.",
        dado: {
          valor: "3 etapas",
          texto: "numa só jornada: simulação, contratação e acompanhamento.",
        },
        capa: {
          src: "/cases/unifique-energia/capa.jpg",
          alt: "Site da UNIFIQUE Energia em monitor e notebook, com o simulador de economia na primeira dobra",
          width: 1448,
          height: 1086,
        },
      },
      {
        slug: "solan-iot",
        cliente: "Solan Group",
        disciplinas: ["PESQUISA", "PRODUTO DIGITAL", "UX/UI"],
        descricao:
          "Plataforma web e mobile que acompanha usinas, alertas e chamados, e explica geração e retorno do investimento.",
        dado: {
          valor: "2 públicos",
          texto: "na mesma plataforma: o integrador e o cliente final.",
        },
        capa: {
          src: "/cases/solan-iot/capa.jpg",
          alt: "Plataforma solan IoT em notebook e celular: mapa de usinas e painel do integrador",
          width: 2048,
          height: 1268,
        },
      },
      {
        slug: "forum-veiculos-eletricos",
        cliente: "Proattive Engenharia",
        disciplinas: ["EVENTO", "LANÇAMENTO", "PRODUTO DIGITAL"],
        descricao:
          "Estratégia e lançamento de um fórum técnico com auditório lotado, conectado aos cursos online e à nova página de treinamentos.",
        dado: {
          valor: "3 cursos",
          texto: "lançados no Fórum de Carregadores de Veículos Elétricos.",
        },
        capa: {
          src: "/cases/forum-veiculos-eletricos/capa.jpg",
          alt: "Palestrante no palco do 1º Fórum sobre Normatização de Recarga de Veículos Elétricos, visto do fundo do auditório lotado",
          width: 2400,
          height: 1350,
        },
      },
    ] satisfies CaseCard[],
  },
  oferta: {
    titulo: "Duas formas de começar. A prioridade da sua operação decide qual delas.",
    rapida: {
      kicker: "Entrada rápida · já provado no case R4",
      titulo: "RGC automatizado",
      copy: "O Relatório de Geração e Consumo que o Estúdio já automatizou para a R4, adaptado para a sua operação.",
      itens: [
        "Leitura automática da fatura de energia (PDF) por IA",
        "Cruzamento com os dados de geração e consumo da sua usina",
        "Cálculo do RGC segundo a regra da sua operação",
        "Área própria no seu site, para o cliente acessar quando quiser",
      ],
      // Mockup ILUSTRATIVO (números fictícios) até existirem prints reais do
      // relatório em produção. O rótulo na tela diz isso ao visitante.
      exemplo: {
        rotulo: "Exemplo ilustrativo · números fictícios",
        etapas: [
          {
            titulo: "Fatura lida",
            linhas: [
              ["Referência", "08/2026"],
              ["Consumo da rede", "1.840 kWh"],
              ["Energia injetada", "3.120 kWh"],
            ],
          },
          {
            titulo: "Dados da usina",
            linhas: [
              ["Geração no mês", "4.260 kWh"],
              ["Autoconsumo", "1.140 kWh"],
              ["Disponibilidade", "99,2%"],
            ],
          },
          {
            titulo: "RGC calculado",
            linhas: [
              ["Consumo total", "2.980 kWh"],
              ["Créditos do mês", "1.280 kWh"],
              ["Economia estimada", "R$ 1.637,60"],
            ],
          },
        ],
      },
      cta: {
        label: "Quero entender o RGC automatizado",
        href: whatsappComTexto(
          "Olá, quero entender o RGC (Relatório de Geração e Consumo) automatizado para a minha operação.",
        ),
      },
    },
    sobMedida: {
      kicker: "Quando o problema é maior que um relatório",
      titulo: "Projeto sob medida",
      copy: "Para quando o desafio é a marca, o site, o sistema ou o produto digital que não acompanham o tamanho real da operação.",
      pessoa: {
        nome: "Aderbal Amorin",
        papel: "Founder & Diretor de Criação",
        frase: "Quem escuta o seu caso antes de qualquer proposta.",
        foto: {
          src: "/team/aderbal.jpg",
          alt: "Retrato de Aderbal Amorin, fundador do Estúdio Nákama",
          width: 720,
          height: 719,
        },
      },
      itens: [
        "Diagnóstico da operação antes de qualquer proposta",
        "Escopo definido pelo problema, não por um catálogo de serviços",
        "Squad do Estúdio disponível para evoluir junto com a operação",
      ],
      cta: {
        label: "Quero conversar sobre o meu caso",
        href: whatsappComTexto(
          "Olá, quero conversar sobre um projeto sob medida para a minha operação.",
        ),
      },
    },
  },
  metodo: {
    titulo: "Estratégia, design e tecnologia, na ordem certa.",
    etapas: [
      {
        numero: "01",
        titulo: "Direção",
        icone: "direcao" as NomeIcone,
        copy: "Entender a operação de verdade: onde está o retrabalho, o gargalo, o processo manual.",
      },
      {
        numero: "02",
        titulo: "Construção",
        icone: "construcao" as NomeIcone,
        copy: "Marca, site, sistema, automação ou produto digital: o que resolver o problema priorizado.",
      },
      {
        numero: "03",
        titulo: "Evolução",
        icone: "evolucao" as NomeIcone,
        copy: "O mercado muda rápido. A solução acompanha, com squad disponível quando a operação crescer.",
      },
    ],
  },
  tese: {
    titulo: "Não somos mais um fornecedor de tecnologia.",
    desde: "Desde 2019 no mercado solar.",
    copy: "Quando você fala com o Estúdio, não precisa explicar o que é geração distribuída, RGC ou integrador. A gente já entende o vocabulário do seu mercado.",
    provas: [
      "Rebranding de comercializadora de energia",
      "Automação com IA para leitura de fatura",
      "Produto digital para gestão de usina",
      "Plataforma para integrador e cliente final",
      "Parceria de marca com fabricante (WEG)",
    ],
  },
  conversao: {
    titulo: "O primeiro passo não é um projeto. É uma conversa.",
    apoio:
      "Conte qual parte da sua operação ainda depende de planilha ou retrabalho. A gente escuta antes de sugerir qualquer coisa.",
    cta: {
      label: "Falar com o Estúdio no WhatsApp",
      href: WA,
    },
  },
} as const;
