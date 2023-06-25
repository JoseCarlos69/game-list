# Projeto de Estágio Frontend React

Nesse projeto foi implementado o frontend para apresentar uma lista de jogos, que será fornecida por uma API. 
## Requisitos funcionais

A url base da API é [https://games-test-api-81e9fb0d564a.herokuapp.com/api/](https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/)

- O projeto foi feito usando React
- Obtive a lista de jogos em `/data`
- Construi um loader enquanto os dados são obtidos
- Apresentei os jogos em três colunas (no computador)
- Em cada card apresentei o título e imagem e algumas informações a mais como a publisher e etc
- Lidei com a responsividade, para que fique bem apresentado no computador, tablets ou celular
- Quando a API retorna o `status code` 500, 502, 503, 504, 507, 508 ou 509 apresento ao usuário `O servidor fahou em responder, tente recarregar a página`
- Caso a API retorne outros erros, apresentei `O servidor não conseguirá responder por agora, tente voltar novamente mais tarde`
- Ao realizar uma chamada, não espero mais que 5 segundos pelo retorno. Se os dados demorarem mais de 5 segundos para retornar é apresentado a mensagem `O servidor demorou para responder, tente mais tarde`
- Sempre que apresentar uma mensagem para o usuário, ou tiver os dados em mãos para apresentar, ocultar o loader
- Foi incluído um campo de busca, que permite localizar jogos pelo título, com busca case insensitive
- Com os dados em mãos vi os `genre` que foram retornados e permite que o usuário selecione um deles, e então filtre para exibir apenas jogos do gênero selecionado

Projeto rodando online: https://fast-badlands-92176-c36db2808f93.herokuapp.com/

![Logo](/public/imagem%201.PNG)
![Logo](/public/Imagem%202.PNG)
![Logo](/public/Imagem%203.PNG)
![Logo](/public/Imagem%204.PNG)
![Logo](/public/Imagem%205.PNG)

