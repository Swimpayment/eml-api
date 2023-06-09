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
import {CardLoadsFeeV2VM} from './CardLoadsFeeV2VM';
import {CardLoadsV2VM} from './CardLoadsV2VM';
import {LoadLimitV2VM} from './LoadLimitV2VM';

/**
 * The FullLoadsV2ViewModel model module.
 * @module model/FullLoadsV2ViewModel
 * @version 2.0
 */
export class FullLoadsV2ViewModel {
  /**
   * Constructs a new <code>FullLoadsV2ViewModel</code>.
   * @alias module:model/FullLoadsV2ViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FullLoadsV2ViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FullLoadsV2ViewModel} obj Optional instance to populate.
   * @return {module:model/FullLoadsV2ViewModel} The populated <code>FullLoadsV2ViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FullLoadsV2ViewModel();
      if (data.hasOwnProperty('loadLimitsInfo'))
        obj.loadLimitsInfo = LoadLimitV2VM.constructFromObject(data['loadLimitsInfo']);
      if (data.hasOwnProperty('cardLoadsInfo'))
        obj.cardLoadsInfo = CardLoadsV2VM.constructFromObject(data['cardLoadsInfo']);
      if (data.hasOwnProperty('cardLoadsFeeInfo'))
        obj.cardLoadsFeeInfo = CardLoadsFeeV2VM.constructFromObject(data['cardLoadsFeeInfo']);
    }
    return obj;
  }
}

/**
 * @member {module:model/LoadLimitV2VM} loadLimitsInfo
 */
FullLoadsV2ViewModel.prototype.loadLimitsInfo = undefined;

/**
 * @member {module:model/CardLoadsV2VM} cardLoadsInfo
 */
FullLoadsV2ViewModel.prototype.cardLoadsInfo = undefined;

/**
 * @member {module:model/CardLoadsFeeV2VM} cardLoadsFeeInfo
 */
FullLoadsV2ViewModel.prototype.cardLoadsFeeInfo = undefined;

