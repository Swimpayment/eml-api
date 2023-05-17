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
    describe('BankPaymentUpdateBindingModelV2', function() {
      beforeEach(function() {
        instance = new FinacApi.BankPaymentUpdateBindingModelV2();
      });

      it('should create an instance of BankPaymentUpdateBindingModelV2', function() {
        // TODO: update the code to test BankPaymentUpdateBindingModelV2
        expect(instance).to.be.a(FinacApi.BankPaymentUpdateBindingModelV2);
      });

      it('should have the property firstName (base name: "firstName")', function() {
        // TODO: update the code to test the property firstName
        expect(instance).to.have.property('firstName');
        // expect(instance.firstName).to.be(expectedValueLiteral);
      });

      it('should have the property lastName (base name: "lastName")', function() {
        // TODO: update the code to test the property lastName
        expect(instance).to.have.property('lastName');
        // expect(instance.lastName).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property accountIdentifier (base name: "accountIdentifier")', function() {
        // TODO: update the code to test the property accountIdentifier
        expect(instance).to.have.property('accountIdentifier');
        // expect(instance.accountIdentifier).to.be(expectedValueLiteral);
      });

      it('should have the property bankName (base name: "bankName")', function() {
        // TODO: update the code to test the property bankName
        expect(instance).to.have.property('bankName');
        // expect(instance.bankName).to.be(expectedValueLiteral);
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

      it('should have the property bankIdentifier3 (base name: "bankIdentifier3")', function() {
        // TODO: update the code to test the property bankIdentifier3
        expect(instance).to.have.property('bankIdentifier3');
        // expect(instance.bankIdentifier3).to.be(expectedValueLiteral);
      });

      it('should have the property countryCode (base name: "countryCode")', function() {
        // TODO: update the code to test the property countryCode
        expect(instance).to.have.property('countryCode');
        // expect(instance.countryCode).to.be(expectedValueLiteral);
      });

      it('should have the property addressLine1 (base name: "addressLine1")', function() {
        // TODO: update the code to test the property addressLine1
        expect(instance).to.have.property('addressLine1');
        // expect(instance.addressLine1).to.be(expectedValueLiteral);
      });

      it('should have the property addressLine2 (base name: "addressLine2")', function() {
        // TODO: update the code to test the property addressLine2
        expect(instance).to.have.property('addressLine2');
        // expect(instance.addressLine2).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property postCode (base name: "postCode")', function() {
        // TODO: update the code to test the property postCode
        expect(instance).to.have.property('postCode');
        // expect(instance.postCode).to.be(expectedValueLiteral);
      });

      it('should have the property bankPaymentScheme (base name: "bankPaymentScheme")', function() {
        // TODO: update the code to test the property bankPaymentScheme
        expect(instance).to.have.property('bankPaymentScheme');
        // expect(instance.bankPaymentScheme).to.be(expectedValueLiteral);
      });

      it('should have the property debitCurrency (base name: "debitCurrency")', function() {
        // TODO: update the code to test the property debitCurrency
        expect(instance).to.have.property('debitCurrency');
        // expect(instance.debitCurrency).to.be(expectedValueLiteral);
      });

      it('should have the property creditorType (base name: "creditorType")', function() {
        // TODO: update the code to test the property creditorType
        expect(instance).to.have.property('creditorType');
        // expect(instance.creditorType).to.be(expectedValueLiteral);
      });

      it('should have the property reference (base name: "reference")', function() {
        // TODO: update the code to test the property reference
        expect(instance).to.have.property('reference');
        // expect(instance.reference).to.be(expectedValueLiteral);
      });

      it('should have the property unstructuredReference (base name: "unstructuredReference")', function() {
        // TODO: update the code to test the property unstructuredReference
        expect(instance).to.have.property('unstructuredReference');
        // expect(instance.unstructuredReference).to.be(expectedValueLiteral);
      });

      it('should have the property isInstant (base name: "isInstant")', function() {
        // TODO: update the code to test the property isInstant
        expect(instance).to.have.property('isInstant');
        // expect(instance.isInstant).to.be(expectedValueLiteral);
      });

      it('should have the property payeeId (base name: "payeeId")', function() {
        // TODO: update the code to test the property payeeId
        expect(instance).to.have.property('payeeId');
        // expect(instance.payeeId).to.be(expectedValueLiteral);
      });

      it('should have the property userDefinedFields (base name: "userDefinedFields")', function() {
        // TODO: update the code to test the property userDefinedFields
        expect(instance).to.have.property('userDefinedFields');
        // expect(instance.userDefinedFields).to.be(expectedValueLiteral);
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

      it('should have the property paymentAmount (base name: "paymentAmount")', function() {
        // TODO: update the code to test the property paymentAmount
        expect(instance).to.have.property('paymentAmount');
        // expect(instance.paymentAmount).to.be(expectedValueLiteral);
      });

      it('should have the property debitAmount (base name: "debitAmount")', function() {
        // TODO: update the code to test the property debitAmount
        expect(instance).to.have.property('debitAmount');
        // expect(instance.debitAmount).to.be(expectedValueLiteral);
      });

      it('should have the property paymentFrequencyMethod (base name: "paymentFrequencyMethod")', function() {
        // TODO: update the code to test the property paymentFrequencyMethod
        expect(instance).to.have.property('paymentFrequencyMethod');
        // expect(instance.paymentFrequencyMethod).to.be(expectedValueLiteral);
      });

      it('should have the property firstPaymentDate (base name: "firstPaymentDate")', function() {
        // TODO: update the code to test the property firstPaymentDate
        expect(instance).to.have.property('firstPaymentDate');
        // expect(instance.firstPaymentDate).to.be(expectedValueLiteral);
      });

      it('should have the property frequency (base name: "frequency")', function() {
        // TODO: update the code to test the property frequency
        expect(instance).to.have.property('frequency');
        // expect(instance.frequency).to.be(expectedValueLiteral);
      });

      it('should have the property finalPaymentDate (base name: "finalPaymentDate")', function() {
        // TODO: update the code to test the property finalPaymentDate
        expect(instance).to.have.property('finalPaymentDate');
        // expect(instance.finalPaymentDate).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfFurtherPayments (base name: "numberOfFurtherPayments")', function() {
        // TODO: update the code to test the property numberOfFurtherPayments
        expect(instance).to.have.property('numberOfFurtherPayments');
        // expect(instance.numberOfFurtherPayments).to.be(expectedValueLiteral);
      });

      it('should have the property firstPaymentAmount (base name: "firstPaymentAmount")', function() {
        // TODO: update the code to test the property firstPaymentAmount
        expect(instance).to.have.property('firstPaymentAmount');
        // expect(instance.firstPaymentAmount).to.be(expectedValueLiteral);
      });

      it('should have the property furtherPaymentsAmount (base name: "furtherPaymentsAmount")', function() {
        // TODO: update the code to test the property furtherPaymentsAmount
        expect(instance).to.have.property('furtherPaymentsAmount');
        // expect(instance.furtherPaymentsAmount).to.be(expectedValueLiteral);
      });

      it('should have the property finalPaymentAmount (base name: "finalPaymentAmount")', function() {
        // TODO: update the code to test the property finalPaymentAmount
        expect(instance).to.have.property('finalPaymentAmount');
        // expect(instance.finalPaymentAmount).to.be(expectedValueLiteral);
      });

      it('should have the property debitFirstPaymentAmount (base name: "debitFirstPaymentAmount")', function() {
        // TODO: update the code to test the property debitFirstPaymentAmount
        expect(instance).to.have.property('debitFirstPaymentAmount');
        // expect(instance.debitFirstPaymentAmount).to.be(expectedValueLiteral);
      });

      it('should have the property debitFurtherPaymentsAmount (base name: "debitFurtherPaymentsAmount")', function() {
        // TODO: update the code to test the property debitFurtherPaymentsAmount
        expect(instance).to.have.property('debitFurtherPaymentsAmount');
        // expect(instance.debitFurtherPaymentsAmount).to.be(expectedValueLiteral);
      });

      it('should have the property debitFinalPaymentAmount (base name: "debitFinalPaymentAmount")', function() {
        // TODO: update the code to test the property debitFinalPaymentAmount
        expect(instance).to.have.property('debitFinalPaymentAmount');
        // expect(instance.debitFinalPaymentAmount).to.be(expectedValueLiteral);
      });

      it('should have the property customDates (base name: "customDates")', function() {
        // TODO: update the code to test the property customDates
        expect(instance).to.have.property('customDates');
        // expect(instance.customDates).to.be(expectedValueLiteral);
      });

      it('should have the property settingId (base name: "settingId")', function() {
        // TODO: update the code to test the property settingId
        expect(instance).to.have.property('settingId');
        // expect(instance.settingId).to.be(expectedValueLiteral);
      });

    });
  });

}));
