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
    instance = new FinacApi.ProgrammeApi();
  });

  describe('(package)', function() {
    describe('ProgrammeApi', function() {
      describe('apiProgrammeCorporateDepositCreditPost', function() {
        it('should call apiProgrammeCorporateDepositCreditPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiProgrammeCorporateDepositCreditPost call and complete the assertions
          /*
          var opts = {};

          instance.apiProgrammeCorporateDepositCreditPost(apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.CorporateDepositViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiProgrammeCorporateDepositDebitPost', function() {
        it('should call apiProgrammeCorporateDepositDebitPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiProgrammeCorporateDepositDebitPost call and complete the assertions
          /*
          var opts = {};

          instance.apiProgrammeCorporateDepositDebitPost(apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.CorporateDepositViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiProgrammeDistributorCodeAddCorporateCurrencyPost', function() {
        it('should call apiProgrammeDistributorCodeAddCorporateCurrencyPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiProgrammeDistributorCodeAddCorporateCurrencyPost call and complete the assertions
          /*
          var opts = {};

          instance.apiProgrammeDistributorCodeAddCorporateCurrencyPost(distributorCode, apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.AddCorporateCurrencyViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiProgrammeGetSpendControlGroupsPost', function() {
        it('should call apiProgrammeGetSpendControlGroupsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiProgrammeGetSpendControlGroupsPost call and complete the assertions
          /*
          var opts = {};

          instance.apiProgrammeGetSpendControlGroupsPost(apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.GetSpendControlGroupsViewModelValidResponsePackage);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiProgrammeSpendControlGroupPost', function() {
        it('should call apiProgrammeSpendControlGroupPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiProgrammeSpendControlGroupPost call and complete the assertions
          /*
          var opts = {};

          instance.apiProgrammeSpendControlGroupPost(apiVersion, authorization, fMessageId, fOrigin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinacApi.CreateSpendControlGroupViewModelValidResponsePackage);

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
