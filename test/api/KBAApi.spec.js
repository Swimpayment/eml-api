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

  beforeEach(function() {
    instance = new FinacApi.KBAApi();
  });

  describe('(package)', function() {
    describe('KBAApi', function() {
      describe('apiKBAIdDelete', function() {
        it('should call apiKBAIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for apiKBAIdDelete call and complete the assertions
          /*

          instance.apiKBAIdDelete(id, apiVersion, authorization, fMessageId, fOrigin, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.KBADeleteViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiKBAIdPost', function() {
        it('should call apiKBAIdPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiKBAIdPost call and complete the assertions
          /*
          var opts = {};

          instance.apiKBAIdPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.AddCardholderKBAViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiKBAIdPut', function() {
        it('should call apiKBAIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for apiKBAIdPut call and complete the assertions
          /*
          var opts = {};

          instance.apiKBAIdPut(id, apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.KBAUpdateViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiKBAIdValidateKBAGet', function() {
        it('should call apiKBAIdValidateKBAGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiKBAIdValidateKBAGet call and complete the assertions
          /*

          instance.apiKBAIdValidateKBAGet(id, KBA, apiVersion, authorization, fMessageId, fOrigin, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.KBAValidateViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));