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
    describe('PeriodicLimitWithDropOffViewModel', function() {
      beforeEach(function() {
        instance = new FinacApi.PeriodicLimitWithDropOffViewModel();
      });

      it('should create an instance of PeriodicLimitWithDropOffViewModel', function() {
        // TODO: update the code to test PeriodicLimitWithDropOffViewModel
        expect(instance).to.be.a(FinacApi.PeriodicLimitWithDropOffViewModel);
      });

      it('should have the property maxTransactionAmount (base name: "maxTransactionAmount")', function() {
        // TODO: update the code to test the property maxTransactionAmount
        expect(instance).to.have.property('maxTransactionAmount');
        // expect(instance.maxTransactionAmount).to.be(expectedValueLiteral);
      });

      it('should have the property daily (base name: "daily")', function() {
        // TODO: update the code to test the property daily
        expect(instance).to.have.property('daily');
        // expect(instance.daily).to.be(expectedValueLiteral);
      });

      it('should have the property monthly (base name: "monthly")', function() {
        // TODO: update the code to test the property monthly
        expect(instance).to.have.property('monthly');
        // expect(instance.monthly).to.be(expectedValueLiteral);
      });

      it('should have the property yearly (base name: "yearly")', function() {
        // TODO: update the code to test the property yearly
        expect(instance).to.have.property('yearly');
        // expect(instance.yearly).to.be(expectedValueLiteral);
      });

      it('should have the property authorizationDropOffPeriod (base name: "authorizationDropOffPeriod")', function() {
        // TODO: update the code to test the property authorizationDropOffPeriod
        expect(instance).to.have.property('authorizationDropOffPeriod');
        // expect(instance.authorizationDropOffPeriod).to.be(expectedValueLiteral);
      });

    });
  });

}));