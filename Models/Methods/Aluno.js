// Simula um "banco de dados" de alunos
let alunos = [
    { rm: '123', nome: 'Éneias', senha: 'senha123' },
    { rm: '456', nome: 'Ana', senha: 'senha456' },
    { rm: '789', nome: 'Carlos', senha: 'senha789' },
  ];
  
  // Função para encontrar um aluno pelo RM
  function encontrarAluno(rm) {
    return alunos.find(aluno => aluno.rm === rm);
  }
  
  // Função para autenticar o login
  function autenticarLogin(rm, senha) {
    const aluno = encontrarAluno(rm);
    if (!aluno) {
      return { sucesso: false, mensagem: 'RM não encontrado!' };
    }
    if (aluno.senha === senha) {
      return { sucesso: true, mensagem: `Bem-vindo, ${aluno.nome}!` };
    } else {
      return { sucesso: false, mensagem: 'Senha incorreta!' };
    }
  }
  
  // Exporta as funções
  module.exports = { autenticarLogin };
  