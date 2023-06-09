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
import {WalletSpendControlGroupSettingsModel} from './WalletSpendControlGroupSettingsModel';

/**
 * The WalletSpendControlGroupInsertBindingModel model module.
 * @module model/WalletSpendControlGroupInsertBindingModel
 * @version 2.0
 */
export class WalletSpendControlGroupInsertBindingModel {
  /**
   * Constructs a new <code>WalletSpendControlGroupInsertBindingModel</code>.
   * @alias module:model/WalletSpendControlGroupInsertBindingModel
   * @class
   * @param bin {String} Assigned by PFS. It is the first 8 digits of the cards on your program.
   * @param distributorCode {String} The unique identifier assigned by PFS, to your program
   * @param groupName {String} Name of the group
   * @param groupSettings {Array.<module:model/WalletSpendControlGroupSettingsModel>} Group settings belong to the group.   The source elemets must be unique, none of them can be set more than once.
   */
  constructor(bin, distributorCode, groupName, groupSettings) {
    this.bin = bin;
    this.distributorCode = distributorCode;
    this.groupName = groupName;
    this.groupSettings = groupSettings;
  }

  /**
   * Constructs a <code>WalletSpendControlGroupInsertBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WalletSpendControlGroupInsertBindingModel} obj Optional instance to populate.
   * @return {module:model/WalletSpendControlGroupInsertBindingModel} The populated <code>WalletSpendControlGroupInsertBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WalletSpendControlGroupInsertBindingModel();
      if (data.hasOwnProperty('bin'))
        obj.bin = ApiClient.convertToType(data['bin'], 'String');
      if (data.hasOwnProperty('distributorCode'))
        obj.distributorCode = ApiClient.convertToType(data['distributorCode'], 'String');
      if (data.hasOwnProperty('groupName'))
        obj.groupName = ApiClient.convertToType(data['groupName'], 'String');
      if (data.hasOwnProperty('groupSettings'))
        obj.groupSettings = ApiClient.convertToType(data['groupSettings'], [WalletSpendControlGroupSettingsModel]);
    }
    return obj;
  }
}

/**
 * Assigned by PFS. It is the first 8 digits of the cards on your program.
 * @member {String} bin
 */
WalletSpendControlGroupInsertBindingModel.prototype.bin = undefined;

/**
 * The unique identifier assigned by PFS, to your program
 * @member {String} distributorCode
 */
WalletSpendControlGroupInsertBindingModel.prototype.distributorCode = undefined;

/**
 * Name of the group
 * @member {String} groupName
 */
WalletSpendControlGroupInsertBindingModel.prototype.groupName = undefined;

/**
 * Group settings belong to the group.   The source elemets must be unique, none of them can be set more than once.
 * @member {Array.<module:model/WalletSpendControlGroupSettingsModel>} groupSettings
 */
WalletSpendControlGroupInsertBindingModel.prototype.groupSettings = undefined;

