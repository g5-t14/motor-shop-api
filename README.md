# motor-shop-api

<div style="display: inline_block"><br>
<h1 align="center">
  <img alt="KenzieKommerce" title="KenzieKommerce" src="https://kenzie.com.br/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75" width="100px" />
</h1>
  <p style="text-align: justify;">
  Este é o backend da aplicação de e-commerce Motorshop, desenvolvida durante o sexto módulo do curso da Kenzie Academy Brasil. Utilizando as tecnologias Express.js, TypeScript e Prisma, esta aplicação foi criada com o propósito de demonstrar o conhecimento adquirido pelos desenvolvedores ao longo de um ano de estudos no curso de desenvolvimento web full-stack.</p>

<p style="text-align: justify;">Através do uso do Express.js, um framework web rápido e flexível para Node.js, e do TypeScript, uma linguagem de programação tipada, o backend do Motorshop oferece uma base sólida para o funcionamento do sistema de e-commerce. A estrutura robusta fornecida pelo Express.js permite o desenvolvimento de rotas e endpoints eficientes, facilitando a comunicação com o frontend e a manipulação de dados.</p>

<p style="text-align: justify;">A integração do Prisma no projeto traz a vantagem de uma camada de acesso a banco de dados moderna e intuitiva. Com o Prisma, é possível gerenciar e interagir com o banco de dados de forma simplificada e segura, aproveitando recursos como migrações de banco de dados e construção de consultas de forma declarativa.</p>

<p style="text-align: justify;">Ao longo deste trabalho, foram aplicados princípios de boas práticas de desenvolvimento, arquitetura MVC, a utilização de padrões de projeto e a adoção de padrões de nomenclatura consistentes. Além disso, foi dado enfoque à segurança da aplicação, implementando medidas de proteção e validação de dados.</p>

<p style="text-align: justify;">Este repositório representa não apenas o resultado de um projeto prático, mas também o comprometimento e dedicação dos desenvolvedores em aprender e aplicar conceitos fundamentais de desenvolvimento web. Esperamos que esta aplicação sirva como uma demonstração sólida do conhecimento adquirido e das habilidades desenvolvidas ao longo deste curso oferecido pela Kenzie Academy Brasil.</p>

  <h5 align="center">Feito por: Diego Lima, Giovanni Perotto, Hérmerson Landim, Jozhué Beni e Victor Guterres </h5>  
</div>

## Install dependencies:

```bash
# caso use npm
npm run i

# caso use yarn
yarn

# para rodar as migrações localmente
npx prisma migrate dev

# caso você queira rodar a aplicação localmente
npm run dev

```

## **Endpoints**

| HTTP Method | Description            | Endpoint                      | Authentication Required |
| ----------- | ---------------------- | ----------------------------- | ----------------------- |
| POST        | Register user          | `/users`                      | No Authentication       |
| POST        | Login user             | `/login`                      | No Authentication       |
| POST        | Reset Password request | `/users/resetPassword`        | No Authentication       |
| PATCH       | Reset Password         | `/users/resetPassword/:token` | No Authentication       |
| PATCH       | Update user            | `/users/:id`                  | Authenticated           |
| GET         | Get user profile       | `/users/profile`              | Authenticated           |
| GET         | Get user               | `/users/:id`                  | Authenticated           |
| DELETE      | Delete user            | `/users/:id`                  | Authenticated           |
| POST        | Create ads             | `/ads`                        | Authenticated           |
| GET         | List all ads           | `/ads`                        | No Authentication       |
| GET         | Retrieve ad            | `/ads/:id`                    | Authenticated           |
| PATCH       | Update ad              | `/ads/:id`                    | Authenticated           |
| DELETE      | Delete ad              | `/ads/:id`                    | Authenticated           |
| POST        | Post ad                | `/comments/:ad_id`            | Authenticated           |
| GET         | Get comments           | `/comments/:ad_id`            | Authenticated           |
| PATCH       | Patch comments         | `/comments/:id`               | Authenticated           |
| DELETE      | Delete comments        | `/comments/:id`               | Authenticated           |

Deploy do render: https://motor-shop-service.onrender.com

