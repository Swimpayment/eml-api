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
import {BalanceV2ViewModel} from './BalanceV2ViewModel';

/**
 * The ReissueV2ViewModel model module.
 * @module model/ReissueV2ViewModel
 * @version 2.0
 */
export class ReissueV2ViewModel {
  /**
   * Constructs a new <code>ReissueV2ViewModel</code>.
   * @alias module:model/ReissueV2ViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ReissueV2ViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReissueV2ViewModel} obj Optional instance to populate.
   * @return {module:model/ReissueV2ViewModel} The populated <code>ReissueV2ViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReissueV2ViewModel();
      if (data.hasOwnProperty('newId'))
        obj.newId = ApiClient.convertToType(data['newId'], 'Number');
      if (data.hasOwnProperty('balance'))
        obj.balance = BalanceV2ViewModel.constructFromObject(data['balance']);
      if (data.hasOwnProperty('expiryDate'))
        obj.expiryDate = ApiClient.convertToType(data['expiryDate'], 'String');
      if (data.hasOwnProperty('pinRetained'))
        obj.pinRetained = ApiClient.convertToType(data['pinRetained'], 'Boolean');
      if (data.hasOwnProperty('ddaNumber'))
        obj.ddaNumber = ApiClient.convertToType(data['ddaNumber'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * Cardholder id of newly created card.
 * @member {Number} newId
 */
ReissueV2ViewModel.prototype.newId = undefined;

/**
 * @member {module:model/BalanceV2ViewModel} balance
 */
ReissueV2ViewModel.prototype.balance = undefined;

/**
 * Expiry of new card in yyMM format
 * @member {String} expiryDate
 */
ReissueV2ViewModel.prototype.expiryDate = undefined;

/**
 * True if pin has been retained, else false.
 * @member {Boolean} pinRetained
 */
ReissueV2ViewModel.prototype.pinRetained = undefined;

/**
 * @member {String} ddaNumber
 */
ReissueV2ViewModel.prototype.ddaNumber = undefined;

/**
 * Card status of new card.
 * @member {String} status
 */
ReissueV2ViewModel.prototype.status = undefined;

