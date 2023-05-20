"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegistrationRuleApi = void 0;
var _ApiClient = require("../ApiClient");
var _AddRegistrationRuleBindingModel = require("../model/AddRegistrationRuleBindingModel");
var _AddRegistrationRuleViewModelValidResponsePackage = require("../model/AddRegistrationRuleViewModelValidResponsePackage");
var _DeleteBlacklistBlockBindingModel = require("../model/DeleteBlacklistBlockBindingModel");
var _DeleteBlacklistBlockViewModelValidResponsePackage = require("../model/DeleteBlacklistBlockViewModelValidResponsePackage");
var _DeleteRegistrationRuleBindingModel = require("../model/DeleteRegistrationRuleBindingModel");
var _DeleteRegistrationRuleViewModelValidResponsePackage = require("../model/DeleteRegistrationRuleViewModelValidResponsePackage");
var _GetRegistrationRuleAuditViewModelValidResponsePackage = require("../model/GetRegistrationRuleAuditViewModelValidResponsePackage");
var _GetRegistrationRulesViewModelValidResponsePackage = require("../model/GetRegistrationRulesViewModelValidResponsePackage");
var _InvalidResponsePackage = require("../model/InvalidResponsePackage");
var _RegisteredDetailsCountBindingModel = require("../model/RegisteredDetailsCountBindingModel");
var _RegisteredDetailsCountViewModelValidResponsePackage = require("../model/RegisteredDetailsCountViewModelValidResponsePackage");
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
* RegistrationRule service.
* @module api/RegistrationRuleApi
* @version 2.0
*/
var RegistrationRuleApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RegistrationRuleApi. 
  * @alias module:api/RegistrationRuleApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function RegistrationRuleApi(apiClient) {
    _classCallCheck(this, RegistrationRuleApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the apiRegistrationRuleCountPost operation.
   * @callback moduleapi/RegistrationRuleApi~apiRegistrationRuleCountPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/RegisteredDetailsCountViewModelValidResponsePackage{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Registered Details Count
   * Registered details count    Sample request:                    POST /api/RegistrationRule/Count      {          \&quot;firstName\&quot;: \&quot;Name\&quot;,          \&quot;lastName\&quot;: \&quot;Surname\&quot;,          \&quot;address1\&quot;: \&quot;Street address 1\&quot;,          \&quot;address2\&quot;: \&quot;street address 2\&quot;,          \&quot;city\&quot;: \&quot;Victoria\&quot;,          \&quot;zipCode\&quot;: \&quot;VIC7896\&quot;,          \&quot;countryCode\&quot;: \&quot;MT\&quot;,          \&quot;dateofbirth\&quot;: \&quot;1992-01-20\&quot;,          \&quot;email\&quot;: \&quot;namesurname@gmail.com\&quot;,          \&quot;distributorCode\&quot;: \&quot;399\&quot;,          \&quot;bin\&quot;: \&quot;59190995\&quot;,          \&quot;countryOfIssuance\&quot;: \&quot;ES\&quot;,          \&quot;documentNumber\&quot;: \&quot;12345678Z\&quot;,          \&quot;documentType\&quot;: \&quot;National Id\&quot;,          \&quot;documentExpiryDate\&quot;: \&quot;2024-10-24\&quot;,          \&quot;mobile\&quot;: \&quot;356|522553336\&quot;,          \&quot;phone\&quot;: \&quot;356|522553336\&quot;      }
   * @param {String} apiVersion 
   * @param {String} authorization Access token
   * @param {String} fMessageId Unique identifier
   * @param {String} fOrigin Origin of request
   * @param {Object} opts Optional parameters
   * @param {module:model/RegisteredDetailsCountBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
   * @param {module:api/RegistrationRuleApi~apiRegistrationRuleCountPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  _createClass(RegistrationRuleApi, [{
    key: "apiRegistrationRuleCountPost",
    value: function apiRegistrationRuleCountPost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiRegistrationRuleCountPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiRegistrationRuleCountPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiRegistrationRuleCountPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiRegistrationRuleCountPost");
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
      var returnType = _RegisteredDetailsCountViewModelValidResponsePackage.RegisteredDetailsCountViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/RegistrationRule/Count', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiRegistrationRuleGet operation.
     * @callback moduleapi/RegistrationRuleApi~apiRegistrationRuleGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetRegistrationRulesViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Registration Rules
     * Retrieves all registration rules    Sample request:                    GET /api/RegistrationRule?PageSize&#x3D;5&amp;PageNo&#x3D;1
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.firstName First name of cardholder.
     * @param {String} opts.lastName Last name of cardholder.
     * @param {String} opts.dateOfBirth Date of birth of cardholder in \&quot;yyyy-MM-dd\&quot; format.
     * @param {String} opts.mobile Cardholder mobile number. Mobile number dial code can also be added by separating mobile number and dial code with a |.
     * @param {String} opts.phone Land line of cardholder. Landline dial code can also be added by separating landline and dial code with a |.
     * @param {String} opts.email Cardholder email address.
     * @param {String} opts.documentNumber Document number of cardholder.
     * @param {String} opts.documentType Document type of cardholder.
     * @param {String} opts.documentExpiryDate Document expiry date of cardholder in \&quot;yyyy-MM-dd\&quot; format.
     * @param {String} opts.countryOfIssuance Document country of issuance of cardholder in regulation with ISO 3166-1 alpha-2.
     * @param {String} opts.address1 First line of cardholder address.
     * @param {String} opts.address2 
     * @param {String} opts.zipCode Post code of cardholder.
     * @param {String} opts.city City of cardholder address.
     * @param {String} opts.countryCode Country code of cardholder address.
     * @param {Number} opts.pageNo 
     * @param {Number} opts.pageSize 
     * @param {Boolean} opts.includeArchived If true, archived (deleted) rules will be returned. By default false.
     * @param {Boolean} opts.includeNullValues If true, any fields provided in the query string can have null and empty values. If false, NULL values from the fields provided in the query string will be removed. By default true.
     * @param {module:api/RegistrationRuleApi~apiRegistrationRuleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiRegistrationRuleGet",
    value: function apiRegistrationRuleGet(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiRegistrationRuleGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiRegistrationRuleGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiRegistrationRuleGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiRegistrationRuleGet");
      }
      var pathParams = {};
      var queryParams = {
        'FirstName': opts['firstName'],
        'LastName': opts['lastName'],
        'DateOfBirth': opts['dateOfBirth'],
        'Mobile': opts['mobile'],
        'Phone': opts['phone'],
        'Email': opts['email'],
        'DocumentNumber': opts['documentNumber'],
        'DocumentType': opts['documentType'],
        'DocumentExpiryDate': opts['documentExpiryDate'],
        'CountryOfIssuance': opts['countryOfIssuance'],
        'Address1': opts['address1'],
        'Address2': opts['address2'],
        'ZipCode': opts['zipCode'],
        'City': opts['city'],
        'CountryCode': opts['countryCode'],
        'PageNo': opts['pageNo'],
        'PageSize': opts['pageSize'],
        'IncludeArchived': opts['includeArchived'],
        'IncludeNullValues': opts['includeNullValues']
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
      var returnType = _GetRegistrationRulesViewModelValidResponsePackage.GetRegistrationRulesViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/RegistrationRule', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiRegistrationRulePost operation.
     * @callback moduleapi/RegistrationRuleApi~apiRegistrationRulePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddRegistrationRuleViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Registration Rule
     * Add new registration rule    Sample request:                    POST /api/RegistrationRule      {          \&quot;firstName\&quot;: \&quot;Name\&quot;,          \&quot;lastName\&quot;: \&quot;Surname\&quot;,          \&quot;address1\&quot;: \&quot;Street address 1\&quot;,          \&quot;address2\&quot;: \&quot;street address 2\&quot;,          \&quot;address3\&quot;: \&quot;\&quot;,          \&quot;address4\&quot;: \&quot;\&quot;,          \&quot;city\&quot;: \&quot;Victoria\&quot;,          \&quot;zipCode\&quot;: \&quot;VIC7896\&quot;,          \&quot;countryCode\&quot;: \&quot;MT\&quot;,          \&quot;dateofbirth\&quot;: \&quot;1992-01-20\&quot;,          \&quot;email\&quot;: \&quot;namesurname@gmail.com\&quot;,          \&quot;distributorCode\&quot;: \&quot;399\&quot;,          \&quot;bin\&quot;: \&quot;59190995\&quot;,          \&quot;countryOfIssuance\&quot;: \&quot;ES\&quot;,          \&quot;documentNumber\&quot;: \&quot;12345678Z\&quot;,          \&quot;documentType\&quot;: \&quot;National Id\&quot;,          \&quot;documentExpiryDate\&quot;: \&quot;2024-10-24\&quot;,          \&quot;blockType\&quot;: \&quot;Permanent\&quot;,          \&quot;note\&quot;: \&quot;Registration rule note\&quot;,          \&quot;reason\&quot;: \&quot;Adding new rule\&quot;,          \&quot;origin\&quot;: \&quot;API\&quot;,          \&quot;csrid\&quot;: \&quot;12345\&quot;,          \&quot;mobile\&quot;: \&quot;356|522553336\&quot;,          \&quot;phone\&quot;: \&quot;356|522553336\&quot;,          \&quot;isBlacklisted\&quot;: false      }
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/AddRegistrationRuleBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/RegistrationRuleApi~apiRegistrationRulePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiRegistrationRulePost",
    value: function apiRegistrationRulePost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiRegistrationRulePost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiRegistrationRulePost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiRegistrationRulePost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiRegistrationRulePost");
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
      var returnType = _AddRegistrationRuleViewModelValidResponsePackage.AddRegistrationRuleViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/RegistrationRule', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiRegistrationRuleRevertBlockDelete operation.
     * @callback moduleapi/RegistrationRuleApi~apiRegistrationRuleRevertBlockDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteBlacklistBlockViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove blacklist block
     * Remove blacklist block from cardholder that was blocked.    Sample request:                    DELETE /api/RegistrationRule/RevertBlock      {          \&quot;BlockId\&quot;: 5369,          \&quot;Csr\&quot;: 75,          \&quot;reason\&quot;: \&quot;Block not required\&quot;      }
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/DeleteBlacklistBlockBindingModel} opts.body 
     * @param {module:api/RegistrationRuleApi~apiRegistrationRuleRevertBlockDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiRegistrationRuleRevertBlockDelete",
    value: function apiRegistrationRuleRevertBlockDelete(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiRegistrationRuleRevertBlockDelete");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiRegistrationRuleRevertBlockDelete");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiRegistrationRuleRevertBlockDelete");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiRegistrationRuleRevertBlockDelete");
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
      var returnType = _DeleteBlacklistBlockViewModelValidResponsePackage.DeleteBlacklistBlockViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/RegistrationRule/RevertBlock', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiRegistrationRuleUserRegistrationRuleIdAuditGet operation.
     * @callback moduleapi/RegistrationRuleApi~apiRegistrationRuleUserRegistrationRuleIdAuditGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetRegistrationRuleAuditViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Registration Rule Audit
     * Retrieves audit for registration rule using the filters passed in the query string if any.    Sample request:                    GET /api/RegistrationRule/79/Audit?DateOfBirth&#x3D;2023-04-11&amp;IncludeNullValues&#x3D;true&amp;PageSize&#x3D;5&amp;PageNo&#x3D;1
     * @param {String} userRegistrationRuleId 
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.firstName First name of cardholder.
     * @param {String} opts.lastName Last name of cardholder.
     * @param {String} opts.dateOfBirth Date of birth of cardholder in \&quot;yyyy-MM-dd\&quot; format.
     * @param {String} opts.mobile Cardholder mobile number. Mobile number dial code can also be added by separating mobile number and dial code with a |.
     * @param {String} opts.phone Land line of cardholder. Landline dial code can also be added by separating landline and dial code with a |.
     * @param {String} opts.email Cardholder email address.
     * @param {String} opts.documentNumber Document number of cardholder.
     * @param {String} opts.documentType Document type of cardholder.
     * @param {String} opts.documentExpiryDate Document expiry date of cardholder in \&quot;yyyy-MM-dd\&quot; format.
     * @param {String} opts.countryOfIssuance Document country of issuance of cardholder in regulation with ISO 3166-1 alpha-2.
     * @param {String} opts.address1 First line of cardholder address.
     * @param {String} opts.address2 
     * @param {String} opts.zipCode Post code of cardholder.
     * @param {String} opts.city City of cardholder address.
     * @param {String} opts.countryCode Country code of cardholder address.
     * @param {Boolean} opts.isReversed If true, only reversed actions will be returned. If false, only blacklisted actions will be returned and null (not provided) will return all.
     * @param {Boolean} opts.includeNullValues If true, any fields provided in the query string can have null and empty values. If false, NULL values from the fields provided in the query string will be removed. By default true.
     * @param {Number} opts.pageNo 
     * @param {Number} opts.pageSize 
     * @param {module:api/RegistrationRuleApi~apiRegistrationRuleUserRegistrationRuleIdAuditGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiRegistrationRuleUserRegistrationRuleIdAuditGet",
    value: function apiRegistrationRuleUserRegistrationRuleIdAuditGet(userRegistrationRuleId, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userRegistrationRuleId' is set
      if (userRegistrationRuleId === undefined || userRegistrationRuleId === null) {
        throw new Error("Missing the required parameter 'userRegistrationRuleId' when calling apiRegistrationRuleUserRegistrationRuleIdAuditGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiRegistrationRuleUserRegistrationRuleIdAuditGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiRegistrationRuleUserRegistrationRuleIdAuditGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiRegistrationRuleUserRegistrationRuleIdAuditGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiRegistrationRuleUserRegistrationRuleIdAuditGet");
      }
      var pathParams = {
        'UserRegistrationRuleId': userRegistrationRuleId
      };
      var queryParams = {
        'FirstName': opts['firstName'],
        'LastName': opts['lastName'],
        'DateOfBirth': opts['dateOfBirth'],
        'Mobile': opts['mobile'],
        'Phone': opts['phone'],
        'Email': opts['email'],
        'DocumentNumber': opts['documentNumber'],
        'DocumentType': opts['documentType'],
        'DocumentExpiryDate': opts['documentExpiryDate'],
        'CountryOfIssuance': opts['countryOfIssuance'],
        'Address1': opts['address1'],
        'Address2': opts['address2'],
        'ZipCode': opts['zipCode'],
        'City': opts['city'],
        'CountryCode': opts['countryCode'],
        'IsReversed': opts['isReversed'],
        'IncludeNullValues': opts['includeNullValues'],
        'PageNo': opts['pageNo'],
        'PageSize': opts['pageSize']
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
      var returnType = _GetRegistrationRuleAuditViewModelValidResponsePackage.GetRegistrationRuleAuditViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/RegistrationRule/{UserRegistrationRuleId}/Audit', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiRegistrationRuleUserRegistrationRuleIdDelete operation.
     * @callback moduleapi/RegistrationRuleApi~apiRegistrationRuleUserRegistrationRuleIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteRegistrationRuleViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Registration Rule
     * Delete registration rule    Sample request:                    DELETE /api/RegistrationRule/67      {          \&quot;csrId\&quot;: \&quot;2020202\&quot;,          \&quot;reason\&quot;: \&quot;new requirements\&quot;      }
     * @param {String} userRegistrationRuleId 
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/DeleteRegistrationRuleBindingModel} opts.body 
     * @param {module:api/RegistrationRuleApi~apiRegistrationRuleUserRegistrationRuleIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiRegistrationRuleUserRegistrationRuleIdDelete",
    value: function apiRegistrationRuleUserRegistrationRuleIdDelete(userRegistrationRuleId, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'userRegistrationRuleId' is set
      if (userRegistrationRuleId === undefined || userRegistrationRuleId === null) {
        throw new Error("Missing the required parameter 'userRegistrationRuleId' when calling apiRegistrationRuleUserRegistrationRuleIdDelete");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiRegistrationRuleUserRegistrationRuleIdDelete");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiRegistrationRuleUserRegistrationRuleIdDelete");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiRegistrationRuleUserRegistrationRuleIdDelete");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiRegistrationRuleUserRegistrationRuleIdDelete");
      }
      var pathParams = {
        'UserRegistrationRuleId': userRegistrationRuleId
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
      var returnType = _DeleteRegistrationRuleViewModelValidResponsePackage.DeleteRegistrationRuleViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/RegistrationRule/{UserRegistrationRuleId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return RegistrationRuleApi;
}();
exports.RegistrationRuleApi = RegistrationRuleApi;