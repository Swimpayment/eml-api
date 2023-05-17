"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecurringBankPaymentFrequencyMethod = void 0;
var _ApiClient = require("../ApiClient");
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

/**
 * Enum class RecurringBankPaymentFrequencyMethod.
 * @enum {Number}
 * @readonly
 */
var RecurringBankPaymentFrequencyMethod = {
  /**
   * value: 2
   * @const
   */
  _2: 2,
  /**
   * value: 3
   * @const
   */
  _3: 3,
  /**
   * value: 4
   * @const
   */
  _4: 4,
  /**
   * Returns a <code>RecurringBankPaymentFrequencyMethod</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/RecurringBankPaymentFrequencyMethod} The enum <code>RecurringBankPaymentFrequencyMethod</code> value.
   */
  constructFromObject: function constructFromObject(object) {
    return object;
  }
};
exports.RecurringBankPaymentFrequencyMethod = RecurringBankPaymentFrequencyMethod;