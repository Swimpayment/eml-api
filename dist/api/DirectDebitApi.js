"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectDebitApi = void 0;
var _ApiClient = require("../ApiClient");
var _CollectMandateStatusViewModelValidResponsePackage = require("../model/CollectMandateStatusViewModelValidResponsePackage");
var _DirectDebitOutgoingReturnBindingModel = require("../model/DirectDebitOutgoingReturnBindingModel");
var _DirectDebitOutgoingReturnViewModelValidResponsePackage = require("../model/DirectDebitOutgoingReturnViewModelValidResponsePackage");
var _DirectDebitPaymentViewModelV2ValidResponsePackage = require("../model/DirectDebitPaymentViewModelV2ValidResponsePackage");
var _DirectDebitRejectBindingModel = require("../model/DirectDebitRejectBindingModel");
var _DirectDebitRejectViewModelValidResponsePackage = require("../model/DirectDebitRejectViewModelValidResponsePackage");
var _DirectDebitReturnTransactionsViewModelV2ValidResponsePackage = require("../model/DirectDebitReturnTransactionsViewModelV2ValidResponsePackage");
var _GetDirectDebitCancellationsViewModelV2ValidResponsePackage = require("../model/GetDirectDebitCancellationsViewModelV2ValidResponsePackage");
var _GetMandateHistoryV2ViewModelValidResponsePackage = require("../model/GetMandateHistoryV2ViewModelValidResponsePackage");
var _GetMandatesViewModelValidResponsePackage = require("../model/GetMandatesViewModelValidResponsePackage");
var _IbanStatusViewModelValidResponsePackage = require("../model/IbanStatusViewModelValidResponsePackage");
var _InvalidResponsePackage = require("../model/InvalidResponsePackage");
var _MandateCancellationViewModelValidResponsePackage = require("../model/MandateCancellationViewModelValidResponsePackage");
var _MandateInquiryViewModelV2ValidResponsePackage = require("../model/MandateInquiryViewModelV2ValidResponsePackage");
var _ReasonCodesViewModelValidResponsePackage = require("../model/ReasonCodesViewModelValidResponsePackage");
var _UpdateMandateBindingModel = require("../model/UpdateMandateBindingModel");
var _UpdateMandateViewModelValidResponsePackage = require("../model/UpdateMandateViewModelValidResponsePackage");
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
                                                                                                                                                                                                                                                                                                                                                                                               * Swagger Codegen version: 3.0.42
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
* DirectDebit service.
* @module api/DirectDebitApi
* @version 2.0
*/
var DirectDebitApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DirectDebitApi. 
  * @alias module:api/DirectDebitApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function DirectDebitApi(apiClient) {
    _classCallCheck(this, DirectDebitApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the apiDirectDebitCollectMandateStatusGet operation.
   * @callback moduleapi/DirectDebitApi~apiDirectDebitCollectMandateStatusGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CollectMandateStatusViewModelValidResponsePackage{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Collect Mandate Status
   * Gets all the available statuses for the mandates     Sample request:                    GET /CollectMandateStatus
   * @param {String} apiVersion 
   * @param {String} authorization Access token
   * @param {String} fMessageId Unique identifier
   * @param {String} fOrigin Origin of request
   * @param {module:api/DirectDebitApi~apiDirectDebitCollectMandateStatusGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  _createClass(DirectDebitApi, [{
    key: "apiDirectDebitCollectMandateStatusGet",
    value: function apiDirectDebitCollectMandateStatusGet(apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiDirectDebitCollectMandateStatusGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiDirectDebitCollectMandateStatusGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiDirectDebitCollectMandateStatusGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiDirectDebitCollectMandateStatusGet");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CollectMandateStatusViewModelValidResponsePackage.CollectMandateStatusViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/DirectDebit/CollectMandateStatus', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiDirectDebitDirectDebitIdPaymentGet operation.
     * @callback moduleapi/DirectDebitApi~apiDirectDebitDirectDebitIdPaymentGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DirectDebitPaymentViewModelV2ValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Direct Debit Payment
     * For a selected direct debit, the payment details will be shown.    Sample request:                    GET /api/DirectDebit/1/Payment?Id&#x3D;400000000000
     * @param {Number} directDebitId Direct debit payment id
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.id Cardholder Id
     * @param {module:api/DirectDebitApi~apiDirectDebitDirectDebitIdPaymentGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiDirectDebitDirectDebitIdPaymentGet",
    value: function apiDirectDebitDirectDebitIdPaymentGet(directDebitId, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'directDebitId' is set
      if (directDebitId === undefined || directDebitId === null) {
        throw new Error("Missing the required parameter 'directDebitId' when calling apiDirectDebitDirectDebitIdPaymentGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiDirectDebitDirectDebitIdPaymentGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiDirectDebitDirectDebitIdPaymentGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiDirectDebitDirectDebitIdPaymentGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiDirectDebitDirectDebitIdPaymentGet");
      }
      var pathParams = {
        'DirectDebitId': directDebitId
      };
      var queryParams = {
        'Id': opts['id']
      };
      var headerParams = {
        'api-version': apiVersion,
        'Authorization': authorization,
        'F-Message-Id': fMessageId,
        'F-Origin': fOrigin
      };
      var formParams = {};
      var authNames = ['jwt_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DirectDebitPaymentViewModelV2ValidResponsePackage.DirectDebitPaymentViewModelV2ValidResponsePackage;
      return this.apiClient.callApi('/api/DirectDebit/{DirectDebitId}/Payment', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiDirectDebitFileTypeReasonCodesGet operation.
     * @callback moduleapi/DirectDebitApi~apiDirectDebitFileTypeReasonCodesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReasonCodesViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Reason Codes
     * Retrieve list of reason codes for a given file type.    Sample request:                    GET /api/DirectDebit/Returns/ReasonCodes
     * @param {String} fileType Direct debits file type.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/DirectDebitApi~apiDirectDebitFileTypeReasonCodesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiDirectDebitFileTypeReasonCodesGet",
    value: function apiDirectDebitFileTypeReasonCodesGet(fileType, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'fileType' is set
      if (fileType === undefined || fileType === null) {
        throw new Error("Missing the required parameter 'fileType' when calling apiDirectDebitFileTypeReasonCodesGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiDirectDebitFileTypeReasonCodesGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiDirectDebitFileTypeReasonCodesGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiDirectDebitFileTypeReasonCodesGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiDirectDebitFileTypeReasonCodesGet");
      }
      var pathParams = {
        'FileType': fileType
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ReasonCodesViewModelValidResponsePackage.ReasonCodesViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/DirectDebit/{FileType}/ReasonCodes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiDirectDebitIdCancellationsGet operation.
     * @callback moduleapi/DirectDebitApi~apiDirectDebitIdCancellationsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetDirectDebitCancellationsViewModelV2ValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Direct Debit Cancellations
     * Retreives Sepa direct cancellations filtered by TransactionId, Iban, Date ...  At least one parameter must be porvided    Sample request:        GET /api/DirectDebit/400000000000/Cancellations?StartDate&#x3D;2020-06-01&amp;EndDate&#x3D;2020-12-31
     * @param {String} id Cardholder Id
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.messageId Message Id
     * @param {String} opts.startDate Start date of cancellations, inclusive. YYYY-MM-DD
     * @param {String} opts.endDate End date of cancellations, inclusive. YYYY-MM-DD
     * @param {String} opts.transactionId Transaction Id
     * @param {module:api/DirectDebitApi~apiDirectDebitIdCancellationsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiDirectDebitIdCancellationsGet",
    value: function apiDirectDebitIdCancellationsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiDirectDebitIdCancellationsGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiDirectDebitIdCancellationsGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiDirectDebitIdCancellationsGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiDirectDebitIdCancellationsGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiDirectDebitIdCancellationsGet");
      }
      var pathParams = {
        'Id': id
      };
      var queryParams = {
        'MessageId': opts['messageId'],
        'StartDate': opts['startDate'],
        'EndDate': opts['endDate'],
        'TransactionId': opts['transactionId']
      };
      var headerParams = {
        'api-version': apiVersion,
        'Authorization': authorization,
        'F-Message-Id': fMessageId,
        'F-Origin': fOrigin
      };
      var formParams = {};
      var authNames = ['jwt_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetDirectDebitCancellationsViewModelV2ValidResponsePackage.GetDirectDebitCancellationsViewModelV2ValidResponsePackage;
      return this.apiClient.callApi('/api/DirectDebit/{Id}/Cancellations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiDirectDebitIdDirectDebitRejectPatch operation.
     * @callback moduleapi/DirectDebitApi~apiDirectDebitIdDirectDebitRejectPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DirectDebitRejectViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reject or Accept Direct Debit
     * Toggle the iban so to be able to receive or reject any direct debits.    Sample request:                    Patch /api/DirectDebit/Mandate/400000000000/DirectDebitReject       {             \&quot;enable\&quot;: true,      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/DirectDebitRejectBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/DirectDebitApi~apiDirectDebitIdDirectDebitRejectPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiDirectDebitIdDirectDebitRejectPatch",
    value: function apiDirectDebitIdDirectDebitRejectPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiDirectDebitIdDirectDebitRejectPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiDirectDebitIdDirectDebitRejectPatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiDirectDebitIdDirectDebitRejectPatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiDirectDebitIdDirectDebitRejectPatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiDirectDebitIdDirectDebitRejectPatch");
      }
      var pathParams = {
        'Id': id
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
      var returnType = _DirectDebitRejectViewModelValidResponsePackage.DirectDebitRejectViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/DirectDebit/{Id}/DirectDebitReject', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiDirectDebitIdIbanStatusGet operation.
     * @callback moduleapi/DirectDebitApi~apiDirectDebitIdIbanStatusGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IbanStatusViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Iban Status
     * Get the status on an iban, if direct debits are enabled or disabled.    Sample request:                    GET /api/DirectDebit/400000000000/IbanStatus
     * @param {String} id Id of cardholder.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/DirectDebitApi~apiDirectDebitIdIbanStatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiDirectDebitIdIbanStatusGet",
    value: function apiDirectDebitIdIbanStatusGet(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiDirectDebitIdIbanStatusGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiDirectDebitIdIbanStatusGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiDirectDebitIdIbanStatusGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiDirectDebitIdIbanStatusGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiDirectDebitIdIbanStatusGet");
      }
      var pathParams = {
        'Id': id
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IbanStatusViewModelValidResponsePackage.IbanStatusViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/DirectDebit/{Id}/IbanStatus', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiDirectDebitIdMandatesGet operation.
     * @callback moduleapi/DirectDebitApi~apiDirectDebitIdMandatesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetMandatesViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Mandates
     * This endpoint is used to collect specific Mandate or a list of collection using different optional parameters. This endpoint is for EUR only.    Sample request:                    GET /api/DirectDebit/400000000000/Mandates?StartDate&#x3D;2020-01-01&amp;EndDate&#x3D;2020-12-12&amp;StatusId&#x3D;1
     * @param {String} id Id of cardholder.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Start date of mandates, inclusive. YYYY-MM-DD
     * @param {String} opts.endDate End date of mandates, inclusive. YYYY-MM-DD
     * @param {Number} opts.statusId Available statuses can be requested by /CollectMandateStatus endpoint
     * @param {String} opts.transactionId Transaction Id of mandates.
     * @param {module:api/DirectDebitApi~apiDirectDebitIdMandatesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiDirectDebitIdMandatesGet",
    value: function apiDirectDebitIdMandatesGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiDirectDebitIdMandatesGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiDirectDebitIdMandatesGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiDirectDebitIdMandatesGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiDirectDebitIdMandatesGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiDirectDebitIdMandatesGet");
      }
      var pathParams = {
        'Id': id
      };
      var queryParams = {
        'StartDate': opts['startDate'],
        'EndDate': opts['endDate'],
        'StatusId': opts['statusId'],
        'TransactionId': opts['transactionId']
      };
      var headerParams = {
        'api-version': apiVersion,
        'Authorization': authorization,
        'F-Message-Id': fMessageId,
        'F-Origin': fOrigin
      };
      var formParams = {};
      var authNames = ['jwt_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetMandatesViewModelValidResponsePackage.GetMandatesViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/DirectDebit/{Id}/Mandates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiDirectDebitInquiryGet operation.
     * @callback moduleapi/DirectDebitApi~apiDirectDebitInquiryGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MandateInquiryViewModelV2ValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mandate inquiry
     * Inquire for mandates by querying the PayCentre service.  This is used for GBP – Paycentre supports only GBP payments    Sample request:                    GET /api/DirectDebit/Inquiry?SortCode&#x3D;12547&amp;Id&#x3D;400000000000                  Note: In Response, PaymentAmount is of type long and uses minor currency units (for example, will be in pence not pounds).
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.id Cardholder id
     * @param {String} opts.accountNumber Account number
     * @param {String} opts.sortCode Sort code
     * @param {module:api/DirectDebitApi~apiDirectDebitInquiryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiDirectDebitInquiryGet",
    value: function apiDirectDebitInquiryGet(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiDirectDebitInquiryGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiDirectDebitInquiryGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiDirectDebitInquiryGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiDirectDebitInquiryGet");
      }
      var pathParams = {};
      var queryParams = {
        'Id': opts['id'],
        'AccountNumber': opts['accountNumber'],
        'SortCode': opts['sortCode']
      };
      var headerParams = {
        'api-version': apiVersion,
        'Authorization': authorization,
        'F-Message-Id': fMessageId,
        'F-Origin': fOrigin
      };
      var formParams = {};
      var authNames = ['jwt_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MandateInquiryViewModelV2ValidResponsePackage.MandateInquiryViewModelV2ValidResponsePackage;
      return this.apiClient.callApi('/api/DirectDebit/Inquiry', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiDirectDebitMandateIdCancellationPatch operation.
     * @callback moduleapi/DirectDebitApi~apiDirectDebitMandateIdCancellationPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MandateCancellationViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mandate Cancellation
     * For a selected mandate and cardHolder Id  we will proced to cancek it, Returns (Error Number, Error Description, and Reference Number)  Count for each transaction that was tried.    Sample request:                   Patch /api/DirectDebit/28f2dca4-354e-48f1-a08e-f1c9230c17c7/Cancellation?CHID&#x3D;400000497265
     * @param {String} mandateId CardHolderId.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.CHID Card Holder Id
     * @param {module:api/DirectDebitApi~apiDirectDebitMandateIdCancellationPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiDirectDebitMandateIdCancellationPatch",
    value: function apiDirectDebitMandateIdCancellationPatch(mandateId, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'mandateId' is set
      if (mandateId === undefined || mandateId === null) {
        throw new Error("Missing the required parameter 'mandateId' when calling apiDirectDebitMandateIdCancellationPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiDirectDebitMandateIdCancellationPatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiDirectDebitMandateIdCancellationPatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiDirectDebitMandateIdCancellationPatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiDirectDebitMandateIdCancellationPatch");
      }
      var pathParams = {
        'MandateId': mandateId
      };
      var queryParams = {
        'CHID': opts['CHID']
      };
      var headerParams = {
        'api-version': apiVersion,
        'Authorization': authorization,
        'F-Message-Id': fMessageId,
        'F-Origin': fOrigin
      };
      var formParams = {};
      var authNames = ['jwt_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MandateCancellationViewModelValidResponsePackage.MandateCancellationViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/DirectDebit/{MandateId}/Cancellation', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiDirectDebitMandateIdTransactionsGet operation.
     * @callback moduleapi/DirectDebitApi~apiDirectDebitMandateIdTransactionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetMandateHistoryV2ViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Mandate History
     * For a selected mandate, the transaction history details will be shown. This will include the Direct Debit Transactions, Return Transactions and the Transaction   Count for each transaction that was tried.    Sample request:                    GET /api/DirectDebit/1/Transactions?StartDate&#x3D;2020-01-01&amp;EndDate&#x3D;2020-12-12
     * @param {Number} mandateId Id of mandate.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Start date of mandates, inclusive. YYYY-MM-DD
     * @param {String} opts.endDate End date of mandates, inclusive. YYYY-MM-DD
     * @param {module:api/DirectDebitApi~apiDirectDebitMandateIdTransactionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiDirectDebitMandateIdTransactionsGet",
    value: function apiDirectDebitMandateIdTransactionsGet(mandateId, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'mandateId' is set
      if (mandateId === undefined || mandateId === null) {
        throw new Error("Missing the required parameter 'mandateId' when calling apiDirectDebitMandateIdTransactionsGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiDirectDebitMandateIdTransactionsGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiDirectDebitMandateIdTransactionsGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiDirectDebitMandateIdTransactionsGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiDirectDebitMandateIdTransactionsGet");
      }
      var pathParams = {
        'MandateId': mandateId
      };
      var queryParams = {
        'StartDate': opts['startDate'],
        'EndDate': opts['endDate']
      };
      var headerParams = {
        'api-version': apiVersion,
        'Authorization': authorization,
        'F-Message-Id': fMessageId,
        'F-Origin': fOrigin
      };
      var formParams = {};
      var authNames = ['jwt_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetMandateHistoryV2ViewModelValidResponsePackage.GetMandateHistoryV2ViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/DirectDebit/{MandateId}/Transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiDirectDebitMandatePatch operation.
     * @callback moduleapi/DirectDebitApi~apiDirectDebitMandatePatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpdateMandateViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Mandate
     * This endpoint is used to update the mandate information details for an existing mandate. The user can update any information regarding the mandate.   If any changes are made, this could affect upcoming future direct debits received. Example: If a mandate reference is updated, then the system will create   a new mandate if a direct debit has been received if the old reference was used.    Sample request:                    PATCH /api/DirectDebit/Mandate      {          \&quot;mandateId\&quot;: 16,          \&quot;merchantName\&quot;: \&quot;MerchantName\&quot;,          \&quot;debitingIBAN\&quot;: \&quot;ES1234560002570000123456\&quot;,          \&quot;mandateUsername\&quot;: \&quot;MandateUser\&quot;,          \&quot;statusId\&quot;: 2,          \&quot;referenceNumber\&quot;: \&quot;TTFSW34RF\&quot;,          \&quot;reason\&quot;: \&quot;Update DDM\&quot;      }
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateMandateBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/DirectDebitApi~apiDirectDebitMandatePatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiDirectDebitMandatePatch",
    value: function apiDirectDebitMandatePatch(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiDirectDebitMandatePatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiDirectDebitMandatePatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiDirectDebitMandatePatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiDirectDebitMandatePatch");
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
      var returnType = _UpdateMandateViewModelValidResponsePackage.UpdateMandateViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/DirectDebit/Mandate', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiDirectDebitOutgoingReturnPost operation.
     * @callback moduleapi/DirectDebitApi~apiDirectDebitOutgoingReturnPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DirectDebitOutgoingReturnViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Outgoing Return
     * If a direct debit transaction had the funds taken, the cardholder can ask for a return of funds. There must be a valid reason for the funds to be returned,   hence the user must select the appropriate error message so it can be sent to the creditor.    A SEPA direct debit can be reversed up to 8 weeks after the original transaction.    Sample request:        POST /api/DirectDebit/OutgoingReturn       {          \&quot;directDebitID\&quot;: 0,          \&quot;reason\&quot;: \&quot;Test\&quot;      }
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/DirectDebitOutgoingReturnBindingModel} opts.body 
     * @param {module:api/DirectDebitApi~apiDirectDebitOutgoingReturnPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiDirectDebitOutgoingReturnPost",
    value: function apiDirectDebitOutgoingReturnPost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiDirectDebitOutgoingReturnPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiDirectDebitOutgoingReturnPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiDirectDebitOutgoingReturnPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiDirectDebitOutgoingReturnPost");
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
      var returnType = _DirectDebitOutgoingReturnViewModelValidResponsePackage.DirectDebitOutgoingReturnViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/DirectDebit/OutgoingReturn', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiDirectDebitTransactionsGet operation.
     * @callback moduleapi/DirectDebitApi~apiDirectDebitTransactionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DirectDebitReturnTransactionsViewModelV2ValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Direct Debit Return Transactions
     * Get direct debit return transactions.     Regarding the direct debit return transactions, this will return all the DD transactions where the chid identified by an iban,   has requested money back for a DD which has been paid out and the creditor/vendor has accepted to make the refund.    Although query parameters are optional and not all need to be populated, at least one of the following:        MessageId      Iban      TransactionId        need to be passed. Multiple query parameters can be populated.    Sample requests:                    GET /Transactions?Iban&#x3D;IE46PFSR99107012345678      GET /Transactions?Iban&#x3D;IE46PFSR99107012345678&amp;TransactionId&#x3D;1      GET /Transactions?Iban&#x3D;IE46PFSR99107012345678&amp;TransactionId&#x3D;1&amp;StartDate&#x3D;2020-04-03&amp;EndDate&#x3D;2020-05-03                Note: In Response, Amount is of type long and uses minor currency units (for example, will be in pence not pounds).
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.messageId Transaction by message id
     * @param {String} opts.iban Transactions by iban
     * @param {String} opts.transactionId Transactions by transaction id
     * @param {String} opts.startDate Start date of transactions
     * @param {String} opts.endDate End date of transactions
     * @param {module:api/DirectDebitApi~apiDirectDebitTransactionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiDirectDebitTransactionsGet",
    value: function apiDirectDebitTransactionsGet(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiDirectDebitTransactionsGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiDirectDebitTransactionsGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiDirectDebitTransactionsGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiDirectDebitTransactionsGet");
      }
      var pathParams = {};
      var queryParams = {
        'MessageId': opts['messageId'],
        'Iban': opts['iban'],
        'TransactionId': opts['transactionId'],
        'StartDate': opts['startDate'],
        'EndDate': opts['endDate']
      };
      var headerParams = {
        'api-version': apiVersion,
        'Authorization': authorization,
        'F-Message-Id': fMessageId,
        'F-Origin': fOrigin
      };
      var formParams = {};
      var authNames = ['jwt_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DirectDebitReturnTransactionsViewModelV2ValidResponsePackage.DirectDebitReturnTransactionsViewModelV2ValidResponsePackage;
      return this.apiClient.callApi('/api/DirectDebit/Transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return DirectDebitApi;
}();
exports.DirectDebitApi = DirectDebitApi;