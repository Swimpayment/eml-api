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
 * The Payee model module.
 * @module model/Payee
 * @version 2.0
 */
export class Payee {
  /**
   * Constructs a new <code>Payee</code>.
   * @alias module:model/Payee
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Payee</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Payee} obj Optional instance to populate.
   * @return {module:model/Payee} The populated <code>Payee</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Payee();
      if (data.hasOwnProperty('accountNumber'))
        obj.accountNumber = ApiClient.convertToType(data['accountNumber'], 'String');
      if (data.hasOwnProperty('bankName'))
        obj.bankName = ApiClient.convertToType(data['bankName'], 'String');
      if (data.hasOwnProperty('bankSortCode'))
        obj.bankSortCode = ApiClient.convertToType(data['bankSortCode'], 'String');
      if (data.hasOwnProperty('beneficiaryName'))
        obj.beneficiaryName = ApiClient.convertToType(data['beneficiaryName'], 'String');
      if (data.hasOwnProperty('iban'))
        obj.iban = ApiClient.convertToType(data['iban'], 'String');
      if (data.hasOwnProperty('swiftBicCode'))
        obj.swiftBicCode = ApiClient.convertToType(data['swiftBicCode'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} accountNumber
 */
Payee.prototype.accountNumber = undefined;

/**
 * @member {String} bankName
 */
Payee.prototype.bankName = undefined;

/**
 * @member {String} bankSortCode
 */
Payee.prototype.bankSortCode = undefined;

/**
 * @member {String} beneficiaryName
 */
Payee.prototype.beneficiaryName = undefined;

/**
 * @member {String} iban
 */
Payee.prototype.iban = undefined;

/**
 * @member {String} swiftBicCode
 */
Payee.prototype.swiftBicCode = undefined;

