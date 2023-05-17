"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IvrFeeBindingModel = void 0;
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
 * The IvrFeeBindingModel model module.
 * @module model/IvrFeeBindingModel
 * @version 2.0
 */
var IvrFeeBindingModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IvrFeeBindingModel</code>.
   * Ivr Fee binding model body
   * @alias module:model/IvrFeeBindingModel
   * @class
   * @param distributorCode {String} Distributor Code
   */
  function IvrFeeBindingModel(distributorCode) {
    _classCallCheck(this, IvrFeeBindingModel);
    this.distributorCode = distributorCode;
  }

  /**
   * Constructs a <code>IvrFeeBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IvrFeeBindingModel} obj Optional instance to populate.
   * @return {module:model/IvrFeeBindingModel} The populated <code>IvrFeeBindingModel</code> instance.
   */
  _createClass(IvrFeeBindingModel, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IvrFeeBindingModel();
        if (data.hasOwnProperty('distributorCode')) obj.distributorCode = _ApiClient.ApiClient.convertToType(data['distributorCode'], 'String');
        if (data.hasOwnProperty('callLevel')) obj.callLevel = _ApiClient.ApiClient.convertToType(data['callLevel'], 'Number');
        if (data.hasOwnProperty('functionId')) obj.functionId = _ApiClient.ApiClient.convertToType(data['functionId'], 'Number');
        if (data.hasOwnProperty('currencyCode')) obj.currencyCode = _ApiClient.ApiClient.convertToType(data['currencyCode'], 'String');
      }
      return obj;
    }
  }]);
  return IvrFeeBindingModel;
}();
/**
 * Distributor Code
 * @member {String} distributorCode
 */
exports.IvrFeeBindingModel = IvrFeeBindingModel;
IvrFeeBindingModel.prototype.distributorCode = undefined;

/**
 * Call level
 * @member {Number} callLevel
 */
IvrFeeBindingModel.prototype.callLevel = undefined;

/**
 * Function Id
 * @member {Number} functionId
 */
IvrFeeBindingModel.prototype.functionId = undefined;

/**
 * Currency code of amount (ISO-4217 3 char).
 * @member {String} currencyCode
 */
IvrFeeBindingModel.prototype.currencyCode = undefined;