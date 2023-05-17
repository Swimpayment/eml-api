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
 * The IsAutoRenewableViewModel model module.
 * @module model/IsAutoRenewableViewModel
 * @version 2.0
 */
export class IsAutoRenewableViewModel {
  /**
   * Constructs a new <code>IsAutoRenewableViewModel</code>.
   * @alias module:model/IsAutoRenewableViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>IsAutoRenewableViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IsAutoRenewableViewModel} obj Optional instance to populate.
   * @return {module:model/IsAutoRenewableViewModel} The populated <code>IsAutoRenewableViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IsAutoRenewableViewModel();
      if (data.hasOwnProperty('isAutoRenewable'))
        obj.isAutoRenewable = ApiClient.convertToType(data['isAutoRenewable'], 'Boolean');
    }
    return obj;
  }
}

/**
 * True if there is an ongoing renew process, and the cardholder didn't opt out.  False when there is no renew process, or the cardholder opted out.
 * @member {Boolean} isAutoRenewable
 */
IsAutoRenewableViewModel.prototype.isAutoRenewable = undefined;

