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
 * The FXQuoteBindingModelV2 model module.
 * @module model/FXQuoteBindingModelV2
 * @version 2.0
 */
export class FXQuoteBindingModelV2 {
  /**
   * Constructs a new <code>FXQuoteBindingModelV2</code>.
   * @alias module:model/FXQuoteBindingModelV2
   * @class
   * @param id {String} Cardholder Id
   * @param currencyFrom {String} ISO-4217 Currency Code
   * @param currencyTo {String} ISO-4217 Currency Code
   * @param amount {Number} Transaction amount
   */
  constructor(id, currencyFrom, currencyTo, amount) {
    this.id = id;
    this.currencyFrom = currencyFrom;
    this.currencyTo = currencyTo;
    this.amount = amount;
  }

  /**
   * Constructs a <code>FXQuoteBindingModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FXQuoteBindingModelV2} obj Optional instance to populate.
   * @return {module:model/FXQuoteBindingModelV2} The populated <code>FXQuoteBindingModelV2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FXQuoteBindingModelV2();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('currencyFrom'))
        obj.currencyFrom = ApiClient.convertToType(data['currencyFrom'], 'String');
      if (data.hasOwnProperty('currencyTo'))
        obj.currencyTo = ApiClient.convertToType(data['currencyTo'], 'String');
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('fixedSide'))
        obj.fixedSide = ApiClient.convertToType(data['fixedSide'], 'String');
    }
    return obj;
  }
}

/**
 * Cardholder Id
 * @member {String} id
 */
FXQuoteBindingModelV2.prototype.id = undefined;

/**
 * ISO-4217 Currency Code
 * @member {String} currencyFrom
 */
FXQuoteBindingModelV2.prototype.currencyFrom = undefined;

/**
 * ISO-4217 Currency Code
 * @member {String} currencyTo
 */
FXQuoteBindingModelV2.prototype.currencyTo = undefined;

/**
 * Transaction amount
 * @member {Number} amount
 */
FXQuoteBindingModelV2.prototype.amount = undefined;

/**
 * Accepted values are Buy or Sell and default value is Sell.  The purpose of this property is to specify whether you are selling or buying the amount specified against the currencies provided.
 * @member {String} fixedSide
 */
FXQuoteBindingModelV2.prototype.fixedSide = undefined;

