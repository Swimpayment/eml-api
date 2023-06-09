"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountUpdateBindingModel = void 0;
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
 * The AccountUpdateBindingModel model module.
 * @module model/AccountUpdateBindingModel
 * @version 2.0
 */
var AccountUpdateBindingModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountUpdateBindingModel</code>.
   * Update cardholder model.
   * @alias module:model/AccountUpdateBindingModel
   * @class
   * @param firstName {String} First name of cardholder.
   * @param lastName {String} Last name of cardholder.
   * @param countryCode {String} Country code of cardholder, in regulation with ISO 3166-1 alpha-2.
   * @param dateOfBirth {String} Date of birth of cardholder, in \"yyyy-MM-dd\" format.
   */
  function AccountUpdateBindingModel(firstName, lastName, countryCode, dateOfBirth) {
    _classCallCheck(this, AccountUpdateBindingModel);
    this.firstName = firstName;
    this.lastName = lastName;
    this.countryCode = countryCode;
    this.dateOfBirth = dateOfBirth;
  }

  /**
   * Constructs a <code>AccountUpdateBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountUpdateBindingModel} obj Optional instance to populate.
   * @return {module:model/AccountUpdateBindingModel} The populated <code>AccountUpdateBindingModel</code> instance.
   */
  _createClass(AccountUpdateBindingModel, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountUpdateBindingModel();
        if (data.hasOwnProperty('firstName')) obj.firstName = _ApiClient.ApiClient.convertToType(data['firstName'], 'String');
        if (data.hasOwnProperty('middleInitial')) obj.middleInitial = _ApiClient.ApiClient.convertToType(data['middleInitial'], 'String');
        if (data.hasOwnProperty('lastName')) obj.lastName = _ApiClient.ApiClient.convertToType(data['lastName'], 'String');
        if (data.hasOwnProperty('address1')) obj.address1 = _ApiClient.ApiClient.convertToType(data['address1'], 'String');
        if (data.hasOwnProperty('address2')) obj.address2 = _ApiClient.ApiClient.convertToType(data['address2'], 'String');
        if (data.hasOwnProperty('address3')) obj.address3 = _ApiClient.ApiClient.convertToType(data['address3'], 'String');
        if (data.hasOwnProperty('address4')) obj.address4 = _ApiClient.ApiClient.convertToType(data['address4'], 'String');
        if (data.hasOwnProperty('city')) obj.city = _ApiClient.ApiClient.convertToType(data['city'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('zipCode')) obj.zipCode = _ApiClient.ApiClient.convertToType(data['zipCode'], 'String');
        if (data.hasOwnProperty('countryCode')) obj.countryCode = _ApiClient.ApiClient.convertToType(data['countryCode'], 'String');
        if (data.hasOwnProperty('county')) obj.county = _ApiClient.ApiClient.convertToType(data['county'], 'String');
        if (data.hasOwnProperty('dateOfBirth')) obj.dateOfBirth = _ApiClient.ApiClient.convertToType(data['dateOfBirth'], 'String');
        if (data.hasOwnProperty('landline')) obj.landline = _ApiClient.ApiClient.convertToType(data['landline'], 'String');
        if (data.hasOwnProperty('securityQuestion')) obj.securityQuestion = _ApiClient.ApiClient.convertToType(data['securityQuestion'], 'String');
        if (data.hasOwnProperty('securityAnswer')) obj.securityAnswer = _ApiClient.ApiClient.convertToType(data['securityAnswer'], 'String');
        if (data.hasOwnProperty('securityField3')) obj.securityField3 = _ApiClient.ApiClient.convertToType(data['securityField3'], 'String');
        if (data.hasOwnProperty('securityField4')) obj.securityField4 = _ApiClient.ApiClient.convertToType(data['securityField4'], 'String');
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('userDefined1')) obj.userDefined1 = _ApiClient.ApiClient.convertToType(data['userDefined1'], 'String');
        if (data.hasOwnProperty('userDefined2')) obj.userDefined2 = _ApiClient.ApiClient.convertToType(data['userDefined2'], 'String');
        if (data.hasOwnProperty('userDefined3')) obj.userDefined3 = _ApiClient.ApiClient.convertToType(data['userDefined3'], 'String');
        if (data.hasOwnProperty('userDefined4')) obj.userDefined4 = _ApiClient.ApiClient.convertToType(data['userDefined4'], 'String');
        if (data.hasOwnProperty('socialSecurityNumber')) obj.socialSecurityNumber = _ApiClient.ApiClient.convertToType(data['socialSecurityNumber'], 'String');
        if (data.hasOwnProperty('companyName')) obj.companyName = _ApiClient.ApiClient.convertToType(data['companyName'], 'String');
        if (data.hasOwnProperty('cardStyle')) obj.cardStyle = _ApiClient.ApiClient.convertToType(data['cardStyle'], 'String');
        if (data.hasOwnProperty('embossName')) obj.embossName = _ApiClient.ApiClient.convertToType(data['embossName'], 'String');
        if (data.hasOwnProperty('expirationDate')) obj.expirationDate = _ApiClient.ApiClient.convertToType(data['expirationDate'], 'String');
        if (data.hasOwnProperty('isProducePlastic')) obj.isProducePlastic = _ApiClient.ApiClient.convertToType(data['isProducePlastic'], 'Boolean');
        if (data.hasOwnProperty('deliveryType')) obj.deliveryType = _ApiClient.ApiClient.convertToType(data['deliveryType'], 'String');
        if (data.hasOwnProperty('secondaryAddress1')) obj.secondaryAddress1 = _ApiClient.ApiClient.convertToType(data['secondaryAddress1'], 'String');
        if (data.hasOwnProperty('secondaryAddress2')) obj.secondaryAddress2 = _ApiClient.ApiClient.convertToType(data['secondaryAddress2'], 'String');
        if (data.hasOwnProperty('secondaryAddress3')) obj.secondaryAddress3 = _ApiClient.ApiClient.convertToType(data['secondaryAddress3'], 'String');
        if (data.hasOwnProperty('secondaryAddress4')) obj.secondaryAddress4 = _ApiClient.ApiClient.convertToType(data['secondaryAddress4'], 'String');
        if (data.hasOwnProperty('secondaryCity')) obj.secondaryCity = _ApiClient.ApiClient.convertToType(data['secondaryCity'], 'String');
        if (data.hasOwnProperty('secondaryZipCode')) obj.secondaryZipCode = _ApiClient.ApiClient.convertToType(data['secondaryZipCode'], 'String');
        if (data.hasOwnProperty('secondaryState')) obj.secondaryState = _ApiClient.ApiClient.convertToType(data['secondaryState'], 'String');
        if (data.hasOwnProperty('secondaryCounty')) obj.secondaryCounty = _ApiClient.ApiClient.convertToType(data['secondaryCounty'], 'String');
        if (data.hasOwnProperty('documentType')) obj.documentType = _ApiClient.ApiClient.convertToType(data['documentType'], 'String');
        if (data.hasOwnProperty('documentNumber')) obj.documentNumber = _ApiClient.ApiClient.convertToType(data['documentNumber'], 'String');
        if (data.hasOwnProperty('documentExpiryDate')) obj.documentExpiryDate = _ApiClient.ApiClient.convertToType(data['documentExpiryDate'], 'String');
        if (data.hasOwnProperty('nationality')) obj.nationality = _ApiClient.ApiClient.convertToType(data['nationality'], 'String');
        if (data.hasOwnProperty('countryOfIssuance')) obj.countryOfIssuance = _ApiClient.ApiClient.convertToType(data['countryOfIssuance'], 'String');
        if (data.hasOwnProperty('gender')) obj.gender = _ApiClient.ApiClient.convertToType(data['gender'], 'String');
        if (data.hasOwnProperty('secondaryCountryCode')) obj.secondaryCountryCode = _ApiClient.ApiClient.convertToType(data['secondaryCountryCode'], 'String');
        if (data.hasOwnProperty('userDefined')) obj.userDefined = _ApiClient.ApiClient.convertToType(data['userDefined'], {
          'String': 'String'
        });
        if (data.hasOwnProperty('mobileNo')) obj.mobileNo = _ApiClient.ApiClient.convertToType(data['mobileNo'], 'String');
        if (data.hasOwnProperty('useDefaultSpendWallet')) obj.useDefaultSpendWallet = _ApiClient.ApiClient.convertToType(data['useDefaultSpendWallet'], 'Boolean');
      }
      return obj;
    }
  }]);
  return AccountUpdateBindingModel;
}();
/**
 * First name of cardholder.
 * @member {String} firstName
 */
