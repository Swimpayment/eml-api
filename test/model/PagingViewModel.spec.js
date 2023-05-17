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
    describe('PagingViewModel', function() {
      beforeEach(function() {
        instance = new FinacApi.PagingViewModel();
      });

      it('should create an instance of PagingViewModel', function() {
        // TODO: update the code to test PagingViewModel
        expect(instance).to.be.a(FinacApi.PagingViewModel);
      });

      it('should have the property pageNo (base name: "pageNo")', function() {
        // TODO: update the code to test the property pageNo
        expect(instance).to.have.property('pageNo');
        // expect(instance.pageNo).to.be(expectedValueLiteral);
      });

      it('should have the property pageSize (base name: "pageSize")', function() {
        // TODO: update the code to test the property pageSize
        expect(instance).to.have.property('pageSize');
        // expect(instance.pageSize).to.be(expectedValueLiteral);
      });

      it('should have the property totalPageCount (base name: "totalPageCount")', function() {
        // TODO: update the code to test the property totalPageCount
        expect(instance).to.have.property('totalPageCount');
        // expect(instance.totalPageCount).to.be(expectedValueLiteral);
      });

      it('should have the property totalRecordCount (base name: "totalRecordCount")', function() {
        // TODO: update the code to test the property totalRecordCount
        expect(instance).to.have.property('totalRecordCount');
        // expect(instance.totalRecordCount).to.be(expectedValueLiteral);
      });

    });
  });

}));
