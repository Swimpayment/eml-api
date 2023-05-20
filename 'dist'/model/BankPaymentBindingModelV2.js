"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BankPaymentBindingModelV2 = void 0;
var _ApiClient = require("../ApiClient");
var _BankPaymentCreditorType = require("./BankPaymentCreditorType");
var _BankPaymentScheme = require("./BankPaymentScheme");
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
 * The BankPaymentBindingModelV2 model module.
 * @module model/BankPaymentBindingModelV2
 * @version 2.0
 */
var BankPaymentBindingModelV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BankPaymentBindingModelV2</code>.
   * @alias module:model/BankPaymentBindingModelV2
   * @class
   * @param currency {String} Specify the currency credited to the payee. ISO-4217 3 character currency code
   */
  function BankPaymentBindingModelV2(currency) {
    _classCallCheck(this, BankPaymentBindingModelV2);
    this.currency = currency;
  }

  /**
   * Constructs a <code>BankPaymentBindingModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BankPaymentBindingModelV2} obj Optional instance to populate.
   * @return {module:model/BankPaymentBindingModelV2} The populated <code>BankPaymentBindingModelV2</code> instance.
   */
  _createClass(BankPaymentBindingModelV2, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BankPaymentBindingModelV2();
        if (data.hasOwnProperty('firstName')) obj.firstName = _ApiClient.ApiClient.convertToType(data['firstName'], 'String');
        if (data.hasOwnProperty('lastName')) obj.lastName = _ApiClient.ApiClient.convertToType(data['lastName'], 'String');
        if (data.hasOwnProperty('currency')) obj.currency = _ApiClient.ApiClient.convertToType(data['currency'], 'String');
        if (data.hasOwnProperty('accountIdentifier')) obj.accountIdentifier = _ApiClient.ApiClient.convertToType(data['accountIdentifier'], 'String');
        if (data.hasOwnProperty('bankName')) obj.bankName = _ApiClient.ApiClient.convertToType(data['bankName'], 'String');
        if (data.hasOwnProperty('bankIdentifier')) obj.bankIdentifier = _ApiClient.ApiClient.convertToType(data['bankIdentifier'], 'String');
        if (data.hasOwnProperty('bankIdentifier2')) obj.bankIdentifier2 = _ApiClient.ApiClient.convertToType(data['bankIdentifier2'], 'String');
        if (data.hasOwnProperty('bankIdentifier3')) obj.bankIdentifier3 = _ApiClient.ApiClient.convertToType(data['bankIdentifier3'], 'String');
        if (data.hasOwnProperty('countryCode')) obj.countryCode = _ApiClient.ApiClient.convertToType(data['countryCode'], 'String');
        if (data.hasOwnProperty('addressLine1')) obj.addressLine1 = _ApiClient.ApiClient.convertToType(data['addressLine1'], 'String');
        if (data.hasOwnProperty('addressLine2')) obj.addressLine2 = _ApiClient.ApiClient.convertToType(data['addressLine2'], 'String');
        if (data.hasOwnProperty('city')) obj.city = _ApiClient.ApiClient.convertToType(data['city'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('postCode')) obj.postCode = _ApiClient.ApiClient.convertToType(data['postCode'], 'String');
        if (data.hasOwnProperty('bankPaymentScheme')) obj.bankPaymentScheme = _BankPaymentScheme.BankPaymentScheme.constructFromObject(data['bankPaymentScheme']);
        if (data.hasOwnProperty('debitCurrency')) obj.debitCurrency = _ApiClient.ApiClient.convertToType(data['debitCurrency'], 'String');
        if (data.hasOwnProperty('creditorType')) obj.creditorType = _BankPaymentCreditorType.BankPaymentCreditorType.constructFromObject(data['creditorType']);
        if (data.hasOwnProperty('reference')) obj.reference = _ApiClient.ApiClient.convertToType(data['reference'], 'String');
        if (data.hasOwnProperty('unstructuredReference')) obj.unstructuredReference = _ApiClient.ApiClient.convertToType(data['unstructuredReference'], 'String');
        if (data.hasOwnProperty('isInstant')) obj.isInstant = _ApiClient.ApiClient.convertToType(data['isInstant'], 'Boolean');
        if (data.hasOwnProperty('payeeId')) obj.payeeId = _ApiClient.ApiClient.convertToType(data['payeeId'], 'String');
        if (data.hasOwnProperty('userDefinedFields')) obj.userDefinedFields = _ApiClient.ApiClient.convertToType(data['userDefinedFields'], {
          'String': 'String'
        });
        if (data.hasOwnProperty('creditorDateOfBirth')) obj.creditorDateOfBirth = _ApiClient.ApiClient.convertToType(data['creditorDateOfBirth'], 'String');
        if (data.hasOwnProperty('creditorIdentificationType')) obj.creditorIdentificationType = _ApiClient.ApiClient.convertToType(data['creditorIdentificationType'], 'String');
        if (data.hasOwnProperty('creditorIdentificationValue')) obj.creditorIdentificationValue = _ApiClient.ApiClient.convertToType(data['creditorIdentificationValue'], 'String');
        if (data.hasOwnProperty('paymentAmount')) obj.paymentAmount = _ApiClient.ApiClient.convertToType(data['paymentAmount'], 'Number');
        if (data.hasOwnProperty('debitAmount')) obj.debitAmount = _ApiClient.ApiClient.convertToType(data['debitAmount'], 'Number');
      }
      return obj;
    }
  }]);
  return BankPaymentBindingModelV2;
}();
/**
 * First name of beneficiary (Creditor)
 * @member {String} firstName
 */
