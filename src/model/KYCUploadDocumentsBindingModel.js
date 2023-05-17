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
import {UploadImageBindingModel} from './UploadImageBindingModel';

/**
 * The KYCUploadDocumentsBindingModel model module.
 * @module model/KYCUploadDocumentsBindingModel
 * @version 2.0
 */
export class KYCUploadDocumentsBindingModel {
  /**
   * Constructs a new <code>KYCUploadDocumentsBindingModel</code>.
   * @alias module:model/KYCUploadDocumentsBindingModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>KYCUploadDocumentsBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KYCUploadDocumentsBindingModel} obj Optional instance to populate.
   * @return {module:model/KYCUploadDocumentsBindingModel} The populated <code>KYCUploadDocumentsBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new KYCUploadDocumentsBindingModel();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('images'))
        obj.images = ApiClient.convertToType(data['images'], [UploadImageBindingModel]);
      if (data.hasOwnProperty('useWebSolution'))
        obj.useWebSolution = ApiClient.convertToType(data['useWebSolution'], 'Boolean');
      if (data.hasOwnProperty('mobileNumber'))
        obj.mobileNumber = ApiClient.convertToType(data['mobileNumber'], 'String');
      if (data.hasOwnProperty('issuingId'))
        obj.issuingId = ApiClient.convertToType(data['issuingId'], 'String');
      if (data.hasOwnProperty('language'))
        obj.language = ApiClient.convertToType(data['language'], 'String');
      if (data.hasOwnProperty('successURL'))
        obj.successURL = ApiClient.convertToType(data['successURL'], 'String');
      if (data.hasOwnProperty('failureURL'))
        obj.failureURL = ApiClient.convertToType(data['failureURL'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
KYCUploadDocumentsBindingModel.prototype.id = undefined;

/**
 * @member {Array.<module:model/UploadImageBindingModel>} images
 */
KYCUploadDocumentsBindingModel.prototype.images = undefined;

/**
 * @member {Boolean} useWebSolution
 */
KYCUploadDocumentsBindingModel.prototype.useWebSolution = undefined;

/**
 * @member {String} mobileNumber
 */
KYCUploadDocumentsBindingModel.prototype.mobileNumber = undefined;

/**
 * @member {String} issuingId
 */
KYCUploadDocumentsBindingModel.prototype.issuingId = undefined;

/**
 * @member {String} language
 */
KYCUploadDocumentsBindingModel.prototype.language = undefined;

/**
 * @member {String} successURL
 */
KYCUploadDocumentsBindingModel.prototype.successURL = undefined;

/**
 * @member {String} failureURL
 */
KYCUploadDocumentsBindingModel.prototype.failureURL = undefined;
