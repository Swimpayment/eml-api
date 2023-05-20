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
 * The VoidLoadBindingModel model module.
 * @module model/VoidLoadBindingModel
 * @version 2.0
 */
export class VoidLoadBindingModel {
  /**
   * Constructs a new <code>VoidLoadBindingModel</code>.
   * @alias module:model/VoidLoadBindingModel
   * @class
   * @param messageId {String} 
   */
  constructor(messageId) {
    this.messageId = messageId;
  }

  /**
   * Constructs a <code>VoidLoadBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoidLoadBindingModel} obj Optional instance to populate.
   * @return {module:model/VoidLoadBindingModel} The populated <code>VoidLoadBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VoidLoadBindingModel();
      if (data.hasOwnProperty('messageId'))
        obj.messageId = ApiClient.convertToType(data['messageId'], 'String');
      if (data.hasOwnProperty('terminalOwner'))
        obj.terminalOwner = ApiClient.convertToType(data['terminalOwner'], 'String');
      if (data.hasOwnProperty('terminalLocation'))
        obj.terminalLocation = ApiClient.convertToType(data['terminalLocation'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} messageId
 */
VoidLoadBindingModel.prototype.messageId = undefined;

/**
 * @member {String} terminalOwner
 */
VoidLoadBindingModel.prototype.terminalOwner = undefined;

/**
 * @member {String} terminalLocation
 */
VoidLoadBindingModel.prototype.terminalLocation = undefined;

