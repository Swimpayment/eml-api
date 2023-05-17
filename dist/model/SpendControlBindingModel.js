"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpendControlBindingModel = void 0;
var _ApiClient = require("../ApiClient");
var _SpendControlEcmLimits = require("./SpendControlEcmLimits");
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
 * The SpendControlBindingModel model module.
 * @module model/SpendControlBindingModel
 * @version 2.0
 */
var SpendControlBindingModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SpendControlBindingModel</code>.
   * @alias module:model/SpendControlBindingModel
   * @class
   */
  function SpendControlBindingModel() {
    _classCallCheck(this, SpendControlBindingModel);
  }

  /**
   * Constructs a <code>SpendControlBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpendControlBindingModel} obj Optional instance to populate.
   * @return {module:model/SpendControlBindingModel} The populated <code>SpendControlBindingModel</code> instance.
   */
  _createClass(SpendControlBindingModel, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpendControlBindingModel();
        if (data.hasOwnProperty('currencyCode')) obj.currencyCode = _ApiClient.ApiClient.convertToType(data['currencyCode'], 'String');
        if (data.hasOwnProperty('limits')) obj.limits = _SpendControlEcmLimits.SpendControlEcmLimits.constructFromObject(data['limits']);
        if (data.hasOwnProperty('spendControlGroupName')) obj.spendControlGroupName = _ApiClient.ApiClient.convertToType(data['spendControlGroupName'], 'String');
        if (data.hasOwnProperty('applyToLinkedCards')) obj.applyToLinkedCards = _ApiClient.ApiClient.convertToType(data['applyToLinkedCards'], 'Boolean');
      }
      return obj;
    }
  }]);
  return SpendControlBindingModel;
}();
/**
 * Currency code (ISO-4217) 3 letter currency code    If not provided, the limit will be set for the account’s default currency.
 * @member {String} currencyCode
 */
exports.SpendControlBindingModel = SpendControlBindingModel;
SpendControlBindingModel.prototype.currencyCode = undefined;

/**
 * @member {module:model/SpendControlEcmLimits} limits
 */
SpendControlBindingModel.prototype.limits = undefined;

/**
 * The name of a pre-defined limit setting, created with the Create Spend Control Group API    Either SpendControlGroupName or Limits is required (both cannot be set at the same time)
 * @member {String} spendControlGroupName
 */
SpendControlBindingModel.prototype.spendControlGroupName = undefined;

/**
 * If set to Ture the setting will be applied to all cards which are linked to the Cardholder's account.   Default is false so the change will be applied to a single card.
 * @member {Boolean} applyToLinkedCards
 */
SpendControlBindingModel.prototype.applyToLinkedCards = undefined;