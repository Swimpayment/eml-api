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
    describe('CardLoadsV2VM', function() {
      beforeEach(function() {
        instance = new FinacApi.CardLoadsV2VM();
      });

      it('should create an instance of CardLoadsV2VM', function() {
        // TODO: update the code to test CardLoadsV2VM
        expect(instance).to.be.a(FinacApi.CardLoadsV2VM);
      });

      it('should have the property loadTriesAsToday (base name: "loadTriesAsToday")', function() {
        // TODO: update the code to test the property loadTriesAsToday
        expect(instance).to.have.property('loadTriesAsToday');
        // expect(instance.loadTriesAsToday).to.be(expectedValueLiteral);
      });

      it('should have the property monthlyLoadTries (base name: "monthlyLoadTries")', function() {
        // TODO: update the code to test the property monthlyLoadTries
        expect(instance).to.have.property('monthlyLoadTries');
        // expect(instance.monthlyLoadTries).to.be(expectedValueLiteral);
      });

      it('should have the property yearlyLoadTries (base name: "yearlyLoadTries")', function() {
        // TODO: update the code to test the property yearlyLoadTries
        expect(instance).to.have.property('yearlyLoadTries');
        // expect(instance.yearlyLoadTries).to.be(expectedValueLiteral);
      });

      it('should have the property totalLoadTries (base name: "totalLoadTries")', function() {
        // TODO: update the code to test the property totalLoadTries
        expect(instance).to.have.property('totalLoadTries');
        // expect(instance.totalLoadTries).to.be(expectedValueLiteral);
      });

      it('should have the property loadAmountAsToday (base name: "loadAmountAsToday")', function() {
        // TODO: update the code to test the property loadAmountAsToday
        expect(instance).to.have.property('loadAmountAsToday');
        // expect(instance.loadAmountAsToday).to.be(expectedValueLiteral);
      });

      it('should have the property totalLoad (base name: "totalLoad")', function() {
        // TODO: update the code to test the property totalLoad
        expect(instance).to.have.property('totalLoad');
        // expect(instance.totalLoad).to.be(expectedValueLiteral);
      });

      it('should have the property monthlyLoad (base name: "monthlyLoad")', function() {
        // TODO: update the code to test the property monthlyLoad
        expect(instance).to.have.property('monthlyLoad');
        // expect(instance.monthlyLoad).to.be(expectedValueLiteral);
      });

      it('should have the property quarterlyLoad (base name: "quarterlyLoad")', function() {
        // TODO: update the code to test the property quarterlyLoad
        expect(instance).to.have.property('quarterlyLoad');
        // expect(instance.quarterlyLoad).to.be(expectedValueLiteral);
      });

      it('should have the property yearlyLoad (base name: "yearlyLoad")', function() {
        // TODO: update the code to test the property yearlyLoad
        expect(instance).to.have.property('yearlyLoad');
        // expect(instance.yearlyLoad).to.be(expectedValueLiteral);
      });

    });
  });

}));