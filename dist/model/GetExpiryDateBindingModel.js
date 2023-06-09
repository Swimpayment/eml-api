"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetExpiryDateBindingModel = void 0;
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
 * The GetExpiryDateBindingModel model module.
 * @module model/GetExpiryDateBindingModel
 * @version 2.0
 */
var GetExpiryDateBindingModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetExpiryDateBindingModel</code>.
   * @alias module:model/GetExpiryDateBindingModel
   * @class
   */
  function GetExpiryDateBindingModel() {
    _classCallCheck(this, GetExpiryDateBindingModel);
  }

  /**
   * Constructs a <code>GetExpiryDateBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetExpiryDateBindingModel} obj Optional instance to populate.
   * @return {module:model/GetExpiryDateBindingModel} The populated <code>GetExpiryDateBindingModel</code> instance.
   */
  _createClass(GetExpiryDateBindingModel, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetExpiryDateBindingModel();
        if (data.hasOwnProperty('phone')) obj.phone = _ApiClient.ApiClient.convertToType(data['phone'], 'String');
        if (data.hasOwnProperty('address')) obj.address = _ApiClient.ApiClient.convertToType(data['address'], 'String');
        if (data.hasOwnProperty('zipCode')) obj.zipCode = _ApiClient.ApiClient.convertToType(data['zipCode'], 'String');
        if (data.hasOwnProperty('dateOfBirth')) obj.dateOfBirth = _ApiClient.ApiClient.convertToType(data['dateOfBirth'], 'String');
        if (data.hasOwnProperty('securityQuestion')) obj.securityQuestion = _ApiClient.ApiClient.convertToType(data['securityQuestion'], 'String');
        if (data.hasOwnProperty('securityAnswer')) obj.securityAnswer = _ApiClient.ApiClient.convertToType(data['securityAnswer'], 'String');
        if (data.hasOwnProperty('userDefined1')) obj.userDefined1 = _ApiClient.ApiClient.convertToType(data['userDefined1'], 'String');
        if (data.hasOwnProperty('userDefined2')) obj.userDefined2 = _ApiClient.ApiClient.convertToType(data['userDefined2'], 'String');
        if (data.hasOwnProperty('userDefined3')) obj.userDefined3 = _ApiClient.ApiClient.convertToType(data['userDefined3'], 'String');
        if (data.hasOwnProperty('userDefined4')) obj.userDefined4 = _ApiClient.ApiClient.convertToType(data['userDefined4'], 'String');
      }
      return obj;
    }
  }]);
  return GetExpiryDateBindingModel;
}();
/**
 * Primary cardholder phone.
 * @member {String} phone
 */
exports.GetExpiryDateBindingModel = GetExpiryDateBindingModel;
GetExpiryDateBindingModel.prototype.phone = undefined;

/**
 * Cardholder address.
 * @member {String} address
 */
GetExpiryDateBindingModel.prototype.address = undefined;

/**
 * Cardholder zip code.
 * @member {String} zipCode
 */
GetExpiryDateBindingModel.prototype.zipCode = undefined;

/**
 * Cardholder date of birth, in \"yyyy-MM-dd\" format.
 * @member {String} dateOfBirth
 */
GetExpiryDateBindingModel.prototype.dateOfBirth = undefined;

/**
 * Cardholder security question.
 * @member {String} securityQuestion
 */
GetExpiryDateBindingModel.prototype.securityQuestion = undefined;

/**
 * Cardholder security answer.
 * @member {String} securityAnswer
 */
GetExpiryDateBindingModel.prototype.securityAnswer = undefined;

/**
 * User Defined 1.
 * @member {String} userDefined1
 */
GetExpiryDateBindingModel.prototype.userDefined1 = undefined;

/**
 * User Defined 2.
 * @member {String} userDefined2
 */
GetExpiryDateBindingModel.prototype.userDefined2 = undefined;

/**
 * User Defined 3.
 * @member {String} userDefined3
 */
GetExpiryDateBindingModel.prototype.userDefined3 = undefined;

/**
 * User Defined 4.
 * @member {String} userDefined4
 */
GetExpiryDateBindingModel.prototype.userDefined4 = undefined;