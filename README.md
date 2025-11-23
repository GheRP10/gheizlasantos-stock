# GheizlaSantos Stock

Aplicação Front-End desenvolvida em **novembro/2025**, utilizando Angular 18, como resolução de um desafio técnico que envolve os módulos de **Estoque** e **Comissões**.

A proposta consiste em construir uma SPA (Single Page Application) simples, funcional e organizada, demonstrando domínio de componentes Standalone, rotas, injeção de dependência, tratamento de dados e experiência de uso (UX/UI).
---

## 🚀 Tecnologias utilizadas

- **Angular 18** (compatível com versões superiores)
- **TypeScript**
- **HTML5 & CSS3**
- **Standalone Components**
- **JSON local**
- **Tema dinâmico (Dark/Light)**

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
 │    ├── core/           
 │    ├── features/
 │    │      ├── estoque/ 
 │    │      ├── comissao/
 │    │      └── home/    
 │    ├── app.routes.ts   
 │    └── app.component   
 ├── assets/              
 └── styles.css           
```

---

## 📊 Funcionalidades implementadas

### ✔ Estoque
- Lançamento e estorno de movimentações  
- Filtro por produto  
- Registro de entradas e saídas 
- Interface responsiva  

### ✔ Comissões
- Regras implementadas:  
  - 1% (R$ 100 a R$ 499,99)  
  - 5% (R$ 500+)  
- Cálculo automático por venda  
- Totalização por vendedor  
- Ranking final  

---

## 🎨 Destaques de UI/UX

- **HomePage moderna:** Introdução clara e navegação rápida entre os módulos  
- **Tema Dinâmico:** Modo Claro/Escuro com persistência via `localStorage`  
- **Responsividade Completa:** Layout ajustado para todos os dispositivos  
- **Formatação Brasileira:** `LOCALE_ID (pt-BR)` aplicado para moedas  

---

## ✨ Autor

**Gheizla Santos**  
Desenvolvedora de Sistemas  
Nov/2025