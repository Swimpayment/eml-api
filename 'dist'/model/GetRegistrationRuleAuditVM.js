"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetRegistrationRuleAuditVM = void 0;
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
 * The GetRegistrationRuleAuditVM model module.
 * @module model/GetRegistrationRuleAuditVM
 * @version 2.0
 */
var GetRegistrationRuleAuditVM = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetRegistrationRuleAuditVM</code>.
   * @alias module:model/GetRegistrationRuleAuditVM
   * @class
   */
  function GetRegistrationRuleAuditVM() {
    _classCallCheck(this, GetRegistrationRuleAuditVM);
  }

  /**
   * Constructs a <code>GetRegistrationRuleAuditVM</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRegistrationRuleAuditVM} obj Optional instance to populate.
   * @return {module:model/GetRegistrationRuleAuditVM} The populated <code>GetRegistrationRuleAuditVM</code> instance.
   */
  _createClass(GetRegistrationRuleAuditVM, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetRegistrationRuleAuditVM();
        if (data.hasOwnProperty('auditId')) obj.auditId = _ApiClient.ApiClient.convertToType(data['auditId'], 'Number');
        if (data.hasOwnProperty('userRegistrationRuleId')) obj.userRegistrationRuleId = _ApiClient.ApiClient.convertToType(data['userRegistrationRuleId'], 'Number');
        if (data.hasOwnProperty('binDistributorCodeId')) obj.binDistributorCodeId = _ApiClient.ApiClient.convertToType(data['binDistributorCodeId'], 'Number');
        if (data.hasOwnProperty('cardholderId')) obj.cardholderId = _ApiClient.ApiClient.convertToType(data['cardholderId'], 'Number');
        if (data.hasOwnProperty('csrId')) obj.csrId = _ApiClient.ApiClient.convertToType(data['csrId'], 'Number');
        if (data.hasOwnProperty('csrRevertedId')) obj.csrRevertedId = _ApiClient.ApiClient.convertToType(data['csrRevertedId'], 'Number');
        if (data.hasOwnProperty('oldCardStatus')) obj.oldCardStatus = _ApiClient.ApiClient.convertToType(data['oldCardStatus'], 'String');
        if (data.hasOwnProperty('newCardStatus')) obj.newCardStatus = _ApiClient.ApiClient.convertToType(data['newCardStatus'], 'String');
        if (data.hasOwnProperty('blacklistedDatetime')) obj.blacklistedDatetime = _ApiClient.ApiClient.convertToType(data['blacklistedDatetime'], 'String');
        if (data.hasOwnProperty('revertedDatetime')) obj.revertedDatetime = _ApiClient.ApiClient.convertToType(data['revertedDatetime'], 'String');
        if (data.hasOwnProperty('firstName')) obj.firstName = _ApiClient.ApiClient.convertToType(data['firstName'], 'String');
        if (data.hasOwnProperty('lastName')) obj.lastName = _ApiClient.ApiClient.convertToType(data['lastName'], 'String');
        if (data.hasOwnProperty('dateOfBirth')) obj.dateOfBirth = _ApiClient.ApiClient.convertToType(data['dateOfBirth'], 'String');
        if (data.hasOwnProperty('mobileNo')) obj.mobileNo = _ApiClient.ApiClient.convertToType(data['mobileNo'], 'String');
        if (data.hasOwnProperty('phoneNo')) obj.phoneNo = _ApiClient.ApiClient.convertToType(data['phoneNo'], 'String');
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('documentNumber')) obj.documentNumber = _ApiClient.ApiClient.convertToType(data['documentNumber'], 'String');
        if (data.hasOwnProperty('documentType')) obj.documentType = _ApiClient.ApiClient.convertToType(data['documentType'], 'String');
        if (data.hasOwnProperty('documentExpiryDate')) obj.documentExpiryDate = _ApiClient.ApiClient.convertToType(data['documentExpiryDate'], 'String');
        if (data.hasOwnProperty('countryOfIssuance')) obj.countryOfIssuance = _ApiClient.ApiClient.convertToType(data['countryOfIssuance'], 'String');
        if (data.hasOwnProperty('address1')) obj.address1 = _ApiClient.ApiClient.convertToType(data['address1'], 'String');
        if (data.hasOwnProperty('address2')) obj.address2 = _ApiClient.ApiClient.convertToType(data['address2'], 'String');
        if (data.hasOwnProperty('zipCode')) obj.zipCode = _ApiClient.ApiClient.convertToType(data['zipCode'], 'String');
        if (data.hasOwnProperty('city')) obj.city = _ApiClient.ApiClient.convertToType(data['city'], 'String');
        if (data.hasOwnProperty('countryCode')) obj.countryCode = _ApiClient.ApiClient.convertToType(data['countryCode'], 'String');
        if (data.hasOwnProperty('blacklistingOrigin')) obj.blacklistingOrigin = _ApiClient.ApiClient.convertToType(data['blacklistingOrigin'], 'String');
        if (data.hasOwnProperty('blacklistingReason')) obj.blacklistingReason = _ApiClient.ApiClient.convertToType(data['blacklistingReason'], 'String');
        if (data.hasOwnProperty('note')) obj.note = _ApiClient.ApiClient.convertToType(data['note'], 'String');
        if (data.hasOwnProperty('auditNote')) obj.auditNote = _ApiClient.ApiClient.convertToType(data['auditNote'], 'String');
        if (data.hasOwnProperty('deleteBlockReason')) obj.deleteBlockReason = _ApiClient.ApiClient.convertToType(data['deleteBlockReason'], 'String');
      }
      return obj;
    }
  }]);
  return GetRegistrationRuleAuditVM;
}();
/**
 * @member {Number} auditId
 */
