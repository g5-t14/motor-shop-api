# motor-shop-api

<div style="display: inline_block"><br>
<h1 align="center">
  <img alt="KenzieKommerce" title="KenzieKommerce" src="https://kenzie.com.br/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75" width="100px" />
</h1>
  <p align="center">Este é o backend da aplicação de e-commerce Motorshop do sexto módulo da Kenzie-Academy-Brasil, desenvolvida em express.js,typescript e prisma. Esta aplicação
  foi feita no intuito de demonstrar os conhecimentos que os desenvolvedores adquiriram sobre desenvolvimento web fullstack ao longo de 1 ano do curso oferecido
  pela Kenzie Academy Brasil. <p/>
  
  <h5 align="center">Feito por: Victor Guterres, Giovanni Perotto, Diego Lima, Jozhué Beni, Hérmerson Landim </h5>  
</div>

## **Endpoints**

| HTTP Method | Description                          | Endpoint                     | Authentication Required |
| ----------- | ------------------------------------ | ---------------------------  | ----------------------- |
| POST        | Register user                        | `/users`                     | No Authentication       |
| POST        | Login user                           | `/login`                     | No Authentication       |
| POST        | Reset Password request               | `/users/resetPassword`       | No Authentication       |
| PATCH       | Reset Password                       | `/users/resetPassword/:token`| No Authentication       |
| PATCH       | Update user                          | `/users/:id`                 | Authenticated           | 
| GET         | Get user profile                     | `/users/profile`             | Authenticated           |
| GET         | Get user                             | `/users/:id`                 | Authenticated           |
| DELETE      | Delete user                          | `/users/:id`                 | Authenticated           |
| POST        | Create ads                           | `/ads`                       | Authenticated           |
| GET         | List all ads                         | `/ads`                       | No Authentication       |
| GET         | Retrieve ad                          | `/ads/:id`                   | Authenticated           |
| PATCH       | Update ad                            | `/ads/:id`                   | Authenticated           |
| DELETE      | Delete ad                            | `/ads/:id`                   | Authenticated           |
|  POST       | Post comment                         | `/comments/:ad_id`           |  Authenticated          |
|  GET        | Get comments                         | `/comments/:ad_id`           |  No Authentication      |
|  PATCH      | Patch comment                        | `/comments/:comment_id`      |  Authenticated          |
|  DELETE     | Delete comment                       | `/comments/:comment_id`      |  Authenticated          |

Deploy do render: https://motor-shop-service.onrender.com

Diagrama do Der https://drive.google.com/file/d/1dWz9-AqqLakLX_afLU5QKIvF-YEVYW0V/view 


## Rotas que não precisam de autenticação

<h2 align ='center'> Criando usuário </h2>
 
 Nessa aplicação o usuário pode se cadastrar utilizando seu nome, cpf, cep e endereço e como padrão da role(função) dele
 vem como comprador mas o cliente também pode escolher ser um vendedor.

```json
{
  "name": "Gilberto",
  "email": "gil@gmail.com",
  "cpf": "15693837408",
  "phone":"112288377771",
  "birthdate": "28/04/83",
  "description": "Representante Ford",
  "cep":"11060130",
  "state":"São Paulo",
  "city": "São Caetano",
  "number": "185"
  "street": "Rua Ibiraba",
  "complement": "Última casa á direita",
  "is_seller" true,
  "password":12345678
  "confirm_password": 12345678,
}

```

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{               
  "id":1,
  "name": "Gilberto",
  "email": "gil@gmail.com",
  "cpf": "15693837408",
  "phone":"112288377771",
  "birthdate": "28/04/83",
  "description": "Representante Ford",
  "cep":"11060130",
  "state":"São Paulo",
  "city": "São Caetano",
  "number": "185"
  "street": "Rua Ibiraba",
  "complement": "Última casa á direita",
  "is_seller" true
}

```
em caso de erro:

```json
{
	"name": [
		"This field is required."
	],
	"cpf": [
		"This field is required."
	],
	"cep": [
		"This field is required."
	],
  "birthday":[
    "This field is required."
  ],
  "phone":[
    "This field is required."
  ],
  "city":[
    "This field is required."
  ],
  "state":[
    "This field is required."
  ],
  "number":[
    "This field is required."
  ],
	"email": [
		"This field is required."
	],
	"password": [
		"This field is required."
	]
}
```

<h2 align ='center'> Login de usuário </h2>


body:

```json
       {
	"username": "John Doe",	
	"password":12345678
	}
```


`POST /login - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4NDI0NzU4MiwiaWF0IjoxNjgzNjQyNzgyLCJqdGkiOiJhNGM0YzdhN2YxNjg0NmU4ODczNTFmYTJkOWY1NDkxMyIsInVzZXJfaWQiOjJ9.17ZJeaNgKZH5A4OclYufT_ErMIKcr_g8zjLm6Th36Jo",
	"access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzNjk2NzgyLCJpYXQiOjE2ODM2NDI3ODIsImp0aSI6ImFmYzkzYWVkOGEzOTQwMDVhODM3Yzk5ZGVlOTlkMjk3IiwidXNlcl9pZCI6Mn0.xqTLZBTDdIuBcLGSBxpj4BCVFKgu-UbOxw1Nu-s24Aw"
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
  "color": "Vermelho"
  "fipe_table": 26000,
  "price": 1800,
  "description": "It's pretty good",
"cover_img":"data:image/jpeg;base64,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",
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
  "color": "Grey"
  "fipe_table": 26000,
  "price": 1800,
  "description": "It's pretty good",
"cover_img":"data:image/jpeg;base64,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",
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
     "email":"gil@gmail.com" 
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
     "password":"12345678" 
	}
