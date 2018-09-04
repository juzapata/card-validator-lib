Validador de cartão de Crédito v.1.0.0

Esta biblioteca se destina à validação de cartões de crédito, para uso em aplicações web. Nesta versão se pode colocar o número de um cartão de crédito, se ele for válido retornará true ou se for inválido, retornará false 

Os métodos utilizados na biblioteca são:

cardValidator(cardNum);

Exemplo de uso:

$node
> let validate = require("card-validator-lib")

> validate(5293230347113647); //true

> validate(5293230347111647); //false

Versão 1.0.0
- funcionalidades: validação de números de cartões de crédito;

Instalação

Você deverá ter o node + npm instalados. Para guia de instalação, visite https://www.npmjs.com/get-npm.
Proceda com a instalação com $npm install card-validator-lib

Roadmap oficial do projeto
