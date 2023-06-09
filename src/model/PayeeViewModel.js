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
 * The PayeeViewModel model module.
 * @module model/PayeeViewModel
 * @version 2.0
 */
export class PayeeViewModel {
  /**
   * Constructs a new <code>PayeeViewModel</code>.
   * @alias module:model/PayeeViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PayeeViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PayeeViewModel} obj Optional instance to populate.
   * @return {module:model/PayeeViewModel} The populated <code>PayeeViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PayeeViewModel();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('payeeId'))
        obj.payeeId = ApiClient.convertToType(data['payeeId'], 'String');
      if (data.hasOwnProperty('accountIdentifier'))
        obj.accountIdentifier = ApiClient.convertToType(data['accountIdentifier'], 'String');
      if (data.hasOwnProperty('countryCode'))
        obj.countryCode = ApiClient.convertToType(data['countryCode'], 'String');
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('address1'))
        obj.address1 = ApiClient.convertToType(data['address1'], 'String');
      if (data.hasOwnProperty('address2'))
        obj.address2 = ApiClient.convertToType(data['address2'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('postCode'))
        obj.postCode = ApiClient.convertToType(data['postCode'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('isInstant'))
        obj.isInstant = ApiClient.convertToType(data['isInstant'], 'String');
      if (data.hasOwnProperty('bankIdentifier'))
        obj.bankIdentifier = ApiClient.convertToType(data['bankIdentifier'], 'String');
      if (data.hasOwnProperty('bankIdentifier1'))
        obj.bankIdentifier1 = ApiClient.convertToType(data['bankIdentifier1'], 'String');
      if (data.hasOwnProperty('bankIdentifier2'))
        obj.bankIdentifier2 = ApiClient.convertToType(data['bankIdentifier2'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('isActive'))
        obj.isActive = ApiClient.convertToType(data['isActive'], 'Boolean');
      if (data.hasOwnProperty('paymentScheme'))
        obj.paymentScheme = ApiClient.convertToType(data['paymentScheme'], 'Number');
      if (data.hasOwnProperty('isConfirmed'))
        obj.isConfirmed = ApiClient.convertToType(data['isConfirmed'], 'Boolean');
      if (data.hasOwnProperty('creditorDateOfBirth'))
        obj.creditorDateOfBirth = ApiClient.convertToType(data['creditorDateOfBirth'], 'String');
      if (data.hasOwnProperty('creditorIdentificationType'))
        obj.creditorIdentificationType = ApiClient.convertToType(data['creditorIdentificationType'], 'String');
      if (data.hasOwnProperty('creditorIdentificationValue'))
        obj.creditorIdentificationValue = ApiClient.convertToType(data['creditorIdentificationValue'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
PayeeViewModel.prototype.id = undefined;

/**
 * @member {String} payeeId
 */
PayeeViewModel.prototype.payeeId = undefined;

/**
 * @member {String} accountIdentifier
 */
PayeeViewModel.prototype.accountIdentifier = undefined;

/**
 * @member {String} countryCode
 */
PayeeViewModel.prototype.countryCode = undefined;

/**
 * @member {String} firstName
 */
PayeeViewModel.prototype.firstName = undefined;

/**
 * @member {String} lastName
 */
PayeeViewModel.prototype.lastName = undefined;

/**
 * @member {String} address1
 */
PayeeViewModel.prototype.address1 = undefined;

/**
 * @member {String} address2
 */
PayeeViewModel.prototype.address2 = undefined;

/**
 * @member {String} city
 */
PayeeViewModel.prototype.city = undefined;

/**
 * @member {String} postCode
 */
PayeeViewModel.prototype.postCode = undefined;

/**
 * @member {String} state
 */
PayeeViewModel.prototype.state = undefined;

/**
 * @member {String} type
 */
PayeeViewModel.prototype.type = undefined;

/**
 * @member {String} isInstant
 */
PayeeViewModel.prototype.isInstant = undefined;

/**
 * @member {String} bankIdentifier
 */
PayeeViewModel.prototype.bankIdentifier = undefined;

/**
 * @member {String} bankIdentifier1
 */
PayeeViewModel.prototype.bankIdentifier1 = undefined;

/**
 * @member {String} bankIdentifier2
 */
PayeeViewModel.prototype.bankIdentifier2 = undefined;

/**
 * @member {String} currency
 */
PayeeViewModel.prototype.currency = undefined;

/**
 * @member {Boolean} isActive
 */
PayeeViewModel.prototype.isActive = undefined;

/**
 * @member {Number} paymentScheme
 */
PayeeViewModel.prototype.paymentScheme = undefined;

/**
 * @member {Boolean} isConfirmed
 */
PayeeViewModel.prototype.isConfirmed = undefined;

/**
 * @member {String} creditorDateOfBirth
 */
PayeeViewModel.prototype.creditorDateOfBirth = undefined;

/**
 * @member {String} creditorIdentificationType
 */
PayeeViewModel.prototype.creditorIdentificationType = undefined;

/**
 * @member {String} creditorIdentificationValue
 */
PayeeViewModel.prototype.creditorIdentificationValue = undefined;

