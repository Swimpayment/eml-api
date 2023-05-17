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
    describe('SepaTransactionCountBindingModel', function() {
      beforeEach(function() {
        instance = new FinacApi.SepaTransactionCountBindingModel();
      });

      it('should create an instance of SepaTransactionCountBindingModel', function() {
        // TODO: update the code to test SepaTransactionCountBindingModel
        expect(instance).to.be.a(FinacApi.SepaTransactionCountBindingModel);
      });

      it('should have the property direction (base name: "direction")', function() {
        // TODO: update the code to test the property direction
        expect(instance).to.have.property('direction');
        // expect(instance.direction).to.be(expectedValueLiteral);
      });

      it('should have the property iban (base name: "iban")', function() {
        // TODO: update the code to test the property iban
        expect(instance).to.have.property('iban');
        // expect(instance.iban).to.be(expectedValueLiteral);
      });

      it('should have the property dateTimeFrom (base name: "dateTimeFrom")', function() {
        // TODO: update the code to test the property dateTimeFrom
        expect(instance).to.have.property('dateTimeFrom');
        // expect(instance.dateTimeFrom).to.be(expectedValueLiteral);
      });

      it('should have the property dateTimeTo (base name: "dateTimeTo")', function() {
        // TODO: update the code to test the property dateTimeTo
        expect(instance).to.have.property('dateTimeTo');
        // expect(instance.dateTimeTo).to.be(expectedValueLiteral);
      });

    });
  });

}));