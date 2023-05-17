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
    describe('CardV2ViewModel', function() {
      beforeEach(function() {
        instance = new FinacApi.CardV2ViewModel();
      });

      it('should create an instance of CardV2ViewModel', function() {
        // TODO: update the code to test CardV2ViewModel
        expect(instance).to.be.a(FinacApi.CardV2ViewModel);
      });

      it('should have the property accountBaseCurrency (base name: "accountBaseCurrency")', function() {
        // TODO: update the code to test the property accountBaseCurrency
        expect(instance).to.have.property('accountBaseCurrency');
        // expect(instance.accountBaseCurrency).to.be(expectedValueLiteral);
      });

      it('should have the property cardType (base name: "cardType")', function() {
        // TODO: update the code to test the property cardType
        expect(instance).to.have.property('cardType');
        // expect(instance.cardType).to.be(expectedValueLiteral);
      });

      it('should have the property accountNumber (base name: "accountNumber")', function() {
        // TODO: update the code to test the property accountNumber
        expect(instance).to.have.property('accountNumber');
        // expect(instance.accountNumber).to.be(expectedValueLiteral);
      });

      it('should have the property bankRoutingNumber (base name: "bankRoutingNumber")', function() {
        // TODO: update the code to test the property bankRoutingNumber
        expect(instance).to.have.property('bankRoutingNumber');
        // expect(instance.bankRoutingNumber).to.be(expectedValueLiteral);
      });

      it('should have the property cnid (base name: "cnid")', function() {
        // TODO: update the code to test the property cnid
        expect(instance).to.have.property('cnid');
        // expect(instance.cnid).to.be(expectedValueLiteral);
      });

      it('should have the property cardStatus (base name: "cardStatus")', function() {
        // TODO: update the code to test the property cardStatus
        expect(instance).to.have.property('cardStatus');
        // expect(instance.cardStatus).to.be(expectedValueLiteral);
      });

      it('should have the property pinTriesExceeded (base name: "pinTriesExceeded")', function() {
        // TODO: update the code to test the property pinTriesExceeded
        expect(instance).to.have.property('pinTriesExceeded');
        // expect(instance.pinTriesExceeded).to.be(expectedValueLiteral);
      });

      it('should have the property badPinTries (base name: "badPinTries")', function() {
        // TODO: update the code to test the property badPinTries
        expect(instance).to.have.property('badPinTries');
        // expect(instance.badPinTries).to.be(expectedValueLiteral);
      });

      it('should have the property expirationDate (base name: "expirationDate")', function() {
        // TODO: update the code to test the property expirationDate
        expect(instance).to.have.property('expirationDate');
        // expect(instance.expirationDate).to.be(expectedValueLiteral);
      });

      it('should have the property cardEffectiveEnd (base name: "cardEffectiveEnd")', function() {
        // TODO: update the code to test the property cardEffectiveEnd
        expect(instance).to.have.property('cardEffectiveEnd');
        // expect(instance.cardEffectiveEnd).to.be(expectedValueLiteral);
      });

      it('should have the property client (base name: "client")', function() {
        // TODO: update the code to test the property client
        expect(instance).to.have.property('client');
        // expect(instance.client).to.be(expectedValueLiteral);
      });

      it('should have the property phoneCardNumber (base name: "phoneCardNumber")', function() {
        // TODO: update the code to test the property phoneCardNumber
        expect(instance).to.have.property('phoneCardNumber');
        // expect(instance.phoneCardNumber).to.be(expectedValueLiteral);
      });

      it('should have the property distributorCode (base name: "distributorCode")', function() {
        // TODO: update the code to test the property distributorCode
        expect(instance).to.have.property('distributorCode');
        // expect(instance.distributorCode).to.be(expectedValueLiteral);
      });

      it('should have the property companyName (base name: "companyName")', function() {
        // TODO: update the code to test the property companyName
        expect(instance).to.have.property('companyName');
        // expect(instance.companyName).to.be(expectedValueLiteral);
      });

      it('should have the property cardStyle (base name: "cardStyle")', function() {
        // TODO: update the code to test the property cardStyle
        expect(instance).to.have.property('cardStyle');
        // expect(instance.cardStyle).to.be(expectedValueLiteral);
      });

      it('should have the property deliveryType (base name: "deliveryType")', function() {
        // TODO: update the code to test the property deliveryType
        expect(instance).to.have.property('deliveryType');
        // expect(instance.deliveryType).to.be(expectedValueLiteral);
      });

      it('should have the property initialLoadProcessed (base name: "initialLoadProcessed")', function() {
        // TODO: update the code to test the property initialLoadProcessed
        expect(instance).to.have.property('initialLoadProcessed');
        // expect(instance.initialLoadProcessed).to.be(expectedValueLiteral);
      });

      it('should have the property loadAmount (base name: "loadAmount")', function() {
        // TODO: update the code to test the property loadAmount
        expect(instance).to.have.property('loadAmount');
        // expect(instance.loadAmount).to.be(expectedValueLiteral);
      });

      it('should have the property balance (base name: "balance")', function() {
        // TODO: update the code to test the property balance
        expect(instance).to.have.property('balance');
        // expect(instance.balance).to.be(expectedValueLiteral);
      });

      it('should have the property elevatedStatus (base name: "elevatedStatus")', function() {
        // TODO: update the code to test the property elevatedStatus
        expect(instance).to.have.property('elevatedStatus');
        // expect(instance.elevatedStatus).to.be(expectedValueLiteral);
      });

      it('should have the property cardNumber (base name: "cardNumber")', function() {
        // TODO: update the code to test the property cardNumber
        expect(instance).to.have.property('cardNumber');
        // expect(instance.cardNumber).to.be(expectedValueLiteral);
      });

      it('should have the property walletId (base name: "walletId")', function() {
        // TODO: update the code to test the property walletId
        expect(instance).to.have.property('walletId');
        // expect(instance.walletId).to.be(expectedValueLiteral);
      });

    });
  });

}));