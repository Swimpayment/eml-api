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
 * The EntryViewModel model module.
 * @module model/EntryViewModel
 * @version 2.0
 */
export class EntryViewModel {
  /**
   * Constructs a new <code>EntryViewModel</code>.
   * @alias module:model/EntryViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EntryViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntryViewModel} obj Optional instance to populate.
   * @return {module:model/EntryViewModel} The populated <code>EntryViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EntryViewModel();
      if (data.hasOwnProperty('matchType'))
        obj.matchType = ApiClient.convertToType(data['matchType'], 'String');
      if (data.hasOwnProperty('cardholderId'))
        obj.cardholderId = ApiClient.convertToType(data['cardholderId'], ['Number']);
    }
    return obj;
  }
}

/**
 * @member {String} matchType
 */
EntryViewModel.prototype.matchType = undefined;

/**
 * @member {Array.<Number>} cardholderId
 */
EntryViewModel.prototype.cardholderId = undefined;

