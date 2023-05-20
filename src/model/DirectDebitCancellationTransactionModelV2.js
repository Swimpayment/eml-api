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
 * The DirectDebitCancellationTransactionModelV2 model module.
 * @module model/DirectDebitCancellationTransactionModelV2
 * @version 2.0
 */
export class DirectDebitCancellationTransactionModelV2 {
  /**
   * Constructs a new <code>DirectDebitCancellationTransactionModelV2</code>.
   * @alias module:model/DirectDebitCancellationTransactionModelV2
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DirectDebitCancellationTransactionModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DirectDebitCancellationTransactionModelV2} obj Optional instance to populate.
   * @return {module:model/DirectDebitCancellationTransactionModelV2} The populated <code>DirectDebitCancellationTransactionModelV2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DirectDebitCancellationTransactionModelV2();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('orgnlMsgID'))
        obj.orgnlMsgID = ApiClient.convertToType(data['orgnlMsgID'], 'String');
      if (data.hasOwnProperty('orgnlMsgType'))
        obj.orgnlMsgType = ApiClient.convertToType(data['orgnlMsgType'], 'String');
      if (data.hasOwnProperty('orgnlEndtoEndID'))
        obj.orgnlEndtoEndID = ApiClient.convertToType(data['orgnlEndtoEndID'], 'String');
      if (data.hasOwnProperty('orgnlTxID'))
        obj.orgnlTxID = ApiClient.convertToType(data['orgnlTxID'], 'String');
      if (data.hasOwnProperty('orgnlBnkSttlmAmt'))
        obj.orgnlBnkSttlmAmt = ApiClient.convertToType(data['orgnlBnkSttlmAmt'], 'Number');
      if (data.hasOwnProperty('orgnlBnkSttlmDt'))
        obj.orgnlBnkSttlmDt = ApiClient.convertToType(data['orgnlBnkSttlmDt'], 'String');
      if (data.hasOwnProperty('reason'))
        obj.reason = ApiClient.convertToType(data['reason'], 'String');
      if (data.hasOwnProperty('mandateID'))
        obj.mandateID = ApiClient.convertToType(data['mandateID'], 'String');
      if (data.hasOwnProperty('dateOfSngtr'))
        obj.dateOfSngtr = ApiClient.convertToType(data['dateOfSngtr'], 'String');
      if (data.hasOwnProperty('debtorBic'))
        obj.debtorBic = ApiClient.convertToType(data['debtorBic'], 'String');
      if (data.hasOwnProperty('debtorIban'))
        obj.debtorIban = ApiClient.convertToType(data['debtorIban'], 'String');
      if (data.hasOwnProperty('debtorName'))
        obj.debtorName = ApiClient.convertToType(data['debtorName'], 'String');
      if (data.hasOwnProperty('creditorBic'))
        obj.creditorBic = ApiClient.convertToType(data['creditorBic'], 'String');
      if (data.hasOwnProperty('creditorIban'))
        obj.creditorIban = ApiClient.convertToType(data['creditorIban'], 'String');
      if (data.hasOwnProperty('creditorName'))
        obj.creditorName = ApiClient.convertToType(data['creditorName'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('incomingOutgoing'))
        obj.incomingOutgoing = ApiClient.convertToType(data['incomingOutgoing'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
DirectDebitCancellationTransactionModelV2.prototype.id = undefined;

/**
 * @member {String} orgnlMsgID
 */
DirectDebitCancellationTransactionModelV2.prototype.orgnlMsgID = undefined;

/**
 * @member {String} orgnlMsgType
 */
DirectDebitCancellationTransactionModelV2.prototype.orgnlMsgType = undefined;

/**
 * @member {String} orgnlEndtoEndID
 */
DirectDebitCancellationTransactionModelV2.prototype.orgnlEndtoEndID = undefined;

/**
 * @member {String} orgnlTxID
 */
DirectDebitCancellationTransactionModelV2.prototype.orgnlTxID = undefined;

/**
 * @member {Number} orgnlBnkSttlmAmt
 */
DirectDebitCancellationTransactionModelV2.prototype.orgnlBnkSttlmAmt = undefined;

/**
 * @member {String} orgnlBnkSttlmDt
 */
DirectDebitCancellationTransactionModelV2.prototype.orgnlBnkSttlmDt = undefined;

/**
 * @member {String} reason
 */
DirectDebitCancellationTransactionModelV2.prototype.reason = undefined;

/**
 * @member {String} mandateID
 */
DirectDebitCancellationTransactionModelV2.prototype.mandateID = undefined;

/**
 * @member {String} dateOfSngtr
 */
DirectDebitCancellationTransactionModelV2.prototype.dateOfSngtr = undefined;

/**
 * @member {String} debtorBic
 */
DirectDebitCancellationTransactionModelV2.prototype.debtorBic = undefined;

/**
 * @member {String} debtorIban
 */
DirectDebitCancellationTransactionModelV2.prototype.debtorIban = undefined;

/**
 * @member {String} debtorName
 */
DirectDebitCancellationTransactionModelV2.prototype.debtorName = undefined;

/**
 * @member {String} creditorBic
 */
DirectDebitCancellationTransactionModelV2.prototype.creditorBic = undefined;

/**
 * @member {String} creditorIban
 */
DirectDebitCancellationTransactionModelV2.prototype.creditorIban = undefined;

/**
 * @member {String} creditorName
 */
DirectDebitCancellationTransactionModelV2.prototype.creditorName = undefined;

/**
 * @member {String} status
 */
DirectDebitCancellationTransactionModelV2.prototype.status = undefined;

/**
 * @member {String} incomingOutgoing
 */
DirectDebitCancellationTransactionModelV2.prototype.incomingOutgoing = undefined;

