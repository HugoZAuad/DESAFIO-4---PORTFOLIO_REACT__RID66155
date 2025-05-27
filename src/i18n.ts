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
        salesdashboard: {
          title: 'Sales Dashboard',
          description:
            'O DNC Sales Dashboard é uma aplicação web desenvolvida em React com TypeScript, que oferece um painel completo para gerenciamento e visualização de dados de vendas. A aplicação possui autenticação, rotas protegidas, gráficos interativos, e integração com APIs.',
        },
        controle_de_produtos: {
          title: 'Controle de Produtos',
          description:
            'Gerenciador simples de produtos que permite adicionar, visualizar e remover itens, facilitando o controle de estoque com interface amigável e simples.',
        },
        desafio1: {
          title: 'LandPage Arquitetura',
          description:
            'Este projeto apresenta um website estático para uma empresa de arquitetura. Ele demonstra a utilização de HTML, CSS e JavaScript para criar uma página web informativa e interativa.',
        },
        pesquisador_de_paises: {
          title: 'Pesquisador de Países',
          description:
            'App que permite pesquisar informações detalhadas sobre países utilizando a API REST Countries, com resultados rápidos e interface amigável.',
        },
        projectarq_dnc: {
          title: 'Projeto Arquitetura DNC',
          description:
            'O objetivo do projeto é criar uma aplicação web que exibe uma lista de projetos, permite salvar favoritos e utiliza um contexto global para gerenciar o idioma e textos dinâmicos.',
        },
        desafio4: {
          title: 'Portfólio React',
          description:
            'Este projeto é um portfólio pessoal desenvolvido com React e TypeScript, utilizando o Vite como ferramenta de build. Ele apresenta uma estrutura moderna e organizada, com foco em boas práticas de desenvolvimento, internacionalização e uma interface responsiva e acessível.',
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
        desafio3: {
          title: 'ToDo List',
          description:
            'Interface de usuário inspirada no Spotify, permitindo pesquisar artistas e visualizar playlists com design moderno e funcionalidade intuitiva.',
        },
        autenticacao_google: {
          title: 'Autenticação Google',
          description:
            'Este projeto é um Board de Tarefas simples, feito com HTML, CSS e JavaScript. Ele permite que você crie, conclua e exclua tarefas, além de salvar tudo no navegador para não perder suas tarefas ao fechar a página.',
        },
      },
      tech: {
        html: {
          name: 'HTML',
          level: 'Avançado',
        },
        css: {
          name: 'CSS',
          level: 'Avançado',
        },
        javascript_typescript: {
          name: 'TypeScript',
          level: 'Avançado',
        },
        react: {
          name: 'React',
          level: 'Intermediário',
        },
        nodejs: {
          name: 'Node.js',
          level: 'Iniciante',
        },
        firebase: {
          name: 'Firebase',
          level: 'Intermediario',
        },
        git: {
          name: 'Git',
          level: 'Intermediario',
        },
        mongodb: {
          name: 'mongoDB',
          level: 'Iniciante',
        },
        figma: {
          name: 'Figma',
          level: 'intermediario',
        },
        next: {
          name: 'Next.js',
          level: 'Intermediario',
        },
        bootstrap: {
          name: 'BootStrap',
          level: 'Iniciante',
        },
        tailwindcss: {
          name: 'Tailwind',
          level: 'intermediario',
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
      technologies: 'Technologies',
      contact: 'Contact',
      know_more: 'Learn more',
      description: 'Description',
      level: 'Level',
      languageChanging: 'Language changed successfully',
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
        salesdashboard: {
          title: 'Sales Dashboard',
          description:
            'The DNC Sales Dashboard is a web application developed in React with TypeScript, offering a comprehensive panel for managing and visualizing sales data. The application features authentication, protected routes, interactive charts, and API integration.',
        },
        controle_de_produtos: {
          title: 'Product Control',
          description:
            'Simple product manager that allows adding, viewing, and removing items, facilitating stock control with a friendly and simple interface.',
        },
        desafio1: {
          title: 'Architecture Landing Page',
          description:
            'This project presents a static website for an architecture company. It demonstrates the use of HTML, CSS, and JavaScript to create an informative and interactive web page.',
        },
        pesquisador_de_paises: {
          title: 'Country Researcher',
          description:
            'App that allows searching detailed information about countries using the REST Countries API, with fast results and a friendly interface.',
        },
        projectarq_dnc: {
          title: 'DNC Architecture Project',
          description:
            'The project aims to create a web application that displays a list of projects, allows saving favorites, and uses a global context to manage language and dynamic texts.',
        },
        desafio4: {
          title: 'React Portfolio',
          description:
            'This project is a personal portfolio developed with React and TypeScript, using Vite as the build tool. It features a modern and organized structure, focusing on best development practices, internationalization, and a responsive and accessible interface.',
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
        desafio3: {
          title: 'ToDo List',
          description:
            'User interface inspired by Spotify, allowing searching artists and viewing playlists with modern design and intuitive functionality.',
        },
        autenticacao_google: {
          title: 'Google Authentication',
          description:
            'This project is a simple Task Board made with HTML, CSS, and JavaScript. It allows you to create, complete, and delete tasks, as well as save everything in the browser to not lose your tasks when closing the page.',
        },
      },
      tech: {
        html: {
          name: 'HTML',
          level: 'Advanced',
        },
        css: {
          name: 'CSS',
          level: 'Advanced',
        },
        javascript_typescript: {
          name: 'TypeScript',
          level: 'Intermediate',
        },
        react: {
          name: 'React',
          level: 'Intermediate',
        },
        nodejs: {
          name: 'Node.js',
          level: 'Beginner',
        },
        firebase: {
          name: 'Firebase',
          level: 'Intermediate',
        },
        git: {
          name: 'Git',
          level: 'Intermediate',
        },
        mongodb: {
          name: 'mongoDB',
          level: 'Beginner',
        },
        figma: {
          name: 'Figma',
          level: 'Intermediate',
        },
        next: {
          name: 'Next.js',
          level: 'Intermediate',
        },
        bootstrap: {
          name: 'BootStrap',
          level: 'Beginner',
        },
        tailwindcss: {
          name: 'Tailwind',
          level: 'Intermediate',
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
