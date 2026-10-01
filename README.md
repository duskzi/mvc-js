# Express no Modelo MVC

Projeto desenvolvido para o 3º bimestre das aulas de PW da ETEC Bento Quirino - Campinas.

## Rotas

| Método | Rota   | Descrição                |
|--------|--------|--------------------------|
| POST   | `/`    | Cria um usuário          |
| GET    | `/`    | Lista os usuários        |
| GET    | `/:id` | Busca um usuário por id  |
| PUT    | `/:id` | Atualiza um usuário      |
| DELETE | `/:id` | Remove um usuário        |

## Dependências

- express
- cors
- dotenv
- mysql2
- [HTTPie](https://httpie.io) (para testar as rotas)