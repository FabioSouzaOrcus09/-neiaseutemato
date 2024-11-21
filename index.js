const { autenticarLogin } = require('./models/methods/alunos');

// Função para simular o login
function login(rm, senha) {
  const resultado = autenticarLogin(rm, senha);
  
  if (resultado.sucesso) {
    console.log(resultado.mensagem); // Exibe uma mensagem de boas-vindas
  } else {
    console.log(resultado.mensagem); // Exibe erro caso não consiga autenticar
  }
}

// Testando o login com RM e senha
login('123', 'senha123'); // Login bem-sucedido
login('456', 'senhaerrada'); // Senha incorreta
login('999', 'qualquer');   // RM não encontrado
