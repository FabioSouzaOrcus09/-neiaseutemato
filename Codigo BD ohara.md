use Ohara;  
  
db.createCollection("Alunos", {  
   validator: {  
      $jsonSchema: {  
         bsonType: "object",  
         required: ["_id", "nome", "data_nascimento", "endereço", "telefone", "email", "data_matrícula", "nome_responsável", "contato_responsável", "status_estudante", "turmas"],  
         properties: {  
            _id: {  
               bsonType: "objectId",  
               description: "O ID único do aluno"  
            },  
            nome: {  
               bsonType: "string",  
               description: "Nome completo do aluno"  
            },  
            data_nascimento: {  
               bsonType: "date",  
               description: "Data de nascimento do aluno"  
            },  
            endereço: {  
               bsonType: "string",  
               description: "Endereço do aluno"  
            },  
            telefone: {  
               bsonType: "string",  
               description: "Telefone de contato do aluno"  
            },  
            email: {  
               bsonType: "string",  
               pattern: "^.+@.+$",  
               description: "Endereço de e-mail válido"  
            },  
            data_matrícula: {  
               bsonType: "date",  
               description: "Data de matrícula do aluno"  
            },  
            nome_responsável: {  
               bsonType: "string",  
               description: "Nome do responsável pelo aluno"  
            },  
            contato_responsável: {  
               bsonType: "string",  
               description: "Contato do responsável pelo aluno"  
            },  
            status_estudante: {  
               enum: ["Ativo", "Inativo"],  
               description: "Status do aluno"  
            },  
            turmas: {  
               bsonType: "array",  
               description: "Lista de turmas em que o aluno está matriculado",  
               items: {  
                  bsonType: "object",  
                  required: ["turma_id", "disciplina", "ano", "semestre", "bimestre", "status_matricula", "notas", "frequencia"],  
                  properties: {  
                     turma_id: {  
                        bsonType: "objectId",  
                        description: "ID da turma"  
                     },  
                     disciplina: {  
                        bsonType: "string",  
                        description: "Disciplina da turma"  
                     },  
                     ano: {  
                        bsonType: "int",  
                        description: "Ano letivo"  
                     },  
                     semestre: {  
                        bsonType: "int",  
                        description: "Semestre letivo"  
                     },  
                     bimestre: {  
                        bsonType: "int",  
                        description: "Bimestre letivo"  
                     },  
                     status_matricula: {  
                        enum: ["Ativo", "Inativo"],  
                        description: "Status de matrícula do aluno na turma"  
                     },  
                     notas: {  
                        bsonType: "array",  
                        items: {  
                           bsonType: "object",  
                           required: ["avaliacao", "nota"],  
                           properties: {  
                              avaliacao: {  
                                 bsonType: "string",  
                                 description: "Tipo de avaliação"  
                              },  
                              nota: {  
                                 bsonType: "double",  
                                 description: "Nota obtida"  
                              }  
                           }  
                        }  
                     },  
                     frequencia: {  
                        bsonType: "array",  
                        items: {  
                           bsonType: "object",  
                           required: ["data", "status"],  
                           properties: {  
                              data: {  
                                 bsonType: "date",  
                                 description: "Data da presença/ausência"  
                              },  
                              status: {  
                                 enum: ["Presente", "Ausente"],  
                                 description: "Status de presença"  
                              },  
                              justificativa: {  
                                 bsonType: "string",  
                                 description: "Justificativa de ausência (se houver)"  
                              }  
                           }  
                        }  
                     }  
                  }  
               }  
            }  
         }  
      }  
   }  
});  
  
  
db.createCollection("Professores", {  
   validator: {  
      $jsonSchema: {  
         bsonType: "object",  
         required: ["_id", "nome", "data_nascimento", "endereço", "telefone", "email", "data_contratação", "especialização", "status_emprego", "salário"],  
         properties: {  
            _id: {  
               bsonType: "objectId",  
               description: "O ID único do professor"  
            },  
            nome: {  
               bsonType: "string",  
               description: "Nome completo do professor"  
            },  
            data_nascimento: {  
               bsonType: "date",  
               description: "Data de nascimento do professor"  
            },  
            endereco: {  
               bsonType: "string",  
               description: "Endereço do professor"  
            },  
            telefone: {  
               bsonType: "string",  
               description: "Telefone de contato do professor"  
            },  
            email: {  
               bsonType: "string",  
               pattern: "^.+@.+$",  
               description: "Endereço de e-mail válido"  
            },  
            data_contratação: {  
               bsonType: "date",  
               description: "Data de contratação do professor"  
            },  
            especialização: {  
               bsonType: "string",  
               description: "Área de especialização do professor"  
            },  
            status_emprego: {  
               enum: ["Ativo", "Inativo"],  
               description: "Status do emprego do professor"  
            },  
            salário: {  
               bsonType: "double",  
               description: "Salário do professor"  
            }  
         }  
      }  
   }  
});  
  
