"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecurringPaymentResponsePaymentItemViewModelV2 = void 0;
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
                                                                                                                                                                                                                                                                                                                                                                                               * Swagger Codegen version: 3.0.43
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The RecurringPaymentResponsePaymentItemViewModelV2 model module.
 * @module model/RecurringPaymentResponsePaymentItemViewModelV2
 * @version 2.0
 */
var RecurringPaymentResponsePaymentItemViewModelV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RecurringPaymentResponsePaymentItemViewModelV2</code>.
   * @alias module:model/RecurringPaymentResponsePaymentItemViewModelV2
   * @class
   */
  function RecurringPaymentResponsePaymentItemViewModelV2() {
    _classCallCheck(this, RecurringPaymentResponsePaymentItemViewModelV2);
  }

  /**
   * Constructs a <code>RecurringPaymentResponsePaymentItemViewModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecurringPaymentResponsePaymentItemViewModelV2} obj Optional instance to populate.
   * @return {module:model/RecurringPaymentResponsePaymentItemViewModelV2} The populated <code>RecurringPaymentResponsePaymentItemViewModelV2</code> instance.
   */
  _createClass(RecurringPaymentResponsePaymentItemViewModelV2, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RecurringPaymentResponsePaymentItemViewModelV2();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'Number');
        if (data.hasOwnProperty('bankName')) obj.bankName = _ApiClient.ApiClient.convertToType(data['bankName'], 'String');
        if (data.hasOwnProperty('accountIdentifier')) obj.accountIdentifier = _ApiClient.ApiClient.convertToType(data['accountIdentifier'], 'String');
        if (data.hasOwnProperty('bankIdentifier')) obj.bankIdentifier = _ApiClient.ApiClient.convertToType(data['bankIdentifier'], 'String');
        if (data.hasOwnProperty('fullName')) obj.fullName = _ApiClient.ApiClient.convertToType(data['fullName'], 'String');
        if (data.hasOwnProperty('reference')) obj.reference = _ApiClient.ApiClient.convertToType(data['reference'], 'String');
        if (data.hasOwnProperty('currency')) obj.currency = _ApiClient.ApiClient.convertToType(data['currency'], 'String');
        if (data.hasOwnProperty('amount')) obj.amount = _ApiClient.ApiClient.convertToType(data['amount'], 'Number');
        if (data.hasOwnProperty('paymentDate')) obj.paymentDate = _ApiClient.ApiClient.convertToType(data['paymentDate'], 'String');
        if (data.hasOwnProperty('countryCode')) obj.countryCode = _ApiClient.ApiClient.convertToType(data['countryCode'], 'String');
        if (data.hasOwnProperty('fullAddress')) obj.fullAddress = _ApiClient.ApiClient.convertToType(data['fullAddress'], 'String');
        if (data.hasOwnProperty('city')) obj.city = _ApiClient.ApiClient.convertToType(data['city'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('postCode')) obj.postCode = _ApiClient.ApiClient.convertToType(data['postCode'], 'String');
        if (data.hasOwnProperty('paymentScheme')) obj.paymentScheme = _ApiClient.ApiClient.convertToType(data['paymentScheme'], 'Number');
        if (data.hasOwnProperty('debitCurrency')) obj.debitCurrency = _ApiClient.ApiClient.convertToType(data['debitCurrency'], Object);
        if (data.hasOwnProperty('debitAmount')) obj.debitAmount = _ApiClient.ApiClient.convertToType(data['debitAmount'], Object);
        if (data.hasOwnProperty('bankIdentifier2')) obj.bankIdentifier2 = _ApiClient.ApiClient.convertToType(data['bankIdentifier2'], 'String');
        if (data.hasOwnProperty('bankIdentifier3')) obj.bankIdentifier3 = _ApiClient.ApiClient.convertToType(data['bankIdentifier3'], 'String');
        if (data.hasOwnProperty('payeeId')) obj.payeeId = _ApiClient.ApiClient.convertToType(data['payeeId'], 'String');
        if (data.hasOwnProperty('creditorDateOfBirth')) obj.creditorDateOfBirth = _ApiClient.ApiClient.convertToType(data['creditorDateOfBirth'], 'String');
        if (data.hasOwnProperty('creditorIdentificationType')) obj.creditorIdentificationType = _ApiClient.ApiClient.convertToType(data['creditorIdentificationType'], 'String');
        if (data.hasOwnProperty('creditorIdentificationValue')) obj.creditorIdentificationValue = _ApiClient.ApiClient.convertToType(data['creditorIdentificationValue'], 'String');
      }
      return obj;
    }
  }]);
  return RecurringPaymentResponsePaymentItemViewModelV2;
}();
/**
 * @member {Number} id
 */
exports.RecurringPaymentResponsePaymentItemViewModelV2 = RecurringPaymentResponsePaymentItemViewModelV2;
RecurringPaymentResponsePaymentItemViewModelV2.prototype.id = undefined;

/**
 * @member {String} bankName
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.bankName = undefined;

/**
 * @member {String} accountIdentifier
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.accountIdentifier = undefined;

/**
 * @member {String} bankIdentifier
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.bankIdentifier = undefined;

/**
 * @member {String} fullName
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.fullName = undefined;

/**
 * @member {String} reference
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.reference = undefined;

/**
 * @member {String} currency
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.currency = undefined;

/**
 * @member {Number} amount
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.amount = undefined;

/**
 * @member {String} paymentDate
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.paymentDate = undefined;

/**
 * @member {String} countryCode
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.countryCode = undefined;

/**
 * @member {String} fullAddress
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.fullAddress = undefined;

/**
 * @member {String} city
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.city = undefined;

/**
 * @member {String} state
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.state = undefined;

/**
 * @member {String} postCode
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.postCode = undefined;

/**
 * @member {Number} paymentScheme
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.paymentScheme = undefined;

/**
 * @member {Object} debitCurrency
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.debitCurrency = undefined;

/**
 * @member {Object} debitAmount
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.debitAmount = undefined;

/**
 * @member {String} bankIdentifier2
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.bankIdentifier2 = undefined;

/**
 * @member {String} bankIdentifier3
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.bankIdentifier3 = undefined;

/**
 * @member {String} payeeId
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.payeeId = undefined;

/**
 * @member {String} creditorDateOfBirth
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.creditorDateOfBirth = undefined;

/**
 * @member {String} creditorIdentificationType
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.creditorIdentificationType = undefined;

/**
 * @member {String} creditorIdentificationValue
 */
RecurringPaymentResponsePaymentItemViewModelV2.prototype.creditorIdentificationValue = undefined;