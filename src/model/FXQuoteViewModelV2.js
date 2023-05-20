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
 * The FXQuoteViewModelV2 model module.
 * @module model/FXQuoteViewModelV2
 * @version 2.0
 */
export class FXQuoteViewModelV2 {
  /**
   * Constructs a new <code>FXQuoteViewModelV2</code>.
   * @alias module:model/FXQuoteViewModelV2
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FXQuoteViewModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FXQuoteViewModelV2} obj Optional instance to populate.
   * @return {module:model/FXQuoteViewModelV2} The populated <code>FXQuoteViewModelV2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FXQuoteViewModelV2();
      if (data.hasOwnProperty('currencyFrom'))
        obj.currencyFrom = ApiClient.convertToType(data['currencyFrom'], 'String');
      if (data.hasOwnProperty('currencyTo'))
        obj.currencyTo = ApiClient.convertToType(data['currencyTo'], 'String');
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('rate'))
        obj.rate = ApiClient.convertToType(data['rate'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} currencyFrom
 */
FXQuoteViewModelV2.prototype.currencyFrom = undefined;

/**
 * @member {String} currencyTo
 */
FXQuoteViewModelV2.prototype.currencyTo = undefined;

/**
 * @member {Number} amount
 */
FXQuoteViewModelV2.prototype.amount = undefined;

/**
 * @member {Number} rate
 */
FXQuoteViewModelV2.prototype.rate = undefined;

