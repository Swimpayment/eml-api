# FinacApi.UpdatePayeeDetailsBindingModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creditorBankIdentifier** | **String** | Bank Identifier GBP - sort code  SEPA and currency cloud - BIC | [optional] 
**creditorAccountIdentifier** | **String** | Creditor Account number for UK Payments  SEPA and currency cloud IBAN | [optional] 
**creditorCountryCode** | **String** | Alpha ISO-2 Country Code | [optional] 
**currency** | **String** | Currency | [optional] 
**creditorAddress1** | **String** | Creditor Address Line 1 | [optional] 
**creditorAddress2** | **String** | Creditor Address Line 2 | [optional] 
**creditorcity** | **String** | Creditor City | [optional] 
**creditorPostcode** | **String** | Creditor Post Code | [optional] 
**creditorState** | **String** | Creditor State | [optional] 
**creditorFirstName** | **String** | Creditor First Name | [optional] 
**creditorLastName** | **String** | Creditor Last Name | [optional] 
**creditorType** | [**BankPaymentCreditorType**](BankPaymentCreditorType.md) |  | [optional] 
**isInstant** | **Boolean** | Is Instant | [optional] 
**bankIdentifier** | **String** | BankIdentifier for CAD payments | [optional] 
**bankIdentifier2** | **String** | BankIdentifier2 for CAD payments | [optional] 
**paymentScheme** | **Number** | Payment Scheme | [optional] 
**creditorDateOfBirth** | **String** | Creditor&#x27;s date of birth, in \&quot;yyyy-MM-dd\&quot; format. | [optional] 
**creditorIdentificationType** | **String** | Creditor identification type. Values available: none, drivers_license, social_security_number, green_card, passport, visa, matricula_consular, registro_federal_de_contribuyentes, clave_unica_de_registro_de_poblacion, credential_de_elector, social_insurance_number, citizenship_papers, drivers_license_canadian, existing_credit_card_details, employer_identification_number, national_id, incorporation_number, others | [optional] 
**creditorIdentificationValue** | **String** | Creditor identification Value | [optional] 
