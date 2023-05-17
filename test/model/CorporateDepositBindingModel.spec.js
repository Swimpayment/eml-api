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
    describe('CorporateDepositBindingModel', function() {
      beforeEach(function() {
        instance = new FinacApi.CorporateDepositBindingModel();
      });

      it('should create an instance of CorporateDepositBindingModel', function() {
        // TODO: update the code to test CorporateDepositBindingModel
        expect(instance).to.be.a(FinacApi.CorporateDepositBindingModel);
      });

      it('should have the property distributorCode (base name: "distributorCode")', function() {
        // TODO: update the code to test the property distributorCode
        expect(instance).to.have.property('distributorCode');
        // expect(instance.distributorCode).to.be(expectedValueLiteral);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property currencyCode (base name: "currencyCode")', function() {
        // TODO: update the code to test the property currencyCode
        expect(instance).to.have.property('currencyCode');
        // expect(instance.currencyCode).to.be(expectedValueLiteral);
      });

      it('should have the property transactionDescription (base name: "transactionDescription")', function() {
        // TODO: update the code to test the property transactionDescription
        expect(instance).to.have.property('transactionDescription');
        // expect(instance.transactionDescription).to.be(expectedValueLiteral);
      });

      it('should have the property feeCode (base name: "feeCode")', function() {
        // TODO: update the code to test the property feeCode
        expect(instance).to.have.property('feeCode');
        // expect(instance.feeCode).to.be(expectedValueLiteral);
      });

      it('should have the property terminalId (base name: "terminalId")', function() {
        // TODO: update the code to test the property terminalId
        expect(instance).to.have.property('terminalId');
        // expect(instance.terminalId).to.be(expectedValueLiteral);
      });

      it('should have the property terminalOwner (base name: "terminalOwner")', function() {
        // TODO: update the code to test the property terminalOwner
        expect(instance).to.have.property('terminalOwner');
        // expect(instance.terminalOwner).to.be(expectedValueLiteral);
      });

      it('should have the property terminalCity (base name: "terminalCity")', function() {
        // TODO: update the code to test the property terminalCity
        expect(instance).to.have.property('terminalCity');
        // expect(instance.terminalCity).to.be(expectedValueLiteral);
      });

      it('should have the property terminalLocation (base name: "terminalLocation")', function() {
        // TODO: update the code to test the property terminalLocation
        expect(instance).to.have.property('terminalLocation');
        // expect(instance.terminalLocation).to.be(expectedValueLiteral);
      });

      it('should have the property terminalState (base name: "terminalState")', function() {
        // TODO: update the code to test the property terminalState
        expect(instance).to.have.property('terminalState');
        // expect(instance.terminalState).to.be(expectedValueLiteral);
      });

    });
  });

}));
