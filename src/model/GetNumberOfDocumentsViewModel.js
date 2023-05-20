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
 * The GetNumberOfDocumentsViewModel model module.
 * @module model/GetNumberOfDocumentsViewModel
 * @version 2.0
 */
export class GetNumberOfDocumentsViewModel {
  /**
   * Constructs a new <code>GetNumberOfDocumentsViewModel</code>.
   * @alias module:model/GetNumberOfDocumentsViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetNumberOfDocumentsViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetNumberOfDocumentsViewModel} obj Optional instance to populate.
   * @return {module:model/GetNumberOfDocumentsViewModel} The populated <code>GetNumberOfDocumentsViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetNumberOfDocumentsViewModel();
      if (data.hasOwnProperty('idCountValid'))
        obj.idCountValid = ApiClient.convertToType(data['idCountValid'], 'Boolean');
      if (data.hasOwnProperty('uploadedIdsCount'))
        obj.uploadedIdsCount = ApiClient.convertToType(data['uploadedIdsCount'], 'Number');
      if (data.hasOwnProperty('maximumDocuments'))
        obj.maximumDocuments = ApiClient.convertToType(data['maximumDocuments'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Boolean} idCountValid
 */
GetNumberOfDocumentsViewModel.prototype.idCountValid = undefined;

/**
 * @member {Number} uploadedIdsCount
 */
GetNumberOfDocumentsViewModel.prototype.uploadedIdsCount = undefined;

/**
 * @member {Number} maximumDocuments
 */
GetNumberOfDocumentsViewModel.prototype.maximumDocuments = undefined;

