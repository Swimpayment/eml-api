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
    describe('BankPaymentScheme', function() {
      beforeEach(function() {
        instance = FinacApi.BankPaymentScheme;
      });

      it('should create an instance of BankPaymentScheme', function() {
        // TODO: update the code to test BankPaymentScheme
        expect(instance).to.be.a('object');
      });

      it('should have the property _1', function() {
        expect(instance).to.have.property('_1');
        expect(instance._1).to.be(1);
      });

      it('should have the property _2', function() {
        expect(instance).to.have.property('_2');
        expect(instance._2).to.be(2);
      });

      it('should have the property _3', function() {
        expect(instance).to.have.property('_3');
        expect(instance._3).to.be(3);
      });

      it('should have the property _4', function() {
        expect(instance).to.have.property('_4');
        expect(instance._4).to.be(4);
      });

      it('should have the property _6', function() {
        expect(instance).to.have.property('_6');
        expect(instance._6).to.be(6);
      });

      it('should have the property _7', function() {
        expect(instance).to.have.property('_7');
        expect(instance._7).to.be(7);
      });

    });
  });

}));
