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
 * The ResetPasswordBindingModel model module.
 * @module model/ResetPasswordBindingModel
 * @version 2.0
 */
export class ResetPasswordBindingModel {
  /**
   * Constructs a new <code>ResetPasswordBindingModel</code>.
   * Reset Password Body
   * @alias module:model/ResetPasswordBindingModel
   * @class
   * @param newPassword {String} New password
   */
  constructor(newPassword) {
    this.newPassword = newPassword;
  }

  /**
   * Constructs a <code>ResetPasswordBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResetPasswordBindingModel} obj Optional instance to populate.
   * @return {module:model/ResetPasswordBindingModel} The populated <code>ResetPasswordBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResetPasswordBindingModel();
      if (data.hasOwnProperty('oldPassword'))
        obj.oldPassword = ApiClient.convertToType(data['oldPassword'], 'String');
      if (data.hasOwnProperty('newPassword'))
        obj.newPassword = ApiClient.convertToType(data['newPassword'], 'String');
      if (data.hasOwnProperty('verificationCode'))
        obj.verificationCode = ApiClient.convertToType(data['verificationCode'], 'String');
    }
    return obj;
  }
}

/**
 * Old password
 * @member {String} oldPassword
 */
ResetPasswordBindingModel.prototype.oldPassword = undefined;

/**
 * New password
 * @member {String} newPassword
 */
ResetPasswordBindingModel.prototype.newPassword = undefined;

/**
 * One time password sent to the cardholder via email or SMS
 * @member {String} verificationCode
 */
ResetPasswordBindingModel.prototype.verificationCode = undefined;
