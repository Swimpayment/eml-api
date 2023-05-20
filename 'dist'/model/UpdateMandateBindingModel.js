"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateMandateBindingModel = void 0;
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
 * The UpdateMandateBindingModel model module.
 * @module model/UpdateMandateBindingModel
 * @version 2.0
 */
var UpdateMandateBindingModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateMandateBindingModel</code>.
   * @alias module:model/UpdateMandateBindingModel
   * @class
   * @param mandateId {Number} Mandate id to be updated
   * @param merchantName {String} Creditor merchant name
   * @param debitingIBAN {String} Debiting cardholder Iban
   * @param statusId {Number} Status id of mandate (1 - Pending, 2 - Blocked, 3 - Cancelled, 4 - Expired)
   * @param mandateUsername {String} Username updating mandate
   */
  function UpdateMandateBindingModel(mandateId, merchantName, debitingIBAN, statusId, mandateUsername) {
    _classCallCheck(this, UpdateMandateBindingModel);
    this.mandateId = mandateId;
    this.merchantName = merchantName;
    this.debitingIBAN = debitingIBAN;
    this.statusId = statusId;
    this.mandateUsername = mandateUsername;
  }

  /**
   * Constructs a <code>UpdateMandateBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateMandateBindingModel} obj Optional instance to populate.
   * @return {module:model/UpdateMandateBindingModel} The populated <code>UpdateMandateBindingModel</code> instance.
   */
  _createClass(UpdateMandateBindingModel, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateMandateBindingModel();
        if (data.hasOwnProperty('mandateId')) obj.mandateId = _ApiClient.ApiClient.convertToType(data['mandateId'], 'Number');
        if (data.hasOwnProperty('merchantName')) obj.merchantName = _ApiClient.ApiClient.convertToType(data['merchantName'], 'String');
        if (data.hasOwnProperty('debitingIBAN')) obj.debitingIBAN = _ApiClient.ApiClient.convertToType(data['debitingIBAN'], 'String');
        if (data.hasOwnProperty('statusId')) obj.statusId = _ApiClient.ApiClient.convertToType(data['statusId'], 'Number');
        if (data.hasOwnProperty('mandateUsername')) obj.mandateUsername = _ApiClient.ApiClient.convertToType(data['mandateUsername'], 'String');
        if (data.hasOwnProperty('referenceNumber')) obj.referenceNumber = _ApiClient.ApiClient.convertToType(data['referenceNumber'], 'String');
        if (data.hasOwnProperty('reason')) obj.reason = _ApiClient.ApiClient.convertToType(data['reason'], 'String');
      }
      return obj;
    }
  }]);
  return UpdateMandateBindingModel;
}();
/**
 * Mandate id to be updated
 * @member {Number} mandateId
 */
exports.UpdateMandateBindingModel = UpdateMandateBindingModel;
UpdateMandateBindingModel.prototype.mandateId = undefined;

/**
 * Creditor merchant name
 * @member {String} merchantName
 */
UpdateMandateBindingModel.prototype.merchantName = undefined;

/**
 * Debiting cardholder Iban
 * @member {String} debitingIBAN
 */
UpdateMandateBindingModel.prototype.debitingIBAN = undefined;

/**
 * Status id of mandate (1 - Pending, 2 - Blocked, 3 - Cancelled, 4 - Expired)
 * @member {Number} statusId
 */
UpdateMandateBindingModel.prototype.statusId = undefined;

/**
 * Username updating mandate
 * @member {String} mandateUsername
 */
UpdateMandateBindingModel.prototype.mandateUsername = undefined;

/**
 * Merchant reference
 * @member {String} referenceNumber
 */
UpdateMandateBindingModel.prototype.referenceNumber = undefined;

/**
 * @member {String} reason
 */
UpdateMandateBindingModel.prototype.reason = undefined;