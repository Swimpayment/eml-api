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
    describe('ReissueV2ViewModel', function() {
      beforeEach(function() {
        instance = new FinacApi.ReissueV2ViewModel();
      });

      it('should create an instance of ReissueV2ViewModel', function() {
        // TODO: update the code to test ReissueV2ViewModel
        expect(instance).to.be.a(FinacApi.ReissueV2ViewModel);
      });

      it('should have the property newId (base name: "newId")', function() {
        // TODO: update the code to test the property newId
        expect(instance).to.have.property('newId');
        // expect(instance.newId).to.be(expectedValueLiteral);
      });

      it('should have the property balance (base name: "balance")', function() {
        // TODO: update the code to test the property balance
        expect(instance).to.have.property('balance');
        // expect(instance.balance).to.be(expectedValueLiteral);
      });

      it('should have the property expiryDate (base name: "expiryDate")', function() {
        // TODO: update the code to test the property expiryDate
        expect(instance).to.have.property('expiryDate');
        // expect(instance.expiryDate).to.be(expectedValueLiteral);
      });

      it('should have the property pinRetained (base name: "pinRetained")', function() {
        // TODO: update the code to test the property pinRetained
        expect(instance).to.have.property('pinRetained');
        // expect(instance.pinRetained).to.be(expectedValueLiteral);
      });

      it('should have the property ddaNumber (base name: "ddaNumber")', function() {
        // TODO: update the code to test the property ddaNumber
        expect(instance).to.have.property('ddaNumber');
        // expect(instance.ddaNumber).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

    });
  });

}));