Diagrama do Der: https://drive.google.com/file/d/1dWz9-AqqLakLX_afLU5QKIvF-YEVYW0V/view

Doc do insomnia: https://g5-t14.github.io/doc-insomnia/ 

## Rotas que não precisam de autenticação

<h2 align ='center'> Criando usuário </h2>
 
 Nessa aplicação o usuário pode se cadastrar utilizando seu nome, cpf, cep e endereço e como padrão da role(função) dele
 vem como comprador mas o cliente também pode escolher ser um vendedor.

```json
{
  "name": "Gilberto",
  "email": "gil@gmail.com",
  "cpf": "15693837408",
  "phone": "112288377771",
  "birthdate": "28/04/83",
  "description": "Representante Ford",
  "cep": "11060130",
  "state": "São Paulo",
  "city": "São Caetano",
  "number": "185",
  "street": "Rua Ibiraba",
  "complement": "Última casa à direita",
  "is_seller": true,
  "password": "Teste123!"
}
```

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": 1,
  "name": "Gilberto",
  "email": "gil@gmail.com",
  "cpf": "15693837408",
  "phone": "112288377771",
  "birthdate": "28/04/83",
  "description": "Representante Ford",
  "cep": "11060130",
  "state": "São Paulo",
  "city": "São Caetano",
  "number": "185",
  "street": "Rua Ibiraba",
  "complement": "Última casa à direita",
  "is_seller": true
}
```

em caso de erro:

```json
{
  "name": ["This field is required."],
  "cpf": ["This field is required."],
  "cep": ["This field is required."],
  "birthday": ["This field is required."],
  "phone": ["This field is required."],
  "city": ["This field is required."],
  "state": ["This field is required."],
  "number": ["This field is required."],
  "email": ["This field is required."],
  "password": ["This field is required."]
}
```

<h2 align ='center'> Login de usuário </h2>

body:

```json
{
  "email": "gil@gmail.com",
  "password": "Teste123!"
}
```

`POST /login - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc1NlbGxlciI6dHJ1ZSwiaWF0IjoxNjg4MDYyMjE5LCJleHAiOjE2ODgwNjU4MTksInN1YiI6IjEifQ.zfhQ5ZGv6PkRhiB9AgJZAX0n3bfzUohJ_59CW8COpXc",
  "user_id": 1
}
```

`GET /ads - FORMATO DA RESPOSTA - STATUS 200`

<h2 align ='center'> Listando Anúncios  </h2>

Na rota /ads qualquer usuário é capaz de ter acesso a lista de anúncios

```json
 {
  "id": 1,
  "brand": "Chevrolet",
  "model": "Astra GSI",
  "year": "1992",
  "fuel": "15L" ,
  "mileage": "1200km",
  "color": "Vermelho",
  "fipe_table": 26000,
  "price": 1800,
  "description": "It's pretty good",
  "cover_img":"http://suaimagem.com.br/jpeg",
  "is_active": true,
  "pictures": "Red.png"
},
{
  "id": 2,
  "brand": "Chevrolet",
  "model": "Astra GSI",
  "year": "1992",
  "fuel": "15L" ,
  "mileage": "1200km",
  "color": "Grey",
  "fipe_table": 26000,
  "price": 1800,
  "description": "It's pretty good",
  "cover_img":"http://suaimagem.com.br/jpeg",
  "is_active": false,
  "pictures": "Grey.png"

}

```

`POST /users/resetPassword - FORMATO DA RESPOSTA - STATUS 201`

<h2 align ='center'> Recuperação de Senha  </h2>

Na rota /users/resetPassword qualquer usuário é capaz de fazer a request
de recuperar a senha do usuário, com isso o usuário poderá verificar
a mensagem de recuperação de senha que gerará u token de recuperação de usuário

body:

```json
{
  "email": "gil@gmail.com"
}
```

response:

```json
   {
     "token send"
   }
