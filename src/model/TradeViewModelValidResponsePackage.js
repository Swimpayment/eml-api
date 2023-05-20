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
import {TradeViewModel} from './TradeViewModel';

/**
 * The TradeViewModelValidResponsePackage model module.
 * @module model/TradeViewModelValidResponsePackage
 * @version 2.0
 */
export class TradeViewModelValidResponsePackage {
  /**
   * Constructs a new <code>TradeViewModelValidResponsePackage</code>.
   * Package response for successful requests.
   * @alias module:model/TradeViewModelValidResponsePackage
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TradeViewModelValidResponsePackage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TradeViewModelValidResponsePackage} obj Optional instance to populate.
   * @return {module:model/TradeViewModelValidResponsePackage} The populated <code>TradeViewModelValidResponsePackage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TradeViewModelValidResponsePackage();
      if (data.hasOwnProperty('data'))
        obj.data = TradeViewModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('referenceId'))
        obj.referenceId = ApiClient.convertToType(data['referenceId'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:model/TradeViewModel} data
 */
TradeViewModelValidResponsePackage.prototype.data = undefined;

/**
 * Reference id of log table.
 * @member {Number} referenceId
 */
TradeViewModelValidResponsePackage.prototype.referenceId = undefined;

