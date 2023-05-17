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
 * The LoadLimitV2VM model module.
 * @module model/LoadLimitV2VM
 * @version 2.0
 */
export class LoadLimitV2VM {
  /**
   * Constructs a new <code>LoadLimitV2VM</code>.
   * @alias module:model/LoadLimitV2VM
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>LoadLimitV2VM</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoadLimitV2VM} obj Optional instance to populate.
   * @return {module:model/LoadLimitV2VM} The populated <code>LoadLimitV2VM</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LoadLimitV2VM();
      if (data.hasOwnProperty('maxLoadPerDay'))
        obj.maxLoadPerDay = ApiClient.convertToType(data['maxLoadPerDay'], 'Number');
      if (data.hasOwnProperty('monthlyLoadLimit'))
        obj.monthlyLoadLimit = ApiClient.convertToType(data['monthlyLoadLimit'], 'Number');
      if (data.hasOwnProperty('yearlyLoadLimit'))
        obj.yearlyLoadLimit = ApiClient.convertToType(data['yearlyLoadLimit'], 'Number');
      if (data.hasOwnProperty('maxLoadLimitPerTransaction'))
        obj.maxLoadLimitPerTransaction = ApiClient.convertToType(data['maxLoadLimitPerTransaction'], 'Number');
      if (data.hasOwnProperty('maxLoadTriesPerDay'))
        obj.maxLoadTriesPerDay = ApiClient.convertToType(data['maxLoadTriesPerDay'], 'Number');
      if (data.hasOwnProperty('maxLoadTriesPerMonth'))
        obj.maxLoadTriesPerMonth = ApiClient.convertToType(data['maxLoadTriesPerMonth'], 'Number');
      if (data.hasOwnProperty('maxLoadTriesPerYear'))
        obj.maxLoadTriesPerYear = ApiClient.convertToType(data['maxLoadTriesPerYear'], 'Number');
      if (data.hasOwnProperty('maxLoadTriesPerLifetime'))
        obj.maxLoadTriesPerLifetime = ApiClient.convertToType(data['maxLoadTriesPerLifetime'], 'Number');
      if (data.hasOwnProperty('maxBalanceOnCard'))
        obj.maxBalanceOnCard = ApiClient.convertToType(data['maxBalanceOnCard'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} maxLoadPerDay
 */
LoadLimitV2VM.prototype.maxLoadPerDay = undefined;

/**
 * @member {Number} monthlyLoadLimit
 */
LoadLimitV2VM.prototype.monthlyLoadLimit = undefined;

/**
 * @member {Number} yearlyLoadLimit
 */
LoadLimitV2VM.prototype.yearlyLoadLimit = undefined;

/**
 * @member {Number} maxLoadLimitPerTransaction
 */
LoadLimitV2VM.prototype.maxLoadLimitPerTransaction = undefined;

/**
 * @member {Number} maxLoadTriesPerDay
 */
LoadLimitV2VM.prototype.maxLoadTriesPerDay = undefined;

/**
 * @member {Number} maxLoadTriesPerMonth
 */
LoadLimitV2VM.prototype.maxLoadTriesPerMonth = undefined;

/**
 * @member {Number} maxLoadTriesPerYear
 */
LoadLimitV2VM.prototype.maxLoadTriesPerYear = undefined;

/**
 * @member {Number} maxLoadTriesPerLifetime
 */
LoadLimitV2VM.prototype.maxLoadTriesPerLifetime = undefined;

/**
 * @member {Number} maxBalanceOnCard
 */
LoadLimitV2VM.prototype.maxBalanceOnCard = undefined;