exports.AccountUpdateBindingModel = AccountUpdateBindingModel;
AccountUpdateBindingModel.prototype.firstName = undefined;

/**
 * Middle name of cardholder.
 * @member {String} middleInitial
 */
AccountUpdateBindingModel.prototype.middleInitial = undefined;

/**
 * Last name of cardholder.
 * @member {String} lastName
 */
AccountUpdateBindingModel.prototype.lastName = undefined;

/**
 * Address line 1 of the cardholder
 * @member {String} address1
 */
AccountUpdateBindingModel.prototype.address1 = undefined;

/**
 * Address line 2 of the cardholder
 * @member {String} address2
 */
AccountUpdateBindingModel.prototype.address2 = undefined;

/**
 * Address line 3 of the cardholder
 * @member {String} address3
 */
AccountUpdateBindingModel.prototype.address3 = undefined;

/**
 * Address line 4 of the cardholder
 * @member {String} address4
 */
AccountUpdateBindingModel.prototype.address4 = undefined;

/**
 * City of cardholder.
 * @member {String} city
 */
AccountUpdateBindingModel.prototype.city = undefined;

/**
 * State of cardholder.
 * @member {String} state
 */
AccountUpdateBindingModel.prototype.state = undefined;

/**
 * Zip code of cardholder.
 * @member {String} zipCode
 */
