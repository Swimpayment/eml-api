"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NominatedPersonGetViewModel = void 0;
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
 * The NominatedPersonGetViewModel model module.
 * @module model/NominatedPersonGetViewModel
 * @version 2.0
 */
var NominatedPersonGetViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NominatedPersonGetViewModel</code>.
   * @alias module:model/NominatedPersonGetViewModel
   * @class
   */
  function NominatedPersonGetViewModel() {
    _classCallCheck(this, NominatedPersonGetViewModel);
  }

  /**
   * Constructs a <code>NominatedPersonGetViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NominatedPersonGetViewModel} obj Optional instance to populate.
   * @return {module:model/NominatedPersonGetViewModel} The populated <code>NominatedPersonGetViewModel</code> instance.
   */
  _createClass(NominatedPersonGetViewModel, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NominatedPersonGetViewModel();
        if (data.hasOwnProperty('firstName')) obj.firstName = _ApiClient.ApiClient.convertToType(data['firstName'], 'String');
        if (data.hasOwnProperty('lastName')) obj.lastName = _ApiClient.ApiClient.convertToType(data['lastName'], 'String');
        if (data.hasOwnProperty('address1')) obj.address1 = _ApiClient.ApiClient.convertToType(data['address1'], 'String');
        if (data.hasOwnProperty('address2')) obj.address2 = _ApiClient.ApiClient.convertToType(data['address2'], 'String');
        if (data.hasOwnProperty('address3')) obj.address3 = _ApiClient.ApiClient.convertToType(data['address3'], 'String');
        if (data.hasOwnProperty('address4')) obj.address4 = _ApiClient.ApiClient.convertToType(data['address4'], 'String');
        if (data.hasOwnProperty('city')) obj.city = _ApiClient.ApiClient.convertToType(data['city'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('postCode')) obj.postCode = _ApiClient.ApiClient.convertToType(data['postCode'], 'String');
        if (data.hasOwnProperty('county')) obj.county = _ApiClient.ApiClient.convertToType(data['county'], 'String');
        if (data.hasOwnProperty('countryCode')) obj.countryCode = _ApiClient.ApiClient.convertToType(data['countryCode'], 'String');
        if (data.hasOwnProperty('dateOfBirth')) obj.dateOfBirth = _ApiClient.ApiClient.convertToType(data['dateOfBirth'], 'Date');
        if (data.hasOwnProperty('placeOfBirth')) obj.placeOfBirth = _ApiClient.ApiClient.convertToType(data['placeOfBirth'], 'String');
        if (data.hasOwnProperty('gender')) obj.gender = _ApiClient.ApiClient.convertToType(data['gender'], 'String');
        if (data.hasOwnProperty('mobileNo')) obj.mobileNo = _ApiClient.ApiClient.convertToType(data['mobileNo'], 'String');
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
      }
      return obj;
    }
  }]);
  return NominatedPersonGetViewModel;
}();
/**
 * @member {String} firstName
 */
exports.NominatedPersonGetViewModel = NominatedPersonGetViewModel;
NominatedPersonGetViewModel.prototype.firstName = undefined;

/**
 * @member {String} lastName
 */
NominatedPersonGetViewModel.prototype.lastName = undefined;

/**
 * @member {String} address1
 */
NominatedPersonGetViewModel.prototype.address1 = undefined;

/**
 * @member {String} address2
 */
NominatedPersonGetViewModel.prototype.address2 = undefined;

/**
 * @member {String} address3
 */
NominatedPersonGetViewModel.prototype.address3 = undefined;

/**
 * @member {String} address4
 */
NominatedPersonGetViewModel.prototype.address4 = undefined;

/**
 * @member {String} city
 */
NominatedPersonGetViewModel.prototype.city = undefined;

/**
 * @member {String} state
 */
NominatedPersonGetViewModel.prototype.state = undefined;

/**
 * @member {String} postCode
 */
NominatedPersonGetViewModel.prototype.postCode = undefined;

/**
 * @member {String} county
 */
NominatedPersonGetViewModel.prototype.county = undefined;

/**
 * @member {String} countryCode
 */
NominatedPersonGetViewModel.prototype.countryCode = undefined;

/**
 * @member {Date} dateOfBirth
 */
NominatedPersonGetViewModel.prototype.dateOfBirth = undefined;

/**
 * @member {String} placeOfBirth
 */
NominatedPersonGetViewModel.prototype.placeOfBirth = undefined;

/**
 * @member {String} gender
 */
NominatedPersonGetViewModel.prototype.gender = undefined;

/**
 * @member {String} mobileNo
 */
NominatedPersonGetViewModel.prototype.mobileNo = undefined;

/**
 * @member {String} email
 */
NominatedPersonGetViewModel.prototype.email = undefined;