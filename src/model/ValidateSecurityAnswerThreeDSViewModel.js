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
 * The ValidateSecurityAnswerThreeDSViewModel model module.
 * @module model/ValidateSecurityAnswerThreeDSViewModel
 * @version 2.0
 */
export class ValidateSecurityAnswerThreeDSViewModel {
  /**
   * Constructs a new <code>ValidateSecurityAnswerThreeDSViewModel</code>.
   * @alias module:model/ValidateSecurityAnswerThreeDSViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ValidateSecurityAnswerThreeDSViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidateSecurityAnswerThreeDSViewModel} obj Optional instance to populate.
   * @return {module:model/ValidateSecurityAnswerThreeDSViewModel} The populated <code>ValidateSecurityAnswerThreeDSViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ValidateSecurityAnswerThreeDSViewModel();
      if (data.hasOwnProperty('isValid'))
        obj.isValid = ApiClient.convertToType(data['isValid'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Boolean} isValid
 */
ValidateSecurityAnswerThreeDSViewModel.prototype.isValid = undefined;

