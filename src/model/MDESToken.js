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
import {Device} from './Device';
import {Suspender} from './Suspender';

/**
 * The MDESToken model module.
 * @module model/MDESToken
 * @version 2.0
 */
export class MDESToken {
  /**
   * Constructs a new <code>MDESToken</code>.
   * @alias module:model/MDESToken
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MDESToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MDESToken} obj Optional instance to populate.
   * @return {module:model/MDESToken} The populated <code>MDESToken</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MDESToken();
      if (data.hasOwnProperty('tokenUniqueReference'))
        obj.tokenUniqueReference = ApiClient.convertToType(data['tokenUniqueReference'], 'String');
      if (data.hasOwnProperty('primaryAccountNumberUniqueReference'))
        obj.primaryAccountNumberUniqueReference = ApiClient.convertToType(data['primaryAccountNumberUniqueReference'], 'String');
      if (data.hasOwnProperty('tokenSuffix'))
        obj.tokenSuffix = ApiClient.convertToType(data['tokenSuffix'], 'String');
      if (data.hasOwnProperty('expirationDate'))
        obj.expirationDate = ApiClient.convertToType(data['expirationDate'], 'String');
      if (data.hasOwnProperty('accountPanSequenceNumber'))
        obj.accountPanSequenceNumber = ApiClient.convertToType(data['accountPanSequenceNumber'], 'String');
      if (data.hasOwnProperty('activationCodeExpirationDateTime'))
        obj.activationCodeExpirationDateTime = ApiClient.convertToType(data['activationCodeExpirationDateTime'], 'String');
      if (data.hasOwnProperty('correlationId'))
        obj.correlationId = ApiClient.convertToType(data['correlationId'], 'String');
      if (data.hasOwnProperty('currentStatusCode'))
        obj.currentStatusCode = ApiClient.convertToType(data['currentStatusCode'], 'String');
      if (data.hasOwnProperty('currentStatusDescription'))
        obj.currentStatusDescription = ApiClient.convertToType(data['currentStatusDescription'], 'String');
      if (data.hasOwnProperty('currentStatusDateTime'))
        obj.currentStatusDateTime = ApiClient.convertToType(data['currentStatusDateTime'], 'String');
      if (data.hasOwnProperty('digitizationRequestDateTime'))
        obj.digitizationRequestDateTime = ApiClient.convertToType(data['digitizationRequestDateTime'], 'String');
      if (data.hasOwnProperty('finalTokenizationDecision'))
        obj.finalTokenizationDecision = ApiClient.convertToType(data['finalTokenizationDecision'], 'String');
      if (data.hasOwnProperty('lastCommentId'))
        obj.lastCommentId = ApiClient.convertToType(data['lastCommentId'], 'String');
      if (data.hasOwnProperty('paymentAppInstanceId'))
        obj.paymentAppInstanceId = ApiClient.convertToType(data['paymentAppInstanceId'], 'String');
      if (data.hasOwnProperty('provisioningStatusCode'))
        obj.provisioningStatusCode = ApiClient.convertToType(data['provisioningStatusCode'], 'String');
      if (data.hasOwnProperty('provisioningStatusDescription'))
        obj.provisioningStatusDescription = ApiClient.convertToType(data['provisioningStatusDescription'], 'String');
      if (data.hasOwnProperty('storageTechnology'))
        obj.storageTechnology = ApiClient.convertToType(data['storageTechnology'], 'String');
      if (data.hasOwnProperty('suspender'))
        obj.suspender = ApiClient.convertToType(data['suspender'], [Suspender]);
      if (data.hasOwnProperty('tokenActivatedDateTime'))
        obj.tokenActivatedDateTime = ApiClient.convertToType(data['tokenActivatedDateTime'], 'String');
      if (data.hasOwnProperty('tokenAssuranceLevel'))
        obj.tokenAssuranceLevel = ApiClient.convertToType(data['tokenAssuranceLevel'], 'String');
      if (data.hasOwnProperty('tokenRequestorId'))
        obj.tokenRequestorId = ApiClient.convertToType(data['tokenRequestorId'], 'String');
      if (data.hasOwnProperty('tokenRequestorName'))
        obj.tokenRequestorName = ApiClient.convertToType(data['tokenRequestorName'], 'String');
      if (data.hasOwnProperty('tokenType'))
        obj.tokenType = ApiClient.convertToType(data['tokenType'], 'String');
      if (data.hasOwnProperty('walletId'))
        obj.walletId = ApiClient.convertToType(data['walletId'], 'String');
      if (data.hasOwnProperty('devices'))
        obj.devices = ApiClient.convertToType(data['devices'], [Device]);
      if (data.hasOwnProperty('tokenDeletedFromConsumerApp'))
        obj.tokenDeletedFromConsumerApp = ApiClient.convertToType(data['tokenDeletedFromConsumerApp'], 'String');
      if (data.hasOwnProperty('tokenRequestorConsumerFacingEntityName'))
        obj.tokenRequestorConsumerFacingEntityName = ApiClient.convertToType(data['tokenRequestorConsumerFacingEntityName'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} tokenUniqueReference
 */
MDESToken.prototype.tokenUniqueReference = undefined;

/**
 * @member {String} primaryAccountNumberUniqueReference
 */
MDESToken.prototype.primaryAccountNumberUniqueReference = undefined;

/**
 * @member {String} tokenSuffix
 */
MDESToken.prototype.tokenSuffix = undefined;

/**
 * @member {String} expirationDate
 */
MDESToken.prototype.expirationDate = undefined;

/**
 * @member {String} accountPanSequenceNumber
 */
MDESToken.prototype.accountPanSequenceNumber = undefined;

/**
 * @member {String} activationCodeExpirationDateTime
 */
MDESToken.prototype.activationCodeExpirationDateTime = undefined;

/**
 * @member {String} correlationId
 */
MDESToken.prototype.correlationId = undefined;

/**
 * @member {String} currentStatusCode
 */
MDESToken.prototype.currentStatusCode = undefined;

/**
 * @member {String} currentStatusDescription
 */
MDESToken.prototype.currentStatusDescription = undefined;

/**
 * @member {String} currentStatusDateTime
 */
MDESToken.prototype.currentStatusDateTime = undefined;

/**
 * @member {String} digitizationRequestDateTime
 */
MDESToken.prototype.digitizationRequestDateTime = undefined;

/**
 * @member {String} finalTokenizationDecision
 */
MDESToken.prototype.finalTokenizationDecision = undefined;

/**
 * @member {String} lastCommentId
 */
MDESToken.prototype.lastCommentId = undefined;

/**
 * @member {String} paymentAppInstanceId
 */
MDESToken.prototype.paymentAppInstanceId = undefined;

/**
 * @member {String} provisioningStatusCode
 */
MDESToken.prototype.provisioningStatusCode = undefined;

/**
 * @member {String} provisioningStatusDescription
 */
MDESToken.prototype.provisioningStatusDescription = undefined;

/**
 * @member {String} storageTechnology
 */
MDESToken.prototype.storageTechnology = undefined;

/**
 * @member {Array.<module:model/Suspender>} suspender
 */
MDESToken.prototype.suspender = undefined;

/**
 * @member {String} tokenActivatedDateTime
 */
MDESToken.prototype.tokenActivatedDateTime = undefined;

/**
 * @member {String} tokenAssuranceLevel
 */
MDESToken.prototype.tokenAssuranceLevel = undefined;

/**
 * @member {String} tokenRequestorId
 */
MDESToken.prototype.tokenRequestorId = undefined;

/**
 * @member {String} tokenRequestorName
 */
MDESToken.prototype.tokenRequestorName = undefined;

/**
 * @member {String} tokenType
 */
MDESToken.prototype.tokenType = undefined;

/**
 * @member {String} walletId
 */
MDESToken.prototype.walletId = undefined;

/**
 * @member {Array.<module:model/Device>} devices
 */
MDESToken.prototype.devices = undefined;

/**
 * @member {String} tokenDeletedFromConsumerApp
 */
MDESToken.prototype.tokenDeletedFromConsumerApp = undefined;

/**
 * @member {String} tokenRequestorConsumerFacingEntityName
 */
MDESToken.prototype.tokenRequestorConsumerFacingEntityName = undefined;

