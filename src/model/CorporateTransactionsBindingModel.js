/*
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
import {ApiClient} from '../ApiClient';

/**
 * The CorporateTransactionsBindingModel model module.
 * @module model/CorporateTransactionsBindingModel
 * @version 2.0
 */
export class CorporateTransactionsBindingModel {
  /**
   * Constructs a new <code>CorporateTransactionsBindingModel</code>.
   * @alias module:model/CorporateTransactionsBindingModel
   * @class
   * @param dc {String} 
   * @param startDate {String} 
   * @param endDate {String} 
   * @param currency {String} 
   */
  constructor(dc, startDate, endDate, currency) {
    this.dc = dc;
    this.startDate = startDate;
    this.endDate = endDate;
    this.currency = currency;
  }

  /**
   * Constructs a <code>CorporateTransactionsBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CorporateTransactionsBindingModel} obj Optional instance to populate.
   * @return {module:model/CorporateTransactionsBindingModel} The populated <code>CorporateTransactionsBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CorporateTransactionsBindingModel();
      if (data.hasOwnProperty('dc'))
        obj.dc = ApiClient.convertToType(data['dc'], 'String');
      if (data.hasOwnProperty('startDate'))
        obj.startDate = ApiClient.convertToType(data['startDate'], 'String');
      if (data.hasOwnProperty('endDate'))
        obj.endDate = ApiClient.convertToType(data['endDate'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} dc
 */
CorporateTransactionsBindingModel.prototype.dc = undefined;

/**
 * @member {String} startDate
 */
CorporateTransactionsBindingModel.prototype.startDate = undefined;

/**
 * @member {String} endDate
 */
CorporateTransactionsBindingModel.prototype.endDate = undefined;

/**
 * @member {String} currency
 */
CorporateTransactionsBindingModel.prototype.currency = undefined;

