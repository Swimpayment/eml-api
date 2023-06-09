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
 * The PeriodicLimitViewModel model module.
 * @module model/PeriodicLimitViewModel
 * @version 2.0
 */
export class PeriodicLimitViewModel {
  /**
   * Constructs a new <code>PeriodicLimitViewModel</code>.
   * @alias module:model/PeriodicLimitViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PeriodicLimitViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PeriodicLimitViewModel} obj Optional instance to populate.
   * @return {module:model/PeriodicLimitViewModel} The populated <code>PeriodicLimitViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PeriodicLimitViewModel();
      if (data.hasOwnProperty('maxTransactionAmount'))
        obj.maxTransactionAmount = ApiClient.convertToType(data['maxTransactionAmount'], 'Number');
      if (data.hasOwnProperty('daily'))
        obj.daily = ApiClient.convertToType(data['daily'], 'Number');
      if (data.hasOwnProperty('monthly'))
        obj.monthly = ApiClient.convertToType(data['monthly'], 'Number');
      if (data.hasOwnProperty('yearly'))
        obj.yearly = ApiClient.convertToType(data['yearly'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} maxTransactionAmount
 */
PeriodicLimitViewModel.prototype.maxTransactionAmount = undefined;

/**
 * @member {Number} daily
 */
PeriodicLimitViewModel.prototype.daily = undefined;

/**
 * @member {Number} monthly
 */
PeriodicLimitViewModel.prototype.monthly = undefined;

/**
 * @member {Number} yearly
 */
PeriodicLimitViewModel.prototype.yearly = undefined;

