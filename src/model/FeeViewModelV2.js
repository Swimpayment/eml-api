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
 * The FeeViewModelV2 model module.
 * @module model/FeeViewModelV2
 * @version 2.0
 */
export class FeeViewModelV2 {
  /**
   * Constructs a new <code>FeeViewModelV2</code>.
   * Response model for charging fee.
   * @alias module:model/FeeViewModelV2
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FeeViewModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeeViewModelV2} obj Optional instance to populate.
   * @return {module:model/FeeViewModelV2} The populated <code>FeeViewModelV2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FeeViewModelV2();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('feeAmount'))
        obj.feeAmount = ApiClient.convertToType(data['feeAmount'], 'Number');
      if (data.hasOwnProperty('currencyCode'))
        obj.currencyCode = ApiClient.convertToType(data['currencyCode'], 'String');
    }
    return obj;
  }
}

/**
 * Description of fee.
 * @member {String} description
 */
FeeViewModelV2.prototype.description = undefined;

/**
 * Fee amount charged.
 * @member {Number} feeAmount
 */
FeeViewModelV2.prototype.feeAmount = undefined;

/**
 * Currency code of fee charged.
 * @member {String} currencyCode
 */
FeeViewModelV2.prototype.currencyCode = undefined;

