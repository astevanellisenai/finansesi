//  Importa bibliotecas //[quick]
import express from 'express'; //[quick]
import ejs from 'ejs'; //[quick]
import expressLayouts from 'express-ejs-layouts'; //[quick]

// Configura o Servidor BackEnd //[quick]
const app = express(); //[quick]

// Configura o EJS como motor de views //[quick]
app.set('view engine', 'ejs'); //[quick]

// Ativa pasta de arquivos estáticos (CSS, imagens, JS do front) //[quick]
app.use(express.static('public')); //[quick]

// Defina o layout padrão  //[quick]
app.use(expressLayouts);  //[quick]
app.set('layout', 'layouts/principal');   //[quick]

// Para processar os dados do formulário 
app.use(express.urlencoded({ extended: true })); 
//[pause]

// Rotas GET (páginas) //[quick]
app.get('/', (req, res) => { //[quick]
  // renderiza views/index.ejs dentro do layout principal //[quick]
  res.render('index'); //[quick]
}); //[quick]


app.get('/sobre', (req, res) => { //[quick]
  // renderiza views/sobre.ejs dentro do layout principal //[quick]
  res.render('sobre'); //[quick]
}); //[quick]

app.get('/juros_simples', (req, res) => {  //[quick]
  res.render('juros_simples');  //[quick]
}); //[quick]

// Rota para processar o cálculo 
app.post('/juros_simples', (req, res) => { 
 const capital = req.body.capital 
 const taxa = req.body.taxa 
 const tempo = req.body.tempo 
 const juros = parseFloat(capital) * (parseFloat(taxa) / 100) * 
               parseFloat(tempo); 
 const total = parseFloat(capital) + juros; 

 res.render('juros_simples', { capital, taxa, tempo, juros, total }); 
 
}); 
//[pause]

// Sobe o servidor //[quick]
const porta = 3000; //[quick]

app.listen(porta, () => { //[quick]
  console.log(`Servidor rodando em http://localhost:${porta}`); //[quick]
 }); //[quick]
