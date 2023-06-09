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
 * The IvrFeeBindingModel model module.
 * @module model/IvrFeeBindingModel
 * @version 2.0
 */
export class IvrFeeBindingModel {
  /**
   * Constructs a new <code>IvrFeeBindingModel</code>.
   * Ivr Fee binding model body
   * @alias module:model/IvrFeeBindingModel
   * @class
   * @param distributorCode {String} Distributor Code
   */
  constructor(distributorCode) {
    this.distributorCode = distributorCode;
  }

  /**
   * Constructs a <code>IvrFeeBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IvrFeeBindingModel} obj Optional instance to populate.
   * @return {module:model/IvrFeeBindingModel} The populated <code>IvrFeeBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IvrFeeBindingModel();
      if (data.hasOwnProperty('distributorCode'))
        obj.distributorCode = ApiClient.convertToType(data['distributorCode'], 'String');
      if (data.hasOwnProperty('callLevel'))
        obj.callLevel = ApiClient.convertToType(data['callLevel'], 'Number');
      if (data.hasOwnProperty('functionId'))
        obj.functionId = ApiClient.convertToType(data['functionId'], 'Number');
      if (data.hasOwnProperty('currencyCode'))
        obj.currencyCode = ApiClient.convertToType(data['currencyCode'], 'String');
    }
    return obj;
  }
}

/**
 * Distributor Code
 * @member {String} distributorCode
 */
IvrFeeBindingModel.prototype.distributorCode = undefined;

/**
 * Call level
 * @member {Number} callLevel
 */
IvrFeeBindingModel.prototype.callLevel = undefined;

/**
 * Function Id
 * @member {Number} functionId
 */
IvrFeeBindingModel.prototype.functionId = undefined;

/**
 * Currency code of amount (ISO-4217 3 char).
 * @member {String} currencyCode
 */
IvrFeeBindingModel.prototype.currencyCode = undefined;

