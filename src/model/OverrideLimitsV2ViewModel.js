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
 * The OverrideLimitsV2ViewModel model module.
 * @module model/OverrideLimitsV2ViewModel
 * @version 2.0
 */
export class OverrideLimitsV2ViewModel {
  /**
   * Constructs a new <code>OverrideLimitsV2ViewModel</code>.
   * @alias module:model/OverrideLimitsV2ViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OverrideLimitsV2ViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OverrideLimitsV2ViewModel} obj Optional instance to populate.
   * @return {module:model/OverrideLimitsV2ViewModel} The populated <code>OverrideLimitsV2ViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OverrideLimitsV2ViewModel();
      if (data.hasOwnProperty('bin'))
        obj.bin = ApiClient.convertToType(data['bin'], 'String');
      if (data.hasOwnProperty('feeCodes'))
        obj.feeCodes = ApiClient.convertToType(data['feeCodes'], ['String']);
      if (data.hasOwnProperty('maxLoadLimit'))
        obj.maxLoadLimit = ApiClient.convertToType(data['maxLoadLimit'], 'Number');
      if (data.hasOwnProperty('minloadLimit'))
        obj.minloadLimit = ApiClient.convertToType(data['minloadLimit'], 'Number');
      if (data.hasOwnProperty('sddLoadTries'))
        obj.sddLoadTries = ApiClient.convertToType(data['sddLoadTries'], 'String');
      if (data.hasOwnProperty('loadTries'))
        obj.loadTries = ApiClient.convertToType(data['loadTries'], 'String');
      if (data.hasOwnProperty('dc'))
        obj.dc = ApiClient.convertToType(data['dc'], 'String');
      if (data.hasOwnProperty('productTypeID'))
        obj.productTypeID = ApiClient.convertToType(data['productTypeID'], 'String');
      if (data.hasOwnProperty('isSDDLimit'))
        obj.isSDDLimit = ApiClient.convertToType(data['isSDDLimit'], 'String');
      if (data.hasOwnProperty('yearlyLimit'))
        obj.yearlyLimit = ApiClient.convertToType(data['yearlyLimit'], 'Number');
      if (data.hasOwnProperty('maxLoadPerDay'))
        obj.maxLoadPerDay = ApiClient.convertToType(data['maxLoadPerDay'], 'Number');
      if (data.hasOwnProperty('monthlyLoadLimit'))
        obj.monthlyLoadLimit = ApiClient.convertToType(data['monthlyLoadLimit'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} bin
 */
OverrideLimitsV2ViewModel.prototype.bin = undefined;

/**
 * @member {Array.<String>} feeCodes
 */
OverrideLimitsV2ViewModel.prototype.feeCodes = undefined;

/**
 * @member {Number} maxLoadLimit
 */
OverrideLimitsV2ViewModel.prototype.maxLoadLimit = undefined;

/**
 * @member {Number} minloadLimit
 */
OverrideLimitsV2ViewModel.prototype.minloadLimit = undefined;

/**
 * @member {String} sddLoadTries
 */
OverrideLimitsV2ViewModel.prototype.sddLoadTries = undefined;

/**
 * @member {String} loadTries
 */
OverrideLimitsV2ViewModel.prototype.loadTries = undefined;

/**
 * @member {String} dc
 */
OverrideLimitsV2ViewModel.prototype.dc = undefined;

/**
 * @member {String} productTypeID
 */
OverrideLimitsV2ViewModel.prototype.productTypeID = undefined;

/**
 * @member {String} isSDDLimit
 */
OverrideLimitsV2ViewModel.prototype.isSDDLimit = undefined;

/**
 * @member {Number} yearlyLimit
 */
OverrideLimitsV2ViewModel.prototype.yearlyLimit = undefined;

/**
 * @member {Number} maxLoadPerDay
 */
OverrideLimitsV2ViewModel.prototype.maxLoadPerDay = undefined;

/**
 * @member {Number} monthlyLoadLimit
 */
OverrideLimitsV2ViewModel.prototype.monthlyLoadLimit = undefined;

