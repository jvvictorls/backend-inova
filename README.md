Olá, caro #Trilheiro(a)!

Este é o repositório da nossa aplicação de back-end, com desafio na resolução do 4º desafio trilhas.

O Objetivo desta aplicação é criar uma API de cadastro de usuários, que possa ser utilizada em conjunto com a aplicação front-end desenvolvida por este setor.

As tecnologias utilizadas foram:
 - Node (14.3.0)
 - Express
 - Docker

Será utilizada uma arquitetura MVC, dividida da seguinte forma:

Camada Model (M):
 É a camada responsável por buscar os dados no banco de dados da aplicação, sendo assim a camada mais 'baixa' da aplicação. 

Camada View (V):
 Também chamada de camada de serviço (service em inglês), é a camada responsável por fazer toda a lógica do neǵocio. Aqui serão recebidos os dados da aplicação retornados pela model, e manipulados afim de remover dados sensíveis, verificação de dados, validação de dados... entre outras operações.

Camada Controller (C) :
 Nesta camada, as requisições feitas a aplicação serão devidamente enviadas ao serviço correspondente, e após a validação, será retornado a resposta num formato padrão, acompanhado de um código HTTP correspondente àquilo que foi retornado pela service. 