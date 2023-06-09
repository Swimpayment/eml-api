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
    instance = new FinacApi.DirectDebitApi();
  });

  describe('(package)', function() {
    describe('DirectDebitApi', function() {
      describe('apiDirectDebitCollectMandateStatusGet', function() {
        it('should call apiDirectDebitCollectMandateStatusGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiDirectDebitCollectMandateStatusGet call and complete the assertions
          /*

          instance.apiDirectDebitCollectMandateStatusGet(apiVersion, authorization, fMessageId, fOrigin, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.CollectMandateStatusViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiDirectDebitDirectDebitIdPaymentGet', function() {
        it('should call apiDirectDebitDirectDebitIdPaymentGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiDirectDebitDirectDebitIdPaymentGet call and complete the assertions
          /*
          var opts = {};

          instance.apiDirectDebitDirectDebitIdPaymentGet(directDebitId, apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.DirectDebitPaymentViewModelV2ValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiDirectDebitFileTypeReasonCodesGet', function() {
        it('should call apiDirectDebitFileTypeReasonCodesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiDirectDebitFileTypeReasonCodesGet call and complete the assertions
          /*

          instance.apiDirectDebitFileTypeReasonCodesGet(fileType, apiVersion, authorization, fMessageId, fOrigin, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.ReasonCodesViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiDirectDebitIdCancellationsGet', function() {
        it('should call apiDirectDebitIdCancellationsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiDirectDebitIdCancellationsGet call and complete the assertions
          /*
          var opts = {};

          instance.apiDirectDebitIdCancellationsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.GetDirectDebitCancellationsViewModelV2ValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiDirectDebitIdDirectDebitRejectPatch', function() {
        it('should call apiDirectDebitIdDirectDebitRejectPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for apiDirectDebitIdDirectDebitRejectPatch call and complete the assertions
          /*
          var opts = {};

          instance.apiDirectDebitIdDirectDebitRejectPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.DirectDebitRejectViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiDirectDebitIdIbanStatusGet', function() {
        it('should call apiDirectDebitIdIbanStatusGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiDirectDebitIdIbanStatusGet call and complete the assertions
          /*

          instance.apiDirectDebitIdIbanStatusGet(id, apiVersion, authorization, fMessageId, fOrigin, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.IbanStatusViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiDirectDebitIdMandatesGet', function() {
        it('should call apiDirectDebitIdMandatesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiDirectDebitIdMandatesGet call and complete the assertions
          /*
          var opts = {};

          instance.apiDirectDebitIdMandatesGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.GetMandatesViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiDirectDebitInquiryGet', function() {
        it('should call apiDirectDebitInquiryGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiDirectDebitInquiryGet call and complete the assertions
          /*
          var opts = {};

          instance.apiDirectDebitInquiryGet(apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.MandateInquiryViewModelV2ValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiDirectDebitMandateIdCancellationPatch', function() {
        it('should call apiDirectDebitMandateIdCancellationPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for apiDirectDebitMandateIdCancellationPatch call and complete the assertions
          /*
          var opts = {};

          instance.apiDirectDebitMandateIdCancellationPatch(mandateId, apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.MandateCancellationViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiDirectDebitMandateIdTransactionsGet', function() {
        it('should call apiDirectDebitMandateIdTransactionsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiDirectDebitMandateIdTransactionsGet call and complete the assertions
          /*
          var opts = {};

          instance.apiDirectDebitMandateIdTransactionsGet(mandateId, apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.GetMandateHistoryV2ViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiDirectDebitMandatePatch', function() {
        it('should call apiDirectDebitMandatePatch successfully', function(done) {
          // TODO: uncomment, update parameter values for apiDirectDebitMandatePatch call and complete the assertions
          /*
          var opts = {};

          instance.apiDirectDebitMandatePatch(apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.UpdateMandateViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiDirectDebitOutgoingReturnPost', function() {
        it('should call apiDirectDebitOutgoingReturnPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiDirectDebitOutgoingReturnPost call and complete the assertions
          /*
          var opts = {};

          instance.apiDirectDebitOutgoingReturnPost(apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.DirectDebitOutgoingReturnViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiDirectDebitTransactionsGet', function() {
        it('should call apiDirectDebitTransactionsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiDirectDebitTransactionsGet call and complete the assertions
          /*
          var opts = {};

          instance.apiDirectDebitTransactionsGet(apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.DirectDebitReturnTransactionsViewModelV2ValidResponsePackage);

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
