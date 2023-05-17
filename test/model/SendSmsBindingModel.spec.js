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
    describe('SendSmsBindingModel', function() {
      beforeEach(function() {
        instance = new FinacApi.SendSmsBindingModel();
      });

      it('should create an instance of SendSmsBindingModel', function() {
        // TODO: update the code to test SendSmsBindingModel
        expect(instance).to.be.a(FinacApi.SendSmsBindingModel);
      });

      it('should have the property smsType (base name: "smsType")', function() {
        // TODO: update the code to test the property smsType
        expect(instance).to.have.property('smsType');
        // expect(instance.smsType).to.be(expectedValueLiteral);
      });

      it('should have the property otpCode (base name: "otpCode")', function() {
        // TODO: update the code to test the property otpCode
        expect(instance).to.have.property('otpCode');
        // expect(instance.otpCode).to.be(expectedValueLiteral);
      });

    });
  });

}));