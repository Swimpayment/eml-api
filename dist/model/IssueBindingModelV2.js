"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IssueBindingModelV2 = void 0;
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
 * The IssueBindingModelV2 model module.
 * @module model/IssueBindingModelV2
 * @version 2.0
 */
var IssueBindingModelV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueBindingModelV2</code>.
   * Request model for issuing a new cardholder.
   * @alias module:model/IssueBindingModelV2
   * @class
   * @param firstName {String} First name of cardholder.
   * @param lastName {String} Last name of cardholder.
   * @param address1 {String} First line of cardholder address.
   * @param countryCode {String} Country code of cardholder, in regulation with ISO 3166-1 alpha-2.
   * @param dateOfBirth {String} Date of birth of cardholder, in \"yyyy-MM-dd\" format.
   * @param distributorCode {String} The unique identifier assigned by PFS, to your program
   * @param cardStyle {String} Identifies different cards within your program. Fee structures can vary between card styles.
   * @param bin {String} Assigned by PFS. It is the first 8 digits of the cards on your program.
   */
  function IssueBindingModelV2(firstName, lastName, address1, countryCode, dateOfBirth, distributorCode, cardStyle, bin) {
    _classCallCheck(this, IssueBindingModelV2);
    this.firstName = firstName;
    this.lastName = lastName;
    this.address1 = address1;
    this.countryCode = countryCode;
    this.dateOfBirth = dateOfBirth;
    this.distributorCode = distributorCode;
    this.cardStyle = cardStyle;
    this.bin = bin;
  }

  /**
   * Constructs a <code>IssueBindingModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IssueBindingModelV2} obj Optional instance to populate.
   * @return {module:model/IssueBindingModelV2} The populated <code>IssueBindingModelV2</code> instance.
   */
  _createClass(IssueBindingModelV2, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueBindingModelV2();
        if (data.hasOwnProperty('firstName')) obj.firstName = _ApiClient.ApiClient.convertToType(data['firstName'], 'String');
        if (data.hasOwnProperty('middleInitial')) obj.middleInitial = _ApiClient.ApiClient.convertToType(data['middleInitial'], 'String');
        if (data.hasOwnProperty('lastName')) obj.lastName = _ApiClient.ApiClient.convertToType(data['lastName'], 'String');
        if (data.hasOwnProperty('address1')) obj.address1 = _ApiClient.ApiClient.convertToType(data['address1'], 'String');
        if (data.hasOwnProperty('address2')) obj.address2 = _ApiClient.ApiClient.convertToType(data['address2'], 'String');
        if (data.hasOwnProperty('address3')) obj.address3 = _ApiClient.ApiClient.convertToType(data['address3'], 'String');
        if (data.hasOwnProperty('address4')) obj.address4 = _ApiClient.ApiClient.convertToType(data['address4'], 'String');
        if (data.hasOwnProperty('city')) obj.city = _ApiClient.ApiClient.convertToType(data['city'], 'String');
        if (data.hasOwnProperty('county')) obj.county = _ApiClient.ApiClient.convertToType(data['county'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('zipCode')) obj.zipCode = _ApiClient.ApiClient.convertToType(data['zipCode'], 'String');
        if (data.hasOwnProperty('countryCode')) obj.countryCode = _ApiClient.ApiClient.convertToType(data['countryCode'], 'String');
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
        if (data.hasOwnProperty('distributorCode')) obj.distributorCode = _ApiClient.ApiClient.convertToType(data['distributorCode'], 'String');
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
        if (data.hasOwnProperty('secondaryCounty')) obj.secondaryCounty = _ApiClient.ApiClient.convertToType(data['secondaryCounty'], 'String');
        if (data.hasOwnProperty('secondaryZipCode')) obj.secondaryZipCode = _ApiClient.ApiClient.convertToType(data['secondaryZipCode'], 'String');
        if (data.hasOwnProperty('secondaryCountryCode')) obj.secondaryCountryCode = _ApiClient.ApiClient.convertToType(data['secondaryCountryCode'], 'String');
        if (data.hasOwnProperty('bin')) obj.bin = _ApiClient.ApiClient.convertToType(data['bin'], 'String');
        if (data.hasOwnProperty('nationality')) obj.nationality = _ApiClient.ApiClient.convertToType(data['nationality'], 'String');
        if (data.hasOwnProperty('countryOfIssuance')) obj.countryOfIssuance = _ApiClient.ApiClient.convertToType(data['countryOfIssuance'], 'String');
        if (data.hasOwnProperty('documentNumber')) obj.documentNumber = _ApiClient.ApiClient.convertToType(data['documentNumber'], 'String');
        if (data.hasOwnProperty('documentType')) obj.documentType = _ApiClient.ApiClient.convertToType(data['documentType'], 'String');
        if (data.hasOwnProperty('documentExpiryDate')) obj.documentExpiryDate = _ApiClient.ApiClient.convertToType(data['documentExpiryDate'], 'String');
        if (data.hasOwnProperty('gender')) obj.gender = _ApiClient.ApiClient.convertToType(data['gender'], 'String');
        if (data.hasOwnProperty('userDefined')) obj.userDefined = _ApiClient.ApiClient.convertToType(data['userDefined'], {
          'String': 'String'
        });
        if (data.hasOwnProperty('title')) obj.title = _ApiClient.ApiClient.convertToType(data['title'], 'String');
        if (data.hasOwnProperty('username')) obj.username = _ApiClient.ApiClient.convertToType(data['username'], 'String');
        if (data.hasOwnProperty('password')) obj.password = _ApiClient.ApiClient.convertToType(data['password'], 'String');
        if (data.hasOwnProperty('mobileNo')) obj.mobileNo = _ApiClient.ApiClient.convertToType(data['mobileNo'], 'String');
        if (data.hasOwnProperty('walletName')) obj.walletName = _ApiClient.ApiClient.convertToType(data['walletName'], 'String');
        if (data.hasOwnProperty('cardholderIdToLink')) obj.cardholderIdToLink = _ApiClient.ApiClient.convertToType(data['cardholderIdToLink'], 'String');
        if (data.hasOwnProperty('useDefaultSpendWallet')) obj.useDefaultSpendWallet = _ApiClient.ApiClient.convertToType(data['useDefaultSpendWallet'], 'Boolean');
        if (data.hasOwnProperty('currencies')) obj.currencies = _ApiClient.ApiClient.convertToType(data['currencies'], ['String']);
      }
      return obj;
    }
  }]);
  return IssueBindingModelV2;
}();
/**
 * First name of cardholder.
 * @member {String} firstName
 */
