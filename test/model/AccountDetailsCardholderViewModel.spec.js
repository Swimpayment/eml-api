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
    describe('AccountDetailsCardholderViewModel', function() {
      beforeEach(function() {
        instance = new FinacApi.AccountDetailsCardholderViewModel();
      });

      it('should create an instance of AccountDetailsCardholderViewModel', function() {
        // TODO: update the code to test AccountDetailsCardholderViewModel
        expect(instance).to.be.a(FinacApi.AccountDetailsCardholderViewModel);
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

      it('should have the property dateOfBirth (base name: "dateOfBirth")', function() {
        // TODO: update the code to test the property dateOfBirth
        expect(instance).to.have.property('dateOfBirth');
        // expect(instance.dateOfBirth).to.be(expectedValueLiteral);
      });

      it('should have the property phone2 (base name: "phone2")', function() {
        // TODO: update the code to test the property phone2
        expect(instance).to.have.property('phone2');
        // expect(instance.phone2).to.be(expectedValueLiteral);
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

      it('should have the property kycStatus (base name: "kycStatus")', function() {
        // TODO: update the code to test the property kycStatus
        expect(instance).to.have.property('kycStatus');
        // expect(instance.kycStatus).to.be(expectedValueLiteral);
      });

    });
  });

}));
