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
 * The Error model module.
 * @module model/Error
 * @version 2.0
 */
export class Error {
  /**
   * Constructs a new <code>Error</code>.
   * Error model payload.
   * @alias module:model/Error
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Error();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'Number');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('alternativeErrorCode'))
        obj.alternativeErrorCode = ApiClient.convertToType(data['alternativeErrorCode'], 'String');
      if (data.hasOwnProperty('detail'))
        obj.detail = ApiClient.convertToType(data['detail'], 'String');
      if (data.hasOwnProperty('exception'))
        obj.exception = ApiClient.convertToType(data['exception'], Object);
      if (data.hasOwnProperty('component'))
        obj.component = ApiClient.convertToType(data['component'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], Object);
    }
    return obj;
  }
}

/**
 * HTTP status code.
 * @member {Number} status
 */
Error.prototype.status = undefined;

/**
 * FINAC error code.
 * @member {String} code
 */
Error.prototype.code = undefined;

/**
 * V4 error code.
 * @member {String} alternativeErrorCode
 */
Error.prototype.alternativeErrorCode = undefined;

/**
 * Details about error.
 * @member {String} detail
 */
Error.prototype.detail = undefined;

/**
 * @member {Object} exception
 */
Error.prototype.exception = undefined;

/**
 * @member {String} component
 */
Error.prototype.component = undefined;

/**
 * @member {Object} state
 */
Error.prototype.state = undefined;

