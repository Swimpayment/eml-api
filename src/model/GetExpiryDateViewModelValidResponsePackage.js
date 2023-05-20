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
import {GetExpiryDateViewModel} from './GetExpiryDateViewModel';

/**
 * The GetExpiryDateViewModelValidResponsePackage model module.
 * @module model/GetExpiryDateViewModelValidResponsePackage
 * @version 2.0
 */
export class GetExpiryDateViewModelValidResponsePackage {
  /**
   * Constructs a new <code>GetExpiryDateViewModelValidResponsePackage</code>.
   * Package response for successful requests.
   * @alias module:model/GetExpiryDateViewModelValidResponsePackage
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetExpiryDateViewModelValidResponsePackage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetExpiryDateViewModelValidResponsePackage} obj Optional instance to populate.
   * @return {module:model/GetExpiryDateViewModelValidResponsePackage} The populated <code>GetExpiryDateViewModelValidResponsePackage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetExpiryDateViewModelValidResponsePackage();
      if (data.hasOwnProperty('data'))
        obj.data = GetExpiryDateViewModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('referenceId'))
        obj.referenceId = ApiClient.convertToType(data['referenceId'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:model/GetExpiryDateViewModel} data
 */
GetExpiryDateViewModelValidResponsePackage.prototype.data = undefined;

/**
 * Reference id of log table.
 * @member {Number} referenceId
 */
GetExpiryDateViewModelValidResponsePackage.prototype.referenceId = undefined;

