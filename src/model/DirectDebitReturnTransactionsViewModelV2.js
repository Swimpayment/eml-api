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
import {DirectDebitReturnsViewModelV2} from './DirectDebitReturnsViewModelV2';

/**
 * The DirectDebitReturnTransactionsViewModelV2 model module.
 * @module model/DirectDebitReturnTransactionsViewModelV2
 * @version 2.0
 */
export class DirectDebitReturnTransactionsViewModelV2 {
  /**
   * Constructs a new <code>DirectDebitReturnTransactionsViewModelV2</code>.
   * @alias module:model/DirectDebitReturnTransactionsViewModelV2
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DirectDebitReturnTransactionsViewModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DirectDebitReturnTransactionsViewModelV2} obj Optional instance to populate.
   * @return {module:model/DirectDebitReturnTransactionsViewModelV2} The populated <code>DirectDebitReturnTransactionsViewModelV2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DirectDebitReturnTransactionsViewModelV2();
      if (data.hasOwnProperty('directDebitTransactions'))
        obj.directDebitTransactions = ApiClient.convertToType(data['directDebitTransactions'], [DirectDebitReturnsViewModelV2]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/DirectDebitReturnsViewModelV2>} directDebitTransactions
 */
DirectDebitReturnTransactionsViewModelV2.prototype.directDebitTransactions = undefined;

