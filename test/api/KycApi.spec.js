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
    instance = new FinacApi.KycApi();
  });

  describe('(package)', function() {
    describe('KycApi', function() {
      describe('apiKycIdCodeDetailsGet', function() {
        it('should call apiKycIdCodeDetailsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiKycIdCodeDetailsGet call and complete the assertions
          /*
          var opts = {};

          instance.apiKycIdCodeDetailsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.KycCodeDetailsViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiKycIdCodePost', function() {
        it('should call apiKycIdCodePost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiKycIdCodePost call and complete the assertions
          /*

          instance.apiKycIdCodePost(id, apiVersion, authorization, fMessageId, fOrigin, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.KycGenerateCodeViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiKycIdLinkPost', function() {
        it('should call apiKycIdLinkPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiKycIdLinkPost call and complete the assertions
          /*
          var opts = {};

          instance.apiKycIdLinkPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.KycLinkViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiKycIdRedeemCodePatch', function() {
        it('should call apiKycIdRedeemCodePatch successfully', function(done) {
          // TODO: uncomment, update parameter values for apiKycIdRedeemCodePatch call and complete the assertions
          /*
          var opts = {};

          instance.apiKycIdRedeemCodePatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.KycRedeemCodeViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiKycIdResendCodePost', function() {
        it('should call apiKycIdResendCodePost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiKycIdResendCodePost call and complete the assertions
          /*

          instance.apiKycIdResendCodePost(id, apiVersion, authorization, fMessageId, fOrigin, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.KycResendCodeViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiKycInitiateCheckPost', function() {
        it('should call apiKycInitiateCheckPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiKycInitiateCheckPost call and complete the assertions
          /*
          var opts = {};

          instance.apiKycInitiateCheckPost(apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.InitiateCheckViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiKycUploadDocumentsPost', function() {
        it('should call apiKycUploadDocumentsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiKycUploadDocumentsPost call and complete the assertions
          /*
          var opts = {};

          instance.apiKycUploadDocumentsPost(apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.KYCUploadDocumentsViewModelValidResponsePackage);

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
