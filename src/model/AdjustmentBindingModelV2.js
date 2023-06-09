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
 * The AdjustmentBindingModelV2 model module.
 * @module model/AdjustmentBindingModelV2
 * @version 2.0
 */
export class AdjustmentBindingModelV2 {
  /**
   * Constructs a new <code>AdjustmentBindingModelV2</code>.
   * @alias module:model/AdjustmentBindingModelV2
   * @class
   * @param amount {Number} Adjustment Amount (in subunit, i.e.: Penny).
   * @param currencyCode {String} Currency code of amount
   * @param settlementCurrencyCode {String} Settlement Currency code of amount
   */
  constructor(amount, currencyCode, settlementCurrencyCode) {
    this.amount = amount;
    this.currencyCode = currencyCode;
    this.settlementCurrencyCode = settlementCurrencyCode;
  }

  /**
   * Constructs a <code>AdjustmentBindingModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdjustmentBindingModelV2} obj Optional instance to populate.
   * @return {module:model/AdjustmentBindingModelV2} The populated <code>AdjustmentBindingModelV2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AdjustmentBindingModelV2();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('fee'))
        obj.fee = ApiClient.convertToType(data['fee'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('currencyCode'))
        obj.currencyCode = ApiClient.convertToType(data['currencyCode'], 'String');
      if (data.hasOwnProperty('settlementCurrencyCode'))
        obj.settlementCurrencyCode = ApiClient.convertToType(data['settlementCurrencyCode'], 'String');
      if (data.hasOwnProperty('affectedBalance'))
        obj.affectedBalance = ApiClient.convertToType(data['affectedBalance'], 'String');
    }
    return obj;
  }
}

/**
 * Adjustment Amount (in subunit, i.e.: Penny).
 * @member {Number} amount
 */
AdjustmentBindingModelV2.prototype.amount = undefined;

/**
 * Fee amount (in subunit, i.e.: Penny).
 * @member {Number} fee
 */
AdjustmentBindingModelV2.prototype.fee = undefined;

/**
 * Description of the adjustment
 * @member {String} description
 */
AdjustmentBindingModelV2.prototype.description = undefined;

/**
 * Currency code of amount
 * @member {String} currencyCode
 */
AdjustmentBindingModelV2.prototype.currencyCode = undefined;

/**
 * Settlement Currency code of amount
 * @member {String} settlementCurrencyCode
 */
AdjustmentBindingModelV2.prototype.settlementCurrencyCode = undefined;

/**
 * Affected balance
 * @member {String} affectedBalance
 */
AdjustmentBindingModelV2.prototype.affectedBalance = undefined;

