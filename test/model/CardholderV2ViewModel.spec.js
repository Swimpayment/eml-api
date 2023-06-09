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
    describe('CardholderV2ViewModel', function() {
      beforeEach(function() {
        instance = new FinacApi.CardholderV2ViewModel();
      });

      it('should create an instance of CardholderV2ViewModel', function() {
        // TODO: update the code to test CardholderV2ViewModel
        expect(instance).to.be.a(FinacApi.CardholderV2ViewModel);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property firstName (base name: "firstName")', function() {
        // TODO: update the code to test the property firstName
        expect(instance).to.have.property('firstName');
        // expect(instance.firstName).to.be(expectedValueLiteral);
      });

      it('should have the property middleInitial (base name: "middleInitial")', function() {
        // TODO: update the code to test the property middleInitial
        expect(instance).to.have.property('middleInitial');
        // expect(instance.middleInitial).to.be(expectedValueLiteral);
      });

      it('should have the property lastName (base name: "lastName")', function() {
        // TODO: update the code to test the property lastName
        expect(instance).to.have.property('lastName');
        // expect(instance.lastName).to.be(expectedValueLiteral);
      });

      it('should have the property address1 (base name: "address1")', function() {
        // TODO: update the code to test the property address1
        expect(instance).to.have.property('address1');
        // expect(instance.address1).to.be(expectedValueLiteral);
      });

      it('should have the property address2 (base name: "address2")', function() {
        // TODO: update the code to test the property address2
        expect(instance).to.have.property('address2');
        // expect(instance.address2).to.be(expectedValueLiteral);
      });

      it('should have the property address3 (base name: "address3")', function() {
        // TODO: update the code to test the property address3
        expect(instance).to.have.property('address3');
        // expect(instance.address3).to.be(expectedValueLiteral);
      });

      it('should have the property address4 (base name: "address4")', function() {
        // TODO: update the code to test the property address4
        expect(instance).to.have.property('address4');
        // expect(instance.address4).to.be(expectedValueLiteral);
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

      it('should have the property zip (base name: "zip")', function() {
        // TODO: update the code to test the property zip
        expect(instance).to.have.property('zip');
        // expect(instance.zip).to.be(expectedValueLiteral);
      });

      it('should have the property countryCode (base name: "countryCode")', function() {
        // TODO: update the code to test the property countryCode
        expect(instance).to.have.property('countryCode');
        // expect(instance.countryCode).to.be(expectedValueLiteral);
      });

      it('should have the property countryName (base name: "countryName")', function() {
        // TODO: update the code to test the property countryName
        expect(instance).to.have.property('countryName');
        // expect(instance.countryName).to.be(expectedValueLiteral);
      });

      it('should have the property countyName (base name: "countyName")', function() {
        // TODO: update the code to test the property countyName
        expect(instance).to.have.property('countyName');
        // expect(instance.countyName).to.be(expectedValueLiteral);
      });

      it('should have the property phone (base name: "phone")', function() {
        // TODO: update the code to test the property phone
        expect(instance).to.have.property('phone');
        // expect(instance.phone).to.be(expectedValueLiteral);
      });

      it('should have the property dateOfBirth (base name: "dateOfBirth")', function() {
        // TODO: update the code to test the property dateOfBirth
        expect(instance).to.have.property('dateOfBirth');
        // expect(instance.dateOfBirth).to.be(expectedValueLiteral);
      });

      it('should have the property ssn (base name: "ssn")', function() {
        // TODO: update the code to test the property ssn
        expect(instance).to.have.property('ssn');
        // expect(instance.ssn).to.be(expectedValueLiteral);
      });

      it('should have the property securityField1 (base name: "securityField1")', function() {
        // TODO: update the code to test the property securityField1
        expect(instance).to.have.property('securityField1');
        // expect(instance.securityField1).to.be(expectedValueLiteral);
      });

      it('should have the property securityField2 (base name: "securityField2")', function() {
        // TODO: update the code to test the property securityField2
        expect(instance).to.have.property('securityField2');
        // expect(instance.securityField2).to.be(expectedValueLiteral);
      });

      it('should have the property securityField3 (base name: "securityField3")', function() {
        // TODO: update the code to test the property securityField3
        expect(instance).to.have.property('securityField3');
        // expect(instance.securityField3).to.be(expectedValueLiteral);
      });

      it('should have the property securityField4 (base name: "securityField4")', function() {
        // TODO: update the code to test the property securityField4
        expect(instance).to.have.property('securityField4');
        // expect(instance.securityField4).to.be(expectedValueLiteral);
      });

      it('should have the property userDefined1 (base name: "userDefined1")', function() {
        // TODO: update the code to test the property userDefined1
        expect(instance).to.have.property('userDefined1');
        // expect(instance.userDefined1).to.be(expectedValueLiteral);
      });

      it('should have the property userDefined2 (base name: "userDefined2")', function() {
        // TODO: update the code to test the property userDefined2
        expect(instance).to.have.property('userDefined2');
        // expect(instance.userDefined2).to.be(expectedValueLiteral);
      });

      it('should have the property userDefined3 (base name: "userDefined3")', function() {
        // TODO: update the code to test the property userDefined3
        expect(instance).to.have.property('userDefined3');
        // expect(instance.userDefined3).to.be(expectedValueLiteral);
      });

      it('should have the property userDefined4 (base name: "userDefined4")', function() {
        // TODO: update the code to test the property userDefined4
        expect(instance).to.have.property('userDefined4');
        // expect(instance.userDefined4).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property embossName (base name: "embossName")', function() {
        // TODO: update the code to test the property embossName
        expect(instance).to.have.property('embossName');
        // expect(instance.embossName).to.be(expectedValueLiteral);
      });

      it('should have the property secondaryAddress1 (base name: "secondaryAddress1")', function() {
        // TODO: update the code to test the property secondaryAddress1
        expect(instance).to.have.property('secondaryAddress1');
        // expect(instance.secondaryAddress1).to.be(expectedValueLiteral);
      });

      it('should have the property secondaryAddress2 (base name: "secondaryAddress2")', function() {
        // TODO: update the code to test the property secondaryAddress2
        expect(instance).to.have.property('secondaryAddress2');
        // expect(instance.secondaryAddress2).to.be(expectedValueLiteral);
      });

      it('should have the property secondaryAddress3 (base name: "secondaryAddress3")', function() {
        // TODO: update the code to test the property secondaryAddress3
        expect(instance).to.have.property('secondaryAddress3');
        // expect(instance.secondaryAddress3).to.be(expectedValueLiteral);
      });

      it('should have the property secondaryAddress4 (base name: "secondaryAddress4")', function() {
        // TODO: update the code to test the property secondaryAddress4
        expect(instance).to.have.property('secondaryAddress4');
        // expect(instance.secondaryAddress4).to.be(expectedValueLiteral);
      });

      it('should have the property city2 (base name: "city2")', function() {
        // TODO: update the code to test the property city2
        expect(instance).to.have.property('city2');
        // expect(instance.city2).to.be(expectedValueLiteral);
      });

      it('should have the property state2 (base name: "state2")', function() {
        // TODO: update the code to test the property state2
        expect(instance).to.have.property('state2');
        // expect(instance.state2).to.be(expectedValueLiteral);
      });

      it('should have the property zip2 (base name: "zip2")', function() {
        // TODO: update the code to test the property zip2
        expect(instance).to.have.property('zip2');
        // expect(instance.zip2).to.be(expectedValueLiteral);
      });

      it('should have the property countryCode2 (base name: "countryCode2")', function() {
        // TODO: update the code to test the property countryCode2
        expect(instance).to.have.property('countryCode2');
        // expect(instance.countryCode2).to.be(expectedValueLiteral);
      });

      it('should have the property countryName2 (base name: "countryName2")', function() {
        // TODO: update the code to test the property countryName2
        expect(instance).to.have.property('countryName2');
        // expect(instance.countryName2).to.be(expectedValueLiteral);
      });

      it('should have the property countyName2 (base name: "countyName2")', function() {
        // TODO: update the code to test the property countyName2
        expect(instance).to.have.property('countyName2');
        // expect(instance.countyName2).to.be(expectedValueLiteral);
      });

      it('should have the property phone2 (base name: "phone2")', function() {
        // TODO: update the code to test the property phone2
        expect(instance).to.have.property('phone2');
        // expect(instance.phone2).to.be(expectedValueLiteral);
      });

      it('should have the property sortCode (base name: "sortCode")', function() {
        // TODO: update the code to test the property sortCode
        expect(instance).to.have.property('sortCode');
        // expect(instance.sortCode).to.be(expectedValueLiteral);
      });

      it('should have the property sortCodeAccountNumber (base name: "sortCodeAccountNumber")', function() {
        // TODO: update the code to test the property sortCodeAccountNumber
        expect(instance).to.have.property('sortCodeAccountNumber');
        // expect(instance.sortCodeAccountNumber).to.be(expectedValueLiteral);
      });

      it('should have the property documentType (base name: "documentType")', function() {
        // TODO: update the code to test the property documentType
        expect(instance).to.have.property('documentType');
        // expect(instance.documentType).to.be(expectedValueLiteral);
      });

      it('should have the property documentNumber (base name: "documentNumber")', function() {
        // TODO: update the code to test the property documentNumber
        expect(instance).to.have.property('documentNumber');
        // expect(instance.documentNumber).to.be(expectedValueLiteral);
      });

      it('should have the property documentExpiryDate (base name: "documentExpiryDate")', function() {
        // TODO: update the code to test the property documentExpiryDate
        expect(instance).to.have.property('documentExpiryDate');
        // expect(instance.documentExpiryDate).to.be(expectedValueLiteral);
      });

      it('should have the property nationality (base name: "nationality")', function() {
        // TODO: update the code to test the property nationality
        expect(instance).to.have.property('nationality');
        // expect(instance.nationality).to.be(expectedValueLiteral);
      });

      it('should have the property countryOfIssuance (base name: "countryOfIssuance")', function() {
        // TODO: update the code to test the property countryOfIssuance
        expect(instance).to.have.property('countryOfIssuance');
        // expect(instance.countryOfIssuance).to.be(expectedValueLiteral);
      });

      it('should have the property gender (base name: "gender")', function() {
        // TODO: update the code to test the property gender
        expect(instance).to.have.property('gender');
        // expect(instance.gender).to.be(expectedValueLiteral);
      });

      it('should have the property iban (base name: "iban")', function() {
        // TODO: update the code to test the property iban
        expect(instance).to.have.property('iban');
        // expect(instance.iban).to.be(expectedValueLiteral);
      });

      it('should have the property bic (base name: "bic")', function() {
        // TODO: update the code to test the property bic
        expect(instance).to.have.property('bic');
        // expect(instance.bic).to.be(expectedValueLiteral);
      });

      it('should have the property atmAccess (base name: "atmAccess")', function() {
        // TODO: update the code to test the property atmAccess
        expect(instance).to.have.property('atmAccess');
        // expect(instance.atmAccess).to.be(expectedValueLiteral);
      });

      it('should have the property userDefined (base name: "userDefined")', function() {
        // TODO: update the code to test the property userDefined
        expect(instance).to.have.property('userDefined');
        // expect(instance.userDefined).to.be(expectedValueLiteral);
      });

      it('should have the property accountId (base name: "accountId")', function() {
        // TODO: update the code to test the property accountId
        expect(instance).to.have.property('accountId');
        // expect(instance.accountId).to.be(expectedValueLiteral);
      });

    });
  });

}));
