import express, { Request, Response } from 'express';
import sqlite3 from 'sqlite3';
import bcrypt from 'bcrypt';
import cors from 'cors';  // Importando o pacote CORS

const app = express();
const port = 3000;

// Usando o middleware CORS para permitir todas as origens
app.use(cors());

// Middleware para análise de JSON
app.use(express.json());

// Conectar ao banco de dados SQLite
const db = new sqlite3.Database('/home/orcus/db/ohara.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error('Erro ao conectar com o banco de dados:', err.message);
  } else {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  }
});

// Definindo a interface para o aluno
interface Aluno {
  id: number;
  nome: string;
  data_nascimento: string;
  endereco: string;
  telefone: string;
  email: string;
  data_matricula: string;
  nome_responsavel: string;
  contato_responsavel: string;
  status_estudante: string;
  turmas: string;
  cod_etec: number;
  senha: string;
  rm: number;
}

// Função de login
function login(username: string, password: string, callback: (error: Error | null, user?: Aluno | null) => void): void {
  db.get("SELECT * FROM alunos WHERE rm = ?", [username], (error: Error | null, user: Aluno | undefined) => {
    if (error) {
      callback(error);
      return;
    }

    if (!user) {
      callback(null, null);
      return;
    }

    bcrypt.compare(password, user.senha, (err: Error | undefined, result: boolean) => {
      if (err) {
        callback(err);
        return;
      }

      if (result) {
        callback(null, user);
      } else {
        callback(null, null);
      }
    });
  });
}

// Rota de login
app.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;

  login(username, password, (error, user) => {
    if (error) {
      return res.status(500).json({ message: 'Erro ao fazer login', error: error.message });
    }

    if (user) {
      return res.status(200).json({ message: 'Login bem-sucedido!', user });
    } else {
      return res.status(401).json({ message: 'Credenciais inválidas!' });
    }
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
