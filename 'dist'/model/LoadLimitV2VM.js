"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadLimitV2VM = void 0;
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
 * The LoadLimitV2VM model module.
 * @module model/LoadLimitV2VM
 * @version 2.0
 */
var LoadLimitV2VM = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoadLimitV2VM</code>.
   * @alias module:model/LoadLimitV2VM
   * @class
   */
  function LoadLimitV2VM() {
    _classCallCheck(this, LoadLimitV2VM);
  }

  /**
   * Constructs a <code>LoadLimitV2VM</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoadLimitV2VM} obj Optional instance to populate.
   * @return {module:model/LoadLimitV2VM} The populated <code>LoadLimitV2VM</code> instance.
   */
  _createClass(LoadLimitV2VM, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoadLimitV2VM();
        if (data.hasOwnProperty('maxLoadPerDay')) obj.maxLoadPerDay = _ApiClient.ApiClient.convertToType(data['maxLoadPerDay'], 'Number');
        if (data.hasOwnProperty('monthlyLoadLimit')) obj.monthlyLoadLimit = _ApiClient.ApiClient.convertToType(data['monthlyLoadLimit'], 'Number');
        if (data.hasOwnProperty('yearlyLoadLimit')) obj.yearlyLoadLimit = _ApiClient.ApiClient.convertToType(data['yearlyLoadLimit'], 'Number');
        if (data.hasOwnProperty('maxLoadLimitPerTransaction')) obj.maxLoadLimitPerTransaction = _ApiClient.ApiClient.convertToType(data['maxLoadLimitPerTransaction'], 'Number');
        if (data.hasOwnProperty('maxLoadTriesPerDay')) obj.maxLoadTriesPerDay = _ApiClient.ApiClient.convertToType(data['maxLoadTriesPerDay'], 'Number');
        if (data.hasOwnProperty('maxLoadTriesPerMonth')) obj.maxLoadTriesPerMonth = _ApiClient.ApiClient.convertToType(data['maxLoadTriesPerMonth'], 'Number');
        if (data.hasOwnProperty('maxLoadTriesPerYear')) obj.maxLoadTriesPerYear = _ApiClient.ApiClient.convertToType(data['maxLoadTriesPerYear'], 'Number');
        if (data.hasOwnProperty('maxLoadTriesPerLifetime')) obj.maxLoadTriesPerLifetime = _ApiClient.ApiClient.convertToType(data['maxLoadTriesPerLifetime'], 'Number');
        if (data.hasOwnProperty('maxBalanceOnCard')) obj.maxBalanceOnCard = _ApiClient.ApiClient.convertToType(data['maxBalanceOnCard'], 'Number');
      }
      return obj;
    }
  }]);
  return LoadLimitV2VM;
}();
/**
 * @member {Number} maxLoadPerDay
 */
exports.LoadLimitV2VM = LoadLimitV2VM;
LoadLimitV2VM.prototype.maxLoadPerDay = undefined;

/**
 * @member {Number} monthlyLoadLimit
 */
LoadLimitV2VM.prototype.monthlyLoadLimit = undefined;

/**
 * @member {Number} yearlyLoadLimit
 */
LoadLimitV2VM.prototype.yearlyLoadLimit = undefined;

/**
 * @member {Number} maxLoadLimitPerTransaction
 */
LoadLimitV2VM.prototype.maxLoadLimitPerTransaction = undefined;

/**
 * @member {Number} maxLoadTriesPerDay
 */
LoadLimitV2VM.prototype.maxLoadTriesPerDay = undefined;

/**
 * @member {Number} maxLoadTriesPerMonth
 */
LoadLimitV2VM.prototype.maxLoadTriesPerMonth = undefined;

/**
 * @member {Number} maxLoadTriesPerYear
 */
LoadLimitV2VM.prototype.maxLoadTriesPerYear = undefined;

/**
 * @member {Number} maxLoadTriesPerLifetime
 */
LoadLimitV2VM.prototype.maxLoadTriesPerLifetime = undefined;

/**
 * @member {Number} maxBalanceOnCard
 */
LoadLimitV2VM.prototype.maxBalanceOnCard = undefined;