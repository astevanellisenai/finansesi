//  Importa bibliotecas 
import express from 'express'; 
import ejs from 'ejs'; 
import expressLayouts from 'express-ejs-layouts'; 

// Configura o Servidor BackEnd 
const app = express(); 

// Configura o EJS como motor de views 
app.set('view engine', 'ejs'); 

// Ativa pasta de arquivos estáticos (CSS, imagens, JS do front) 
app.use(express.static('public')); 

// Defina o layout padrão 
app.use(expressLayouts); 
app.set('layout', 'layouts/principal');  

// Rotas GET (páginas) 
app.get('/', (req, res) => { 
  // renderiza views/index.ejs dentro do layout principal 
  res.render('index'); 
}); 


app.get('/sobre', (req, res) => { 
  // renderiza views/sobre.ejs dentro do layout principal 
  res.render('sobre'); 
}); 

// Sobe o servidor 
const porta = 3000; 

app.listen(porta, () => { 
  console.log(`Servidor rodando em http://localhost:${porta}`); 
 }); 
