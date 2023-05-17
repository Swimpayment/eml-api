"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FullLoadsV2ViewModel = void 0;
var _ApiClient = require("../ApiClient");
var _CardLoadsFeeV2VM = require("./CardLoadsFeeV2VM");
var _CardLoadsV2VM = require("./CardLoadsV2VM");
var _LoadLimitV2VM = require("./LoadLimitV2VM");
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
 * The FullLoadsV2ViewModel model module.
 * @module model/FullLoadsV2ViewModel
 * @version 2.0
 */
var FullLoadsV2ViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FullLoadsV2ViewModel</code>.
   * @alias module:model/FullLoadsV2ViewModel
   * @class
   */
  function FullLoadsV2ViewModel() {
    _classCallCheck(this, FullLoadsV2ViewModel);
  }

  /**
   * Constructs a <code>FullLoadsV2ViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FullLoadsV2ViewModel} obj Optional instance to populate.
   * @return {module:model/FullLoadsV2ViewModel} The populated <code>FullLoadsV2ViewModel</code> instance.
   */
  _createClass(FullLoadsV2ViewModel, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FullLoadsV2ViewModel();
        if (data.hasOwnProperty('loadLimitsInfo')) obj.loadLimitsInfo = _LoadLimitV2VM.LoadLimitV2VM.constructFromObject(data['loadLimitsInfo']);
        if (data.hasOwnProperty('cardLoadsInfo')) obj.cardLoadsInfo = _CardLoadsV2VM.CardLoadsV2VM.constructFromObject(data['cardLoadsInfo']);
        if (data.hasOwnProperty('cardLoadsFeeInfo')) obj.cardLoadsFeeInfo = _CardLoadsFeeV2VM.CardLoadsFeeV2VM.constructFromObject(data['cardLoadsFeeInfo']);
      }
      return obj;
    }
  }]);
  return FullLoadsV2ViewModel;
}();
/**
 * @member {module:model/LoadLimitV2VM} loadLimitsInfo
 */
exports.FullLoadsV2ViewModel = FullLoadsV2ViewModel;
FullLoadsV2ViewModel.prototype.loadLimitsInfo = undefined;

/**
 * @member {module:model/CardLoadsV2VM} cardLoadsInfo
 */
FullLoadsV2ViewModel.prototype.cardLoadsInfo = undefined;

/**
 * @member {module:model/CardLoadsFeeV2VM} cardLoadsFeeInfo
 */
FullLoadsV2ViewModel.prototype.cardLoadsFeeInfo = undefined;