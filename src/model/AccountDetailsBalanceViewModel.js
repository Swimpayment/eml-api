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
 * The AccountDetailsBalanceViewModel model module.
 * @module model/AccountDetailsBalanceViewModel
 * @version 2.0
 */
export class AccountDetailsBalanceViewModel {
  /**
   * Constructs a new <code>AccountDetailsBalanceViewModel</code>.
   * @alias module:model/AccountDetailsBalanceViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AccountDetailsBalanceViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountDetailsBalanceViewModel} obj Optional instance to populate.
   * @return {module:model/AccountDetailsBalanceViewModel} The populated <code>AccountDetailsBalanceViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AccountDetailsBalanceViewModel();
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('availableBalance'))
        obj.availableBalance = ApiClient.convertToType(data['availableBalance'], 'Number');
      if (data.hasOwnProperty('ledgerBalance'))
        obj.ledgerBalance = ApiClient.convertToType(data['ledgerBalance'], 'Number');
      if (data.hasOwnProperty('caaBalance'))
        obj.caaBalance = ApiClient.convertToType(data['caaBalance'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} currency
 */
AccountDetailsBalanceViewModel.prototype.currency = undefined;

/**
 * @member {Number} availableBalance
 */
AccountDetailsBalanceViewModel.prototype.availableBalance = undefined;

/**
 * @member {Number} ledgerBalance
 */
AccountDetailsBalanceViewModel.prototype.ledgerBalance = undefined;

/**
 * @member {Number} caaBalance
 */
AccountDetailsBalanceViewModel.prototype.caaBalance = undefined;

