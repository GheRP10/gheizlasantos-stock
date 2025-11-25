# GheizlaSantos Stock

Aplicação Front-End desenvolvida em **novembro/2025**, utilizando Angular 18, como resolução de um desafio técnico envolvendo os módulos de **Estoque** e **Comissões**.

A proposta consiste em construir uma SPA organizada, moderna e fluida, demonstrando domínio de componentes Standalone, rotas, serviços, tratamento de dados e boas práticas de UI/UX.

---

## 🚀 Tecnologias utilizadas
- **Angular 18** (compatível com versões superiores)  
- **TypeScript**  
- **HTML5 & CSS3**  
- **Standalone Components**  
- **JSON local**  
- **Tema dinâmico (Modo Claro/Escuro)**  

---

## 📦 Instalação e execução

```bash
npm install
ng serve
```

---

## 📂 Estrutura principal

```
src/
 ├── app/
 │    ├── core/                  # Serviços e modelos
 │    ├── features/              # Módulos funcionais
 │    │      ├── estoque/        # Movimentações de estoque
 │    │      ├── comissao/       # Cálculo e ranking de comissões
 │    │      ├── home/           # Dashboard inicial
 │    │      └── sobre/          # Documentação do projeto
 │    ├── app.routes.ts          # Rotas da aplicação
 │    └── app.component          # Layout principal, header e tema
 ├── assets/                     # Arquivos JSON e recursos estáticos
 └── styles.css                  # Variáveis globais de tema
```

---

## 📊 Funcionalidades implementadas

### ✔ Dashboard (Home)
- Resumo visual das funcionalidades  
- Acesso rápido aos módulos  
- Explicação do objetivo da aplicação  

### ✔ Módulo de Estoque
- Lançamento de entradas e saídas  
- Validação de campos e consistência de registros  
- Filtros por texto e período  
- Estorno com confirmação  
- Tabela responsiva com scroll  
- Agrupamento automático de produtos  

### ✔ Módulo de Comissões
- Regras do desafio:  
  - 1% entre R$ 100 e R$ 499,99  
  - 5% a partir de R$ 500  
- Processamento automático de vendas  
- Ranking final dos vendedores  
- Formatação em moeda brasileira (pt-BR)  

### ✔ Página Sobre
- Documentação técnica  
- Referências internas do projeto  
- Fluxo e explicação dos módulos  

---

## 🎨 Destaques de UI/UX
- **Interface moderna** inspirada em dashboards executivos  
- **Tema Claro/Escuro** com persistência via `localStorage`  
- **Responsividade completa** (desktop/tablet/mobile)  
- **Feedback visual** para ações críticas (estorno, confirmações)  
- **Consistência de layout** em todos os módulos  

---

## ✨ Autora
**Gheizla Santos**  
Desenvolvedora de Sistemas  
Nov/2025
