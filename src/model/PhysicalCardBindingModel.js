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
 * The PhysicalCardBindingModel model module.
 * @module model/PhysicalCardBindingModel
 * @version 2.0
 */
export class PhysicalCardBindingModel {
  /**
   * Constructs a new <code>PhysicalCardBindingModel</code>.
   * @alias module:model/PhysicalCardBindingModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PhysicalCardBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PhysicalCardBindingModel} obj Optional instance to populate.
   * @return {module:model/PhysicalCardBindingModel} The populated <code>PhysicalCardBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PhysicalCardBindingModel();
      if (data.hasOwnProperty('cardStyle'))
        obj.cardStyle = ApiClient.convertToType(data['cardStyle'], 'String');
      if (data.hasOwnProperty('userDefined'))
        obj.userDefined = ApiClient.convertToType(data['userDefined'], {'String': 'String'});
    }
    return obj;
  }
}

/**
 * Card style.
 * @member {String} cardStyle
 */
PhysicalCardBindingModel.prototype.cardStyle = undefined;

/**
 * Open entry dictionary - For adding custom cardholder data to an account
 * @member {Object.<String, String>} userDefined
 */
PhysicalCardBindingModel.prototype.userDefined = undefined;

