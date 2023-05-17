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
    describe('UpdatePayeeDetailsBindingModel', function() {
      beforeEach(function() {
        instance = new FinacApi.UpdatePayeeDetailsBindingModel();
      });

      it('should create an instance of UpdatePayeeDetailsBindingModel', function() {
        // TODO: update the code to test UpdatePayeeDetailsBindingModel
        expect(instance).to.be.a(FinacApi.UpdatePayeeDetailsBindingModel);
      });

      it('should have the property creditorBankIdentifier (base name: "creditorBankIdentifier")', function() {
        // TODO: update the code to test the property creditorBankIdentifier
        expect(instance).to.have.property('creditorBankIdentifier');
        // expect(instance.creditorBankIdentifier).to.be(expectedValueLiteral);
      });

      it('should have the property creditorAccountIdentifier (base name: "creditorAccountIdentifier")', function() {
        // TODO: update the code to test the property creditorAccountIdentifier
        expect(instance).to.have.property('creditorAccountIdentifier');
        // expect(instance.creditorAccountIdentifier).to.be(expectedValueLiteral);
      });

      it('should have the property creditorCountryCode (base name: "creditorCountryCode")', function() {
        // TODO: update the code to test the property creditorCountryCode
        expect(instance).to.have.property('creditorCountryCode');
        // expect(instance.creditorCountryCode).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property creditorAddress1 (base name: "creditorAddress1")', function() {
        // TODO: update the code to test the property creditorAddress1
        expect(instance).to.have.property('creditorAddress1');
        // expect(instance.creditorAddress1).to.be(expectedValueLiteral);
      });

      it('should have the property creditorAddress2 (base name: "creditorAddress2")', function() {
        // TODO: update the code to test the property creditorAddress2
        expect(instance).to.have.property('creditorAddress2');
        // expect(instance.creditorAddress2).to.be(expectedValueLiteral);
      });

      it('should have the property creditorcity (base name: "creditorcity")', function() {
        // TODO: update the code to test the property creditorcity
        expect(instance).to.have.property('creditorcity');
        // expect(instance.creditorcity).to.be(expectedValueLiteral);
      });

      it('should have the property creditorPostcode (base name: "creditorPostcode")', function() {
        // TODO: update the code to test the property creditorPostcode
        expect(instance).to.have.property('creditorPostcode');
        // expect(instance.creditorPostcode).to.be(expectedValueLiteral);
      });

      it('should have the property creditorState (base name: "creditorState")', function() {
        // TODO: update the code to test the property creditorState
        expect(instance).to.have.property('creditorState');
        // expect(instance.creditorState).to.be(expectedValueLiteral);
      });

      it('should have the property creditorFirstName (base name: "creditorFirstName")', function() {
        // TODO: update the code to test the property creditorFirstName
        expect(instance).to.have.property('creditorFirstName');
        // expect(instance.creditorFirstName).to.be(expectedValueLiteral);
      });

      it('should have the property creditorLastName (base name: "creditorLastName")', function() {
        // TODO: update the code to test the property creditorLastName
        expect(instance).to.have.property('creditorLastName');
        // expect(instance.creditorLastName).to.be(expectedValueLiteral);
      });

      it('should have the property creditorType (base name: "creditorType")', function() {
        // TODO: update the code to test the property creditorType
        expect(instance).to.have.property('creditorType');
        // expect(instance.creditorType).to.be(expectedValueLiteral);
      });

      it('should have the property isInstant (base name: "isInstant")', function() {
        // TODO: update the code to test the property isInstant
        expect(instance).to.have.property('isInstant');
        // expect(instance.isInstant).to.be(expectedValueLiteral);
      });

      it('should have the property bankIdentifier (base name: "bankIdentifier")', function() {
        // TODO: update the code to test the property bankIdentifier
        expect(instance).to.have.property('bankIdentifier');
        // expect(instance.bankIdentifier).to.be(expectedValueLiteral);
      });

      it('should have the property bankIdentifier2 (base name: "bankIdentifier2")', function() {
        // TODO: update the code to test the property bankIdentifier2
        expect(instance).to.have.property('bankIdentifier2');
        // expect(instance.bankIdentifier2).to.be(expectedValueLiteral);
      });

      it('should have the property paymentScheme (base name: "paymentScheme")', function() {
        // TODO: update the code to test the property paymentScheme
        expect(instance).to.have.property('paymentScheme');
        // expect(instance.paymentScheme).to.be(expectedValueLiteral);
      });

      it('should have the property creditorDateOfBirth (base name: "creditorDateOfBirth")', function() {
        // TODO: update the code to test the property creditorDateOfBirth
        expect(instance).to.have.property('creditorDateOfBirth');
        // expect(instance.creditorDateOfBirth).to.be(expectedValueLiteral);
      });

      it('should have the property creditorIdentificationType (base name: "creditorIdentificationType")', function() {
        // TODO: update the code to test the property creditorIdentificationType
        expect(instance).to.have.property('creditorIdentificationType');
        // expect(instance.creditorIdentificationType).to.be(expectedValueLiteral);
      });

      it('should have the property creditorIdentificationValue (base name: "creditorIdentificationValue")', function() {
        // TODO: update the code to test the property creditorIdentificationValue
        expect(instance).to.have.property('creditorIdentificationValue');
        // expect(instance.creditorIdentificationValue).to.be(expectedValueLiteral);
      });

    });
  });

}));