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
 * The ReplaceBindingModel model module.
 * @module model/ReplaceBindingModel
 * @version 2.0
 */
export class ReplaceBindingModel {
  /**
   * Constructs a new <code>ReplaceBindingModel</code>.
   * @alias module:model/ReplaceBindingModel
   * @class
   * @param replaceReason {String} Reason for issuing a replacement card
   */
  constructor(replaceReason) {
    this.replaceReason = replaceReason;
  }

  /**
   * Constructs a <code>ReplaceBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReplaceBindingModel} obj Optional instance to populate.
   * @return {module:model/ReplaceBindingModel} The populated <code>ReplaceBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReplaceBindingModel();
      if (data.hasOwnProperty('replaceReason'))
        obj.replaceReason = ApiClient.convertToType(data['replaceReason'], 'String');
      if (data.hasOwnProperty('embossName'))
        obj.embossName = ApiClient.convertToType(data['embossName'], 'String');
      if (data.hasOwnProperty('retainPin'))
        obj.retainPin = ApiClient.convertToType(data['retainPin'], 'Boolean');
      if (data.hasOwnProperty('newPin'))
        obj.newPin = ApiClient.convertToType(data['newPin'], 'String');
    }
    return obj;
  }
}

/**
 * Reason for issuing a replacement card
 * @member {String} replaceReason
 */
ReplaceBindingModel.prototype.replaceReason = undefined;

/**
 * Name embossed on the card
 * @member {String} embossName
 */
ReplaceBindingModel.prototype.embossName = undefined;

/**
 * True, keeps the same PIN as the old card. False, will create new PIN. The default is False.
 * @member {Boolean} retainPin
 */
ReplaceBindingModel.prototype.retainPin = undefined;

/**
 * New Pin number if need to be changed
 * @member {String} newPin
 */
ReplaceBindingModel.prototype.newPin = undefined;

