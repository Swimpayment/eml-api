"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BankPaymentApi = void 0;
var _ApiClient = require("../ApiClient");
var _BankPaymentBindingModelV = require("../model/BankPaymentBindingModelV2");
var _BankPaymentCancelRecurringBindingModel = require("../model/BankPaymentCancelRecurringBindingModel");
var _BankPaymentCancelRecurringViewModelValidResponsePackage = require("../model/BankPaymentCancelRecurringViewModelValidResponsePackage");
var _BankPaymentDeliveryDateViewModelValidResponsePackage = require("../model/BankPaymentDeliveryDateViewModelValidResponsePackage");
var _BankPaymentDirection = require("../model/BankPaymentDirection");
var _BankPaymentGetRecurringPaymentsViewModelV2ValidResponsePackage = require("../model/BankPaymentGetRecurringPaymentsViewModelV2ValidResponsePackage");
var _BankPaymentParametersViewModelValidResponsePackage = require("../model/BankPaymentParametersViewModelValidResponsePackage");
var _BankPaymentProvider = require("../model/BankPaymentProvider");
var _BankPaymentRecurringBindingModelV = require("../model/BankPaymentRecurringBindingModelV2");
var _BankPaymentRecurringViewModelValidResponsePackage = require("../model/BankPaymentRecurringViewModelValidResponsePackage");
var _BankPaymentScheme = require("../model/BankPaymentScheme");
var _BankPaymentStatementByIdViewModelV2ValidResponsePackage = require("../model/BankPaymentStatementByIdViewModelV2ValidResponsePackage");
var _BankPaymentStatementViewModelV2ValidResponsePackage = require("../model/BankPaymentStatementViewModelV2ValidResponsePackage");
var _BankPaymentUpdateBindingModelV = require("../model/BankPaymentUpdateBindingModelV2");
var _BankPaymentUpdateViewModelValidResponsePackage = require("../model/BankPaymentUpdateViewModelValidResponsePackage");
var _BankPaymentViewModelValidResponsePackage = require("../model/BankPaymentViewModelValidResponsePackage");
var _GetMT103ViewModelValidResponsePackage = require("../model/GetMT103ViewModelValidResponsePackage");
var _InvalidResponsePackage = require("../model/InvalidResponsePackage");
var _ValidateBicViewModelValidResponsePackage = require("../model/ValidateBicViewModelValidResponsePackage");
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
* BankPayment service.
* @module api/BankPaymentApi
* @version 2.0
*/
var BankPaymentApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BankPaymentApi. 
  * @alias module:api/BankPaymentApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function BankPaymentApi(apiClient) {
    _classCallCheck(this, BankPaymentApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the apiBankPaymentDeliveryDateGet operation.
   * @callback moduleapi/BankPaymentApi~apiBankPaymentDeliveryDateGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/BankPaymentDeliveryDateViewModelValidResponsePackage{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Bank Transfer Delivery Date
   * Get the estimated payment delivery date for the queryied country/currency/payment scheme if the transfer starts on a given time.   Working hours and weekends are taken into account. The queried payment date can&#x27;t be in the past.     The response is the expected payment date    Sample request:                    GET /api/BankPayment/DeliveryDate?paymentDate&#x3D;2020-07-04&amp;currency&#x3D;GBP&amp;receivingCountryCode&#x3D;GB&amp;sendingCountryCode&#x3D;GB&amp;bankPaymentScheme&#x3D;1
   * @param {String} apiVersion 
   * @param {String} authorization Access token
   * @param {String} fMessageId Unique identifier
   * @param {String} fOrigin Origin of request
   * @param {Object} opts Optional parameters
   * @param {String} opts.paymentDate Planed payment date and time (yyyy-MM-ddThh:mm:ss). The API is aware of business hours, so the time (hour, minute) part of the value is also imporatant.    For example in case of a GBP payment with FasterPayment 2020-08-14T10:00:00 (Friday 10AM) will fullfiled on the same day,  but a payment made at 2020-08-14T19:00:00 (Friday 7PM) will be fulfilled only on 2020-08-17 Monday.
   * @param {String} opts.currency Payment Currency ISO-4217 3 character code
   * @param {String} opts.receivingCountryCode Country code (2 letter) of the receiving country
   * @param {String} opts.sendingCountryCode Country code (2 letter) of the seding country
   * @param {module:model/BankPaymentScheme} opts.bankPaymentScheme FasterPayment &#x3D; 1, DomesticCreditTransfer &#x3D; 2, Priority &#x3D; 3, Local &#x3D; 4
   * @param {module:api/BankPaymentApi~apiBankPaymentDeliveryDateGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  _createClass(BankPaymentApi, [{
    key: "apiBankPaymentDeliveryDateGet",
    value: function apiBankPaymentDeliveryDateGet(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiBankPaymentDeliveryDateGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiBankPaymentDeliveryDateGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiBankPaymentDeliveryDateGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiBankPaymentDeliveryDateGet");
      }
      var pathParams = {};
      var queryParams = {
        'PaymentDate': opts['paymentDate'],
        'Currency': opts['currency'],
        'ReceivingCountryCode': opts['receivingCountryCode'],
        'SendingCountryCode': opts['sendingCountryCode'],
        'BankPaymentScheme': opts['bankPaymentScheme']
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
      var returnType = _BankPaymentDeliveryDateViewModelValidResponsePackage.BankPaymentDeliveryDateViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/BankPayment/DeliveryDate', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiBankPaymentGetMT103Get operation.
     * @callback moduleapi/BankPaymentApi~apiBankPaymentGetMT103GetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetMT103ViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get MT103
     * Get MT103 for Currency Cloud by providing EITHER PaymentId or TerminalId.     Sample requests:        GET /api/BankPayment/GetMT103?PaymentId&#x3D;770777ff-cdac-4643-bdea-8d91e0e6adbd            GET /api/BankPayment/GetMT103?TerminalId&#x3D;CC 20305
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.paymentId (GUID). This can be retrieved from any of Bank Payment Statement APIs, look for the transactionId.  If this is supplied, don&#x27;t also provide TerminalId.
     * @param {String} opts.terminalId (Format: CC 21234). This can be retrieved from /api/Account/{Id}/Transactions (TransactionHistory), look for terminalId.  If this is supplied, don&#x27;t also provide PaymentId.
     * @param {module:api/BankPaymentApi~apiBankPaymentGetMT103GetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiBankPaymentGetMT103Get",
    value: function apiBankPaymentGetMT103Get(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiBankPaymentGetMT103Get");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiBankPaymentGetMT103Get");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiBankPaymentGetMT103Get");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiBankPaymentGetMT103Get");
      }
      var pathParams = {};
      var queryParams = {
        'PaymentId': opts['paymentId'],
        'TerminalId': opts['terminalId']
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
      var returnType = _GetMT103ViewModelValidResponsePackage.GetMT103ViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/BankPayment/GetMT103', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiBankPaymentIdCancelRecurringPatch operation.
     * @callback moduleapi/BankPaymentApi~apiBankPaymentIdCancelRecurringPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BankPaymentCancelRecurringViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel Recurring Transfer
     * Cancel recurring payment transactions which are belonging to a SettingId.   SettingId is returned when a recurring payment is created.    Sample request:                    PATCH /api/BankPayment/400000000000/CancelRecurring      {          \&quot;settingId\&quot;: \&quot;123234\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/BankPaymentCancelRecurringBindingModel} opts.body 
     * @param {module:api/BankPaymentApi~apiBankPaymentIdCancelRecurringPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiBankPaymentIdCancelRecurringPatch",
    value: function apiBankPaymentIdCancelRecurringPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiBankPaymentIdCancelRecurringPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiBankPaymentIdCancelRecurringPatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiBankPaymentIdCancelRecurringPatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiBankPaymentIdCancelRecurringPatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiBankPaymentIdCancelRecurringPatch");
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
      var returnType = _BankPaymentCancelRecurringViewModelValidResponsePackage.BankPaymentCancelRecurringViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/BankPayment/{Id}/CancelRecurring', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiBankPaymentIdOneOffPaymentPost operation.
     * @callback moduleapi/BankPaymentApi~apiBankPaymentIdOneOffPaymentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BankPaymentViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bank Transfer
     * Send funds from a card/account to a an external bank account via FasterPayments, SWIFT and SEPA.     Each Payment, needs Account Identifier and Creditor Bank Identifier of the Creditor.   For country and currency specific information please call BankPaymentParameters API which will return the full list of required fields for each country / currency.        Getting the required parameters for GBP payment in GB you can call:            GET /api/BankPayment/Parameters?currency&#x3D;GBP&amp;receivingCountryCode&#x3D;GB&amp;sendingCountryCode&#x3D;GB        Payment scheme values:        • FasterPayment                 &#x3D; 1 (depreciated)      • Sepa / DomesticCreditTransfer &#x3D; 2      • Swift / Priority              &#x3D; 3      • Regular Bank transfer / Local &#x3D; 4 (Slow)      • FasterPayments                &#x3D; 5      • CurrencyCloud Priority        &#x3D; 6 (Only used to redirect EUR payments through SWIFT instead of SEPA)      • CurrencyCloud Regular         &#x3D; 7 (Only used to redirect EUR payments through SWIFT instead of SEPA)        For example:  Creating a GBP Payment with in the GB:        BankIdentifier should be populated with Sort Code      AccountIdentifier should be populate with Account Number      Payment scheme needs to be 5.    Creating a EUR Payment with in SEPA countries:        BankIdentifier should be populated with BIC      AccountIdentifier should be populate with IBAN    Creating a USD Payment in the US:        BankIdentifier should be populated ABA Routing Code      AccountIdentifier should be populate with Account Number    Creating a CAD Payment, only 3 or 4 can be used as payment scheme&#x27;s.        BankIdentifier should be populated with Swift Code      AccountIdentifier should be populate with Account Number      Payment scheme needs to be 3 or 4. Payment scheme 4 also needs Bank Identifier 2.        EUR to EUR payments within SEPA Countries will pass through sepa.   If type 6 or 7 is entered, then a Currency Cloud EUR payment is performed instead.   While applying the new schema payments, validations must abide by the processor&#x27;s validation.    Payment Scheme type 6 must abide by the Priority Validations(type 3) while payment scheme 7 must abide with Regular Validations (type 4).    If Payee Id is known, it can be included in the request and the creditor details will not be mandatory,  else creditor details will be mandatory    NOTE: If PayeeId is not provided, FirstName and Lastname are required.        {          \&quot;payeeId\&quot;: \&quot;A84E1FE8-1234-1234-1234-DA7699183FA9\&quot;      }     Creditor type values:            • Organisation  &#x3D; 0      • Single Person &#x3D; 1    Note: Payment Amounts are of type long and use minor currency units, example below (in pence not pounds).      Sample request:                    POST /api/BankPayment/400000000000/OneOffPayment       {             \&quot;firstName\&quot;: \&quot;John\&quot;,          \&quot;lastName\&quot;: \&quot;Test\&quot;,          \&quot;countryCode\&quot;: \&quot;GB\&quot;,          \&quot;addressLine1\&quot;: \&quot;Test Address\&quot;,          \&quot;addressLine2\&quot;: \&quot;\&quot;,          \&quot;currency\&quot;: \&quot;GBP\&quot;,          \&quot;accountIdentifier\&quot;: \&quot;00759719\&quot;,          \&quot;bankIdentifier\&quot;: \&quot;137224\&quot;,          \&quot;paymentAmount\&quot;: 1000       }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/BankPaymentBindingModelV2} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/BankPaymentApi~apiBankPaymentIdOneOffPaymentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiBankPaymentIdOneOffPaymentPost",
    value: function apiBankPaymentIdOneOffPaymentPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiBankPaymentIdOneOffPaymentPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiBankPaymentIdOneOffPaymentPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiBankPaymentIdOneOffPaymentPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiBankPaymentIdOneOffPaymentPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiBankPaymentIdOneOffPaymentPost");
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
      var returnType = _BankPaymentViewModelValidResponsePackage.BankPaymentViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/BankPayment/{Id}/OneOffPayment', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiBankPaymentIdRecurringPaymentsGet operation.
     * @callback moduleapi/BankPaymentApi~apiBankPaymentIdRecurringPaymentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BankPaymentGetRecurringPaymentsViewModelV2ValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recurring Transfers
     * List all active recurring transfers of a cardholder.  The return contains each recurring setting, and the scheduled payment transactions  for each setting    Sample request:                    GET /api/BankPayment/400000000000/RecurringPayments
     * @param {String} id Cardholder Id
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/BankPaymentApi~apiBankPaymentIdRecurringPaymentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiBankPaymentIdRecurringPaymentsGet",
    value: function apiBankPaymentIdRecurringPaymentsGet(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiBankPaymentIdRecurringPaymentsGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiBankPaymentIdRecurringPaymentsGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiBankPaymentIdRecurringPaymentsGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiBankPaymentIdRecurringPaymentsGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiBankPaymentIdRecurringPaymentsGet");
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
      var returnType = _BankPaymentGetRecurringPaymentsViewModelV2ValidResponsePackage.BankPaymentGetRecurringPaymentsViewModelV2ValidResponsePackage;
      return this.apiClient.callApi('/api/BankPayment/{Id}/RecurringPayments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiBankPaymentIdRecurringPost operation.
     * @callback moduleapi/BankPaymentApi~apiBankPaymentIdRecurringPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BankPaymentRecurringViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recurring Bank Transfer
     * Create a recurring bank transfer. One of more transfers will be scheduled.     Dates of further payment transaction is determined by \&quot;PaymentFrequencyMethod\&quot;. See the description of PaymentFrequencyMethod for further details.     To set up the transfers Account Identifier and Creditor Bank Identifier of the Creditor is needed.   For country and currency specific information please call BankPaymentParameters API which will return the full list of required fields for each country / currency.        Getting the required parameters for GBP payment in GB you can call:            GET /api/BankPayment/Parameters?currency&#x3D;GBP&amp;receivingCountryCode&#x3D;GB&amp;sendingCountryCode&#x3D;GB    For example:  Creating a GBP Payment with in the GB:        BankIdentifier should be populated with Sort Code      AccountIdentifier should be populate with Account Number      Payment scheme needs to be 1.    Creating a EUR Payment with in SEPA countries:        BankIdentifier should be populated with BIC      AccountIdentifier should be populate with IBAN    Creating a USD Payment in the US:        BankIdentifier should be populated ABA Routing Code      AccountIdentifier should be populate with Account Number    Creating a CAD Payment, only 3 or 4 can be used as payment scheme&#x27;s.        BankIdentifier should be populated with Swift Code      AccountIdentifier should be populate with Account Number      Payment scheme needs to be 3 or 4. Payment scheme 4 also needs Bank Identifier 2.       For both Creditor and Debtor, there are 3 Amounts, First Payment Amount, Further Payments Amount, Final Payments Amount, when &#x27;PaymentFrequencyMethod&#x27; is either &#x27;Amount&#x27; {2} or &#x27;Date&#x27; {3}. If Further Payments amount and/or Final Payments amount are left empty, by default the First Payment Amount will be used.    To submit a single future dated payment use PaymentFrequencyMethod &#x3D; 2 (Amount) and NumberOfFurtherPayments &#x3D; 0    When PaymentFrequencyMethod &#x3D; 3 (Date) is used, then a a first and a final date must be specified, which are at least “Frequency” days apart for each other, (or N * Frequency).    When PaymentFrequencyMethod &#x3D; 4 (CustomDate) is used, &#x27;CustomDates&#x27; must be specified which is a list of json date and amount object.    Sample request:                    POST /api/BankPayment/400000000000/Recurring       {             \&quot;firstName\&quot;: \&quot;John\&quot;,          \&quot;lastName\&quot;: \&quot;Test\&quot;,          \&quot;countryCode\&quot;: \&quot;GB\&quot;,          \&quot;paymentFrequencyMethod\&quot;: 3,          \&quot;firstPaymentDate\&quot;: \&quot;2020-05-22\&quot;,          \&quot;frequency\&quot;: 7,          \&quot;finalPaymentDate\&quot;: \&quot;2020-05-29\&quot;,          \&quot;firstPaymentAmount\&quot;: 2,          \&quot;finalPaymentAmount\&quot;: 2,          \&quot;furtherPaymentsAmount\&quot;: 5,          \&quot;numberOfFurtherPayments\&quot;: 3,          \&quot;currency\&quot;: \&quot;GBP\&quot;,          \&quot;bankName\&quot;: \&quot;Barclays\&quot;,          \&quot;reference\&quot;: \&quot;lpbkeqvbpzegjhn8mf6pg\&quot;,          \&quot;accountIdentifier\&quot;: \&quot;00123456\&quot;,          \&quot;bankIdentifier\&quot;: \&quot;12345678\&quot;,          \&quot;accountType\&quot;: \&quot;select\&quot;,          \&quot;addressLine1\&quot;: \&quot;Test Address\&quot;,          \&quot;addressLine2\&quot;: \&quot;\&quot;,          \&quot;city\&quot;: \&quot;creditorcity\&quot;,          \&quot;state\&quot;: \&quot;creditorstate\&quot;,          \&quot;postCode\&quot;: \&quot;TST752E\&quot;,          \&quot;bankPaymentScheme\&quot;: 1,      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/BankPaymentRecurringBindingModelV2} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/BankPaymentApi~apiBankPaymentIdRecurringPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiBankPaymentIdRecurringPost",
    value: function apiBankPaymentIdRecurringPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiBankPaymentIdRecurringPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiBankPaymentIdRecurringPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiBankPaymentIdRecurringPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiBankPaymentIdRecurringPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiBankPaymentIdRecurringPost");
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
      var returnType = _BankPaymentRecurringViewModelValidResponsePackage.BankPaymentRecurringViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/BankPayment/{Id}/Recurring', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiBankPaymentIdStatementByIdGet operation.
     * @callback moduleapi/BankPaymentApi~apiBankPaymentIdStatementByIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BankPaymentStatementByIdViewModelV2ValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bank Transaction Details
     * Returns the details of a specific Bank Transfer from the reference provided.    The transaction ID can be found under &#x27;terminalID&#x27; of the Transaction History function.        SI - Sepa Incoming      SO - Sepa Outgoing      BT - Barclays Incoming      BO - Barclays Outgoing      CC - CurrencyCloud Outgoing    Example: BO 856    Sample request:                    GET /api/BankPayment/400000000000/StatementById?StatementItemId&#x3D;856&amp;InwardOutward&#x3D;1&amp;Processor&#x3D;0
     * @param {String} id Cardholder id
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.statementItemId Unique Reference Code for tranaction
     * @param {module:model/BankPaymentDirection} opts.inwardOutward The direction of transactions returned:         Inward &#x3D; 0,       Outward &#x3D; 1    If not specified default is 0 - Inward
     * @param {module:model/BankPaymentProvider} opts.processor Filters transactions returned by method of processing:        Barclays (GBP/Faster Payment) &#x3D; 0      Sepa (EUR) &#x3D; 1      CurrencyCloud (International/SWIFT) &#x3D; 2
     * @param {module:api/BankPaymentApi~apiBankPaymentIdStatementByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiBankPaymentIdStatementByIdGet",
    value: function apiBankPaymentIdStatementByIdGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiBankPaymentIdStatementByIdGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiBankPaymentIdStatementByIdGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiBankPaymentIdStatementByIdGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiBankPaymentIdStatementByIdGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiBankPaymentIdStatementByIdGet");
      }
      var pathParams = {
        'Id': id
      };
      var queryParams = {
        'StatementItemId': opts['statementItemId'],
        'InwardOutward': opts['inwardOutward'],
        'Processor': opts['processor']
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
      var returnType = _BankPaymentStatementByIdViewModelV2ValidResponsePackage.BankPaymentStatementByIdViewModelV2ValidResponsePackage;
      return this.apiClient.callApi('/api/BankPayment/{Id}/StatementById', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiBankPaymentIdStatementGet operation.
     * @callback moduleapi/BankPaymentApi~apiBankPaymentIdStatementGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BankPaymentStatementViewModelV2ValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bank Transfer Statement
     * Returns all bank transfers for a specific Cardholder between the dates provided.    Sample request:                    GET /api/BankPayment/400000000000/Statement?StartDate&#x3D;2000-01-01&amp;EndDate&#x3D;2018-03-01&amp;InwardOutward&#x3D;1&amp;Processor&#x3D;2
     * @param {String} id Cardholder Id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Start date of transactions, field is required, YYYY-MM-DD
     * @param {String} opts.endDate End date of transactions, field is required, YYYY-MM-DD
     * @param {module:model/BankPaymentDirection} opts.inwardOutward The direction of the Bank Payment transations you wish to view         Inward &#x3D; 0       Outward &#x3D; 1      All &#x3D; 2    If not specified default is 0 - Inward
     * @param {module:model/BankPaymentProvider} opts.processor Filters transactions returned by method of processing. If unspecified, this filter is not applied:        Barclays(GBP/Faster Payment) &#x3D; 0      Sepa(EUR) &#x3D; 1      CurrencyCloud(International/SWIFT) &#x3D; 2
     * @param {module:api/BankPaymentApi~apiBankPaymentIdStatementGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiBankPaymentIdStatementGet",
    value: function apiBankPaymentIdStatementGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiBankPaymentIdStatementGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiBankPaymentIdStatementGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiBankPaymentIdStatementGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiBankPaymentIdStatementGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiBankPaymentIdStatementGet");
      }
      var pathParams = {
        'Id': id
      };
      var queryParams = {
        'StartDate': opts['startDate'],
        'EndDate': opts['endDate'],
        'InwardOutward': opts['inwardOutward'],
        'Processor': opts['processor']
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
      var returnType = _BankPaymentStatementViewModelV2ValidResponsePackage.BankPaymentStatementViewModelV2ValidResponsePackage;
      return this.apiClient.callApi('/api/BankPayment/{Id}/Statement', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiBankPaymentIdUpdatePatch operation.
     * @callback moduleapi/BankPaymentApi~apiBankPaymentIdUpdatePatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BankPaymentUpdateViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update recurring Bank Transfer
     * Update a recurring bank transfer. One of more transfers will be scheduled.     Dates of further payment transaction is determined by \&quot;PaymentFrequencyMethod\&quot;. See the description of PaymentFrequencyMethod for further details.     To set up the transfers Account Identifier and Creditor Bank Identifier of the Creditor is needed.   For country and currency specific information please call BankPaymentParameters API which will return the full list of required fields for each country / currency.        Getting the required parameters for GBP payment in GB you can call:            GET /api/BankPayment/Parameters?currency&#x3D;GBP&amp;receivingCountryCode&#x3D;GB&amp;sendingCountryCode&#x3D;GB    For example:  Creating a GBP Payment with in the GB:        BankIdentifier should be populated with Sort Code      AccountIdentifier should be populate with Account Number      Payment scheme needs to be 1.    Creating a EUR Payment with in SEPA countries:        BankIdentifier should be populated with BIC      AccountIdentifier should be populate with IBAN    Creating a USD Payment in the US:        BankIdentifier should be populated ABA Routing Code      AccountIdentifier should be populate with Account Number    Creating a CAD Payment, only 3 or 4 can be used as payment scheme&#x27;s.        BankIdentifier should be populated with Swift Code      AccountIdentifier should be populate with Account Number      Payment scheme needs to be 3 or 4. Payment scheme 4 also needs Bank Identifier 2.    &#x27;PaymentScheme&#x27;, amount requirements:        option 1 &#x3D; Amount (Creditor) + Currency (Creditor)      option 2 &#x3D; Amount (Creditor) + Currency (Creditor) + Debit Currency      option 3 &#x3D; Currency (Creditor) + Debit Amount + Debit Currency       For both Creditor and Debtor, there are 3 Amounts, First Payment Amount, Further Payments Amount, Final Payments Amount, when &#x27;PaymentFrequencyMethod&#x27; is either &#x27;Amount&#x27; {2} or &#x27;Date&#x27; {3}. If Further Payments amount and/or Final Payments amount are left empty, by default the First Payment Amount will be used.    SettingId is needed to be able to update the recurring bank payment.    Note: Payment Amounts are of type long and use minor currency units, example below (in pence not pounds).     Sample request:                    POST /api/BankPayment/400000000000/Update       {             \&quot;firstName\&quot;: \&quot;John\&quot;,          \&quot;lastName\&quot;: \&quot;Test\&quot;,          \&quot;countryCode\&quot;: \&quot;GB\&quot;,          \&quot;paymentFrequencyMethod\&quot;: 3,          \&quot;firstPaymentDate\&quot;: \&quot;2020-05-22\&quot;,          \&quot;frequency\&quot;: 7,          \&quot;finalPaymentDate\&quot;: \&quot;2020-05-29\&quot;,          \&quot;firstPaymentAmount\&quot;: 200,          \&quot;finalPaymentAmount\&quot;: 200,          \&quot;furtherPaymentsAmount\&quot;: 500,          \&quot;numberOfFurtherPayments\&quot;: 3,          \&quot;currency\&quot;: \&quot;GBP\&quot;,          \&quot;bankName\&quot;: \&quot;Barclays\&quot;,          \&quot;reference\&quot;: \&quot;lpbkeqvbpzegjhn8mf6pg\&quot;,          \&quot;accountIdentifier\&quot;: \&quot;00759719\&quot;,          \&quot;bankIdentifier\&quot;: \&quot;45617894\&quot;,          \&quot;accountType\&quot;: \&quot;select\&quot;,          \&quot;addressLine1\&quot;: \&quot;Test Address\&quot;,          \&quot;addressLine2\&quot;: \&quot;\&quot;,          \&quot;city\&quot;: \&quot;creditorcity\&quot;,          \&quot;state\&quot;: \&quot;creditorstate\&quot;,          \&quot;postCode\&quot;: \&quot;TST752E\&quot;,          \&quot;bankPaymentScheme\&quot;: 1,          \&quot;settingId\&quot;: \&quot;1234\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/BankPaymentUpdateBindingModelV2} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/BankPaymentApi~apiBankPaymentIdUpdatePatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiBankPaymentIdUpdatePatch",
    value: function apiBankPaymentIdUpdatePatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiBankPaymentIdUpdatePatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiBankPaymentIdUpdatePatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiBankPaymentIdUpdatePatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiBankPaymentIdUpdatePatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiBankPaymentIdUpdatePatch");
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
      var returnType = _BankPaymentUpdateViewModelValidResponsePackage.BankPaymentUpdateViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/BankPayment/{Id}/Update', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiBankPaymentParametersGet operation.
     * @callback moduleapi/BankPaymentApi~apiBankPaymentParametersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BankPaymentParametersViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bank Transfer Parameters
     * Get the required parameters for the bank payment API by target country/currency and source country.    If the receiving country / currency supports multiple payment schemes, the response will contain multiple list,   where each list describes a different payment schemes (i.e.: priority, local) and creditor types (i.e.: personal, organizational account)    Sample request:                    GET /api/BankPayment/Parameters?currency&#x3D;GBP&amp;receivingCountryCode&#x3D;GB&amp;sendingCountryCode&#x3D;GB
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.currency Payment Currency ISO-4217 3 character currency code
     * @param {String} opts.receivingCountryCode Country code (2 letter) of the receiving country
     * @param {String} opts.sendingCountryCode Country code (2 letter) of the seding country
     * @param {module:api/BankPaymentApi~apiBankPaymentParametersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiBankPaymentParametersGet",
    value: function apiBankPaymentParametersGet(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiBankPaymentParametersGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiBankPaymentParametersGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiBankPaymentParametersGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiBankPaymentParametersGet");
      }
      var pathParams = {};
      var queryParams = {
        'Currency': opts['currency'],
        'ReceivingCountryCode': opts['receivingCountryCode'],
        'SendingCountryCode': opts['sendingCountryCode']
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
      var returnType = _BankPaymentParametersViewModelValidResponsePackage.BankPaymentParametersViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/BankPayment/Parameters', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiBankPaymentValidateBicGet operation.
     * @callback moduleapi/BankPaymentApi~apiBankPaymentValidateBicGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateBicViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Bic
     * Validate bic.    Sample request:        GET /api/BankPayment/ValidateBic?Bic&#x3D;1234
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.bic Bic to be validated.
     * @param {module:api/BankPaymentApi~apiBankPaymentValidateBicGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiBankPaymentValidateBicGet",
    value: function apiBankPaymentValidateBicGet(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiBankPaymentValidateBicGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiBankPaymentValidateBicGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiBankPaymentValidateBicGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiBankPaymentValidateBicGet");
      }
      var pathParams = {};
      var queryParams = {
        'Bic': opts['bic']
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
      var returnType = _ValidateBicViewModelValidResponsePackage.ValidateBicViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/BankPayment/ValidateBic', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiBankPaymentValidateInstantBicGet operation.
     * @callback moduleapi/BankPaymentApi~apiBankPaymentValidateInstantBicGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateBicViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Instant Bic
     * Validate instant bic.    Sample request:        GET /api/BankPayment/ValidateInstantBic?Bic&#x3D;1234
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.bic Bic to be validated.
     * @param {module:api/BankPaymentApi~apiBankPaymentValidateInstantBicGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiBankPaymentValidateInstantBicGet",
    value: function apiBankPaymentValidateInstantBicGet(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiBankPaymentValidateInstantBicGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiBankPaymentValidateInstantBicGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiBankPaymentValidateInstantBicGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiBankPaymentValidateInstantBicGet");
      }
      var pathParams = {};
      var queryParams = {
        'Bic': opts['bic']
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
      var returnType = _ValidateBicViewModelValidResponsePackage.ValidateBicViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/BankPayment/ValidateInstantBic', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return BankPaymentApi;
}();
exports.BankPaymentApi = BankPaymentApi;