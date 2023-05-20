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
import {DirectDebitCancellationTransactionModelV2} from './DirectDebitCancellationTransactionModelV2';

/**
 * The DirectDebitCancellationViewModelV2 model module.
 * @module model/DirectDebitCancellationViewModelV2
 * @version 2.0
 */
export class DirectDebitCancellationViewModelV2 {
  /**
   * Constructs a new <code>DirectDebitCancellationViewModelV2</code>.
   * @alias module:model/DirectDebitCancellationViewModelV2
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DirectDebitCancellationViewModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DirectDebitCancellationViewModelV2} obj Optional instance to populate.
   * @return {module:model/DirectDebitCancellationViewModelV2} The populated <code>DirectDebitCancellationViewModelV2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DirectDebitCancellationViewModelV2();
      if (data.hasOwnProperty('messageId'))
        obj.messageId = ApiClient.convertToType(data['messageId'], 'String');
      if (data.hasOwnProperty('recievedDate'))
        obj.recievedDate = ApiClient.convertToType(data['recievedDate'], 'String');
      if (data.hasOwnProperty('transaction'))
        obj.transaction = ApiClient.convertToType(data['transaction'], [DirectDebitCancellationTransactionModelV2]);
    }
    return obj;
  }
}

/**
 * @member {String} messageId
 */
DirectDebitCancellationViewModelV2.prototype.messageId = undefined;

/**
 * @member {String} recievedDate
 */
DirectDebitCancellationViewModelV2.prototype.recievedDate = undefined;

/**
 * @member {Array.<module:model/DirectDebitCancellationTransactionModelV2>} transaction
 */
DirectDebitCancellationViewModelV2.prototype.transaction = undefined;

