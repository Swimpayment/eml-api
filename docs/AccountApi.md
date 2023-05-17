# FinacApi.AccountApi

All URIs are relative to *https://staging-api.prepaidfinancialservices.com/finac*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAccountAccountIdPost**](AccountApi.md#apiAccountAccountIdPost) | **POST** /api/Account/AccountId | Cardholder ID
[**apiAccountAccountLinkPXSXPost**](AccountApi.md#apiAccountAccountLinkPXSXPost) | **POST** /api/Account/AccountLinkPXSX | Secondary Card Link
[**apiAccountAllowRegistrationPost**](AccountApi.md#apiAccountAllowRegistrationPost) | **POST** /api/Account/AllowRegistration | Allow Registration
[**apiAccountCardholderToCardholderTransferPost**](AccountApi.md#apiAccountCardholderToCardholderTransferPost) | **POST** /api/Account/CardholderToCardholderTransfer | Card 2 Card
[**apiAccountConditionGroupGet**](AccountApi.md#apiAccountConditionGroupGet) | **GET** /api/Account/ConditionGroup | Get Condition Group
[**apiAccountConditionGroupPost**](AccountApi.md#apiAccountConditionGroupPost) | **POST** /api/Account/ConditionGroup | Insert Condition Group
[**apiAccountFXQuotePost**](AccountApi.md#apiAccountFXQuotePost) | **POST** /api/Account/FXQuote | FX Quote
[**apiAccountFXTradePost**](AccountApi.md#apiAccountFXTradePost) | **POST** /api/Account/FXTrade | FX Trade
[**apiAccountIdAccountToAccountTradePost**](AccountApi.md#apiAccountIdAccountToAccountTradePost) | **POST** /api/Account/{Id}/AccountToAccountTrade | Account To Account Trade
[**apiAccountIdAddCurrencyPost**](AccountApi.md#apiAccountIdAddCurrencyPost) | **POST** /api/Account/{Id}/AddCurrency | Add Currency
[**apiAccountIdBalanceGet**](AccountApi.md#apiAccountIdBalanceGet) | **GET** /api/Account/{Id}/Balance | Card Balance
[**apiAccountIdCardNumberPost**](AccountApi.md#apiAccountIdCardNumberPost) | **POST** /api/Account/{Id}/CardNumber | Request Card Number
[**apiAccountIdCheckLoadGet**](AccountApi.md#apiAccountIdCheckLoadGet) | **GET** /api/Account/{Id}/CheckLoad | Check load version 2
[**apiAccountIdConditionCheckPatch**](AccountApi.md#apiAccountIdConditionCheckPatch) | **PATCH** /api/Account/{Id}/ConditionCheck | Toggle Functionality
[**apiAccountIdCurrenciesGet**](AccountApi.md#apiAccountIdCurrenciesGet) | **GET** /api/Account/{Id}/Currencies | Card Currencies
[**apiAccountIdCvvPost**](AccountApi.md#apiAccountIdCvvPost) | **POST** /api/Account/{Id}/Cvv | Request CVV
[**apiAccountIdDetailsGet**](AccountApi.md#apiAccountIdDetailsGet) | **GET** /api/Account/{Id}/Details | Account Details
[**apiAccountIdExpiryDatePost**](AccountApi.md#apiAccountIdExpiryDatePost) | **POST** /api/Account/{Id}/ExpiryDate | Get Expiry Date
[**apiAccountIdFeeDebitPost**](AccountApi.md#apiAccountIdFeeDebitPost) | **POST** /api/Account/{Id}/Fee/Debit | Charge Fee
[**apiAccountIdForgotPasswordPatch**](AccountApi.md#apiAccountIdForgotPasswordPatch) | **PATCH** /api/Account/{Id}/ForgotPassword | Forgot Password
[**apiAccountIdFullLoadsGet**](AccountApi.md#apiAccountIdFullLoadsGet) | **GET** /api/Account/{Id}/FullLoads | Full Load Card Details
[**apiAccountIdGet**](AccountApi.md#apiAccountIdGet) | **GET** /api/Account/{Id} | Inquiry
[**apiAccountIdKycCodeDetailsGet**](AccountApi.md#apiAccountIdKycCodeDetailsGet) | **GET** /api/Account/{Id}/KycCodeDetails | KYC Code Details
[**apiAccountIdKycCodePost**](AccountApi.md#apiAccountIdKycCodePost) | **POST** /api/Account/{Id}/KycCode | KYC Generate Code
[**apiAccountIdKycLinkPost**](AccountApi.md#apiAccountIdKycLinkPost) | **POST** /api/Account/{Id}/KycLink | Kyc Link
[**apiAccountIdLatestCardNumberGet**](AccountApi.md#apiAccountIdLatestCardNumberGet) | **GET** /api/Account/{Id}/LatestCardNumber | Latest Card
[**apiAccountIdLatestGet**](AccountApi.md#apiAccountIdLatestGet) | **GET** /api/Account/{Id}/Latest | Latest CardHolder
[**apiAccountIdLevelLimitGet**](AccountApi.md#apiAccountIdLevelLimitGet) | **GET** /api/Account/{Id}/LevelLimit | Cardholder Limit Levels
[**apiAccountIdLevelLimitPatch**](AccountApi.md#apiAccountIdLevelLimitPatch) | **PATCH** /api/Account/{Id}/LevelLimit | Set Carholder Limit Level
[**apiAccountIdLoadsGet**](AccountApi.md#apiAccountIdLoadsGet) | **GET** /api/Account/{Id}/Loads | This version is now deprecated, please use V2.
[**apiAccountIdLockUnlockPatch**](AccountApi.md#apiAccountIdLockUnlockPatch) | **PATCH** /api/Account/{Id}/LockUnlock | Block/Unblock
[**apiAccountIdMccDelete**](AccountApi.md#apiAccountIdMccDelete) | **DELETE** /api/Account/{Id}/Mcc | MCC Unblock
[**apiAccountIdMccGet**](AccountApi.md#apiAccountIdMccGet) | **GET** /api/Account/{Id}/Mcc | MCC Blocks
[**apiAccountIdMccPost**](AccountApi.md#apiAccountIdMccPost) | **POST** /api/Account/{Id}/Mcc | MCC Block
[**apiAccountIdNominatedPersonGet**](AccountApi.md#apiAccountIdNominatedPersonGet) | **GET** /api/Account/{Id}/NominatedPerson | Get Nominated Person
[**apiAccountIdNominatedPersonPatch**](AccountApi.md#apiAccountIdNominatedPersonPatch) | **PATCH** /api/Account/{Id}/NominatedPerson | Update Nominated Person
[**apiAccountIdNominatedPersonPost**](AccountApi.md#apiAccountIdNominatedPersonPost) | **POST** /api/Account/{Id}/NominatedPerson | Create Nominated Person
[**apiAccountIdPINReminderGet**](AccountApi.md#apiAccountIdPINReminderGet) | **GET** /api/Account/{Id}/PINReminder | PIN Reminder
[**apiAccountIdPatch**](AccountApi.md#apiAccountIdPatch) | **PATCH** /api/Account/{Id} | Update Cardholder
[**apiAccountIdPayeeGet**](AccountApi.md#apiAccountIdPayeeGet) | **GET** /api/Account/{Id}/Payee | OFAC Payee Inquiry
[**apiAccountIdPhysicalCardPatch**](AccountApi.md#apiAccountIdPhysicalCardPatch) | **PATCH** /api/Account/{Id}/PhysicalCard | Request Physical Card
[**apiAccountIdPinPost**](AccountApi.md#apiAccountIdPinPost) | **POST** /api/Account/{Id}/Pin | Request PIN
[**apiAccountIdPurchaseOnUsPost**](AccountApi.md#apiAccountIdPurchaseOnUsPost) | **POST** /api/Account/{Id}/PurchaseOnUs | PurchaseOnUs
[**apiAccountIdRedeemKycCodePatch**](AccountApi.md#apiAccountIdRedeemKycCodePatch) | **PATCH** /api/Account/{Id}/RedeemKycCode | KYC Redeem Code
[**apiAccountIdRegisterClientPatch**](AccountApi.md#apiAccountIdRegisterClientPatch) | **PATCH** /api/Account/{Id}/RegisterClient | Register client
[**apiAccountIdReissuePost**](AccountApi.md#apiAccountIdReissuePost) | **POST** /api/Account/{Id}/Reissue | Reissue
[**apiAccountIdRemoveLoadLimitDelete**](AccountApi.md#apiAccountIdRemoveLoadLimitDelete) | **DELETE** /api/Account/{Id}/RemoveLoadLimit | Remove Load Limit
[**apiAccountIdReplacePost**](AccountApi.md#apiAccountIdReplacePost) | **POST** /api/Account/{Id}/Replace | Replace
[**apiAccountIdResendKycCodePost**](AccountApi.md#apiAccountIdResendKycCodePost) | **POST** /api/Account/{Id}/ResendKycCode | KYC Resend Code
[**apiAccountIdResetPasswordPatch**](AccountApi.md#apiAccountIdResetPasswordPatch) | **PATCH** /api/Account/{Id}/ResetPassword | Reset Password
[**apiAccountIdSecondaryGet**](AccountApi.md#apiAccountIdSecondaryGet) | **GET** /api/Account/{Id}/Secondary | Secondary Cards
[**apiAccountIdSensitiveDataTokenPost**](AccountApi.md#apiAccountIdSensitiveDataTokenPost) | **POST** /api/Account/{Id}/SensitiveDataToken | Sensitive Data Token
[**apiAccountIdSpendControlGet**](AccountApi.md#apiAccountIdSpendControlGet) | **GET** /api/Account/{Id}/SpendControl | Get Spend Limits
[**apiAccountIdSpendControlPost**](AccountApi.md#apiAccountIdSpendControlPost) | **POST** /api/Account/{Id}/SpendControl | Spend Control
[**apiAccountIdStatusGet**](AccountApi.md#apiAccountIdStatusGet) | **GET** /api/Account/{Id}/Status | Card Status
[**apiAccountIdStatusPatch**](AccountApi.md#apiAccountIdStatusPatch) | **PATCH** /api/Account/{Id}/Status | Change Card Status
[**apiAccountIdToggleIbanGet**](AccountApi.md#apiAccountIdToggleIbanGet) | **GET** /api/Account/{Id}/ToggleIban | Toggle IBAN
[**apiAccountIdToggleIbanPatch**](AccountApi.md#apiAccountIdToggleIbanPatch) | **PATCH** /api/Account/{Id}/ToggleIban | Toggle IBAN
[**apiAccountIdTransactionsGet**](AccountApi.md#apiAccountIdTransactionsGet) | **GET** /api/Account/{Id}/Transactions | Transaction History
[**apiAccountIdTransferDetailsPost**](AccountApi.md#apiAccountIdTransferDetailsPost) | **POST** /api/Account/{Id}/TransferDetails | Transfer Details
[**apiAccountIdUpgradeCardPost**](AccountApi.md#apiAccountIdUpgradeCardPost) | **POST** /api/Account/{Id}/UpgradeCard | Upgrade Product Type
[**apiAccountIdUsageGet**](AccountApi.md#apiAccountIdUsageGet) | **GET** /api/Account/{Id}/Usage | Card Usage
[**apiAccountIdUseDataTokenGet**](AccountApi.md#apiAccountIdUseDataTokenGet) | **GET** /api/Account/{Id}/UseDataToken | Use Data Token
[**apiAccountIdValidatePinPost**](AccountApi.md#apiAccountIdValidatePinPost) | **POST** /api/Account/{Id}/ValidatePin | Validate PIN
[**apiAccountKYCUploadDocumentsPost**](AccountApi.md#apiAccountKYCUploadDocumentsPost) | **POST** /api/Account/KYCUploadDocuments | KYC Upload Documents
[**apiAccountLoginPost**](AccountApi.md#apiAccountLoginPost) | **POST** /api/Account/Login | Validate Login
[**apiAccountNumberOfDocumentsGet**](AccountApi.md#apiAccountNumberOfDocumentsGet) | **GET** /api/Account/NumberOfDocuments | Get Number of Documents
[**apiAccountPost**](AccountApi.md#apiAccountPost) | **POST** /api/Account | Card Issue
[**apiAccountReferenceAttemptedRegistrationsGet**](AccountApi.md#apiAccountReferenceAttemptedRegistrationsGet) | **GET** /api/Account/{reference}/AttemptedRegistrations | Attempted Registrations
[**apiAccountSepaTransactionCountGet**](AccountApi.md#apiAccountSepaTransactionCountGet) | **GET** /api/Account/SepaTransactionCount | Sepa Transaction Count

<a name="apiAccountAccountIdPost"></a>
# **apiAccountAccountIdPost**
> AccountIdV2ViewModelValidResponsePackage apiAccountAccountIdPost(apiVersion, authorization, fMessageId, fOrigin, opts)

Cardholder ID

Returns the Cardholder ID for a given Card Number (PAN).     When encryption key is provided the PAN should be encypted in the &#x27;CardNumber&#x27; field. At least one optional field must be passed as verification.    Sample request:        POST /api/Account/AccountId      {          \&quot;cardNumber\&quot;: \&quot;E59BF603B67BE8E91598543A8BC0E4966DDD0DD5DB716DDC2798CF31F86E806B\&quot;,          \&quot;phone\&quot;: \&quot;3446785236473\&quot;,          \&quot;dateOfBirth\&quot;: \&quot;1994-11-17\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "f90b4327-43df-4e3c-9ca7-8beed511fd58"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.AccountIdV2BindingModel() // AccountIdV2BindingModel | 
};
apiInstance.apiAccountAccountIdPost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to f90b4327-43df-4e3c-9ca7-8beed511fd58]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**AccountIdV2BindingModel**](AccountIdV2BindingModel.md)|  | [optional] 

### Return type

[**AccountIdV2ViewModelValidResponsePackage**](AccountIdV2ViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountAccountLinkPXSXPost"></a>
# **apiAccountAccountLinkPXSXPost**
> AccountLinkPXSXViewModelValidResponsePackage apiAccountAccountLinkPXSXPost(apiVersion, authorization, fMessageId, fOrigin, opts)

Secondary Card Link

Links together two accounts, one as primary and the other as secondary.    When creating new cards, UDF3 should always be SOLO and UDF4 should always be empty.    When cards are linked, the secondary card UDF3 will change to SXFR and UDF4 will contain a reference number to the primary card.                If the allowed of secondary cards will be more than one, UDF3 of the primary card will remain SOLO and UDF4 will remain empty.                When the maximum amount of secondary cards are reached, the UDF3 of the primary card is changed to PXFR and UDF4 will change to a reference number.    Each card will have an individual balance. Secondary cards can only be loaded through the primary card via Card2Card transfer.    Cards must be KYC {product type \&quot;2\&quot;} in order to be linked    Sample request:                    POST /api/Account/AccountLinkPXSX      {          \&quot;id\&quot;: \&quot;400000000000\&quot;,          \&quot;secondaryId\&quot;: \&quot;400000000000\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "57901b44-6555-4aa6-b21b-425321fe6939"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.AccountLinkPXSXBindingModel() // AccountLinkPXSXBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountAccountLinkPXSXPost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 57901b44-6555-4aa6-b21b-425321fe6939]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**AccountLinkPXSXBindingModel**](AccountLinkPXSXBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**AccountLinkPXSXViewModelValidResponsePackage**](AccountLinkPXSXViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountAllowRegistrationPost"></a>
# **apiAccountAllowRegistrationPost**
> AllowRegistrationViewModelValidResponsePackage apiAccountAllowRegistrationPost(apiVersion, authorization, fMessageId, fOrigin, opts)

Allow Registration

Check the details that a client is trying to use before creating or updating a card.    Sample request:                    POST /api/Account/AllowRegistration      {          \&quot;issuingId\&quot;: 180631,          \&quot;bin\&quot;: \&quot;123654\&quot;,          \&quot;distributorCode\&quot;: \&quot;963\&quot;,          \&quot;registrationType\&quot;: 1      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "f5bd0aeb-bae2-47fa-807c-3332f4fa7a2f"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.AllowRegistrationBindingModel() // AllowRegistrationBindingModel | Route parameter for account id
};
apiInstance.apiAccountAllowRegistrationPost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to f5bd0aeb-bae2-47fa-807c-3332f4fa7a2f]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**AllowRegistrationBindingModel**](AllowRegistrationBindingModel.md)| Route parameter for account id | [optional] 

### Return type

[**AllowRegistrationViewModelValidResponsePackage**](AllowRegistrationViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountCardholderToCardholderTransferPost"></a>
# **apiAccountCardholderToCardholderTransferPost**
> CardholderToCardholderViewModelV2ValidResponsePackage apiAccountCardholderToCardholderTransferPost(apiVersion, authorization, fMessageId, fOrigin, opts)

Card 2 Card

Transfers funds between two cards on the same program.  Both cards must have passed the KYC process.    Funds can only be transferred between cards:     - with the same currency(only applicable for multicurrency programs)     - issued using the same DC     - fromCard status must not be \&quot;C\&quot; (Phone Number Verification)     - toCard status must not be \&quot;C\&quot; (Phone Number Verification) or \&quot;E\&quot; (Expired) or 9 (Closed)    Sample request:        POST /api/Account/CardholderToCardholderTransfer      {          \&quot;id\&quot;: \&quot;400000000000\&quot;,          \&quot;toId\&quot;: \&quot;400000000000\&quot;,          \&quot;amount\&quot;: 1000,          \&quot;currencyCode\&quot;: \&quot;GBP\&quot;,          \&quot;terminalOwner\&quot;: \&quot;TOwn\&quot;,          \&quot;terminalLocation\&quot;: \&quot;TLoc\&quot;,          \&quot;terminalCity\&quot;: \&quot;TCity\&quot;,          \&quot;terminalState\&quot;: \&quot;TState\&quot;,          \&quot;terminalId\&quot;: \&quot;TId\&quot;,          \&quot;countryCode\&quot;: \&quot;ES\&quot;,          \&quot;description\&quot;: \&quot;Card To Card Transfer\&quot;,          \&quot;feeCode\&quot;: \&quot;\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "f967aa72-a678-409a-b683-1943ac477fab"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.CardholderToCardholderBindingModelV2() // CardholderToCardholderBindingModelV2 | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountCardholderToCardholderTransferPost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to f967aa72-a678-409a-b683-1943ac477fab]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**CardholderToCardholderBindingModelV2**](CardholderToCardholderBindingModelV2.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**CardholderToCardholderViewModelV2ValidResponsePackage**](CardholderToCardholderViewModelV2ValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountConditionGroupGet"></a>
# **apiAccountConditionGroupGet**
> ConditionGroupGetViewModelValidResponsePackage apiAccountConditionGroupGet(apiVersion, authorization, fMessageId, fOrigin, opts)

Get Condition Group

Gets the list of condition configuration groups have set up for a given Bin/DC combination    Sample request:      GET /api/Account/ConditionGroup?Bin&#x3D;{{BIN}}&amp;DC&#x3D;{{DC}}

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "ba45cdf4-f6ca-4e7f-8cf4-235b97b1a3b3"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'bin': "bin_example", // String | Assigned by PFS. It is the first 8 digits of the cards on your program.
  'DC': "DC_example" // String | The unique identifier assigned by PFS, to your program
};
apiInstance.apiAccountConditionGroupGet(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to ba45cdf4-f6ca-4e7f-8cf4-235b97b1a3b3]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **bin** | **String**| Assigned by PFS. It is the first 8 digits of the cards on your program. | [optional] 
 **DC** | **String**| The unique identifier assigned by PFS, to your program | [optional] 

### Return type

[**ConditionGroupGetViewModelValidResponsePackage**](ConditionGroupGetViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountConditionGroupPost"></a>
# **apiAccountConditionGroupPost**
> ConditionGroupInsertViewModelValidResponsePackage apiAccountConditionGroupPost(apiVersion, authorization, fMessageId, fOrigin, opts)

Insert Condition Group

Insert a ConditionGroup for the ginven Bin/DC combination    Throws exception if the group with the given name has already exists.    Sample request:      POST /api/Account/ConditionGroup      {          \&quot;Bin\&quot; : \&quot;{{BIN}}\&quot;,          \&quot;DC\&quot; : \&quot;{{DC}}\&quot;,          \&quot;Name\&quot; : \&quot;{{GroupName}}\&quot;,          \&quot;Configurations\&quot; &#x3D; [              {                  \&quot;Condition\&quot;: \&quot;BLOCKATM\&quot;,                  \&quot;Action\&quot;: \&quot;ALLOW\&quot;,                  \&quot;BlockType\&quot;: null              },              {               \&quot;Condition\&quot;: \&quot;ENROLL3DS\&quot;,                  \&quot;Action\&quot;: \&quot;DENY\&quot;,                  \&quot;BlockType\&quot;: null              }          ]      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "e5117370-0211-430e-a3a3-3b21728a0622"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.ConditionGroupInsertBindingModel() // ConditionGroupInsertBindingModel | 
};
apiInstance.apiAccountConditionGroupPost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to e5117370-0211-430e-a3a3-3b21728a0622]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**ConditionGroupInsertBindingModel**](ConditionGroupInsertBindingModel.md)|  | [optional] 

### Return type

[**ConditionGroupInsertViewModelValidResponsePackage**](ConditionGroupInsertViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountFXQuotePost"></a>
# **apiAccountFXQuotePost**
> FXQuoteViewModelV2ValidResponsePackage apiAccountFXQuotePost(apiVersion, authorization, fMessageId, fOrigin, opts)

FX Quote

Retrieves a quote from one currency to another.  A purse must exist for each currency.   The rate provided is valid for 90s, afterwhich another call must be made.    Sample request: How much GBP will I be credited if I exchange 10 EUR?        POST /api/Account/FXQuote      {          \&quot;id\&quot;: \&quot;400000000000\&quot;,          \&quot;currencyFrom\&quot;: \&quot;EUR\&quot;,          \&quot;currencyTo\&quot;: \&quot;GBP\&quot;,          \&quot;amount\&quot;: 1000      }        OR            POST /api/Account/FXQuote      {          \&quot;id\&quot;: \&quot;400000000000\&quot;,          \&quot;currencyFrom\&quot;: \&quot;EUR\&quot;,          \&quot;currencyTo\&quot;: \&quot;GBP\&quot;,          \&quot;amount\&quot;: 550,          \&quot;fixedSide\&quot;: \&quot;Sell\&quot;      }        Sample request: How much EUR do I need to exchange to be credited 10 GBP?        POST /api/Account/FXQuote      {          \&quot;id\&quot;: \&quot;400000000000\&quot;,          \&quot;currencyFrom\&quot;: \&quot;EUR\&quot;,          \&quot;currencyTo\&quot;: \&quot;GBP\&quot;,          \&quot;amount\&quot;: 1000,          \&quot;fixedSide\&quot;: \&quot;Buy\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "a78e05db-57b0-4a74-9991-b9da518ecdac"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.FXQuoteBindingModelV2() // FXQuoteBindingModelV2 | 
};
apiInstance.apiAccountFXQuotePost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to a78e05db-57b0-4a74-9991-b9da518ecdac]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**FXQuoteBindingModelV2**](FXQuoteBindingModelV2.md)|  | [optional] 

### Return type

[**FXQuoteViewModelV2ValidResponsePackage**](FXQuoteViewModelV2ValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountFXTradePost"></a>
# **apiAccountFXTradePost**
> FXTradeV2ViewModelValidResponsePackage apiAccountFXTradePost(apiVersion, authorization, fMessageId, fOrigin, opts)

FX Trade

Executes an FX trade, based on Rate or Amount.    There are 2 types of trades that can be done here.  This is determined by a configuration setting at the programme level - PerformExternalTrade.                1.    If configuration is set to false or not present, when a client makes a request, PFS will use currency cloud to get the rates and the trade/quote is based on currency cloud rates  2.    If configuration is set to true and client makes a request, PFS will use the client’s values passed in P5 and P6                By default, PerformExternalTrade is not present which means that we will take currency cloud rates.  For both scenarios, P1, P2, P3 and P4 are to be present.  For scenario 1, if P5 and P6 are present, these will be ignored.  For scenario 2, P5 and P6 are required as these are used as rates to do the trade.    Unless specified otherwise, the rate or amount value are to be taken from the response of the FX Quote function.    Sample request:                    POST /api/Account/FXTrade      {          \&quot;id\&quot;: \&quot;400000000000\&quot;,          \&quot;currencyFrom\&quot;: \&quot;EUR\&quot;,          \&quot;currencyTo\&quot;: \&quot;GBP\&quot;,          \&quot;amountFrom\&quot;: 550      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "864ae7ed-318d-4b60-ad90-a3cc1434d982"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.FXTradeV2BindingModel() // FXTradeV2BindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountFXTradePost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 864ae7ed-318d-4b60-ad90-a3cc1434d982]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**FXTradeV2BindingModel**](FXTradeV2BindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**FXTradeV2ViewModelValidResponsePackage**](FXTradeV2ViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdAccountToAccountTradePost"></a>
# **apiAccountIdAccountToAccountTradePost**
> TradeViewModelValidResponsePackage apiAccountIdAccountToAccountTradePost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Account To Account Trade

Perform a trade between two wallets or cards.    Sample request:         POST /api/Account/400000000000/AccountToAccountTrade      {          \&quot;toId\&quot;: \&quot;400000000000\&quot;,          \&quot;fromSourceType\&quot;: 1,          \&quot;toSourceType\&quot;: 1,          \&quot;fromAmount\&quot;: 10,          \&quot;toAmount\&quot;: 10,          \&quot;fromCurrencyCode\&quot;: \&quot;GBP\&quot;,          \&quot;toCurrencyCode\&quot;: \&quot;USD\&quot;,          \&quot;conversionRate\&quot;: 1.0,          \&quot;feeCode\&quot;: \&quot;\&quot;,          \&quot;corporateId\&quot;: 0,          \&quot;userDefined\&quot;: { \&quot;Fee\&quot;: \&quot;**FXC\&quot;, \&quot;TransId\&quot;: \&quot;956842\&quot;, \&quot;Rate\&quot;: \&quot;0.3320\&quot;, \&quot;Source\&quot;: \&quot;CCP\&quot;, \&quot;DelDate\&quot;: \&quot;\&quot;, \&quot;bdID\&quot;: \&quot;456\&quot;, \&quot;EC\&quot;: \&quot;\&quot; }      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | From cardholder id
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "60ce25e3-ee67-4396-8ca4-555a1cd874b0"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.TradeBindingModelV2() // TradeBindingModelV2 | 
};
apiInstance.apiAccountIdAccountToAccountTradePost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| From cardholder id | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 60ce25e3-ee67-4396-8ca4-555a1cd874b0]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**TradeBindingModelV2**](TradeBindingModelV2.md)|  | [optional] 

### Return type

[**TradeViewModelValidResponsePackage**](TradeViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdAddCurrencyPost"></a>
# **apiAccountIdAddCurrencyPost**
> AddCurrencyViewModelValidResponsePackage apiAccountIdAddCurrencyPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Add Currency

Add Currency to a multicurrency card                Sample request:                    POST /api/Account/400000000000/AddCurrency         {          \&quot;currencyCode\&quot;: \&quot;EUR\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "03bcef06-c8ca-495e-bc0b-527fe85c9df8"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.AddCurrencyBindingModel() // AddCurrencyBindingModel | 
};
apiInstance.apiAccountIdAddCurrencyPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 03bcef06-c8ca-495e-bc0b-527fe85c9df8]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**AddCurrencyBindingModel**](AddCurrencyBindingModel.md)|  | [optional] 

### Return type

[**AddCurrencyViewModelValidResponsePackage**](AddCurrencyViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdBalanceGet"></a>
# **apiAccountIdBalanceGet**
> BalanceV2ViewModelValidResponsePackage apiAccountIdBalanceGet(id, apiVersion, authorization, fMessageId, fOrigin)

Card Balance

Returns the account balance from a given Cardholder ID. For mutli-currency programs a currency must be specified. Each call returns one currency.  Returns both the Available balance and Ledger Balance. The amount is returned with decimals implied.    Sample request:                    GET /api/Account/400000000000/Balance      GET /api/Account/400000000000/Balance?Currency&#x3D;EUR

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder Id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "d33eb124-3a2b-44cb-ae0b-5bb6cda11ecd"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountIdBalanceGet(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder Id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to d33eb124-3a2b-44cb-ae0b-5bb6cda11ecd]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**BalanceV2ViewModelValidResponsePackage**](BalanceV2ViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdCardNumberPost"></a>
# **apiAccountIdCardNumberPost**
> GetCardNumberViewModelValidResponsePackage apiAccountIdCardNumberPost(id, apiVersion, authorization, fMessageId, fOrigin)

Request Card Number

Retrieves an encrypted card number for a given Cardholder ID.  The encryption algorithm used is AES.  The cipher mode used is ECB.  No IV is required.    Sample request:                    POST /api/Account/400000000000/CardNumber

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder Id
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "e7a19202-c19e-42cb-9f43-6a48d3f0359a"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountIdCardNumberPost(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder Id | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to e7a19202-c19e-42cb-9f43-6a48d3f0359a]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**GetCardNumberViewModelValidResponsePackage**](GetCardNumberViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdCheckLoadGet"></a>
# **apiAccountIdCheckLoadGet**
> CheckLoadViewModelV2ValidResponsePackage apiAccountIdCheckLoadGet(id, apiVersion, authorization, fMessageId, fOrigin)

Check load version 2

Check card load and limit details. Any -1 value in the response signify that no limit is applied.    Sample request:                    GET /api/Account/400000000000/CheckLoad

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "a0965a33-d26d-40b2-871c-d2ac9e995e5c"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountIdCheckLoadGet(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to a0965a33-d26d-40b2-871c-d2ac9e995e5c]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**CheckLoadViewModelV2ValidResponsePackage**](CheckLoadViewModelV2ValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdConditionCheckPatch"></a>
# **apiAccountIdConditionCheckPatch**
> ConditionCheckViewModelValidResponsePackage apiAccountIdConditionCheckPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Toggle Functionality

Turns On or Off contactless capability for a cardholder.     Can be called with a single condition/action or a with a condition group name.   These are mutually exclusive only one of them must be provided.    When called with &#x27;ConditionGroupNameToApply&#x27;, all the conditions in the group will be applied.    If ‘BlockStyle’ &#x3D; BLANK, all e-commerce transactions are blocked, otherwise BlockStyle restricts domestically, internationally or by country code.        \&quot;CONTACTLESS\&quot; – Turns On or Off contactless capabilities.      \&quot;CVV2\&quot; - Turns On or Off tracking for CVV2 failures for MDES preauthorizations. CVV2 can be reset. Used for DPG processor only.      \&quot;BLOCKECOM\&quot; – Turns On or Off e-commerce transactions.      \&quot;BLOCKMAGSTRIPE\&quot; – Turns On or Off magstripe transactions. BlockStyle does not affect this block.      \&quot;BLOCKATM\&quot; – Turns On or Off ATM transactions.      \&quot;BLOCKPOS\&quot; – Turns On or Off POS transactions.      \&quot;BLOCKMOTO\&quot; - Turns On or Off MOTO transactions.      \&quot;ENROLL3DS\&quot; - Turns On or Off Three Domain Secure Enrollment.    Sample request:                    PATCH /api/Account/400000000000/ConditionCheck      {          \&quot;condition\&quot;: \&quot;CONTACTLESS\&quot;,          \&quot;action\&quot;: \&quot;DENY\&quot;,          \&quot;blockType\&quot;: \&quot;\&quot;,          \&quot;applyToLinkedCards\&quot; : \&quot;false\&quot;      }                    PATCH /api/Account/400000000000/ConditionCheck      {          \&quot;conditionGroupNameToApply\&quot;: \&quot;Group Name\&quot;      }                    PATCH /api/Account/400000000000/ConditionCheck      {          \&quot;conditionGroupNameToApply\&quot;: \&quot;Group Name\&quot;,          \&quot;applyToLinkedCards\&quot; : \&quot;true\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "c1c195f7-6b15-4a3c-a589-4305a531bd38"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.ConditionCheckBindingModel() // ConditionCheckBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdConditionCheckPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to c1c195f7-6b15-4a3c-a589-4305a531bd38]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**ConditionCheckBindingModel**](ConditionCheckBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**ConditionCheckViewModelValidResponsePackage**](ConditionCheckViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdCurrenciesGet"></a>
# **apiAccountIdCurrenciesGet**
> AccountCurrenciesViewModelValidResponsePackage apiAccountIdCurrenciesGet(id, apiVersion, authorization, fMessageId, fOrigin)

Card Currencies

Returns the currency purses for a given Cardholder ID.    Sample request:        GET /api/Account/400000000000/Currencies

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder Id
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "d0ebd11b-6576-4658-a84e-8d09d92719ca"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountIdCurrenciesGet(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder Id | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to d0ebd11b-6576-4658-a84e-8d09d92719ca]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**AccountCurrenciesViewModelValidResponsePackage**](AccountCurrenciesViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdCvvPost"></a>
# **apiAccountIdCvvPost**
> GetCvvViewModelValidResponsePackage apiAccountIdCvvPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Request CVV

Returns an encrypted CVV for a given Cardholder ID.   The encryption algorithm used is AES.    The cipher mode used is ECB.  No IV is required.    At least one optional field must be passed as verification    Sample request:                    POST /api/Account/400000000000/Cvv      {          \&quot;phone\&quot; : \&quot;77225522\&quot;,          \&quot;address\&quot; : \&quot;RAMLA ROAD\&quot;,          \&quot;zipCode\&quot; : \&quot;NDR9074\&quot;,          \&quot;securityQuestion\&quot; : \&quot;Favourite Football Team\&quot;,          \&quot;securityAnswer\&quot; : \&quot;Arsenal\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "37ed3a57-9e05-4242-9c2d-7a5ae86c6a2a"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.GetCvvBindingModel() // GetCvvBindingModel | 
};
apiInstance.apiAccountIdCvvPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 37ed3a57-9e05-4242-9c2d-7a5ae86c6a2a]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**GetCvvBindingModel**](GetCvvBindingModel.md)|  | [optional] 

### Return type

[**GetCvvViewModelValidResponsePackage**](GetCvvViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdDetailsGet"></a>
# **apiAccountIdDetailsGet**
> AccountDetailsViewModelValidResponsePackage apiAccountIdDetailsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Account Details

A lightweight version of the Inquiry API.            Sample request:        GET /api/Account/400000000000/Details

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Id of cardholder.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "427b7f25-78e9-4ca9-8da6-ffbbf6c275bc"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'currency': "currency_example" // String | Currency code of account, used only for multi-currency accounts
};
apiInstance.apiAccountIdDetailsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of cardholder. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 427b7f25-78e9-4ca9-8da6-ffbbf6c275bc]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **currency** | **String**| Currency code of account, used only for multi-currency accounts | [optional] 

### Return type

[**AccountDetailsViewModelValidResponsePackage**](AccountDetailsViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdExpiryDatePost"></a>
# **apiAccountIdExpiryDatePost**
> GetExpiryDateViewModelValidResponsePackage apiAccountIdExpiryDatePost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Get Expiry Date

Retrieves an encrypted Expiry Date for a given Cardholder ID.  The API returns an encrypted expiry date.  The encryption algorithm used is AES.  The cipher mode used is ECB.  No IV is required.    At least one optional field must be passed as verification    Sample request:                    POST /api/Account/400000000000/ExpiryDate      {          \&quot;phone\&quot;: \&quot;356771236582\&quot;,          \&quot;address\&quot; : \&quot;Add1 Road\&quot;,          \&quot;zipCode\&quot; : \&quot;FIN9074\&quot;,          \&quot;dateOfBirth\&quot; : \&quot;1984-01-17\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "1958f45b-cffd-40ac-8fd8-7a06f63e162d"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.GetExpiryDateBindingModel() // GetExpiryDateBindingModel | 
};
apiInstance.apiAccountIdExpiryDatePost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 1958f45b-cffd-40ac-8fd8-7a06f63e162d]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**GetExpiryDateBindingModel**](GetExpiryDateBindingModel.md)|  | [optional] 

### Return type

[**GetExpiryDateViewModelValidResponsePackage**](GetExpiryDateViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdFeeDebitPost"></a>
# **apiAccountIdFeeDebitPost**
> FeeViewModelV2ValidResponsePackage apiAccountIdFeeDebitPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Charge Fee

Applies a one-time fee to a given Cardholder ID.     The function debits a fee to a card holder. A description for the reason of the fee applied is also   supported in this transaction.     Sample request:        POST /api/Account/400000000000/Fee/Debit      {          \&quot;feeAmount\&quot;: 10,          \&quot;description\&quot;: \&quot;Card Fee\&quot;,          \&quot;takePartialFee\&quot;: false      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "ea3b33a9-1364-4e99-b445-0961df01261b"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.FeeBindingModelV2() // FeeBindingModelV2 | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdFeeDebitPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to ea3b33a9-1364-4e99-b445-0961df01261b]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**FeeBindingModelV2**](FeeBindingModelV2.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**FeeViewModelV2ValidResponsePackage**](FeeViewModelV2ValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdForgotPasswordPatch"></a>
# **apiAccountIdForgotPasswordPatch**
> ForgotPasswordViewModelValidResponsePackage apiAccountIdForgotPasswordPatch(id, apiVersion, authorization, fMessageId, fOrigin)

Forgot Password

Sends an SMS OTP, for password recovery, to the registered mobile number of a Cardholder.    Sample request:                    PATCH /api/Account/400000000000/ForgotPassword         {      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "6d8db9dd-c20b-435a-9899-458b917f450a"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountIdForgotPasswordPatch(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 6d8db9dd-c20b-435a-9899-458b917f450a]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**ForgotPasswordViewModelValidResponsePackage**](ForgotPasswordViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdFullLoadsGet"></a>
# **apiAccountIdFullLoadsGet**
> FullLoadsV2ViewModelValidResponsePackage apiAccountIdFullLoadsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Full Load Card Details

This function will return information on the card loads and limits using the Direct Fee code provided.    Sample request:                    GET /api/Account/400000000000/FullLoads?directFee&#x3D;**API

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder Id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "1e39d0c0-d729-4535-bfa7-cd15818d14bc"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'directFee': "directFee_example" // String | Direct Fee.
};
apiInstance.apiAccountIdFullLoadsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder Id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 1e39d0c0-d729-4535-bfa7-cd15818d14bc]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **directFee** | **String**| Direct Fee. | [optional] 

### Return type

[**FullLoadsV2ViewModelValidResponsePackage**](FullLoadsV2ViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdGet"></a>
# **apiAccountIdGet**
> InquiryV2ViewModelValidResponsePackage apiAccountIdGet(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Inquiry

A summary of personal and account information for a given card holder.    In addition to card balance (basic monetary unit is returned), it also returns card status, account number, card type and several other fields of demographic information.    Sample request:        GET /api/Account/400000000000

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Id of cardholder.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "609f2909-beef-45e7-8b8c-4668abfcbd64"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'currency': "currency_example" // String | Currency code of account, used only for multi-currency accounts
};
apiInstance.apiAccountIdGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of cardholder. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 609f2909-beef-45e7-8b8c-4668abfcbd64]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **currency** | **String**| Currency code of account, used only for multi-currency accounts | [optional] 

### Return type

[**InquiryV2ViewModelValidResponsePackage**](InquiryV2ViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdKycCodeDetailsGet"></a>
# **apiAccountIdKycCodeDetailsGet**
> KycCodeDetailsViewModelValidResponsePackage apiAccountIdKycCodeDetailsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts)

KYC Code Details

Query the details of a KYC Code.    Sample request:                    GET /api/Account/400000000000/KycCodeDetails

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "63416700-759c-4f9a-9f4e-bd43635d404e"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'code': "code_example" // String | KYC Code
};
apiInstance.apiAccountIdKycCodeDetailsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 63416700-759c-4f9a-9f4e-bd43635d404e]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **code** | **String**| KYC Code | [optional] 

### Return type

[**KycCodeDetailsViewModelValidResponsePackage**](KycCodeDetailsViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdKycCodePost"></a>
# **apiAccountIdKycCodePost**
> KycGenerateCodeViewModelValidResponsePackage apiAccountIdKycCodePost(id, apiVersion, authorization, fMessageId, fOrigin)

KYC Generate Code

Generate a KYC Code.    Sample request:                    POST /api/Account/400000000000/KycCode      {      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "96cb315d-1afa-4e88-8e96-a1fb6c93a26a"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountIdKycCodePost(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 96cb315d-1afa-4e88-8e96-a1fb6c93a26a]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**KycGenerateCodeViewModelValidResponsePackage**](KycGenerateCodeViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdKycLinkPost"></a>
# **apiAccountIdKycLinkPost**
> KycLinkViewModelValidResponsePackage apiAccountIdKycLinkPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Kyc Link

Additional cards or secondary cards using kycLink api to bypass eKYC for the same person.     The same person criteria:            •  First name          •  Last name           •  Date of birth       Limitation: the Bin/Distributor code should have the same KYC full product types    Sample request:                    POST /api/Account/400000000000/KycLink      {          \&quot;secondaryId\&quot;: \&quot;400000000000\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "387295db-6a72-427e-aeba-771d57419572"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.KycLinkBindingModel() // KycLinkBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdKycLinkPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 387295db-6a72-427e-aeba-771d57419572]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**KycLinkBindingModel**](KycLinkBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**KycLinkViewModelValidResponsePackage**](KycLinkViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdLatestCardNumberGet"></a>
# **apiAccountIdLatestCardNumberGet**
> RetrieveLatestCardViewModelValidResponsePackage apiAccountIdLatestCardNumberGet(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Latest Card

Retrieves the most up to date card number for a given Cardholder ID.    Sample request:                    GET /api/Account/400000000000/LatestCardNumber

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "138a15f8-1fe7-41a1-a093-d3e93eed2d29"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'transactionType': "transactionType_example" // String | Type of transaction
};
apiInstance.apiAccountIdLatestCardNumberGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 138a15f8-1fe7-41a1-a093-d3e93eed2d29]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **transactionType** | **String**| Type of transaction | [optional] 

### Return type

[**RetrieveLatestCardViewModelValidResponsePackage**](RetrieveLatestCardViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdLatestGet"></a>
# **apiAccountIdLatestGet**
> RetrieveLatestCardHolderViewModelValidResponsePackage apiAccountIdLatestGet(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Latest CardHolder

Retrieves the most up to date cardholder for a given Cardholder ID.    Sample request:                    GET /api/Account/400000000000/Latest

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "40752e6f-b6e9-43a3-a29c-d87d5fd8c05d"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'transactionType': "transactionType_example" // String | Type of transaction
};
apiInstance.apiAccountIdLatestGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 40752e6f-b6e9-43a3-a29c-d87d5fd8c05d]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **transactionType** | **String**| Type of transaction | [optional] 

### Return type

[**RetrieveLatestCardHolderViewModelValidResponsePackage**](RetrieveLatestCardHolderViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdLevelLimitGet"></a>
# **apiAccountIdLevelLimitGet**
> CardholderLevelLimitsV2ViewModelValidResponsePackage apiAccountIdLevelLimitGet(id, apiVersion, authorization, fMessageId, fOrigin)

Cardholder Limit Levels

Get level limits for a cardholder.    This endpoint is only for M2 processor accounts.                Sample request:                    GET /api/Account/400000000000/LevelLimit

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | 
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "93300cde-0d90-4864-a974-2a40ac8c9795"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountIdLevelLimitGet(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 93300cde-0d90-4864-a974-2a40ac8c9795]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**CardholderLevelLimitsV2ViewModelValidResponsePackage**](CardholderLevelLimitsV2ViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdLevelLimitPatch"></a>
# **apiAccountIdLevelLimitPatch**
> SetCardholderLevelLimitsViewModelValidResponsePackage apiAccountIdLevelLimitPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Set Carholder Limit Level

Set level limits for a cardholder.    This endpoint is only for M2 processor accounts.    Sample request:                    PATCH /api/Account/400000000000/LevelLimit      {          \&quot;limitName\&quot;: \&quot;pos\&quot;,          \&quot;limitCount\&quot;: 1,          \&quot;limitAmount\&quot;: 10,          \&quot;limitPeriod\&quot;: \&quot;Y\&quot;,          \&quot;removeLimit\&quot;: false      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "b86662db-f9b4-4594-a365-218e90eed725"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.SetCardholderLevelLimitBindingModelV2() // SetCardholderLevelLimitBindingModelV2 | 
};
apiInstance.apiAccountIdLevelLimitPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to b86662db-f9b4-4594-a365-218e90eed725]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**SetCardholderLevelLimitBindingModelV2**](SetCardholderLevelLimitBindingModelV2.md)|  | [optional] 

### Return type

[**SetCardholderLevelLimitsViewModelValidResponsePackage**](SetCardholderLevelLimitsViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdLoadsGet"></a>
# **apiAccountIdLoadsGet**
> LoadsV2ViewModelValidResponsePackage apiAccountIdLoadsGet(id, apiVersion, authorization, fMessageId, fOrigin)

This version is now deprecated, please use V2.

Retrieves the daily, weekly, monthly, yearly and lifetime load history, along with the number of attempted loads for a given Cardholder ID.    Sample request:        GET /api/Account/400000000000/Loads

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | 
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "5cc872ec-3fa5-4e5f-a126-59a2a9241909"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountIdLoadsGet(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 5cc872ec-3fa5-4e5f-a126-59a2a9241909]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**LoadsV2ViewModelValidResponsePackage**](LoadsV2ViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdLockUnlockPatch"></a>
# **apiAccountIdLockUnlockPatch**
> LockUnlockViewModelValidResponsePackage apiAccountIdLockUnlockPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Block/Unblock

Blocks or Unblocks a card or account.     Blocked cards, although unable to make outgoing payments, are still able to receive incoming payments.    Sample request:                    PATCH /api/Account/400000000000/LockUnlock      {          \&quot;status\&quot;: \&quot;4\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "0b4a8ba2-2041-4726-9e73-543b8a662887"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.LockUnlockBindingModel() // LockUnlockBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdLockUnlockPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 0b4a8ba2-2041-4726-9e73-543b8a662887]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**LockUnlockBindingModel**](LockUnlockBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**LockUnlockViewModelValidResponsePackage**](LockUnlockViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdMccDelete"></a>
# **apiAccountIdMccDelete**
> MccBlockViewModelValidResponsePackage apiAccountIdMccDelete(id, apiVersion, authorization, fMessageId, fOrigin, opts)

MCC Unblock

Unblocks an MCC for a specifc Cardholder ID.    If a card is upgraded, MCC blocks are removed.  MCC groups must be setup with you PM.  MCC list: https://www.mastercard.us/content/dam/mccom/en-us/documents/rules/quick-reference-booklet-merchant-edition.pdf    Sample request:        DELETE /api/Account/400000000000/Mcc      {          \&quot;mcc\&quot;: \&quot;0780\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "518eaec9-55a2-40dc-8388-d885f28e7858"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.MccBlockBindingModel() // MccBlockBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdMccDelete(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 518eaec9-55a2-40dc-8388-d885f28e7858]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**MccBlockBindingModel**](MccBlockBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**MccBlockViewModelValidResponsePackage**](MccBlockViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdMccGet"></a>
# **apiAccountIdMccGet**
> MccViewModelValidResponsePackage apiAccountIdMccGet(id, apiVersion, authorization, fMessageId, fOrigin)

MCC Blocks

Retrieves the blocked MCCs for a given Cardholder ID.    Sample request:                    GET /api/Account/400000000000/Mcc

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "9420a9cb-3b35-4ead-a002-13f3281dd2b8"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountIdMccGet(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 9420a9cb-3b35-4ead-a002-13f3281dd2b8]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**MccViewModelValidResponsePackage**](MccViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdMccPost"></a>
# **apiAccountIdMccPost**
> MccBlockViewModelValidResponsePackage apiAccountIdMccPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

MCC Block

Blocks an MCC for a specifc Cardholder ID.    If a card is upgraded, MCC blocks are removed.  MCC groups must be setup with you PM.  MCC list: https://www.mastercard.us/content/dam/mccom/en-us/documents/rules/quick-reference-booklet-merchant-edition.pdf                Sample request:                    POST /api/Account/400000000000/Mcc      {          \&quot;mcc\&quot;: \&quot;0780\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "d2213720-6889-4c16-a533-38c6acfb1aab"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.MccBlockBindingModel() // MccBlockBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdMccPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to d2213720-6889-4c16-a533-38c6acfb1aab]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**MccBlockBindingModel**](MccBlockBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**MccBlockViewModelValidResponsePackage**](MccBlockViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdNominatedPersonGet"></a>
# **apiAccountIdNominatedPersonGet**
> NominatedPersonGetViewModelValidResponsePackage apiAccountIdNominatedPersonGet(id, apiVersion, authorization, fMessageId, fOrigin)

Get Nominated Person

Gets the Nominated Person for Cardholder    Sample request:                    GET /api/Account/400000000000/NominatedPerson

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "f1f46095-0f0b-4f42-be62-b92c7e55659b"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountIdNominatedPersonGet(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to f1f46095-0f0b-4f42-be62-b92c7e55659b]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**NominatedPersonGetViewModelValidResponsePackage**](NominatedPersonGetViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdNominatedPersonPatch"></a>
# **apiAccountIdNominatedPersonPatch**
> NominatedPersonPutViewModelValidResponsePackage apiAccountIdNominatedPersonPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Update Nominated Person

Update a Nominated Person for Cardholder    Sample request:                    POST /api/Account/400000000000/NominatedPerson      {              \&quot;firstName\&quot; : \&quot;User\&quot;,              \&quot;lastName\&quot; : \&quot;Test\&quot;,              \&quot;address1\&quot; : \&quot;Address\&quot;,              \&quot;postCode\&quot; : \&quot;ABC123\&quot;,              \&quot;countryCode\&quot; : \&quot;GB\&quot;,              \&quot;dateOfBirth\&quot; : \&quot;20/12/1960\&quot;,              \&quot;placeOfBirth\&quot; : \&quot;Anywhere\&quot;,              \&quot;email\&quot; : \&quot;acme@acme.com\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "ec68348c-7f15-440b-bcf2-f427ee09cc15"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.NominatedPersonBindingModel() // NominatedPersonBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdNominatedPersonPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to ec68348c-7f15-440b-bcf2-f427ee09cc15]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**NominatedPersonBindingModel**](NominatedPersonBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**NominatedPersonPutViewModelValidResponsePackage**](NominatedPersonPutViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdNominatedPersonPost"></a>
# **apiAccountIdNominatedPersonPost**
> NominatedPersonPutViewModelValidResponsePackage apiAccountIdNominatedPersonPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Create Nominated Person

Create a Nominated Person for Cardholder    Sample request:                    POST /api/Account/400000000000/NominatedPerson      {              \&quot;firstName\&quot; : \&quot;User\&quot;,              \&quot;lastName\&quot; : \&quot;Test\&quot;,              \&quot;address1\&quot; : \&quot;Address\&quot;,              \&quot;postCode\&quot; : \&quot;ABC123\&quot;,              \&quot;countryCode\&quot; : \&quot;GB\&quot;,              \&quot;dateOfBirth\&quot; : \&quot;1960-01-14\&quot;,              \&quot;placeOfBirth\&quot; : \&quot;Anywhere\&quot;,              \&quot;email\&quot; : \&quot;acme@acme.com\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "74860801-0fb5-4a5d-ad17-e4cc4b259918"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.NominatedPersonBindingModel() // NominatedPersonBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdNominatedPersonPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 74860801-0fb5-4a5d-ad17-e4cc4b259918]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**NominatedPersonBindingModel**](NominatedPersonBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**NominatedPersonPutViewModelValidResponsePackage**](NominatedPersonPutViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdPINReminderGet"></a>
# **apiAccountIdPINReminderGet**
> PINReminderViewModelValidResponsePackage apiAccountIdPINReminderGet(id, apiVersion, authorization, fMessageId, fOrigin)

PIN Reminder

Sends a Card&#x27;s PIN via SMS to the registered phone number of a Cardholder.    Sample request:        GET /api/Account/400000000000/PINReminder

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder Id
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "870bd758-abf8-4d60-98ae-021bcc5cd669"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountIdPINReminderGet(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder Id | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 870bd758-abf8-4d60-98ae-021bcc5cd669]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**PINReminderViewModelValidResponsePackage**](PINReminderViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdPatch"></a>
# **apiAccountIdPatch**
> AccountUpdateViewModelValidResponsePackage apiAccountIdPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Update Cardholder

Updates a Cardholder’s demographic data. All data entered will override existing data. If data is unchanged, mandatory fields should be filled with existing registered data.    Sample request:            PATCH /api/Account/400000000000      {          \&quot;firstName\&quot;: \&quot;UpdateName\&quot;,          \&quot;middleInitial\&quot;: \&quot;\&quot;,          \&quot;lastName\&quot;: \&quot;UpdateLast\&quot;,          \&quot;address1\&quot;: \&quot;UpdateAddr1\&quot;,          \&quot;address2\&quot;: \&quot;UpdateAddr2\&quot;,          \&quot;city\&quot;: \&quot;Bobbyland\&quot;,          \&quot;zipCode\&quot;: \&quot;BOB8547\&quot;,          \&quot;countryCode\&quot;: \&quot;ES\&quot;,          \&quot;dateOfBirth\&quot;: \&quot;1999-01-07\&quot;,          \&quot;securityQuestion\&quot;: \&quot;secfield1\&quot;,          \&quot;securityAnswer\&quot;: \&quot;secans1\&quot;,          \&quot;landline\&quot;: \&quot;041|22365855238\&quot;,          \&quot;email\&quot;: \&quot;updatetes@sdds.com\&quot;,          \&quot;userDefined2\&quot;: \&quot;2\&quot;,          \&quot;distributorCode\&quot;: \&quot;{{DC}}\&quot;,          \&quot;cardStyle\&quot;: \&quot;01\&quot;,          \&quot;zip2\&quot;: \&quot;TST0955\&quot;,          \&quot;phone\&quot;: \&quot;0044|11111111\&quot;,          \&quot;mobileNo\&quot;: \&quot;0044|99999999\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "e4f83179-0661-46d3-a608-8e284f6bb80b"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.AccountUpdateBindingModel() // AccountUpdateBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to e4f83179-0661-46d3-a608-8e284f6bb80b]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**AccountUpdateBindingModel**](AccountUpdateBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**AccountUpdateViewModelValidResponsePackage**](AccountUpdateViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdPayeeGet"></a>
# **apiAccountIdPayeeGet**
> PayeesViewModelValidResponsePackage apiAccountIdPayeeGet(id, apiVersion, authorization, fMessageId, fOrigin)

OFAC Payee Inquiry

Get payee details of a particular cardholder.    Sample request:                    GET /api/Account/400000000000/Payee

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "77526500-e470-4851-92d9-e57e5cc8784b"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountIdPayeeGet(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 77526500-e470-4851-92d9-e57e5cc8784b]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**PayeesViewModelValidResponsePackage**](PayeesViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdPhysicalCardPatch"></a>
# **apiAccountIdPhysicalCardPatch**
> PhysicalCardViewModelValidResponsePackage apiAccountIdPhysicalCardPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Request Physical Card

Request a physical card for an existing virtual card. Once a successful response is received the Delivery Type parameter will change from ‘VC’ to ‘PC’.     &#x27;userdefined&#x27; parameter can be ignored unless told otherwise.    Sample request:                    PATCH /api/Account/400000000000/PhysicalCard             {          \&quot;cardStyle\&quot;: \&quot;01\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "026b31a1-6ef3-4902-9d0e-1da7afefba2d"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.PhysicalCardBindingModel() // PhysicalCardBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdPhysicalCardPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 026b31a1-6ef3-4902-9d0e-1da7afefba2d]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**PhysicalCardBindingModel**](PhysicalCardBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**PhysicalCardViewModelValidResponsePackage**](PhysicalCardViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdPinPost"></a>
# **apiAccountIdPinPost**
> PinViewModelValidResponsePackage apiAccountIdPinPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Request PIN

Retrieves an encrypted PIN for a given Cardholder ID.   The encryption algorithm used is AES.  The cipher mode used is ECB.  No IV is required.    At least one optional field must be passed as verification.    Sample request:                    POST /api/Account/400000000000/Pin      {          \&quot;phone\&quot; : \&quot;77225522\&quot;,          \&quot;address\&quot; : \&quot;RAMLA ROAD\&quot;,          \&quot;zipCode\&quot; : \&quot;NDR9074\&quot;,          \&quot;securityQuestion\&quot; : \&quot;Favourite Football Team\&quot;,          \&quot;securityAnswer\&quot; : \&quot;Arsenal\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "996447e7-2ecc-40d7-a292-f65a8db9e92d"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.PinBindingModel() // PinBindingModel | 
};
apiInstance.apiAccountIdPinPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 996447e7-2ecc-40d7-a292-f65a8db9e92d]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**PinBindingModel**](PinBindingModel.md)|  | [optional] 

### Return type

[**PinViewModelValidResponsePackage**](PinViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdPurchaseOnUsPost"></a>
# **apiAccountIdPurchaseOnUsPost**
> PurchaseOnUsViewModelValidResponsePackage apiAccountIdPurchaseOnUsPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

PurchaseOnUs

Create a new PurchaseOnUs transaction.    Sample request:                    POST /api/Account/400000000000/PurchaseOnUs      {         \&quot;amount\&quot;: 150,         \&quot;currencyCode\&quot;: \&quot;GBP\&quot;,         \&quot;feeCode\&quot;: \&quot;**POU\&quot;,         \&quot;description\&quot;: \&quot;Test purchase on us\&quot;,         \&quot;terminalOwner\&quot;: \&quot;Test merchant\&quot;,         \&quot;terminalLocation\&quot;: \&quot;Test location\&quot;,         \&quot;terminalId\&quot; : \&quot;Terminal ID\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "4cf528ee-f866-415e-b07b-686ea7651729"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.PurchaseOnUsBindingModelV2() // PurchaseOnUsBindingModelV2 | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdPurchaseOnUsPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 4cf528ee-f866-415e-b07b-686ea7651729]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**PurchaseOnUsBindingModelV2**](PurchaseOnUsBindingModelV2.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**PurchaseOnUsViewModelValidResponsePackage**](PurchaseOnUsViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdRedeemKycCodePatch"></a>
# **apiAccountIdRedeemKycCodePatch**
> KycRedeemCodeViewModelValidResponsePackage apiAccountIdRedeemKycCodePatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

KYC Redeem Code

Redeem a KYC Code.    Sample request:                    PATCH /api/Account/400000000000/RedeemKycCode/Code&#x3D;53149      {      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "baba0d37-1c76-4209-b482-4f43503962e1"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'code': "code_example" // String | KYC Code.
};
apiInstance.apiAccountIdRedeemKycCodePatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to baba0d37-1c76-4209-b482-4f43503962e1]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **code** | **String**| KYC Code. | [optional] 

### Return type

[**KycRedeemCodeViewModelValidResponsePackage**](KycRedeemCodeViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdRegisterClientPatch"></a>
# **apiAccountIdRegisterClientPatch**
> RegisterViewModelValidResponsePackage apiAccountIdRegisterClientPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Register client

Password needs to be encrypted.  The encryption algorithm used is AES.    The cipher mode used is ECB.  No IV is required.    Sample request:                    PATCH /api/Account/400000000000/RegisterClient      {          \&quot;name\&quot;: \&quot;TName\&quot;,          \&quot;username\&quot;: \&quot;TUsername\&quot;,          \&quot;password\&quot;: \&quot;65125A9FA419EC26E9E5D0BEC03B0472\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | 
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "c7d6530f-e307-40e1-b977-640936609461"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.RegisterClientBindingModel() // RegisterClientBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdRegisterClientPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to c7d6530f-e307-40e1-b977-640936609461]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**RegisterClientBindingModel**](RegisterClientBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**RegisterViewModelValidResponsePackage**](RegisterViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdReissuePost"></a>
# **apiAccountIdReissuePost**
> ReissueV2ViewModelValidResponsePackage apiAccountIdReissuePost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Reissue

The Reissue API will create a new card associated the details saved against the old card. A new CHID, CVV, PAN and Expiry will be generated.   All other details and configurations will be moved to the new card.    The reissuance process takes place in two phases.    Phase 1 - triggered by the Reissue API.  &lt;ul&gt;&lt;li&gt;New card created&lt;/li&gt;&lt;li&gt;Demographic data copied&lt;/li&gt;&lt;li&gt;Callout registered&lt;/li&gt;&lt;li&gt;MCC blocklist updated&lt;/li&gt;&lt;li&gt;KYC documents transferred to the new card&lt;/li&gt;&lt;li&gt;Fee charged (if applicable)&lt;/li&gt;&lt;/ul&gt;                    Phase 2 - triggered by the expiry of the old card or the activation of the new card.  &lt;ul&gt;&lt;li&gt;Balance transferred (If multicurrency, wallets are created and the balance moved)&lt;/li&gt;&lt;li&gt;Banking details, Payees, Direct Debits/Recurring Payments instructions transferred&lt;/li&gt;&lt;li&gt;Secondary card links moved&lt;/li&gt;&lt;li&gt;Old card closed&lt;/li&gt;&lt;/ul&gt;      For a card to be reissued, it must not be in Closed, PNV or Stolen status. When a card is in DepositOnly status, the replace flow will change the status temporarily to Active for movement of funds and fees, then back to DepositOnly status.

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "9805fc3d-335a-4e89-b889-97842dbc325c"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.ReissueBindingModel() // ReissueBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdReissuePost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 9805fc3d-335a-4e89-b889-97842dbc325c]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**ReissueBindingModel**](ReissueBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**ReissueV2ViewModelValidResponsePackage**](ReissueV2ViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdRemoveLoadLimitDelete"></a>
# **apiAccountIdRemoveLoadLimitDelete**
> RemoveLoadLimitViewModelValidResponsePackage apiAccountIdRemoveLoadLimitDelete(id, apiVersion, authorization, fMessageId, fOrigin)

Remove Load Limit

Removes load limits for a given Cardholder ID.    Sample request:        DELETE /api/Account/400000000000/RemoveLoadLimit

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | 
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "3393389a-0f61-4815-a2c7-eaf9609df47f"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountIdRemoveLoadLimitDelete(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 3393389a-0f61-4815-a2c7-eaf9609df47f]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**RemoveLoadLimitViewModelValidResponsePackage**](RemoveLoadLimitViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdReplacePost"></a>
# **apiAccountIdReplacePost**
> ReplaceViewModelV2ValidResponsePackage apiAccountIdReplacePost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Replace

The Replacement API will create a new card using the details of the old card, move over the balances, close the old card and finally, copy over the old card&#x27;s configurations to the new card which include:        1. Load limits      2. Secondary cards      3. MCC Blocks      4. KYC Documents      5. Recurring payment      6. Standing orders      7. Payee information    For a card to be replaced, it must not be in Closed or PNV status.   The statusForOldAccount field should only be used to define how the card will be closed and any status that is not considered as a closed card will not be accepted. This means the only options that are accepted in this parameter are 9- Closed, 2- Lost, 3- Stolen.  When a card is in DepositOnly status, the replace flow will change the status temporarily to Active for movement of funds and fees, then back to DepositOnly status.    Sample request:        POST /api/Account/400000000000/Replace      {          \&quot;replaceReason\&quot;: \&quot;testing finac\&quot;,          \&quot;statusForOldAccount\&quot;: \&quot;9\&quot;,          \&quot;embossName\&quot;: \&quot;TEST TEST\&quot;,          \&quot;retainPin\&quot;: true,          \&quot;newPin\&quot;: \&quot;\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "21adc547-ce45-4264-b84f-4fa6d4d0f140"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.ReplaceBindingModel() // ReplaceBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdReplacePost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 21adc547-ce45-4264-b84f-4fa6d4d0f140]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**ReplaceBindingModel**](ReplaceBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**ReplaceViewModelV2ValidResponsePackage**](ReplaceViewModelV2ValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdResendKycCodePost"></a>
# **apiAccountIdResendKycCodePost**
> KycResendCodeViewModelValidResponsePackage apiAccountIdResendKycCodePost(id, apiVersion, authorization, fMessageId, fOrigin)

KYC Resend Code

Resend a KYC Code.    Sample request:                    POST /api/Account/400000000000/ResendKycCode      {      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "4f421758-caeb-449b-abf1-1384e73a8aa7"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountIdResendKycCodePost(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 4f421758-caeb-449b-abf1-1384e73a8aa7]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**KycResendCodeViewModelValidResponsePackage**](KycResendCodeViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdResetPasswordPatch"></a>
# **apiAccountIdResetPasswordPatch**
> ResetPasswordViewModelValidResponsePackage apiAccountIdResetPasswordPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Reset Password

Reset&#x27;s the password of a given Cardholder ID.    Sample request:                    PATCH /api/Account/400000000000/ResetPasword             {          \&quot;newPassword\&quot;: \&quot;001CC9FF422A1F1B95FF39ECE3A17C77\&quot;,          \&quot;verificationCode\&quot;: \&quot;172073\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "3e919942-d3d9-4dc9-9a84-f598a09b7b89"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.ResetPasswordBindingModel() // ResetPasswordBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdResetPasswordPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 3e919942-d3d9-4dc9-9a84-f598a09b7b89]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**ResetPasswordBindingModel**](ResetPasswordBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**ResetPasswordViewModelValidResponsePackage**](ResetPasswordViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdSecondaryGet"></a>
# **apiAccountIdSecondaryGet**
> SecondaryAccountViewModelValidResponsePackage apiAccountIdSecondaryGet(id, apiVersion, authorization, fMessageId, fOrigin)

Secondary Cards

Returns the Cardholder ID&#x27;s of all secondary cards/accounts linked to a Cardholder ID.    Sample request:                    GET /api/Account/400000000000/Secondary

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "253f01b0-4733-4407-81a3-4d0981ef0360"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountIdSecondaryGet(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 253f01b0-4733-4407-81a3-4d0981ef0360]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**SecondaryAccountViewModelValidResponsePackage**](SecondaryAccountViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdSensitiveDataTokenPost"></a>
# **apiAccountIdSensitiveDataTokenPost**
> SensitiveDataTokenViewModelValidResponsePackage apiAccountIdSensitiveDataTokenPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Sensitive Data Token

Generate a Data Token, which is encrypted by the encryption key provided.    &#x27;SensitiveDataType&#x27; has the following options:            • &#x27;CardNumber&#x27;          • &#x27;Pin&#x27;            &#x27;CipherAlgorithm&#x27; has the following options:            • &#x27;SHA256&#x27;          • &#x27;SHA512&#x27;    Sample request:                    POST /api/Account/400000000000/SensitiveDataToken      {          \&quot;dateOfBirth\&quot;: \&quot;1990-01-01\&quot;,          \&quot;codeChallenge\&quot;: \&quot;M1t14BXbvfPdDcMBDPlf\&quot;,          \&quot;sensitiveDataType\&quot;: \&quot;CardNumber\&quot;,          \&quot;css\&quot;: \&quot;www.urlcss.com\&quot;,          \&quot;cipherAlgorithm\&quot;: \&quot;SHA512\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder Id
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "f7a17169-6f17-47c9-ae70-4f6fff9e369f"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.SensitiveDataTokenBindingModel() // SensitiveDataTokenBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdSensitiveDataTokenPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder Id | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to f7a17169-6f17-47c9-ae70-4f6fff9e369f]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**SensitiveDataTokenBindingModel**](SensitiveDataTokenBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**SensitiveDataTokenViewModelValidResponsePackage**](SensitiveDataTokenViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdSpendControlGet"></a>
# **apiAccountIdSpendControlGet**
> GetSpendControlViewModelValidResponsePackage apiAccountIdSpendControlGet(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Get Spend Limits

Retreive spend limits for a card.    This endpoint works for Trace cards.    Sample request:                    GET /api/Account/400000000000/SpendControl

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder Id
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "66a89e44-d44a-4771-a45a-8b64be839f88"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'currencyCode': "currencyCode_example" // String | Currency code (ISO-4217) 3 letter currency code
};
apiInstance.apiAccountIdSpendControlGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder Id | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 66a89e44-d44a-4771-a45a-8b64be839f88]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **currencyCode** | **String**| Currency code (ISO-4217) 3 letter currency code | [optional] 

### Return type

[**GetSpendControlViewModelValidResponsePackage**](GetSpendControlViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdSpendControlPost"></a>
# **apiAccountIdSpendControlPost**
> SpendControlViewModelValidResponsePackage apiAccountIdSpendControlPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Spend Control

Set limits for Trace cards. All limit settings must have a value, missing or null values mean that the limit is turned off at card level.    For multicurrency cards, limit values has to be set for each currency wallet. If currency is not provided in the request, the limit will be set for the account’s default currency    Sample request:                    POST /api/Account/400000000000/SpendControl      {          \&quot;spendControlGroupName\&quot;: \&quot;TestGroup1\&quot;,          \&quot;currencyCode\&quot;: \&quot;GBP\&quot;,          \&quot;applyToLinkedCards\&quot;: false      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | CardholderId
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "7d5f71f6-22db-49a0-b63c-5b3768277bfa"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.SpendControlBindingModel() // SpendControlBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdSpendControlPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CardholderId | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 7d5f71f6-22db-49a0-b63c-5b3768277bfa]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**SpendControlBindingModel**](SpendControlBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**SpendControlViewModelValidResponsePackage**](SpendControlViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdStatusGet"></a>
# **apiAccountIdStatusGet**
> GetStatusViewModelValidResponsePackage apiAccountIdStatusGet(id, apiVersion, authorization, fMessageId, fOrigin)

Card Status

Returns the status of a given Cardholder ID (e.g. Open, Deposit Only).     Status codes:         • 0  Issued not Active      • 1  Open (Activate)      • 2  Lost      • 3  Stolen      • 4  Deposit Only      • 6  Check Reason      • 8  Fraud      • 9  Closed      • A  Pin Change Required      • C  Phone Number Verification      • E  Expired      • Q  Temporary Block    Sample request:                    GET /api/Account/400000000000/Status

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "fd7ee210-c4c5-4a91-8ccd-0ac1b92159c7"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountIdStatusGet(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to fd7ee210-c4c5-4a91-8ccd-0ac1b92159c7]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**GetStatusViewModelValidResponsePackage**](GetStatusViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdStatusPatch"></a>
# **apiAccountIdStatusPatch**
> ChangeStatusViewModelValidResponsePackage apiAccountIdStatusPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Change Card Status

Changes the status of a card.  Used to activate cards, to lock a card or account and to permanently close an account. Once an account is closed the status cannot be changed.    Status code:        • 0  Issued not Active      • 1  Open (Activate)         • 4  Deposit Only      • 9  Closed    Sample request:                    POST /api/Account/400000000000/Status      {          \&quot;status\&quot;: \&quot;1\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "25368100-505a-45fd-af06-1ce32a156ba1"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.ChangeStatusBindingModel() // ChangeStatusBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdStatusPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 25368100-505a-45fd-af06-1ce32a156ba1]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**ChangeStatusBindingModel**](ChangeStatusBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**ChangeStatusViewModelValidResponsePackage**](ChangeStatusViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdToggleIbanGet"></a>
# **apiAccountIdToggleIbanGet**
> GetToggleIbanViewModelValidResponsePackage apiAccountIdToggleIbanGet(id, apiVersion, authorization, fMessageId, fOrigin)

Toggle IBAN

This function is used to retrieve a list of Iban toggles using cardholder provided.    Sample request:                    GET /api/Account/400000000000/ToggleIban

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "aff005b5-cf83-45f8-af78-ce0bc9353d5e"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountIdToggleIbanGet(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to aff005b5-cf83-45f8-af78-ce0bc9353d5e]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**GetToggleIbanViewModelValidResponsePackage**](GetToggleIbanViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdToggleIbanPatch"></a>
# **apiAccountIdToggleIbanPatch**
> ToggleIbanViewModelValidResponsePackage apiAccountIdToggleIbanPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Toggle IBAN

Turns the IBAN of a card on or off. Enabling or disabling bank payments. Does not change the status of the card.    Sample request:                    PATCH /api/Account/400000000000/ToggleIban             {          \&quot;toggleIban\&quot;: true      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "ad8e220b-ac9e-4335-a1bf-617104267290"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.ToggleIbanBindingModel() // ToggleIbanBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdToggleIbanPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to ad8e220b-ac9e-4335-a1bf-617104267290]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**ToggleIbanBindingModel**](ToggleIbanBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**ToggleIbanViewModelValidResponsePackage**](ToggleIbanViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdTransactionsGet"></a>
# **apiAccountIdTransactionsGet**
> TransactionsViewModelValidResponsePackage apiAccountIdTransactionsGet(id, startDate, endDate, apiVersion, authorization, fMessageId, fOrigin, opts)

Transaction History

Returns a list of all transactions through a Cardholder&#x27;s account, between the dates provided (e.g. fees, transfers, purchases etc.).   Each call, retrieves one currency. The transactions are returned in chronological order with the most recent transactions appearing last.    &lt;b&gt;Pagination&lt;/b&gt; is used in this endpoint, because depending on the date range that it is selected, the response or list of transactions could be very long. For example, if a Cardholder has 10 transactions and the request is PageNo &#x3D; 1 and PageSize &#x3D; 5, there will be 2 pages with 5 transactions each. If PageNo &#x3D; 1 and PageSize &#x3D; 2, there will be 2 transactions in each page, for 5 pages.    For TRACE Bins Only:  When a card is replaced or reissued, the old card wallet will be used for the new card as well.  Therefore when this API is requested, since transactions are retrieved by the wallet id(be default), all transactions in that wallet will be retrieved for all cards which made a transaction.      Sample request:                    GET /api/Account/400000000000/Transactions?StartDate&#x3D;2000-01-01&amp;EndDate&#x3D;2018-03-01      Sample response (TRACE processor):         {                \&quot;date\&quot;: \&quot;2020-12-11T12:29:18.392Z\&quot;,         \&quot;transactionType\&quot;: \&quot;C\&quot;,         \&quot;cardType\&quot;: \&quot;Credit\&quot;,         \&quot;mti\&quot;: \&quot;\&quot;,         \&quot;arn\&quot;: \&quot;\&quot;,         \&quot;stn\&quot;: \&quot;\&quot;,         \&quot;authenticationNumber\&quot;: \&quot;162077\&quot;,         \&quot;recordType\&quot;: \&quot;\&quot;,         \&quot;transactionOrigin\&quot;: \&quot;Ecommerce\&quot;,         \&quot;transactionDescription\&quot;: \&quot;string\&quot;,         \&quot;amount\&quot;: \&quot;100\&quot;,         \&quot;fee\&quot;: \&quot;0\&quot;,         \&quot;availableBalance\&quot;: \&quot;110\&quot;,         \&quot;ledgerBalance\&quot;: \&quot;110\&quot;,         \&quot;clientId\&quot;: \&quot;\&quot;,         \&quot;terminalID\&quot;: \&quot;string\&quot;,         \&quot;terminalLocation\&quot;: \&quot;string\&quot;,         \&quot;terminalOwner\&quot;: \&quot;string\&quot;,         \&quot;terminalCity\&quot;: \&quot;string\&quot;,         \&quot;terminalState\&quot;: \&quot;string\&quot;,         \&quot;terminalCountry\&quot;: \&quot;string\&quot;,         \&quot;terminalCurrency\&quot;: \&quot;\&quot;,         \&quot;mcc\&quot;: \&quot;0\&quot;,         \&quot;surcharge\&quot;: \&quot;0\&quot;,         \&quot;issuerFee\&quot;: \&quot;0\&quot;,         \&quot;responseCode\&quot;: \&quot;|Authorize\&quot;,         \&quot;foreignExchangeFee\&quot;: \&quot;0\&quot;,         \&quot;currency\&quot;: \&quot;GBP\&quot;,         \&quot;transactionCodeDescription\&quot;: \&quot;DEPOSIT TO CARD - FUNCTION 007\&quot;,         \&quot;transactionResult\&quot;: \&quot;Approved\&quot;,         \&quot;originalTransactionAmount\&quot;: \&quot;0\&quot;,         \&quot;conversionRate\&quot;: 1.0,         \&quot;originalHoldAmount\&quot;: \&quot;0\&quot;,         \&quot;cardAcceptorIdCode\&quot;: \&quot;string\&quot;,         \&quot;actionCodeDescription\&quot;: \&quot;\&quot;,         \&quot;acquiringInstitution\&quot;: \&quot;000000\&quot;,         \&quot;processor\&quot;: \&quot;\&quot;,         \&quot;posEntryMode\&quot;: \&quot;UnkownMode\&quot;,         \&quot;atmFee\&quot;: \&quot;0\&quot;,         \&quot;walletProvider\&quot;: \&quot;\&quot;,         \&quot;cardId\&quot;: \&quot;PFS11588867010000100013\&quot;,         \&quot;walletId\&quot;: \&quot;PFS1158886701000018261\&quot;,         \&quot;uniqueReference\&quot;: \&quot;\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder Id.
let startDate = "startDate_example"; // String | Start date of transactions, inclusive. Field is required. YYYY-MM-DD
let endDate = "endDate_example"; // String | End date of transactions, inclusive. Field is required. YYYY-MM-DD
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "931df5ed-31dd-44e1-9c5d-d26566e620d2"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'settlementsOnly': true, // Boolean | Determines data shown  True, will return the Authorisation entry unless the transaction has been Cleared. In which case it will return the Cleared entry only.  False, will return both the Authorisation and Cleared entries. (Two entries may be visible for each transaction)
  'currency': "currency_example", // String | Currency (ISO-4217) to query for at M2 Processor.
  'tradeWallet': "tradeWallet_example", // String | 
  'walletId': "walletId_example", // String | Transcations will be returend only for this wallet, if not set transactions are returned for the default Wallet. This filter affects only Trace cards.
  'cardOnly': true, // Boolean | This filter affects only Trace cards.    True: transactions will be returned only for the card related to the CardholderId. Transactions for linked accounts are not returned.   False: (default) transactions for the default wallet will be returned or they can be filtered by WalletId.
  'pageNo': 56, // Number | 
  'pageSize': 56 // Number | 
};
apiInstance.apiAccountIdTransactionsGet(id, startDate, endDate, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder Id. | 
 **startDate** | **String**| Start date of transactions, inclusive. Field is required. YYYY-MM-DD | 
 **endDate** | **String**| End date of transactions, inclusive. Field is required. YYYY-MM-DD | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 931df5ed-31dd-44e1-9c5d-d26566e620d2]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **settlementsOnly** | **Boolean**| Determines data shown  True, will return the Authorisation entry unless the transaction has been Cleared. In which case it will return the Cleared entry only.  False, will return both the Authorisation and Cleared entries. (Two entries may be visible for each transaction) | [optional] 
 **currency** | **String**| Currency (ISO-4217) to query for at M2 Processor. | [optional] 
 **tradeWallet** | **String**|  | [optional] 
 **walletId** | **String**| Transcations will be returend only for this wallet, if not set transactions are returned for the default Wallet. This filter affects only Trace cards. | [optional] 
 **cardOnly** | **Boolean**| This filter affects only Trace cards.    True: transactions will be returned only for the card related to the CardholderId. Transactions for linked accounts are not returned.   False: (default) transactions for the default wallet will be returned or they can be filtered by WalletId. | [optional] 
 **pageNo** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 

### Return type

[**TransactionsViewModelValidResponsePackage**](TransactionsViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdTransferDetailsPost"></a>
# **apiAccountIdTransferDetailsPost**
> TransferDetailsViewModelValidResponsePackage apiAccountIdTransferDetailsPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Transfer Details

Transfers balance and demographic data from one card/account to another.    Sample request:                    POST /api/Account/400000000000/Transfer      {          \&quot;toId\&quot;: \&quot;400000000000\&quot;,          \&quot;username\&quot;: \&quot;josef.muscat\&quot;,          \&quot;reason\&quot;: \&quot;Transferring details.\&quot;      }                When a card is in DepositOnly status, the transfer flow will change the status temporarily to Active for movement of funds and fees, then back to DepositOnly status.

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "3ebe9bc9-eea1-4591-a28e-d549ab619bfd"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.TransferDetailsBindingModel() // TransferDetailsBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdTransferDetailsPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 3ebe9bc9-eea1-4591-a28e-d549ab619bfd]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**TransferDetailsBindingModel**](TransferDetailsBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**TransferDetailsViewModelValidResponsePackage**](TransferDetailsViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdUpgradeCardPost"></a>
# **apiAccountIdUpgradeCardPost**
> UpgradeCardViewModelValidResponsePackage apiAccountIdUpgradeCardPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Upgrade Product Type

Upgrades the product type of a given Cardholder ID. Increasing load limits and removing specified MCC blocks.                0 &#x3D; Anonymous  1 &#x3D; SDD  2 &#x3D; KYC    Sample request:                    POST /api/Account/400000000000/UpgradeCard      {          \&quot;productType\&quot;: \&quot;2\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder Id
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "ea7eef76-a853-4816-98f1-eb48f8050df8"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.UpgradeCardBindingModel() // UpgradeCardBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdUpgradeCardPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder Id | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to ea7eef76-a853-4816-98f1-eb48f8050df8]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**UpgradeCardBindingModel**](UpgradeCardBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**UpgradeCardViewModelValidResponsePackage**](UpgradeCardViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountIdUsageGet"></a>
# **apiAccountIdUsageGet**
> CardUsageViewModelValidResponsePackage apiAccountIdUsageGet(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Card Usage

Gets the card usage by cardholder Id and the optional currency.   If no currency provided, the default currency of the card will be used.    Sample request:        GET /api/Account/400000000000/Usage?Currency&#x3D;EUR

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder Id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "6e44d70d-8940-4d93-824f-9e0bddf5f385"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'currency': "currency_example" // String | Currency (ISO-4217) to query. Default value it the currency of the card
};
apiInstance.apiAccountIdUsageGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder Id. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 6e44d70d-8940-4d93-824f-9e0bddf5f385]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **currency** | **String**| Currency (ISO-4217) to query. Default value it the currency of the card | [optional] 

### Return type

[**CardUsageViewModelValidResponsePackage**](CardUsageViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountIdUseDataTokenGet"></a>
# **apiAccountIdUseDataTokenGet**
> apiAccountIdUseDataTokenGet(id, apiVersion, opts)

Use Data Token

Validates a data token against the code verifier and other conditions. If successful, depending on the requested data type in the token,   the HTML template is returned accordingly.    Sample request:                    GET /api/Account/400000000000/UseDataToken?dataToken&#x3D;1EA4D84D1830D0E59B07AC1D2EEB29B84BC07E17F3ACEB3E1D60E3FE5F0665444EF17B919B1567921DA7DB7FA13492C1A7F764B4986710314678AF7C835C72D3EEB88581752FEFF808E43658997FC5B608C5CC4B4B3B2341EA9D508A999216D74C7E96FE247EEC2BC880FC5781036DB717CA8FBF455A6ED260AE98FF2CF5BE730A618CA71332ECFC4E015671EAC044746D64B5BCE6697BBD0EFBED9D090C7BB1B3B99114FBFE24E06346EB569D306E804821264B69E8C77CBD4CCF57FF4C311956574EF6BF9483F3247B771B933346960AAC0BFEE53B2AD8C0A738ECC16D8CAEC5B9614E2DFAE68B51ADD9B592B1FA3F4583E85911D24E718B46F1F60006B764&amp;codeVerifier&#x3D;Password

### Example
```javascript
import {FinacApi} from 'finac_api';

let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder Id
let apiVersion = "2.0"; // String | 
let opts = { 
  'codeVerifier': "codeVerifier_example", // String | 
  'dataToken': "dataToken_example", // String | 
  'fMessageId': "4b0beb98-618b-4d1e-ad1c-bdab51b05dfd", // String | Unique identifier
  'fOrigin': "swagger" // String | Origin of request
};
apiInstance.apiAccountIdUseDataTokenGet(id, apiVersion, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder Id | 
 **apiVersion** | **String**|  | [default to 2.0]
 **codeVerifier** | **String**|  | [optional] 
 **dataToken** | **String**|  | [optional] 
 **fMessageId** | **String**| Unique identifier | [optional] [default to 4b0beb98-618b-4d1e-ad1c-bdab51b05dfd]
 **fOrigin** | **String**| Origin of request | [optional] [default to swagger]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

<a name="apiAccountIdValidatePinPost"></a>
# **apiAccountIdValidatePinPost**
> ValidatePinViewModelValidResponsePackage apiAccountIdValidatePinPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Validate PIN

Checks a given PIN against a Cardholder ID. After three failed checks, all subsequent check will fail.    Sample request:                    POST /api/Account/400000000000/ValidatePin      {          \&quot;pin\&quot;: \&quot;3D9F8765D1FF4543BF02021BD99E7D8B\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let id = "id_example"; // String | Cardholder Id
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "ed75707d-0708-487a-962d-6f8b3b101e1b"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.ValidatePinBindingModel() // ValidatePinBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountIdValidatePinPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Cardholder Id | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to ed75707d-0708-487a-962d-6f8b3b101e1b]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**ValidatePinBindingModel**](ValidatePinBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**ValidatePinViewModelValidResponsePackage**](ValidatePinViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountKYCUploadDocumentsPost"></a>
# **apiAccountKYCUploadDocumentsPost**
> KYCUploadDocumentsViewModelValidResponsePackage apiAccountKYCUploadDocumentsPost(apiVersion, authorization, fMessageId, fOrigin, opts)

KYC Upload Documents

Sample request:                    POST /api/Account/KYCUploadDocuments      {          \&quot;id\&quot;: \&quot;400000000000\&quot;,          \&quot;useWebSolution\&quot; : false,          \&quot;language\&quot; : \&quot;EN\&quot;,          \&quot;successUrl\&quot; : \&quot;https://www.yourcompany.com/success\&quot;,          \&quot;failureURL\&quot; : \&quot;https://www.yourcompany.com/error\&quot;,      }            POST /api/Account/KYCUploadDocuments      {          \&quot;issuingId\&quot;: \&quot;12345\&quot;      }                    Language parameter is optional, default value is \&quot;EN\&quot;      SuccessUrl parameter is optional      FailureURL parameter is optional

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "e2f539d4-e8d0-41ac-9e65-4befbc100e42"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.KYCUploadDocumentsBindingModel() // KYCUploadDocumentsBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountKYCUploadDocumentsPost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to e2f539d4-e8d0-41ac-9e65-4befbc100e42]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**KYCUploadDocumentsBindingModel**](KYCUploadDocumentsBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**KYCUploadDocumentsViewModelValidResponsePackage**](KYCUploadDocumentsViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountLoginPost"></a>
# **apiAccountLoginPost**
> ValidateLoginViewModelValidResponsePackage apiAccountLoginPost(apiVersion, authorization, fMessageId, fOrigin, opts)

Validate Login

Checks email or ID or username against password provided.    Validate login either by email and password or by cardholder id and password or by username and password.    Sample request:            POST /api/Account/Login      {          \&quot;id\&quot;: \&quot;400000000000\&quot;,          \&quot;email\&quot;: \&quot;\&quot;,          \&quot;password\&quot;: \&quot;5EC9953B9423262F36310EF7DD438809\&quot;,          \&quot;username\&quot;: \&quot;\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "08e3b547-a3e8-46a0-a7ff-31c55f56a50a"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.ValidateLoginBindingModel() // ValidateLoginBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountLoginPost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 08e3b547-a3e8-46a0-a7ff-31c55f56a50a]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**ValidateLoginBindingModel**](ValidateLoginBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**ValidateLoginViewModelValidResponsePackage**](ValidateLoginViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountNumberOfDocumentsGet"></a>
# **apiAccountNumberOfDocumentsGet**
> GetNumberOfDocumentsViewModelValidResponsePackage apiAccountNumberOfDocumentsGet(apiVersion, authorization, fMessageId, fOrigin, opts)

Get Number of Documents

Gets whether documents are required (MaximumDocuments: 4) and the number of documents currently in the system.    &#x27;DocumentNumber&#x27; and &#x27;DocumentType&#x27; are required, whilst &#x27;IssuingId&#x27; and &#x27;Id&#x27; are optional.    &#x27;IdCountValid&#x27; is true if the number of documents is less than 4, whilst if the number is greater or equal to 4 &#x27;IdCountValid&#x27; will be false if both &#x27;Id&#x27; and &#x27;IssuingId&#x27; are null.  If there is an assigned document for &#x27;Id&#x27; or &#x27;IssuingId&#x27;, &#x27;IdCountValid&#x27; will be true.    Sample request:                    GET /api/Account/NumberOfDocuments?DocumentType&#x3D;Passport&amp;DocumentNumber&#x3D;1137702

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "c54a657a-e75d-4774-b6e6-3983dbe191db"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'id': "id_example", // String | 
  'issuingId': "issuingId_example", // String | 
  'documentNumber': "documentNumber_example", // String | 
  'documentType': "documentType_example" // String | 
};
apiInstance.apiAccountNumberOfDocumentsGet(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to c54a657a-e75d-4774-b6e6-3983dbe191db]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **id** | **String**|  | [optional] 
 **issuingId** | **String**|  | [optional] 
 **documentNumber** | **String**|  | [optional] 
 **documentType** | **String**|  | [optional] 

### Return type

[**GetNumberOfDocumentsViewModelValidResponsePackage**](GetNumberOfDocumentsViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountPost"></a>
# **apiAccountPost**
> IssueViewModelV2ValidResponsePackage apiAccountPost(apiVersion, authorization, fMessageId, fOrigin, opts)

Card Issue

Creates virtual cards, physical cards or accounts. Cards are created with the default currency only.    All SDD &amp; KYC cards (primary &amp; secondary) created under a consumer program, must have the following requirements      firstName      lastName      address1      city      zipCode      countryCode      email      MobileNo    &#x27;Bin&#x27; determines whether a card or account is created        5 BIN &#x3D; Card      8 BIN &#x3D; Account        &#x27;DeliveryType&#x27; determines whether a virtual or physical card is created        Virtual &#x3D; VC      Physical &#x3D; PC       Risk Pofiling  When new cards are created, PFS require to gather information on cardholders for risk rating. This information is to be sent in the userdefined property. Below is the list of default information that PFS would require to collect.        Occupation_Profession          • Director / Owner          • Executive          • Manager          • Employee / Worker          • Self employed          • Student          • Retiree          • Unemployed                Occupation          • Public servant / Police / Military          • Agriculture          • Craftwork / Trade          • Arts / Culture / Sport          • Banking / Insurance / Finance / Auditing          • Construction / Publicworks          • Education          • Manufacturing / Maintenance          • Medical / Paramedical          • Food industry / Work from home / Hospitality / Tourism          • Services / IT          • Social Security / NGO          • Politician / Elected Member of Parliament          Card_Purpose          • Receive my social welfare payments          • Receive my salary          • Pay my bills          • Personal Expenses          • Receive income from my business activity          • Send or receive money transfers          • For use abroad          • Gaming or Betting on-line          • Point of Sale purchases          • Savings                Monthly_Income          • LESS THAN 500 EUR          • 500 to 1000 EUR          • 1001 to 1500 EUR          • 1501 to 2000 EUR          • 2001 to 3000 EUR          • MORE THAN 3000 EUR           &#x27;CardImageId&#x27; determines the image to be printed on your physical card. This is to be added in the UserDefined property as displayed in the below sample request.   The value of this property will be provided by Gemalto following integration with their plugin.    Sample request for 5 BIN:                    POST /api/Account      {          \&quot;firstName\&quot;: \&quot;Test\&quot;,          \&quot;middleInitial\&quot;: \&quot;T\&quot;,          \&quot;lastName\&quot;: \&quot;Test\&quot;,          \&quot;address1\&quot;: \&quot;Test\&quot;,          \&quot;city\&quot;: \&quot;Test\&quot;,          \&quot;zipCode\&quot;: \&quot;TST1422\&quot;,          \&quot;countryCode\&quot;: \&quot;MT\&quot;,          \&quot;dateOfBirth\&quot;: \&quot;1990-04-23\&quot;,          \&quot;landline\&quot;: \&quot;0044|11111111\&quot;,          \&quot;mobileNo\&quot;: \&quot;0044|99999999\&quot;,          \&quot;securityQuestion\&quot;: \&quot;Answer is &#x27;Test&#x27;?\&quot;,          \&quot;securityAnswer\&quot;: \&quot;Test\&quot;,          \&quot;email\&quot;: \&quot;test@test.com\&quot;,          \&quot;userDefined2\&quot; : \&quot;2\&quot;,          \&quot;cardStyle\&quot;: \&quot;01\&quot;,          \&quot;embossName\&quot;: \&quot;TEST TEST\&quot;,          \&quot;bin\&quot;: \&quot;{{BIN}}\&quot;,          \&quot;distributorCode\&quot;: \&quot;{{DC}}\&quot;,          \&quot;userdefined\&quot; : {              \&quot;Card_Purpose\&quot;: \&quot;Savings\&quot;,              \&quot;Monthly_Income\&quot;: \&quot;LESS THAN 500 EUR\&quot;,              \&quot;CardImageId\&quot;: \&quot;123456789\&quot;          }      }        Sample request for 8 BIN        POST /api/Account      {          \&quot;firstName\&quot;: \&quot;Number6\&quot;,          \&quot;lastName\&quot;: \&quot;{{$randomLastName}}\&quot;,          \&quot;address1\&quot;: \&quot;{{$randomStreetName}}\&quot;,          \&quot;zipCode\&quot;: \&quot;NDTR9074\&quot;,          \&quot;countryCode\&quot;: \&quot;MT\&quot;,          \&quot;dateofbirth\&quot;: \&quot;2020-11-01\&quot;,          \&quot;distributorCode\&quot;: \&quot;{{DC}}\&quot;,          \&quot;cardStyle\&quot;: \&quot;01\&quot;,          \&quot;email\&quot;:\&quot;Number6@gmail.com\&quot;,          \&quot;bin\&quot;: \&quot;{{BIN}}\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "a15cf3a9-0bbc-466b-ada1-b68c29a36004"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.IssueBindingModelV2() // IssueBindingModelV2 | Request body, see details under the 'Model' tab
};
apiInstance.apiAccountPost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to a15cf3a9-0bbc-466b-ada1-b68c29a36004]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**IssueBindingModelV2**](IssueBindingModelV2.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**IssueViewModelV2ValidResponsePackage**](IssueViewModelV2ValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiAccountReferenceAttemptedRegistrationsGet"></a>
# **apiAccountReferenceAttemptedRegistrationsGet**
> CheckAttemptedRegistrationViewModelValidResponsePackage apiAccountReferenceAttemptedRegistrationsGet(reference, apiVersion, authorization, fMessageId, fOrigin)

Attempted Registrations

Check the details that a client is trying to use before creating or updating a card.    Sample request:                    GET /api/Account/400000000000/AttemptedRegistrations

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let reference = 789; // Number | 
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "728353e3-51a8-415d-9a9f-27ee9e1b0d68"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiAccountReferenceAttemptedRegistrationsGet(reference, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference** | **Number**|  | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 728353e3-51a8-415d-9a9f-27ee9e1b0d68]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**CheckAttemptedRegistrationViewModelValidResponsePackage**](CheckAttemptedRegistrationViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountSepaTransactionCountGet"></a>
# **apiAccountSepaTransactionCountGet**
> SepaTransactionCountBindingModelValidResponsePackage apiAccountSepaTransactionCountGet(apiVersion, authorization, fMessageId, fOrigin, opts)

Sepa Transaction Count

Get count of SEPA transactions.    Sample request:                    GET /api/Account/SepaTransactionCount?Direction&#x3D;I&amp;Iban&#x3D;FR7621833000010000060573930&amp;DateTimeFrom&#x3D;2019-01-01&amp;DateTimeTo&#x3D;2020-01-02

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.AccountApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "f8e38394-b068-46bb-80b4-1b9a2173a946"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'direction': "direction_example", // String | 
  'iban': "iban_example", // String | 
  'dateTimeFrom': "dateTimeFrom_example", // String | 
  'dateTimeTo': "dateTimeTo_example" // String | 
};
apiInstance.apiAccountSepaTransactionCountGet(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to f8e38394-b068-46bb-80b4-1b9a2173a946]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **direction** | **String**|  | [optional] 
 **iban** | **String**|  | [optional] 
 **dateTimeFrom** | **String**|  | [optional] 
 **dateTimeTo** | **String**|  | [optional] 

### Return type

[**SepaTransactionCountBindingModelValidResponsePackage**](SepaTransactionCountBindingModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

