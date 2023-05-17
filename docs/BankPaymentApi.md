# FinacApi.BankPaymentApi

All URIs are relative to *https://staging-api.prepaidfinancialservices.com/finac*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiBankPaymentDeliveryDateGet**](BankPaymentApi.md#apiBankPaymentDeliveryDateGet) | **GET** /api/BankPayment/DeliveryDate | Bank Transfer Delivery Date
[**apiBankPaymentGetMT103Get**](BankPaymentApi.md#apiBankPaymentGetMT103Get) | **GET** /api/BankPayment/GetMT103 | Get MT103
[**apiBankPaymentIdCancelRecurringPatch**](BankPaymentApi.md#apiBankPaymentIdCancelRecurringPatch) | **PATCH** /api/BankPayment/{Id}/CancelRecurring | Cancel Recurring Transfer
[**apiBankPaymentIdOneOffPaymentPost**](BankPaymentApi.md#apiBankPaymentIdOneOffPaymentPost) | **POST** /api/BankPayment/{Id}/OneOffPayment | Bank Transfer
[**apiBankPaymentIdRecurringPaymentsGet**](BankPaymentApi.md#apiBankPaymentIdRecurringPaymentsGet) | **GET** /api/BankPayment/{Id}/RecurringPayments | Recurring Transfers
[**apiBankPaymentIdRecurringPost**](BankPaymentApi.md#apiBankPaymentIdRecurringPost) | **POST** /api/BankPayment/{Id}/Recurring | Recurring Bank Transfer
[**apiBankPaymentIdStatementByIdGet**](BankPaymentApi.md#apiBankPaymentIdStatementByIdGet) | **GET** /api/BankPayment/{Id}/StatementById | Bank Transaction Details
[**apiBankPaymentIdStatementGet**](BankPaymentApi.md#apiBankPaymentIdStatementGet) | **GET** /api/BankPayment/{Id}/Statement | Bank Transfer Statement
[**apiBankPaymentIdUpdatePatch**](BankPaymentApi.md#apiBankPaymentIdUpdatePatch) | **PATCH** /api/BankPayment/{Id}/Update | Update recurring Bank Transfer
[**apiBankPaymentParametersGet**](BankPaymentApi.md#apiBankPaymentParametersGet) | **GET** /api/BankPayment/Parameters | Bank Transfer Parameters
[**apiBankPaymentValidateBicGet**](BankPaymentApi.md#apiBankPaymentValidateBicGet) | **GET** /api/BankPayment/ValidateBic | Validate Bic
[**apiBankPaymentValidateInstantBicGet**](BankPaymentApi.md#apiBankPaymentValidateInstantBicGet) | **GET** /api/BankPayment/ValidateInstantBic | Validate Instant Bic

<a name="apiBankPaymentDeliveryDateGet"></a>
# **apiBankPaymentDeliveryDateGet**
> BankPaymentDeliveryDateViewModelValidResponsePackage apiBankPaymentDeliveryDateGet(apiVersion, authorization, fMessageId, fOrigin, opts)

Bank Transfer Delivery Date

Get the estimated payment delivery date for the queryied country/currency/payment scheme if the transfer starts on a given time.   Working hours and weekends are taken into account. The queried payment date can&#x27;t be in the past.     The response is the expected payment date    Sample request:                    GET /api/BankPayment/DeliveryDate?paymentDate&#x3D;2020-07-04&amp;currency&#x3D;GBP&amp;receivingCountryCode&#x3D;GB&amp;sendingCountryCode&#x3D;GB&amp;bankPaymentScheme&#x3D;1

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.BankPaymentApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "bda29d49-2742-46c3-ab6d-10193676ab56"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'paymentDate': "paymentDate_example", // String | Planed payment date and time (yyyy-MM-ddThh:mm:ss). The API is aware of business hours, so the time (hour, minute) part of the value is also imporatant.    For example in case of a GBP payment with FasterPayment 2020-08-14T10:00:00 (Friday 10AM) will fullfiled on the same day,  but a payment made at 2020-08-14T19:00:00 (Friday 7PM) will be fulfilled only on 2020-08-17 Monday.
  'currency': "currency_example", // String | Payment Currency ISO-4217 3 character code
  'receivingCountryCode': "receivingCountryCode_example", // String | Country code (2 letter) of the receiving country
  'sendingCountryCode': "sendingCountryCode_example", // String | Country code (2 letter) of the seding country
  'bankPaymentScheme': new FinacApi.BankPaymentScheme() // BankPaymentScheme | FasterPayment = 1, DomesticCreditTransfer = 2, Priority = 3, Local = 4
};
apiInstance.apiBankPaymentDeliveryDateGet(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to bda29d49-2742-46c3-ab6d-10193676ab56]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **paymentDate** | **String**| Planed payment date and time (yyyy-MM-ddThh:mm:ss). The API is aware of business hours, so the time (hour, minute) part of the value is also imporatant.    For example in case of a GBP payment with FasterPayment 2020-08-14T10:00:00 (Friday 10AM) will fullfiled on the same day,  but a payment made at 2020-08-14T19:00:00 (Friday 7PM) will be fulfilled only on 2020-08-17 Monday. | [optional] 
 **currency** | **String**| Payment Currency ISO-4217 3 character code | [optional] 
 **receivingCountryCode** | **String**| Country code (2 letter) of the receiving country | [optional] 
 **sendingCountryCode** | **String**| Country code (2 letter) of the seding country | [optional] 
 **bankPaymentScheme** | [**BankPaymentScheme**](.md)| FasterPayment &#x3D; 1, DomesticCreditTransfer &#x3D; 2, Priority &#x3D; 3, Local &#x3D; 4 | [optional] 

### Return type

[**BankPaymentDeliveryDateViewModelValidResponsePackage**](BankPaymentDeliveryDateViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiBankPaymentGetMT103Get"></a>
# **apiBankPaymentGetMT103Get**
> GetMT103ViewModelValidResponsePackage apiBankPaymentGetMT103Get(apiVersion, authorization, fMessageId, fOrigin, opts)

Get MT103

Get MT103 for Currency Cloud by providing EITHER PaymentId or TerminalId.     Sample requests:        GET /api/BankPayment/GetMT103?PaymentId&#x3D;770777ff-cdac-4643-bdea-8d91e0e6adbd            GET /api/BankPayment/GetMT103?TerminalId&#x3D;CC 20305

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.BankPaymentApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "15bf91ad-b32e-4ad1-a8fe-9f8733e4f25b"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'paymentId': "paymentId_example", // String | (GUID). This can be retrieved from any of Bank Payment Statement APIs, look for the transactionId.  If this is supplied, don't also provide TerminalId.
  'terminalId': "terminalId_example" // String | (Format: CC 21234). This can be retrieved from /api/Account/{Id}/Transactions (TransactionHistory), look for terminalId.  If this is supplied, don't also provide PaymentId.
};
apiInstance.apiBankPaymentGetMT103Get(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 15bf91ad-b32e-4ad1-a8fe-9f8733e4f25b]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **paymentId** | **String**| (GUID). This can be retrieved from any of Bank Payment Statement APIs, look for the transactionId.  If this is supplied, don&#x27;t also provide TerminalId. | [optional] 
 **terminalId** | **String**| (Format: CC 21234). This can be retrieved from /api/Account/{Id}/Transactions (TransactionHistory), look for terminalId.  If this is supplied, don&#x27;t also provide PaymentId. | [optional] 

### Return type

[**GetMT103ViewModelValidResponsePackage**](GetMT103ViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiBankPaymentIdCancelRecurringPatch"></a>
# **apiBankPaymentIdCancelRecurringPatch**
> BankPaymentCancelRecurringViewModelValidResponsePackage apiBankPaymentIdCancelRecurringPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Cancel Recurring Transfer

Cancel recurring payment transactions which are belonging to a SettingId.   SettingId is returned when a recurring payment is created.    Sample request:                    PATCH /api/BankPayment/400000000000/CancelRecurring      {          \&quot;settingId\&quot;: \&quot;123234\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.BankPaymentApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "d9e850f9-892c-4d00-8ff7-cea964db887d"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.BankPaymentCancelRecurringBindingModel() // BankPaymentCancelRecurringBindingModel | 
};
apiInstance.apiBankPaymentIdCancelRecurringPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to d9e850f9-892c-4d00-8ff7-cea964db887d]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**BankPaymentCancelRecurringBindingModel**](BankPaymentCancelRecurringBindingModel.md)|  | [optional] 

### Return type

[**BankPaymentCancelRecurringViewModelValidResponsePackage**](BankPaymentCancelRecurringViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiBankPaymentIdOneOffPaymentPost"></a>
# **apiBankPaymentIdOneOffPaymentPost**
> BankPaymentViewModelValidResponsePackage apiBankPaymentIdOneOffPaymentPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Bank Transfer

Send funds from a card/account to a an external bank account via FasterPayments, SWIFT and SEPA.     Each Payment, needs Account Identifier and Creditor Bank Identifier of the Creditor.   For country and currency specific information please call BankPaymentParameters API which will return the full list of required fields for each country / currency.        Getting the required parameters for GBP payment in GB you can call:            GET /api/BankPayment/Parameters?currency&#x3D;GBP&amp;receivingCountryCode&#x3D;GB&amp;sendingCountryCode&#x3D;GB        Payment scheme values:        • FasterPayment                 &#x3D; 1 (depreciated)      • Sepa / DomesticCreditTransfer &#x3D; 2      • Swift / Priority              &#x3D; 3      • Regular Bank transfer / Local &#x3D; 4 (Slow)      • FasterPayments                &#x3D; 5      • CurrencyCloud Priority        &#x3D; 6 (Only used to redirect EUR payments through SWIFT instead of SEPA)      • CurrencyCloud Regular         &#x3D; 7 (Only used to redirect EUR payments through SWIFT instead of SEPA)        For example:  Creating a GBP Payment with in the GB:        BankIdentifier should be populated with Sort Code      AccountIdentifier should be populate with Account Number      Payment scheme needs to be 5.    Creating a EUR Payment with in SEPA countries:        BankIdentifier should be populated with BIC      AccountIdentifier should be populate with IBAN    Creating a USD Payment in the US:        BankIdentifier should be populated ABA Routing Code      AccountIdentifier should be populate with Account Number    Creating a CAD Payment, only 3 or 4 can be used as payment scheme&#x27;s.        BankIdentifier should be populated with Swift Code      AccountIdentifier should be populate with Account Number      Payment scheme needs to be 3 or 4. Payment scheme 4 also needs Bank Identifier 2.        EUR to EUR payments within SEPA Countries will pass through sepa.   If type 6 or 7 is entered, then a Currency Cloud EUR payment is performed instead.   While applying the new schema payments, validations must abide by the processor&#x27;s validation.    Payment Scheme type 6 must abide by the Priority Validations(type 3) while payment scheme 7 must abide with Regular Validations (type 4).    If Payee Id is known, it can be included in the request and the creditor details will not be mandatory,  else creditor details will be mandatory    NOTE: If PayeeId is not provided, FirstName and Lastname are required.        {          \&quot;payeeId\&quot;: \&quot;A84E1FE8-1234-1234-1234-DA7699183FA9\&quot;      }     Creditor type values:            • Organisation  &#x3D; 0      • Single Person &#x3D; 1    Note: Payment Amounts are of type long and use minor currency units, example below (in pence not pounds).      Sample request:                    POST /api/BankPayment/400000000000/OneOffPayment       {             \&quot;firstName\&quot;: \&quot;John\&quot;,          \&quot;lastName\&quot;: \&quot;Test\&quot;,          \&quot;countryCode\&quot;: \&quot;GB\&quot;,          \&quot;addressLine1\&quot;: \&quot;Test Address\&quot;,          \&quot;addressLine2\&quot;: \&quot;\&quot;,          \&quot;currency\&quot;: \&quot;GBP\&quot;,          \&quot;accountIdentifier\&quot;: \&quot;00759719\&quot;,          \&quot;bankIdentifier\&quot;: \&quot;137224\&quot;,          \&quot;paymentAmount\&quot;: 1000       }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.BankPaymentApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "c2c992b7-76bd-4e46-856c-a33e58ed7e2a"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.BankPaymentBindingModelV2() // BankPaymentBindingModelV2 | Request body, see details under the 'Model' tab
};
apiInstance.apiBankPaymentIdOneOffPaymentPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to c2c992b7-76bd-4e46-856c-a33e58ed7e2a]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**BankPaymentBindingModelV2**](BankPaymentBindingModelV2.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**BankPaymentViewModelValidResponsePackage**](BankPaymentViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiBankPaymentIdRecurringPaymentsGet"></a>
# **apiBankPaymentIdRecurringPaymentsGet**
> BankPaymentGetRecurringPaymentsViewModelV2ValidResponsePackage apiBankPaymentIdRecurringPaymentsGet(id, apiVersion, authorization, fMessageId, fOrigin)

Recurring Transfers

List all active recurring transfers of a cardholder.  The return contains each recurring setting, and the scheduled payment transactions  for each setting    Sample request:                    GET /api/BankPayment/400000000000/RecurringPayments

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.BankPaymentApi();
let id = "id_example"; // String | Cardholder Id
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "ad0563a7-395e-47c3-a78f-fae0cf051b79"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiBankPaymentIdRecurringPaymentsGet(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to ad0563a7-395e-47c3-a78f-fae0cf051b79]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**BankPaymentGetRecurringPaymentsViewModelV2ValidResponsePackage**](BankPaymentGetRecurringPaymentsViewModelV2ValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiBankPaymentIdRecurringPost"></a>
# **apiBankPaymentIdRecurringPost**
> BankPaymentRecurringViewModelValidResponsePackage apiBankPaymentIdRecurringPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Recurring Bank Transfer

Create a recurring bank transfer. One of more transfers will be scheduled.     Dates of further payment transaction is determined by \&quot;PaymentFrequencyMethod\&quot;. See the description of PaymentFrequencyMethod for further details.     To set up the transfers Account Identifier and Creditor Bank Identifier of the Creditor is needed.   For country and currency specific information please call BankPaymentParameters API which will return the full list of required fields for each country / currency.        Getting the required parameters for GBP payment in GB you can call:            GET /api/BankPayment/Parameters?currency&#x3D;GBP&amp;receivingCountryCode&#x3D;GB&amp;sendingCountryCode&#x3D;GB    For example:  Creating a GBP Payment with in the GB:        BankIdentifier should be populated with Sort Code      AccountIdentifier should be populate with Account Number      Payment scheme needs to be 1.    Creating a EUR Payment with in SEPA countries:        BankIdentifier should be populated with BIC      AccountIdentifier should be populate with IBAN    Creating a USD Payment in the US:        BankIdentifier should be populated ABA Routing Code      AccountIdentifier should be populate with Account Number    Creating a CAD Payment, only 3 or 4 can be used as payment scheme&#x27;s.        BankIdentifier should be populated with Swift Code      AccountIdentifier should be populate with Account Number      Payment scheme needs to be 3 or 4. Payment scheme 4 also needs Bank Identifier 2.       For both Creditor and Debtor, there are 3 Amounts, First Payment Amount, Further Payments Amount, Final Payments Amount, when &#x27;PaymentFrequencyMethod&#x27; is either &#x27;Amount&#x27; {2} or &#x27;Date&#x27; {3}. If Further Payments amount and/or Final Payments amount are left empty, by default the First Payment Amount will be used.    To submit a single future dated payment use PaymentFrequencyMethod &#x3D; 2 (Amount) and NumberOfFurtherPayments &#x3D; 0    When PaymentFrequencyMethod &#x3D; 3 (Date) is used, then a a first and a final date must be specified, which are at least “Frequency” days apart for each other, (or N * Frequency).    When PaymentFrequencyMethod &#x3D; 4 (CustomDate) is used, &#x27;CustomDates&#x27; must be specified which is a list of json date and amount object.    Sample request:                    POST /api/BankPayment/400000000000/Recurring       {             \&quot;firstName\&quot;: \&quot;John\&quot;,          \&quot;lastName\&quot;: \&quot;Test\&quot;,          \&quot;countryCode\&quot;: \&quot;GB\&quot;,          \&quot;paymentFrequencyMethod\&quot;: 3,          \&quot;firstPaymentDate\&quot;: \&quot;2020-05-22\&quot;,          \&quot;frequency\&quot;: 7,          \&quot;finalPaymentDate\&quot;: \&quot;2020-05-29\&quot;,          \&quot;firstPaymentAmount\&quot;: 2,          \&quot;finalPaymentAmount\&quot;: 2,          \&quot;furtherPaymentsAmount\&quot;: 5,          \&quot;numberOfFurtherPayments\&quot;: 3,          \&quot;currency\&quot;: \&quot;GBP\&quot;,          \&quot;bankName\&quot;: \&quot;Barclays\&quot;,          \&quot;reference\&quot;: \&quot;lpbkeqvbpzegjhn8mf6pg\&quot;,          \&quot;accountIdentifier\&quot;: \&quot;00123456\&quot;,          \&quot;bankIdentifier\&quot;: \&quot;12345678\&quot;,          \&quot;accountType\&quot;: \&quot;select\&quot;,          \&quot;addressLine1\&quot;: \&quot;Test Address\&quot;,          \&quot;addressLine2\&quot;: \&quot;\&quot;,          \&quot;city\&quot;: \&quot;creditorcity\&quot;,          \&quot;state\&quot;: \&quot;creditorstate\&quot;,          \&quot;postCode\&quot;: \&quot;TST752E\&quot;,          \&quot;bankPaymentScheme\&quot;: 1,      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.BankPaymentApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "8f649cee-9fea-4b5e-acc7-85a3eda4573d"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.BankPaymentRecurringBindingModelV2() // BankPaymentRecurringBindingModelV2 | Request body, see details under the 'Model' tab
};
apiInstance.apiBankPaymentIdRecurringPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 8f649cee-9fea-4b5e-acc7-85a3eda4573d]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**BankPaymentRecurringBindingModelV2**](BankPaymentRecurringBindingModelV2.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**BankPaymentRecurringViewModelValidResponsePackage**](BankPaymentRecurringViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiBankPaymentIdStatementByIdGet"></a>
# **apiBankPaymentIdStatementByIdGet**
> BankPaymentStatementByIdViewModelV2ValidResponsePackage apiBankPaymentIdStatementByIdGet(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Bank Transaction Details

Returns the details of a specific Bank Transfer from the reference provided.    The transaction ID can be found under &#x27;terminalID&#x27; of the Transaction History function.        SI - Sepa Incoming      SO - Sepa Outgoing      BT - Barclays Incoming      BO - Barclays Outgoing      CC - CurrencyCloud Outgoing    Example: BO 856    Sample request:                    GET /api/BankPayment/400000000000/StatementById?StatementItemId&#x3D;856&amp;InwardOutward&#x3D;1&amp;Processor&#x3D;0

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.BankPaymentApi();
let id = "id_example"; // String | Cardholder id
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "30b4a935-bba1-4a54-855c-58554debd916"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'statementItemId': "statementItemId_example", // String | Unique Reference Code for tranaction
  'inwardOutward': new FinacApi.BankPaymentDirection(), // BankPaymentDirection | The direction of transactions returned:         Inward = 0,       Outward = 1    If not specified default is 0 - Inward
  'processor': new FinacApi.BankPaymentProvider() // BankPaymentProvider | Filters transactions returned by method of processing:        Barclays (GBP/Faster Payment) = 0      Sepa (EUR) = 1      CurrencyCloud (International/SWIFT) = 2
};
apiInstance.apiBankPaymentIdStatementByIdGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 30b4a935-bba1-4a54-855c-58554debd916]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **statementItemId** | **String**| Unique Reference Code for tranaction | [optional] 
 **inwardOutward** | [**BankPaymentDirection**](.md)| The direction of transactions returned:         Inward &#x3D; 0,       Outward &#x3D; 1    If not specified default is 0 - Inward | [optional] 
 **processor** | [**BankPaymentProvider**](.md)| Filters transactions returned by method of processing:        Barclays (GBP/Faster Payment) &#x3D; 0      Sepa (EUR) &#x3D; 1      CurrencyCloud (International/SWIFT) &#x3D; 2 | [optional] 

### Return type

[**BankPaymentStatementByIdViewModelV2ValidResponsePackage**](BankPaymentStatementByIdViewModelV2ValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiBankPaymentIdStatementGet"></a>
# **apiBankPaymentIdStatementGet**
> BankPaymentStatementViewModelV2ValidResponsePackage apiBankPaymentIdStatementGet(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Bank Transfer Statement

Returns all bank transfers for a specific Cardholder between the dates provided.    Sample request:                    GET /api/BankPayment/400000000000/Statement?StartDate&#x3D;2000-01-01&amp;EndDate&#x3D;2018-03-01&amp;InwardOutward&#x3D;1&amp;Processor&#x3D;2

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.BankPaymentApi();
let id = "id_example"; // String | Cardholder Id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "542dbc5d-f94f-4a60-bc7c-4269c2d21933"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'startDate': "startDate_example", // String | Start date of transactions, field is required, YYYY-MM-DD
  'endDate': "endDate_example", // String | End date of transactions, field is required, YYYY-MM-DD
  'inwardOutward': new FinacApi.BankPaymentDirection(), // BankPaymentDirection | The direction of the Bank Payment transations you wish to view         Inward = 0       Outward = 1      All = 2    If not specified default is 0 - Inward
  'processor': new FinacApi.BankPaymentProvider() // BankPaymentProvider | Filters transactions returned by method of processing. If unspecified, this filter is not applied:        Barclays(GBP/Faster Payment) = 0      Sepa(EUR) = 1      CurrencyCloud(International/SWIFT) = 2
};
apiInstance.apiBankPaymentIdStatementGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 542dbc5d-f94f-4a60-bc7c-4269c2d21933]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **startDate** | **String**| Start date of transactions, field is required, YYYY-MM-DD | [optional] 
 **endDate** | **String**| End date of transactions, field is required, YYYY-MM-DD | [optional] 
 **inwardOutward** | [**BankPaymentDirection**](.md)| The direction of the Bank Payment transations you wish to view         Inward &#x3D; 0       Outward &#x3D; 1      All &#x3D; 2    If not specified default is 0 - Inward | [optional] 
 **processor** | [**BankPaymentProvider**](.md)| Filters transactions returned by method of processing. If unspecified, this filter is not applied:        Barclays(GBP/Faster Payment) &#x3D; 0      Sepa(EUR) &#x3D; 1      CurrencyCloud(International/SWIFT) &#x3D; 2 | [optional] 

### Return type

[**BankPaymentStatementViewModelV2ValidResponsePackage**](BankPaymentStatementViewModelV2ValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiBankPaymentIdUpdatePatch"></a>
# **apiBankPaymentIdUpdatePatch**
> BankPaymentUpdateViewModelValidResponsePackage apiBankPaymentIdUpdatePatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Update recurring Bank Transfer

Update a recurring bank transfer. One of more transfers will be scheduled.     Dates of further payment transaction is determined by \&quot;PaymentFrequencyMethod\&quot;. See the description of PaymentFrequencyMethod for further details.     To set up the transfers Account Identifier and Creditor Bank Identifier of the Creditor is needed.   For country and currency specific information please call BankPaymentParameters API which will return the full list of required fields for each country / currency.        Getting the required parameters for GBP payment in GB you can call:            GET /api/BankPayment/Parameters?currency&#x3D;GBP&amp;receivingCountryCode&#x3D;GB&amp;sendingCountryCode&#x3D;GB    For example:  Creating a GBP Payment with in the GB:        BankIdentifier should be populated with Sort Code      AccountIdentifier should be populate with Account Number      Payment scheme needs to be 1.    Creating a EUR Payment with in SEPA countries:        BankIdentifier should be populated with BIC      AccountIdentifier should be populate with IBAN    Creating a USD Payment in the US:        BankIdentifier should be populated ABA Routing Code      AccountIdentifier should be populate with Account Number    Creating a CAD Payment, only 3 or 4 can be used as payment scheme&#x27;s.        BankIdentifier should be populated with Swift Code      AccountIdentifier should be populate with Account Number      Payment scheme needs to be 3 or 4. Payment scheme 4 also needs Bank Identifier 2.    &#x27;PaymentScheme&#x27;, amount requirements:        option 1 &#x3D; Amount (Creditor) + Currency (Creditor)      option 2 &#x3D; Amount (Creditor) + Currency (Creditor) + Debit Currency      option 3 &#x3D; Currency (Creditor) + Debit Amount + Debit Currency       For both Creditor and Debtor, there are 3 Amounts, First Payment Amount, Further Payments Amount, Final Payments Amount, when &#x27;PaymentFrequencyMethod&#x27; is either &#x27;Amount&#x27; {2} or &#x27;Date&#x27; {3}. If Further Payments amount and/or Final Payments amount are left empty, by default the First Payment Amount will be used.    SettingId is needed to be able to update the recurring bank payment.    Note: Payment Amounts are of type long and use minor currency units, example below (in pence not pounds).     Sample request:                    POST /api/BankPayment/400000000000/Update       {             \&quot;firstName\&quot;: \&quot;John\&quot;,          \&quot;lastName\&quot;: \&quot;Test\&quot;,          \&quot;countryCode\&quot;: \&quot;GB\&quot;,          \&quot;paymentFrequencyMethod\&quot;: 3,          \&quot;firstPaymentDate\&quot;: \&quot;2020-05-22\&quot;,          \&quot;frequency\&quot;: 7,          \&quot;finalPaymentDate\&quot;: \&quot;2020-05-29\&quot;,          \&quot;firstPaymentAmount\&quot;: 200,          \&quot;finalPaymentAmount\&quot;: 200,          \&quot;furtherPaymentsAmount\&quot;: 500,          \&quot;numberOfFurtherPayments\&quot;: 3,          \&quot;currency\&quot;: \&quot;GBP\&quot;,          \&quot;bankName\&quot;: \&quot;Barclays\&quot;,          \&quot;reference\&quot;: \&quot;lpbkeqvbpzegjhn8mf6pg\&quot;,          \&quot;accountIdentifier\&quot;: \&quot;00759719\&quot;,          \&quot;bankIdentifier\&quot;: \&quot;45617894\&quot;,          \&quot;accountType\&quot;: \&quot;select\&quot;,          \&quot;addressLine1\&quot;: \&quot;Test Address\&quot;,          \&quot;addressLine2\&quot;: \&quot;\&quot;,          \&quot;city\&quot;: \&quot;creditorcity\&quot;,          \&quot;state\&quot;: \&quot;creditorstate\&quot;,          \&quot;postCode\&quot;: \&quot;TST752E\&quot;,          \&quot;bankPaymentScheme\&quot;: 1,          \&quot;settingId\&quot;: \&quot;1234\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.BankPaymentApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "de33759f-f490-49d4-b5fc-310e30e0dba5"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.BankPaymentUpdateBindingModelV2() // BankPaymentUpdateBindingModelV2 | Request body, see details under the 'Model' tab
};
apiInstance.apiBankPaymentIdUpdatePatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to de33759f-f490-49d4-b5fc-310e30e0dba5]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**BankPaymentUpdateBindingModelV2**](BankPaymentUpdateBindingModelV2.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**BankPaymentUpdateViewModelValidResponsePackage**](BankPaymentUpdateViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiBankPaymentParametersGet"></a>
# **apiBankPaymentParametersGet**
> BankPaymentParametersViewModelValidResponsePackage apiBankPaymentParametersGet(apiVersion, authorization, fMessageId, fOrigin, opts)

Bank Transfer Parameters

Get the required parameters for the bank payment API by target country/currency and source country.    If the receiving country / currency supports multiple payment schemes, the response will contain multiple list,   where each list describes a different payment schemes (i.e.: priority, local) and creditor types (i.e.: personal, organizational account)    Sample request:                    GET /api/BankPayment/Parameters?currency&#x3D;GBP&amp;receivingCountryCode&#x3D;GB&amp;sendingCountryCode&#x3D;GB

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.BankPaymentApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "aa54f11e-32d5-43af-998a-5a6ca08dd3c1"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'currency': "currency_example", // String | Payment Currency ISO-4217 3 character currency code
  'receivingCountryCode': "receivingCountryCode_example", // String | Country code (2 letter) of the receiving country
  'sendingCountryCode': "sendingCountryCode_example" // String | Country code (2 letter) of the seding country
};
apiInstance.apiBankPaymentParametersGet(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to aa54f11e-32d5-43af-998a-5a6ca08dd3c1]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **currency** | **String**| Payment Currency ISO-4217 3 character currency code | [optional] 
 **receivingCountryCode** | **String**| Country code (2 letter) of the receiving country | [optional] 
 **sendingCountryCode** | **String**| Country code (2 letter) of the seding country | [optional] 

### Return type

[**BankPaymentParametersViewModelValidResponsePackage**](BankPaymentParametersViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiBankPaymentValidateBicGet"></a>
# **apiBankPaymentValidateBicGet**
> ValidateBicViewModelValidResponsePackage apiBankPaymentValidateBicGet(apiVersion, authorization, fMessageId, fOrigin, opts)

Validate Bic

Validate bic.    Sample request:        GET /api/BankPayment/ValidateBic?Bic&#x3D;1234

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.BankPaymentApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "ab3a470a-a59a-48c8-97c3-6d483e223042"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'bic': "bic_example" // String | Bic to be validated.
};
apiInstance.apiBankPaymentValidateBicGet(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to ab3a470a-a59a-48c8-97c3-6d483e223042]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **bic** | **String**| Bic to be validated. | [optional] 

### Return type

[**ValidateBicViewModelValidResponsePackage**](ValidateBicViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiBankPaymentValidateInstantBicGet"></a>
# **apiBankPaymentValidateInstantBicGet**
> ValidateBicViewModelValidResponsePackage apiBankPaymentValidateInstantBicGet(apiVersion, authorization, fMessageId, fOrigin, opts)

Validate Instant Bic

Validate instant bic.    Sample request:        GET /api/BankPayment/ValidateInstantBic?Bic&#x3D;1234

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.BankPaymentApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "a0ffe3b3-2711-4f6e-885c-6a98517c1372"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'bic': "bic_example" // String | Bic to be validated.
};
apiInstance.apiBankPaymentValidateInstantBicGet(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to a0ffe3b3-2711-4f6e-885c-6a98517c1372]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **bic** | **String**| Bic to be validated. | [optional] 

### Return type

[**ValidateBicViewModelValidResponsePackage**](ValidateBicViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

