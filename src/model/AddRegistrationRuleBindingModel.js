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
 * The AddRegistrationRuleBindingModel model module.
 * @module model/AddRegistrationRuleBindingModel
 * @version 2.0
 */
export class AddRegistrationRuleBindingModel {
  /**
   * Constructs a new <code>AddRegistrationRuleBindingModel</code>.
   * @alias module:model/AddRegistrationRuleBindingModel
   * @class
   * @param csrId {String} CSR Id.
   * @param note {String} 
   * @param blockType {String} Whether registration rule is temporary or permanent. Default is permanent.
   * @param origin {String} 
   * @param reason {String} Reason on inserting this registration rule.
   */
  constructor(csrId, note, blockType, origin, reason) {
    this.csrId = csrId;
    this.note = note;
    this.blockType = blockType;
    this.origin = origin;
    this.reason = reason;
  }

  /**
   * Constructs a <code>AddRegistrationRuleBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddRegistrationRuleBindingModel} obj Optional instance to populate.
   * @return {module:model/AddRegistrationRuleBindingModel} The populated <code>AddRegistrationRuleBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AddRegistrationRuleBindingModel();
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('dateOfBirth'))
        obj.dateOfBirth = ApiClient.convertToType(data['dateOfBirth'], 'String');
      if (data.hasOwnProperty('mobile'))
        obj.mobile = ApiClient.convertToType(data['mobile'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('documentNumber'))
        obj.documentNumber = ApiClient.convertToType(data['documentNumber'], 'String');
      if (data.hasOwnProperty('documentType'))
        obj.documentType = ApiClient.convertToType(data['documentType'], 'String');
      if (data.hasOwnProperty('documentExpiryDate'))
        obj.documentExpiryDate = ApiClient.convertToType(data['documentExpiryDate'], 'String');
      if (data.hasOwnProperty('countryOfIssuance'))
        obj.countryOfIssuance = ApiClient.convertToType(data['countryOfIssuance'], 'String');
      if (data.hasOwnProperty('address1'))
        obj.address1 = ApiClient.convertToType(data['address1'], 'String');
      if (data.hasOwnProperty('address2'))
        obj.address2 = ApiClient.convertToType(data['address2'], 'String');
      if (data.hasOwnProperty('address3'))
        obj.address3 = ApiClient.convertToType(data['address3'], 'String');
      if (data.hasOwnProperty('address4'))
        obj.address4 = ApiClient.convertToType(data['address4'], 'String');
      if (data.hasOwnProperty('zipCode'))
        obj.zipCode = ApiClient.convertToType(data['zipCode'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('countryCode'))
        obj.countryCode = ApiClient.convertToType(data['countryCode'], 'String');
      if (data.hasOwnProperty('bin'))
        obj.bin = ApiClient.convertToType(data['bin'], 'String');
      if (data.hasOwnProperty('distributorCode'))
        obj.distributorCode = ApiClient.convertToType(data['distributorCode'], 'String');
      if (data.hasOwnProperty('isBlacklisted'))
        obj.isBlacklisted = ApiClient.convertToType(data['isBlacklisted'], 'Boolean');
      if (data.hasOwnProperty('csrId'))
        obj.csrId = ApiClient.convertToType(data['csrId'], 'String');
      if (data.hasOwnProperty('note'))
        obj.note = ApiClient.convertToType(data['note'], 'String');
      if (data.hasOwnProperty('blockType'))
        obj.blockType = ApiClient.convertToType(data['blockType'], 'String');
      if (data.hasOwnProperty('blockExpiryDate'))
        obj.blockExpiryDate = ApiClient.convertToType(data['blockExpiryDate'], 'String');
      if (data.hasOwnProperty('origin'))
        obj.origin = ApiClient.convertToType(data['origin'], 'String');
      if (data.hasOwnProperty('reason'))
        obj.reason = ApiClient.convertToType(data['reason'], 'String');
    }
    return obj;
  }
}

/**
 * First name of cardholder.
 * @member {String} firstName
 */
AddRegistrationRuleBindingModel.prototype.firstName = undefined;

/**
 * Last name of cardholder.
 * @member {String} lastName
 */
AddRegistrationRuleBindingModel.prototype.lastName = undefined;

/**
 * Date of birth of cardholder in \"yyyy-MM-dd\" format.
 * @member {String} dateOfBirth
 */
AddRegistrationRuleBindingModel.prototype.dateOfBirth = undefined;

/**
 * Cardholder mobile number. Mobile number dial code can also be added by separating mobile number and dial code with a |.
 * @member {String} mobile
 */
AddRegistrationRuleBindingModel.prototype.mobile = undefined;

/**
 * Land line of cardholder. Landline dial code can also be added by separating landline and dial code with a |.
 * @member {String} phone
 */
AddRegistrationRuleBindingModel.prototype.phone = undefined;

/**
 * Email address of cardholder.
 * @member {String} email
 */
AddRegistrationRuleBindingModel.prototype.email = undefined;

/**
 * Document number of cardholder.
 * @member {String} documentNumber
 */
AddRegistrationRuleBindingModel.prototype.documentNumber = undefined;

/**
 * Document type of cardholder.
 * @member {String} documentType
 */
AddRegistrationRuleBindingModel.prototype.documentType = undefined;

/**
 * Document expiry date of cardholder in \"yyyy-MM-dd\" format.
 * @member {String} documentExpiryDate
 */
AddRegistrationRuleBindingModel.prototype.documentExpiryDate = undefined;

/**
 * Document country of issuance of cardholder in regulation with ISO 3166-1 alpha-2.
 * @member {String} countryOfIssuance
 */
AddRegistrationRuleBindingModel.prototype.countryOfIssuance = undefined;

/**
 * First line of cardholder address.
 * @member {String} address1
 */
AddRegistrationRuleBindingModel.prototype.address1 = undefined;

/**
 * Second line of cardholder address.
 * @member {String} address2
 */
AddRegistrationRuleBindingModel.prototype.address2 = undefined;

/**
 * Third line of cardholder address.
 * @member {String} address3
 */
AddRegistrationRuleBindingModel.prototype.address3 = undefined;

/**
 * Fourth line of cardholder address.
 * @member {String} address4
 */
AddRegistrationRuleBindingModel.prototype.address4 = undefined;

/**
 * Post code of cardholder.
 * @member {String} zipCode
 */
AddRegistrationRuleBindingModel.prototype.zipCode = undefined;

/**
 * City of cardholder address.
 * @member {String} city
 */
AddRegistrationRuleBindingModel.prototype.city = undefined;

/**
 * Country code of cardholder address.
 * @member {String} countryCode
 */
AddRegistrationRuleBindingModel.prototype.countryCode = undefined;

/**
 * Assigned by EML. It is the first 8 digits of the cards on your program.
 * @member {String} bin
 */
AddRegistrationRuleBindingModel.prototype.bin = undefined;

/**
 * The unique identifier assigned by EML, to your program.
 * @member {String} distributorCode
 */
AddRegistrationRuleBindingModel.prototype.distributorCode = undefined;

/**
 * Registration rule is blacklisted or whitelisted. Default is true (blacklisted).
 * @member {Boolean} isBlacklisted
 */
AddRegistrationRuleBindingModel.prototype.isBlacklisted = undefined;

/**
 * CSR Id.
 * @member {String} csrId
 */
AddRegistrationRuleBindingModel.prototype.csrId = undefined;

/**
 * @member {String} note
 */
AddRegistrationRuleBindingModel.prototype.note = undefined;

/**
 * Whether registration rule is temporary or permanent. Default is permanent.
 * @member {String} blockType
 */
AddRegistrationRuleBindingModel.prototype.blockType = undefined;

/**
 * Registration rule expiry date. Only applicable if BlockType is 'temporary'.
 * @member {String} blockExpiryDate
 */
AddRegistrationRuleBindingModel.prototype.blockExpiryDate = undefined;

/**
 * @member {String} origin
 */
AddRegistrationRuleBindingModel.prototype.origin = undefined;

/**
 * Reason on inserting this registration rule.
 * @member {String} reason
 */
AddRegistrationRuleBindingModel.prototype.reason = undefined;

