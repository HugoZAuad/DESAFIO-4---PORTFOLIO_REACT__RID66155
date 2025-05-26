import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  pt: {
    translation: {
      welcome: 'Bem-vindo',
      about: 'Sobre Mim',
      projects: 'Projetos',
      technologies: 'Tecnologias',
      contact: 'Contato',
      know_more: 'Saiba mais',
      description: 'Descrição',
      level: 'Nível',
      languageChanging: 'Idioma alterado com sucesso',
      toggle_dark_mode: 'Alternar modo escuro',
      scroll_to_top: 'Voltar ao topo',
      projects_in_highlight: 'Projetos em Destaque',
      projects_intro_greeting: 'Oi, meu nome é',
      projects_intro_part1: 'Eu poderia começar dizendo "Sou um ',
      projects_intro_highlight: ' Desenvolvedor Full Stack ',
      projects_intro_part2:
        ' com experiência em React, Next.js, TypeScript e Node.js", mas vamos ser sinceros: isso já virou clichê. Deixe-me contar o que realmente importa. Desenvolver é criar experiências únicas. Não se trata apenas de fazer o código rodar, mas de integrar, com maestria, o lado visual com uma lógica robusta, flexible e escalável. Cada detalhe — da performance à acessibilidade e à fluidez das interações — é essencial para que a experiência do usuário seja marcante e transformadora.',
      learn_more: 'Saiba mais',
      timeline: {
        event1: {
          title: 'Trabalho Presencial',
          description: 'Iniciado nova jornada na área administrativa.',
        },
        event2: {
          title: 'Mudança de empresa',
          description: 'Iniciado uma nova fase em busca de desafios.',
        },
        event3: {
          title: 'Novo trabalho',
          description: 'Fui contratado como auxiliar de logística.',
        },
        event4: {
          title: 'Especialização',
          description:
            'Realizei cursos profissionalizantes para Desenvolvimento Web - Full Stack.',
        },
        event5: {
          title: 'Novo Desafio',
          description:
            'Iniciado novo desafio na área tecnológica voltada à saúde pública.',
        },
        event6: {
          title: 'Iniciado Nova Formação Acadêmica',
          description:
            'Iniciado nova formação acadêmica em Ciências da Computação.',
        },
        event7: {
          title: 'Finalizado Curso Profissionalizante',
          description: 'Previsão para finalizar o curso profissionalizante.',
        },
      },
      project: {
        contador_regressivo: {
          title: 'Contador Regressivo',
          description:
            'Aplicação web que exibe uma contagem regressiva dinâmica até uma data específica, ideal para eventos e lançamentos, com interface responsiva e intuitiva.',
        },
        controle_de_produtos: {
          title: 'Controle de Produtos',
          description:
            'Gerenciador simples de produtos que permite adicionar, visualizar e remover itens, facilitando o controle de estoque com interface amigável e simples.',
        },
        lista_de_tarefas: {
          title: 'Lista de Tarefas',
          description:
            'Aplicação web para gerenciamento eficiente de tarefas, permitindo adicionar, concluir e remover atividades com facilidade de organizar o seu dia.',
        },
        pesquisador_de_paises: {
          title: 'Pesquisador de Países',
          description:
            'App que permite pesquisar informações detalhadas sobre países utilizando a API REST Countries, com resultados rápidos e interface amigável.',
        },
        landpage_dnc: {
          title: 'LandPage DNC',
          description:
            'Página web promocional para curso gratuito de Introdução à Tecnologia da DNC School, com design atraente e foco na conversão de visitantes.',
        },
        climotex: {
          title: 'ClimoTex',
          description:
            'Aplicativo de clima em tempo real desenvolvido com React.js, Next.js e Tailwind CSS, oferecendo previsões precisas e interface moderna e amigável.',
        },
        js_game: {
          title: 'JS Game',
          description:
            'Jogo interativo para adivinhar um número aleatório de 1 a 10, com interface simples e divertida para praticar lógica e programação em JavaScript.',
        },
        faq_frontend_mentor: {
          title: 'FAQ - Front-END Mentor',
          description:
            'Projeto de FAQ desenvolvido como desafio do Frontend Mentor, com design responsivo e interatividade para melhorar a experiência do usuário.',
        },
        clone_yu_gi_oh: {
          title: 'Clone Yu-gi-oh',
          description:
            'Clone simples do jogo Yu-Gi-Oh! que permite visualizar cartas de personagens com informações e atributos detalhados, com interface interativa.',
        },
        spotify_imersao: {
          title: 'Spotify Imersão',
          description:
            'Interface de usuário inspirada no Spotify, permitindo pesquisar artistas e visualizar playlists com design moderno e funcionalidade intuitiva.',
        },
        autenticacao_google: {
          title: 'Autenticação Google',
          description:
            'Demonstração de autenticação via conta Google em aplicação web, utilizando Firebase para backend, garantindo segurança e facilidade de login.',
        },
      },
      tech: {
        html: {
          name: 'HTML',
          description: 'Linguagem de marcação para estruturar conteúdo na web',
          level: 'Avançado',
        },
        css: {
          name: 'CSS',
          description: 'Folhas de estilo para estilização de páginas web',
          level: 'Avançado',
        },
        javascript_typescript: {
          name: 'JavaScript/TypeScript',
          description: 'Superset do JavaScript que adiciona tipagem estática',
          level: 'Intermediário',
        },
        react: {
          name: 'React',
          description: 'Biblioteca JavaScript para construir interfaces',
          level: 'Intermediário',
        },
        nodejs: {
          name: 'Node.js',
          description: 'Ambiente de execução JavaScript no servidor',
          level: 'Basico',
        },
      },
      button: {
        description: 'Descrição',
        level: 'Nível',
      },
      button_theme: {
        toggle_dark_mode: 'Alternar modo escuro',
      },
      repository: 'Repositorio',
      deploy: 'Deploy',
    },
  },
  en: {
    translation: {
      welcome: 'Welcome',
      about: 'About Me',
      projects: 'Projects',
      languageChanging: 'Language changed successfully',
      technologies: 'Technologies',
      contact: 'Contact',
      know_more: 'Learn more',
      description: 'Description',
      level: 'Level',
      toggle_dark_mode: 'Toggle dark mode',
      scroll_to_top: 'Scroll to top',
      projects_in_highlight: 'Featured Projects',
      projects_intro_greeting: 'Hi, my name is',
      projects_intro_part1: 'I could start by saying "I am a ',
      projects_intro_highlight: ' Full Stack Developer ',
      projects_intro_part2:
        " with experience in React, Next.js, TypeScript, and Node.js\", but let's be honest: that's become a cliché. Let me tell you what really matters. Developing is about creating unique experiences. It's not just about making the code run, but about masterfully integrating the visual side with robust, flexible, and scalable logic. Every detail — from performance to accessibility and the fluidity of interactions — is essential for the user experience to be remarkable and transformative.",
      learn_more: 'Learn more',
      timeline: {
        event1: {
          title: 'On-site Work',
          description: 'Started a new journey in the administrative area.',
        },
        event2: {
          title: 'Company Change',
          description: 'Started a new phase in search of challenges.',
        },
        event3: {
          title: 'New Job',
          description: 'Hired as a logistics assistant.',
        },
        event4: {
          title: 'Specialization',
          description:
            'Completed professional courses for Full Stack Web Development.',
        },
        event5: {
          title: 'New Challenge',
          description:
            'Started a new challenge in the technology area focused on public health.',
        },
        event6: {
          title: 'Started New Academic Formation',
          description: 'Started new academic formation in Computer Science.',
        },
        event7: {
          title: 'Completed Professional Course',
          description: 'Expected to complete the professional course.',
        },
      },
      project: {
        contador_regressivo: {
          title: 'Countdown Timer',
          description:
            'Web application that displays a dynamic countdown to a specific date, ideal for events and launches, with a responsive and intuitive interface.',
        },
        controle_de_produtos: {
          title: 'Product Control',
          description:
            'Simple product manager that allows adding, viewing, and removing items, facilitating stock control with a friendly and simple interface.',
        },
        lista_de_tarefas: {
          title: 'Task List',
          description:
            'Web application for efficient task management, allowing adding, completing, and removing activities with ease to organize your day.',
        },
        pesquisador_de_paises: {
          title: 'Country Researcher',
          description:
            'App that allows searching detailed information about countries using the REST Countries API, with fast results and a friendly interface.',
        },
        landpage_dnc: {
          title: 'DNC Landing Page',
          description:
            'Promotional web page for a free introductory technology course by DNC School, with attractive design and focus on visitor conversion.',
        },
        climotex: {
          title: 'ClimoTex',
          description:
            'Real-time weather application developed with React.js, Next.js and Tailwind CSS, offering accurate forecasts and a modern, friendly interface.',
        },
        js_game: {
          title: 'JS Game',
          description:
            'Interactive game to guess a random number from 1 to 10, with a simple and fun interface to practice logic and JavaScript programming.',
        },
        faq_frontend_mentor: {
          title: 'FAQ - Front-END Mentor',
          description:
            'FAQ project developed as a challenge from Frontend Mentor, with responsive design and interactivity to improve user experience.',
        },
        clone_yu_gi_oh: {
          title: 'Yu-Gi-Oh Clone',
          description:
            'Simple clone of the Yu-Gi-Oh! game that allows viewing character cards with detailed information and attributes, with an interactive interface.',
        },
        spotify_imersao: {
          title: 'Spotify Immersion',
          description:
            'User interface inspired by Spotify, allowing searching artists and viewing playlists with modern design and intuitive functionality.',
        },
        autenticacao_google: {
          title: 'Google Authentication',
          description:
            'Demonstration of authentication via Google account in a web application, using Firebase for backend, ensuring security and ease of login.',
        },
      },
      tech: {
        html: {
          name: 'HTML',
          description: 'Markup language to structure content on the web',
          level: 'Advanced',
        },
        css: {
          name: 'CSS',
          description: 'Style sheets for styling web pages',
          level: 'Advanced',
        },
        javascript_typescript: {
          name: 'JavaScript/TypeScript',
          description: 'Superset of JavaScript that adds static typing',
          level: 'Intermediate',
        },
        react: {
          name: 'React',
          description: 'JavaScript library for building interfaces',
          level: 'Intermediate',
        },
        nodejs: {
          name: 'Node.js',
          description: 'JavaScript runtime environment on the server',
          level: 'Basic',
        },
      },
      button: {
        description: 'Description',
        level: 'Level',
      },
      button_theme: {
        toggle_dark_mode: 'Toggle dark mode',
      },
      repository: 'Repository',
      deploy: 'Deploy',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
