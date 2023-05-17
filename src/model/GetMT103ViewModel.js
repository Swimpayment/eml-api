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

/**
 * The GetMT103ViewModel model module.
 * @module model/GetMT103ViewModel
 * @version 2.0
 */
export class GetMT103ViewModel {
  /**
   * Constructs a new <code>GetMT103ViewModel</code>.
   * @alias module:model/GetMT103ViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetMT103ViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetMT103ViewModel} obj Optional instance to populate.
   * @return {module:model/GetMT103ViewModel} The populated <code>GetMT103ViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetMT103ViewModel();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('mT103'))
        obj.mT103 = ApiClient.convertToType(data['mT103'], 'String');
      if (data.hasOwnProperty('submission_Ref'))
        obj.submissionRef = ApiClient.convertToType(data['submission_Ref'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} status
 */
GetMT103ViewModel.prototype.status = undefined;

/**
 * @member {String} mT103
 */
GetMT103ViewModel.prototype.mT103 = undefined;

/**
 * @member {String} submissionRef
 */
GetMT103ViewModel.prototype.submissionRef = undefined;

