"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeeBindingModelV2 = void 0;
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
 * The FeeBindingModelV2 model module.
 * @module model/FeeBindingModelV2
 * @version 2.0
 */
var FeeBindingModelV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FeeBindingModelV2</code>.
   * Request model for charging fee.
   * @alias module:model/FeeBindingModelV2
   * @class
   * @param feeAmount {Number} Fee amount to be charged.
   * @param description {String} Description must be whitelisted for call to be successful
   */
  function FeeBindingModelV2(feeAmount, description) {
    _classCallCheck(this, FeeBindingModelV2);
    this.feeAmount = feeAmount;
    this.description = description;
  }

  /**
   * Constructs a <code>FeeBindingModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeeBindingModelV2} obj Optional instance to populate.
   * @return {module:model/FeeBindingModelV2} The populated <code>FeeBindingModelV2</code> instance.
   */
  _createClass(FeeBindingModelV2, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FeeBindingModelV2();
        if (data.hasOwnProperty('feeAmount')) obj.feeAmount = _ApiClient.ApiClient.convertToType(data['feeAmount'], 'Number');
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
        if (data.hasOwnProperty('takePartialFee')) obj.takePartialFee = _ApiClient.ApiClient.convertToType(data['takePartialFee'], 'Boolean');
      }
      return obj;
    }
  }]);
  return FeeBindingModelV2;
}();
/**
 * Fee amount to be charged.
 * @member {Number} feeAmount
 */
exports.FeeBindingModelV2 = FeeBindingModelV2;
FeeBindingModelV2.prototype.feeAmount = undefined;

/**
 * Description must be whitelisted for call to be successful
 * @member {String} description
 */
FeeBindingModelV2.prototype.description = undefined;

/**
 * Take partial fee if insufficient funds
 * @member {Boolean} takePartialFee
 */
FeeBindingModelV2.prototype.takePartialFee = undefined;