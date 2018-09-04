const mocha = require("mocha");
const chai = require("chai");
const validatorErrors = require("./index");
const expect = chai.expect;

describe("validatorErrors", ()=>{
  describe("#validatorTests", ()=>{
    describe("Quando nao houver parametro", ()=>{
      it("deve me retornar um erro", ()=>{
        var errorFunction = function () {validatorErrors.cardValidator()}
      expect(errorFunction).to.throw("prencha o parâmetro da função")
      });
    });
    describe("Quando o numero for uma string", ()=>{
      it("deve me retornar um erro", ()=>{
        var errorFunction = function () {validatorErrors.cardValidator("string")}
      expect(errorFunction).to.throw("o parametro precisa ser do tipo Number")
      });
    });
    describe("Quando o numero for um inteiro e houver um digito", ()=>{
      it("deve me retornar um erro", ()=>{
        var errorFunction = function () {validatorErrors.cardValidator(1)}
      expect(errorFunction).to.throw("não pode ter somente um digito")
      });
    });
    describe("Quando o numero for um inteiro e for um cartão válido", ()=>{
      it("deve me retornar um true", ()=>{
       expect(validatorErrors.cardValidator(5293230347113647)).to.equal(true);
      });
    });
    describe("Quando o numero for um inteiro e for um cartão invalido", ()=>{
      it("deve me retornar false", ()=>{
      expect(validatorErrors.cardValidator(5293230347111647)).to.equal(false);
      });
    });
  });
})




// Quando nao houver parametro deve lancar um erro.

// Quando o numero for uma string deve lancar um erro.

// Quando o numero for um inteiro e houver um digito deve lancar um erro.

// Quando o numero for um inteiro e for um cartão válido deve retornar true, se o cartao for invalido deve retornar false.









// Exemplo:

// Entrada: 36490102462661

// Saída: true

