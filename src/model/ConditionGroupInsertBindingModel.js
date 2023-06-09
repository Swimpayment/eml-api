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
import {ConditionConfiguration} from './ConditionConfiguration';

/**
 * The ConditionGroupInsertBindingModel model module.
 * @module model/ConditionGroupInsertBindingModel
 * @version 2.0
 */
export class ConditionGroupInsertBindingModel {
  /**
   * Constructs a new <code>ConditionGroupInsertBindingModel</code>.
   * @alias module:model/ConditionGroupInsertBindingModel
   * @class
   * @param bin {String} Assigned by PFS. It is the first 8 digits of the cards on your program.
   * @param dc {String} The unique identifier assigned by PFS, to your program
   * @param name {String} Name of the setup to create
   */
  constructor(bin, dc, name) {
    this.bin = bin;
    this.dc = dc;
    this.name = name;
  }

  /**
   * Constructs a <code>ConditionGroupInsertBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConditionGroupInsertBindingModel} obj Optional instance to populate.
   * @return {module:model/ConditionGroupInsertBindingModel} The populated <code>ConditionGroupInsertBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ConditionGroupInsertBindingModel();
      if (data.hasOwnProperty('bin'))
        obj.bin = ApiClient.convertToType(data['bin'], 'String');
      if (data.hasOwnProperty('dc'))
        obj.dc = ApiClient.convertToType(data['dc'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('configurations'))
        obj.configurations = ApiClient.convertToType(data['configurations'], [ConditionConfiguration]);
    }
    return obj;
  }
}

/**
 * Assigned by PFS. It is the first 8 digits of the cards on your program.
 * @member {String} bin
 */
ConditionGroupInsertBindingModel.prototype.bin = undefined;

/**
 * The unique identifier assigned by PFS, to your program
 * @member {String} dc
 */
ConditionGroupInsertBindingModel.prototype.dc = undefined;

/**
 * Name of the setup to create
 * @member {String} name
 */
ConditionGroupInsertBindingModel.prototype.name = undefined;

/**
 * Condition setup
 * @member {Array.<module:model/ConditionConfiguration>} configurations
 */
ConditionGroupInsertBindingModel.prototype.configurations = undefined;

