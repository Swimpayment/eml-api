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
 * The ConditionCheckBindingModel model module.
 * @module model/ConditionCheckBindingModel
 * @version 2.0
 */
export class ConditionCheckBindingModel {
  /**
   * Constructs a new <code>ConditionCheckBindingModel</code>.
   * @alias module:model/ConditionCheckBindingModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ConditionCheckBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConditionCheckBindingModel} obj Optional instance to populate.
   * @return {module:model/ConditionCheckBindingModel} The populated <code>ConditionCheckBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ConditionCheckBindingModel();
      if (data.hasOwnProperty('condition'))
        obj.condition = ApiClient.convertToType(data['condition'], 'String');
      if (data.hasOwnProperty('action'))
        obj.action = ApiClient.convertToType(data['action'], 'String');
      if (data.hasOwnProperty('actionedBy'))
        obj.actionedBy = ApiClient.convertToType(data['actionedBy'], 'String');
      if (data.hasOwnProperty('blockType'))
        obj.blockType = ApiClient.convertToType(data['blockType'], 'String');
      if (data.hasOwnProperty('applyToLinkedCards'))
        obj.applyToLinkedCards = ApiClient.convertToType(data['applyToLinkedCards'], 'Boolean');
      if (data.hasOwnProperty('conditionGroupNameToApply'))
        obj.conditionGroupNameToApply = ApiClient.convertToType(data['conditionGroupNameToApply'], 'String');
    }
    return obj;
  }
}

/**
 * Enter 'CONTACTLESS', 'CVV2', 'BLOCKECOM', 'BLOCKMAGSTRIPE', 'BLOCKATM', 'BLOCKPOS', 'BLOCKMOTO', 'ENROLL3DS'
 * @member {String} condition
 */
ConditionCheckBindingModel.prototype.condition = undefined;

/**
 * Action can be 'ALLOW', 'DENY', 'RESET'
 * @member {String} action
 */
ConditionCheckBindingModel.prototype.action = undefined;

/**
 * Which user was the call innated.
 * @member {String} actionedBy
 */
ConditionCheckBindingModel.prototype.actionedBy = undefined;

/**
 * D for Domestic, I for International, Country Code or Country Code Group
 * @member {String} blockType
 */
ConditionCheckBindingModel.prototype.blockType = undefined;

/**
 * True if the settings have to be applied to all the linked cards
 * @member {Boolean} applyToLinkedCards
 */
ConditionCheckBindingModel.prototype.applyToLinkedCards = undefined;

/**
 * Name of the condition group to apply. When condition group applied 'Action', 'Condition' and 'BlockType' must not set.
 * @member {String} conditionGroupNameToApply
 */
ConditionCheckBindingModel.prototype.conditionGroupNameToApply = undefined;