AccountUpdateBindingModel.prototype.zipCode = undefined;

/**
 * Country code of cardholder, in regulation with ISO 3166-1 alpha-2.
 * @member {String} countryCode
 */
AccountUpdateBindingModel.prototype.countryCode = undefined;

/**
 * County name of cardholder.
 * @member {String} county
 */
AccountUpdateBindingModel.prototype.county = undefined;

/**
 * Date of birth of cardholder, in \"yyyy-MM-dd\" format.
 * @member {String} dateOfBirth
 */
AccountUpdateBindingModel.prototype.dateOfBirth = undefined;

/**
 * Landline number. Landline dial code can also be added by separating landline and dial code with a |.
 * @member {String} landline
 */
AccountUpdateBindingModel.prototype.landline = undefined;

/**
 * Security question.
 * @member {String} securityQuestion
 */
AccountUpdateBindingModel.prototype.securityQuestion = undefined;

/**
 * Security answer.
 * @member {String} securityAnswer
 */
AccountUpdateBindingModel.prototype.securityAnswer = undefined;

/**
 * @member {String} securityField3
 */
AccountUpdateBindingModel.prototype.securityField3 = undefined;

/**
 * @member {String} securityField4
 */
AccountUpdateBindingModel.prototype.securityField4 = undefined;

/**
 * Cardholder email address.
 * @member {String} email
 */
AccountUpdateBindingModel.prototype.email = undefined;

/**
 * Open entry field – Available for Client's to pass end-user’s ID
 * @member {String} userDefined1
 */
AccountUpdateBindingModel.prototype.userDefined1 = undefined;

/**
 * Product type (0, 1, 2). Set to 1 if KYC process has not been complete. Set to 2 if process is complete, or when linking a card. 1 = SDD, 2 = KYC\"
 * @member {String} userDefined2
 */
AccountUpdateBindingModel.prototype.userDefined2 = undefined;

/**
 * Always set to 'SOLO' - relevant when creating a parent/child link between cards
 * @member {String} userDefined3
 */
AccountUpdateBindingModel.prototype.userDefined3 = undefined;

/**
 * Open entry field
 * @member {String} userDefined4
 */
AccountUpdateBindingModel.prototype.userDefined4 = undefined;

/**
 * Cardholder social security number.
 * @member {String} socialSecurityNumber
 */
AccountUpdateBindingModel.prototype.socialSecurityNumber = undefined;

/**
 * The name of Cardholder's company of employment
 * @member {String} companyName
 */
