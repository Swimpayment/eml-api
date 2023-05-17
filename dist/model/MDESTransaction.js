"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDESTransaction = void 0;
var _ApiClient = require("../ApiClient");
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
 * The MDESTransaction model module.
 * @module model/MDESTransaction
 * @version 2.0
 */
var MDESTransaction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MDESTransaction</code>.
   * @alias module:model/MDESTransaction
   * @class
   */
  function MDESTransaction() {
    _classCallCheck(this, MDESTransaction);
  }

  /**
   * Constructs a <code>MDESTransaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MDESTransaction} obj Optional instance to populate.
   * @return {module:model/MDESTransaction} The populated <code>MDESTransaction</code> instance.
   */
  _createClass(MDESTransaction, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MDESTransaction();
        if (data.hasOwnProperty('transactionDateTime')) obj.transactionDateTime = _ApiClient.ApiClient.convertToType(data['transactionDateTime'], 'String');
        if (data.hasOwnProperty('currencyCode')) obj.currencyCode = _ApiClient.ApiClient.convertToType(data['currencyCode'], 'String');
        if (data.hasOwnProperty('transactionAmount')) obj.transactionAmount = _ApiClient.ApiClient.convertToType(data['transactionAmount'], 'String');
        if (data.hasOwnProperty('transactionTypeCode')) obj.transactionTypeCode = _ApiClient.ApiClient.convertToType(data['transactionTypeCode'], 'String');
        if (data.hasOwnProperty('transactionTypeDescription')) obj.transactionTypeDescription = _ApiClient.ApiClient.convertToType(data['transactionTypeDescription'], 'String');
        if (data.hasOwnProperty('transactionStatusCode')) obj.transactionStatusCode = _ApiClient.ApiClient.convertToType(data['transactionStatusCode'], 'String');
        if (data.hasOwnProperty('merchantName')) obj.merchantName = _ApiClient.ApiClient.convertToType(data['merchantName'], 'String');
        if (data.hasOwnProperty('merchantCategoryCode')) obj.merchantCategoryCode = _ApiClient.ApiClient.convertToType(data['merchantCategoryCode'], 'String');
        if (data.hasOwnProperty('merchantCategoryDescription')) obj.merchantCategoryDescription = _ApiClient.ApiClient.convertToType(data['merchantCategoryDescription'], 'String');
        if (data.hasOwnProperty('posEntryMode')) obj.posEntryMode = _ApiClient.ApiClient.convertToType(data['posEntryMode'], 'String');
      }
      return obj;
    }
  }]);
  return MDESTransaction;
}();
/**
 * @member {String} transactionDateTime
 */
exports.MDESTransaction = MDESTransaction;
MDESTransaction.prototype.transactionDateTime = undefined;

/**
 * @member {String} currencyCode
 */
MDESTransaction.prototype.currencyCode = undefined;

/**
 * @member {String} transactionAmount
 */
MDESTransaction.prototype.transactionAmount = undefined;

/**
 * @member {String} transactionTypeCode
 */
MDESTransaction.prototype.transactionTypeCode = undefined;

/**
 * @member {String} transactionTypeDescription
 */
MDESTransaction.prototype.transactionTypeDescription = undefined;

/**
 * @member {String} transactionStatusCode
 */
MDESTransaction.prototype.transactionStatusCode = undefined;

/**
 * @member {String} merchantName
 */
MDESTransaction.prototype.merchantName = undefined;

/**
 * @member {String} merchantCategoryCode
 */
MDESTransaction.prototype.merchantCategoryCode = undefined;

/**
 * @member {String} merchantCategoryDescription
 */
MDESTransaction.prototype.merchantCategoryDescription = undefined;

/**
 * @member {String} posEntryMode
 */
MDESTransaction.prototype.posEntryMode = undefined;