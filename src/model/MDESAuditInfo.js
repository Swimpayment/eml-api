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
 * The MDESAuditInfo model module.
 * @module model/MDESAuditInfo
 * @version 2.0
 */
export class MDESAuditInfo {
  /**
   * Constructs a new <code>MDESAuditInfo</code>.
   * @alias module:model/MDESAuditInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MDESAuditInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MDESAuditInfo} obj Optional instance to populate.
   * @return {module:model/MDESAuditInfo} The populated <code>MDESAuditInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MDESAuditInfo();
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'String');
      if (data.hasOwnProperty('userName'))
        obj.userName = ApiClient.convertToType(data['userName'], 'String');
      if (data.hasOwnProperty('organization'))
        obj.organization = ApiClient.convertToType(data['organization'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} userId
 */
MDESAuditInfo.prototype.userId = undefined;

/**
 * @member {String} userName
 */
MDESAuditInfo.prototype.userName = undefined;

/**
 * @member {String} organization
 */
MDESAuditInfo.prototype.organization = undefined;

/**
 * @member {String} phone
 */
MDESAuditInfo.prototype.phone = undefined;

