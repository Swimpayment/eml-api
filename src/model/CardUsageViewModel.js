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
import {PeriodicUsageViewModel} from './PeriodicUsageViewModel';
import {RegionalUsageViewModel} from './RegionalUsageViewModel';

/**
 * The CardUsageViewModel model module.
 * @module model/CardUsageViewModel
 * @version 2.0
 */
export class CardUsageViewModel {
  /**
   * Constructs a new <code>CardUsageViewModel</code>.
   * @alias module:model/CardUsageViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CardUsageViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CardUsageViewModel} obj Optional instance to populate.
   * @return {module:model/CardUsageViewModel} The populated <code>CardUsageViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CardUsageViewModel();
      if (data.hasOwnProperty('load'))
        obj.load = PeriodicUsageViewModel.constructFromObject(data['load']);
      if (data.hasOwnProperty('atm'))
        obj.atm = RegionalUsageViewModel.constructFromObject(data['atm']);
      if (data.hasOwnProperty('pos'))
        obj.pos = RegionalUsageViewModel.constructFromObject(data['pos']);
      if (data.hasOwnProperty('ecommerce'))
        obj.ecommerce = RegionalUsageViewModel.constructFromObject(data['ecommerce']);
      if (data.hasOwnProperty('moto'))
        obj.moto = RegionalUsageViewModel.constructFromObject(data['moto']);
      if (data.hasOwnProperty('mcc'))
        obj.mcc = ApiClient.convertToType(data['mcc'], {'String': PeriodicUsageViewModel});
    }
    return obj;
  }
}

/**
 * @member {module:model/PeriodicUsageViewModel} load
 */
CardUsageViewModel.prototype.load = undefined;

/**
 * @member {module:model/RegionalUsageViewModel} atm
 */
CardUsageViewModel.prototype.atm = undefined;

/**
 * @member {module:model/RegionalUsageViewModel} pos
 */
CardUsageViewModel.prototype.pos = undefined;

/**
 * @member {module:model/RegionalUsageViewModel} ecommerce
 */
CardUsageViewModel.prototype.ecommerce = undefined;

/**
 * @member {module:model/RegionalUsageViewModel} moto
 */
CardUsageViewModel.prototype.moto = undefined;

/**
 * @member {Object.<String, module:model/PeriodicUsageViewModel>} mcc
 */
CardUsageViewModel.prototype.mcc = undefined;

