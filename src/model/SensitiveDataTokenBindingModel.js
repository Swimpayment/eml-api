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
 * The SensitiveDataTokenBindingModel model module.
 * @module model/SensitiveDataTokenBindingModel
 * @version 2.0
 */
export class SensitiveDataTokenBindingModel {
  /**
   * Constructs a new <code>SensitiveDataTokenBindingModel</code>.
   * @alias module:model/SensitiveDataTokenBindingModel
   * @class
   * @param dateOfBirth {String} Date of birth of cardholder, in \"yyyy-MM-dd\" format.
   * @param codeChallenge {String} 
   * @param sensitiveDataType {String} 'CardNumber' or 'Pin'.
   */
  constructor(dateOfBirth, codeChallenge, sensitiveDataType) {
    this.dateOfBirth = dateOfBirth;
    this.codeChallenge = codeChallenge;
    this.sensitiveDataType = sensitiveDataType;
  }

  /**
   * Constructs a <code>SensitiveDataTokenBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SensitiveDataTokenBindingModel} obj Optional instance to populate.
   * @return {module:model/SensitiveDataTokenBindingModel} The populated <code>SensitiveDataTokenBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SensitiveDataTokenBindingModel();
      if (data.hasOwnProperty('dateOfBirth'))
        obj.dateOfBirth = ApiClient.convertToType(data['dateOfBirth'], 'String');
      if (data.hasOwnProperty('codeChallenge'))
        obj.codeChallenge = ApiClient.convertToType(data['codeChallenge'], 'String');
      if (data.hasOwnProperty('sensitiveDataType'))
        obj.sensitiveDataType = ApiClient.convertToType(data['sensitiveDataType'], 'String');
      if (data.hasOwnProperty('css'))
        obj.css = ApiClient.convertToType(data['css'], 'String');
      if (data.hasOwnProperty('cipherAlgorithm'))
        obj.cipherAlgorithm = ApiClient.convertToType(data['cipherAlgorithm'], 'String');
    }
    return obj;
  }
}

/**
 * Date of birth of cardholder, in \"yyyy-MM-dd\" format.
 * @member {String} dateOfBirth
 */
SensitiveDataTokenBindingModel.prototype.dateOfBirth = undefined;

/**
 * @member {String} codeChallenge
 */
SensitiveDataTokenBindingModel.prototype.codeChallenge = undefined;

/**
 * 'CardNumber' or 'Pin'.
 * @member {String} sensitiveDataType
 */
SensitiveDataTokenBindingModel.prototype.sensitiveDataType = undefined;

/**
 * URL format.
 * @member {String} css
 */
SensitiveDataTokenBindingModel.prototype.css = undefined;

/**
 * 'SHA256' or 'SHA512'.
 * @member {String} cipherAlgorithm
 */
SensitiveDataTokenBindingModel.prototype.cipherAlgorithm = undefined;
