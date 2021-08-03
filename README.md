# Maga-nets

## :rocket:  Stack
Este projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)
- [Cypress](https://www.cypress.io/)


No desenvolvimento do projeto além das tecnologias já citadas, foi utilizado também Context Api e Json-server. Também foi feito uma compatibilidade parcial com o IE 11.

### Inicialização

__Backend__

Para o backend deste projeto é necessário ter [Json-server](https://www.npmjs.com/package/json-server) instalado globalmente. Assim após já ter o mesmo instalado, para executar o projeto é necessário ir até a pasta mock (`src/mock`) e executar o comando abaixo:
```
json-server --watch db.json --port 5555
```

__Frontend__
```js
  yarn install
```
Depois

```js
  yarn start
```
__Testes__

A aplicação conta com 5 testes desenvolvidos em Cypress. 

  * `add randon item (1 at 10) on Wishlist ` - Adiciona um item entre os 10 primeiros na lista de desejos.
  * `remove created randon item on Wishlist` - Remove o item adicionado no teste anterior da lista de desejos.
  * `add randon item on Home and remove on Wishlist` - Adiciona um item entre os 10 primeiros na lista de desejos e em seguida navega até a página da lista de desejos e por fim remove o item adicionado.
  * `visit Whislist and back to Home` -  Visita a página de lista de desejos e em seguida volta pra Home.
  * `write Camisa  and click on first result and back to home` - Digita no campo de busca "Camisa" e seleciona o primeiro item da listagem.

Para a execução dos testes use o camando:

```js
  npm test
```

__Paginas__

A aplicação conta com duas páginas sendo a Home a default e a página de lista de desejos /wishlist.


### Utilização

A tela inicial é composta por uma grade que contém todos os itens vindos da API. Nela é possível, adicionar itens ao clicar no coração em cima do item, ver informações do item e o preço do mesmo. Também é possível no campo de busca filtrar um item em específico. A outra tela a Lista de desejos é acessável ao clicar sobre o Coração ou sobre o nome. Nessa lista é mostrado todos os itens que o usuário adicionou como favoritos, também sendo possível realizar a remoção de itens por ela.
