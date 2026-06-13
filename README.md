# 🍔 Hamburgueria Delivery API

Projeto desenvolvido em Node.js utilizando Express, Sequelize e SQLite para a disciplina Back-End Frameworks (Uninassau) buscando o gerenciamento de uma hamburgueria.

Este projeto foi baseado no repositório disponibilizado pelo professor e expandido para atender aos requisitos da atividade prática da disciplina.

---

## 📋 Objetivo

Desenvolver uma API REST capaz de gerenciar:

- Categorias
- Produtos
- Pedidos
- Entregas
- Avaliações

Além disso, implementar relacionamentos entre entidades utilizando Sequelize e aplicar consultas com Eager Loading.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- SQLite
- Sequelize CLI
- Nodemon

---

## 📂 Estrutura do Projeto

```text
hamburgueria/
│
├── config/
├── controllers/
├── migrations/
├── models/
├── routes/
├── src/
│
├── hamburgueria.db
├── package.json
└── README.md
```

---

## 🗄️ Banco de Dados

O projeto utiliza SQLite como banco de dados.

Entidades implementadas:

### Categoria

Responsável por agrupar os produtos.

Campos:

- id
- nome

### Produto

Representa os itens vendidos pela hamburgueria.

Campos:

- id
- nome
- preco
- categoria_id

### Pedido

Representa um pedido realizado por um cliente.

Campos:

- id
- cliente
- total

### Entrega

Representa a entrega associada a um pedido.

Campos:

- id
- endereco
- status
- pedido_id

### Avaliação

Nova funcionalidade implementada na atividade.

Campos:

- id
- nota
- pedido_id

A nota pode variar de 1 a 5.

---

## 🔗 Relacionamentos

### Categoria → Produto

Uma categoria possui vários produtos.

```javascript
Categoria.hasMany(Produto)
Produto.belongsTo(Categoria)
```

### Pedido → Entrega

Um pedido possui uma entrega.

```javascript
Pedido.hasOne(Entrega)
Entrega.belongsTo(Pedido)
```

### Pedido → Avaliação

Um pedido possui uma avaliação.

```javascript
Pedido.hasOne(Avaliacao)
Avaliacao.belongsTo(Pedido)
```

---

## ⚡ Eager Loading

Foi implementado Eager Loading conforme solicitado na atividade.

### Categoria

Ao listar categorias, os produtos são carregados automaticamente.

Exemplo:

```json
{
  "id": 1,
  "nome": "Hambúrgueres",
  "produtos": [
    {
      "id": 1,
      "nome": "X-Bacon",
      "preco": 25.5
    }
  ]
}
```

### Pedido

Ao listar pedidos, as entregas e avaliações são carregadas automaticamente.

Exemplo:

```json
{
  "id": 1,
  "cliente": "Anthony",
  "total": 45.90,
  "entrega": {
    "status": "Preparando"
  },
  "avaliacao": {
    "nota": 5
  }
}
```

---

## 📡 Rotas Disponíveis

### Categorias

| Método | Rota |
|----------|----------|
| GET | /categorias |
| POST | /categorias |

### Produtos

| Método | Rota |
|----------|----------|
| GET | /produtos |
| POST | /produtos |

### Pedidos

| Método | Rota |
|----------|----------|
| GET | /pedidos |
| POST | /pedidos |

### Entregas

| Método | Rota |
|----------|----------|
| GET | /entregas |
| POST | /entregas |

### Avaliações

| Método | Rota |
|----------|----------|
| GET | /avaliacoes |
| POST | /avaliacoes |

---

## ▶️ Como Executar

Clone o projeto:

```bash
git clone URL_DO_REPOSITORIO
```

Instale as dependências:

```bash
npm install
```

Execute as migrations:

```bash
npx sequelize-cli db:migrate
```

Inicie o servidor:

```bash
npm run dev
```

Servidor:

```text
http://localhost:3000
```

---

## ✅ Requisitos da Atividade Atendidos

- Model de Avaliação criado
- Controller de Avaliação criado
- Rota de Avaliação criada
- Foreign Key entre Pedido e Avaliação criada
- Migrations implementadas
- Rotas para Produto, Pedido, Entrega e Avaliação
- Eager Loading em Pedido
- Eager Loading em Categoria
- Integração com SQLite
- Projeto publicado no GitHub

---

## 👨‍💻 Autor

Denisson Victor S. Santana

Projeto desenvolvido para atividade prática da disciplina utilizando Node.js, Express, Sequelize e SQLite.
