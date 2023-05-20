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
 * The GetCvvBindingModel model module.
 * @module model/GetCvvBindingModel
 * @version 2.0
 */
export class GetCvvBindingModel {
  /**
   * Constructs a new <code>GetCvvBindingModel</code>.
   * Request model for retrieving CVV.
   * @alias module:model/GetCvvBindingModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetCvvBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCvvBindingModel} obj Optional instance to populate.
   * @return {module:model/GetCvvBindingModel} The populated <code>GetCvvBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetCvvBindingModel();
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('zipCode'))
        obj.zipCode = ApiClient.convertToType(data['zipCode'], 'String');
      if (data.hasOwnProperty('dateOfBirth'))
        obj.dateOfBirth = ApiClient.convertToType(data['dateOfBirth'], 'String');
      if (data.hasOwnProperty('securityQuestion'))
        obj.securityQuestion = ApiClient.convertToType(data['securityQuestion'], 'String');
      if (data.hasOwnProperty('securityAnswer'))
        obj.securityAnswer = ApiClient.convertToType(data['securityAnswer'], 'String');
      if (data.hasOwnProperty('userDefined1'))
        obj.userDefined1 = ApiClient.convertToType(data['userDefined1'], 'String');
      if (data.hasOwnProperty('userDefined2'))
        obj.userDefined2 = ApiClient.convertToType(data['userDefined2'], 'String');
      if (data.hasOwnProperty('userDefined3'))
        obj.userDefined3 = ApiClient.convertToType(data['userDefined3'], 'String');
      if (data.hasOwnProperty('userDefined4'))
        obj.userDefined4 = ApiClient.convertToType(data['userDefined4'], 'String');
    }
    return obj;
  }
}

/**
 * Primary cardholder phone.
 * @member {String} phone
 */
GetCvvBindingModel.prototype.phone = undefined;

/**
 * Cardholder address.
 * @member {String} address
 */
GetCvvBindingModel.prototype.address = undefined;

/**
 * Cardholder zip code.
 * @member {String} zipCode
 */
GetCvvBindingModel.prototype.zipCode = undefined;

/**
 * Cardholder date of birth, in \"yyyy-MM-dd\" format.
 * @member {String} dateOfBirth
 */
GetCvvBindingModel.prototype.dateOfBirth = undefined;

/**
 * Cardholder security question.
 * @member {String} securityQuestion
 */
GetCvvBindingModel.prototype.securityQuestion = undefined;

/**
 * Cardholder security answer.
 * @member {String} securityAnswer
 */
GetCvvBindingModel.prototype.securityAnswer = undefined;

/**
 * @member {String} userDefined1
 */
GetCvvBindingModel.prototype.userDefined1 = undefined;

/**
 * @member {String} userDefined2
 */
GetCvvBindingModel.prototype.userDefined2 = undefined;

/**
 * @member {String} userDefined3
 */
GetCvvBindingModel.prototype.userDefined3 = undefined;

/**
 * @member {String} userDefined4
 */
GetCvvBindingModel.prototype.userDefined4 = undefined;

