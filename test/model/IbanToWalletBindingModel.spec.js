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
    describe('IbanToWalletBindingModel', function() {
      beforeEach(function() {
        instance = new FinacApi.IbanToWalletBindingModel();
      });

      it('should create an instance of IbanToWalletBindingModel', function() {
        // TODO: update the code to test IbanToWalletBindingModel
        expect(instance).to.be.a(FinacApi.IbanToWalletBindingModel);
      });

      it('should have the property bin (base name: "bin")', function() {
        // TODO: update the code to test the property bin
        expect(instance).to.have.property('bin');
        // expect(instance.bin).to.be(expectedValueLiteral);
      });

      it('should have the property ibanCountry (base name: "ibanCountry")', function() {
        // TODO: update the code to test the property ibanCountry
        expect(instance).to.have.property('ibanCountry');
        // expect(instance.ibanCountry).to.be(expectedValueLiteral);
      });

      it('should have the property distributorCode (base name: "distributorCode")', function() {
        // TODO: update the code to test the property distributorCode
        expect(instance).to.have.property('distributorCode');
        // expect(instance.distributorCode).to.be(expectedValueLiteral);
      });

      it('should have the property walletId (base name: "walletId")', function() {
        // TODO: update the code to test the property walletId
        expect(instance).to.have.property('walletId');
        // expect(instance.walletId).to.be(expectedValueLiteral);
      });

    });
  });

}));
