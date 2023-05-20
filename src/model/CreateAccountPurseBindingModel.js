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
 * The CreateAccountPurseBindingModel model module.
 * @module model/CreateAccountPurseBindingModel
 * @version 2.0
 */
export class CreateAccountPurseBindingModel {
  /**
   * Constructs a new <code>CreateAccountPurseBindingModel</code>.
   * @alias module:model/CreateAccountPurseBindingModel
   * @class
   * @param id {String} Cardholder Id
   * @param currency {String} ISO-4217 3 character currency code
   */
  constructor(id, currency) {
    this.id = id;
    this.currency = currency;
  }

  /**
   * Constructs a <code>CreateAccountPurseBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateAccountPurseBindingModel} obj Optional instance to populate.
   * @return {module:model/CreateAccountPurseBindingModel} The populated <code>CreateAccountPurseBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateAccountPurseBindingModel();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
    }
    return obj;
  }
}

/**
 * Cardholder Id
 * @member {String} id
 */
CreateAccountPurseBindingModel.prototype.id = undefined;

/**
 * ISO-4217 3 character currency code
 * @member {String} currency
 */
CreateAccountPurseBindingModel.prototype.currency = undefined;

