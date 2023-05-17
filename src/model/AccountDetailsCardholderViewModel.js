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
 * The AccountDetailsCardholderViewModel model module.
 * @module model/AccountDetailsCardholderViewModel
 * @version 2.0
 */
export class AccountDetailsCardholderViewModel {
  /**
   * Constructs a new <code>AccountDetailsCardholderViewModel</code>.
   * @alias module:model/AccountDetailsCardholderViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AccountDetailsCardholderViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountDetailsCardholderViewModel} obj Optional instance to populate.
   * @return {module:model/AccountDetailsCardholderViewModel} The populated <code>AccountDetailsCardholderViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AccountDetailsCardholderViewModel();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('middleInitial'))
        obj.middleInitial = ApiClient.convertToType(data['middleInitial'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('address1'))
        obj.address1 = ApiClient.convertToType(data['address1'], 'String');
      if (data.hasOwnProperty('address2'))
        obj.address2 = ApiClient.convertToType(data['address2'], 'String');
      if (data.hasOwnProperty('address3'))
        obj.address3 = ApiClient.convertToType(data['address3'], 'String');
      if (data.hasOwnProperty('address4'))
        obj.address4 = ApiClient.convertToType(data['address4'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('zip'))
        obj.zip = ApiClient.convertToType(data['zip'], 'String');
      if (data.hasOwnProperty('countryCode'))
        obj.countryCode = ApiClient.convertToType(data['countryCode'], 'String');
      if (data.hasOwnProperty('countryName'))
        obj.countryName = ApiClient.convertToType(data['countryName'], 'String');
      if (data.hasOwnProperty('countyName'))
        obj.countyName = ApiClient.convertToType(data['countyName'], 'String');
      if (data.hasOwnProperty('dateOfBirth'))
        obj.dateOfBirth = ApiClient.convertToType(data['dateOfBirth'], 'String');
      if (data.hasOwnProperty('phone2'))
        obj.phone2 = ApiClient.convertToType(data['phone2'], 'String');
      if (data.hasOwnProperty('userDefined1'))
        obj.userDefined1 = ApiClient.convertToType(data['userDefined1'], 'String');
      if (data.hasOwnProperty('userDefined2'))
        obj.userDefined2 = ApiClient.convertToType(data['userDefined2'], 'String');
      if (data.hasOwnProperty('userDefined3'))
        obj.userDefined3 = ApiClient.convertToType(data['userDefined3'], 'String');
      if (data.hasOwnProperty('userDefined4'))
        obj.userDefined4 = ApiClient.convertToType(data['userDefined4'], 'String');
      if (data.hasOwnProperty('kycStatus'))
        obj.kycStatus = ApiClient.convertToType(data['kycStatus'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
AccountDetailsCardholderViewModel.prototype.id = undefined;

/**
 * @member {String} firstName
 */
AccountDetailsCardholderViewModel.prototype.firstName = undefined;

/**
 * @member {String} middleInitial
 */
AccountDetailsCardholderViewModel.prototype.middleInitial = undefined;

/**
 * @member {String} lastName
 */
AccountDetailsCardholderViewModel.prototype.lastName = undefined;

/**
 * @member {String} address1
 */
AccountDetailsCardholderViewModel.prototype.address1 = undefined;

/**
 * @member {String} address2
 */
AccountDetailsCardholderViewModel.prototype.address2 = undefined;

/**
 * @member {String} address3
 */
AccountDetailsCardholderViewModel.prototype.address3 = undefined;

/**
 * @member {String} address4
 */
AccountDetailsCardholderViewModel.prototype.address4 = undefined;

/**
 * @member {String} city
 */
AccountDetailsCardholderViewModel.prototype.city = undefined;

/**
 * @member {String} state
 */
AccountDetailsCardholderViewModel.prototype.state = undefined;

/**
 * @member {String} zip
 */
AccountDetailsCardholderViewModel.prototype.zip = undefined;

/**
 * @member {String} countryCode
 */
AccountDetailsCardholderViewModel.prototype.countryCode = undefined;

/**
 * @member {String} countryName
 */
AccountDetailsCardholderViewModel.prototype.countryName = undefined;

/**
 * @member {String} countyName
 */
AccountDetailsCardholderViewModel.prototype.countyName = undefined;

/**
 * @member {String} dateOfBirth
 */
AccountDetailsCardholderViewModel.prototype.dateOfBirth = undefined;

/**
 * @member {String} phone2
 */
AccountDetailsCardholderViewModel.prototype.phone2 = undefined;

/**
 * @member {String} userDefined1
 */
AccountDetailsCardholderViewModel.prototype.userDefined1 = undefined;

/**
 * @member {String} userDefined2
 */
AccountDetailsCardholderViewModel.prototype.userDefined2 = undefined;

/**
 * @member {String} userDefined3
 */
AccountDetailsCardholderViewModel.prototype.userDefined3 = undefined;

/**
 * @member {String} userDefined4
 */
AccountDetailsCardholderViewModel.prototype.userDefined4 = undefined;

/**
 * @member {String} kycStatus
 */
AccountDetailsCardholderViewModel.prototype.kycStatus = undefined;