```
response:
```json
      {
        "message": "password alterated with sucess"
      }
```

<h2 align ='center'> Listando Comentários de uma núncio  </h2>

Na rota get /comments/:ad_id qualquer usuário é capaz de ter acesso a lista de comentários do anúncio

`GET - /comments/:ad_id Status 200 ok  `

```json
{
	"comments": [
		{
			"id": 6,
			"user_id": 2,
			"ad_id": 11,
			"description": "Thanks Gilberto, very cool.",
			"created_at": "2023-06-28T19:10:45.239Z",
			"username": "Jonathan"
		}
	]
}

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
  "fuel": "15L" ,
  "mileage": "1200km",
  "color": "Azul"
  "fipe_table": 26000,
  "price": 1800,
  "description": "It's pretty good",
"cover_img":"data:image/jpeg;base64,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",
  "is_active": true,
  "pictures": "Blue.png"
} 
```

response:
```json
      {
  "id":3,      
  "brand": "Chevrolet",
  "model": "Astra GSI",
  "year": "1992",
  "fuel": "15L" ,
  "mileage": "1200km",
  "color": "Azul"
  "fipe_table": 26000,
  "price": 1800,
  "description": "It's pretty good",
"cover_img":"data:image/jpeg;base64,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",
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
   "fuel":"16L"
   }

  ```

  response:
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
"cover_img":"data:image/jpeg;base64,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",
  "is_active": true,
  "pictures": "Blue.png"
      }
```

`DELETE /ads/:id - FORMATO DA RESPOSTA - STATUS 204` 

<h2 align ='center'> Deletar Anúncios </h2>
 
 Nessa aplicação /ads/:id o usuário deve estar logado para poder deletar o anúncio e o mesmo deve 
 ser um vendedor passando  o id como parâmetro.

 
```json
{

  "No response"

}
```
`GET /ads/:id - FORMATO DA RESPOSTA - STATUS 200` 

<h2 align ='center'> Listar Anúncio </h2>
 
 Nessa aplicação /ads/:id o usuário deve estar logado para poder buscar o anúncio e o mesmo deve 
 ser um vendedor passando  o id como parâmetro.

 response
```json
{
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
"cover_img":"data:image/jpeg;base64,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",
  "is_active": true,
  "pictures": "Blue.png"
      }

}
```



`DELETE /users/:id - FORMATO DA RESPOSTA - STATUS 204`

Nessa aplicação /users/:id o usuário deve estar logado para poder deletar o seu perfil.


```json
{

  "No response"

}
```

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
  "id":1,
  "name": "Alberto",
  "email": "gil@gmail.com",
  "cpf": "15693837408",
  "phone":"112288377771",
  "birthdate": "28/04/83",
  "description": "Representante Ford",
  "cep":"11060130",
  "state":"São Paulo",
  "city": "São Caetano",
  "number": "185"
  "street": "Rua Ibiraba",
  "complement": "Última casa á direita",
  "is_seller" true

}
```
`GET/users/profile - FORMATO DA RESPOSTA - STATUS 200`

Nessa aplicação /users/:id o usuário deve estar logado para poder pegar o seu perfil.

response:
```json
{               
  "id":1,
  "name": "Alberto",
  "email": "gil@gmail.com",
  "cpf": "15693837408",
  "phone":"112288377771",
  "birthdate": "28/04/83",
  "description": "Representante Ford",
  "cep":"11060130",
  "state":"São Paulo",
  "city": "São Caetano",
  "number": "185"
  "street": "Rua Ibiraba",
  "complement": "Última casa á direita",
  "is_seller" true

}
```
`GET/users/:id - FORMATO DA RESPOSTA - STATUS 200`

Nessa aplicação /users/:id o usuário deve estar logado para poder pegar um usuário pelo id.

response:
```json{               
  "id":1,
  "name": "Alberto",
  "email": "gil@gmail.com",
  "cpf": "15693837408",
  "phone":"112288377771",
  "birthdate": "28/04/83",
  "description": "Representante Ford",
  "cep":"11060130",
  "state":"São Paulo",
  "city": "São Caetano",
  "number": "185"
  "street": "Rua Ibiraba",
  "complement": "Última casa á direita",
  "is_seller" true

}
```

<h2 align ='center'> Postar comentários </h2>
 
 Nessa aplicação /comments/:id o usuário deve estar logado para poder comentar o anúncio. 

`POST - /comments/:ad_id - FORMATO DA RESPOSTA - STATUS 201`


```json
{
	"description": "Thanks Gilberto, very cool."
}
```
```json 
{
	"id": 4,
	"user_id": 2,
	"ad_id": 10,
	"description": "Thanks Gilberto, very cool.",
	"created_at": "2023-06-28T19:09:59.826Z",
	"username": "Jonathan"
}
````
<h2 align ='center'> Editar comentários </h2>
 
 Nessa aplicação /comments/:comment_id o usuário deve estar logado para poder editar o comentário do anúncio.
Somente o usuário que criou o comentário original pode edita-lo  

```json
{
	"description": "It's pretty good"
}
```
```json 
{
	"id": 4,
	"user_id": 2,
	"ad_id": 10,
	"description": "It's pretty good"
	"created_at": "2023-06-28T19:09:59.826Z",
	"username": "Jonathan"
}
````

<h2 align ='center'> Deletar comentários </h2>
 
 Nessa aplicação /comments/:ad_id o usuário deve estar logado para poder editar o comentário do anúncio.
Somente o usuário que criou o comentário original pode deleta-lo  

`DELETE - /comments/:ad_id - FORMATO DA RESPOSTA - STATUS 204 NO COMMENT`




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









