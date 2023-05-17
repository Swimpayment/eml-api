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
 * The CardSpendV2ViewModelItem model module.
 * @module model/CardSpendV2ViewModelItem
 * @version 2.0
 */
export class CardSpendV2ViewModelItem {
  /**
   * Constructs a new <code>CardSpendV2ViewModelItem</code>.
   * @alias module:model/CardSpendV2ViewModelItem
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CardSpendV2ViewModelItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CardSpendV2ViewModelItem} obj Optional instance to populate.
   * @return {module:model/CardSpendV2ViewModelItem} The populated <code>CardSpendV2ViewModelItem</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CardSpendV2ViewModelItem();
      if (data.hasOwnProperty('posDomestic'))
        obj.posDomestic = ApiClient.convertToType(data['posDomestic'], 'Number');
      if (data.hasOwnProperty('posDomesticAuth'))
        obj.posDomesticAuth = ApiClient.convertToType(data['posDomesticAuth'], 'Number');
      if (data.hasOwnProperty('posInternational'))
        obj.posInternational = ApiClient.convertToType(data['posInternational'], 'Number');
      if (data.hasOwnProperty('posInternationalAuth'))
        obj.posInternationalAuth = ApiClient.convertToType(data['posInternationalAuth'], 'Number');
      if (data.hasOwnProperty('motoApprovals'))
        obj.motoApprovals = ApiClient.convertToType(data['motoApprovals'], 'Number');
      if (data.hasOwnProperty('atmDomestic'))
        obj.atmDomestic = ApiClient.convertToType(data['atmDomestic'], 'Number');
      if (data.hasOwnProperty('atmDomesticAuth'))
        obj.atmDomesticAuth = ApiClient.convertToType(data['atmDomesticAuth'], 'Number');
      if (data.hasOwnProperty('atmInternational'))
        obj.atmInternational = ApiClient.convertToType(data['atmInternational'], 'Number');
      if (data.hasOwnProperty('atmInternationalAuth'))
        obj.atmInternationalAuth = ApiClient.convertToType(data['atmInternationalAuth'], 'Number');
      if (data.hasOwnProperty('cashAdvanceDomestic'))
        obj.cashAdvanceDomestic = ApiClient.convertToType(data['cashAdvanceDomestic'], 'Number');
      if (data.hasOwnProperty('cashAdvanceAuthDomestic'))
        obj.cashAdvanceAuthDomestic = ApiClient.convertToType(data['cashAdvanceAuthDomestic'], 'Number');
      if (data.hasOwnProperty('cashAdvanceInt'))
        obj.cashAdvanceInt = ApiClient.convertToType(data['cashAdvanceInt'], 'Number');
      if (data.hasOwnProperty('cashAdvanceAuthInt'))
        obj.cashAdvanceAuthInt = ApiClient.convertToType(data['cashAdvanceAuthInt'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} posDomestic
 */
CardSpendV2ViewModelItem.prototype.posDomestic = undefined;

/**
 * @member {Number} posDomesticAuth
 */
CardSpendV2ViewModelItem.prototype.posDomesticAuth = undefined;

/**
 * @member {Number} posInternational
 */
CardSpendV2ViewModelItem.prototype.posInternational = undefined;

/**
 * @member {Number} posInternationalAuth
 */
CardSpendV2ViewModelItem.prototype.posInternationalAuth = undefined;

/**
 * @member {Number} motoApprovals
 */
CardSpendV2ViewModelItem.prototype.motoApprovals = undefined;

/**
 * @member {Number} atmDomestic
 */
CardSpendV2ViewModelItem.prototype.atmDomestic = undefined;

/**
 * @member {Number} atmDomesticAuth
 */
CardSpendV2ViewModelItem.prototype.atmDomesticAuth = undefined;

/**
 * @member {Number} atmInternational
 */
CardSpendV2ViewModelItem.prototype.atmInternational = undefined;

/**
 * @member {Number} atmInternationalAuth
 */
CardSpendV2ViewModelItem.prototype.atmInternationalAuth = undefined;

/**
 * @member {Number} cashAdvanceDomestic
 */
CardSpendV2ViewModelItem.prototype.cashAdvanceDomestic = undefined;

/**
 * @member {Number} cashAdvanceAuthDomestic
 */
CardSpendV2ViewModelItem.prototype.cashAdvanceAuthDomestic = undefined;

/**
 * @member {Number} cashAdvanceInt
 */
CardSpendV2ViewModelItem.prototype.cashAdvanceInt = undefined;

/**
 * @member {Number} cashAdvanceAuthInt
 */
CardSpendV2ViewModelItem.prototype.cashAdvanceAuthInt = undefined;
