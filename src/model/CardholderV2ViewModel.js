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
 * The CardholderV2ViewModel model module.
 * @module model/CardholderV2ViewModel
 * @version 2.0
 */
export class CardholderV2ViewModel {
  /**
   * Constructs a new <code>CardholderV2ViewModel</code>.
   * @alias module:model/CardholderV2ViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CardholderV2ViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CardholderV2ViewModel} obj Optional instance to populate.
   * @return {module:model/CardholderV2ViewModel} The populated <code>CardholderV2ViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CardholderV2ViewModel();
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
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('dateOfBirth'))
        obj.dateOfBirth = ApiClient.convertToType(data['dateOfBirth'], 'String');
      if (data.hasOwnProperty('ssn'))
        obj.ssn = ApiClient.convertToType(data['ssn'], 'String');
      if (data.hasOwnProperty('securityField1'))
        obj.securityField1 = ApiClient.convertToType(data['securityField1'], 'String');
      if (data.hasOwnProperty('securityField2'))
        obj.securityField2 = ApiClient.convertToType(data['securityField2'], 'String');
      if (data.hasOwnProperty('securityField3'))
        obj.securityField3 = ApiClient.convertToType(data['securityField3'], 'String');
      if (data.hasOwnProperty('securityField4'))
        obj.securityField4 = ApiClient.convertToType(data['securityField4'], 'String');
      if (data.hasOwnProperty('userDefined1'))
        obj.userDefined1 = ApiClient.convertToType(data['userDefined1'], 'String');
      if (data.hasOwnProperty('userDefined2'))
        obj.userDefined2 = ApiClient.convertToType(data['userDefined2'], 'String');
      if (data.hasOwnProperty('userDefined3'))
        obj.userDefined3 = ApiClient.convertToType(data['userDefined3'], 'String');
      if (data.hasOwnProperty('userDefined4'))
        obj.userDefined4 = ApiClient.convertToType(data['userDefined4'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('embossName'))
        obj.embossName = ApiClient.convertToType(data['embossName'], 'String');
      if (data.hasOwnProperty('secondaryAddress1'))
        obj.secondaryAddress1 = ApiClient.convertToType(data['secondaryAddress1'], 'String');
      if (data.hasOwnProperty('secondaryAddress2'))
        obj.secondaryAddress2 = ApiClient.convertToType(data['secondaryAddress2'], 'String');
      if (data.hasOwnProperty('secondaryAddress3'))
        obj.secondaryAddress3 = ApiClient.convertToType(data['secondaryAddress3'], 'String');
      if (data.hasOwnProperty('secondaryAddress4'))
        obj.secondaryAddress4 = ApiClient.convertToType(data['secondaryAddress4'], 'String');
      if (data.hasOwnProperty('city2'))
        obj.city2 = ApiClient.convertToType(data['city2'], 'String');
      if (data.hasOwnProperty('state2'))
        obj.state2 = ApiClient.convertToType(data['state2'], 'String');
      if (data.hasOwnProperty('zip2'))
        obj.zip2 = ApiClient.convertToType(data['zip2'], 'String');
      if (data.hasOwnProperty('countryCode2'))
        obj.countryCode2 = ApiClient.convertToType(data['countryCode2'], 'String');
      if (data.hasOwnProperty('countryName2'))
        obj.countryName2 = ApiClient.convertToType(data['countryName2'], 'String');
      if (data.hasOwnProperty('countyName2'))
        obj.countyName2 = ApiClient.convertToType(data['countyName2'], 'String');
      if (data.hasOwnProperty('phone2'))
        obj.phone2 = ApiClient.convertToType(data['phone2'], 'String');
      if (data.hasOwnProperty('sortCode'))
        obj.sortCode = ApiClient.convertToType(data['sortCode'], 'String');
      if (data.hasOwnProperty('sortCodeAccountNumber'))
        obj.sortCodeAccountNumber = ApiClient.convertToType(data['sortCodeAccountNumber'], 'String');
      if (data.hasOwnProperty('documentType'))
        obj.documentType = ApiClient.convertToType(data['documentType'], 'String');
      if (data.hasOwnProperty('documentNumber'))
        obj.documentNumber = ApiClient.convertToType(data['documentNumber'], 'String');
      if (data.hasOwnProperty('documentExpiryDate'))
        obj.documentExpiryDate = ApiClient.convertToType(data['documentExpiryDate'], 'String');
      if (data.hasOwnProperty('nationality'))
        obj.nationality = ApiClient.convertToType(data['nationality'], 'String');
      if (data.hasOwnProperty('countryOfIssuance'))
        obj.countryOfIssuance = ApiClient.convertToType(data['countryOfIssuance'], 'String');
      if (data.hasOwnProperty('gender'))
        obj.gender = ApiClient.convertToType(data['gender'], 'String');
      if (data.hasOwnProperty('iban'))
        obj.iban = ApiClient.convertToType(data['iban'], 'String');
      if (data.hasOwnProperty('bic'))
        obj.bic = ApiClient.convertToType(data['bic'], 'String');
      if (data.hasOwnProperty('atmAccess'))
        obj.atmAccess = ApiClient.convertToType(data['atmAccess'], 'Boolean');
      if (data.hasOwnProperty('userDefined'))
        obj.userDefined = ApiClient.convertToType(data['userDefined'], Object);
      if (data.hasOwnProperty('accountId'))
        obj.accountId = ApiClient.convertToType(data['accountId'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
CardholderV2ViewModel.prototype.id = undefined;

/**
 * @member {String} firstName
 */
CardholderV2ViewModel.prototype.firstName = undefined;

/**
 * @member {String} middleInitial
 */
CardholderV2ViewModel.prototype.middleInitial = undefined;

/**
 * @member {String} lastName
 */
CardholderV2ViewModel.prototype.lastName = undefined;

/**
 * @member {String} address1
 */
CardholderV2ViewModel.prototype.address1 = undefined;

/**
 * @member {String} address2
 */
CardholderV2ViewModel.prototype.address2 = undefined;

/**
 * @member {String} address3
 */
CardholderV2ViewModel.prototype.address3 = undefined;

/**
 * @member {String} address4
 */
CardholderV2ViewModel.prototype.address4 = undefined;

/**
 * @member {String} city
 */
CardholderV2ViewModel.prototype.city = undefined;

/**
 * @member {String} state
 */
CardholderV2ViewModel.prototype.state = undefined;

/**
 * @member {String} zip
 */
CardholderV2ViewModel.prototype.zip = undefined;

/**
 * @member {String} countryCode
 */
CardholderV2ViewModel.prototype.countryCode = undefined;

/**
 * @member {String} countryName
 */
CardholderV2ViewModel.prototype.countryName = undefined;

/**
 * @member {String} countyName
 */
CardholderV2ViewModel.prototype.countyName = undefined;

/**
 * @member {String} phone
 */
CardholderV2ViewModel.prototype.phone = undefined;

/**
 * @member {String} dateOfBirth
 */
CardholderV2ViewModel.prototype.dateOfBirth = undefined;

/**
 * @member {String} ssn
 */
CardholderV2ViewModel.prototype.ssn = undefined;

/**
 * @member {String} securityField1
 */
CardholderV2ViewModel.prototype.securityField1 = undefined;

/**
 * @member {String} securityField2
 */
CardholderV2ViewModel.prototype.securityField2 = undefined;

/**
 * @member {String} securityField3
 */
CardholderV2ViewModel.prototype.securityField3 = undefined;

/**
 * @member {String} securityField4
 */
CardholderV2ViewModel.prototype.securityField4 = undefined;

/**
 * @member {String} userDefined1
 */
CardholderV2ViewModel.prototype.userDefined1 = undefined;

/**
 * @member {String} userDefined2
 */
CardholderV2ViewModel.prototype.userDefined2 = undefined;

/**
 * @member {String} userDefined3
 */
CardholderV2ViewModel.prototype.userDefined3 = undefined;

/**
 * @member {String} userDefined4
 */
CardholderV2ViewModel.prototype.userDefined4 = undefined;

/**
 * @member {String} email
 */
CardholderV2ViewModel.prototype.email = undefined;

/**
 * @member {String} embossName
 */
CardholderV2ViewModel.prototype.embossName = undefined;

/**
 * @member {String} secondaryAddress1
 */
CardholderV2ViewModel.prototype.secondaryAddress1 = undefined;

/**
 * @member {String} secondaryAddress2
 */
CardholderV2ViewModel.prototype.secondaryAddress2 = undefined;

/**
 * @member {String} secondaryAddress3
 */
CardholderV2ViewModel.prototype.secondaryAddress3 = undefined;

/**
 * @member {String} secondaryAddress4
 */
CardholderV2ViewModel.prototype.secondaryAddress4 = undefined;

/**
 * @member {String} city2
 */
CardholderV2ViewModel.prototype.city2 = undefined;

/**
 * @member {String} state2
 */
CardholderV2ViewModel.prototype.state2 = undefined;

/**
 * @member {String} zip2
 */
CardholderV2ViewModel.prototype.zip2 = undefined;

/**
 * @member {String} countryCode2
 */
CardholderV2ViewModel.prototype.countryCode2 = undefined;

/**
 * @member {String} countryName2
 */
CardholderV2ViewModel.prototype.countryName2 = undefined;

/**
 * @member {String} countyName2
 */
CardholderV2ViewModel.prototype.countyName2 = undefined;

/**
 * @member {String} phone2
 */
CardholderV2ViewModel.prototype.phone2 = undefined;

/**
 * @member {String} sortCode
 */
CardholderV2ViewModel.prototype.sortCode = undefined;

/**
 * @member {String} sortCodeAccountNumber
 */
CardholderV2ViewModel.prototype.sortCodeAccountNumber = undefined;

/**
 * @member {String} documentType
 */
CardholderV2ViewModel.prototype.documentType = undefined;

/**
 * @member {String} documentNumber
 */
CardholderV2ViewModel.prototype.documentNumber = undefined;

/**
 * @member {String} documentExpiryDate
 */
CardholderV2ViewModel.prototype.documentExpiryDate = undefined;

/**
 * @member {String} nationality
 */
CardholderV2ViewModel.prototype.nationality = undefined;

/**
 * @member {String} countryOfIssuance
 */
CardholderV2ViewModel.prototype.countryOfIssuance = undefined;

/**
 * @member {String} gender
 */
CardholderV2ViewModel.prototype.gender = undefined;

/**
 * @member {String} iban
 */
CardholderV2ViewModel.prototype.iban = undefined;

/**
 * @member {String} bic
 */
CardholderV2ViewModel.prototype.bic = undefined;

/**
 * @member {Boolean} atmAccess
 */
CardholderV2ViewModel.prototype.atmAccess = undefined;

/**
 * @member {Object} userDefined
 */
CardholderV2ViewModel.prototype.userDefined = undefined;

/**
 * @member {String} accountId
 */
CardholderV2ViewModel.prototype.accountId = undefined;

