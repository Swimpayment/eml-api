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
 * The GetRegistrationRulesPagingViewModel model module.
 * @module model/GetRegistrationRulesPagingViewModel
 * @version 2.0
 */
export class GetRegistrationRulesPagingViewModel {
  /**
   * Constructs a new <code>GetRegistrationRulesPagingViewModel</code>.
   * @alias module:model/GetRegistrationRulesPagingViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetRegistrationRulesPagingViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRegistrationRulesPagingViewModel} obj Optional instance to populate.
   * @return {module:model/GetRegistrationRulesPagingViewModel} The populated <code>GetRegistrationRulesPagingViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetRegistrationRulesPagingViewModel();
      if (data.hasOwnProperty('pageNo'))
        obj.pageNo = ApiClient.convertToType(data['pageNo'], 'Number');
      if (data.hasOwnProperty('pageSize'))
        obj.pageSize = ApiClient.convertToType(data['pageSize'], 'Number');
      if (data.hasOwnProperty('totalPageCount'))
        obj.totalPageCount = ApiClient.convertToType(data['totalPageCount'], 'Number');
      if (data.hasOwnProperty('totalRecordCount'))
        obj.totalRecordCount = ApiClient.convertToType(data['totalRecordCount'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} pageNo
 */
GetRegistrationRulesPagingViewModel.prototype.pageNo = undefined;

/**
 * @member {Number} pageSize
 */
GetRegistrationRulesPagingViewModel.prototype.pageSize = undefined;

/**
 * @member {Number} totalPageCount
 */
GetRegistrationRulesPagingViewModel.prototype.totalPageCount = undefined;

/**
 * @member {Number} totalRecordCount
 */
GetRegistrationRulesPagingViewModel.prototype.totalRecordCount = undefined;
