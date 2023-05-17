"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadLimitsV2ViewModelValidResponsePackage = void 0;
var _ApiClient = require("../ApiClient");
var _LoadLimitsV2ViewModel = require("./LoadLimitsV2ViewModel");
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
 * The LoadLimitsV2ViewModelValidResponsePackage model module.
 * @module model/LoadLimitsV2ViewModelValidResponsePackage
 * @version 2.0
 */
var LoadLimitsV2ViewModelValidResponsePackage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoadLimitsV2ViewModelValidResponsePackage</code>.
   * Package response for successful requests.
   * @alias module:model/LoadLimitsV2ViewModelValidResponsePackage
   * @class
   */
  function LoadLimitsV2ViewModelValidResponsePackage() {
    _classCallCheck(this, LoadLimitsV2ViewModelValidResponsePackage);
  }

  /**
   * Constructs a <code>LoadLimitsV2ViewModelValidResponsePackage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoadLimitsV2ViewModelValidResponsePackage} obj Optional instance to populate.
   * @return {module:model/LoadLimitsV2ViewModelValidResponsePackage} The populated <code>LoadLimitsV2ViewModelValidResponsePackage</code> instance.
   */
  _createClass(LoadLimitsV2ViewModelValidResponsePackage, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoadLimitsV2ViewModelValidResponsePackage();
        if (data.hasOwnProperty('data')) obj.data = _LoadLimitsV2ViewModel.LoadLimitsV2ViewModel.constructFromObject(data['data']);
        if (data.hasOwnProperty('referenceId')) obj.referenceId = _ApiClient.ApiClient.convertToType(data['referenceId'], 'Number');
      }
      return obj;
    }
  }]);
  return LoadLimitsV2ViewModelValidResponsePackage;
}();
/**
 * @member {module:model/LoadLimitsV2ViewModel} data
 */
exports.LoadLimitsV2ViewModelValidResponsePackage = LoadLimitsV2ViewModelValidResponsePackage;
LoadLimitsV2ViewModelValidResponsePackage.prototype.data = undefined;

/**
 * Reference id of log table.
 * @member {Number} referenceId
 */
LoadLimitsV2ViewModelValidResponsePackage.prototype.referenceId = undefined;