# Sistema de Perguntas e Respostas

Este é um projeto simples de perguntas e respostas desenvolvido utilizando **Node.js** com o framework **Express**, **EJS** como motor de templates, e **Sequelize** para integração com o banco de dados. A aplicação permite que os usuários façam perguntas, respondam, e excluam respostas de maneira prática.

---

## 🚀 Funcionalidades

1. **Página inicial com listagem de perguntas:**
   - Exibe todas as perguntas cadastradas no banco de dados, ordenadas pela mais recente.

2. **Cadastro de perguntas:**
   - Permite criar novas perguntas que serão exibidas na página inicial.

3. **Página de detalhes da pergunta:**
   - Mostra o título e a descrição de uma pergunta específica.
   - Exibe todas as respostas associadas à pergunta.

4. **Cadastro de respostas:**
   - Adiciona respostas a perguntas específicas.

5. **Exclusão de respostas:**
   - Permite excluir uma resposta específica tanto do banco de dados quanto da interface da aplicação.

---

## 🛠️ Tecnologias Utilizadas

### **Back-End**
- **Node.js**: Plataforma para execução de JavaScript no lado do servidor.
- **Express**: Framework minimalista para criação de APIs e rotas.
- **Sequelize**: ORM (Object Relational Mapping) para integração com o banco de dados.
- **SQLite/MySQL**: Banco de dados utilizado para armazenar perguntas e respostas.

### **Front-End**
- **EJS (Embedded JavaScript Templates)**: Motor de templates para renderização dinâmica de páginas HTML.
- **Bootstrap**: Framework CSS para estilização e responsividade.

---

## 📂 Estrutura do Projeto

```plaintext
.
├── database/
│   ├── database.js         # Configuração do Sequelize e conexão com o banco
│   ├── Pergunta.js         # Modelo de perguntas
│   ├── Resposta.js         # Modelo de respostas
├── views/
│   ├── index.ejs           # Página inicial
│   ├── perguntar.ejs       # Formulário para adicionar perguntas
│   ├── pergunta.ejs        # Página de detalhes de uma pergunta
│   ├── partials/           # Cabeçalho, rodapé e navbar reutilizáveis
├── public/
│   ├── css/                # Arquivos CSS customizados
├── app.js                  # Arquivo principal da aplicação
└── README.md               # Documentação do projeto
