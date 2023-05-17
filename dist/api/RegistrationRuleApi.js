"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegistrationRuleApi = void 0;
var _ApiClient = require("../ApiClient");
var _AddRegistrationRuleBindingModel = require("../model/AddRegistrationRuleBindingModel");
var _AddRegistrationRuleViewModelValidResponsePackage = require("../model/AddRegistrationRuleViewModelValidResponsePackage");
var _DeleteRegistrationRuleViewModelValidResponsePackage = require("../model/DeleteRegistrationRuleViewModelValidResponsePackage");
var _GetRegistrationRulesViewModelValidResponsePackage = require("../model/GetRegistrationRulesViewModelValidResponsePackage");
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
                                                                                                                                                                                                                                                                                                                                                                                               * Swagger Codegen version: 3.0.42
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
   * Callback function to receive the result of the apiRegistrationRuleGet operation.
   * @callback moduleapi/RegistrationRuleApi~apiRegistrationRuleGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/GetRegistrationRulesViewModelValidResponsePackage{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Registration Rules
   * Retrieves all registration rules
   * @param {String} apiVersion 
   * @param {String} authorization Access token
   * @param {String} fMessageId Unique identifier
   * @param {String} fOrigin Origin of request
   * @param {Object} opts Optional parameters
   * @param {Number} opts.pageNo 
   * @param {Number} opts.pageSize 
   * @param {Boolean} opts.includeArchived 
   * @param {module:api/RegistrationRuleApi~apiRegistrationRuleGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  _createClass(RegistrationRuleApi, [{
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
        'PageNo': opts['pageNo'],
        'PageSize': opts['pageSize'],
        'IncludeArchived': opts['includeArchived']
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
     * Add new registration rule
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
     * Callback function to receive the result of the apiRegistrationRuleUserRegistrationRuleIdDelete operation.
     * @callback moduleapi/RegistrationRuleApi~apiRegistrationRuleUserRegistrationRuleIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteRegistrationRuleViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Registration Rule
     * Delete registration rule
     * @param {String} userRegistrationRuleId 
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.cSRId 
     * @param {module:api/RegistrationRuleApi~apiRegistrationRuleUserRegistrationRuleIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiRegistrationRuleUserRegistrationRuleIdDelete",
    value: function apiRegistrationRuleUserRegistrationRuleIdDelete(userRegistrationRuleId, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
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
      var queryParams = {
        'CSRId': opts['cSRId']
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
      var returnType = _DeleteRegistrationRuleViewModelValidResponsePackage.DeleteRegistrationRuleViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/RegistrationRule/{UserRegistrationRuleId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return RegistrationRuleApi;
}();
exports.RegistrationRuleApi = RegistrationRuleApi;