exports.IssueBindingModelV2 = IssueBindingModelV2;
IssueBindingModelV2.prototype.firstName = undefined;

/**
 * Middle name of cardholder.
 * @member {String} middleInitial
 */
IssueBindingModelV2.prototype.middleInitial = undefined;

/**
 * Last name of cardholder.
 * @member {String} lastName
 */
IssueBindingModelV2.prototype.lastName = undefined;

/**
 * First line of cardholder address.
 * @member {String} address1
 */
IssueBindingModelV2.prototype.address1 = undefined;

/**
 * Second line of cardholder address.
 * @member {String} address2
 */
IssueBindingModelV2.prototype.address2 = undefined;

/**
 * Third line of cardholder address.
 * @member {String} address3
 */
IssueBindingModelV2.prototype.address3 = undefined;

/**
 * Fourth line of cardholder address.
 * @member {String} address4
 */
IssueBindingModelV2.prototype.address4 = undefined;

/**
 * City of cardholder.
 * @member {String} city
 */
IssueBindingModelV2.prototype.city = undefined;

/**
 * County of cardholder.
 * @member {String} county
 */
IssueBindingModelV2.prototype.county = undefined;

/**
 * State of cardholder.
 * @member {String} state
 */
IssueBindingModelV2.prototype.state = undefined;

