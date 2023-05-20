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
 * The AvailableProductTypeViewModel model module.
 * @module model/AvailableProductTypeViewModel
 * @version 2.0
 */
export class AvailableProductTypeViewModel {
  /**
   * Constructs a new <code>AvailableProductTypeViewModel</code>.
   * @alias module:model/AvailableProductTypeViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AvailableProductTypeViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AvailableProductTypeViewModel} obj Optional instance to populate.
   * @return {module:model/AvailableProductTypeViewModel} The populated <code>AvailableProductTypeViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AvailableProductTypeViewModel();
      if (data.hasOwnProperty('productType'))
        obj.productType = ApiClient.convertToType(data['productType'], 'Number');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('mappedTo'))
        obj.mappedTo = ApiClient.convertToType(data['mappedTo'], 'String');
      if (data.hasOwnProperty('kycType'))
        obj.kycType = ApiClient.convertToType(data['kycType'], 'String');
      if (data.hasOwnProperty('kycId'))
        obj.kycId = ApiClient.convertToType(data['kycId'], 'Number');
      if (data.hasOwnProperty('yearlyLoadLimit'))
        obj.yearlyLoadLimit = ApiClient.convertToType(data['yearlyLoadLimit'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} productType
 */
AvailableProductTypeViewModel.prototype.productType = undefined;

/**
 * @member {String} displayName
 */
AvailableProductTypeViewModel.prototype.displayName = undefined;

/**
 * @member {String} mappedTo
 */
AvailableProductTypeViewModel.prototype.mappedTo = undefined;

/**
 * @member {String} kycType
 */
AvailableProductTypeViewModel.prototype.kycType = undefined;

/**
 * @member {Number} kycId
 */
AvailableProductTypeViewModel.prototype.kycId = undefined;

/**
 * @member {Number} yearlyLoadLimit
 */
AvailableProductTypeViewModel.prototype.yearlyLoadLimit = undefined;

