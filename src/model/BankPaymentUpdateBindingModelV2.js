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
import {BankPaymentCreditorType} from './BankPaymentCreditorType';
import {BankPaymentRecurringCustomDateBindingModelV2} from './BankPaymentRecurringCustomDateBindingModelV2';
import {BankPaymentScheme} from './BankPaymentScheme';
import {RecurringBankPaymentFrequencyMethod} from './RecurringBankPaymentFrequencyMethod';

/**
 * The BankPaymentUpdateBindingModelV2 model module.
 * @module model/BankPaymentUpdateBindingModelV2
 * @version 2.0
 */
export class BankPaymentUpdateBindingModelV2 {
  /**
   * Constructs a new <code>BankPaymentUpdateBindingModelV2</code>.
   * @alias module:model/BankPaymentUpdateBindingModelV2
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BankPaymentUpdateBindingModelV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BankPaymentUpdateBindingModelV2} obj Optional instance to populate.
   * @return {module:model/BankPaymentUpdateBindingModelV2} The populated <code>BankPaymentUpdateBindingModelV2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BankPaymentUpdateBindingModelV2();
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('accountIdentifier'))
        obj.accountIdentifier = ApiClient.convertToType(data['accountIdentifier'], 'String');
      if (data.hasOwnProperty('bankName'))
        obj.bankName = ApiClient.convertToType(data['bankName'], 'String');
      if (data.hasOwnProperty('bankIdentifier'))
        obj.bankIdentifier = ApiClient.convertToType(data['bankIdentifier'], 'String');
      if (data.hasOwnProperty('bankIdentifier2'))
        obj.bankIdentifier2 = ApiClient.convertToType(data['bankIdentifier2'], 'String');
      if (data.hasOwnProperty('bankIdentifier3'))
        obj.bankIdentifier3 = ApiClient.convertToType(data['bankIdentifier3'], 'String');
      if (data.hasOwnProperty('countryCode'))
        obj.countryCode = ApiClient.convertToType(data['countryCode'], 'String');
      if (data.hasOwnProperty('addressLine1'))
        obj.addressLine1 = ApiClient.convertToType(data['addressLine1'], 'String');
      if (data.hasOwnProperty('addressLine2'))
        obj.addressLine2 = ApiClient.convertToType(data['addressLine2'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('postCode'))
        obj.postCode = ApiClient.convertToType(data['postCode'], 'String');
      if (data.hasOwnProperty('bankPaymentScheme'))
        obj.bankPaymentScheme = BankPaymentScheme.constructFromObject(data['bankPaymentScheme']);
      if (data.hasOwnProperty('debitCurrency'))
        obj.debitCurrency = ApiClient.convertToType(data['debitCurrency'], 'String');
      if (data.hasOwnProperty('creditorType'))
        obj.creditorType = BankPaymentCreditorType.constructFromObject(data['creditorType']);
      if (data.hasOwnProperty('reference'))
        obj.reference = ApiClient.convertToType(data['reference'], 'String');
      if (data.hasOwnProperty('unstructuredReference'))
        obj.unstructuredReference = ApiClient.convertToType(data['unstructuredReference'], 'String');
      if (data.hasOwnProperty('isInstant'))
        obj.isInstant = ApiClient.convertToType(data['isInstant'], 'Boolean');
      if (data.hasOwnProperty('payeeId'))
        obj.payeeId = ApiClient.convertToType(data['payeeId'], 'String');
      if (data.hasOwnProperty('userDefinedFields'))
        obj.userDefinedFields = ApiClient.convertToType(data['userDefinedFields'], {'String': 'String'});
      if (data.hasOwnProperty('creditorDateOfBirth'))
        obj.creditorDateOfBirth = ApiClient.convertToType(data['creditorDateOfBirth'], 'String');
      if (data.hasOwnProperty('creditorIdentificationType'))
        obj.creditorIdentificationType = ApiClient.convertToType(data['creditorIdentificationType'], 'String');
      if (data.hasOwnProperty('creditorIdentificationValue'))
        obj.creditorIdentificationValue = ApiClient.convertToType(data['creditorIdentificationValue'], 'String');
      if (data.hasOwnProperty('paymentAmount'))
        obj.paymentAmount = ApiClient.convertToType(data['paymentAmount'], 'Number');
      if (data.hasOwnProperty('debitAmount'))
        obj.debitAmount = ApiClient.convertToType(data['debitAmount'], 'Number');
      if (data.hasOwnProperty('paymentFrequencyMethod'))
        obj.paymentFrequencyMethod = RecurringBankPaymentFrequencyMethod.constructFromObject(data['paymentFrequencyMethod']);
      if (data.hasOwnProperty('firstPaymentDate'))
        obj.firstPaymentDate = ApiClient.convertToType(data['firstPaymentDate'], 'String');
      if (data.hasOwnProperty('frequency'))
        obj.frequency = ApiClient.convertToType(data['frequency'], 'Number');
      if (data.hasOwnProperty('finalPaymentDate'))
        obj.finalPaymentDate = ApiClient.convertToType(data['finalPaymentDate'], 'String');
      if (data.hasOwnProperty('numberOfFurtherPayments'))
        obj.numberOfFurtherPayments = ApiClient.convertToType(data['numberOfFurtherPayments'], 'Number');
      if (data.hasOwnProperty('firstPaymentAmount'))
        obj.firstPaymentAmount = ApiClient.convertToType(data['firstPaymentAmount'], 'Number');
      if (data.hasOwnProperty('furtherPaymentsAmount'))
        obj.furtherPaymentsAmount = ApiClient.convertToType(data['furtherPaymentsAmount'], 'Number');
      if (data.hasOwnProperty('finalPaymentAmount'))
        obj.finalPaymentAmount = ApiClient.convertToType(data['finalPaymentAmount'], 'Number');
      if (data.hasOwnProperty('debitFirstPaymentAmount'))
        obj.debitFirstPaymentAmount = ApiClient.convertToType(data['debitFirstPaymentAmount'], 'Number');
      if (data.hasOwnProperty('debitFurtherPaymentsAmount'))
        obj.debitFurtherPaymentsAmount = ApiClient.convertToType(data['debitFurtherPaymentsAmount'], 'Number');
      if (data.hasOwnProperty('debitFinalPaymentAmount'))
        obj.debitFinalPaymentAmount = ApiClient.convertToType(data['debitFinalPaymentAmount'], 'Number');
      if (data.hasOwnProperty('customDates'))
        obj.customDates = ApiClient.convertToType(data['customDates'], [BankPaymentRecurringCustomDateBindingModelV2]);
      if (data.hasOwnProperty('settingId'))
        obj.settingId = ApiClient.convertToType(data['settingId'], 'String');
    }
    return obj;
  }
}

/**
 * First name of beneficiary (Creditor)
 * @member {String} firstName
 */
BankPaymentUpdateBindingModelV2.prototype.firstName = undefined;

/**
 * Last name of beneficiary (Creditor)
 * @member {String} lastName
 */
BankPaymentUpdateBindingModelV2.prototype.lastName = undefined;

/**
 * Specify the currency credited to the payee. ISO-4217 3 character currency code
 * @member {String} currency
 */
BankPaymentUpdateBindingModelV2.prototype.currency = undefined;

/**
 * Content varies on the target country and currency, see get GetBankPaymentValidation's API for  further details. I.e.: the filed can conain IBAN, AccountNumber etc..
 * @member {String} accountIdentifier
 */
BankPaymentUpdateBindingModelV2.prototype.accountIdentifier = undefined;

/**
 * Bank name
 * @member {String} bankName
 */
BankPaymentUpdateBindingModelV2.prototype.bankName = undefined;

/**
 * Content varies on the target country and currency, see get GetBankPaymentValidation's API for  further details. I.e.: the filed can conain SWIFT, SortCode etc..
 * @member {String} bankIdentifier
 */
BankPaymentUpdateBindingModelV2.prototype.bankIdentifier = undefined;

/**
 * Bank Identifier 2
 * @member {String} bankIdentifier2
 */
BankPaymentUpdateBindingModelV2.prototype.bankIdentifier2 = undefined;

/**
 * Bank Identifier 3
 * @member {String} bankIdentifier3
 */
BankPaymentUpdateBindingModelV2.prototype.bankIdentifier3 = undefined;

/**
 * Country Code - ISO 3166-2. (Creditor)   This is used in order to determine the target country and so the payment is GBP Faster Payment, Sepa or International swift payments
 * @member {String} countryCode
 */
BankPaymentUpdateBindingModelV2.prototype.countryCode = undefined;

/**
 * Address line 1 - Required for SEPA Payments , International SWIFT Payments
 * @member {String} addressLine1
 */
BankPaymentUpdateBindingModelV2.prototype.addressLine1 = undefined;

/**
 * Address line 2
 * @member {String} addressLine2
 */
BankPaymentUpdateBindingModelV2.prototype.addressLine2 = undefined;

/**
 * City
 * @member {String} city
 */
BankPaymentUpdateBindingModelV2.prototype.city = undefined;

/**
 * State
 * @member {String} state
 */
BankPaymentUpdateBindingModelV2.prototype.state = undefined;

/**
 * Post Code
 * @member {String} postCode
 */
BankPaymentUpdateBindingModelV2.prototype.postCode = undefined;

/**
 * @member {module:model/BankPaymentScheme} bankPaymentScheme
 */
BankPaymentUpdateBindingModelV2.prototype.bankPaymentScheme = undefined;

/**
 * Required for multicurrency transactions to specify the currency debited from the payer. Required for SEPA payments and internations SWIFT payments - ISO-4217 3 character currency code
 * @member {String} debitCurrency
 */
BankPaymentUpdateBindingModelV2.prototype.debitCurrency = undefined;

/**
 * @member {module:model/BankPaymentCreditorType} creditorType
 */
BankPaymentUpdateBindingModelV2.prototype.creditorType = undefined;

/**
 * Description reference of payment
 * @member {String} reference
 */
BankPaymentUpdateBindingModelV2.prototype.reference = undefined;

/**
 * Unstuctured refenrece    Note: for certain characters that may break XML these need to be double encoded, so & would be <O31&amp;lt;/O31> when using standard HTML encoding
 * @member {String} unstructuredReference
 */
BankPaymentUpdateBindingModelV2.prototype.unstructuredReference = undefined;

/**
 * This boolean type field, indicates if an instant SEPA payment should occur. This functionality only works for SEPA payments.  True: Indicates that an instant sepa payment should happen and be completed in seconds  False: Indicates that a normal sepa payment should be done which can complete in days
 * @member {Boolean} isInstant
 */
BankPaymentUpdateBindingModelV2.prototype.isInstant = undefined;

/**
 * Payee reference id
 * @member {String} payeeId
 */
BankPaymentUpdateBindingModelV2.prototype.payeeId = undefined;

/**
 * User Defined fields.  This will hold extra information, that user would like to have in the transaction.
 * @member {Object.<String, String>} userDefinedFields
 */
BankPaymentUpdateBindingModelV2.prototype.userDefinedFields = undefined;

/**
 * Creditor's date of birth, in \"yyyy-MM-dd\" format.
 * @member {String} creditorDateOfBirth
 */
BankPaymentUpdateBindingModelV2.prototype.creditorDateOfBirth = undefined;

/**
 * Creditor identification type. Values available: none, drivers_license, social_security_number, green_card, passport, visa, matricula_consular, registro_federal_de_contribuyentes, clave_unica_de_registro_de_poblacion, credential_de_elector, social_insurance_number, citizenship_papers, drivers_license_canadian, existing_credit_card_details, employer_identification_number, national_id, incorporation_number, others
 * @member {String} creditorIdentificationType
 */
BankPaymentUpdateBindingModelV2.prototype.creditorIdentificationType = undefined;

/**
 * Creditor identification Value
 * @member {String} creditorIdentificationValue
 */
BankPaymentUpdateBindingModelV2.prototype.creditorIdentificationValue = undefined;

/**
 * Amount of payment. Required for OneOff payments.
 * @member {Number} paymentAmount
 */
BankPaymentUpdateBindingModelV2.prototype.paymentAmount = undefined;

/**
 * Required for multicurrency transaction to specify the amount debited from the payer
 * @member {Number} debitAmount
 */
BankPaymentUpdateBindingModelV2.prototype.debitAmount = undefined;

/**
 * @member {module:model/RecurringBankPaymentFrequencyMethod} paymentFrequencyMethod
 */
BankPaymentUpdateBindingModelV2.prototype.paymentFrequencyMethod = undefined;

/**
 * Payment date yyyy-MM-dd
 * @member {String} firstPaymentDate
 */
BankPaymentUpdateBindingModelV2.prototype.firstPaymentDate = undefined;

/**
 * How often a payment should occur in days.     When PaymentFrequencyMethod is Date:        (FinalPaymentDate - FirstPaymentDate) / Frequency must be an integer.      i.e.: When the date difference between the first and the final date is 10      Frequency cannot be 3,4,6,7,8. It can be 1,2,5,10.    When PaymentFrequencyMethod is Amount:        Each further payment follows the initial payment       by the amount of days specifed in \"Frequency\"
 * @member {Number} frequency
 */
BankPaymentUpdateBindingModelV2.prototype.frequency = undefined;

/**
 * Final payment date yyyy-MM-dd, used when PaymentFrequencyMethod is Date
 * @member {String} finalPaymentDate
 */
BankPaymentUpdateBindingModelV2.prototype.finalPaymentDate = undefined;

/**
 * Number of further payment transactions, used when PaymentFrequencyMethod is Amount
 * @member {Number} numberOfFurtherPayments
 */
BankPaymentUpdateBindingModelV2.prototype.numberOfFurtherPayments = undefined;

/**
 * Amount of payment of the initial payment
 * @member {Number} firstPaymentAmount
 */
BankPaymentUpdateBindingModelV2.prototype.firstPaymentAmount = undefined;

/**
 * The amount of further payments
 * @member {Number} furtherPaymentsAmount
 */
BankPaymentUpdateBindingModelV2.prototype.furtherPaymentsAmount = undefined;

/**
 * Final payment amount, used when PaymentFrequencyMethod is Date
 * @member {Number} finalPaymentAmount
 */
BankPaymentUpdateBindingModelV2.prototype.finalPaymentAmount = undefined;

/**
 * Debit first payment amount of recurring
 * @member {Number} debitFirstPaymentAmount
 */
BankPaymentUpdateBindingModelV2.prototype.debitFirstPaymentAmount = undefined;

/**
 * Debit further payment amount of recurring
 * @member {Number} debitFurtherPaymentsAmount
 */
BankPaymentUpdateBindingModelV2.prototype.debitFurtherPaymentsAmount = undefined;

/**
 * Debit final payment amount, used when PaymentFrequencyMethod is Date
 * @member {Number} debitFinalPaymentAmount
 */
BankPaymentUpdateBindingModelV2.prototype.debitFinalPaymentAmount = undefined;

/**
 * List of dates and their respective amounts, used when PaymentFrequencyMethod is CustomDate
 * @member {Array.<module:model/BankPaymentRecurringCustomDateBindingModelV2>} customDates
 */
BankPaymentUpdateBindingModelV2.prototype.customDates = undefined;

/**
 * Setting Id of the recurring payment
 * @member {String} settingId
 */
BankPaymentUpdateBindingModelV2.prototype.settingId = undefined;

