/*
 * Finac API
 * <b>Version Notes:- <br/>• All amounts fields in requests and responses have been changed from decimal to int64(cents). This means that 10.00 in version 1, is 1000 in version 2.<br/>• ThreeDS endpoints have been added to this version. These will replace the KBA endpoints from version 1.</br>• AccountId endpoint has changed HTTP verb from GET to POST, furthermore additional cardholder details need to be provided as part of the HTTP body.</b>
 *
 * OpenAPI spec version: 2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.42
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FinacApi);
  }
}(this, function(expect, FinacApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Account', function() {
      beforeEach(function() {
        instance = new FinacApi.Account();
      });

      it('should create an instance of Account', function() {
        // TODO: update the code to test Account
        expect(instance).to.be.a(FinacApi.Account);
      });

      it('should have the property accountPanSuffix (base name: "accountPanSuffix")', function() {
        // TODO: update the code to test the property accountPanSuffix
        expect(instance).to.have.property('accountPanSuffix');
        // expect(instance.accountPanSuffix).to.be(expectedValueLiteral);
      });

      it('should have the property financialAccountSuffix (base name: "financialAccountSuffix")', function() {
        // TODO: update the code to test the property financialAccountSuffix
        expect(instance).to.have.property('financialAccountSuffix');
        // expect(instance.financialAccountSuffix).to.be(expectedValueLiteral);
      });

      it('should have the property countryCode (base name: "countryCode")', function() {
        // TODO: update the code to test the property countryCode
        expect(instance).to.have.property('countryCode');
        // expect(instance.countryCode).to.be(expectedValueLiteral);
      });

      it('should have the property interbankCardAssociationId (base name: "interbankCardAssociationId")', function() {
        // TODO: update the code to test the property interbankCardAssociationId
        expect(instance).to.have.property('interbankCardAssociationId');
        // expect(instance.interbankCardAssociationId).to.be(expectedValueLiteral);
      });

      it('should have the property institutionName (base name: "institutionName")', function() {
        // TODO: update the code to test the property institutionName
        expect(instance).to.have.property('institutionName');
        // expect(instance.institutionName).to.be(expectedValueLiteral);
      });

      it('should have the property expirationDate (base name: "expirationDate")', function() {
        // TODO: update the code to test the property expirationDate
        expect(instance).to.have.property('expirationDate');
        // expect(instance.expirationDate).to.be(expectedValueLiteral);
      });

      it('should have the property alternateAccountIdentifierSuffix (base name: "alternateAccountIdentifierSuffix")', function() {
        // TODO: update the code to test the property alternateAccountIdentifierSuffix
        expect(instance).to.have.property('alternateAccountIdentifierSuffix');
        // expect(instance.alternateAccountIdentifierSuffix).to.be(expectedValueLiteral);
      });

      it('should have the property tokens (base name: "tokens")', function() {
        // TODO: update the code to test the property tokens
        expect(instance).to.have.property('tokens');
        // expect(instance.tokens).to.be(expectedValueLiteral);
      });

    });
  });

}));