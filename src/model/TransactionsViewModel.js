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
import {PagingViewModel} from './PagingViewModel';
import {TransactionViewModel} from './TransactionViewModel';

/**
 * The TransactionsViewModel model module.
 * @module model/TransactionsViewModel
 * @version 2.0
 */
export class TransactionsViewModel {
  /**
   * Constructs a new <code>TransactionsViewModel</code>.
   * @alias module:model/TransactionsViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TransactionsViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionsViewModel} obj Optional instance to populate.
   * @return {module:model/TransactionsViewModel} The populated <code>TransactionsViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TransactionsViewModel();
      if (data.hasOwnProperty('transactions'))
        obj.transactions = ApiClient.convertToType(data['transactions'], [TransactionViewModel]);
      if (data.hasOwnProperty('apiVersion'))
        obj.apiVersion = ApiClient.convertToType(data['apiVersion'], 'Number');
      if (data.hasOwnProperty('mainCurrency'))
        obj.mainCurrency = ApiClient.convertToType(data['mainCurrency'], 'String');
      if (data.hasOwnProperty('transactionCount'))
        obj.transactionCount = ApiClient.convertToType(data['transactionCount'], 'Number');
      if (data.hasOwnProperty('paging'))
        obj.paging = PagingViewModel.constructFromObject(data['paging']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/TransactionViewModel>} transactions
 */
TransactionsViewModel.prototype.transactions = undefined;

/**
 * @member {Number} apiVersion
 */
TransactionsViewModel.prototype.apiVersion = undefined;

/**
 * @member {String} mainCurrency
 */
TransactionsViewModel.prototype.mainCurrency = undefined;

/**
 * @member {Number} transactionCount
 */
TransactionsViewModel.prototype.transactionCount = undefined;

/**
 * @member {module:model/PagingViewModel} paging
 */
TransactionsViewModel.prototype.paging = undefined;