/**
 * Zip code of cardholder.
 * @member {String} zipCode
 */
IssueBindingModelV2.prototype.zipCode = undefined;

/**
 * Country code of cardholder, in regulation with ISO 3166-1 alpha-2.
 * @member {String} countryCode
 */
IssueBindingModelV2.prototype.countryCode = undefined;

/**
 * Date of birth of cardholder, in \"yyyy-MM-dd\" format.
 * @member {String} dateOfBirth
 */
IssueBindingModelV2.prototype.dateOfBirth = undefined;

/**
 * Land line of cardholder. Landline dial code can also be added by separating landline and dial code with a |.
 * @member {String} landline
 */
IssueBindingModelV2.prototype.landline = undefined;

/**
 * Security question for cardholder.
 * @member {String} securityQuestion
 */
IssueBindingModelV2.prototype.securityQuestion = undefined;

/**
 * Security answer for cardholder.
 * @member {String} securityAnswer
 */
IssueBindingModelV2.prototype.securityAnswer = undefined;

/**
 * @member {String} securityField3
 */
IssueBindingModelV2.prototype.securityField3 = undefined;

/**
 * @member {String} securityField4
 */
IssueBindingModelV2.prototype.securityField4 = undefined;

/**
 * Cardholder email address.
 * @member {String} email
 */
IssueBindingModelV2.prototype.email = undefined;

/**
 * Open entry field – Available for Client's to pass end-user’s ID
 * @member {String} userDefined1
 */
IssueBindingModelV2.prototype.userDefined1 = undefined;

/**
 * Product type (0, 1, 2). Set to 1 if KYC process has not been complete. Set to 2 if process is complete, or when linking a card. 1 = SDD, 2 = KYC\"
 * @member {String} userDefined2
 */
IssueBindingModelV2.prototype.userDefined2 = undefined;

/**
 * Always set to 'SOLO' - relevant when creating a parent/child link between cards
 * @member {String} userDefined3
 */
IssueBindingModelV2.prototype.userDefined3 = undefined;

/**
 * Open entry field
 * @member {String} userDefined4
 */
IssueBindingModelV2.prototype.userDefined4 = undefined;

/**
 * Social security number of cardholder.
 * @member {String} socialSecurityNumber
 */
IssueBindingModelV2.prototype.socialSecurityNumber = undefined;

/**
 * The unique identifier assigned by PFS, to your program
 * @member {String} distributorCode
 */
IssueBindingModelV2.prototype.distributorCode = undefined;

/**
 * The name of Cardholder's company of employment. Fourth Emboss line on card
 * @member {String} companyName
 */
IssueBindingModelV2.prototype.companyName = undefined;

/**
 * Identifies different cards within your program. Fee structures can vary between card styles.
 * @member {String} cardStyle
 */
IssueBindingModelV2.prototype.cardStyle = undefined;

/**
 * Name to be embossed on card.
 * @member {String} embossName
 */
IssueBindingModelV2.prototype.embossName = undefined;

/**
 * Expiration date of card, in \"yyMM\" format.
 * @member {String} expirationDate
 */
IssueBindingModelV2.prototype.expirationDate = undefined;

/**
 * @member {Boolean} isProducePlastic
 */
IssueBindingModelV2.prototype.isProducePlastic = undefined;

/**
 * Determines the type of card created (VC = Virtual - PC = Physical)
 * @member {String} deliveryType
 */
IssueBindingModelV2.prototype.deliveryType = undefined;

/**
 * @member {String} secondaryAddress1
 */
IssueBindingModelV2.prototype.secondaryAddress1 = undefined;

/**
 * @member {String} secondaryAddress2
 */
IssueBindingModelV2.prototype.secondaryAddress2 = undefined;

/**
 * @member {String} secondaryAddress3
 */
IssueBindingModelV2.prototype.secondaryAddress3 = undefined;

