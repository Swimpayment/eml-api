"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountApi = void 0;
var _ApiClient = require("../ApiClient");
var _AccountCurrenciesViewModelValidResponsePackage = require("../model/AccountCurrenciesViewModelValidResponsePackage");
var _AccountDetailsViewModelValidResponsePackage = require("../model/AccountDetailsViewModelValidResponsePackage");
var _AccountIdV2BindingModel = require("../model/AccountIdV2BindingModel");
var _AccountIdV2ViewModelValidResponsePackage = require("../model/AccountIdV2ViewModelValidResponsePackage");
var _AccountLinkPXSXBindingModel = require("../model/AccountLinkPXSXBindingModel");
var _AccountLinkPXSXViewModelValidResponsePackage = require("../model/AccountLinkPXSXViewModelValidResponsePackage");
var _AccountUpdateBindingModel = require("../model/AccountUpdateBindingModel");
var _AccountUpdateViewModelValidResponsePackage = require("../model/AccountUpdateViewModelValidResponsePackage");
var _AddCurrencyBindingModel = require("../model/AddCurrencyBindingModel");
var _AddCurrencyViewModelValidResponsePackage = require("../model/AddCurrencyViewModelValidResponsePackage");
var _AllowRegistrationBindingModel = require("../model/AllowRegistrationBindingModel");
var _AllowRegistrationViewModelValidResponsePackage = require("../model/AllowRegistrationViewModelValidResponsePackage");
var _BalanceV2ViewModelValidResponsePackage = require("../model/BalanceV2ViewModelValidResponsePackage");
var _CardUsageViewModelValidResponsePackage = require("../model/CardUsageViewModelValidResponsePackage");
var _CardholderLevelLimitsV2ViewModelValidResponsePackage = require("../model/CardholderLevelLimitsV2ViewModelValidResponsePackage");
var _CardholderToCardholderBindingModelV = require("../model/CardholderToCardholderBindingModelV2");
var _CardholderToCardholderViewModelV2ValidResponsePackage = require("../model/CardholderToCardholderViewModelV2ValidResponsePackage");
var _ChangeStatusBindingModel = require("../model/ChangeStatusBindingModel");
var _ChangeStatusViewModelValidResponsePackage = require("../model/ChangeStatusViewModelValidResponsePackage");
var _CheckAttemptedRegistrationViewModelValidResponsePackage = require("../model/CheckAttemptedRegistrationViewModelValidResponsePackage");
var _CheckLoadViewModelV2ValidResponsePackage = require("../model/CheckLoadViewModelV2ValidResponsePackage");
var _ConditionCheckBindingModel = require("../model/ConditionCheckBindingModel");
var _ConditionCheckViewModelValidResponsePackage = require("../model/ConditionCheckViewModelValidResponsePackage");
var _ConditionGroupGetViewModelValidResponsePackage = require("../model/ConditionGroupGetViewModelValidResponsePackage");
var _ConditionGroupInsertBindingModel = require("../model/ConditionGroupInsertBindingModel");
var _ConditionGroupInsertViewModelValidResponsePackage = require("../model/ConditionGroupInsertViewModelValidResponsePackage");
var _FXQuoteBindingModelV = require("../model/FXQuoteBindingModelV2");
var _FXQuoteViewModelV2ValidResponsePackage = require("../model/FXQuoteViewModelV2ValidResponsePackage");
var _FXTradeV2BindingModel = require("../model/FXTradeV2BindingModel");
var _FXTradeV2ViewModelValidResponsePackage = require("../model/FXTradeV2ViewModelValidResponsePackage");
var _FeeBindingModelV = require("../model/FeeBindingModelV2");
var _FeeViewModelV2ValidResponsePackage = require("../model/FeeViewModelV2ValidResponsePackage");
var _ForgotPasswordViewModelValidResponsePackage = require("../model/ForgotPasswordViewModelValidResponsePackage");
var _FullLoadsV2ViewModelValidResponsePackage = require("../model/FullLoadsV2ViewModelValidResponsePackage");
var _GetCardNumberViewModelValidResponsePackage = require("../model/GetCardNumberViewModelValidResponsePackage");
var _GetCvvBindingModel = require("../model/GetCvvBindingModel");
var _GetCvvViewModelValidResponsePackage = require("../model/GetCvvViewModelValidResponsePackage");
var _GetExpiryDateBindingModel = require("../model/GetExpiryDateBindingModel");
var _GetExpiryDateViewModelValidResponsePackage = require("../model/GetExpiryDateViewModelValidResponsePackage");
var _GetNumberOfDocumentsViewModelValidResponsePackage = require("../model/GetNumberOfDocumentsViewModelValidResponsePackage");
var _GetSpendControlViewModelValidResponsePackage = require("../model/GetSpendControlViewModelValidResponsePackage");
var _GetStatusViewModelValidResponsePackage = require("../model/GetStatusViewModelValidResponsePackage");
var _GetToggleIbanViewModelValidResponsePackage = require("../model/GetToggleIbanViewModelValidResponsePackage");
var _InquiryV2ViewModelValidResponsePackage = require("../model/InquiryV2ViewModelValidResponsePackage");
var _InvalidResponsePackage = require("../model/InvalidResponsePackage");
var _IssueBindingModelV = require("../model/IssueBindingModelV2");
var _IssueViewModelV2ValidResponsePackage = require("../model/IssueViewModelV2ValidResponsePackage");
var _KYCUploadDocumentsBindingModel = require("../model/KYCUploadDocumentsBindingModel");
var _KYCUploadDocumentsViewModelValidResponsePackage = require("../model/KYCUploadDocumentsViewModelValidResponsePackage");
var _KycCodeDetailsViewModelValidResponsePackage = require("../model/KycCodeDetailsViewModelValidResponsePackage");
var _KycGenerateCodeViewModelValidResponsePackage = require("../model/KycGenerateCodeViewModelValidResponsePackage");
var _KycLinkBindingModel = require("../model/KycLinkBindingModel");
var _KycLinkViewModelValidResponsePackage = require("../model/KycLinkViewModelValidResponsePackage");
var _KycRedeemCodeViewModelValidResponsePackage = require("../model/KycRedeemCodeViewModelValidResponsePackage");
var _KycResendCodeViewModelValidResponsePackage = require("../model/KycResendCodeViewModelValidResponsePackage");
var _LoadsV2ViewModelValidResponsePackage = require("../model/LoadsV2ViewModelValidResponsePackage");
var _LockUnlockBindingModel = require("../model/LockUnlockBindingModel");
var _LockUnlockViewModelValidResponsePackage = require("../model/LockUnlockViewModelValidResponsePackage");
var _MccBlockBindingModel = require("../model/MccBlockBindingModel");
var _MccBlockViewModelValidResponsePackage = require("../model/MccBlockViewModelValidResponsePackage");
var _MccViewModelValidResponsePackage = require("../model/MccViewModelValidResponsePackage");
var _NominatedPersonBindingModel = require("../model/NominatedPersonBindingModel");
var _NominatedPersonGetViewModelValidResponsePackage = require("../model/NominatedPersonGetViewModelValidResponsePackage");
var _NominatedPersonPutViewModelValidResponsePackage = require("../model/NominatedPersonPutViewModelValidResponsePackage");
var _PINReminderViewModelValidResponsePackage = require("../model/PINReminderViewModelValidResponsePackage");
var _PayeesViewModelValidResponsePackage = require("../model/PayeesViewModelValidResponsePackage");
var _PhysicalCardBindingModel = require("../model/PhysicalCardBindingModel");
var _PhysicalCardViewModelValidResponsePackage = require("../model/PhysicalCardViewModelValidResponsePackage");
var _PinBindingModel = require("../model/PinBindingModel");
var _PinViewModelValidResponsePackage = require("../model/PinViewModelValidResponsePackage");
var _PurchaseOnUsBindingModelV = require("../model/PurchaseOnUsBindingModelV2");
var _PurchaseOnUsViewModelValidResponsePackage = require("../model/PurchaseOnUsViewModelValidResponsePackage");
var _RegisterClientBindingModel = require("../model/RegisterClientBindingModel");
var _RegisterViewModelValidResponsePackage = require("../model/RegisterViewModelValidResponsePackage");
var _ReissueBindingModel = require("../model/ReissueBindingModel");
var _ReissueV2ViewModelValidResponsePackage = require("../model/ReissueV2ViewModelValidResponsePackage");
var _RemoveLoadLimitViewModelValidResponsePackage = require("../model/RemoveLoadLimitViewModelValidResponsePackage");
var _ReplaceBindingModel = require("../model/ReplaceBindingModel");
var _ReplaceViewModelV2ValidResponsePackage = require("../model/ReplaceViewModelV2ValidResponsePackage");
var _ResetPasswordBindingModel = require("../model/ResetPasswordBindingModel");
var _ResetPasswordViewModelValidResponsePackage = require("../model/ResetPasswordViewModelValidResponsePackage");
var _RetrieveLatestCardHolderViewModelValidResponsePackage = require("../model/RetrieveLatestCardHolderViewModelValidResponsePackage");
var _RetrieveLatestCardViewModelValidResponsePackage = require("../model/RetrieveLatestCardViewModelValidResponsePackage");
var _SecondaryAccountViewModelValidResponsePackage = require("../model/SecondaryAccountViewModelValidResponsePackage");
var _SensitiveDataTokenBindingModel = require("../model/SensitiveDataTokenBindingModel");
var _SensitiveDataTokenViewModelValidResponsePackage = require("../model/SensitiveDataTokenViewModelValidResponsePackage");
var _SepaTransactionCountBindingModelValidResponsePackage = require("../model/SepaTransactionCountBindingModelValidResponsePackage");
var _SetCardholderLevelLimitBindingModelV = require("../model/SetCardholderLevelLimitBindingModelV2");
var _SetCardholderLevelLimitsViewModelValidResponsePackage = require("../model/SetCardholderLevelLimitsViewModelValidResponsePackage");
var _SpendControlBindingModel = require("../model/SpendControlBindingModel");
var _SpendControlViewModelValidResponsePackage = require("../model/SpendControlViewModelValidResponsePackage");
var _ToggleIbanBindingModel = require("../model/ToggleIbanBindingModel");
var _ToggleIbanViewModelValidResponsePackage = require("../model/ToggleIbanViewModelValidResponsePackage");
var _TradeBindingModelV = require("../model/TradeBindingModelV2");
var _TradeViewModelValidResponsePackage = require("../model/TradeViewModelValidResponsePackage");
var _TransactionsViewModelValidResponsePackage = require("../model/TransactionsViewModelValidResponsePackage");
var _TransferDetailsBindingModel = require("../model/TransferDetailsBindingModel");
var _TransferDetailsViewModelValidResponsePackage = require("../model/TransferDetailsViewModelValidResponsePackage");
var _UpgradeCardBindingModel = require("../model/UpgradeCardBindingModel");
var _UpgradeCardViewModelValidResponsePackage = require("../model/UpgradeCardViewModelValidResponsePackage");
var _ValidateLoginBindingModel = require("../model/ValidateLoginBindingModel");
var _ValidateLoginViewModelValidResponsePackage = require("../model/ValidateLoginViewModelValidResponsePackage");
var _ValidatePinBindingModel = require("../model/ValidatePinBindingModel");
var _ValidatePinViewModelValidResponsePackage = require("../model/ValidatePinViewModelValidResponsePackage");
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
* Account service.
* @module api/AccountApi
* @version 2.0
*/
var AccountApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AccountApi. 
  * @alias module:api/AccountApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function AccountApi(apiClient) {
    _classCallCheck(this, AccountApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the apiAccountAccountIdPost operation.
   * @callback moduleapi/AccountApi~apiAccountAccountIdPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AccountIdV2ViewModelValidResponsePackage{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Cardholder ID
   * Returns the Cardholder ID for a given Card Number (PAN).     When encryption key is provided the PAN should be encypted in the &#x27;CardNumber&#x27; field. At least one optional field must be passed as verification.    Sample request:        POST /api/Account/AccountId      {          \&quot;cardNumber\&quot;: \&quot;E59BF603B67BE8E91598543A8BC0E4966DDD0DD5DB716DDC2798CF31F86E806B\&quot;,          \&quot;phone\&quot;: \&quot;3446785236473\&quot;,          \&quot;dateOfBirth\&quot;: \&quot;1994-11-17\&quot;      }
   * @param {String} apiVersion 
   * @param {String} authorization Access token
   * @param {String} fMessageId Unique identifier
   * @param {String} fOrigin Origin of request
   * @param {Object} opts Optional parameters
   * @param {module:model/AccountIdV2BindingModel} opts.body 
   * @param {module:api/AccountApi~apiAccountAccountIdPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  _createClass(AccountApi, [{
    key: "apiAccountAccountIdPost",
    value: function apiAccountAccountIdPost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountAccountIdPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountAccountIdPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountAccountIdPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountAccountIdPost");
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
      var returnType = _AccountIdV2ViewModelValidResponsePackage.AccountIdV2ViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/AccountId', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountAccountLinkPXSXPost operation.
     * @callback moduleapi/AccountApi~apiAccountAccountLinkPXSXPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountLinkPXSXViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Secondary Card Link
     * Links together two accounts, one as primary and the other as secondary.    When creating new cards, UDF3 should always be SOLO and UDF4 should always be empty.    When cards are linked, the secondary card UDF3 will change to SXFR and UDF4 will contain a reference number to the primary card.                If the allowed of secondary cards will be more than one, UDF3 of the primary card will remain SOLO and UDF4 will remain empty.                When the maximum amount of secondary cards are reached, the UDF3 of the primary card is changed to PXFR and UDF4 will change to a reference number.    Each card will have an individual balance. Secondary cards can only be loaded through the primary card via Card2Card transfer.    Cards must be KYC {product type \&quot;2\&quot;} in order to be linked    Sample request:                    POST /api/Account/AccountLinkPXSX      {          \&quot;id\&quot;: \&quot;400000000000\&quot;,          \&quot;secondaryId\&quot;: \&quot;400000000000\&quot;      }
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/AccountLinkPXSXBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountAccountLinkPXSXPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountAccountLinkPXSXPost",
    value: function apiAccountAccountLinkPXSXPost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountAccountLinkPXSXPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountAccountLinkPXSXPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountAccountLinkPXSXPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountAccountLinkPXSXPost");
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
      var returnType = _AccountLinkPXSXViewModelValidResponsePackage.AccountLinkPXSXViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/AccountLinkPXSX', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountAllowRegistrationPost operation.
     * @callback moduleapi/AccountApi~apiAccountAllowRegistrationPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AllowRegistrationViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Allow Registration
     * Check the details that a client is trying to use before creating or updating a card.    Sample request:                    POST /api/Account/AllowRegistration      {          \&quot;issuingId\&quot;: 180631,          \&quot;bin\&quot;: \&quot;123654\&quot;,          \&quot;distributorCode\&quot;: \&quot;963\&quot;,          \&quot;registrationType\&quot;: 1      }
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/AllowRegistrationBindingModel} opts.body Route parameter for account id
     * @param {module:api/AccountApi~apiAccountAllowRegistrationPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountAllowRegistrationPost",
    value: function apiAccountAllowRegistrationPost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountAllowRegistrationPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountAllowRegistrationPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountAllowRegistrationPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountAllowRegistrationPost");
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
      var returnType = _AllowRegistrationViewModelValidResponsePackage.AllowRegistrationViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/AllowRegistration', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountCardholderToCardholderTransferPost operation.
     * @callback moduleapi/AccountApi~apiAccountCardholderToCardholderTransferPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CardholderToCardholderViewModelV2ValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Card 2 Card
     * Transfers funds between two cards on the same program.  Both cards must have passed the KYC process.    Funds can only be transferred between cards:     - with the same currency(only applicable for multicurrency programs)     - issued using the same DC     - fromCard status must not be \&quot;C\&quot; (Phone Number Verification)     - toCard status must not be \&quot;C\&quot; (Phone Number Verification) or \&quot;E\&quot; (Expired) or 9 (Closed)    Sample request:        POST /api/Account/CardholderToCardholderTransfer      {          \&quot;id\&quot;: \&quot;400000000000\&quot;,          \&quot;toId\&quot;: \&quot;400000000000\&quot;,          \&quot;amount\&quot;: 1000,          \&quot;currencyCode\&quot;: \&quot;GBP\&quot;,          \&quot;terminalOwner\&quot;: \&quot;TOwn\&quot;,          \&quot;terminalLocation\&quot;: \&quot;TLoc\&quot;,          \&quot;terminalCity\&quot;: \&quot;TCity\&quot;,          \&quot;terminalState\&quot;: \&quot;TState\&quot;,          \&quot;terminalId\&quot;: \&quot;TId\&quot;,          \&quot;countryCode\&quot;: \&quot;ES\&quot;,          \&quot;description\&quot;: \&quot;Card To Card Transfer\&quot;,          \&quot;feeCode\&quot;: \&quot;\&quot;      }
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/CardholderToCardholderBindingModelV2} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountCardholderToCardholderTransferPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountCardholderToCardholderTransferPost",
    value: function apiAccountCardholderToCardholderTransferPost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountCardholderToCardholderTransferPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountCardholderToCardholderTransferPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountCardholderToCardholderTransferPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountCardholderToCardholderTransferPost");
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
      var returnType = _CardholderToCardholderViewModelV2ValidResponsePackage.CardholderToCardholderViewModelV2ValidResponsePackage;
      return this.apiClient.callApi('/api/Account/CardholderToCardholderTransfer', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountConditionGroupGet operation.
     * @callback moduleapi/AccountApi~apiAccountConditionGroupGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConditionGroupGetViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Condition Group
     * Gets the list of condition configuration groups have set up for a given Bin/DC combination    Sample request:      GET /api/Account/ConditionGroup?Bin&#x3D;{{BIN}}&amp;DC&#x3D;{{DC}}
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.bin Assigned by PFS. It is the first 8 digits of the cards on your program.
     * @param {String} opts.DC The unique identifier assigned by PFS, to your program
     * @param {module:api/AccountApi~apiAccountConditionGroupGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountConditionGroupGet",
    value: function apiAccountConditionGroupGet(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountConditionGroupGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountConditionGroupGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountConditionGroupGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountConditionGroupGet");
      }
      var pathParams = {};
      var queryParams = {
        'Bin': opts['bin'],
        'DC': opts['DC']
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
      var returnType = _ConditionGroupGetViewModelValidResponsePackage.ConditionGroupGetViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/ConditionGroup', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountConditionGroupPost operation.
     * @callback moduleapi/AccountApi~apiAccountConditionGroupPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConditionGroupInsertViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert Condition Group
     * Insert a ConditionGroup for the ginven Bin/DC combination    Throws exception if the group with the given name has already exists.    Sample request:      POST /api/Account/ConditionGroup      {          \&quot;Bin\&quot; : \&quot;{{BIN}}\&quot;,          \&quot;DC\&quot; : \&quot;{{DC}}\&quot;,          \&quot;Name\&quot; : \&quot;{{GroupName}}\&quot;,          \&quot;Configurations\&quot; &#x3D; [              {                  \&quot;Condition\&quot;: \&quot;BLOCKATM\&quot;,                  \&quot;Action\&quot;: \&quot;ALLOW\&quot;,                  \&quot;BlockType\&quot;: null              },              {               \&quot;Condition\&quot;: \&quot;ENROLL3DS\&quot;,                  \&quot;Action\&quot;: \&quot;DENY\&quot;,                  \&quot;BlockType\&quot;: null              }          ]      }
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/ConditionGroupInsertBindingModel} opts.body 
     * @param {module:api/AccountApi~apiAccountConditionGroupPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountConditionGroupPost",
    value: function apiAccountConditionGroupPost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountConditionGroupPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountConditionGroupPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountConditionGroupPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountConditionGroupPost");
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
      var returnType = _ConditionGroupInsertViewModelValidResponsePackage.ConditionGroupInsertViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/ConditionGroup', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountFXQuotePost operation.
     * @callback moduleapi/AccountApi~apiAccountFXQuotePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FXQuoteViewModelV2ValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * FX Quote
     * Retrieves a quote from one currency to another.  A purse must exist for each currency.   The rate provided is valid for 90s, afterwhich another call must be made.    Sample request: How much GBP will I be credited if I exchange 10 EUR?        POST /api/Account/FXQuote      {          \&quot;id\&quot;: \&quot;400000000000\&quot;,          \&quot;currencyFrom\&quot;: \&quot;EUR\&quot;,          \&quot;currencyTo\&quot;: \&quot;GBP\&quot;,          \&quot;amount\&quot;: 1000      }        OR            POST /api/Account/FXQuote      {          \&quot;id\&quot;: \&quot;400000000000\&quot;,          \&quot;currencyFrom\&quot;: \&quot;EUR\&quot;,          \&quot;currencyTo\&quot;: \&quot;GBP\&quot;,          \&quot;amount\&quot;: 550,          \&quot;fixedSide\&quot;: \&quot;Sell\&quot;      }        Sample request: How much EUR do I need to exchange to be credited 10 GBP?        POST /api/Account/FXQuote      {          \&quot;id\&quot;: \&quot;400000000000\&quot;,          \&quot;currencyFrom\&quot;: \&quot;EUR\&quot;,          \&quot;currencyTo\&quot;: \&quot;GBP\&quot;,          \&quot;amount\&quot;: 1000,          \&quot;fixedSide\&quot;: \&quot;Buy\&quot;      }
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/FXQuoteBindingModelV2} opts.body 
     * @param {module:api/AccountApi~apiAccountFXQuotePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountFXQuotePost",
    value: function apiAccountFXQuotePost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountFXQuotePost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountFXQuotePost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountFXQuotePost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountFXQuotePost");
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
      var returnType = _FXQuoteViewModelV2ValidResponsePackage.FXQuoteViewModelV2ValidResponsePackage;
      return this.apiClient.callApi('/api/Account/FXQuote', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountFXTradePost operation.
     * @callback moduleapi/AccountApi~apiAccountFXTradePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FXTradeV2ViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * FX Trade
     * Executes an FX trade, based on Rate or Amount.    There are 2 types of trades that can be done here.  This is determined by a configuration setting at the programme level - PerformExternalTrade.                1.    If configuration is set to false or not present, when a client makes a request, PFS will use currency cloud to get the rates and the trade/quote is based on currency cloud rates  2.    If configuration is set to true and client makes a request, PFS will use the client’s values passed in P5 and P6                By default, PerformExternalTrade is not present which means that we will take currency cloud rates.  For both scenarios, P1, P2, P3 and P4 are to be present.  For scenario 1, if P5 and P6 are present, these will be ignored.  For scenario 2, P5 and P6 are required as these are used as rates to do the trade.    Unless specified otherwise, the rate or amount value are to be taken from the response of the FX Quote function.    Sample request:                    POST /api/Account/FXTrade      {          \&quot;id\&quot;: \&quot;400000000000\&quot;,          \&quot;currencyFrom\&quot;: \&quot;EUR\&quot;,          \&quot;currencyTo\&quot;: \&quot;GBP\&quot;,          \&quot;amountFrom\&quot;: 550      }
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/FXTradeV2BindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountFXTradePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountFXTradePost",
    value: function apiAccountFXTradePost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountFXTradePost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountFXTradePost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountFXTradePost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountFXTradePost");
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
      var returnType = _FXTradeV2ViewModelValidResponsePackage.FXTradeV2ViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/FXTrade', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdAccountToAccountTradePost operation.
     * @callback moduleapi/AccountApi~apiAccountIdAccountToAccountTradePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TradeViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Account To Account Trade
     * Perform a trade between two wallets or cards.    Sample request:         POST /api/Account/400000000000/AccountToAccountTrade      {          \&quot;toId\&quot;: \&quot;400000000000\&quot;,          \&quot;fromSourceType\&quot;: 1,          \&quot;toSourceType\&quot;: 1,          \&quot;fromAmount\&quot;: 10,          \&quot;toAmount\&quot;: 10,          \&quot;fromCurrencyCode\&quot;: \&quot;GBP\&quot;,          \&quot;toCurrencyCode\&quot;: \&quot;USD\&quot;,          \&quot;conversionRate\&quot;: 1.0,          \&quot;feeCode\&quot;: \&quot;\&quot;,          \&quot;corporateId\&quot;: 0,          \&quot;userDefined\&quot;: { \&quot;Fee\&quot;: \&quot;**FXC\&quot;, \&quot;TransId\&quot;: \&quot;956842\&quot;, \&quot;Rate\&quot;: \&quot;0.3320\&quot;, \&quot;Source\&quot;: \&quot;CCP\&quot;, \&quot;DelDate\&quot;: \&quot;\&quot;, \&quot;bdID\&quot;: \&quot;456\&quot;, \&quot;EC\&quot;: \&quot;\&quot; }      }
     * @param {String} id From cardholder id
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/TradeBindingModelV2} opts.body 
     * @param {module:api/AccountApi~apiAccountIdAccountToAccountTradePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdAccountToAccountTradePost",
    value: function apiAccountIdAccountToAccountTradePost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdAccountToAccountTradePost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdAccountToAccountTradePost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdAccountToAccountTradePost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdAccountToAccountTradePost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdAccountToAccountTradePost");
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
      var returnType = _TradeViewModelValidResponsePackage.TradeViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/AccountToAccountTrade', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdAddCurrencyPost operation.
     * @callback moduleapi/AccountApi~apiAccountIdAddCurrencyPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddCurrencyViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Currency
     * Add Currency to a multicurrency card                Sample request:                    POST /api/Account/400000000000/AddCurrency         {          \&quot;currencyCode\&quot;: \&quot;EUR\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/AddCurrencyBindingModel} opts.body 
     * @param {module:api/AccountApi~apiAccountIdAddCurrencyPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdAddCurrencyPost",
    value: function apiAccountIdAddCurrencyPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdAddCurrencyPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdAddCurrencyPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdAddCurrencyPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdAddCurrencyPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdAddCurrencyPost");
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
      var returnType = _AddCurrencyViewModelValidResponsePackage.AddCurrencyViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/AddCurrency', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdBalanceGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdBalanceGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BalanceV2ViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Card Balance
     * Returns the account balance from a given Cardholder ID. For mutli-currency programs a currency must be specified. Each call returns one currency.  Returns both the Available balance and Ledger Balance. The amount is returned with decimals implied.    Sample request:                    GET /api/Account/400000000000/Balance      GET /api/Account/400000000000/Balance?Currency&#x3D;EUR
     * @param {String} id Cardholder Id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountIdBalanceGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdBalanceGet",
    value: function apiAccountIdBalanceGet(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdBalanceGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdBalanceGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdBalanceGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdBalanceGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdBalanceGet");
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
      var returnType = _BalanceV2ViewModelValidResponsePackage.BalanceV2ViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Balance', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdCardNumberPost operation.
     * @callback moduleapi/AccountApi~apiAccountIdCardNumberPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCardNumberViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request Card Number
     * Retrieves an encrypted card number for a given Cardholder ID.  The encryption algorithm used is AES.  The cipher mode used is ECB.  No IV is required.    Sample request:                    POST /api/Account/400000000000/CardNumber
     * @param {String} id Cardholder Id
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountIdCardNumberPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdCardNumberPost",
    value: function apiAccountIdCardNumberPost(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdCardNumberPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdCardNumberPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdCardNumberPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdCardNumberPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdCardNumberPost");
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
      var returnType = _GetCardNumberViewModelValidResponsePackage.GetCardNumberViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/CardNumber', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdCheckLoadGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdCheckLoadGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckLoadViewModelV2ValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check load version 2
     * Check card load and limit details. Any -1 value in the response signify that no limit is applied.    Sample request:                    GET /api/Account/400000000000/CheckLoad
     * @param {String} id Cardholder id
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountIdCheckLoadGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdCheckLoadGet",
    value: function apiAccountIdCheckLoadGet(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdCheckLoadGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdCheckLoadGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdCheckLoadGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdCheckLoadGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdCheckLoadGet");
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
      var returnType = _CheckLoadViewModelV2ValidResponsePackage.CheckLoadViewModelV2ValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/CheckLoad', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdConditionCheckPatch operation.
     * @callback moduleapi/AccountApi~apiAccountIdConditionCheckPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConditionCheckViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Toggle Functionality
     * Turns On or Off contactless capability for a cardholder.     Can be called with a single condition/action or a with a condition group name.   These are mutually exclusive only one of them must be provided.    When called with &#x27;ConditionGroupNameToApply&#x27;, all the conditions in the group will be applied.    If ‘BlockStyle’ &#x3D; BLANK, all e-commerce transactions are blocked, otherwise BlockStyle restricts domestically, internationally or by country code.        \&quot;CONTACTLESS\&quot; – Turns On or Off contactless capabilities.      \&quot;CVV2\&quot; - Turns On or Off tracking for CVV2 failures for MDES preauthorizations. CVV2 can be reset. Used for DPG processor only.      \&quot;BLOCKECOM\&quot; – Turns On or Off e-commerce transactions.      \&quot;BLOCKMAGSTRIPE\&quot; – Turns On or Off magstripe transactions. BlockStyle does not affect this block.      \&quot;BLOCKATM\&quot; – Turns On or Off ATM transactions.      \&quot;BLOCKPOS\&quot; – Turns On or Off POS transactions.      \&quot;BLOCKMOTO\&quot; - Turns On or Off MOTO transactions.      \&quot;ENROLL3DS\&quot; - Turns On or Off Three Domain Secure Enrollment.    Sample request:                    PATCH /api/Account/400000000000/ConditionCheck      {          \&quot;condition\&quot;: \&quot;CONTACTLESS\&quot;,          \&quot;action\&quot;: \&quot;DENY\&quot;,          \&quot;blockType\&quot;: \&quot;\&quot;,          \&quot;applyToLinkedCards\&quot; : \&quot;false\&quot;      }                    PATCH /api/Account/400000000000/ConditionCheck      {          \&quot;conditionGroupNameToApply\&quot;: \&quot;Group Name\&quot;      }                    PATCH /api/Account/400000000000/ConditionCheck      {          \&quot;conditionGroupNameToApply\&quot;: \&quot;Group Name\&quot;,          \&quot;applyToLinkedCards\&quot; : \&quot;true\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/ConditionCheckBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdConditionCheckPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdConditionCheckPatch",
    value: function apiAccountIdConditionCheckPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdConditionCheckPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdConditionCheckPatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdConditionCheckPatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdConditionCheckPatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdConditionCheckPatch");
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
      var returnType = _ConditionCheckViewModelValidResponsePackage.ConditionCheckViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/ConditionCheck', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdCurrenciesGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdCurrenciesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountCurrenciesViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Card Currencies
     * Returns the currency purses for a given Cardholder ID.    Sample request:        GET /api/Account/400000000000/Currencies
     * @param {String} id Cardholder Id
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountIdCurrenciesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdCurrenciesGet",
    value: function apiAccountIdCurrenciesGet(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdCurrenciesGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdCurrenciesGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdCurrenciesGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdCurrenciesGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdCurrenciesGet");
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
      var returnType = _AccountCurrenciesViewModelValidResponsePackage.AccountCurrenciesViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Currencies', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdCvvPost operation.
     * @callback moduleapi/AccountApi~apiAccountIdCvvPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCvvViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request CVV
     * Returns an encrypted CVV for a given Cardholder ID.   The encryption algorithm used is AES.    The cipher mode used is ECB.  No IV is required.    At least one optional field must be passed as verification    Sample request:                    POST /api/Account/400000000000/Cvv      {          \&quot;phone\&quot; : \&quot;77225522\&quot;,          \&quot;address\&quot; : \&quot;RAMLA ROAD\&quot;,          \&quot;zipCode\&quot; : \&quot;NDR9074\&quot;,          \&quot;securityQuestion\&quot; : \&quot;Favourite Football Team\&quot;,          \&quot;securityAnswer\&quot; : \&quot;Arsenal\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/GetCvvBindingModel} opts.body 
     * @param {module:api/AccountApi~apiAccountIdCvvPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdCvvPost",
    value: function apiAccountIdCvvPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdCvvPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdCvvPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdCvvPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdCvvPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdCvvPost");
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
      var returnType = _GetCvvViewModelValidResponsePackage.GetCvvViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Cvv', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdDetailsGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdDetailsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountDetailsViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Account Details
     * A lightweight version of the Inquiry API.            Sample request:        GET /api/Account/400000000000/Details
     * @param {String} id Id of cardholder.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.currency Currency code of account, used only for multi-currency accounts
     * @param {module:api/AccountApi~apiAccountIdDetailsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdDetailsGet",
    value: function apiAccountIdDetailsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdDetailsGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdDetailsGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdDetailsGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdDetailsGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdDetailsGet");
      }
      var pathParams = {
        'Id': id
      };
      var queryParams = {
        'Currency': opts['currency']
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
      var returnType = _AccountDetailsViewModelValidResponsePackage.AccountDetailsViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Details', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdExpiryDatePost operation.
     * @callback moduleapi/AccountApi~apiAccountIdExpiryDatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetExpiryDateViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Expiry Date
     * Retrieves an encrypted Expiry Date for a given Cardholder ID.  The API returns an encrypted expiry date.  The encryption algorithm used is AES.  The cipher mode used is ECB.  No IV is required.    At least one optional field must be passed as verification    Sample request:                    POST /api/Account/400000000000/ExpiryDate      {          \&quot;phone\&quot;: \&quot;356771236582\&quot;,          \&quot;address\&quot; : \&quot;Add1 Road\&quot;,          \&quot;zipCode\&quot; : \&quot;FIN9074\&quot;,          \&quot;dateOfBirth\&quot; : \&quot;1984-01-17\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/GetExpiryDateBindingModel} opts.body 
     * @param {module:api/AccountApi~apiAccountIdExpiryDatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdExpiryDatePost",
    value: function apiAccountIdExpiryDatePost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdExpiryDatePost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdExpiryDatePost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdExpiryDatePost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdExpiryDatePost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdExpiryDatePost");
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
      var returnType = _GetExpiryDateViewModelValidResponsePackage.GetExpiryDateViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/ExpiryDate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdFeeDebitPost operation.
     * @callback moduleapi/AccountApi~apiAccountIdFeeDebitPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FeeViewModelV2ValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Charge Fee
     * Applies a one-time fee to a given Cardholder ID.     The function debits a fee to a card holder. A description for the reason of the fee applied is also   supported in this transaction.     Sample request:        POST /api/Account/400000000000/Fee/Debit      {          \&quot;feeAmount\&quot;: 10,          \&quot;description\&quot;: \&quot;Card Fee\&quot;,          \&quot;takePartialFee\&quot;: false      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/FeeBindingModelV2} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdFeeDebitPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdFeeDebitPost",
    value: function apiAccountIdFeeDebitPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdFeeDebitPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdFeeDebitPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdFeeDebitPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdFeeDebitPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdFeeDebitPost");
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
      var returnType = _FeeViewModelV2ValidResponsePackage.FeeViewModelV2ValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Fee/Debit', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdForgotPasswordPatch operation.
     * @callback moduleapi/AccountApi~apiAccountIdForgotPasswordPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ForgotPasswordViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Forgot Password
     * Sends an SMS OTP, for password recovery, to the registered mobile number of a Cardholder.    Sample request:                    PATCH /api/Account/400000000000/ForgotPassword         {      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountIdForgotPasswordPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdForgotPasswordPatch",
    value: function apiAccountIdForgotPasswordPatch(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdForgotPasswordPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdForgotPasswordPatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdForgotPasswordPatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdForgotPasswordPatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdForgotPasswordPatch");
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
      var returnType = _ForgotPasswordViewModelValidResponsePackage.ForgotPasswordViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/ForgotPassword', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdFullLoadsGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdFullLoadsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FullLoadsV2ViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Full Load Card Details
     * This function will return information on the card loads and limits using the Direct Fee code provided.    Sample request:                    GET /api/Account/400000000000/FullLoads?directFee&#x3D;**API
     * @param {String} id Cardholder Id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.directFee Direct Fee.
     * @param {module:api/AccountApi~apiAccountIdFullLoadsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdFullLoadsGet",
    value: function apiAccountIdFullLoadsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdFullLoadsGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdFullLoadsGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdFullLoadsGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdFullLoadsGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdFullLoadsGet");
      }
      var pathParams = {
        'Id': id
      };
      var queryParams = {
        'DirectFee': opts['directFee']
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
      var returnType = _FullLoadsV2ViewModelValidResponsePackage.FullLoadsV2ViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/FullLoads', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InquiryV2ViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inquiry
     * A summary of personal and account information for a given card holder.    In addition to card balance (basic monetary unit is returned), it also returns card status, account number, card type and several other fields of demographic information.    Sample request:        GET /api/Account/400000000000
     * @param {String} id Id of cardholder.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.currency Currency code of account, used only for multi-currency accounts
     * @param {module:api/AccountApi~apiAccountIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdGet",
    value: function apiAccountIdGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdGet");
      }
      var pathParams = {
        'Id': id
      };
      var queryParams = {
        'Currency': opts['currency']
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
      var returnType = _InquiryV2ViewModelValidResponsePackage.InquiryV2ViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdKycCodeDetailsGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdKycCodeDetailsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/KycCodeDetailsViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * KYC Code Details
     * Query the details of a KYC Code.    Sample request:                    GET /api/Account/400000000000/KycCodeDetails
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.code KYC Code
     * @param {module:api/AccountApi~apiAccountIdKycCodeDetailsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdKycCodeDetailsGet",
    value: function apiAccountIdKycCodeDetailsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdKycCodeDetailsGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdKycCodeDetailsGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdKycCodeDetailsGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdKycCodeDetailsGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdKycCodeDetailsGet");
      }
      var pathParams = {
        'Id': id
      };
      var queryParams = {
        'Code': opts['code']
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
      var returnType = _KycCodeDetailsViewModelValidResponsePackage.KycCodeDetailsViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/KycCodeDetails', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdKycCodePost operation.
     * @callback moduleapi/AccountApi~apiAccountIdKycCodePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/KycGenerateCodeViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * KYC Generate Code
     * Generate a KYC Code.    Sample request:                    POST /api/Account/400000000000/KycCode      {      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountIdKycCodePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdKycCodePost",
    value: function apiAccountIdKycCodePost(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdKycCodePost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdKycCodePost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdKycCodePost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdKycCodePost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdKycCodePost");
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
      var returnType = _KycGenerateCodeViewModelValidResponsePackage.KycGenerateCodeViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/KycCode', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdKycLinkPost operation.
     * @callback moduleapi/AccountApi~apiAccountIdKycLinkPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/KycLinkViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Kyc Link
     * Additional cards or secondary cards using kycLink api to bypass eKYC for the same person.     The same person criteria:            •  First name          •  Last name           •  Date of birth       Limitation: the Bin/Distributor code should have the same KYC full product types    Sample request:                    POST /api/Account/400000000000/KycLink      {          \&quot;secondaryId\&quot;: \&quot;400000000000\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/KycLinkBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdKycLinkPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdKycLinkPost",
    value: function apiAccountIdKycLinkPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdKycLinkPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdKycLinkPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdKycLinkPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdKycLinkPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdKycLinkPost");
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
      var returnType = _KycLinkViewModelValidResponsePackage.KycLinkViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/KycLink', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdLatestCardNumberGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdLatestCardNumberGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RetrieveLatestCardViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Latest Card
     * Retrieves the most up to date card number for a given Cardholder ID.    Sample request:                    GET /api/Account/400000000000/LatestCardNumber
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.transactionType Type of transaction
     * @param {module:api/AccountApi~apiAccountIdLatestCardNumberGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdLatestCardNumberGet",
    value: function apiAccountIdLatestCardNumberGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdLatestCardNumberGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdLatestCardNumberGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdLatestCardNumberGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdLatestCardNumberGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdLatestCardNumberGet");
      }
      var pathParams = {
        'Id': id
      };
      var queryParams = {
        'TransactionType': opts['transactionType']
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
      var returnType = _RetrieveLatestCardViewModelValidResponsePackage.RetrieveLatestCardViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/LatestCardNumber', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdLatestGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdLatestGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RetrieveLatestCardHolderViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Latest CardHolder
     * Retrieves the most up to date cardholder for a given Cardholder ID.    Sample request:                    GET /api/Account/400000000000/Latest
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.transactionType Type of transaction
     * @param {module:api/AccountApi~apiAccountIdLatestGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdLatestGet",
    value: function apiAccountIdLatestGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdLatestGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdLatestGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdLatestGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdLatestGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdLatestGet");
      }
      var pathParams = {
        'Id': id
      };
      var queryParams = {
        'TransactionType': opts['transactionType']
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
      var returnType = _RetrieveLatestCardHolderViewModelValidResponsePackage.RetrieveLatestCardHolderViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Latest', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdLevelLimitGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdLevelLimitGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CardholderLevelLimitsV2ViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cardholder Limit Levels
     * Get level limits for a cardholder.    This endpoint is only for M2 processor accounts.                Sample request:                    GET /api/Account/400000000000/LevelLimit
     * @param {String} id 
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountIdLevelLimitGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdLevelLimitGet",
    value: function apiAccountIdLevelLimitGet(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdLevelLimitGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdLevelLimitGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdLevelLimitGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdLevelLimitGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdLevelLimitGet");
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
      var returnType = _CardholderLevelLimitsV2ViewModelValidResponsePackage.CardholderLevelLimitsV2ViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/LevelLimit', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdLevelLimitPatch operation.
     * @callback moduleapi/AccountApi~apiAccountIdLevelLimitPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SetCardholderLevelLimitsViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set Carholder Limit Level
     * Set level limits for a cardholder.    This endpoint is only for M2 processor accounts.    Sample request:                    PATCH /api/Account/400000000000/LevelLimit      {          \&quot;limitName\&quot;: \&quot;pos\&quot;,          \&quot;limitCount\&quot;: 1,          \&quot;limitAmount\&quot;: 10,          \&quot;limitPeriod\&quot;: \&quot;Y\&quot;,          \&quot;removeLimit\&quot;: false      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/SetCardholderLevelLimitBindingModelV2} opts.body 
     * @param {module:api/AccountApi~apiAccountIdLevelLimitPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdLevelLimitPatch",
    value: function apiAccountIdLevelLimitPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdLevelLimitPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdLevelLimitPatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdLevelLimitPatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdLevelLimitPatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdLevelLimitPatch");
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
      var returnType = _SetCardholderLevelLimitsViewModelValidResponsePackage.SetCardholderLevelLimitsViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/LevelLimit', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdLoadsGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdLoadsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoadsV2ViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This version is now deprecated, please use V2.
     * Retrieves the daily, weekly, monthly, yearly and lifetime load history, along with the number of attempted loads for a given Cardholder ID.    Sample request:        GET /api/Account/400000000000/Loads
     * @param {String} id 
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountIdLoadsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdLoadsGet",
    value: function apiAccountIdLoadsGet(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdLoadsGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdLoadsGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdLoadsGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdLoadsGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdLoadsGet");
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
      var returnType = _LoadsV2ViewModelValidResponsePackage.LoadsV2ViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Loads', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdLockUnlockPatch operation.
     * @callback moduleapi/AccountApi~apiAccountIdLockUnlockPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockUnlockViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Block/Unblock
     * Blocks or Unblocks a card or account.     Blocked cards, although unable to make outgoing payments, are still able to receive incoming payments.    Sample request:                    PATCH /api/Account/400000000000/LockUnlock      {          \&quot;status\&quot;: \&quot;4\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/LockUnlockBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdLockUnlockPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdLockUnlockPatch",
    value: function apiAccountIdLockUnlockPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdLockUnlockPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdLockUnlockPatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdLockUnlockPatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdLockUnlockPatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdLockUnlockPatch");
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
      var returnType = _LockUnlockViewModelValidResponsePackage.LockUnlockViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/LockUnlock', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdMccDelete operation.
     * @callback moduleapi/AccountApi~apiAccountIdMccDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MccBlockViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * MCC Unblock
     * Unblocks an MCC for a specifc Cardholder ID.    If a card is upgraded, MCC blocks are removed.  MCC groups must be setup with you PM.  MCC list: https://www.mastercard.us/content/dam/mccom/en-us/documents/rules/quick-reference-booklet-merchant-edition.pdf    Sample request:        DELETE /api/Account/400000000000/Mcc      {          \&quot;mcc\&quot;: \&quot;0780\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/MccBlockBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdMccDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdMccDelete",
    value: function apiAccountIdMccDelete(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdMccDelete");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdMccDelete");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdMccDelete");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdMccDelete");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdMccDelete");
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
      var returnType = _MccBlockViewModelValidResponsePackage.MccBlockViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Mcc', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdMccGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdMccGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MccViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * MCC Blocks
     * Retrieves the blocked MCCs for a given Cardholder ID.    Sample request:                    GET /api/Account/400000000000/Mcc
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountIdMccGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdMccGet",
    value: function apiAccountIdMccGet(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdMccGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdMccGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdMccGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdMccGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdMccGet");
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
      var returnType = _MccViewModelValidResponsePackage.MccViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Mcc', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdMccPost operation.
     * @callback moduleapi/AccountApi~apiAccountIdMccPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MccBlockViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * MCC Block
     * Blocks an MCC for a specifc Cardholder ID.    If a card is upgraded, MCC blocks are removed.  MCC groups must be setup with you PM.  MCC list: https://www.mastercard.us/content/dam/mccom/en-us/documents/rules/quick-reference-booklet-merchant-edition.pdf                Sample request:                    POST /api/Account/400000000000/Mcc      {          \&quot;mcc\&quot;: \&quot;0780\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/MccBlockBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdMccPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdMccPost",
    value: function apiAccountIdMccPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdMccPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdMccPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdMccPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdMccPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdMccPost");
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
      var returnType = _MccBlockViewModelValidResponsePackage.MccBlockViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Mcc', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdNominatedPersonGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdNominatedPersonGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NominatedPersonGetViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Nominated Person
     * Gets the Nominated Person for Cardholder    Sample request:                    GET /api/Account/400000000000/NominatedPerson
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountIdNominatedPersonGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdNominatedPersonGet",
    value: function apiAccountIdNominatedPersonGet(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdNominatedPersonGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdNominatedPersonGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdNominatedPersonGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdNominatedPersonGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdNominatedPersonGet");
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
      var returnType = _NominatedPersonGetViewModelValidResponsePackage.NominatedPersonGetViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/NominatedPerson', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdNominatedPersonPatch operation.
     * @callback moduleapi/AccountApi~apiAccountIdNominatedPersonPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NominatedPersonPutViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Nominated Person
     * Update a Nominated Person for Cardholder    Sample request:                    POST /api/Account/400000000000/NominatedPerson      {              \&quot;firstName\&quot; : \&quot;User\&quot;,              \&quot;lastName\&quot; : \&quot;Test\&quot;,              \&quot;address1\&quot; : \&quot;Address\&quot;,              \&quot;postCode\&quot; : \&quot;ABC123\&quot;,              \&quot;countryCode\&quot; : \&quot;GB\&quot;,              \&quot;dateOfBirth\&quot; : \&quot;20/12/1960\&quot;,              \&quot;placeOfBirth\&quot; : \&quot;Anywhere\&quot;,              \&quot;email\&quot; : \&quot;acme@acme.com\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/NominatedPersonBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdNominatedPersonPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdNominatedPersonPatch",
    value: function apiAccountIdNominatedPersonPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdNominatedPersonPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdNominatedPersonPatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdNominatedPersonPatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdNominatedPersonPatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdNominatedPersonPatch");
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
      var returnType = _NominatedPersonPutViewModelValidResponsePackage.NominatedPersonPutViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/NominatedPerson', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdNominatedPersonPost operation.
     * @callback moduleapi/AccountApi~apiAccountIdNominatedPersonPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NominatedPersonPutViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Nominated Person
     * Create a Nominated Person for Cardholder    Sample request:                    POST /api/Account/400000000000/NominatedPerson      {              \&quot;firstName\&quot; : \&quot;User\&quot;,              \&quot;lastName\&quot; : \&quot;Test\&quot;,              \&quot;address1\&quot; : \&quot;Address\&quot;,              \&quot;postCode\&quot; : \&quot;ABC123\&quot;,              \&quot;countryCode\&quot; : \&quot;GB\&quot;,              \&quot;dateOfBirth\&quot; : \&quot;1960-01-14\&quot;,              \&quot;placeOfBirth\&quot; : \&quot;Anywhere\&quot;,              \&quot;email\&quot; : \&quot;acme@acme.com\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/NominatedPersonBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdNominatedPersonPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdNominatedPersonPost",
    value: function apiAccountIdNominatedPersonPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdNominatedPersonPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdNominatedPersonPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdNominatedPersonPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdNominatedPersonPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdNominatedPersonPost");
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
      var returnType = _NominatedPersonPutViewModelValidResponsePackage.NominatedPersonPutViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/NominatedPerson', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdPINReminderGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdPINReminderGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PINReminderViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * PIN Reminder
     * Sends a Card&#x27;s PIN via SMS to the registered phone number of a Cardholder.    Sample request:        GET /api/Account/400000000000/PINReminder
     * @param {String} id Cardholder Id
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountIdPINReminderGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdPINReminderGet",
    value: function apiAccountIdPINReminderGet(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdPINReminderGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdPINReminderGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdPINReminderGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdPINReminderGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdPINReminderGet");
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
      var returnType = _PINReminderViewModelValidResponsePackage.PINReminderViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/PINReminder', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdPatch operation.
     * @callback moduleapi/AccountApi~apiAccountIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountUpdateViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Cardholder
     * Updates a Cardholder’s demographic data. All data entered will override existing data. If data is unchanged, mandatory fields should be filled with existing registered data.    Sample request:            PATCH /api/Account/400000000000      {          \&quot;firstName\&quot;: \&quot;UpdateName\&quot;,          \&quot;middleInitial\&quot;: \&quot;\&quot;,          \&quot;lastName\&quot;: \&quot;UpdateLast\&quot;,          \&quot;address1\&quot;: \&quot;UpdateAddr1\&quot;,          \&quot;address2\&quot;: \&quot;UpdateAddr2\&quot;,          \&quot;city\&quot;: \&quot;Bobbyland\&quot;,          \&quot;zipCode\&quot;: \&quot;BOB8547\&quot;,          \&quot;countryCode\&quot;: \&quot;ES\&quot;,          \&quot;dateOfBirth\&quot;: \&quot;1999-01-07\&quot;,          \&quot;securityQuestion\&quot;: \&quot;secfield1\&quot;,          \&quot;securityAnswer\&quot;: \&quot;secans1\&quot;,          \&quot;landline\&quot;: \&quot;041|22365855238\&quot;,          \&quot;email\&quot;: \&quot;updatetes@sdds.com\&quot;,          \&quot;userDefined2\&quot;: \&quot;2\&quot;,          \&quot;distributorCode\&quot;: \&quot;{{DC}}\&quot;,          \&quot;cardStyle\&quot;: \&quot;01\&quot;,          \&quot;zip2\&quot;: \&quot;TST0955\&quot;,          \&quot;phone\&quot;: \&quot;0044|11111111\&quot;,          \&quot;mobileNo\&quot;: \&quot;0044|99999999\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/AccountUpdateBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdPatch",
    value: function apiAccountIdPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdPatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdPatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdPatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdPatch");
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
      var returnType = _AccountUpdateViewModelValidResponsePackage.AccountUpdateViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdPayeeGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdPayeeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PayeesViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * OFAC Payee Inquiry
     * Get payee details of a particular cardholder.    Sample request:                    GET /api/Account/400000000000/Payee
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountIdPayeeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdPayeeGet",
    value: function apiAccountIdPayeeGet(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdPayeeGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdPayeeGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdPayeeGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdPayeeGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdPayeeGet");
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
      var returnType = _PayeesViewModelValidResponsePackage.PayeesViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Payee', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdPhysicalCardPatch operation.
     * @callback moduleapi/AccountApi~apiAccountIdPhysicalCardPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PhysicalCardViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request Physical Card
     * Request a physical card for an existing virtual card. Once a successful response is received the Delivery Type parameter will change from ‘VC’ to ‘PC’.     &#x27;userdefined&#x27; parameter can be ignored unless told otherwise.    Sample request:                    PATCH /api/Account/400000000000/PhysicalCard             {          \&quot;cardStyle\&quot;: \&quot;01\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/PhysicalCardBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdPhysicalCardPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdPhysicalCardPatch",
    value: function apiAccountIdPhysicalCardPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdPhysicalCardPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdPhysicalCardPatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdPhysicalCardPatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdPhysicalCardPatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdPhysicalCardPatch");
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
      var returnType = _PhysicalCardViewModelValidResponsePackage.PhysicalCardViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/PhysicalCard', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdPinPost operation.
     * @callback moduleapi/AccountApi~apiAccountIdPinPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PinViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request PIN
     * Retrieves an encrypted PIN for a given Cardholder ID.   The encryption algorithm used is AES.  The cipher mode used is ECB.  No IV is required.    At least one optional field must be passed as verification.    Sample request:                    POST /api/Account/400000000000/Pin      {          \&quot;phone\&quot; : \&quot;77225522\&quot;,          \&quot;address\&quot; : \&quot;RAMLA ROAD\&quot;,          \&quot;zipCode\&quot; : \&quot;NDR9074\&quot;,          \&quot;securityQuestion\&quot; : \&quot;Favourite Football Team\&quot;,          \&quot;securityAnswer\&quot; : \&quot;Arsenal\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/PinBindingModel} opts.body 
     * @param {module:api/AccountApi~apiAccountIdPinPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdPinPost",
    value: function apiAccountIdPinPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdPinPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdPinPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdPinPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdPinPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdPinPost");
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
      var returnType = _PinViewModelValidResponsePackage.PinViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Pin', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdPurchaseOnUsPost operation.
     * @callback moduleapi/AccountApi~apiAccountIdPurchaseOnUsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PurchaseOnUsViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * PurchaseOnUs
     * Create a new PurchaseOnUs transaction.    Sample request:                    POST /api/Account/400000000000/PurchaseOnUs      {         \&quot;amount\&quot;: 150,         \&quot;currencyCode\&quot;: \&quot;GBP\&quot;,         \&quot;feeCode\&quot;: \&quot;**POU\&quot;,         \&quot;description\&quot;: \&quot;Test purchase on us\&quot;,         \&quot;terminalOwner\&quot;: \&quot;Test merchant\&quot;,         \&quot;terminalLocation\&quot;: \&quot;Test location\&quot;,         \&quot;terminalId\&quot; : \&quot;Terminal ID\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/PurchaseOnUsBindingModelV2} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdPurchaseOnUsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdPurchaseOnUsPost",
    value: function apiAccountIdPurchaseOnUsPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdPurchaseOnUsPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdPurchaseOnUsPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdPurchaseOnUsPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdPurchaseOnUsPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdPurchaseOnUsPost");
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
      var returnType = _PurchaseOnUsViewModelValidResponsePackage.PurchaseOnUsViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/PurchaseOnUs', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdRedeemKycCodePatch operation.
     * @callback moduleapi/AccountApi~apiAccountIdRedeemKycCodePatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/KycRedeemCodeViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * KYC Redeem Code
     * Redeem a KYC Code.    Sample request:                    PATCH /api/Account/400000000000/RedeemKycCode/Code&#x3D;53149      {      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.code KYC Code.
     * @param {module:api/AccountApi~apiAccountIdRedeemKycCodePatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdRedeemKycCodePatch",
    value: function apiAccountIdRedeemKycCodePatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdRedeemKycCodePatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdRedeemKycCodePatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdRedeemKycCodePatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdRedeemKycCodePatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdRedeemKycCodePatch");
      }
      var pathParams = {
        'Id': id
      };
      var queryParams = {
        'Code': opts['code']
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
      var returnType = _KycRedeemCodeViewModelValidResponsePackage.KycRedeemCodeViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/RedeemKycCode', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdRegisterClientPatch operation.
     * @callback moduleapi/AccountApi~apiAccountIdRegisterClientPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RegisterViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register client
     * Password needs to be encrypted.  The encryption algorithm used is AES.    The cipher mode used is ECB.  No IV is required.    Sample request:                    PATCH /api/Account/400000000000/RegisterClient      {          \&quot;name\&quot;: \&quot;TName\&quot;,          \&quot;username\&quot;: \&quot;TUsername\&quot;,          \&quot;password\&quot;: \&quot;65125A9FA419EC26E9E5D0BEC03B0472\&quot;      }
     * @param {String} id 
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/RegisterClientBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdRegisterClientPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdRegisterClientPatch",
    value: function apiAccountIdRegisterClientPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdRegisterClientPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdRegisterClientPatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdRegisterClientPatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdRegisterClientPatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdRegisterClientPatch");
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
      var returnType = _RegisterViewModelValidResponsePackage.RegisterViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/RegisterClient', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdReissuePost operation.
     * @callback moduleapi/AccountApi~apiAccountIdReissuePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReissueV2ViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reissue
     * The Reissue API will create a new card associated the details saved against the old card. A new CHID, CVV, PAN and Expiry will be generated.   All other details and configurations will be moved to the new card.    The reissuance process takes place in two phases.    Phase 1 - triggered by the Reissue API.  &lt;ul&gt;&lt;li&gt;New card created&lt;/li&gt;&lt;li&gt;Demographic data copied&lt;/li&gt;&lt;li&gt;Callout registered&lt;/li&gt;&lt;li&gt;MCC blocklist updated&lt;/li&gt;&lt;li&gt;KYC documents transferred to the new card&lt;/li&gt;&lt;li&gt;Fee charged (if applicable)&lt;/li&gt;&lt;/ul&gt;                    Phase 2 - triggered by the expiry of the old card or the activation of the new card.  &lt;ul&gt;&lt;li&gt;Balance transferred (If multicurrency, wallets are created and the balance moved)&lt;/li&gt;&lt;li&gt;Banking details, Payees, Direct Debits/Recurring Payments instructions transferred&lt;/li&gt;&lt;li&gt;Secondary card links moved&lt;/li&gt;&lt;li&gt;Old card closed&lt;/li&gt;&lt;/ul&gt;      For a card to be reissued, it must not be in Closed, PNV or Stolen status. When a card is in DepositOnly status, the replace flow will change the status temporarily to Active for movement of funds and fees, then back to DepositOnly status.
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/ReissueBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdReissuePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdReissuePost",
    value: function apiAccountIdReissuePost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdReissuePost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdReissuePost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdReissuePost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdReissuePost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdReissuePost");
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
      var returnType = _ReissueV2ViewModelValidResponsePackage.ReissueV2ViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Reissue', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdRemoveLoadLimitDelete operation.
     * @callback moduleapi/AccountApi~apiAccountIdRemoveLoadLimitDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemoveLoadLimitViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove Load Limit
     * Removes load limits for a given Cardholder ID.    Sample request:        DELETE /api/Account/400000000000/RemoveLoadLimit
     * @param {String} id 
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountIdRemoveLoadLimitDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdRemoveLoadLimitDelete",
    value: function apiAccountIdRemoveLoadLimitDelete(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdRemoveLoadLimitDelete");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdRemoveLoadLimitDelete");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdRemoveLoadLimitDelete");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdRemoveLoadLimitDelete");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdRemoveLoadLimitDelete");
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
      var returnType = _RemoveLoadLimitViewModelValidResponsePackage.RemoveLoadLimitViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/RemoveLoadLimit', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdReplacePost operation.
     * @callback moduleapi/AccountApi~apiAccountIdReplacePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReplaceViewModelV2ValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace
     * The Replacement API will create a new card using the details of the old card, move over the balances, close the old card and finally, copy over the old card&#x27;s configurations to the new card which include:        1. Load limits      2. Secondary cards      3. MCC Blocks      4. KYC Documents      5. Recurring payment      6. Standing orders      7. Payee information    For a card to be replaced, it must not be in Closed or PNV status.   The statusForOldAccount field should only be used to define how the card will be closed and any status that is not considered as a closed card will not be accepted. This means the only options that are accepted in this parameter are 9- Closed, 2- Lost, 3- Stolen.  When a card is in DepositOnly status, the replace flow will change the status temporarily to Active for movement of funds and fees, then back to DepositOnly status.    Sample request:        POST /api/Account/400000000000/Replace      {          \&quot;replaceReason\&quot;: \&quot;testing finac\&quot;,          \&quot;statusForOldAccount\&quot;: \&quot;9\&quot;,          \&quot;embossName\&quot;: \&quot;TEST TEST\&quot;,          \&quot;retainPin\&quot;: true,          \&quot;newPin\&quot;: \&quot;\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/ReplaceBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdReplacePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdReplacePost",
    value: function apiAccountIdReplacePost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdReplacePost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdReplacePost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdReplacePost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdReplacePost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdReplacePost");
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
      var returnType = _ReplaceViewModelV2ValidResponsePackage.ReplaceViewModelV2ValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Replace', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdResendKycCodePost operation.
     * @callback moduleapi/AccountApi~apiAccountIdResendKycCodePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/KycResendCodeViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * KYC Resend Code
     * Resend a KYC Code.    Sample request:                    POST /api/Account/400000000000/ResendKycCode      {      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountIdResendKycCodePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdResendKycCodePost",
    value: function apiAccountIdResendKycCodePost(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdResendKycCodePost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdResendKycCodePost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdResendKycCodePost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdResendKycCodePost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdResendKycCodePost");
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
      var returnType = _KycResendCodeViewModelValidResponsePackage.KycResendCodeViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/ResendKycCode', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdResetPasswordPatch operation.
     * @callback moduleapi/AccountApi~apiAccountIdResetPasswordPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResetPasswordViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset Password
     * Reset&#x27;s the password of a given Cardholder ID.    Sample request:                    PATCH /api/Account/400000000000/ResetPasword             {          \&quot;newPassword\&quot;: \&quot;001CC9FF422A1F1B95FF39ECE3A17C77\&quot;,          \&quot;verificationCode\&quot;: \&quot;172073\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/ResetPasswordBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdResetPasswordPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdResetPasswordPatch",
    value: function apiAccountIdResetPasswordPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdResetPasswordPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdResetPasswordPatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdResetPasswordPatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdResetPasswordPatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdResetPasswordPatch");
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
      var returnType = _ResetPasswordViewModelValidResponsePackage.ResetPasswordViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/ResetPassword', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdSecondaryGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdSecondaryGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecondaryAccountViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Secondary Cards
     * Returns the Cardholder ID&#x27;s of all secondary cards/accounts linked to a Cardholder ID.    Sample request:                    GET /api/Account/400000000000/Secondary
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountIdSecondaryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdSecondaryGet",
    value: function apiAccountIdSecondaryGet(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdSecondaryGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdSecondaryGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdSecondaryGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdSecondaryGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdSecondaryGet");
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
      var returnType = _SecondaryAccountViewModelValidResponsePackage.SecondaryAccountViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Secondary', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdSensitiveDataTokenPost operation.
     * @callback moduleapi/AccountApi~apiAccountIdSensitiveDataTokenPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SensitiveDataTokenViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sensitive Data Token
     * Generate a Data Token, which is encrypted by the encryption key provided.    &#x27;SensitiveDataType&#x27; has the following options:            • &#x27;CardNumber&#x27;          • &#x27;Pin&#x27;            &#x27;CipherAlgorithm&#x27; has the following options:            • &#x27;SHA256&#x27;          • &#x27;SHA512&#x27;    Sample request:                    POST /api/Account/400000000000/SensitiveDataToken      {          \&quot;dateOfBirth\&quot;: \&quot;1990-01-01\&quot;,          \&quot;codeChallenge\&quot;: \&quot;M1t14BXbvfPdDcMBDPlf\&quot;,          \&quot;sensitiveDataType\&quot;: \&quot;CardNumber\&quot;,          \&quot;css\&quot;: \&quot;www.urlcss.com\&quot;,          \&quot;cipherAlgorithm\&quot;: \&quot;SHA512\&quot;      }
     * @param {String} id Cardholder Id
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/SensitiveDataTokenBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdSensitiveDataTokenPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdSensitiveDataTokenPost",
    value: function apiAccountIdSensitiveDataTokenPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdSensitiveDataTokenPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdSensitiveDataTokenPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdSensitiveDataTokenPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdSensitiveDataTokenPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdSensitiveDataTokenPost");
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
      var returnType = _SensitiveDataTokenViewModelValidResponsePackage.SensitiveDataTokenViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/SensitiveDataToken', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdSpendControlGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdSpendControlGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSpendControlViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Spend Limits
     * Retreive spend limits for a card.    This endpoint works for Trace cards.    Sample request:                    GET /api/Account/400000000000/SpendControl
     * @param {String} id Cardholder Id
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.currencyCode Currency code (ISO-4217) 3 letter currency code
     * @param {module:api/AccountApi~apiAccountIdSpendControlGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdSpendControlGet",
    value: function apiAccountIdSpendControlGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdSpendControlGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdSpendControlGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdSpendControlGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdSpendControlGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdSpendControlGet");
      }
      var pathParams = {
        'Id': id
      };
      var queryParams = {
        'CurrencyCode': opts['currencyCode']
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
      var returnType = _GetSpendControlViewModelValidResponsePackage.GetSpendControlViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/SpendControl', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdSpendControlPost operation.
     * @callback moduleapi/AccountApi~apiAccountIdSpendControlPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpendControlViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Spend Control
     * Set limits for Trace cards. All limit settings must have a value, missing or null values mean that the limit is turned off at card level.    For multicurrency cards, limit values has to be set for each currency wallet. If currency is not provided in the request, the limit will be set for the account’s default currency    Sample request:                    POST /api/Account/400000000000/SpendControl      {          \&quot;spendControlGroupName\&quot;: \&quot;TestGroup1\&quot;,          \&quot;currencyCode\&quot;: \&quot;GBP\&quot;,          \&quot;applyToLinkedCards\&quot;: false      }
     * @param {String} id CardholderId
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/SpendControlBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdSpendControlPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdSpendControlPost",
    value: function apiAccountIdSpendControlPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdSpendControlPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdSpendControlPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdSpendControlPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdSpendControlPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdSpendControlPost");
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
      var returnType = _SpendControlViewModelValidResponsePackage.SpendControlViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/SpendControl', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdStatusGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdStatusGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStatusViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Card Status
     * Returns the status of a given Cardholder ID (e.g. Open, Deposit Only).     Status codes:         • 0  Issued not Active      • 1  Open (Activate)      • 2  Lost      • 3  Stolen      • 4  Deposit Only      • 6  Check Reason      • 8  Fraud      • 9  Closed      • A  Pin Change Required      • C  Phone Number Verification      • E  Expired      • Q  Temporary Block    Sample request:                    GET /api/Account/400000000000/Status
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountIdStatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdStatusGet",
    value: function apiAccountIdStatusGet(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdStatusGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdStatusGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdStatusGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdStatusGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdStatusGet");
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
      var returnType = _GetStatusViewModelValidResponsePackage.GetStatusViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Status', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdStatusPatch operation.
     * @callback moduleapi/AccountApi~apiAccountIdStatusPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChangeStatusViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change Card Status
     * Changes the status of a card.  Used to activate cards, to lock a card or account and to permanently close an account. Once an account is closed the status cannot be changed.    Status code:        • 0  Issued not Active      • 1  Open (Activate)         • 4  Deposit Only      • 9  Closed    Sample request:                    POST /api/Account/400000000000/Status      {          \&quot;status\&quot;: \&quot;1\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/ChangeStatusBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdStatusPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdStatusPatch",
    value: function apiAccountIdStatusPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdStatusPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdStatusPatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdStatusPatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdStatusPatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdStatusPatch");
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
      var returnType = _ChangeStatusViewModelValidResponsePackage.ChangeStatusViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Status', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdToggleIbanGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdToggleIbanGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetToggleIbanViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Toggle IBAN
     * This function is used to retrieve a list of Iban toggles using cardholder provided.    Sample request:                    GET /api/Account/400000000000/ToggleIban
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountIdToggleIbanGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdToggleIbanGet",
    value: function apiAccountIdToggleIbanGet(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdToggleIbanGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdToggleIbanGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdToggleIbanGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdToggleIbanGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdToggleIbanGet");
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
      var returnType = _GetToggleIbanViewModelValidResponsePackage.GetToggleIbanViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/ToggleIban', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdToggleIbanPatch operation.
     * @callback moduleapi/AccountApi~apiAccountIdToggleIbanPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ToggleIbanViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Toggle IBAN
     * Turns the IBAN of a card on or off. Enabling or disabling bank payments. Does not change the status of the card.    Sample request:                    PATCH /api/Account/400000000000/ToggleIban             {          \&quot;toggleIban\&quot;: true      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/ToggleIbanBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdToggleIbanPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdToggleIbanPatch",
    value: function apiAccountIdToggleIbanPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdToggleIbanPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdToggleIbanPatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdToggleIbanPatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdToggleIbanPatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdToggleIbanPatch");
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
      var returnType = _ToggleIbanViewModelValidResponsePackage.ToggleIbanViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/ToggleIban', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdTransactionsGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdTransactionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransactionsViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transaction History
     * Returns a list of all transactions through a Cardholder&#x27;s account, between the dates provided (e.g. fees, transfers, purchases etc.).   Each call, retrieves one currency. The transactions are returned in chronological order with the most recent transactions appearing last.    &lt;b&gt;Pagination&lt;/b&gt; is used in this endpoint, because depending on the date range that it is selected, the response or list of transactions could be very long. For example, if a Cardholder has 10 transactions and the request is PageNo &#x3D; 1 and PageSize &#x3D; 5, there will be 2 pages with 5 transactions each. If PageNo &#x3D; 1 and PageSize &#x3D; 2, there will be 2 transactions in each page, for 5 pages.    For TRACE Bins Only:  When a card is replaced or reissued, the old card wallet will be used for the new card as well.  Therefore when this API is requested, since transactions are retrieved by the wallet id(be default), all transactions in that wallet will be retrieved for all cards which made a transaction.      Sample request:                    GET /api/Account/400000000000/Transactions?StartDate&#x3D;2000-01-01&amp;EndDate&#x3D;2018-03-01      Sample response (TRACE processor):         {                \&quot;date\&quot;: \&quot;2020-12-11T12:29:18.392Z\&quot;,         \&quot;transactionType\&quot;: \&quot;C\&quot;,         \&quot;cardType\&quot;: \&quot;Credit\&quot;,         \&quot;mti\&quot;: \&quot;\&quot;,         \&quot;arn\&quot;: \&quot;\&quot;,         \&quot;stn\&quot;: \&quot;\&quot;,         \&quot;authenticationNumber\&quot;: \&quot;162077\&quot;,         \&quot;recordType\&quot;: \&quot;\&quot;,         \&quot;transactionOrigin\&quot;: \&quot;Ecommerce\&quot;,         \&quot;transactionDescription\&quot;: \&quot;string\&quot;,         \&quot;amount\&quot;: \&quot;100\&quot;,         \&quot;fee\&quot;: \&quot;0\&quot;,         \&quot;availableBalance\&quot;: \&quot;110\&quot;,         \&quot;ledgerBalance\&quot;: \&quot;110\&quot;,         \&quot;clientId\&quot;: \&quot;\&quot;,         \&quot;terminalID\&quot;: \&quot;string\&quot;,         \&quot;terminalLocation\&quot;: \&quot;string\&quot;,         \&quot;terminalOwner\&quot;: \&quot;string\&quot;,         \&quot;terminalCity\&quot;: \&quot;string\&quot;,         \&quot;terminalState\&quot;: \&quot;string\&quot;,         \&quot;terminalCountry\&quot;: \&quot;string\&quot;,         \&quot;terminalCurrency\&quot;: \&quot;\&quot;,         \&quot;mcc\&quot;: \&quot;0\&quot;,         \&quot;surcharge\&quot;: \&quot;0\&quot;,         \&quot;issuerFee\&quot;: \&quot;0\&quot;,         \&quot;responseCode\&quot;: \&quot;|Authorize\&quot;,         \&quot;foreignExchangeFee\&quot;: \&quot;0\&quot;,         \&quot;currency\&quot;: \&quot;GBP\&quot;,         \&quot;transactionCodeDescription\&quot;: \&quot;DEPOSIT TO CARD - FUNCTION 007\&quot;,         \&quot;transactionResult\&quot;: \&quot;Approved\&quot;,         \&quot;originalTransactionAmount\&quot;: \&quot;0\&quot;,         \&quot;conversionRate\&quot;: 1.0,         \&quot;originalHoldAmount\&quot;: \&quot;0\&quot;,         \&quot;cardAcceptorIdCode\&quot;: \&quot;string\&quot;,         \&quot;actionCodeDescription\&quot;: \&quot;\&quot;,         \&quot;acquiringInstitution\&quot;: \&quot;000000\&quot;,         \&quot;processor\&quot;: \&quot;\&quot;,         \&quot;posEntryMode\&quot;: \&quot;UnkownMode\&quot;,         \&quot;atmFee\&quot;: \&quot;0\&quot;,         \&quot;walletProvider\&quot;: \&quot;\&quot;,         \&quot;cardId\&quot;: \&quot;PFS11588867010000100013\&quot;,         \&quot;walletId\&quot;: \&quot;PFS1158886701000018261\&quot;,         \&quot;uniqueReference\&quot;: \&quot;\&quot;      }
     * @param {String} id Cardholder Id.
     * @param {String} startDate Start date of transactions, inclusive. Field is required. YYYY-MM-DD
     * @param {String} endDate End date of transactions, inclusive. Field is required. YYYY-MM-DD
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.settlementsOnly Determines data shown  True, will return the Authorisation entry unless the transaction has been Cleared. In which case it will return the Cleared entry only.  False, will return both the Authorisation and Cleared entries. (Two entries may be visible for each transaction)
     * @param {String} opts.currency Currency (ISO-4217) to query for at M2 Processor.
     * @param {String} opts.tradeWallet 
     * @param {String} opts.walletId Transcations will be returend only for this wallet, if not set transactions are returned for the default Wallet. This filter affects only Trace cards.
     * @param {Boolean} opts.cardOnly This filter affects only Trace cards.    True: transactions will be returned only for the card related to the CardholderId. Transactions for linked accounts are not returned.   False: (default) transactions for the default wallet will be returned or they can be filtered by WalletId.
     * @param {Number} opts.pageNo 
     * @param {Number} opts.pageSize 
     * @param {module:api/AccountApi~apiAccountIdTransactionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdTransactionsGet",
    value: function apiAccountIdTransactionsGet(id, startDate, endDate, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdTransactionsGet");
      }
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling apiAccountIdTransactionsGet");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling apiAccountIdTransactionsGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdTransactionsGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdTransactionsGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdTransactionsGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdTransactionsGet");
      }
      var pathParams = {
        'Id': id
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
        'SettlementsOnly': opts['settlementsOnly'],
        'Currency': opts['currency'],
        'TradeWallet': opts['tradeWallet'],
        'WalletId': opts['walletId'],
        'CardOnly': opts['cardOnly'],
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
      var returnType = _TransactionsViewModelValidResponsePackage.TransactionsViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdTransferDetailsPost operation.
     * @callback moduleapi/AccountApi~apiAccountIdTransferDetailsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferDetailsViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transfer Details
     * Transfers balance and demographic data from one card/account to another.    Sample request:                    POST /api/Account/400000000000/Transfer      {          \&quot;toId\&quot;: \&quot;400000000000\&quot;,          \&quot;username\&quot;: \&quot;josef.muscat\&quot;,          \&quot;reason\&quot;: \&quot;Transferring details.\&quot;      }                When a card is in DepositOnly status, the transfer flow will change the status temporarily to Active for movement of funds and fees, then back to DepositOnly status.
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/TransferDetailsBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdTransferDetailsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdTransferDetailsPost",
    value: function apiAccountIdTransferDetailsPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdTransferDetailsPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdTransferDetailsPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdTransferDetailsPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdTransferDetailsPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdTransferDetailsPost");
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
      var returnType = _TransferDetailsViewModelValidResponsePackage.TransferDetailsViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/TransferDetails', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdUpgradeCardPost operation.
     * @callback moduleapi/AccountApi~apiAccountIdUpgradeCardPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpgradeCardViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upgrade Product Type
     * Upgrades the product type of a given Cardholder ID. Increasing load limits and removing specified MCC blocks.                0 &#x3D; Anonymous  1 &#x3D; SDD  2 &#x3D; KYC    Sample request:                    POST /api/Account/400000000000/UpgradeCard      {          \&quot;productType\&quot;: \&quot;2\&quot;      }
     * @param {String} id Cardholder Id
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/UpgradeCardBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdUpgradeCardPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdUpgradeCardPost",
    value: function apiAccountIdUpgradeCardPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdUpgradeCardPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdUpgradeCardPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdUpgradeCardPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdUpgradeCardPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdUpgradeCardPost");
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
      var returnType = _UpgradeCardViewModelValidResponsePackage.UpgradeCardViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/UpgradeCard', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdUsageGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdUsageGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CardUsageViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Card Usage
     * Gets the card usage by cardholder Id and the optional currency.   If no currency provided, the default currency of the card will be used.    Sample request:        GET /api/Account/400000000000/Usage?Currency&#x3D;EUR
     * @param {String} id Cardholder Id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.currency Currency (ISO-4217) to query. Default value it the currency of the card
     * @param {module:api/AccountApi~apiAccountIdUsageGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdUsageGet",
    value: function apiAccountIdUsageGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdUsageGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdUsageGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdUsageGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdUsageGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdUsageGet");
      }
      var pathParams = {
        'Id': id
      };
      var queryParams = {
        'Currency': opts['currency']
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
      var returnType = _CardUsageViewModelValidResponsePackage.CardUsageViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/Usage', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdUseDataTokenGet operation.
     * @callback moduleapi/AccountApi~apiAccountIdUseDataTokenGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Use Data Token
     * Validates a data token against the code verifier and other conditions. If successful, depending on the requested data type in the token,   the HTML template is returned accordingly.    Sample request:                    GET /api/Account/400000000000/UseDataToken?dataToken&#x3D;1EA4D84D1830D0E59B07AC1D2EEB29B84BC07E17F3ACEB3E1D60E3FE5F0665444EF17B919B1567921DA7DB7FA13492C1A7F764B4986710314678AF7C835C72D3EEB88581752FEFF808E43658997FC5B608C5CC4B4B3B2341EA9D508A999216D74C7E96FE247EEC2BC880FC5781036DB717CA8FBF455A6ED260AE98FF2CF5BE730A618CA71332ECFC4E015671EAC044746D64B5BCE6697BBD0EFBED9D090C7BB1B3B99114FBFE24E06346EB569D306E804821264B69E8C77CBD4CCF57FF4C311956574EF6BF9483F3247B771B933346960AAC0BFEE53B2AD8C0A738ECC16D8CAEC5B9614E2DFAE68B51ADD9B592B1FA3F4583E85911D24E718B46F1F60006B764&amp;codeVerifier&#x3D;Password
     * @param {String} id Cardholder Id
     * @param {String} apiVersion 
     * @param {Object} opts Optional parameters
     * @param {String} opts.codeVerifier 
     * @param {String} opts.dataToken 
     * @param {String} opts.fMessageId Unique identifier (default to <.>)
     * @param {String} opts.fOrigin Origin of request (default to <.>)
     * @param {module:api/AccountApi~apiAccountIdUseDataTokenGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "apiAccountIdUseDataTokenGet",
    value: function apiAccountIdUseDataTokenGet(id, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdUseDataTokenGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdUseDataTokenGet");
      }
      var pathParams = {
        'Id': id
      };
      var queryParams = {
        'CodeVerifier': opts['codeVerifier'],
        'DataToken': opts['dataToken']
      };
      var headerParams = {
        'api-version': apiVersion,
        'F-Message-Id': opts['fMessageId'],
        'F-Origin': opts['fOrigin']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/html', 'application/json'];
      var returnType = null;
      return this.apiClient.callApi('/api/Account/{Id}/UseDataToken', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountIdValidatePinPost operation.
     * @callback moduleapi/AccountApi~apiAccountIdValidatePinPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidatePinViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate PIN
     * Checks a given PIN against a Cardholder ID. After three failed checks, all subsequent check will fail.    Sample request:                    POST /api/Account/400000000000/ValidatePin      {          \&quot;pin\&quot;: \&quot;3D9F8765D1FF4543BF02021BD99E7D8B\&quot;      }
     * @param {String} id Cardholder Id
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/ValidatePinBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountIdValidatePinPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountIdValidatePinPost",
    value: function apiAccountIdValidatePinPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiAccountIdValidatePinPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountIdValidatePinPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountIdValidatePinPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountIdValidatePinPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountIdValidatePinPost");
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
      var returnType = _ValidatePinViewModelValidResponsePackage.ValidatePinViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{Id}/ValidatePin', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountKYCUploadDocumentsPost operation.
     * @callback moduleapi/AccountApi~apiAccountKYCUploadDocumentsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/KYCUploadDocumentsViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * KYC Upload Documents
     * Sample request:                    POST /api/Account/KYCUploadDocuments      {          \&quot;id\&quot;: \&quot;400000000000\&quot;,          \&quot;useWebSolution\&quot; : false,          \&quot;language\&quot; : \&quot;EN\&quot;,          \&quot;successUrl\&quot; : \&quot;https://www.yourcompany.com/success\&quot;,          \&quot;failureURL\&quot; : \&quot;https://www.yourcompany.com/error\&quot;,      }            POST /api/Account/KYCUploadDocuments      {          \&quot;issuingId\&quot;: \&quot;12345\&quot;      }                    Language parameter is optional, default value is \&quot;EN\&quot;      SuccessUrl parameter is optional      FailureURL parameter is optional
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/KYCUploadDocumentsBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountKYCUploadDocumentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountKYCUploadDocumentsPost",
    value: function apiAccountKYCUploadDocumentsPost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountKYCUploadDocumentsPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountKYCUploadDocumentsPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountKYCUploadDocumentsPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountKYCUploadDocumentsPost");
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
      var returnType = _KYCUploadDocumentsViewModelValidResponsePackage.KYCUploadDocumentsViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/KYCUploadDocuments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountLoginPost operation.
     * @callback moduleapi/AccountApi~apiAccountLoginPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateLoginViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Login
     * Checks email or ID or username against password provided.    Validate login either by email and password or by cardholder id and password or by username and password.    Sample request:            POST /api/Account/Login      {          \&quot;id\&quot;: \&quot;400000000000\&quot;,          \&quot;email\&quot;: \&quot;\&quot;,          \&quot;password\&quot;: \&quot;5EC9953B9423262F36310EF7DD438809\&quot;,          \&quot;username\&quot;: \&quot;\&quot;      }
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/ValidateLoginBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountLoginPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountLoginPost",
    value: function apiAccountLoginPost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountLoginPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountLoginPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountLoginPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountLoginPost");
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
      var returnType = _ValidateLoginViewModelValidResponsePackage.ValidateLoginViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/Login', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountNumberOfDocumentsGet operation.
     * @callback moduleapi/AccountApi~apiAccountNumberOfDocumentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetNumberOfDocumentsViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Number of Documents
     * Gets whether documents are required (MaximumDocuments: 4) and the number of documents currently in the system.    &#x27;DocumentNumber&#x27; and &#x27;DocumentType&#x27; are required, whilst &#x27;IssuingId&#x27; and &#x27;Id&#x27; are optional.    &#x27;IdCountValid&#x27; is true if the number of documents is less than 4, whilst if the number is greater or equal to 4 &#x27;IdCountValid&#x27; will be false if both &#x27;Id&#x27; and &#x27;IssuingId&#x27; are null.  If there is an assigned document for &#x27;Id&#x27; or &#x27;IssuingId&#x27;, &#x27;IdCountValid&#x27; will be true.    Sample request:                    GET /api/Account/NumberOfDocuments?DocumentType&#x3D;Passport&amp;DocumentNumber&#x3D;1137702
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.id 
     * @param {String} opts.issuingId 
     * @param {String} opts.documentNumber 
     * @param {String} opts.documentType 
     * @param {module:api/AccountApi~apiAccountNumberOfDocumentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountNumberOfDocumentsGet",
    value: function apiAccountNumberOfDocumentsGet(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountNumberOfDocumentsGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountNumberOfDocumentsGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountNumberOfDocumentsGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountNumberOfDocumentsGet");
      }
      var pathParams = {};
      var queryParams = {
        'Id': opts['id'],
        'IssuingId': opts['issuingId'],
        'DocumentNumber': opts['documentNumber'],
        'DocumentType': opts['documentType']
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
      var returnType = _GetNumberOfDocumentsViewModelValidResponsePackage.GetNumberOfDocumentsViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/NumberOfDocuments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountPost operation.
     * @callback moduleapi/AccountApi~apiAccountPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueViewModelV2ValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Card Issue
     * Creates virtual cards, physical cards or accounts. Cards are created with the default currency only.    All SDD &amp; KYC cards (primary &amp; secondary) created under a consumer program, must have the following requirements      firstName      lastName      address1      city      zipCode      countryCode      email      MobileNo    &#x27;Bin&#x27; determines whether a card or account is created        5 BIN &#x3D; Card      8 BIN &#x3D; Account        &#x27;DeliveryType&#x27; determines whether a virtual or physical card is created        Virtual &#x3D; VC      Physical &#x3D; PC       Risk Pofiling  When new cards are created, PFS require to gather information on cardholders for risk rating. This information is to be sent in the userdefined property. Below is the list of default information that PFS would require to collect.        Occupation_Profession          • Director / Owner          • Executive          • Manager          • Employee / Worker          • Self employed          • Student          • Retiree          • Unemployed                Occupation          • Public servant / Police / Military          • Agriculture          • Craftwork / Trade          • Arts / Culture / Sport          • Banking / Insurance / Finance / Auditing          • Construction / Publicworks          • Education          • Manufacturing / Maintenance          • Medical / Paramedical          • Food industry / Work from home / Hospitality / Tourism          • Services / IT          • Social Security / NGO          • Politician / Elected Member of Parliament          Card_Purpose          • Receive my social welfare payments          • Receive my salary          • Pay my bills          • Personal Expenses          • Receive income from my business activity          • Send or receive money transfers          • For use abroad          • Gaming or Betting on-line          • Point of Sale purchases          • Savings                Monthly_Income          • LESS THAN 500 EUR          • 500 to 1000 EUR          • 1001 to 1500 EUR          • 1501 to 2000 EUR          • 2001 to 3000 EUR          • MORE THAN 3000 EUR           &#x27;CardImageId&#x27; determines the image to be printed on your physical card. This is to be added in the UserDefined property as displayed in the below sample request.   The value of this property will be provided by Gemalto following integration with their plugin.    Sample request for 5 BIN:                    POST /api/Account      {          \&quot;firstName\&quot;: \&quot;Test\&quot;,          \&quot;middleInitial\&quot;: \&quot;T\&quot;,          \&quot;lastName\&quot;: \&quot;Test\&quot;,          \&quot;address1\&quot;: \&quot;Test\&quot;,          \&quot;city\&quot;: \&quot;Test\&quot;,          \&quot;zipCode\&quot;: \&quot;TST1422\&quot;,          \&quot;countryCode\&quot;: \&quot;MT\&quot;,          \&quot;dateOfBirth\&quot;: \&quot;1990-04-23\&quot;,          \&quot;landline\&quot;: \&quot;0044|11111111\&quot;,          \&quot;mobileNo\&quot;: \&quot;0044|99999999\&quot;,          \&quot;securityQuestion\&quot;: \&quot;Answer is &#x27;Test&#x27;?\&quot;,          \&quot;securityAnswer\&quot;: \&quot;Test\&quot;,          \&quot;email\&quot;: \&quot;test@test.com\&quot;,          \&quot;userDefined2\&quot; : \&quot;2\&quot;,          \&quot;cardStyle\&quot;: \&quot;01\&quot;,          \&quot;embossName\&quot;: \&quot;TEST TEST\&quot;,          \&quot;bin\&quot;: \&quot;{{BIN}}\&quot;,          \&quot;distributorCode\&quot;: \&quot;{{DC}}\&quot;,          \&quot;userdefined\&quot; : {              \&quot;Card_Purpose\&quot;: \&quot;Savings\&quot;,              \&quot;Monthly_Income\&quot;: \&quot;LESS THAN 500 EUR\&quot;,              \&quot;CardImageId\&quot;: \&quot;123456789\&quot;          }      }        Sample request for 8 BIN        POST /api/Account      {          \&quot;firstName\&quot;: \&quot;Number6\&quot;,          \&quot;lastName\&quot;: \&quot;{{$randomLastName}}\&quot;,          \&quot;address1\&quot;: \&quot;{{$randomStreetName}}\&quot;,          \&quot;zipCode\&quot;: \&quot;NDTR9074\&quot;,          \&quot;countryCode\&quot;: \&quot;MT\&quot;,          \&quot;dateofbirth\&quot;: \&quot;2020-11-01\&quot;,          \&quot;distributorCode\&quot;: \&quot;{{DC}}\&quot;,          \&quot;cardStyle\&quot;: \&quot;01\&quot;,          \&quot;email\&quot;:\&quot;Number6@gmail.com\&quot;,          \&quot;bin\&quot;: \&quot;{{BIN}}\&quot;      }
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/IssueBindingModelV2} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/AccountApi~apiAccountPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountPost",
    value: function apiAccountPost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountPost");
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
      var returnType = _IssueViewModelV2ValidResponsePackage.IssueViewModelV2ValidResponsePackage;
      return this.apiClient.callApi('/api/Account', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountReferenceAttemptedRegistrationsGet operation.
     * @callback moduleapi/AccountApi~apiAccountReferenceAttemptedRegistrationsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckAttemptedRegistrationViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attempted Registrations
     * Check the details that a client is trying to use before creating or updating a card.    Sample request:                    GET /api/Account/400000000000/AttemptedRegistrations
     * @param {Number} reference 
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/AccountApi~apiAccountReferenceAttemptedRegistrationsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountReferenceAttemptedRegistrationsGet",
    value: function apiAccountReferenceAttemptedRegistrationsGet(reference, apiVersion, authorization, fMessageId, fOrigin, callback) {
      var postBody = null;
      // verify the required parameter 'reference' is set
      if (reference === undefined || reference === null) {
        throw new Error("Missing the required parameter 'reference' when calling apiAccountReferenceAttemptedRegistrationsGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountReferenceAttemptedRegistrationsGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountReferenceAttemptedRegistrationsGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountReferenceAttemptedRegistrationsGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountReferenceAttemptedRegistrationsGet");
      }
      var pathParams = {
        'Reference': reference
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
      var returnType = _CheckAttemptedRegistrationViewModelValidResponsePackage.CheckAttemptedRegistrationViewModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/{reference}/AttemptedRegistrations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the apiAccountSepaTransactionCountGet operation.
     * @callback moduleapi/AccountApi~apiAccountSepaTransactionCountGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SepaTransactionCountBindingModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sepa Transaction Count
     * Get count of SEPA transactions.    Sample request:                    GET /api/Account/SepaTransactionCount?Direction&#x3D;I&amp;Iban&#x3D;FR7621833000010000060573930&amp;DateTimeFrom&#x3D;2019-01-01&amp;DateTimeTo&#x3D;2020-01-02
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.direction 
     * @param {String} opts.iban 
     * @param {String} opts.dateTimeFrom 
     * @param {String} opts.dateTimeTo 
     * @param {module:api/AccountApi~apiAccountSepaTransactionCountGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "apiAccountSepaTransactionCountGet",
    value: function apiAccountSepaTransactionCountGet(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiAccountSepaTransactionCountGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiAccountSepaTransactionCountGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiAccountSepaTransactionCountGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiAccountSepaTransactionCountGet");
      }
      var pathParams = {};
      var queryParams = {
        'Direction': opts['direction'],
        'Iban': opts['iban'],
        'DateTimeFrom': opts['dateTimeFrom'],
        'DateTimeTo': opts['dateTimeTo']
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
      var returnType = _SepaTransactionCountBindingModelValidResponsePackage.SepaTransactionCountBindingModelValidResponsePackage;
      return this.apiClient.callApi('/api/Account/SepaTransactionCount', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return AccountApi;
}();
exports.AccountApi = AccountApi;