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
import {MandateInquiryViewModelV2} from './MandateInquiryViewModelV2';

/**
 * The MandateInquiryViewModelV2ValidResponsePackage model module.
 * @module model/MandateInquiryViewModelV2ValidResponsePackage
 * @version 2.0
 */
export class MandateInquiryViewModelV2ValidResponsePackage {
  /**
   * Constructs a new <code>MandateInquiryViewModelV2ValidResponsePackage</code>.
   * Package response for successful requests.
   * @alias module:model/MandateInquiryViewModelV2ValidResponsePackage
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MandateInquiryViewModelV2ValidResponsePackage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MandateInquiryViewModelV2ValidResponsePackage} obj Optional instance to populate.
   * @return {module:model/MandateInquiryViewModelV2ValidResponsePackage} The populated <code>MandateInquiryViewModelV2ValidResponsePackage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MandateInquiryViewModelV2ValidResponsePackage();
      if (data.hasOwnProperty('data'))
        obj.data = MandateInquiryViewModelV2.constructFromObject(data['data']);
      if (data.hasOwnProperty('referenceId'))
        obj.referenceId = ApiClient.convertToType(data['referenceId'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:model/MandateInquiryViewModelV2} data
 */
MandateInquiryViewModelV2ValidResponsePackage.prototype.data = undefined;

/**
 * Reference id of log table.
 * @member {Number} referenceId
 */
MandateInquiryViewModelV2ValidResponsePackage.prototype.referenceId = undefined;

