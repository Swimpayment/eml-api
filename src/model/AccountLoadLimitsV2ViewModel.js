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
 * The AccountLoadLimitsV2ViewModel model module.
 * @module model/AccountLoadLimitsV2ViewModel
 * @version 2.0
 */
export class AccountLoadLimitsV2ViewModel {
  /**
   * Constructs a new <code>AccountLoadLimitsV2ViewModel</code>.
   * @alias module:model/AccountLoadLimitsV2ViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AccountLoadLimitsV2ViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountLoadLimitsV2ViewModel} obj Optional instance to populate.
   * @return {module:model/AccountLoadLimitsV2ViewModel} The populated <code>AccountLoadLimitsV2ViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AccountLoadLimitsV2ViewModel();
      if (data.hasOwnProperty('bin'))
        obj.bin = ApiClient.convertToType(data['bin'], 'String');
      if (data.hasOwnProperty('dc'))
        obj.dc = ApiClient.convertToType(data['dc'], 'String');
      if (data.hasOwnProperty('cardType'))
        obj.cardType = ApiClient.convertToType(data['cardType'], 'String');
      if (data.hasOwnProperty('maxLoadPerDay'))
        obj.maxLoadPerDay = ApiClient.convertToType(data['maxLoadPerDay'], 'Number');
      if (data.hasOwnProperty('maxLoadTriesPerDay'))
        obj.maxLoadTriesPerDay = ApiClient.convertToType(data['maxLoadTriesPerDay'], 'Number');
      if (data.hasOwnProperty('maxLoadLimit'))
        obj.maxLoadLimit = ApiClient.convertToType(data['maxLoadLimit'], 'Number');
      if (data.hasOwnProperty('minLoadLimit'))
        obj.minLoadLimit = ApiClient.convertToType(data['minLoadLimit'], 'Number');
      if (data.hasOwnProperty('maxBalanceonCard'))
        obj.maxBalanceonCard = ApiClient.convertToType(data['maxBalanceonCard'], 'Number');
      if (data.hasOwnProperty('c2CMaxLoadLimit'))
        obj.c2CMaxLoadLimit = ApiClient.convertToType(data['c2CMaxLoadLimit'], 'Number');
      if (data.hasOwnProperty('c2CMinLoadLimit'))
        obj.c2CMinLoadLimit = ApiClient.convertToType(data['c2CMinLoadLimit'], 'Number');
      if (data.hasOwnProperty('c2CLoadTriesPerDay'))
        obj.c2CLoadTriesPerDay = ApiClient.convertToType(data['c2CLoadTriesPerDay'], 'Number');
      if (data.hasOwnProperty('monthlyLoadLimits'))
        obj.monthlyLoadLimits = ApiClient.convertToType(data['monthlyLoadLimits'], 'Number');
      if (data.hasOwnProperty('totalLoadTries'))
        obj.totalLoadTries = ApiClient.convertToType(data['totalLoadTries'], 'Number');
      if (data.hasOwnProperty('sddMonthlyLoadLimits'))
        obj.sddMonthlyLoadLimits = ApiClient.convertToType(data['sddMonthlyLoadLimits'], 'Number');
      if (data.hasOwnProperty('productTypeID'))
        obj.productTypeID = ApiClient.convertToType(data['productTypeID'], 'String');
      if (data.hasOwnProperty('yearlyLoadLimit'))
        obj.yearlyLoadLimit = ApiClient.convertToType(data['yearlyLoadLimit'], 'Number');
      if (data.hasOwnProperty('quarterlyLimit'))
        obj.quarterlyLimit = ApiClient.convertToType(data['quarterlyLimit'], 'Number');
      if (data.hasOwnProperty('maxMonthlyLoadCardLimit'))
        obj.maxMonthlyLoadCardLimit = ApiClient.convertToType(data['maxMonthlyLoadCardLimit'], 'Number');
      if (data.hasOwnProperty('maxYearlyLoadCardLimit'))
        obj.maxYearlyLoadCardLimit = ApiClient.convertToType(data['maxYearlyLoadCardLimit'], 'Number');
      if (data.hasOwnProperty('maxMonthlyLoadMobileLimit'))
        obj.maxMonthlyLoadMobileLimit = ApiClient.convertToType(data['maxMonthlyLoadMobileLimit'], 'Number');
      if (data.hasOwnProperty('maxYearlyLoadMobileLimit'))
        obj.maxYearlyLoadMobileLimit = ApiClient.convertToType(data['maxYearlyLoadMobileLimit'], 'Number');
      if (data.hasOwnProperty('maxMonthlyLoadEmailLimit'))
        obj.maxMonthlyLoadEmailLimit = ApiClient.convertToType(data['maxMonthlyLoadEmailLimit'], 'Number');
      if (data.hasOwnProperty('maxYearlyLoadEmailLimit'))
        obj.maxYearlyLoadEmailLimit = ApiClient.convertToType(data['maxYearlyLoadEmailLimit'], 'Number');
      if (data.hasOwnProperty('maxMonthlyLoadNameDOBLimit'))
        obj.maxMonthlyLoadNameDOBLimit = ApiClient.convertToType(data['maxMonthlyLoadNameDOBLimit'], 'Number');
      if (data.hasOwnProperty('maxYearlyLoadNameDOBLimit'))
        obj.maxYearlyLoadNameDOBLimit = ApiClient.convertToType(data['maxYearlyLoadNameDOBLimit'], 'Number');
      if (data.hasOwnProperty('maxMonthlyLoadNameLimit'))
        obj.maxMonthlyLoadNameLimit = ApiClient.convertToType(data['maxMonthlyLoadNameLimit'], 'Number');
      if (data.hasOwnProperty('maxYearlyLoadNameLimit'))
        obj.maxYearlyLoadNameLimit = ApiClient.convertToType(data['maxYearlyLoadNameLimit'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} bin
 */
AccountLoadLimitsV2ViewModel.prototype.bin = undefined;

/**
 * @member {String} dc
 */
AccountLoadLimitsV2ViewModel.prototype.dc = undefined;

/**
 * @member {String} cardType
 */
AccountLoadLimitsV2ViewModel.prototype.cardType = undefined;

/**
 * @member {Number} maxLoadPerDay
 */
AccountLoadLimitsV2ViewModel.prototype.maxLoadPerDay = undefined;

/**
 * @member {Number} maxLoadTriesPerDay
 */
AccountLoadLimitsV2ViewModel.prototype.maxLoadTriesPerDay = undefined;

/**
 * @member {Number} maxLoadLimit
 */
AccountLoadLimitsV2ViewModel.prototype.maxLoadLimit = undefined;

/**
 * @member {Number} minLoadLimit
 */
AccountLoadLimitsV2ViewModel.prototype.minLoadLimit = undefined;

/**
 * @member {Number} maxBalanceonCard
 */
AccountLoadLimitsV2ViewModel.prototype.maxBalanceonCard = undefined;

/**
 * @member {Number} c2CMaxLoadLimit
 */
AccountLoadLimitsV2ViewModel.prototype.c2CMaxLoadLimit = undefined;

/**
 * @member {Number} c2CMinLoadLimit
 */
AccountLoadLimitsV2ViewModel.prototype.c2CMinLoadLimit = undefined;

/**
 * @member {Number} c2CLoadTriesPerDay
 */
AccountLoadLimitsV2ViewModel.prototype.c2CLoadTriesPerDay = undefined;

/**
 * @member {Number} monthlyLoadLimits
 */
AccountLoadLimitsV2ViewModel.prototype.monthlyLoadLimits = undefined;

/**
 * @member {Number} totalLoadTries
 */
AccountLoadLimitsV2ViewModel.prototype.totalLoadTries = undefined;

/**
 * @member {Number} sddMonthlyLoadLimits
 */
AccountLoadLimitsV2ViewModel.prototype.sddMonthlyLoadLimits = undefined;

/**
 * @member {String} productTypeID
 */
AccountLoadLimitsV2ViewModel.prototype.productTypeID = undefined;

/**
 * @member {Number} yearlyLoadLimit
 */
AccountLoadLimitsV2ViewModel.prototype.yearlyLoadLimit = undefined;

/**
 * @member {Number} quarterlyLimit
 */
AccountLoadLimitsV2ViewModel.prototype.quarterlyLimit = undefined;

/**
 * @member {Number} maxMonthlyLoadCardLimit
 */
AccountLoadLimitsV2ViewModel.prototype.maxMonthlyLoadCardLimit = undefined;

/**
 * @member {Number} maxYearlyLoadCardLimit
 */
AccountLoadLimitsV2ViewModel.prototype.maxYearlyLoadCardLimit = undefined;

/**
 * @member {Number} maxMonthlyLoadMobileLimit
 */
AccountLoadLimitsV2ViewModel.prototype.maxMonthlyLoadMobileLimit = undefined;

/**
 * @member {Number} maxYearlyLoadMobileLimit
 */
AccountLoadLimitsV2ViewModel.prototype.maxYearlyLoadMobileLimit = undefined;

/**
 * @member {Number} maxMonthlyLoadEmailLimit
 */
AccountLoadLimitsV2ViewModel.prototype.maxMonthlyLoadEmailLimit = undefined;

/**
 * @member {Number} maxYearlyLoadEmailLimit
 */
AccountLoadLimitsV2ViewModel.prototype.maxYearlyLoadEmailLimit = undefined;

/**
 * @member {Number} maxMonthlyLoadNameDOBLimit
 */
AccountLoadLimitsV2ViewModel.prototype.maxMonthlyLoadNameDOBLimit = undefined;

/**
 * @member {Number} maxYearlyLoadNameDOBLimit
 */
AccountLoadLimitsV2ViewModel.prototype.maxYearlyLoadNameDOBLimit = undefined;

/**
 * @member {Number} maxMonthlyLoadNameLimit
 */
AccountLoadLimitsV2ViewModel.prototype.maxMonthlyLoadNameLimit = undefined;

/**
 * @member {Number} maxYearlyLoadNameLimit
 */
AccountLoadLimitsV2ViewModel.prototype.maxYearlyLoadNameLimit = undefined;

