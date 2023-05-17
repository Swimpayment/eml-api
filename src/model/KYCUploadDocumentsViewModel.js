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
import {KYCUploadDocumentResultViewModel} from './KYCUploadDocumentResultViewModel';

/**
 * The KYCUploadDocumentsViewModel model module.
 * @module model/KYCUploadDocumentsViewModel
 * @version 2.0
 */
export class KYCUploadDocumentsViewModel {
  /**
   * Constructs a new <code>KYCUploadDocumentsViewModel</code>.
   * @alias module:model/KYCUploadDocumentsViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>KYCUploadDocumentsViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KYCUploadDocumentsViewModel} obj Optional instance to populate.
   * @return {module:model/KYCUploadDocumentsViewModel} The populated <code>KYCUploadDocumentsViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new KYCUploadDocumentsViewModel();
      if (data.hasOwnProperty('retryUpload'))
        obj.retryUpload = ApiClient.convertToType(data['retryUpload'], 'Boolean');
      if (data.hasOwnProperty('newProductType'))
        obj.newProductType = ApiClient.convertToType(data['newProductType'], 'Number');
      if (data.hasOwnProperty('newQueue'))
        obj.newQueue = ApiClient.convertToType(data['newQueue'], 'String');
      if (data.hasOwnProperty('kycResults'))
        obj.kycResults = ApiClient.convertToType(data['kycResults'], [KYCUploadDocumentResultViewModel]);
      if (data.hasOwnProperty('alreadyProcessed'))
        obj.alreadyProcessed = ApiClient.convertToType(data['alreadyProcessed'], 'Boolean');
      if (data.hasOwnProperty('redirectUrl'))
        obj.redirectUrl = ApiClient.convertToType(data['redirectUrl'], 'String');
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
      if (data.hasOwnProperty('stillInProgress'))
        obj.stillInProgress = ApiClient.convertToType(data['stillInProgress'], 'Boolean');
      if (data.hasOwnProperty('documentID'))
        obj.documentID = ApiClient.convertToType(data['documentID'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {Boolean} retryUpload
 */
KYCUploadDocumentsViewModel.prototype.retryUpload = undefined;

/**
 * @member {Number} newProductType
 */
KYCUploadDocumentsViewModel.prototype.newProductType = undefined;

/**
 * @member {String} newQueue
 */
KYCUploadDocumentsViewModel.prototype.newQueue = undefined;

/**
 * @member {Array.<module:model/KYCUploadDocumentResultViewModel>} kycResults
 */
KYCUploadDocumentsViewModel.prototype.kycResults = undefined;

/**
 * @member {Boolean} alreadyProcessed
 */
KYCUploadDocumentsViewModel.prototype.alreadyProcessed = undefined;

/**
 * @member {String} redirectUrl
 */
KYCUploadDocumentsViewModel.prototype.redirectUrl = undefined;

/**
 * @member {String} uuid
 */
KYCUploadDocumentsViewModel.prototype.uuid = undefined;

/**
 * @member {Boolean} stillInProgress
 */
KYCUploadDocumentsViewModel.prototype.stillInProgress = undefined;

/**
 * @member {Array.<String>} documentID
 */
KYCUploadDocumentsViewModel.prototype.documentID = undefined;

