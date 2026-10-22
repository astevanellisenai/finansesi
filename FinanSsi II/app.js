// 1) Importa bibliotecas
import express from 'express';
import expressLayouts from 'express-ejs-layouts';

const app = express();

// 2) Configura o EJS como motor de views
app.set('view engine', 'ejs');

// 3) Ativa pasta de arquivos estáticos (CSS, imagens, JS do front)
app.use(express.static('public'));

// 4) Habilita o layout-base (express-ejs-layouts)
app.use(expressLayouts);
app.set('layout', 'layouts/principal'); // views/layouts/principal.ejs

// 5) Habilita leitura de dados de formulários (POST)
app.use(express.urlencoded({ extended: true }));

// 6) Rotas GET (páginas)
app.get('/', (req, res) => {
  // renderiza views/index.ejs dentro do layout principal
  res.render('index');
});

app.get('/sobre', (req, res) => {
  res.render('sobre');
});

// 7) Páginas de Juros Simples
app.get('/juros_simples', (req, res) => {
  res.render('juros_simples'); // criaremos já já
});

// 8) Recebe o POST do formulário de juros simples
app.post('/juros_simples', (req, res) => {
  // Extrai valores enviados
  const capital = parseFloat(req.body.capital);
  const taxa = parseFloat(req.body.taxa);   // % ao mês
  const tempo = parseFloat(req.body.tempo); // em meses

  // Validação simples (opcional, mas ajuda muito)
  if (Number.isNaN(capital) || Number.isNaN(taxa) || Number.isNaN(tempo)) {
    return res.render('juros_simples', { 
      mensagem: 'Preencha números válidos.',
      capital: req.body.capital,
      taxa: req.body.taxa,
      tempo: req.body.tempo
    });
  }

  // Fórmula do juros simples: J = P * i * n
  const juros = capital * (taxa / 100) * tempo;
  const total = capital + juros;

  // Reenvia para a view com os resultados
  res.render('juros_simples', { capital, taxa, tempo, juros, total });
});


app.get('/juros_composto', (req, res) => {
  res.render('juros_composto');
});

app.post('/juros_composto', (req, res) => {
  const capital = parseFloat(req.body.capital);
  const taxa = parseFloat(req.body.taxa);
  const tempo = parseFloat(req.body.tempo);

  if (Number.isNaN(capital) || Number.isNaN(taxa) || Number.isNaN(tempo)) {
    return res.render('juros_composto', { mensagem: 'Preencha números válidos.' });
  }

  const montante = capital * Math.pow(1 + taxa/100, tempo);
  const juros = montante - capital;
  const total = montante;

  res.render('juros_composto', { capital, taxa, tempo, juros, total });
});

// 9) Sobe o servidor
const porta = 3000;
app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
 });