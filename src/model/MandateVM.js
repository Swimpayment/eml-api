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
 * The MandateVM model module.
 * @module model/MandateVM
 * @version 2.0
 */
export class MandateVM {
  /**
   * Constructs a new <code>MandateVM</code>.
   * @alias module:model/MandateVM
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MandateVM</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MandateVM} obj Optional instance to populate.
   * @return {module:model/MandateVM} The populated <code>MandateVM</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MandateVM();
      if (data.hasOwnProperty('mandateId'))
        obj.mandateId = ApiClient.convertToType(data['mandateId'], 'Number');
      if (data.hasOwnProperty('merchantName'))
        obj.merchantName = ApiClient.convertToType(data['merchantName'], 'String');
      if (data.hasOwnProperty('debitingIBAN'))
        obj.debitingIBAN = ApiClient.convertToType(data['debitingIBAN'], 'String');
      if (data.hasOwnProperty('mandateUsername'))
        obj.mandateUsername = ApiClient.convertToType(data['mandateUsername'], 'String');
      if (data.hasOwnProperty('insertedDateTime'))
        obj.insertedDateTime = ApiClient.convertToType(data['insertedDateTime'], 'String');
      if (data.hasOwnProperty('updatedDateTime'))
        obj.updatedDateTime = ApiClient.convertToType(data['updatedDateTime'], 'String');
      if (data.hasOwnProperty('lastActivityDateTime'))
        obj.lastActivityDateTime = ApiClient.convertToType(data['lastActivityDateTime'], 'String');
      if (data.hasOwnProperty('referenceNumber'))
        obj.referenceNumber = ApiClient.convertToType(data['referenceNumber'], 'String');
      if (data.hasOwnProperty('reason'))
        obj.reason = ApiClient.convertToType(data['reason'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} mandateId
 */
MandateVM.prototype.mandateId = undefined;

/**
 * @member {String} merchantName
 */
MandateVM.prototype.merchantName = undefined;

/**
 * @member {String} debitingIBAN
 */
MandateVM.prototype.debitingIBAN = undefined;

/**
 * @member {String} mandateUsername
 */
MandateVM.prototype.mandateUsername = undefined;

/**
 * @member {String} insertedDateTime
 */
MandateVM.prototype.insertedDateTime = undefined;

/**
 * @member {String} updatedDateTime
 */
MandateVM.prototype.updatedDateTime = undefined;

/**
 * @member {String} lastActivityDateTime
 */
MandateVM.prototype.lastActivityDateTime = undefined;

/**
 * @member {String} referenceNumber
 */
MandateVM.prototype.referenceNumber = undefined;

/**
 * @member {String} reason
 */
MandateVM.prototype.reason = undefined;

/**
 * Status of the mandate. Values can be:    1 - Pending - A new mandate has been received, this will be the starting status.    2 - Blocked - Changes if the client requests the mandate to be blocked.    3 - Cancelled - Changes if the client requests the mandate to be cancelled.    4 - Expired - If a direct debit has not been received within a certain time, the status of Expired will be assigned.
 * @member {String} status
 */
MandateVM.prototype.status = undefined;

