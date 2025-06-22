const path = require('path')

// Apenas o nome do arquivo atual (path.js)
console.log(path.basename(__filename));

// Nome do diretorio atual 
console.log(path.dirname(__filename));

// Extensão do arquivo (.js)
console.log(path.extname(__filename));

// Criar um objeto path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, 'teste', 'teste.html'));
