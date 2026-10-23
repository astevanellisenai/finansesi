# 💰 FinanSESI

Projeto educacional desenvolvido com **Node.js**, **Express** e **EJS** para trabalhar conceitos de desenvolvimento web aplicados à **educação financeira**.

O repositório reúne diferentes etapas de evolução do projeto, permitindo acompanhar a construção gradual da aplicação, desde as primeiras páginas com Express e EJS até calculadoras financeiras, layouts reutilizáveis e documentação com Swagger.

---

## 📌 Funcionalidades

### 🌐 Aplicação web

- Página inicial
- Página institucional / Sobre
- Navegação com layout reutilizável
- Arquivos estáticos para CSS e imagens
- Renderização das páginas utilizando EJS

### 💵 Juros Simples

A aplicação possui uma calculadora de juros simples utilizando a fórmula:

```text
J = C × i × t
```

Onde:

```text
J = juros
C = capital inicial
i = taxa de juros
t = tempo
```

O sistema calcula:

- Capital informado
- Taxa de juros
- Período
- Valor dos juros
- Valor total acumulado

### 📈 Juros Compostos

Também existe uma calculadora de juros compostos utilizando a fórmula:

```text
M = C × (1 + i)ᵗ
```

Onde:

```text
M = montante
C = capital inicial
i = taxa de juros
t = tempo
```

O sistema apresenta o montante final e o valor dos juros acumulados.

### 📚 Evolução didática

O repositório possui diferentes versões do projeto:

```text
FinanSESI A
FinanSESI B
FinanSESI C
FinanSESI D
FinanSESI E
FinanSESI F
FinanSESI
FinanSsi II
```

Essas pastas representam etapas da evolução da aplicação e permitem comparar como novos recursos foram sendo adicionados ao projeto.

---

## 🛠️ Tecnologias utilizadas

- Node.js
- Express 5
- EJS
- express-ejs-layouts
- JavaScript
- HTML
- CSS
- Nodemon
- Swagger JSDoc
- Swagger UI Express

---

## 📁 Estrutura do repositório

```text
finansesi/
│
├── FinanSESI A/           # Etapa inicial do projeto
├── FinanSESI B/           # Evolução com layout
├── FinanSESI C/           # Introdução da página de juros simples
├── FinanSESI D/           # Evolução da calculadora
├── FinanSESI E/           # Melhorias visuais e conteúdos
├── FinanSESI F/           # Juros simples e compostos
├── FinanSESI/             # Versão com recursos adicionais / Swagger
├── FinanSsi II/           # Versão com calculadoras financeiras
├── .gitignore
└── README.md
```

Dentro das versões principais, a estrutura segue aproximadamente este padrão:

```text
FinanSsi II/
│
├── public/
│   ├── css/
│   │   └── styles.css
│   └── img/
│
├── views/
│   ├── layouts/
│   │   └── principal.ejs
│   ├── index.ejs
│   ├── juros_simples.ejs
│   ├── juros_composto.ejs
│   └── sobre.ejs
│
├── app.js
├── package.json
└── package-lock.json
```

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, instale:

- [Node.js](https://nodejs.org/)
- npm
- Git

Para conferir se o Node.js está instalado:

```bash
node -v
```

Para conferir a versão do npm:

```bash
npm -v
```

---

## 🚀 Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/astevanellisenai/finansesi.git
```

Entre na pasta:

```bash
cd finansesi
```

### 2. Escolher uma versão do projeto

Por exemplo:

```bash
cd "FinanSsi II"
```

### 3. Instalar as dependências

```bash
npm install
```

O comando instalará automaticamente as dependências definidas no `package.json`.

---

## 📦 Principais dependências

Nas versões do projeto são utilizados principalmente:

```bash
npm install express ejs express-ejs-layouts
```

Para utilizar o Nodemon durante o desenvolvimento:

```bash
npm install nodemon
```

ou executar diretamente com:

```bash
npx nodemon app.js
```

Na versão que possui documentação Swagger também são utilizados:

```bash
npm install swagger-jsdoc swagger-ui-express
```

---

## ▶️ Executando o projeto

Entre na pasta da versão desejada e execute:

```bash
node app.js
```

ou, utilizando Nodemon:

```bash
npx nodemon app.js
```

Em versões cujo `package.json` possui o script `start`, também é possível utilizar:

```bash
npm start
```

A aplicação utiliza a porta:

```text
3000
```

Acesse no navegador:

```text
http://localhost:3000
```

---

## 🧭 Principais rotas

Na versão com as calculadoras financeiras, as principais rotas são:

| Rota | Descrição |
|---|---|
| `/` | Página inicial |
| `/sobre` | Informações sobre o projeto |
| `/juros_simples` | Calculadora de juros simples |
| `/juros_composto` | Calculadora de juros compostos |

As páginas de juros utilizam requisições `GET` para exibir os formulários e `POST` para processar os cálculos.

---

## 🧮 Exemplo de cálculo de juros simples

Considerando:

```text
Capital = R$ 1.000,00
Taxa = 2% ao mês
Tempo = 5 meses
```

Temos:

```text
J = 1000 × 0,02 × 5
J = 100
```

Resultado:

```text
Juros = R$ 100,00
Total = R$ 1.100,00
```

---

## 📈 Exemplo de cálculo de juros compostos

Considerando:

```text
Capital = R$ 1.000,00
Taxa = 2% ao mês
Tempo = 5 meses
```

O cálculo é realizado utilizando:

```text
M = 1000 × (1 + 0,02)⁵
```

A aplicação realiza esse processamento automaticamente através do JavaScript no backend.

---

## 🧩 Layout com EJS

O projeto utiliza `express-ejs-layouts` para evitar repetição de elementos HTML entre páginas.

O layout principal encontra-se em:

```text
views/layouts/principal.ejs
```

As demais páginas são renderizadas dentro desse layout.

---

## 🔄 Nodemon

O **Nodemon** facilita o desenvolvimento reiniciando automaticamente o servidor sempre que um arquivo é alterado.

Execução direta:

```bash
npx nodemon app.js
```

Quando configurado no `package.json`:

```json
"scripts": {
  "start": "nodemon app.js"
}
```

basta executar:

```bash
npm start
```

---

## 📖 Swagger

Uma das versões do projeto possui suporte às bibliotecas:

```text
swagger-jsdoc
swagger-ui-express
```

O arquivo relacionado à configuração encontra-se em:

```text
FinanSESI/swagger.js
```

Esse recurso permite documentar endpoints da aplicação de forma organizada e interativa.

---

## 👨‍💻 Desenvolvimento

Projeto desenvolvido para fins educacionais, aplicando conceitos de:

- Desenvolvimento Web Backend
- Node.js
- Express
- EJS
- Layouts reutilizáveis
- Rotas GET e POST
- Formulários HTML
- Processamento de dados no backend
- Validação de dados
- Matemática financeira
- Juros simples
- Juros compostos
- Organização de arquivos estáticos
- Evolução incremental de um projeto
- Documentação de API com Swagger

---

## 🎓 Projeto FinanSESI

O FinanSESI foi desenvolvido como projeto educacional para integrar conceitos de **programação web e matemática financeira**, permitindo que os alunos acompanhem a evolução de uma aplicação Node.js em diferentes etapas.

O repositório funciona também como material de estudo, demonstrando de forma prática a utilização de **Express, EJS, layouts, formulários, rotas e cálculos financeiros**.
