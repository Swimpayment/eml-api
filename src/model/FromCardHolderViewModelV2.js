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
 * The FromCardHolderViewModelV2 model module.
 * @module model/FromCardHolderViewModelV2
 * @version 2.0
 */
export class FromCardHolderViewModelV2 {
  /**
   * Constructs a new <code>FromCardHolderViewModelV2</code>.
   * From cardholder response model.
   * @alias module:model/FromCardHolderViewModelV2
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FromCardHolderViewModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FromCardHolderViewModelV2} obj Optional instance to populate.
   * @return {module:model/FromCardHolderViewModelV2} The populated <code>FromCardHolderViewModelV2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FromCardHolderViewModelV2();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('balance'))
        obj.balance = ApiClient.convertToType(data['balance'], 'Number');
      if (data.hasOwnProperty('currencyCode'))
        obj.currencyCode = ApiClient.convertToType(data['currencyCode'], 'String');
      if (data.hasOwnProperty('debitedAmount'))
        obj.debitedAmount = ApiClient.convertToType(data['debitedAmount'], 'Number');
      if (data.hasOwnProperty('conversionRate'))
        obj.conversionRate = ApiClient.convertToType(data['conversionRate'], 'Number');
      if (data.hasOwnProperty('transferFee'))
        obj.transferFee = ApiClient.convertToType(data['transferFee'], 'Number');
    }
    return obj;
  }
}

/**
 * From cardholder id.
 * @member {String} id
 */
FromCardHolderViewModelV2.prototype.id = undefined;

/**
 * From cardholder balance.
 * @member {Number} balance
 */
FromCardHolderViewModelV2.prototype.balance = undefined;

/**
 * From cardholder currency.
 * @member {String} currencyCode
 */
FromCardHolderViewModelV2.prototype.currencyCode = undefined;

/**
 * Amount debited from the sending cardholder.
 * @member {Number} debitedAmount
 */
FromCardHolderViewModelV2.prototype.debitedAmount = undefined;

/**
 * Conversion rate.
 * @member {Number} conversionRate
 */
FromCardHolderViewModelV2.prototype.conversionRate = undefined;

/**
 * Transfer fee.
 * @member {Number} transferFee
 */
FromCardHolderViewModelV2.prototype.transferFee = undefined;