db.createCollection("Funcionarios", {  
   validator: {  
      $jsonSchema: {  
         bsonType: "object",  
         required: ["_id", "nome", "data_nascimento", "endereço", "telefone", "email", "data_contratação", "função", "status_emprego", "salário"],  
         properties: {  
            _id: {  
               bsonType: "objectId",  
               description: "O ID único do funcionário"  
            },  
            nome: {  
               bsonType: "string",  
               description: "Nome completo do funcionário"  
            },  
            data_nascimento: {  
               bsonType: "date",  
               description: "Data de nascimento do funcionário"  
            },  
            endereço: {  
               bsonType: "string",  
               description: "Endereço do funcionário"  
            },  
            telefone: {  
               bsonType: "string",  
               description: "Telefone de contato do funcionário"  
            },  
            email: {  
               bsonType: "string",  
               pattern: "^.+@.+$",  
               description: "Endereço de e-mail válido"  
            },  
            data_contratação: {  
               bsonType: "date",  
               description: "Data de contratação do funcionário"  
            },  
            função: {  
               bsonType: "string",  
               description: "Função do funcionário na empresa"  
            },  
            status_emprego: {  
               enum: ["Ativo", "Inativo"],  
               description: "Status do emprego do funcionário"  
            },  
            salário: {  
               bsonType: "double",  
               description: "Salário do funcionário"  
            }  
         }  
      }  
   }  
});  
  
db.createCollection("Cursos", {  
   validator: {  
      $jsonSchema: {  
         bsonType: "object",  
         required: ["_id", "nome_curso", "descrição_curso", "duração", "nível_curso", "departamento", "créditos_requeridos", "grade_curricular"],  
         properties: {  
            _id: {  
               bsonType: "objectId",  
               description: "O ID único do curso"  
            },  
            nome_curso: {  
               bsonType: "string",  
               description: "Nome do curso"  
            },  
            descrição_curso: {  
               bsonType: "string",  
               description: "Descrição do curso"  
            },  
            duração: {  
               bsonType: "int",  
               description: "Duração do curso em meses"  
            },  
            nível_curso: {  
               bsonType: "string",  
               description: "Nível do curso (ex: Técnico, Graduação)"  
            },  
            departamento: {  
               bsonType: "string",  
               description: "Departamento responsável pelo curso"  
            },  
            créditos_requeridos: {  
               bsonType: "int",  
               description: "Créditos requeridos para conclusão do curso"  
            },  
            grade_curricular: {  
               bsonType: "array",  
               description: "Lista de disciplinas do curso",  
               items: {  
                  bsonType: "object",  
                  required: ["disciplina_id", "semestre", "créditos"],  
                  properties: {  
                     disciplina_id: {  
                        bsonType: "objectId",  
                        description: "ID da disciplina"  
                     },  
                     semestre: {  
                        bsonType: "int",  
                        description: "Semestre em que a disciplina é oferecida"  
                     },  
                     créditos: {  
                        bsonType: "int",  
                        description: "Créditos da disciplina"  
                     }  
                  }  
               }  
            }  
         }  
      }  
   }  
});  
  
  
db.createCollection("Turmas", {  
   validator: {  
      $jsonSchema: {  
         bsonType: "object",  
         required: ["_id", "curso_id", "disciplinas_id", "professor_id", "ano", "horário_aula", "sala", "max_alunos", "alunos"],  
         properties: {  
            _id: {  
               bsonType: "objectId",  
               description: "O ID único da turma"  
            },  
            curso_id: {  
               bsonType: "objectId",  
               description: "ID do curso ao qual a turma pertence"  
            },  
            disciplinas_id: {  
               bsonType: "objectId",  
               description: "ID da disciplina que está sendo lecionada"  
            },  
            professor_id: {  
               bsonType: "objectId",  
               description: "ID do professor responsável pela turma"  
            },  
            ano: {  
               bsonType: "int",  
               description: "Ano letivo"  
            },  
            horário_aula: {  
               bsonType: "string",  
               description: "Horário em que as aulas ocorrem"  
            },  
            sala: {  
               bsonType: "string",  
               description: "Número ou nome da sala onde as aulas são ministradas"  
            },  
            max_alunos: {  
               bsonType: "int",  
               description: "Número máximo de alunos permitidos na turma"  
            },  
            alunos: {  
               bsonType: "array",  
               description: "Lista de alunos matriculados na turma",  
               items: {  
                  bsonType: "object",  
                  required: ["aluno_id", "status_matricula", "notas", "frequencia"],  
                  properties: {  
                     aluno_id: {  
                        bsonType: "objectId",  
                        description: "ID do aluno"  
                     },  
                     status_matricula: {  
                        enum: ["Ativo", "Inativo"],  
                        description: "Status de matrícula do aluno na turma"  
                     },  
                     notas: {  
                        bsonType: "array",  
                        items: {  
                           bsonType: "object",  
                           required: ["avaliacao", "nota"],  
                           properties: {  
                              avaliacao: {  
                                 bsonType: "string",  
                                 description: "Tipo de avaliação"  
                              },  
                              nota: {  
                                 bsonType: "double",  
                                 description: "Nota obtida"  
                              }  
                           }  
                        }  
                     },  
                     frequencia: {  
                        bsonType: "array",  
                        items: {  
                           bsonType: "object",  
                           required: ["data", "status"],  
                           properties: {  
                              data: {  
                                 bsonType: "date",  
                                 description: "Data da presença/ausência"  
                              },  
                              status: {  
                                 enum: ["Presente", "Ausente"],  
                                 description: "Status de presença"  
                              },  
                              justificativa: {  
                                 bsonType: "string",  
                                 description: "Justificativa de ausência (se houver)"  
                              }  
                           }  
                        }  
                     }  
                  }  
               }  
            }  
         }  
      }  
   }  
});  
  
