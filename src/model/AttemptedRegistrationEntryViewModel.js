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
import {EntryViewModel} from './EntryViewModel';

/**
 * The AttemptedRegistrationEntryViewModel model module.
 * @module model/AttemptedRegistrationEntryViewModel
 * @version 2.0
 */
export class AttemptedRegistrationEntryViewModel {
  /**
   * Constructs a new <code>AttemptedRegistrationEntryViewModel</code>.
   * @alias module:model/AttemptedRegistrationEntryViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AttemptedRegistrationEntryViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttemptedRegistrationEntryViewModel} obj Optional instance to populate.
   * @return {module:model/AttemptedRegistrationEntryViewModel} The populated <code>AttemptedRegistrationEntryViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AttemptedRegistrationEntryViewModel();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('messageId'))
        obj.messageId = ApiClient.convertToType(data['messageId'], 'String');
      if (data.hasOwnProperty('requestDateTime'))
        obj.requestDateTime = ApiClient.convertToType(data['requestDateTime'], 'Date');
      if (data.hasOwnProperty('responseDateTime'))
        obj.responseDateTime = ApiClient.convertToType(data['responseDateTime'], 'Date');
      if (data.hasOwnProperty('responseCode'))
        obj.responseCode = ApiClient.convertToType(data['responseCode'], 'String');
      if (data.hasOwnProperty('match'))
        obj.match = ApiClient.convertToType(data['match'], [EntryViewModel]);
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
AttemptedRegistrationEntryViewModel.prototype.id = undefined;

/**
 * @member {String} messageId
 */
AttemptedRegistrationEntryViewModel.prototype.messageId = undefined;

/**
 * @member {Date} requestDateTime
 */
AttemptedRegistrationEntryViewModel.prototype.requestDateTime = undefined;

/**
 * @member {Date} responseDateTime
 */
AttemptedRegistrationEntryViewModel.prototype.responseDateTime = undefined;

/**
 * @member {String} responseCode
 */
AttemptedRegistrationEntryViewModel.prototype.responseCode = undefined;

/**
 * @member {Array.<module:model/EntryViewModel>} match
 */
AttemptedRegistrationEntryViewModel.prototype.match = undefined;

