"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetCardholderLevelLimitBindingModelV2 = void 0;
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
 * The SetCardholderLevelLimitBindingModelV2 model module.
 * @module model/SetCardholderLevelLimitBindingModelV2
 * @version 2.0
 */
var SetCardholderLevelLimitBindingModelV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SetCardholderLevelLimitBindingModelV2</code>.
   * @alias module:model/SetCardholderLevelLimitBindingModelV2
   * @class
   * @param limitName {String} Limit to be set on, where values can be 'Pos', 'Cash'.
   * @param limitCount {Number} Transaction count within the limit Period.
   * @param limitAmount {Number} Transactions total amount within the limit Period.
   * @param limitPeriod {String} Limit time period, where values can be {D, W, M, C, Y}.
   */
  function SetCardholderLevelLimitBindingModelV2(limitName, limitCount, limitAmount, limitPeriod) {
    _classCallCheck(this, SetCardholderLevelLimitBindingModelV2);
    this.limitName = limitName;
    this.limitCount = limitCount;
    this.limitAmount = limitAmount;
    this.limitPeriod = limitPeriod;
  }

  /**
   * Constructs a <code>SetCardholderLevelLimitBindingModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SetCardholderLevelLimitBindingModelV2} obj Optional instance to populate.
   * @return {module:model/SetCardholderLevelLimitBindingModelV2} The populated <code>SetCardholderLevelLimitBindingModelV2</code> instance.
   */
  _createClass(SetCardholderLevelLimitBindingModelV2, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SetCardholderLevelLimitBindingModelV2();
        if (data.hasOwnProperty('limitName')) obj.limitName = _ApiClient.ApiClient.convertToType(data['limitName'], 'String');
        if (data.hasOwnProperty('limitCount')) obj.limitCount = _ApiClient.ApiClient.convertToType(data['limitCount'], 'Number');
        if (data.hasOwnProperty('limitAmount')) obj.limitAmount = _ApiClient.ApiClient.convertToType(data['limitAmount'], 'Number');
        if (data.hasOwnProperty('limitPeriod')) obj.limitPeriod = _ApiClient.ApiClient.convertToType(data['limitPeriod'], 'String');
        if (data.hasOwnProperty('removeLimit')) obj.removeLimit = _ApiClient.ApiClient.convertToType(data['removeLimit'], 'Boolean');
      }
      return obj;
    }
  }]);
  return SetCardholderLevelLimitBindingModelV2;
}();
/**
 * Limit to be set on, where values can be 'Pos', 'Cash'.
 * @member {String} limitName
 */
exports.SetCardholderLevelLimitBindingModelV2 = SetCardholderLevelLimitBindingModelV2;
SetCardholderLevelLimitBindingModelV2.prototype.limitName = undefined;

/**
 * Transaction count within the limit Period.
 * @member {Number} limitCount
 */
SetCardholderLevelLimitBindingModelV2.prototype.limitCount = undefined;

/**
 * Transactions total amount within the limit Period.
 * @member {Number} limitAmount
 */
SetCardholderLevelLimitBindingModelV2.prototype.limitAmount = undefined;

/**
 * Limit time period, where values can be {D, W, M, C, Y}.
 * @member {String} limitPeriod
 */
SetCardholderLevelLimitBindingModelV2.prototype.limitPeriod = undefined;

/**
 * Remove the configured cardholder level limit.
 * @member {Boolean} removeLimit
 */
SetCardholderLevelLimitBindingModelV2.prototype.removeLimit = undefined;