```

`Patch /users/resetPassword/:token - FORMATO DA RESPOSTA - STATUS 200`
Na rota /users/resetPassword/:token passando o token gerado como parâmetro
é possível fazer a request de redefinição de senha

```json
{
  "password": "Teste12!"
}
```

response:

```json
{
  "message": "password alterated with success"
}
```

<h2 align ='center'> Listando Comentários </h2>

`GET -  /comment/:ad_id status 200 ok`

Na rota de listagem de comentários de um requisição é necessário, 
passar o id do anúncio na qual o usuário deseja ver os comentários.
Não é necessário um token para solicitar a requisição.

Response:

```json

[{
	"id": 60,
	"description": "Hey, it's pretty good.",
	"created_at": "2023-07-04T18:28:10.235Z",
	"edited": false,
	"user": {
		"id": 2,
		"name": "Gilberto",
		"user_color": "#153D2E"
	}
},
 
 {
	"id": 59,
	"description": "Thanks Gilberto, very cool.",
	"created_at": "2023-07-04T18:28:50.235Z",
	"edited": false,
	"user": {
		"id": 2,
		"name": "Jonathan",
		"user_color": "#153D2E"
	}
}

]

```


## Rotas que precisam de autenticação

`POST /ads - FORMATO DA RESPOSTA - STATUS 201`

<h2 align ='center'> Criando Anúncios </h2>
 
 Nessa aplicação o usuário /ads deve estar logado para cadastrar um novo anúncio e o mesmo deve 
 ser um vendedor.

```json
{
  "brand": "Chevrolet",
  "model": "Astra GSI",
  "year": "1992",
  "fuel": "15L",
  "mileage": "1200km",
  "color": "AzulClaro",
  "fipe_table": 26000,
  "price": 1800,
  "description": "It's pretty good",
  "cover_img": "http://suaimagem.com.br/jpeg",
  "is_active": true,
  "pictures": "Blue.png"
}
```

response:

```json
{
  "id": 3,
  "brand": "Chevrolet",
  "model": "Astra GSI",
  "year": "1992",
  "fuel": "15L",
  "mileage": "1200km",
  "color": "AzulEscuro",
  "fipe_table": 26000,
  "price": 1800,
  "description": "It's pretty good",
  "cover_img": "http://suaimagem.com.br/jpeg",
  "is_active": true,
  "pictures": "Blue.png"
}
```

`PATCH /ads/:ids - FORMATO DA RESPOSTA - STATUS 200`

<h2 align ='center'> Editar Anúncios </h2>
 
 Nessa aplicação /ads/:id o usuário deve estar logado para editar o anúncio e o mesmo deve 
 ser um vendedor passando  o id como parâmetro.
 
```json
{
  "fuel":"Diesel"
}
```

response:

```json
{
  "id": 3,
  "brand": "Chevrolet",
  "model": "Astra GSI",
  "year": "1992",
  "fuel": "16L",
  "mileage": "1200km",
  "color": "Azul",
  "fipe_table": 26000,
  "price": 1800,
  "description": "It's pretty good",
  "cover_img": "http://suaimagem.com.br/jpeg",
  "is_active": true,
  "pictures": "Blue.png"
}
```

`DELETE /ads/:id - FORMATO DA RESPOSTA - STATUS 204`

<h2 align ='center'> Deletar Anúncios </h2>

Nessa aplicação /ads/:id o usuário deve estar logado para poder deletar o anúncio e o mesmo deve
ser um vendedor passando o id como parâmetro.

```json
{

  "No response"

}
```

`GET /ads/:id - FORMATO DA RESPOSTA - STATUS 200`

<h2 align ='center'> Listar Anúncio </h2>

Nessa aplicação /ads/:id o usuário deve estar logado para poder buscar o anúncio e o mesmo deve
ser um vendedor passando o id como parâmetro.

response

```json
{
  "id":3,
  "brand": "Chevrolet",
  "model": "Astra GSI",
  "year": "1992",
  "fuel": "16L" ,
  "mileage": "1200km",
  "color": "Azul"
  "fipe_table": 26000,
  "price": 1800,
  "description": "It's pretty good",
  "cover_img": "http://suaimagem.com.br/jpeg",
  "is_active": true,
  "pictures": "Blue.png"
}
```
<h2 align ='center'> Deletar Usuários </h2>

`DELETE /users/:id - FORMATO DA RESPOSTA - STATUS 204`

Nessa aplicação /users/:id o usuário deve estar logado para poder deletar o seu perfil.

```json
{

  "No response"

}
```

<h2 align ='center'> Editar Usuários </h2>

`PATCH /users/:id - FORMATO DA RESPOSTA - STATUS 200`

Nessa aplicação /users/:id o usuário deve estar logado para poder editar o seu perfil.

```json
{
  "name": "Alberto"
}
```

response:

```json
{
  "id": 1,
  "name": "Alberto",
  "email": "gil@gmail.com",
  "cpf": "15693837408",
  "phone": "112288377771",
  "birthdate": "28/04/83",
  "description": "Representante Ford",
  "cep": "11060130",
  "state": "São Paulo",
  "city": "São Caetano",
  "number": "185",
  "street": "Rua Ibiraba",
  "complement": "Última casa á direita",
  "is_seller": true
}
```

<h2 align ='center'> Acessando Perfil </h2>

`GET/users/profile - FORMATO DA RESPOSTA - STATUS 200`

Nessa aplicação /users/:id o usuário deve estar logado para poder pegar o seu perfil.

response:

```json
{
  "id": 1,
  "name": "Alberto",
  "email": "gil@gmail.com",
  "cpf": "15693837408",
  "phone": "112288377771",
  "birthdate": "28/04/83",
  "description": "Representante Ford",
  "cep": "11060130",
  "state": "São Paulo",
  "city": "São Caetano",
  "number": "185",
  "street": "Rua Ibiraba",
  "complement": "Última casa á direita",
  "is_seller": true
}
```

`GET/users/:id - FORMATO DA RESPOSTA - STATUS 200`

Nessa aplicação /users/:id o usuário deve estar logado para poder pegar um usuário pelo id.

response:

```json
{
  "id": 1,
  "name": "Alberto",
  "email": "gil@gmail.com",
  "cpf": "15693837408",
  "phone": "112288377771",
  "birthdate": "28/04/83",
  "description": "Representante Ford",
  "cep": "11060130",
  "state": "São Paulo",
  "city": "São Caetano",
  "number": "185",
  "street": "Rua Ibiraba",
  "complement": "Última casa á direita",
  "is_seller": true
}
```

<h2 align ='center'> Postando Comentários </h2>



`POST - /comment/:ad_id - status 200 ok`

Em nossa rota de postar comentários de nossa requisição é necessário, 
passar o id do anúncio na qual o usuário deseja comentar.   


```json