exports.BankPaymentBindingModelV2 = BankPaymentBindingModelV2;
BankPaymentBindingModelV2.prototype.firstName = undefined;

/**
 * Last name of beneficiary (Creditor)
 * @member {String} lastName
 */
BankPaymentBindingModelV2.prototype.lastName = undefined;

/**
 * Specify the currency credited to the payee. ISO-4217 3 character currency code
 * @member {String} currency
 */
BankPaymentBindingModelV2.prototype.currency = undefined;

/**
 * Content varies on the target country and currency, see get GetBankPaymentValidation's API for  further details. I.e.: the filed can conain IBAN, AccountNumber etc..
 * @member {String} accountIdentifier
 */
BankPaymentBindingModelV2.prototype.accountIdentifier = undefined;

/**
 * Bank name
 * @member {String} bankName
 */
BankPaymentBindingModelV2.prototype.bankName = undefined;

/**
 * Content varies on the target country and currency, see get GetBankPaymentValidation's API for  further details. I.e.: the filed can conain SWIFT, SortCode etc..
 * @member {String} bankIdentifier
 */
BankPaymentBindingModelV2.prototype.bankIdentifier = undefined;

/**
 * Bank Identifier 2
 * @member {String} bankIdentifier2
 */
BankPaymentBindingModelV2.prototype.bankIdentifier2 = undefined;

/**
 * Bank Identifier 3
 * @member {String} bankIdentifier3
 */
BankPaymentBindingModelV2.prototype.bankIdentifier3 = undefined;

/**
 * Country Code - ISO 3166-2. (Creditor)   This is used in order to determine the target country and so the payment is GBP Faster Payment, Sepa or International swift payments
 * @member {String} countryCode
 */
BankPaymentBindingModelV2.prototype.countryCode = undefined;

/**
 * Address line 1 - Required for SEPA Payments , International SWIFT Payments
 * @member {String} addressLine1
 */
BankPaymentBindingModelV2.prototype.addressLine1 = undefined;

/**
 * Address line 2
 * @member {String} addressLine2
 */
BankPaymentBindingModelV2.prototype.addressLine2 = undefined;

/**
 * City
 * @member {String} city
 */
BankPaymentBindingModelV2.prototype.city = undefined;

/**
 * State
 * @member {String} state
 */
BankPaymentBindingModelV2.prototype.state = undefined;

/**
 * Post Code
 * @member {String} postCode
 */
BankPaymentBindingModelV2.prototype.postCode = undefined;

/**
 * @member {module:model/BankPaymentScheme} bankPaymentScheme
 */
BankPaymentBindingModelV2.prototype.bankPaymentScheme = undefined;

/**
 * Required for multicurrency transactions to specify the currency debited from the payer. Required for SEPA payments and internations SWIFT payments - ISO-4217 3 character currency code
 * @member {String} debitCurrency
 */
BankPaymentBindingModelV2.prototype.debitCurrency = undefined;

/**
 * @member {module:model/BankPaymentCreditorType} creditorType
 */
BankPaymentBindingModelV2.prototype.creditorType = undefined;

/**
 * Description reference of payment
 * @member {String} reference
 */
BankPaymentBindingModelV2.prototype.reference = undefined;

/**
 * Unstuctured refenrece    Note: for certain characters that may break XML these need to be double encoded, so & would be <O31&amp;lt;/O31> when using standard HTML encoding
 * @member {String} unstructuredReference
 */
BankPaymentBindingModelV2.prototype.unstructuredReference = undefined;

/**
 * This boolean type field, indicates if an instant SEPA payment should occur. This functionality only works for SEPA payments.  True: Indicates that an instant sepa payment should happen and be completed in seconds  False: Indicates that a normal sepa payment should be done which can complete in days
 * @member {Boolean} isInstant
 */
BankPaymentBindingModelV2.prototype.isInstant = undefined;

/**
 * Payee reference id
 * @member {String} payeeId
 */
BankPaymentBindingModelV2.prototype.payeeId = undefined;

/**
 * User Defined fields.  This will hold extra information, that user would like to have in the transaction.
 * @member {Object.<String, String>} userDefinedFields
 */
BankPaymentBindingModelV2.prototype.userDefinedFields = undefined;

/**
 * Creditor's date of birth, in \"yyyy-MM-dd\" format.
 * @member {String} creditorDateOfBirth
 */
BankPaymentBindingModelV2.prototype.creditorDateOfBirth = undefined;

/**
 * Creditor identification type. Values available: none, drivers_license, social_security_number, green_card, passport, visa, matricula_consular, registro_federal_de_contribuyentes, clave_unica_de_registro_de_poblacion, credential_de_elector, social_insurance_number, citizenship_papers, drivers_license_canadian, existing_credit_card_details, employer_identification_number, national_id, incorporation_number, others
 * @member {String} creditorIdentificationType
 */
BankPaymentBindingModelV2.prototype.creditorIdentificationType = undefined;

/**
 * Creditor identification Value
 * @member {String} creditorIdentificationValue
 */
BankPaymentBindingModelV2.prototype.creditorIdentificationValue = undefined;

/**
 * Amount of payment. Required for OneOff payments.
 * @member {Number} paymentAmount
 */
BankPaymentBindingModelV2.prototype.paymentAmount = undefined;

/**
 * Required for multicurrency transaction to specify the amount debited from the payer
 * @member {Number} debitAmount
 */
BankPaymentBindingModelV2.prototype.debitAmount = undefined;