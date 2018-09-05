# Validador de cartão de Crédito v.1.0.0

**Esta biblioteca se destina à validação de cartões de crédito, para uso em aplicações web. Nesta versão se pode colocar o número de um cartão de crédito, se ele for válido retornará true ou se for inválido, retornará false.** 

## Os métodos utilizados na biblioteca são:

#### **cardValidator(cardNum);**

Exemplo de uso:

```
$node
> let validate = require("validadordajujuzeeenha")

> validate(5293230347113647); //true

> validate(5293230347111647); //false
```


## Versão 1.0.0

- funcionalidades: validação de números de cartões de crédito;

## Instalação

- Você deverá ter o node + npm instalados. Para guia de instalação, visite o [site oficial] (https://www.npmjs.com/get-npm).
- Proceda com a instalação com `$npm install validadordajujuzeeenha`

## Roadmap oficial do projeto

## Versão 1.0.2
- Correção do estilo do código (utilizando o Eslint)

## Versão 1.0.1
- Correção de bug de quando não houver parâmetro, deve lançar um erro.
- Correção de bug de quando o número for uma string deve lançar um erro.
- Correção de bug de quando o número for um inteiro e houver um digito deve lançar um erro.

