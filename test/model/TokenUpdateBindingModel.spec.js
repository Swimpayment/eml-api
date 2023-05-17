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
    describe('TokenUpdateBindingModel', function() {
      beforeEach(function() {
        instance = new FinacApi.TokenUpdateBindingModel();
      });

      it('should create an instance of TokenUpdateBindingModel', function() {
        // TODO: update the code to test TokenUpdateBindingModel
        expect(instance).to.be.a(FinacApi.TokenUpdateBindingModel);
      });

      it('should have the property tokenUniqueReference (base name: "tokenUniqueReference")', function() {
        // TODO: update the code to test the property tokenUniqueReference
        expect(instance).to.have.property('tokenUniqueReference');
        // expect(instance.tokenUniqueReference).to.be(expectedValueLiteral);
      });

      it('should have the property currentAccountPan (base name: "currentAccountPan")', function() {
        // TODO: update the code to test the property currentAccountPan
        expect(instance).to.have.property('currentAccountPan');
        // expect(instance.currentAccountPan).to.be(expectedValueLiteral);
      });

      it('should have the property newAccountPan (base name: "newAccountPan")', function() {
        // TODO: update the code to test the property newAccountPan
        expect(instance).to.have.property('newAccountPan');
        // expect(instance.newAccountPan).to.be(expectedValueLiteral);
      });

      it('should have the property expirationDate (base name: "expirationDate")', function() {
        // TODO: update the code to test the property expirationDate
        expect(instance).to.have.property('expirationDate');
        // expect(instance.expirationDate).to.be(expectedValueLiteral);
      });

      it('should have the property accountPanSequenceNumber (base name: "accountPanSequenceNumber")', function() {
        // TODO: update the code to test the property accountPanSequenceNumber
        expect(instance).to.have.property('accountPanSequenceNumber');
        // expect(instance.accountPanSequenceNumber).to.be(expectedValueLiteral);
      });

      it('should have the property issuerProductConfigurationId (base name: "issuerProductConfigurationId")', function() {
        // TODO: update the code to test the property issuerProductConfigurationId
        expect(instance).to.have.property('issuerProductConfigurationId');
        // expect(instance.issuerProductConfigurationId).to.be(expectedValueLiteral);
      });

      it('should have the property updateWalletProviderIndicator (base name: "updateWalletProviderIndicator")', function() {
        // TODO: update the code to test the property updateWalletProviderIndicator
        expect(instance).to.have.property('updateWalletProviderIndicator');
        // expect(instance.updateWalletProviderIndicator).to.be(expectedValueLiteral);
      });

      it('should have the property commentText (base name: "commentText")', function() {
        // TODO: update the code to test the property commentText
        expect(instance).to.have.property('commentText');
        // expect(instance.commentText).to.be(expectedValueLiteral);
      });

    });
  });

}));