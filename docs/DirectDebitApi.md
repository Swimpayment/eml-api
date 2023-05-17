# FinacApi.DirectDebitApi

All URIs are relative to *https://staging-api.prepaidfinancialservices.com/finac*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiDirectDebitCollectMandateStatusGet**](DirectDebitApi.md#apiDirectDebitCollectMandateStatusGet) | **GET** /api/DirectDebit/CollectMandateStatus | Collect Mandate Status
[**apiDirectDebitDirectDebitIdPaymentGet**](DirectDebitApi.md#apiDirectDebitDirectDebitIdPaymentGet) | **GET** /api/DirectDebit/{DirectDebitId}/Payment | Get Direct Debit Payment
[**apiDirectDebitFileTypeReasonCodesGet**](DirectDebitApi.md#apiDirectDebitFileTypeReasonCodesGet) | **GET** /api/DirectDebit/{FileType}/ReasonCodes | Get Reason Codes
[**apiDirectDebitIdCancellationsGet**](DirectDebitApi.md#apiDirectDebitIdCancellationsGet) | **GET** /api/DirectDebit/{Id}/Cancellations | Direct Debit Cancellations
[**apiDirectDebitIdDirectDebitRejectPatch**](DirectDebitApi.md#apiDirectDebitIdDirectDebitRejectPatch) | **PATCH** /api/DirectDebit/{Id}/DirectDebitReject | Reject or Accept Direct Debit
[**apiDirectDebitIdIbanStatusGet**](DirectDebitApi.md#apiDirectDebitIdIbanStatusGet) | **GET** /api/DirectDebit/{Id}/IbanStatus | Iban Status
[**apiDirectDebitIdMandatesGet**](DirectDebitApi.md#apiDirectDebitIdMandatesGet) | **GET** /api/DirectDebit/{Id}/Mandates | Get Mandates
[**apiDirectDebitInquiryGet**](DirectDebitApi.md#apiDirectDebitInquiryGet) | **GET** /api/DirectDebit/Inquiry | Mandate inquiry
[**apiDirectDebitMandateIdCancellationPatch**](DirectDebitApi.md#apiDirectDebitMandateIdCancellationPatch) | **PATCH** /api/DirectDebit/{MandateId}/Cancellation | Mandate Cancellation
[**apiDirectDebitMandateIdTransactionsGet**](DirectDebitApi.md#apiDirectDebitMandateIdTransactionsGet) | **GET** /api/DirectDebit/{MandateId}/Transactions | Get Mandate History
[**apiDirectDebitMandatePatch**](DirectDebitApi.md#apiDirectDebitMandatePatch) | **PATCH** /api/DirectDebit/Mandate | Update Mandate
[**apiDirectDebitOutgoingReturnPost**](DirectDebitApi.md#apiDirectDebitOutgoingReturnPost) | **POST** /api/DirectDebit/OutgoingReturn | Outgoing Return
[**apiDirectDebitTransactionsGet**](DirectDebitApi.md#apiDirectDebitTransactionsGet) | **GET** /api/DirectDebit/Transactions | Direct Debit Return Transactions

<a name="apiDirectDebitCollectMandateStatusGet"></a>
# **apiDirectDebitCollectMandateStatusGet**
> CollectMandateStatusViewModelValidResponsePackage apiDirectDebitCollectMandateStatusGet(apiVersion, authorization, fMessageId, fOrigin)

Collect Mandate Status

Gets all the available statuses for the mandates     Sample request:                    GET /CollectMandateStatus

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.DirectDebitApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "4f12c7f6-f5e5-4efd-979a-17e395651909"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiDirectDebitCollectMandateStatusGet(apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 4f12c7f6-f5e5-4efd-979a-17e395651909]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**CollectMandateStatusViewModelValidResponsePackage**](CollectMandateStatusViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiDirectDebitDirectDebitIdPaymentGet"></a>
# **apiDirectDebitDirectDebitIdPaymentGet**
> DirectDebitPaymentViewModelV2ValidResponsePackage apiDirectDebitDirectDebitIdPaymentGet(directDebitId, apiVersion, authorization, fMessageId, fOrigin, opts)

Get Direct Debit Payment

For a selected direct debit, the payment details will be shown.    Sample request:                    GET /api/DirectDebit/1/Payment?Id&#x3D;400000000000

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.DirectDebitApi();
let directDebitId = 789; // Number | Direct debit payment id
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "8f65850d-686e-4c82-81d7-154bb157d4a5"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'id': "id_example" // String | Cardholder Id
};
apiInstance.apiDirectDebitDirectDebitIdPaymentGet(directDebitId, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **directDebitId** | **Number**| Direct debit payment id | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 8f65850d-686e-4c82-81d7-154bb157d4a5]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **id** | **String**| Cardholder Id | [optional] 

### Return type

[**DirectDebitPaymentViewModelV2ValidResponsePackage**](DirectDebitPaymentViewModelV2ValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiDirectDebitFileTypeReasonCodesGet"></a>
# **apiDirectDebitFileTypeReasonCodesGet**
> ReasonCodesViewModelValidResponsePackage apiDirectDebitFileTypeReasonCodesGet(fileType, apiVersion, authorization, fMessageId, fOrigin)

Get Reason Codes

Retrieve list of reason codes for a given file type.    Sample request:                    GET /api/DirectDebit/Returns/ReasonCodes

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.DirectDebitApi();
let fileType = "fileType_example"; // String | Direct debits file type.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "5960b726-693d-48df-bb87-39bdac9a37e3"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiDirectDebitFileTypeReasonCodesGet(fileType, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
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
 **fileType** | **String**| Direct debits file type. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 5960b726-693d-48df-bb87-39bdac9a37e3]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**ReasonCodesViewModelValidResponsePackage**](ReasonCodesViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiDirectDebitIdCancellationsGet"></a>
# **apiDirectDebitIdCancellationsGet**
> GetDirectDebitCancellationsViewModelV2ValidResponsePackage apiDirectDebitIdCancellationsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Direct Debit Cancellations

Retreives Sepa direct cancellations filtered by TransactionId, Iban, Date ...  At least one parameter must be porvided    Sample request:        GET /api/DirectDebit/400000000000/Cancellations?StartDate&#x3D;2020-06-01&amp;EndDate&#x3D;2020-12-31

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.DirectDebitApi();
let id = "id_example"; // String | Cardholder Id
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "2d6f5af4-967e-452a-a7bf-4bf92edcc020"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'messageId': "messageId_example", // String | Message Id
  'startDate': "startDate_example", // String | Start date of cancellations, inclusive. YYYY-MM-DD
  'endDate': "endDate_example", // String | End date of cancellations, inclusive. YYYY-MM-DD
  'transactionId': "transactionId_example" // String | Transaction Id
};
apiInstance.apiDirectDebitIdCancellationsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 2d6f5af4-967e-452a-a7bf-4bf92edcc020]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **messageId** | **String**| Message Id | [optional] 
 **startDate** | **String**| Start date of cancellations, inclusive. YYYY-MM-DD | [optional] 
 **endDate** | **String**| End date of cancellations, inclusive. YYYY-MM-DD | [optional] 
 **transactionId** | **String**| Transaction Id | [optional] 

### Return type

[**GetDirectDebitCancellationsViewModelV2ValidResponsePackage**](GetDirectDebitCancellationsViewModelV2ValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiDirectDebitIdDirectDebitRejectPatch"></a>
# **apiDirectDebitIdDirectDebitRejectPatch**
> DirectDebitRejectViewModelValidResponsePackage apiDirectDebitIdDirectDebitRejectPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Reject or Accept Direct Debit

Toggle the iban so to be able to receive or reject any direct debits.    Sample request:                    Patch /api/DirectDebit/Mandate/400000000000/DirectDebitReject       {             \&quot;enable\&quot;: true,      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.DirectDebitApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "22f25e6e-db87-4d61-937e-261da031c7ba"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.DirectDebitRejectBindingModel() // DirectDebitRejectBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiDirectDebitIdDirectDebitRejectPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 22f25e6e-db87-4d61-937e-261da031c7ba]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**DirectDebitRejectBindingModel**](DirectDebitRejectBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**DirectDebitRejectViewModelValidResponsePackage**](DirectDebitRejectViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiDirectDebitIdIbanStatusGet"></a>
# **apiDirectDebitIdIbanStatusGet**
> IbanStatusViewModelValidResponsePackage apiDirectDebitIdIbanStatusGet(id, apiVersion, authorization, fMessageId, fOrigin)

Iban Status

Get the status on an iban, if direct debits are enabled or disabled.    Sample request:                    GET /api/DirectDebit/400000000000/IbanStatus

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.DirectDebitApi();
let id = "id_example"; // String | Id of cardholder.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "37592084-f07b-4093-a26f-cc65e589180f"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiDirectDebitIdIbanStatusGet(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 37592084-f07b-4093-a26f-cc65e589180f]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**IbanStatusViewModelValidResponsePackage**](IbanStatusViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiDirectDebitIdMandatesGet"></a>
# **apiDirectDebitIdMandatesGet**
> GetMandatesViewModelValidResponsePackage apiDirectDebitIdMandatesGet(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Get Mandates

This endpoint is used to collect specific Mandate or a list of collection using different optional parameters. This endpoint is for EUR only.    Sample request:                    GET /api/DirectDebit/400000000000/Mandates?StartDate&#x3D;2020-01-01&amp;EndDate&#x3D;2020-12-12&amp;StatusId&#x3D;1

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.DirectDebitApi();
let id = "id_example"; // String | Id of cardholder.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "982132e6-ade7-493d-8bee-8722682d181c"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'startDate': "startDate_example", // String | Start date of mandates, inclusive. YYYY-MM-DD
  'endDate': "endDate_example", // String | End date of mandates, inclusive. YYYY-MM-DD
  'statusId': 56, // Number | Available statuses can be requested by /CollectMandateStatus endpoint
  'transactionId': "transactionId_example" // String | Transaction Id of mandates.
};
apiInstance.apiDirectDebitIdMandatesGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 982132e6-ade7-493d-8bee-8722682d181c]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **startDate** | **String**| Start date of mandates, inclusive. YYYY-MM-DD | [optional] 
 **endDate** | **String**| End date of mandates, inclusive. YYYY-MM-DD | [optional] 
 **statusId** | **Number**| Available statuses can be requested by /CollectMandateStatus endpoint | [optional] 
 **transactionId** | **String**| Transaction Id of mandates. | [optional] 

### Return type

[**GetMandatesViewModelValidResponsePackage**](GetMandatesViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiDirectDebitInquiryGet"></a>
# **apiDirectDebitInquiryGet**
> MandateInquiryViewModelV2ValidResponsePackage apiDirectDebitInquiryGet(apiVersion, authorization, fMessageId, fOrigin, opts)

Mandate inquiry

Inquire for mandates by querying the PayCentre service.  This is used for GBP – Paycentre supports only GBP payments    Sample request:                    GET /api/DirectDebit/Inquiry?SortCode&#x3D;12547&amp;Id&#x3D;400000000000                  Note: In Response, PaymentAmount is of type long and uses minor currency units (for example, will be in pence not pounds).

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.DirectDebitApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "8c1a2a9f-891f-4deb-b45f-eb8a1422afdb"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'id': "id_example", // String | Cardholder id
  'accountNumber': "accountNumber_example", // String | Account number
  'sortCode': "sortCode_example" // String | Sort code
};
apiInstance.apiDirectDebitInquiryGet(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 8c1a2a9f-891f-4deb-b45f-eb8a1422afdb]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **id** | **String**| Cardholder id | [optional] 
 **accountNumber** | **String**| Account number | [optional] 
 **sortCode** | **String**| Sort code | [optional] 

### Return type

[**MandateInquiryViewModelV2ValidResponsePackage**](MandateInquiryViewModelV2ValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiDirectDebitMandateIdCancellationPatch"></a>
# **apiDirectDebitMandateIdCancellationPatch**
> MandateCancellationViewModelValidResponsePackage apiDirectDebitMandateIdCancellationPatch(mandateId, apiVersion, authorization, fMessageId, fOrigin, opts)

Mandate Cancellation

For a selected mandate and cardHolder Id  we will proced to cancek it, Returns (Error Number, Error Description, and Reference Number)  Count for each transaction that was tried.    Sample request:                   Patch /api/DirectDebit/28f2dca4-354e-48f1-a08e-f1c9230c17c7/Cancellation?CHID&#x3D;400000497265

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.DirectDebitApi();
let mandateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | CardHolderId.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "cdbd1a2e-dbb3-419f-a068-6a6086da5f96"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'CHID': "CHID_example" // String | Card Holder Id
};
apiInstance.apiDirectDebitMandateIdCancellationPatch(mandateId, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **mandateId** | [**String**](.md)| CardHolderId. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to cdbd1a2e-dbb3-419f-a068-6a6086da5f96]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **CHID** | **String**| Card Holder Id | [optional] 

### Return type

[**MandateCancellationViewModelValidResponsePackage**](MandateCancellationViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiDirectDebitMandateIdTransactionsGet"></a>
# **apiDirectDebitMandateIdTransactionsGet**
> GetMandateHistoryV2ViewModelValidResponsePackage apiDirectDebitMandateIdTransactionsGet(mandateId, apiVersion, authorization, fMessageId, fOrigin, opts)

Get Mandate History

For a selected mandate, the transaction history details will be shown. This will include the Direct Debit Transactions, Return Transactions and the Transaction   Count for each transaction that was tried.    Sample request:                    GET /api/DirectDebit/1/Transactions?StartDate&#x3D;2020-01-01&amp;EndDate&#x3D;2020-12-12

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.DirectDebitApi();
let mandateId = 789; // Number | Id of mandate.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "8bf5cc5f-d5de-4e37-b846-b2a3d9d159e8"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'startDate': "startDate_example", // String | Start date of mandates, inclusive. YYYY-MM-DD
  'endDate': "endDate_example" // String | End date of mandates, inclusive. YYYY-MM-DD
};
apiInstance.apiDirectDebitMandateIdTransactionsGet(mandateId, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **mandateId** | **Number**| Id of mandate. | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 8bf5cc5f-d5de-4e37-b846-b2a3d9d159e8]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **startDate** | **String**| Start date of mandates, inclusive. YYYY-MM-DD | [optional] 
 **endDate** | **String**| End date of mandates, inclusive. YYYY-MM-DD | [optional] 

### Return type

[**GetMandateHistoryV2ViewModelValidResponsePackage**](GetMandateHistoryV2ViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiDirectDebitMandatePatch"></a>
# **apiDirectDebitMandatePatch**
> UpdateMandateViewModelValidResponsePackage apiDirectDebitMandatePatch(apiVersion, authorization, fMessageId, fOrigin, opts)

Update Mandate

This endpoint is used to update the mandate information details for an existing mandate. The user can update any information regarding the mandate.   If any changes are made, this could affect upcoming future direct debits received. Example: If a mandate reference is updated, then the system will create   a new mandate if a direct debit has been received if the old reference was used.    Sample request:                    PATCH /api/DirectDebit/Mandate      {          \&quot;mandateId\&quot;: 16,          \&quot;merchantName\&quot;: \&quot;MerchantName\&quot;,          \&quot;debitingIBAN\&quot;: \&quot;ES1234560002570000123456\&quot;,          \&quot;mandateUsername\&quot;: \&quot;MandateUser\&quot;,          \&quot;statusId\&quot;: 2,          \&quot;referenceNumber\&quot;: \&quot;TTFSW34RF\&quot;,          \&quot;reason\&quot;: \&quot;Update DDM\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.DirectDebitApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "b888f627-c65c-426c-b67f-c09bee0bce43"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.UpdateMandateBindingModel() // UpdateMandateBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiDirectDebitMandatePatch(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to b888f627-c65c-426c-b67f-c09bee0bce43]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**UpdateMandateBindingModel**](UpdateMandateBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**UpdateMandateViewModelValidResponsePackage**](UpdateMandateViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiDirectDebitOutgoingReturnPost"></a>
# **apiDirectDebitOutgoingReturnPost**
> DirectDebitOutgoingReturnViewModelValidResponsePackage apiDirectDebitOutgoingReturnPost(apiVersion, authorization, fMessageId, fOrigin, opts)

Outgoing Return

If a direct debit transaction had the funds taken, the cardholder can ask for a return of funds. There must be a valid reason for the funds to be returned,   hence the user must select the appropriate error message so it can be sent to the creditor.    A SEPA direct debit can be reversed up to 8 weeks after the original transaction.    Sample request:        POST /api/DirectDebit/OutgoingReturn       {          \&quot;directDebitID\&quot;: 0,          \&quot;reason\&quot;: \&quot;Test\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.DirectDebitApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "2b959633-d59e-49ac-adcf-ccc35585eaa0"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.DirectDebitOutgoingReturnBindingModel() // DirectDebitOutgoingReturnBindingModel | 
};
apiInstance.apiDirectDebitOutgoingReturnPost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 2b959633-d59e-49ac-adcf-ccc35585eaa0]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**DirectDebitOutgoingReturnBindingModel**](DirectDebitOutgoingReturnBindingModel.md)|  | [optional] 

### Return type

[**DirectDebitOutgoingReturnViewModelValidResponsePackage**](DirectDebitOutgoingReturnViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiDirectDebitTransactionsGet"></a>
# **apiDirectDebitTransactionsGet**
> DirectDebitReturnTransactionsViewModelV2ValidResponsePackage apiDirectDebitTransactionsGet(apiVersion, authorization, fMessageId, fOrigin, opts)

Direct Debit Return Transactions

Get direct debit return transactions.     Regarding the direct debit return transactions, this will return all the DD transactions where the chid identified by an iban,   has requested money back for a DD which has been paid out and the creditor/vendor has accepted to make the refund.    Although query parameters are optional and not all need to be populated, at least one of the following:        MessageId      Iban      TransactionId        need to be passed. Multiple query parameters can be populated.    Sample requests:                    GET /Transactions?Iban&#x3D;IE46PFSR99107012345678      GET /Transactions?Iban&#x3D;IE46PFSR99107012345678&amp;TransactionId&#x3D;1      GET /Transactions?Iban&#x3D;IE46PFSR99107012345678&amp;TransactionId&#x3D;1&amp;StartDate&#x3D;2020-04-03&amp;EndDate&#x3D;2020-05-03                Note: In Response, Amount is of type long and uses minor currency units (for example, will be in pence not pounds).

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.DirectDebitApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "e7b97bfc-70c1-4946-a47f-fc04cefc2da0"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'messageId': "messageId_example", // String | Transaction by message id
  'iban': "iban_example", // String | Transactions by iban
  'transactionId': "transactionId_example", // String | Transactions by transaction id
  'startDate': "startDate_example", // String | Start date of transactions
  'endDate': "endDate_example" // String | End date of transactions
};
apiInstance.apiDirectDebitTransactionsGet(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to e7b97bfc-70c1-4946-a47f-fc04cefc2da0]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **messageId** | **String**| Transaction by message id | [optional] 
 **iban** | **String**| Transactions by iban | [optional] 
 **transactionId** | **String**| Transactions by transaction id | [optional] 
 **startDate** | **String**| Start date of transactions | [optional] 
 **endDate** | **String**| End date of transactions | [optional] 

### Return type

[**DirectDebitReturnTransactionsViewModelV2ValidResponsePackage**](DirectDebitReturnTransactionsViewModelV2ValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