{
  "description": "It's pretty good"
}

```

Response:
```json
{
	"id": 60,
	"description": "Hey, It's pretty good.",
	"created_at": "2023-07-04T18:28:20.235Z",
	"edited": false,
	"user": {
		"id": 2,
		"name": "Gilberto",
		"user_color": "#153D2E"
	}
}

```

<h2 align ='center'> Editando Comentário </h2>

`PATCH - /comment/:comment_id - status 200 ok`

Em nossa rota de editar comentários de nossa requisição, é necessário, 
passar o id do comentário do usuário como parâmetro para que seja possível
a edição dos comentários, somente o usuário dono do comentário é capaz de edita-lo, 
também é necessário passar o token de autorização do usuário .   


```json

{
  "description": "Thanks Gilberto, very cool."
}

```


```json
{
	"id": 60,
	"description": "Thanks Gilberto, very cool.",
	"created_at": "2023-07-04T18:28:20.235Z",
	"edited": false,
	"user": {
		"id": 2,
		"name": "Gilberto",
		"user_color": "#153D2E"
	}
}
```



<h2 align ='center'> Deletar Comentários </h2>

`DELETE - /comment/:comment_id - status 204`

    Em nossa rota de deletar comentários de nossa requisição, é necessário, 
    passar o id do comentário do usuário como parâmetro para que seja possível
    a deleção do comentário do mesmo, somente o usuário dono do comentário é capaz de deleta-lo,
    também é necessário passar o token de autorização do usuário .   


```json

{
  "message": "No content."
}

```










