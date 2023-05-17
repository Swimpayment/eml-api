"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IssueViewModelV2 = void 0;
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
 * The IssueViewModelV2 model module.
 * @module model/IssueViewModelV2
 * @version 2.0
 */
var IssueViewModelV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueViewModelV2</code>.
   * @alias module:model/IssueViewModelV2
   * @class
   */
  function IssueViewModelV2() {
    _classCallCheck(this, IssueViewModelV2);
  }

  /**
   * Constructs a <code>IssueViewModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IssueViewModelV2} obj Optional instance to populate.
   * @return {module:model/IssueViewModelV2} The populated <code>IssueViewModelV2</code> instance.
   */
  _createClass(IssueViewModelV2, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueViewModelV2();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('availableBalance')) obj.availableBalance = _ApiClient.ApiClient.convertToType(data['availableBalance'], 'Number');
        if (data.hasOwnProperty('ledgerBalance')) obj.ledgerBalance = _ApiClient.ApiClient.convertToType(data['ledgerBalance'], 'Number');
        if (data.hasOwnProperty('status')) obj.status = _ApiClient.ApiClient.convertToType(data['status'], 'String');
        if (data.hasOwnProperty('expiryDate')) obj.expiryDate = _ApiClient.ApiClient.convertToType(data['expiryDate'], 'String');
        if (data.hasOwnProperty('ddaNumber')) obj.ddaNumber = _ApiClient.ApiClient.convertToType(data['ddaNumber'], 'String');
        if (data.hasOwnProperty('clientWalletId')) obj.clientWalletId = _ApiClient.ApiClient.convertToType(data['clientWalletId'], 'Number');
        if (data.hasOwnProperty('cardNumber')) obj.cardNumber = _ApiClient.ApiClient.convertToType(data['cardNumber'], 'String');
        if (data.hasOwnProperty('cvv2')) obj.cvv2 = _ApiClient.ApiClient.convertToType(data['cvv2'], 'String');
        if (data.hasOwnProperty('accountId')) obj.accountId = _ApiClient.ApiClient.convertToType(data['accountId'], 'String');
        if (data.hasOwnProperty('walletId')) obj.walletId = _ApiClient.ApiClient.convertToType(data['walletId'], 'String');
        if (data.hasOwnProperty('sequenceCode')) obj.sequenceCode = _ApiClient.ApiClient.convertToType(data['sequenceCode'], 'String');
      }
      return obj;
    }
  }]);
  return IssueViewModelV2;
}();
/**
 * Cardholder id.
 * @member {String} id
 */
exports.IssueViewModelV2 = IssueViewModelV2;
IssueViewModelV2.prototype.id = undefined;

/**
 * Available balance in card. (Penny based)
 * @member {Number} availableBalance
 */
IssueViewModelV2.prototype.availableBalance = undefined;

/**
 * Ledger balance in card. (Penny based)
 * @member {Number} ledgerBalance
 */
IssueViewModelV2.prototype.ledgerBalance = undefined;

/**
 * Status of card.
 * @member {String} status
 */
IssueViewModelV2.prototype.status = undefined;

/**
 * Expiry date of card in yyMM format.
 * @member {String} expiryDate
 */
IssueViewModelV2.prototype.expiryDate = undefined;

/**
 * @member {String} ddaNumber
 */
IssueViewModelV2.prototype.ddaNumber = undefined;

/**
 * @member {Number} clientWalletId
 */
IssueViewModelV2.prototype.clientWalletId = undefined;

/**
 * @member {String} cardNumber
 */
IssueViewModelV2.prototype.cardNumber = undefined;

/**
 * @member {String} cvv2
 */
IssueViewModelV2.prototype.cvv2 = undefined;

/**
 * Trace account id
 * @member {String} accountId
 */
IssueViewModelV2.prototype.accountId = undefined;

/**
 * Trace wallet id
 * @member {String} walletId
 */
IssueViewModelV2.prototype.walletId = undefined;

/**
 * @member {String} sequenceCode
 */
IssueViewModelV2.prototype.sequenceCode = undefined;