AccountUpdateBindingModel.prototype.companyName = undefined;

/**
 * Identifies cards types on your program. Fee structures can vary between card styles.
 * @member {String} cardStyle
 */
AccountUpdateBindingModel.prototype.cardStyle = undefined;

/**
 * Name to be embossed on card.
 * @member {String} embossName
 */
AccountUpdateBindingModel.prototype.embossName = undefined;

/**
 * Expiration date of documents, in \"yyyy-MM-dd\" format.
 * @member {String} expirationDate
 */
AccountUpdateBindingModel.prototype.expirationDate = undefined;

/**
 * Produce card.
 * @member {Boolean} isProducePlastic
 */
AccountUpdateBindingModel.prototype.isProducePlastic = undefined;

/**
 * Determines the type of card created (VC = Virtual - PC = Physical)
 * @member {String} deliveryType
 */
AccountUpdateBindingModel.prototype.deliveryType = undefined;

/**
 * @member {String} secondaryAddress1
 */
AccountUpdateBindingModel.prototype.secondaryAddress1 = undefined;

/**
 * @member {String} secondaryAddress2
 */
AccountUpdateBindingModel.prototype.secondaryAddress2 = undefined;

/**
 * @member {String} secondaryAddress3
 */
AccountUpdateBindingModel.prototype.secondaryAddress3 = undefined;

/**
 * @member {String} secondaryAddress4
 */
AccountUpdateBindingModel.prototype.secondaryAddress4 = undefined;

/**
 * @member {String} secondaryCity
 */
AccountUpdateBindingModel.prototype.secondaryCity = undefined;

/**
 * @member {String} secondaryZipCode
 */
AccountUpdateBindingModel.prototype.secondaryZipCode = undefined;

/**
 * @member {String} secondaryState
 */
AccountUpdateBindingModel.prototype.secondaryState = undefined;

/**
 * @member {String} secondaryCounty
 */
AccountUpdateBindingModel.prototype.secondaryCounty = undefined;

/**
 * Document type must be empty if document details are not enabled. (if not applicable to your program)
 * @member {String} documentType
 */
AccountUpdateBindingModel.prototype.documentType = undefined;

/**
 * Document number must be empty if document details are not enabled. (if not applicable to your program)
 * @member {String} documentNumber
 */
AccountUpdateBindingModel.prototype.documentNumber = undefined;

/**
 * Document number must be empty if document details are not enabled. (if not applicable to your program). When used the following formats are accepted: \"yyyy-MM-dd\", \"yyyy/MM/dd\", \"dd-MM-yyyy\", \"dd/MM/yyyy\".
 * @member {String} documentExpiryDate
 */
AccountUpdateBindingModel.prototype.documentExpiryDate = undefined;

/**
 * Nationality of cardholder.
 * @member {String} nationality
 */
AccountUpdateBindingModel.prototype.nationality = undefined;

/**
 * Country of issuance must be empty if document details are not enabled. (if not applicable to your program) In regulation with ISO 3166-1 alpha-2.
 * @member {String} countryOfIssuance
 */
AccountUpdateBindingModel.prototype.countryOfIssuance = undefined;

/**
 * Gender of cardholder (M or m, F or f).
 * @member {String} gender
 */
AccountUpdateBindingModel.prototype.gender = undefined;

/**
 * ISO 1366-1 - A three character code appointed to each country
 * @member {String} secondaryCountryCode
 */
AccountUpdateBindingModel.prototype.secondaryCountryCode = undefined;

/**
 * Open entry dictionary for adding custom cardholder data
 * @member {Object.<String, String>} userDefined
 */
AccountUpdateBindingModel.prototype.userDefined = undefined;

/**
 * Cardholder mobile number. Mobile number dial code can also be added by separating mobile number and dial code with a |.
 * @member {String} mobileNo
 */
AccountUpdateBindingModel.prototype.mobileNo = undefined;

/**
 * If a 'ControlledSpend' wallet is present and no matching wallet is found during transaction processing, and if true, the 'Spend' wallet will be used instead.    Can be used for Trace cards only.
 * @member {Boolean} useDefaultSpendWallet
 */
AccountUpdateBindingModel.prototype.useDefaultSpendWallet = undefined;