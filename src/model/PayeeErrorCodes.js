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
 * Enum class PayeeErrorCodes.
 * @enum {Number}
 * @readonly
 */
const PayeeErrorCodes = {
  /**
   * value: 0
   * @const
   */
  _0: 0,

  /**
   * value: 1
   * @const
   */
  _1: 1,

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
   * value: 5
   * @const
   */
  _5: 5,

  /**
   * value: 6
   * @const
   */
  _6: 6,

  /**
   * value: 7
   * @const
   */
  _7: 7,

  /**
   * value: 10
   * @const
   */
  _10: 10,

  /**
   * value: 11
   * @const
   */
  _11: 11,

  /**
   * value: 12
   * @const
   */
  _12: 12,

  /**
   * value: 13
   * @const
   */
  _13: 13,

  /**
   * value: 14
   * @const
   */
  _14: 14,

  /**
   * value: 15
   * @const
   */
  _15: 15,

  /**
   * value: 16
   * @const
   */
  _16: 16,

  /**
   * value: 17
   * @const
   */
  _17: 17,

  /**
   * value: 18
   * @const
   */
  _18: 18,

  /**
   * value: 19
   * @const
   */
  _19: 19,

  /**
   * value: 20
   * @const
   */
  _20: 20,

  /**
   * value: 21
   * @const
   */
  _21: 21,

  /**
   * value: 22
   * @const
   */
  _22: 22,

  /**
   * value: 23
   * @const
   */
  _23: 23,

  /**
   * value: 24
   * @const
   */
  _24: 24,

  /**
   * Returns a <code>PayeeErrorCodes</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/PayeeErrorCodes} The enum <code>PayeeErrorCodes</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {PayeeErrorCodes};