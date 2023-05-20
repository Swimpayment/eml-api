"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThreeDSApi = void 0;
var _ApiClient = require("../ApiClient");
var _EnrollmentDetailsThreeDSViewModelValidResponsePackage = require("../model/EnrollmentDetailsThreeDSViewModelValidResponsePackage");
var _InvalidResponsePackage = require("../model/InvalidResponsePackage");
var _UpdateSecurityDetailsThreeDSBindingModel = require("../model/UpdateSecurityDetailsThreeDSBindingModel");
var _UpdateSecurityDetailsThreeDSViewModelValidResponsePackage = require("../model/UpdateSecurityDetailsThreeDSViewModelValidResponsePackage");
var _ValidateSecurityAnswerThreeDSBindingModel = require("../model/ValidateSecurityAnswerThreeDSBindingModel");
var _ValidateSecurityAnswerThreeDSViewModelValidResponsePackage = require("../model/ValidateSecurityAnswerThreeDSViewModelValidResponsePackage");
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
* ThreeDS service.
* @module api/ThreeDSApi
* @version 2.0
*/
var ThreeDSApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ThreeDSApi. 
  * @alias module:api/ThreeDSApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function ThreeDSApi(apiClient) {
    _classCallCheck(this, ThreeDSApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the apiThreeDSIdGet operation.
   * @callback moduleapi/ThreeDSApi~apiThreeDSIdGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/EnrollmentDetailsThreeDSViewModelValidResponsePackage{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get enrollment details
   * Retrieves the enrollment details of the cardholder from our 3DS provider.    Sample request:            GET /api/ThreeDS/400000000000
   * @param {String} id Cardholder id.
   * @param {String} apiVersion 
   * @param {String} authorization Access token
   * @param {String} fMessageId Unique identifier
   * @param {String} fOrigin Origin of request
   * @param {module:api/ThreeDSApi~apiThreeDSIdGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  _createClass(ThreeDSApi, [{
    key: "apiThreeDSIdGet",
    value: function apiThreeDSIdGet(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiThreeDSIdGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiThreeDSIdGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiThreeDSIdGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiThreeDSIdGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiThreeDSIdGet");
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
      var returnType = _EnrollmentDetailsThreeDSViewModelValidResponsePackage.EnrollmentDetailsThreeDSViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/ThreeDS/{Id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiThreeDSIdSecurityDetailsPatch operation.
     * @callback moduleapi/ThreeDSApi~apiThreeDSIdSecurityDetailsPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpdateSecurityDetailsThreeDSViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update 3DS security details
     * This endpoints offers to create or update security details for 3DS enrollment. The security answer needs to be encrypted.    The encryption algorithm used is AES.  The cipher mode used is ECB.  No IV is required.    Security answer is always required while security question is optional. If security question is not provided, the flow will check the current enrollment  details and if no security question is found, the default value from our configurations per bin/distributor code will be assigned.    Sample request:            PATCH /api/ThreeDS/400000000000/SecurityDetails      {          \&quot;securityQuestion\&quot;: \&quot;Favourite Football Team\&quot;,          \&quot;securityAnswer\&quot;: \&quot;F4FE2C36F2C4082FC5B9AC3FCB3634B2\&quot;,      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateSecurityDetailsThreeDSBindingModel} opts.body 
     * @param {module:api/ThreeDSApi~apiThreeDSIdSecurityDetailsPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiThreeDSIdSecurityDetailsPatch",
    value: function apiThreeDSIdSecurityDetailsPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiThreeDSIdSecurityDetailsPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiThreeDSIdSecurityDetailsPatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiThreeDSIdSecurityDetailsPatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiThreeDSIdSecurityDetailsPatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiThreeDSIdSecurityDetailsPatch");
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
      var returnType = _UpdateSecurityDetailsThreeDSViewModelValidResponsePackage.UpdateSecurityDetailsThreeDSViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/ThreeDS/{Id}/SecurityDetails', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiThreeDSIdValidatePost operation.
     * @callback moduleapi/ThreeDSApi~apiThreeDSIdValidatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateSecurityAnswerThreeDSViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Security Answer
     * Validates security answer for a given cardholder id. The security answer needs to be encrypted.    The encryption algorithm used is AES.  The cipher mode used is ECB.  No IV is required.    Sample request:            POST /api/ThreeDS/400000000000/Validate      {          \&quot;securityAnswer\&quot;: \&quot;F4FE2C36F2C4082FC5B9AC3FCB3634B2\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/ValidateSecurityAnswerThreeDSBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/ThreeDSApi~apiThreeDSIdValidatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiThreeDSIdValidatePost",
    value: function apiThreeDSIdValidatePost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiThreeDSIdValidatePost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiThreeDSIdValidatePost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiThreeDSIdValidatePost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiThreeDSIdValidatePost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiThreeDSIdValidatePost");
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
      var returnType = _ValidateSecurityAnswerThreeDSViewModelValidResponsePackage.ValidateSecurityAnswerThreeDSViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/ThreeDS/{Id}/Validate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return ThreeDSApi;
}();
exports.ThreeDSApi = ThreeDSApi;