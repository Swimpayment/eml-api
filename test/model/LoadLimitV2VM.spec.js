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
    describe('LoadLimitV2VM', function() {
      beforeEach(function() {
        instance = new FinacApi.LoadLimitV2VM();
      });

      it('should create an instance of LoadLimitV2VM', function() {
        // TODO: update the code to test LoadLimitV2VM
        expect(instance).to.be.a(FinacApi.LoadLimitV2VM);
      });

      it('should have the property maxLoadPerDay (base name: "maxLoadPerDay")', function() {
        // TODO: update the code to test the property maxLoadPerDay
        expect(instance).to.have.property('maxLoadPerDay');
        // expect(instance.maxLoadPerDay).to.be(expectedValueLiteral);
      });

      it('should have the property monthlyLoadLimit (base name: "monthlyLoadLimit")', function() {
        // TODO: update the code to test the property monthlyLoadLimit
        expect(instance).to.have.property('monthlyLoadLimit');
        // expect(instance.monthlyLoadLimit).to.be(expectedValueLiteral);
      });

      it('should have the property yearlyLoadLimit (base name: "yearlyLoadLimit")', function() {
        // TODO: update the code to test the property yearlyLoadLimit
        expect(instance).to.have.property('yearlyLoadLimit');
        // expect(instance.yearlyLoadLimit).to.be(expectedValueLiteral);
      });

      it('should have the property maxLoadLimitPerTransaction (base name: "maxLoadLimitPerTransaction")', function() {
        // TODO: update the code to test the property maxLoadLimitPerTransaction
        expect(instance).to.have.property('maxLoadLimitPerTransaction');
        // expect(instance.maxLoadLimitPerTransaction).to.be(expectedValueLiteral);
      });

      it('should have the property maxLoadTriesPerDay (base name: "maxLoadTriesPerDay")', function() {
        // TODO: update the code to test the property maxLoadTriesPerDay
        expect(instance).to.have.property('maxLoadTriesPerDay');
        // expect(instance.maxLoadTriesPerDay).to.be(expectedValueLiteral);
      });

      it('should have the property maxLoadTriesPerMonth (base name: "maxLoadTriesPerMonth")', function() {
        // TODO: update the code to test the property maxLoadTriesPerMonth
        expect(instance).to.have.property('maxLoadTriesPerMonth');
        // expect(instance.maxLoadTriesPerMonth).to.be(expectedValueLiteral);
      });

      it('should have the property maxLoadTriesPerYear (base name: "maxLoadTriesPerYear")', function() {
        // TODO: update the code to test the property maxLoadTriesPerYear
        expect(instance).to.have.property('maxLoadTriesPerYear');
        // expect(instance.maxLoadTriesPerYear).to.be(expectedValueLiteral);
      });

      it('should have the property maxLoadTriesPerLifetime (base name: "maxLoadTriesPerLifetime")', function() {
        // TODO: update the code to test the property maxLoadTriesPerLifetime
        expect(instance).to.have.property('maxLoadTriesPerLifetime');
        // expect(instance.maxLoadTriesPerLifetime).to.be(expectedValueLiteral);
      });

      it('should have the property maxBalanceOnCard (base name: "maxBalanceOnCard")', function() {
        // TODO: update the code to test the property maxBalanceOnCard
        expect(instance).to.have.property('maxBalanceOnCard');
        // expect(instance.maxBalanceOnCard).to.be(expectedValueLiteral);
      });

    });
  });

}));
