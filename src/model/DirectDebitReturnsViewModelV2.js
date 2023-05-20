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
import {DirectDebitReturnTransactionViewModelV2} from './DirectDebitReturnTransactionViewModelV2';

/**
 * The DirectDebitReturnsViewModelV2 model module.
 * @module model/DirectDebitReturnsViewModelV2
 * @version 2.0
 */
export class DirectDebitReturnsViewModelV2 {
  /**
   * Constructs a new <code>DirectDebitReturnsViewModelV2</code>.
   * @alias module:model/DirectDebitReturnsViewModelV2
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DirectDebitReturnsViewModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DirectDebitReturnsViewModelV2} obj Optional instance to populate.
   * @return {module:model/DirectDebitReturnsViewModelV2} The populated <code>DirectDebitReturnsViewModelV2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DirectDebitReturnsViewModelV2();
      if (data.hasOwnProperty('messageId'))
        obj.messageId = ApiClient.convertToType(data['messageId'], 'String');
      if (data.hasOwnProperty('recievedDateTime'))
        obj.recievedDateTime = ApiClient.convertToType(data['recievedDateTime'], 'String');
      if (data.hasOwnProperty('transactions'))
        obj.transactions = ApiClient.convertToType(data['transactions'], [DirectDebitReturnTransactionViewModelV2]);
    }
    return obj;
  }
}

/**
 * @member {String} messageId
 */
DirectDebitReturnsViewModelV2.prototype.messageId = undefined;

/**
 * @member {String} recievedDateTime
 */
DirectDebitReturnsViewModelV2.prototype.recievedDateTime = undefined;

/**
 * @member {Array.<module:model/DirectDebitReturnTransactionViewModelV2>} transactions
 */
DirectDebitReturnsViewModelV2.prototype.transactions = undefined;

