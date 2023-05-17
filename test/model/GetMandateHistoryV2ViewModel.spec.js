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
    describe('GetMandateHistoryV2ViewModel', function() {
      beforeEach(function() {
        instance = new FinacApi.GetMandateHistoryV2ViewModel();
      });

      it('should create an instance of GetMandateHistoryV2ViewModel', function() {
        // TODO: update the code to test GetMandateHistoryV2ViewModel
        expect(instance).to.be.a(FinacApi.GetMandateHistoryV2ViewModel);
      });

      it('should have the property mandateHistory (base name: "mandateHistory")', function() {
        // TODO: update the code to test the property mandateHistory
        expect(instance).to.have.property('mandateHistory');
        // expect(instance.mandateHistory).to.be(expectedValueLiteral);
      });

    });
  });

}));