db.createCollection("Mensagens", {  
   validator: {  
      $jsonSchema: {  
         bsonType: "object",  
         required: ["_id", "remetente", "destinatário", "assunto_mensagem", "corpo_mensagem", "data_envio"],  
         properties: {  
            _id: {  
               bsonType: "objectId",  
               description: "O ID único da mensagem"  
            },  
            remetente: {  
               bsonType: "object",  
               required: ["id", "tipo"],  
               properties: {  
                  id: {  
                     bsonType: "objectId",  
                     description: "ID do remetente"  
                  },  
                  tipo: {  
                     enum: ["professor", "funcionario"],  
                     description: "Tipo de remetente (professor ou funcionário)"  
                  }  
               }  
            },  
            destinatário: {  
               bsonType: "object",  
               required: ["id", "tipo"],  
               properties: {  
                  id: {  
                     bsonType: "objectId",  
                     description: "ID do destinatário"  
                  },  
                  tipo: {  
                     enum: ["aluno", "professor"],  
                     description: "Tipo de destinatário (aluno ou professor)"  
                  }  
               }  
            },  
            assunto_mensagem: {  
               bsonType: "string",  
               description: "Assunto da mensagem"  
            },  
            corpo_mensagem: {  
               bsonType: "string",  
               description: "Corpo da mensagem"  
            },  
            data_envio: {  
               bsonType: "date",  
               description: "Data de envio da mensagem"  
            }  
         }  
      }  
   }  
});  
  
  
db.createCollection("Relatorios", {  
   validator: {  
      $jsonSchema: {  
         bsonType: "object",  
         required: ["_id", "gerado_por", "tipo_relatório", "parâmetros", "data_geração", "link_relatório"],  
         properties: {  
            _id: {  
               bsonType: "objectId",  
               description: "O ID único do relatório"  
            },  
            gerado_por: {  
               bsonType: "objectId",  
               description: "ID do funcionário que gerou o relatório"  
            },  
            tipo_relatório: {  
               bsonType: "string",  
               description: "Tipo do relatório (ex: Desempenho, Presença)"  
            },  
            parâmetros: {  
               bsonType: "object",  
               required: ["curso_id", "ano", "semestre"],  
               properties: {  
                  curso_id: {  
                     bsonType: "objectId",  
                     description: "ID do curso relacionado ao relatório"  
                  },  
                  ano: {  
                     bsonType: "int",  
                     description: "Ano do relatório"  
                  },  
                  semestre: {  
                     bsonType: "int",  
                     description: "Semestre do relatório"  
                  }  
               }  
            },  
            data_geração: {  
               bsonType: "date",  
               description: "Data em que o relatório foi gerado"  
            },  
            link_relatório: {  
               bsonType: "string",  
               description: "Link para o relatório gerado"  
            }  
         }  
      }  
   }  
});  
  
show collections;