exports.GetRegistrationRuleAuditVM = GetRegistrationRuleAuditVM;
GetRegistrationRuleAuditVM.prototype.auditId = undefined;

/**
 * @member {Number} userRegistrationRuleId
 */
GetRegistrationRuleAuditVM.prototype.userRegistrationRuleId = undefined;

/**
 * @member {Number} binDistributorCodeId
 */
GetRegistrationRuleAuditVM.prototype.binDistributorCodeId = undefined;

/**
 * @member {Number} cardholderId
 */
GetRegistrationRuleAuditVM.prototype.cardholderId = undefined;

/**
 * @member {Number} csrId
 */
GetRegistrationRuleAuditVM.prototype.csrId = undefined;

/**
 * @member {Number} csrRevertedId
 */
GetRegistrationRuleAuditVM.prototype.csrRevertedId = undefined;

/**
 * @member {String} oldCardStatus
 */
GetRegistrationRuleAuditVM.prototype.oldCardStatus = undefined;

/**
 * @member {String} newCardStatus
 */
GetRegistrationRuleAuditVM.prototype.newCardStatus = undefined;

/**
 * @member {String} blacklistedDatetime
 */
GetRegistrationRuleAuditVM.prototype.blacklistedDatetime = undefined;

/**
 * @member {String} revertedDatetime
 */
GetRegistrationRuleAuditVM.prototype.revertedDatetime = undefined;

/**
 * @member {String} firstName
 */
GetRegistrationRuleAuditVM.prototype.firstName = undefined;

/**
 * @member {String} lastName
 */
GetRegistrationRuleAuditVM.prototype.lastName = undefined;

/**
 * @member {String} dateOfBirth
 */
GetRegistrationRuleAuditVM.prototype.dateOfBirth = undefined;

/**
 * @member {String} mobileNo
 */
GetRegistrationRuleAuditVM.prototype.mobileNo = undefined;

/**
 * @member {String} phoneNo
 */
GetRegistrationRuleAuditVM.prototype.phoneNo = undefined;

/**
 * @member {String} email
 */
GetRegistrationRuleAuditVM.prototype.email = undefined;

/**
 * @member {String} documentNumber
 */
GetRegistrationRuleAuditVM.prototype.documentNumber = undefined;

/**
 * @member {String} documentType
 */
GetRegistrationRuleAuditVM.prototype.documentType = undefined;

/**
 * @member {String} documentExpiryDate
 */
GetRegistrationRuleAuditVM.prototype.documentExpiryDate = undefined;

/**
 * @member {String} countryOfIssuance
 */
GetRegistrationRuleAuditVM.prototype.countryOfIssuance = undefined;

/**
 * @member {String} address1
 */
GetRegistrationRuleAuditVM.prototype.address1 = undefined;

/**
 * @member {String} address2
 */
GetRegistrationRuleAuditVM.prototype.address2 = undefined;

/**
 * @member {String} zipCode
 */
GetRegistrationRuleAuditVM.prototype.zipCode = undefined;

/**
 * @member {String} city
 */
GetRegistrationRuleAuditVM.prototype.city = undefined;

/**
 * @member {String} countryCode
 */
GetRegistrationRuleAuditVM.prototype.countryCode = undefined;

/**
 * @member {String} blacklistingOrigin
 */
GetRegistrationRuleAuditVM.prototype.blacklistingOrigin = undefined;

/**
 * @member {String} blacklistingReason
 */
GetRegistrationRuleAuditVM.prototype.blacklistingReason = undefined;

/**
 * @member {String} note
 */
GetRegistrationRuleAuditVM.prototype.note = undefined;

/**
 * @member {String} auditNote
 */
GetRegistrationRuleAuditVM.prototype.auditNote = undefined;

/**
 * @member {String} deleteBlockReason
 */
GetRegistrationRuleAuditVM.prototype.deleteBlockReason = undefined;