"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgrammeApi = void 0;
var _ApiClient = require("../ApiClient");
var _AddCorporateCurrencyBindingModel = require("../model/AddCorporateCurrencyBindingModel");
var _AddCorporateCurrencyViewModelValidResponsePackage = require("../model/AddCorporateCurrencyViewModelValidResponsePackage");
var _CorporateDepositBindingModel = require("../model/CorporateDepositBindingModel");
var _CorporateDepositViewModelValidResponsePackage = require("../model/CorporateDepositViewModelValidResponsePackage");
var _CreateSpendControlGroupBindingModel = require("../model/CreateSpendControlGroupBindingModel");
var _CreateSpendControlGroupViewModelValidResponsePackage = require("../model/CreateSpendControlGroupViewModelValidResponsePackage");
var _GetSpendControlGroupsBindingModel = require("../model/GetSpendControlGroupsBindingModel");
var _GetSpendControlGroupsViewModelValidResponsePackage = require("../model/GetSpendControlGroupsViewModelValidResponsePackage");
var _InvalidResponsePackage = require("../model/InvalidResponsePackage");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * Finac API
                                                                                                                                                                                                                                                                                                                                                                                               * <b>Version Notes:- <br/>• All amounts fields in requests and responses have been changed from decimal to int64(cents). This means that 10.00 in version 1, is 1000 in version 2.<br/>• ThreeDS endpoints have been added to this version. These will replace the KBA endpoints from version 1.</br>• AccountId endpoint has changed HTTP verb from GET to POST, furthermore additional cardholder details need to be provided as part of the HTTP body.</b>
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 2.0
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                               * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Swagger Codegen version: 3.0.43
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
* Programme service.
* @module api/ProgrammeApi
* @version 2.0
*/
var ProgrammeApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProgrammeApi. 
  * @alias module:api/ProgrammeApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function ProgrammeApi(apiClient) {
    _classCallCheck(this, ProgrammeApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the apiProgrammeCorporateDepositCreditPost operation.
   * @callback moduleapi/ProgrammeApi~apiProgrammeCorporateDepositCreditPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CorporateDepositViewModelValidResponsePackage{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Credit Corporate Deposit
   * Credit a corporate wallet.    Sample request:        POST /api/Programme/CorporateDeposit/Credit      {          \&quot;distributorCode\&quot;: \&quot;{{DC}}\&quot;,          \&quot;amount\&quot;: 200,          \&quot;currencyCode\&quot;: \&quot;GBP\&quot;,          \&quot;transactionDescription\&quot;: \&quot;Corporate Deposit\&quot;      }
   * @param {String} apiVersion 
   * @param {String} authorization Access token
   * @param {String} fMessageId Unique identifier
   * @param {String} fOrigin Origin of request
   * @param {Object} opts Optional parameters
   * @param {module:model/CorporateDepositBindingModel} opts.body 
   * @param {module:api/ProgrammeApi~apiProgrammeCorporateDepositCreditPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  _createClass(ProgrammeApi, [{
    key: "apiProgrammeCorporateDepositCreditPost",
    value: function apiProgrammeCorporateDepositCreditPost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiProgrammeCorporateDepositCreditPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiProgrammeCorporateDepositCreditPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiProgrammeCorporateDepositCreditPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiProgrammeCorporateDepositCreditPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'api-version': apiVersion,
        'Authorization': authorization,
        'F-Message-Id': fMessageId,
        'F-Origin': fOrigin
      };
      var formParams = {};
      var authNames = ['jwt_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CorporateDepositViewModelValidResponsePackage.CorporateDepositViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Programme/CorporateDeposit/Credit', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiProgrammeCorporateDepositDebitPost operation.
     * @callback moduleapi/ProgrammeApi~apiProgrammeCorporateDepositDebitPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CorporateDepositViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Debit Corporate Deposit
     * Debit a corporate wallet.    Sample request:        POST /api/Programme/CorporateDeposit/Debit      {          \&quot;distributorCode\&quot;: \&quot;{{DC}}\&quot;,          \&quot;amount\&quot;: 200,          \&quot;currencyCode\&quot;: \&quot;GBP\&quot;,          \&quot;transactionDescription\&quot;: \&quot;Corporate Deposit\&quot;      }
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/CorporateDepositBindingModel} opts.body 
     * @param {module:api/ProgrammeApi~apiProgrammeCorporateDepositDebitPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiProgrammeCorporateDepositDebitPost",
    value: function apiProgrammeCorporateDepositDebitPost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiProgrammeCorporateDepositDebitPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiProgrammeCorporateDepositDebitPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiProgrammeCorporateDepositDebitPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiProgrammeCorporateDepositDebitPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'api-version': apiVersion,
        'Authorization': authorization,
        'F-Message-Id': fMessageId,
        'F-Origin': fOrigin
      };
      var formParams = {};
      var authNames = ['jwt_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CorporateDepositViewModelValidResponsePackage.CorporateDepositViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Programme/CorporateDeposit/Debit', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiProgrammeDistributorCodeAddCorporateCurrencyPost operation.
     * @callback moduleapi/ProgrammeApi~apiProgrammeDistributorCodeAddCorporateCurrencyPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddCorporateCurrencyViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Corporate Currency
     * Adding a new corporate trade wallet on the requested distributor code using the currency/currencies provided.    Sample request:                    POST /api/Programme/{DistributorCode}/AddCorporateCurrency      {          \&quot;currencies\&quot;: [              \&quot;EUR\&quot;          ]      }
     * @param {String} distributorCode 
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/AddCorporateCurrencyBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/ProgrammeApi~apiProgrammeDistributorCodeAddCorporateCurrencyPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiProgrammeDistributorCodeAddCorporateCurrencyPost",
    value: function apiProgrammeDistributorCodeAddCorporateCurrencyPost(distributorCode, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'distributorCode' is set
      if (distributorCode === undefined || distributorCode === null) {
        throw new Error("Missing the required parameter 'distributorCode' when calling apiProgrammeDistributorCodeAddCorporateCurrencyPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiProgrammeDistributorCodeAddCorporateCurrencyPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiProgrammeDistributorCodeAddCorporateCurrencyPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiProgrammeDistributorCodeAddCorporateCurrencyPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiProgrammeDistributorCodeAddCorporateCurrencyPost");
      }
      var pathParams = {
        'DistributorCode': distributorCode
      };
      var queryParams = {};
      var headerParams = {
        'api-version': apiVersion,
        'Authorization': authorization,
        'F-Message-Id': fMessageId,
        'F-Origin': fOrigin
      };
      var formParams = {};
      var authNames = ['jwt_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AddCorporateCurrencyViewModelValidResponsePackage.AddCorporateCurrencyViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Programme/{DistributorCode}/AddCorporateCurrency', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiProgrammeGetSpendControlGroupsPost operation.
     * @callback moduleapi/ProgrammeApi~apiProgrammeGetSpendControlGroupsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSpendControlGroupsViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Spend Control Groups
     * Gets predefined limit groups which can be used when setting limits via the SpendControl API.    This endpoint works for Trace cards.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/GetSpendControlGroupsBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/ProgrammeApi~apiProgrammeGetSpendControlGroupsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiProgrammeGetSpendControlGroupsPost",
    value: function apiProgrammeGetSpendControlGroupsPost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiProgrammeGetSpendControlGroupsPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiProgrammeGetSpendControlGroupsPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiProgrammeGetSpendControlGroupsPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiProgrammeGetSpendControlGroupsPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'api-version': apiVersion,
        'Authorization': authorization,
        'F-Message-Id': fMessageId,
        'F-Origin': fOrigin
      };
      var formParams = {};
      var authNames = ['jwt_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GetSpendControlGroupsViewModelValidResponsePackage.GetSpendControlGroupsViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Programme/GetSpendControlGroups', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiProgrammeSpendControlGroupPost operation.
     * @callback moduleapi/ProgrammeApi~apiProgrammeSpendControlGroupPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateSpendControlGroupViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Spend Control Group
     * Creates a predefined limits groups which can be used when setting limits via the SpendControl API.  Each limit value has to be set, as &#x27;null&#x27; (&#x3D; not setting the limit) means the limit is disabled.    This endpoint works for Trace cards.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateSpendControlGroupBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/ProgrammeApi~apiProgrammeSpendControlGroupPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiProgrammeSpendControlGroupPost",
    value: function apiProgrammeSpendControlGroupPost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiProgrammeSpendControlGroupPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiProgrammeSpendControlGroupPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiProgrammeSpendControlGroupPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiProgrammeSpendControlGroupPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'api-version': apiVersion,
        'Authorization': authorization,
        'F-Message-Id': fMessageId,
        'F-Origin': fOrigin
      };
      var formParams = {};
      var authNames = ['jwt_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateSpendControlGroupViewModelValidResponsePackage.CreateSpendControlGroupViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Programme/SpendControlGroup', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return ProgrammeApi;
}();
exports.ProgrammeApi = ProgrammeApi;