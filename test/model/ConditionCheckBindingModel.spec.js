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
    describe('ConditionCheckBindingModel', function() {
      beforeEach(function() {
        instance = new FinacApi.ConditionCheckBindingModel();
      });

      it('should create an instance of ConditionCheckBindingModel', function() {
        // TODO: update the code to test ConditionCheckBindingModel
        expect(instance).to.be.a(FinacApi.ConditionCheckBindingModel);
      });

      it('should have the property condition (base name: "condition")', function() {
        // TODO: update the code to test the property condition
        expect(instance).to.have.property('condition');
        // expect(instance.condition).to.be(expectedValueLiteral);
      });

      it('should have the property action (base name: "action")', function() {
        // TODO: update the code to test the property action
        expect(instance).to.have.property('action');
        // expect(instance.action).to.be(expectedValueLiteral);
      });

      it('should have the property actionedBy (base name: "actionedBy")', function() {
        // TODO: update the code to test the property actionedBy
        expect(instance).to.have.property('actionedBy');
        // expect(instance.actionedBy).to.be(expectedValueLiteral);
      });

      it('should have the property blockType (base name: "blockType")', function() {
        // TODO: update the code to test the property blockType
        expect(instance).to.have.property('blockType');
        // expect(instance.blockType).to.be(expectedValueLiteral);
      });

      it('should have the property applyToLinkedCards (base name: "applyToLinkedCards")', function() {
        // TODO: update the code to test the property applyToLinkedCards
        expect(instance).to.have.property('applyToLinkedCards');
        // expect(instance.applyToLinkedCards).to.be(expectedValueLiteral);
      });

      it('should have the property conditionGroupNameToApply (base name: "conditionGroupNameToApply")', function() {
        // TODO: update the code to test the property conditionGroupNameToApply
        expect(instance).to.have.property('conditionGroupNameToApply');
        // expect(instance.conditionGroupNameToApply).to.be(expectedValueLiteral);
      });

    });
  });

}));