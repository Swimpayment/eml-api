"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BankPaymentErrorCodes = void 0;
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
 * Enum class BankPaymentErrorCodes.
 * @enum {Number}
 * @readonly
 */
var BankPaymentErrorCodes = {
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
   * value: 8
   * @const
   */
  _8: 8,
  /**
   * value: 9
   * @const
   */
  _9: 9,
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
   * value: 25
   * @const
   */
  _25: 25,
  /**
   * value: 26
   * @const
   */
  _26: 26,
  /**
   * value: 27
   * @const
   */
  _27: 27,
  /**
   * value: 28
   * @const
   */
  _28: 28,
  /**
   * value: 29
   * @const
   */
  _29: 29,
  /**
   * value: 30
   * @const
   */
  _30: 30,
  /**
   * value: 31
   * @const
   */
  _31: 31,
  /**
   * value: 32
   * @const
   */
  _32: 32,
  /**
   * value: 33
   * @const
   */
  _33: 33,
  /**
   * value: 34
   * @const
   */
  _34: 34,
  /**
   * value: 35
   * @const
   */
  _35: 35,
  /**
   * value: 36
   * @const
   */
  _36: 36,
  /**
   * value: 37
   * @const
   */
  _37: 37,
  /**
   * value: 38
   * @const
   */
  _38: 38,
  /**
   * value: 39
   * @const
   */
  _39: 39,
  /**
   * value: 40
   * @const
   */
  _40: 40,
  /**
   * value: 41
   * @const
   */
  _41: 41,
  /**
   * value: 42
   * @const
   */
  _42: 42,
  /**
   * value: 43
   * @const
   */
  _43: 43,
  /**
   * value: 44
   * @const
   */
  _44: 44,
  /**
   * value: 45
   * @const
   */
  _45: 45,
  /**
   * value: 46
   * @const
   */
  _46: 46,
  /**
   * value: 47
   * @const
   */
  _47: 47,
  /**
   * value: 48
   * @const
   */
  _48: 48,
  /**
   * value: 49
   * @const
   */
  _49: 49,
  /**
   * value: 50
   * @const
   */
  _50: 50,
  /**
   * value: 51
   * @const
   */
  _51: 51,
  /**
   * value: 52
   * @const
   */
  _52: 52,
  /**
   * value: 53
   * @const
   */
  _53: 53,
  /**
   * value: 54
   * @const
   */
  _54: 54,
  /**
   * value: 55
   * @const
   */
  _55: 55,
  /**
   * value: 56
   * @const
   */
  _56: 56,
  /**
   * value: 57
   * @const
   */
  _57: 57,
  /**
   * value: 58
   * @const
   */
  _58: 58,
  /**
   * value: 59
   * @const
   */
  _59: 59,
  /**
   * value: 60
   * @const
   */
  _60: 60,
  /**
   * value: 61
   * @const
   */
  _61: 61,
  /**
   * value: 62
   * @const
   */
  _62: 62,
  /**
   * value: 63
   * @const
   */
  _63: 63,
  /**
   * value: 64
   * @const
   */
  _64: 64,
  /**
   * value: 65
   * @const
   */
  _65: 65,
  /**
   * value: 66
   * @const
   */
  _66: 66,
  /**
   * value: 67
   * @const
   */
  _67: 67,
  /**
   * value: 68
   * @const
   */
  _68: 68,
  /**
   * value: 69
   * @const
   */
  _69: 69,
  /**
   * value: 70
   * @const
   */
  _70: 70,
  /**
   * value: 71
   * @const
   */
  _71: 71,
  /**
   * value: 72
   * @const
   */
  _72: 72,
  /**
   * value: 76
   * @const
   */
  _76: 76,
  /**
   * value: 77
   * @const
   */
  _77: 77,
  /**
   * value: 78
   * @const
   */
  _78: 78,
  /**
   * value: 79
   * @const
   */
  _79: 79,
  /**
   * value: 80
   * @const
   */
  _80: 80,
  /**
   * value: 84
   * @const
   */
  _84: 84,
  /**
   * value: 85
   * @const
   */
  _85: 85,
  /**
   * value: 86
   * @const
   */
  _86: 86,
  /**
   * value: 87
   * @const
   */
  _87: 87,
  /**
   * Returns a <code>BankPaymentErrorCodes</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/BankPaymentErrorCodes} The enum <code>BankPaymentErrorCodes</code> value.
   */
  constructFromObject: function constructFromObject(object) {
    return object;
  }
};
exports.BankPaymentErrorCodes = BankPaymentErrorCodes;