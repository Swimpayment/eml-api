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
 * The SetClientPreferencesBindingModelV2 model module.
 * @module model/SetClientPreferencesBindingModelV2
 * @version 2.0
 */
export class SetClientPreferencesBindingModelV2 {
  /**
   * Constructs a new <code>SetClientPreferencesBindingModelV2</code>.
   * @alias module:model/SetClientPreferencesBindingModelV2
   * @class
   * @param thresholdAmount {Number} New treshold amount
   */
  constructor(thresholdAmount) {
    this.thresholdAmount = thresholdAmount;
  }

  /**
   * Constructs a <code>SetClientPreferencesBindingModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SetClientPreferencesBindingModelV2} obj Optional instance to populate.
   * @return {module:model/SetClientPreferencesBindingModelV2} The populated <code>SetClientPreferencesBindingModelV2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SetClientPreferencesBindingModelV2();
      if (data.hasOwnProperty('thresholdAmount'))
        obj.thresholdAmount = ApiClient.convertToType(data['thresholdAmount'], 'Number');
    }
    return obj;
  }
}

/**
 * New treshold amount
 * @member {Number} thresholdAmount
 */
SetClientPreferencesBindingModelV2.prototype.thresholdAmount = undefined;

