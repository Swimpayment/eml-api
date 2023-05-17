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
import {CardV2ViewModel} from './CardV2ViewModel';
import {CardholderV2ViewModel} from './CardholderV2ViewModel';

/**
 * The AccountInfoV2ViewModel model module.
 * @module model/AccountInfoV2ViewModel
 * @version 2.0
 */
export class AccountInfoV2ViewModel {
  /**
   * Constructs a new <code>AccountInfoV2ViewModel</code>.
   * @alias module:model/AccountInfoV2ViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AccountInfoV2ViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountInfoV2ViewModel} obj Optional instance to populate.
   * @return {module:model/AccountInfoV2ViewModel} The populated <code>AccountInfoV2ViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AccountInfoV2ViewModel();
      if (data.hasOwnProperty('card'))
        obj.card = CardV2ViewModel.constructFromObject(data['card']);
      if (data.hasOwnProperty('cardholder'))
        obj.cardholder = CardholderV2ViewModel.constructFromObject(data['cardholder']);
      if (data.hasOwnProperty('currencies'))
        obj.currencies = ApiClient.convertToType(data['currencies'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CardV2ViewModel} card
 */
AccountInfoV2ViewModel.prototype.card = undefined;

/**
 * @member {module:model/CardholderV2ViewModel} cardholder
 */
AccountInfoV2ViewModel.prototype.cardholder = undefined;

/**
 * If MultiCurrency, available currencies are listed here
 * @member {Array.<String>} currencies
 */
AccountInfoV2ViewModel.prototype.currencies = undefined;

