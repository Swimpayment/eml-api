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
import {FromCardHolderViewModelV2} from './FromCardHolderViewModelV2';
import {ToCardHolderViewModelV2} from './ToCardHolderViewModelV2';

/**
 * The CardholderToCardholderViewModelV2 model module.
 * @module model/CardholderToCardholderViewModelV2
 * @version 2.0
 */
export class CardholderToCardholderViewModelV2 {
  /**
   * Constructs a new <code>CardholderToCardholderViewModelV2</code>.
   * Transfer response model.
   * @alias module:model/CardholderToCardholderViewModelV2
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CardholderToCardholderViewModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CardholderToCardholderViewModelV2} obj Optional instance to populate.
   * @return {module:model/CardholderToCardholderViewModelV2} The populated <code>CardholderToCardholderViewModelV2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CardholderToCardholderViewModelV2();
      if (data.hasOwnProperty('from'))
        obj.from = FromCardHolderViewModelV2.constructFromObject(data['from']);
      if (data.hasOwnProperty('to'))
        obj.to = ToCardHolderViewModelV2.constructFromObject(data['to']);
    }
    return obj;
  }
}

/**
 * @member {module:model/FromCardHolderViewModelV2} from
 */
CardholderToCardholderViewModelV2.prototype.from = undefined;

/**
 * @member {module:model/ToCardHolderViewModelV2} to
 */
CardholderToCardholderViewModelV2.prototype.to = undefined;
