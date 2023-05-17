"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletApi = void 0;
var _ApiClient = require("../ApiClient");
var _AccountWalletBindingModel = require("../model/AccountWalletBindingModel");
var _AccountWalletViewModelValidResponsePackage = require("../model/AccountWalletViewModelValidResponsePackage");
var _InvalidResponsePackage = require("../model/InvalidResponsePackage");
var _WalletSpendControlGroupGetViewModelValidResponsePackage = require("../model/WalletSpendControlGroupGetViewModelValidResponsePackage");
var _WalletSpendControlGroupInsertBindingModel = require("../model/WalletSpendControlGroupInsertBindingModel");
var _WalletSpendControlGroupInsertViewModelValidResponsePackage = require("../model/WalletSpendControlGroupInsertViewModelValidResponsePackage");
var _WalletSpendControlUpdateBindingModel = require("../model/WalletSpendControlUpdateBindingModel");
var _WalletSpendControlUpdateViewModelValidResponsePackage = require("../model/WalletSpendControlUpdateViewModelValidResponsePackage");
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
* Wallet service.
* @module api/WalletApi
* @version 2.0
*/
var WalletApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WalletApi. 
  * @alias module:api/WalletApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function WalletApi(apiClient) {
    _classCallCheck(this, WalletApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the apiWalletIdPatch operation.
   * @callback moduleapi/WalletApi~apiWalletIdPatchCallback
   * @param {String} error Error message, if any.
   * @param {module:model/WalletSpendControlUpdateViewModelValidResponsePackage{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Wallet Spend Control
   * Sets the Wallet Spend Control settings at TRACE API    Sample request        PATCH /Account/400000000000            {          \&quot;walletId\&quot; : \&quot;WLT002\&quot;,          \&quot;groupName\&quot; : \&quot;TestGroup\&quot;      }          PATCH /Account/400000000000            {          \&quot;walletId\&quot; : \&quot;WLT002\&quot;,          \&quot;groupSettings\&quot; : [              {                  \&quot;source\&quot;: [                      \&quot;POS\&quot;,                      \&quot;ATM\&quot;,                      \&quot;Ecommerce\&quot;                  ],                  \&quot;allowedMerchantCategory\&quot;: [                      \&quot;0\&quot;,                      \&quot;01\&quot;,                      \&quot;02\&quot;                  ],                  \&quot;allowedCardAcceptor\&quot;: [                      \&quot;string\&quot;,                      \&quot;021\&quot;                  ]              },              {                  \&quot;source\&quot;: [                      \&quot;Moto\&quot;,                      \&quot;API\&quot;                  ],                  \&quot;allowedMerchantCategory\&quot;: [                      \&quot;0\&quot;,                      \&quot;01\&quot;,                      \&quot;02\&quot;                  ],                  \&quot;allowedCardAcceptor\&quot;: [                      \&quot;string\&quot;,                      \&quot;021\&quot;                  ]              }           ]      }
   * @param {String} id Cardholder id.
   * @param {String} apiVersion 
   * @param {String} authorization Access token
   * @param {String} fMessageId Unique identifier
   * @param {String} fOrigin Origin of request
   * @param {Object} opts Optional parameters
   * @param {module:model/WalletSpendControlUpdateBindingModel} opts.body 
   * @param {module:api/WalletApi~apiWalletIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  _createClass(WalletApi, [{
    key: "apiWalletIdPatch",
    value: function apiWalletIdPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiWalletIdPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiWalletIdPatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiWalletIdPatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiWalletIdPatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiWalletIdPatch");
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
      var returnType = _WalletSpendControlUpdateViewModelValidResponsePackage.WalletSpendControlUpdateViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Wallet/{Id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiWalletIdPost operation.
     * @callback moduleapi/WalletApi~apiWalletIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountWalletViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Wallet
     * Creates a wallet for the given account.
     * @param {String} id Cardholder id.    Expected format: ^[\\d]{12}$|^$
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/AccountWalletBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/WalletApi~apiWalletIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiWalletIdPost",
    value: function apiWalletIdPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiWalletIdPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiWalletIdPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiWalletIdPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiWalletIdPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiWalletIdPost");
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
      var returnType = _AccountWalletViewModelValidResponsePackage.AccountWalletViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Wallet/{Id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiWalletWalletSpendControlGroupGet operation.
     * @callback moduleapi/WalletApi~apiWalletWalletSpendControlGroupGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WalletSpendControlGroupGetViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Wallet Spend Control Group Get
     * Get Wallet Spend Control Groups by Bin and/or DistributorCode and/or GroupName    Sample request:        GET /Wallet/WalletSpendControlGroup?Bin&#x3D;{{BIN}}&amp;DistributorCode&#x3D;{{DC}}&amp;GroupName&#x3D;TestGroup
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.bin Assigned by PFS. It is the first 8 digits of the cards on your program.
     * @param {String} opts.distributorCode The unique identifier assigned by PFS, to your program
     * @param {String} opts.groupName Name of the group
     * @param {module:api/WalletApi~apiWalletWalletSpendControlGroupGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiWalletWalletSpendControlGroupGet",
    value: function apiWalletWalletSpendControlGroupGet(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiWalletWalletSpendControlGroupGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiWalletWalletSpendControlGroupGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiWalletWalletSpendControlGroupGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiWalletWalletSpendControlGroupGet");
      }
      var pathParams = {};
      var queryParams = {
        'Bin': opts['bin'],
        'DistributorCode': opts['distributorCode'],
        'GroupName': opts['groupName']
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
      var returnType = _WalletSpendControlGroupGetViewModelValidResponsePackage.WalletSpendControlGroupGetViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Wallet/WalletSpendControlGroup', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiWalletWalletSpendControlGroupPost operation.
     * @callback moduleapi/WalletApi~apiWalletWalletSpendControlGroupPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WalletSpendControlGroupInsertViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Wallet Spend Control Group Create
     * Creates a Wallet Spend Control Group    Sample request:        POST /Wallet/WalletSpendControlGroup      {         \&quot;bin\&quot;: \&quot;{{BIN}}\&quot;,         \&quot;distributorCode\&quot;: \&quot;{{DC}}\&quot;,         \&quot;groupName\&quot;: \&quot;TestGroup\&quot;,         \&quot;groupSettings\&quot;: [             {                  \&quot;source\&quot;: [\&quot;POS\&quot;, \&quot;ATM\&quot;, \&quot;Ecommerce\&quot;, \&quot;Moto\&quot;, \&quot;API\&quot;],               \&quot;allowedMerchantCategory\&quot;: [\&quot;0\&quot;, \&quot;01\&quot;, \&quot;02\&quot;],                  \&quot;allowedCardAcceptor\&quot;: [\&quot;string\&quot;, \&quot;021\&quot;],                  \&quot;allowedPostalCode\&quot; : [\&quot;C15 1234\&quot;],                  \&quot;allowedTerminalId\&quot;: [\&quot;Term1234\&quot;]             },             {                  \&quot;source\&quot;: [\&quot;POS\&quot;, \&quot;ATM\&quot;, \&quot;Ecommerce\&quot;, \&quot;Moto\&quot;, \&quot;API\&quot;],               \&quot;allowedMerchantCategory\&quot;: [\&quot;0\&quot;, \&quot;01\&quot;, \&quot;02\&quot;],               \&quot;allowedCardAcceptor\&quot;: [\&quot;string\&quot;, \&quot;021\&quot;]             }         ]      }
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/WalletSpendControlGroupInsertBindingModel} opts.body 
     * @param {module:api/WalletApi~apiWalletWalletSpendControlGroupPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiWalletWalletSpendControlGroupPost",
    value: function apiWalletWalletSpendControlGroupPost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiWalletWalletSpendControlGroupPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiWalletWalletSpendControlGroupPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiWalletWalletSpendControlGroupPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiWalletWalletSpendControlGroupPost");
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
      var returnType = _WalletSpendControlGroupInsertViewModelValidResponsePackage.WalletSpendControlGroupInsertViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Wallet/WalletSpendControlGroup', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return WalletApi;
}();
exports.WalletApi = WalletApi;