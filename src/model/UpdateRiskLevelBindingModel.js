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
import {RiskLevel} from './RiskLevel';

/**
 * The UpdateRiskLevelBindingModel model module.
 * @module model/UpdateRiskLevelBindingModel
 * @version 2.0
 */
export class UpdateRiskLevelBindingModel {
  /**
   * Constructs a new <code>UpdateRiskLevelBindingModel</code>.
   * @alias module:model/UpdateRiskLevelBindingModel
   * @class
   * @param id {String} 
   * @param dc {Number} 
   * @param risklevel {module:model/RiskLevel} 
   */
  constructor(id, dc, risklevel) {
    this.id = id;
    this.dc = dc;
    this.risklevel = risklevel;
  }

  /**
   * Constructs a <code>UpdateRiskLevelBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateRiskLevelBindingModel} obj Optional instance to populate.
   * @return {module:model/UpdateRiskLevelBindingModel} The populated <code>UpdateRiskLevelBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateRiskLevelBindingModel();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('dc'))
        obj.dc = ApiClient.convertToType(data['dc'], 'Number');
      if (data.hasOwnProperty('risklevel'))
        obj.risklevel = RiskLevel.constructFromObject(data['risklevel']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
UpdateRiskLevelBindingModel.prototype.id = undefined;

/**
 * @member {Number} dc
 */
UpdateRiskLevelBindingModel.prototype.dc = undefined;

/**
 * @member {module:model/RiskLevel} risklevel
 */
UpdateRiskLevelBindingModel.prototype.risklevel = undefined;

