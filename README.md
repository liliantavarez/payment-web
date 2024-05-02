# Teste Técnico Kirvano - Pagamento Web

## Descrição do Projeto

Este é um projeto desenvolvido como parte do teste técnico proposto pela Kirvano para a implementação de uma aplicação web de pagamento. O projeto consiste em um backend em Node.js utilizando Express para receber e processar requisições de pagamento vindas de um formulário no frontend. O frontend foi desenvolvido com React, utilizando Next.js como framework, Tailwind CSS para estilização dos componentes, Zod para validação dos dados do formulário e React Hook Form para gerenciamento do formulário.

## Tecnologias Utilizadas

- Backend:
  - Node.js
  - Express
  - Mongoose
- Frontend:
  - React
  - Next.js
  - Tailwind CSS
  - Zod
  - React Hook Form

## Requisitos e Instalação

Para executar este projeto localmente, você precisará ter o Node.js instalado em sua máquina. Siga os passos abaixo:

1. Clone este repositório:
   ```
   git clone https://github.com/liliantavarez/payment-web.git
   ```
2. Instale as dependências do backend:
   ```
   cd payment-web api
   npm install
   ```
3. Execute o servidor backend:
   ```
   npm start
   ```
4. Em outro terminal, instale as dependências do frontend:
   ```
   cd payment-web client
   npm install
   ```
5. Execute a aplicação frontend:
   ```
   npm start
   ```
6. Acesse a aplicação no navegador: [http://localhost:3000](http://localhost:3000)

## Funcionalidades

- O backend recebe requisições de pagamento, valida os dados e retorna uma resposta de sucesso ou erro.
- O frontend replica e integra o layout proposto no Figma, permitindo ao usuário preencher um formulário de pagamento.
- O frontend realiza a validação dos dados do formulário antes de enviar a requisição para o backend.
- A aplicação é responsiva e funciona corretamente em diferentes dispositivos e tamanhos de tela.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- `api`: Contém o código-fonte do backend.
- `client`: Contém o código-fonte do frontend.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
