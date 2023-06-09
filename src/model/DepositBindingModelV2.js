/*
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
import {ApiClient} from '../ApiClient';

/**
 * The DepositBindingModelV2 model module.
 * @module model/DepositBindingModelV2
 * @version 2.0
 */
export class DepositBindingModelV2 {
  /**
   * Constructs a new <code>DepositBindingModelV2</code>.
   * Request model for credit or debit a deposit.
   * @alias module:model/DepositBindingModelV2
   * @class
   * @param currencyCode {String} Currency code of amount (ISO-4217 3 char).
   * @param transactionDescription {String} Varies depending on the type of load:    Prefund: \"Deposit To Card API\"   Debit: \"Web load by debit card\"   Credit: \"Web load by credit card\"    Expected format: ^[a-zA-Z0-9* -.+]{1,30}$
   * @param feeCode {String} Populate as shown when loading via:    - Credit Card = **WCR  - Debit Card = **WDB  - straight from Prefund Wallet = **API
   */
  constructor(currencyCode, transactionDescription, feeCode) {
    this.currencyCode = currencyCode;
    this.transactionDescription = transactionDescription;
    this.feeCode = feeCode;
  }

  /**
   * Constructs a <code>DepositBindingModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DepositBindingModelV2} obj Optional instance to populate.
   * @return {module:model/DepositBindingModelV2} The populated <code>DepositBindingModelV2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DepositBindingModelV2();
      if (data.hasOwnProperty('currencyCode'))
        obj.currencyCode = ApiClient.convertToType(data['currencyCode'], 'String');
      if (data.hasOwnProperty('settlementCurrencyCode'))
        obj.settlementCurrencyCode = ApiClient.convertToType(data['settlementCurrencyCode'], 'String');
      if (data.hasOwnProperty('transactionDescription'))
        obj.transactionDescription = ApiClient.convertToType(data['transactionDescription'], 'String');
      if (data.hasOwnProperty('terminalOwner'))
        obj.terminalOwner = ApiClient.convertToType(data['terminalOwner'], 'String');
      if (data.hasOwnProperty('terminalLocation'))
        obj.terminalLocation = ApiClient.convertToType(data['terminalLocation'], 'String');
      if (data.hasOwnProperty('terminalCity'))
        obj.terminalCity = ApiClient.convertToType(data['terminalCity'], 'String');
      if (data.hasOwnProperty('terminalState'))
        obj.terminalState = ApiClient.convertToType(data['terminalState'], 'String');
      if (data.hasOwnProperty('terminalId'))
        obj.terminalId = ApiClient.convertToType(data['terminalId'], 'String');
      if (data.hasOwnProperty('countryCode'))
        obj.countryCode = ApiClient.convertToType(data['countryCode'], 'String');
      if (data.hasOwnProperty('feeDescription'))
        obj.feeDescription = ApiClient.convertToType(data['feeDescription'], 'String');
      if (data.hasOwnProperty('feeCode'))
        obj.feeCode = ApiClient.convertToType(data['feeCode'], 'String');
      if (data.hasOwnProperty('reason'))
        obj.reason = ApiClient.convertToType(data['reason'], 'String');
      if (data.hasOwnProperty('voucherCode'))
        obj.voucherCode = ApiClient.convertToType(data['voucherCode'], 'String');
      if (data.hasOwnProperty('udfs'))
        obj.udfs = ApiClient.convertToType(data['udfs'], {'String': 'String'});
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('settlementAmount'))
        obj.settlementAmount = ApiClient.convertToType(data['settlementAmount'], 'Number');
      if (data.hasOwnProperty('flatFee'))
        obj.flatFee = ApiClient.convertToType(data['flatFee'], 'Number');
    }
    return obj;
  }
}

/**
 * Currency code of amount (ISO-4217 3 char).
 * @member {String} currencyCode
 */
DepositBindingModelV2.prototype.currencyCode = undefined;

/**
 * Currency code of amount (ISO-4217 3 char).
 * @member {String} settlementCurrencyCode
 */
DepositBindingModelV2.prototype.settlementCurrencyCode = undefined;

/**
 * Varies depending on the type of load:    Prefund: \"Deposit To Card API\"   Debit: \"Web load by debit card\"   Credit: \"Web load by credit card\"    Expected format: ^[a-zA-Z0-9* -.+]{1,30}$
 * @member {String} transactionDescription
 */
DepositBindingModelV2.prototype.transactionDescription = undefined;

/**
 * Open entry field - can be filled with your custom description. Any data passed here will be shown on your statements.    Expected format: ^[\\w\\s .]{0,30}$
 * @member {String} terminalOwner
 */
DepositBindingModelV2.prototype.terminalOwner = undefined;

/**
 * Open entry field - can be filled with your custom description. Any data passed here will be shown on your statements.    Expected format: ^[\\w\\s .]{0,30}$
 * @member {String} terminalLocation
 */
DepositBindingModelV2.prototype.terminalLocation = undefined;

/**
 * Open entry field    Expected format: ^[\\w\\s .]{0,20}$
 * @member {String} terminalCity
 */
DepositBindingModelV2.prototype.terminalCity = undefined;

/**
 * Open entry field    Expected format: ^[\\w\\s .]{0,6}$
 * @member {String} terminalState
 */
DepositBindingModelV2.prototype.terminalState = undefined;

/**
 * Open entry field    Expected format: ^[\\w\\s *_/]{0,20}$
 * @member {String} terminalId
 */
DepositBindingModelV2.prototype.terminalId = undefined;

/**
 * Country code, in ISO-1366-1 format.
 * @member {String} countryCode
 */
DepositBindingModelV2.prototype.countryCode = undefined;

/**
 * Description for fee.
 * @member {String} feeDescription
 */
DepositBindingModelV2.prototype.feeDescription = undefined;

/**
 * Populate as shown when loading via:    - Credit Card = **WCR  - Debit Card = **WDB  - straight from Prefund Wallet = **API
 * @member {String} feeCode
 */
DepositBindingModelV2.prototype.feeCode = undefined;

/**
 * Expected format: ^[\\w\\s\\-/`'(),.]{1,50}$
 * @member {String} reason
 */
DepositBindingModelV2.prototype.reason = undefined;

/**
 * Voucher code for deposit amount.    Expected format: ^[a-fA-F0-9]{1,10}$
 * @member {String} voucherCode
 */
DepositBindingModelV2.prototype.voucherCode = undefined;

/**
 * For example, can be used to pass AcquirerTransactionId (key) with an Id (value)
 * @member {Object.<String, String>} udfs
 */
DepositBindingModelV2.prototype.udfs = undefined;

/**
 * Amount to debit or credit.    Required when 'VoucherCode' is not present. Can not be a negative value.
 * @member {Number} amount
 */
DepositBindingModelV2.prototype.amount = undefined;

/**
 * @member {Number} settlementAmount
 */
DepositBindingModelV2.prototype.settlementAmount = undefined;

/**
 * Flat fee amount.
 * @member {Number} flatFee
 */
DepositBindingModelV2.prototype.flatFee = undefined;

