# GheizlaSantos Stock

Aplicação Front-End desenvolvida em **novembro/2025**, em Angular, como resolução de um desafio técnico envolvendo módulos de **Estoque** e **Comissões**.

A proposta consiste em construir uma SPA simples, funcional e organizada, demonstrando domínio de componentes, rotas, serviços, tratamento de dados e experiência de uso.

---

## 🚀 Tecnologias utilizadas

- **Angular 18+** (projeto foi executado com Angular 18)
- **TypeScript**
- **HTML5 & CSS3**
- **Standalone Components**
- **JSON local como base de dados**
- **Design System próprio (Dark/Light mode)**

---

## 📦 Instalação e execução

```bash
npm install
ng serve
```

> O projeto é compatível com Angular **18 ou superior**.

---

## 📂 Estrutura principal

```
src/
 ├── app/
 │    ├── home/           # HomePage com contextualização e acesso aos módulos
 │    ├── features/
 │    │      ├── estoque/ # Módulo de movimentações de estoque
 │    │      └── comissao/# Módulo de ranking e comissões
 │    ├── services/       # Serviço de dados (estoque + vendas)
 │    └── app.component   # Header, tema, rotas
 ├── assets/              # JSON e ícones
 └── styles.css           # Tema global (dark/light)
```

---

## 📊 Funcionalidades implementadas

### ✔ Módulo de Estoque
- Lançamento de movimentações  
- Estorno  
- Filtro por produto  
- Atualização dinâmica do saldo por item  
- Interface responsiva  

### ✔ Módulo de Comissões
- Regras implementadas:  
  - 1% para valores entre **R$ 100 e R$ 499,99**  
  - 5% para valores **a partir de R$ 500**  
- Cálculo automático por venda  
- Somatório geral por vendedor  
- Geração do ranking final  
- Exibição clara e responsiva  

---

## 📝 Observação
- Toques pessoais citados abaixo

### ✔ HomePage 
- Layout inspirado em dashboards  
- Botões de navegação  
- Explicação dos módulos  
- Responsividade 

### ✔ Tema Claro/Escuro
- Alternância em tempo real  
- Ícones de sol/lua  
- Ajuste de contraste para cada módulo  

---

## ✨ Autor

**Gheizla Santos**  
Desenvolvedora de Sistemas  
Nov/2025
