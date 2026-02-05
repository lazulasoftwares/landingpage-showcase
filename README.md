# Lazula Landing Page Showcase

Projeto showcase de landing pages modernas com três versões temáticas intercambiáveis: **Roupas**, **Industrial** e **Automotivo**.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)

## <img src="https://img.icons8.com/fluency/48/about.png" height="25" style="vertical-align: middle; margin-right: 10px;"/> Sobre o Projeto

Este projeto é uma demonstração de landing pages modernas e responsivas, desenvolvidas com as melhores práticas de desenvolvimento web. O showcase apresenta três versões completamente diferentes, cada uma otimizada para um segmento específico:

- **<img src="https://img.icons8.com/fluency/48/shopping-bag.png" height="18" style="vertical-align: middle;"/> Roupas** - Landing page para e-commerce de moda
- **<img src="https://img.icons8.com/fluency/48/factory.png" height="18" style="vertical-align: middle;"/> Industrial** - Landing page para empresas do setor industrial
- **<img src="https://img.icons8.com/fluency/48/car.png" height="18" style="vertical-align: middle;"/> Automotivo** - Landing page para oficinas e concessionárias

Cada versão possui seu próprio design, paleta de cores, imagens e conteúdo, demonstrando a versatilidade dos componentes criados.

## <img src="https://img.icons8.com/fluency/48/star.png" height="25" style="vertical-align: middle; margin-right: 10px;"/> Características

- **Switch de Temas** - Alternância em tempo real entre as três versões diferentes
- **Animações Suaves** - Implementadas com Framer Motion para uma experiência fluida
- **Responsive Design** - Totalmente adaptável para desktop, tablet e mobile
- **Componentes Reutilizáveis** - Biblioteca de componentes baseada em shadcn/ui
- **Performance Otimizada** - Build rápido com Vite e React com SWC
- **Type Safety** - TypeScript em todo o projeto
- **Modern UI** - Interface moderna com Tailwind CSS e Radix UI

## <img src="https://img.icons8.com/fluency/48/maintenance.png" height="25" style="vertical-align: middle; margin-right: 10px;"/> Stack Tecnológica

### Core
- **React 18.3** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.8** - Superset JavaScript com tipagem estática
- **Vite 5.4** - Build tool e dev server de alta performance

### UI/UX
- **Tailwind CSS 3.4** - Framework CSS utility-first
- **shadcn/ui** - Biblioteca de componentes (Radix UI primitives)
- **Framer Motion 12** - Biblioteca de animações
- **Lucide React** - Ícones SVG modernos

### Roteamento & Estado
- **React Router DOM 6.30** - Gerenciamento de rotas
- **TanStack Query 5** - Gerenciamento de estado assíncrono

### Outras Bibliotecas
- **Recharts** - Biblioteca de gráficos (se necessário)
- **React Hook Form** - Formulários performáticos
- **Zod** - Validação de schemas
- **Sonner** - Notificações toast elegantes

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para código JavaScript/TypeScript
- **Vitest** - Framework de testes unitários
- **Testing Library** - Testes de componentes React

## <img src="https://img.icons8.com/fluency/48/rocket.png" height="25" style="vertical-align: middle; margin-right: 10px;"/> Como Rodar Localmente

### Pré-requisitos
- Node.js 18+ ou Bun

### Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/lazula/lazula-landingpage-showcase.git

# Entre na pasta do projeto
cd lazula-landingpage-showcase

# Instale as dependências (você pode usar npm, yarn ou bun)
bun install
# ou
npm install

# Inicie o servidor de desenvolvimento
bun run dev
# ou
npm run dev

# Acesse http://localhost:8080 no navegador
```

## <img src="https://img.icons8.com/fluency/48/package.png" height="25" style="vertical-align: middle; margin-right: 10px;"/> Scripts Disponíveis

```bash
# Desenvolvimento
bun run dev          # Inicia o servidor de desenvolvimento

# Build
bun run build        # Cria build de produção
bun run build:dev    # Cria build de desenvolvimento

# Preview
bun run preview      # Preview da build de produção

# Testes
bun run test         # Executa os testes
bun run test:watch   # Executa os testes em modo watch

# Lint
bun run lint         # Verifica o código com ESLint
```

## <img src="https://img.icons8.com/fluency/48/folder-tree.png" height="25" style="vertical-align: middle; margin-right: 10px;"/> Estrutura do Projeto

```
src/
├── components/
│   ├── landing/           # Componentes das landing pages
│   │   ├── RoupasVersion.tsx
│   │   ├── IndustrialVersion.tsx
│   │   └── AutomotiveVersion.tsx
│   ├── ui/                # Componentes base (shadcn/ui)
│   ├── NavLink.tsx
│   └── VersionSwitch.tsx  # Switch entre versões
├── pages/
│   ├── Index.tsx          # Página principal
│   └── NotFound.tsx       # Página 404
├── hooks/                 # React hooks customizados
├── lib/                   # Utilitários e helpers
└── App.tsx               # Componente raiz
```

## <img src="https://img.icons8.com/fluency/48/paint-palette.png" height="25" style="vertical-align: middle; margin-right: 10px;"/> Versões Disponíveis

### <img src="https://img.icons8.com/fluency/48/shopping-bag.png" height="22" style="vertical-align: middle; margin-right: 8px;"/> Versão Roupas
Landing page para e-commerce de moda com foco em estilo e elegância. Apresenta produtos em destaque, coleções e CTAs para compra.

### <img src="https://img.icons8.com/fluency/48/factory.png" height="22" style="vertical-align: middle; margin-right: 8px;"/> Versão Industrial
Landing page para empresas do setor industrial, destacando serviços, capacidades e diferenciais técnicos.

### <img src="https://img.icons8.com/fluency/48/car.png" height="22" style="vertical-align: middle; margin-right: 8px;"/> Versão Automotivo
Landing page para oficinas e concessionárias, com foco em serviços automotivos, atendimento e expertise.
<br/>
<hr/>

<div align="center"> 
    <p>Este projeto é mantido pela <b>Lazula Softwares</b> como demonstração de competência técnica.</p> 
    <h3> 
        <a href="mailto:contato@lazulasoftwares.com" style="text-decoration: none; color: inherit;"> <img src="https://img.icons8.com/fluency/48/mail.png" height="20" style="vertical-align: middle; margin-right: 5px;"/> Quer um sistema assim na sua empresa? Fale conosco</a> 
    </h3> 
    <br/> 
    <a href="https://lazulasoftwares.com"> 
        <img src="https://img.shields.io/badge/Website-LazulaSoftwares.com-blue?style=flat-square&logo=googlechrome&logoColor=white" alt="Website" /> 
    </a> &nbsp;
    <a href="https://www.linkedin.com/company/lazulasoftwares">
        <img src="https://img.shields.io/badge/LinkedIn-Lazula-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /> 
    </a> 
</div>