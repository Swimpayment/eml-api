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
import {MDESToken} from './MDESToken';

/**
 * The Account model module.
 * @module model/Account
 * @version 2.0
 */
export class Account {
  /**
   * Constructs a new <code>Account</code>.
   * @alias module:model/Account
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Account} obj Optional instance to populate.
   * @return {module:model/Account} The populated <code>Account</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Account();
      if (data.hasOwnProperty('accountPanSuffix'))
        obj.accountPanSuffix = ApiClient.convertToType(data['accountPanSuffix'], 'String');
      if (data.hasOwnProperty('financialAccountSuffix'))
        obj.financialAccountSuffix = ApiClient.convertToType(data['financialAccountSuffix'], 'String');
      if (data.hasOwnProperty('countryCode'))
        obj.countryCode = ApiClient.convertToType(data['countryCode'], 'String');
      if (data.hasOwnProperty('interbankCardAssociationId'))
        obj.interbankCardAssociationId = ApiClient.convertToType(data['interbankCardAssociationId'], 'String');
      if (data.hasOwnProperty('institutionName'))
        obj.institutionName = ApiClient.convertToType(data['institutionName'], 'String');
      if (data.hasOwnProperty('expirationDate'))
        obj.expirationDate = ApiClient.convertToType(data['expirationDate'], 'String');
      if (data.hasOwnProperty('alternateAccountIdentifierSuffix'))
        obj.alternateAccountIdentifierSuffix = ApiClient.convertToType(data['alternateAccountIdentifierSuffix'], 'String');
      if (data.hasOwnProperty('tokens'))
        obj.tokens = ApiClient.convertToType(data['tokens'], [MDESToken]);
    }
    return obj;
  }
}

/**
 * @member {String} accountPanSuffix
 */
Account.prototype.accountPanSuffix = undefined;

/**
 * @member {String} financialAccountSuffix
 */
Account.prototype.financialAccountSuffix = undefined;

/**
 * @member {String} countryCode
 */
Account.prototype.countryCode = undefined;

/**
 * @member {String} interbankCardAssociationId
 */
Account.prototype.interbankCardAssociationId = undefined;

/**
 * @member {String} institutionName
 */
Account.prototype.institutionName = undefined;

/**
 * @member {String} expirationDate
 */
Account.prototype.expirationDate = undefined;

/**
 * @member {String} alternateAccountIdentifierSuffix
 */
Account.prototype.alternateAccountIdentifierSuffix = undefined;

/**
 * @member {Array.<module:model/MDESToken>} tokens
 */
Account.prototype.tokens = undefined;

