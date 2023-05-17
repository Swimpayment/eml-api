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
import {BankPaymentErrorCodes} from './BankPaymentErrorCodes';

/**
 * The ResendOTPPayeeViewModel model module.
 * @module model/ResendOTPPayeeViewModel
 * @version 2.0
 */
export class ResendOTPPayeeViewModel {
  /**
   * Constructs a new <code>ResendOTPPayeeViewModel</code>.
   * @alias module:model/ResendOTPPayeeViewModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResendOTPPayeeViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResendOTPPayeeViewModel} obj Optional instance to populate.
   * @return {module:model/ResendOTPPayeeViewModel} The populated <code>ResendOTPPayeeViewModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResendOTPPayeeViewModel();
      if (data.hasOwnProperty('payeeId'))
        obj.payeeId = ApiClient.convertToType(data['payeeId'], 'String');
      if (data.hasOwnProperty('payeeErrorCode'))
        obj.payeeErrorCode = ApiClient.convertToType(data['payeeErrorCode'], 'Number');
      if (data.hasOwnProperty('payeeValidationErrors'))
        obj.payeeValidationErrors = ApiClient.convertToType(data['payeeValidationErrors'], [BankPaymentErrorCodes]);
    }
    return obj;
  }
}

/**
 * Payee Id
 * @member {String} payeeId
 */
ResendOTPPayeeViewModel.prototype.payeeId = undefined;

/**
 * Payee Error Codes
 * @member {Number} payeeErrorCode
 */
ResendOTPPayeeViewModel.prototype.payeeErrorCode = undefined;

/**
 * Payee Validation Errors  If payee validation failed, the PayeeValidationErrors will be populated
 * @member {Array.<module:model/BankPaymentErrorCodes>} payeeValidationErrors
 */
ResendOTPPayeeViewModel.prototype.payeeValidationErrors = undefined;
