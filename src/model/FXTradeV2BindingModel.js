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
 * The FXTradeV2BindingModel model module.
 * @module model/FXTradeV2BindingModel
 * @version 2.0
 */
export class FXTradeV2BindingModel {
  /**
   * Constructs a new <code>FXTradeV2BindingModel</code>.
   * @alias module:model/FXTradeV2BindingModel
   * @class
   * @param id {String} Cardholder Id
   * @param currencyFrom {String} ISO-4217 Currency Code
   * @param currencyTo {String} ISO-4217 Currency Code
   * @param amountFrom {Number} 
   */
  constructor(id, currencyFrom, currencyTo, amountFrom) {
    this.id = id;
    this.currencyFrom = currencyFrom;
    this.currencyTo = currencyTo;
    this.amountFrom = amountFrom;
  }

  /**
   * Constructs a <code>FXTradeV2BindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FXTradeV2BindingModel} obj Optional instance to populate.
   * @return {module:model/FXTradeV2BindingModel} The populated <code>FXTradeV2BindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FXTradeV2BindingModel();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('currencyFrom'))
        obj.currencyFrom = ApiClient.convertToType(data['currencyFrom'], 'String');
      if (data.hasOwnProperty('currencyTo'))
        obj.currencyTo = ApiClient.convertToType(data['currencyTo'], 'String');
      if (data.hasOwnProperty('amountFrom'))
        obj.amountFrom = ApiClient.convertToType(data['amountFrom'], 'Number');
      if (data.hasOwnProperty('amountTo'))
        obj.amountTo = ApiClient.convertToType(data['amountTo'], 'Number');
      if (data.hasOwnProperty('rate'))
        obj.rate = ApiClient.convertToType(data['rate'], 'Number');
    }
    return obj;
  }
}

/**
 * Cardholder Id
 * @member {String} id
 */
FXTradeV2BindingModel.prototype.id = undefined;

/**
 * ISO-4217 Currency Code
 * @member {String} currencyFrom
 */
FXTradeV2BindingModel.prototype.currencyFrom = undefined;

/**
 * ISO-4217 Currency Code
 * @member {String} currencyTo
 */
FXTradeV2BindingModel.prototype.currencyTo = undefined;

/**
 * @member {Number} amountFrom
 */
FXTradeV2BindingModel.prototype.amountFrom = undefined;

/**
 * @member {Number} amountTo
 */
FXTradeV2BindingModel.prototype.amountTo = undefined;

/**
 * @member {Number} rate
 */
FXTradeV2BindingModel.prototype.rate = undefined;