/**
 * @member {String} secondaryAddress4
 */
IssueBindingModelV2.prototype.secondaryAddress4 = undefined;

/**
 * @member {String} secondaryCity
 */
IssueBindingModelV2.prototype.secondaryCity = undefined;

/**
 * @member {String} secondaryCounty
 */
IssueBindingModelV2.prototype.secondaryCounty = undefined;

/**
 * @member {String} secondaryZipCode
 */
IssueBindingModelV2.prototype.secondaryZipCode = undefined;

/**
 * @member {String} secondaryCountryCode
 */
IssueBindingModelV2.prototype.secondaryCountryCode = undefined;

/**
 * Assigned by PFS. It is the first 8 digits of the cards on your program.
 * @member {String} bin
 */
IssueBindingModelV2.prototype.bin = undefined;

/**
 * Cardholder nationality.
 * @member {String} nationality
 */
IssueBindingModelV2.prototype.nationality = undefined;

/**
 * Country of issuance in regulation with ISO 3166-1 alpha-2. Must be empty if the document details are not enabled. (if it is not applicable to your program)
 * @member {String} countryOfIssuance
 */
IssueBindingModelV2.prototype.countryOfIssuance = undefined;

/**
 * Document number must be empty if the document details are not enabled. (if it is not applicable to your program)
 * @member {String} documentNumber
 */
IssueBindingModelV2.prototype.documentNumber = undefined;

/**
 * Document type must be empty if the document details are not enabled. (if it is not applicable to your program)
 * @member {String} documentType
 */
IssueBindingModelV2.prototype.documentType = undefined;

/**
 * Document expiry date must be empty if the document details are not enabled. (if it is not applicable to your program) When used the following formats are accepted: \"yyyy-MM-dd\", \"yyyy/MM/dd\", \"dd-MM-yyyy\", \"dd/MM/yyyy\".
 * @member {String} documentExpiryDate
 */
IssueBindingModelV2.prototype.documentExpiryDate = undefined;

/**
 * Cardholder gender (M or m, F or f).
 * @member {String} gender
 */
IssueBindingModelV2.prototype.gender = undefined;

/**
 * Open entry dictionary - For adding custom cardholder data to an account
 * @member {Object.<String, String>} userDefined
 */
IssueBindingModelV2.prototype.userDefined = undefined;

/**
 * Cardholder title.
 * @member {String} title
 */
IssueBindingModelV2.prototype.title = undefined;

/**
 * Cardholder username.
 * @member {String} username
 */
IssueBindingModelV2.prototype.username = undefined;

/**
 * Cardholder password.
 * @member {String} password
 */
IssueBindingModelV2.prototype.password = undefined;

/**
 * Cardholder mobile number. Mobile number dial code can also be added by separating mobile number and dial code with a |.
 * @member {String} mobileNo
 */
IssueBindingModelV2.prototype.mobileNo = undefined;

/**
 * Name given to wallet, used for Trace processor only
 * @member {String} walletName
 */
IssueBindingModelV2.prototype.walletName = undefined;

/**
 * A linked Card will be created. By default the card will be linked to the default wallet of the referenced card.    When WalletName parameter is also provided the card will be linked to that wallet, or if that wallet does not exists, it will be created.   The curreny of the referenced wallet and the issued card's default currency must match.    Can be used for Trace cards only.
 * @member {String} cardholderIdToLink
 */
IssueBindingModelV2.prototype.cardholderIdToLink = undefined;

/**
 * If a 'ControlledSpend' wallet is present and no matching wallet is found during transaction processing, and if true, the 'Spend' wallet will be used instead.    Can be used for Trace cards only.
 * @member {Boolean} useDefaultSpendWallet
 */
IssueBindingModelV2.prototype.useDefaultSpendWallet = undefined;

/**
 * If a Multicurrency card, pass currencies here for currency purses to be created on Issue.
 * @member {Array.<String>} currencies
 */
IssueBindingModelV2.prototype.currencies = undefined;