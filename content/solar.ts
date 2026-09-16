import type { NomeIcone } from "@/components/ui/icons";

export interface ClientLogo {
  nome: string;
  src: string;
  width: number;
  height: number;
  escala: number;
  claro?: boolean;
}

export interface CaseCard {
  slug: string;
  numero: string;
  cliente: string;
  disciplinas: readonly string[];
  descricao: string;
  capa: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const WA = "https://api.whatsapp.com/send/?phone=5548991138593";

function whatsappComTexto(texto: string): string {
  return `${WA}&text=${encodeURIComponent(texto)}`;
}

/**
 * Copy da LP de energia solar — briefing em anexo.
 */
export const SOLAR = {
  abertura: {
    eyebrow: "Estúdio Nákama · Energia solar",
    headline: [
      "O estúdio de estratégia, design e tecnologia",
      "do setor solar.",
    ],
    apoio:
      "Atendemos integradoras, gestoras de usina, fabricantes e plataformas do segmento que precisam de marca, produto digital ou automação à altura da operação que já construíram.",
    ctaPrimario: {
      label: "Falar com o Estúdio no WhatsApp",
      href: WA,
    },
    ctaSecundario: {
      label: "Ver cases do setor",
      href: "/#cases",
    },
  },
  logos: {
    intro: "Já atuamos com",
    marcas: [
      {
        nome: "WEG",
        src: "/clients/weg.png",
        width: 600,
        height: 422,
        escala: 1.35,
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
        escala: 1.45,
        claro: true,
      },
      {
        nome: "PV Operation",
        src: "/clients/pv-operation.png",
        width: 1115,
        height: 233,
        escala: 1.1,
        claro: true,
      },
    ] satisfies ClientLogo[],
  },
  padrao: {
    eyebrow: "O padrão que se repete",
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
  diagnostico: {
    eyebrow: "O diagnóstico",
    titulo:
      "O setor de energia solar cresceu mais rápido do que a maioria das empresas conseguiu se estruturar por dentro.",
    paragrafos: [
      "Existem hoje dezenas de ferramentas de tecnologia disponíveis para o setor: o problema raramente é falta de solução no mercado.",
      "É que cada integradora, comercializadora ou fabricante trabalha de um jeito diferente, e a maioria das soluções prontas não fala a língua do método de trabalho de cada empresa.",
      "O Estúdio Nákama entende o negócio primeiro, e só depois decide que tecnologia, marca ou produto digital realmente resolve.",
    ],
  },
  prova: {
    eyebrow: "Prova, não adjetivo",
    titulo: "Não é teoria. É o que o Estúdio já fez dentro do setor solar.",
    cases: [
      {
        slug: "r4-energias",
        numero: "01",
        cliente: "R4 Energias Renováveis",
        disciplinas: ["BRANDING", "PRODUTO DIGITAL", "IA"],
        descricao:
          "Rebranding, site institucional e o RCE: automação que lê a fatura de energia por IA, cruza com os dados de geração da usina e calcula o consumo segundo a regra de cada operação. O que antes era cálculo manual, usina por usina, virou relatório automático. Hoje, 70% da R4 integra o grupo Unifique.",
        capa: {
          src: "/cases/r4-energias/capa.jpg",
          alt: "Plataforma R4 Energias em notebook e celular: dashboard de economia e login da área do investidor",
          width: 1600,
          height: 1033,
        },
      },
      {
        slug: "pv-operation",
        numero: "02",
        cliente: "PV Operation",
        disciplinas: ["PRODUTO DIGITAL", "UX/UI", "EVOLUÇÃO"],
        descricao:
          "Mais de três anos como extensão do time, estruturando as interfaces de monitoramento, performance, manutenção e administração financeira de usinas fotovoltaicas. Inclui a marca do app SUN WEG, em parceria com a WEG.",
        capa: {
          src: "/cases/pv-operation/capa.jpg",
          alt: "Módulo de performance da PV Operation em monitor, notebook, tablet e celular, com geração de energia bruta e indicadores",
          width: 1920,
          height: 1280,
        },
      },
      {
        slug: "unifique-energia",
        numero: "03",
        cliente: "Unifique Energia",
        disciplinas: ["PRODUTO DIGITAL", "UX/UI", "COMUNICAÇÃO"],
        descricao:
          "Experiência digital de ponta a ponta para energia por assinatura: simulador de economia, fluxo de contratação e painel de acompanhamento, transformando a comercialização em uma jornada simples.",
        capa: {
          src: "/cases/unifique-energia/capa.jpg",
          alt: "Site da UNIFIQUE Energia em monitor e notebook, com o simulador de economia na primeira dobra",
          width: 1448,
          height: 1086,
        },
      },
      {
        slug: "solan-iot",
        numero: "04",
        cliente: "Solan Group",
        disciplinas: ["PESQUISA", "PRODUTO DIGITAL", "UX/UI"],
        descricao:
          "Plataforma web e mobile para dois públicos ao mesmo tempo: o integrador, que acompanha usinas e chamados, e o cliente final, que quer entender geração e retorno do investimento.",
        capa: {
          src: "/cases/solan-iot/capa.jpg",
          alt: "Plataforma solan IoT em notebook e celular: mapa de usinas e painel do integrador",
          width: 2048,
          height: 1268,
        },
      },
    ] satisfies CaseCard[],
  },
  oferta: {
    eyebrow: "Por onde começar",
    titulo: "Duas formas de começar. A prioridade da sua operação decide qual delas.",
    rapida: {
      kicker: "Entrada rápida · já provado no case R4",
      titulo: "RCE automatizado",
      copy: "O mesmo relatório de consumo de energia que o Estúdio já automatizou para uma comercializadora do setor, adaptado para a sua operação.",
      itens: [
        "Leitura automática da fatura de energia (PDF) por IA",
        "Cruzamento com os dados de geração e consumo da sua usina",
        "Cálculo do RCE segundo a regra da sua operação",
        "Área própria no seu site, para o cliente acessar quando quiser",
      ],
      pergunta: "Quer saber como funciona na prática?",
      cta: {
        label: "Quero entender o RCE automatizado",
        href: whatsappComTexto(
          "Olá, quero entender o RCE automatizado para a minha operação.",
        ),
      },
    },
    sobMedida: {
      kicker: "Quando o problema é maior que um relatório",
      titulo: "Projeto sob medida",
      copy: "Para quando o desafio não é um cálculo específico, é a marca, o site, o sistema ou o produto digital que não acompanham o tamanho real da operação.",
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
    eyebrow: "Como o Estúdio atua",
    titulo: "Estratégia, design e tecnologia, na ordem certa.",
    etapas: [
      {
        numero: "01",
        titulo: "Direção",
        icone: "direcao" as NomeIcone,
        copy: "Entender a operação de verdade: onde está o retrabalho, o gargalo, o processo manual. Sem isso, qualquer tecnologia é aposta.",
      },
      {
        numero: "02",
        titulo: "Construção",
        icone: "construcao" as NomeIcone,
        copy: "Marca, site, sistema, automação ou produto digital: o que resolver o problema priorizado. Não vendemos tudo de uma vez.",
      },
      {
        numero: "03",
        titulo: "Evolução",
        icone: "evolucao" as NomeIcone,
        copy: "O setor muda rápido. A solução acompanha: manutenção, novos módulos, squad disponível quando a operação crescer.",
      },
    ],
  },
  tese: {
    eyebrow: "Por que conversar com o Estúdio",
    titulo: "Não somos mais um fornecedor de tecnologia.",
    copy: "Não somos uma fábrica de sites nem uma consultoria só de estratégia. Somos um estúdio de estratégia, design e tecnologia, e o setor de energia solar já faz parte da nossa experiência real. Isso significa uma coisa prática: quando você fala com o Estúdio, não precisa explicar o que é geração distribuída, RCE ou integrador. A gente já entende o vocabulário do seu mercado.",
    provas: [
      "Rebranding de comercializadora de energia",
      "Automação com IA para leitura de fatura",
      "Produto digital para gestão de usina",
      "Plataforma para integrador e cliente final",
      "Parceria de marca com fabricante (WEG)",
    ],
  },
  conversao: {
    eyebrow: "O primeiro passo",
    titulo: "O primeiro passo não é um projeto. É uma conversa.",
    apoio:
      "Conte pra gente qual parte da sua operação ainda depende de planilha, retrabalho ou sistema que não conversa com outro. A gente escuta antes de sugerir qualquer coisa.",
    cta: {
      label: "Falar com o Estúdio no WhatsApp",
      href: WA,
    },
  },
} as const;
