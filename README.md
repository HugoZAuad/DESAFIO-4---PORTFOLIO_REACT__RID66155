# Portfolio React

## Visão Geral do Projeto

Este projeto é um portfólio pessoal desenvolvido com React e TypeScript, utilizando o Vite como ferramenta de build. Ele apresenta uma estrutura moderna e organizada, com foco em boas práticas de desenvolvimento, internacionalização e uma interface responsiva e acessível. O projeto utiliza bibliotecas como Material UI para estilização, FontAwesome para ícones, e react-slick para sliders/carrosséis.

## Estrutura do Projeto

A estrutura do projeto é clara e modular, facilitando a manutenção e escalabilidade:

```

├── src/                      # Código fonte da aplicação
│   ├── components/           # Componentes reutilizáveis da interface
│   │   ├── ButtonTech/       # Botões relacionados a tecnologias
│   │   ├── ButtonTheme/      # Botões para troca de tema
│   │   ├── Footer/           # Rodapé do site
│   │   ├── LanguageToggleButton/ # Botão para troca de idioma
│   │   ├── navbar/           # Barra de navegação
│   │   ├── ProjectSlider/    # Slider/carrossel de projetos
│   │   ├── ScrollToTopButton/# Botão para rolar a página para o topo
│   │   └── Timeline/         # Linha do tempo de eventos ou projetos
│   │
│   ├── pages/                # Páginas principais do site
│   │   ├── about/            # Página "Sobre"
│   │   ├── project/          # Página de projetos
│   │   └── tech/             # Página de tecnologias
│   │
│   ├── assets/               # Arquivos estáticos como imagens e ícones
│   ├── App.tsx               # Componente principal que monta as páginas
│   ├── main.tsx              # Ponto de entrada da aplicação React
│   ├── i18n.ts               # Configuração de internacionalização
│   └── global.css            # Estilos globais da aplicação
│
├── public/                   # Arquivos públicos (favicon, index.html)
├── package.json              # Configurações e dependências do projeto
├── vite.config.js            # Configuração do Vite
├── tsconfig.json             # Configuração do TypeScript
├── .eslintrc.js              # Configuração do ESLint
├── .prettierrc               # Configuração do Prettier
└── README.md                 # Este arquivo de documentação
```

## Sumário

- [Visão Geral do Projeto](#visão-geral-do-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Explicação das Partes do Código](#explicação-das-partes-do-código)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Tecnologias Usadas](#tecnologias-usadas)
- [Contato](#contato)

## Explicação das Partes do Código

### src/main.tsx

É o ponto de entrada da aplicação React. Aqui, o ReactDOM cria a raiz da aplicação e renderiza o componente principal `<App />`. Também envolve a aplicação com o `ThemeProvider` do Material UI para aplicar temas e o `CssBaseline` para normalizar estilos globais. O componente `ScrollToTopButton` é renderizado globalmente para facilitar a navegação.

### src/App.tsx

Componente principal que organiza as páginas do portfólio. Ele utiliza o `I18nextProvider` para fornecer suporte à internacionalização, permitindo que o site seja facilmente traduzido para múltiplos idiomas. Renderiza as páginas principais: `Projects`, `Tech` e `About`.

### src/pages/

Contém as páginas principais do site:

- **about/**: Página "Sobre", que apresenta informações pessoais ou profissionais.
- **project/**: Página que exibe os projetos desenvolvidos, utilizando um slider/carrossel para navegação.
- **tech/**: Página que lista as tecnologias dominadas ou utilizadas no portfólio.

Cada página possui seus arquivos `.tsx` para o componente React e `.css` para os estilos específicos.

### src/components/

Contém componentes reutilizáveis que compõem a interface do usuário, como botões temáticos, botões para troca de idioma, barra de navegação, rodapé, sliders de projetos, linha do tempo e botão para rolar a página para o topo. Cada componente possui seu arquivo `.tsx` e `.css` para manter a organização e modularidade.

### src/i18n.ts

Configuração da biblioteca `i18next` para internacionalização, permitindo que o conteúdo do site seja apresentado em diferentes idiomas.

## Como Rodar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado (versão recomendada 16 ou superior).
2. No terminal, dentro da pasta do projeto, execute:
   ```bash
   npm install
   ```
3. Para iniciar o servidor de desenvolvimento, execute:
   ```bash
   npm run dev
   ```
4. Abra o navegador e acesse o endereço indicado no terminal (geralmente `http://localhost:3000`).

## Tecnologias Usadas

- React 19
- TypeScript
- Vite
- Material UI
- FontAwesome
- react-slick (slider/carrossel)
- i18next (internacionalização)
- Jest e Testing Library (testes)
- ESLint e Prettier (qualidade de código)
- Husky (hooks git)

## Contato

Para dúvidas, sugestões ou contribuições, sinta-se à vontade para entrar em contato.
