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
let fMessageId = "187a8538-c9f5-46da-b2db-da9169d639ab"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 187a8538-c9f5-46da-b2db-da9169d639ab]
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
let fMessageId = "58706fd3-418c-4133-85e1-25b74c2d4970"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 58706fd3-418c-4133-85e1-25b74c2d4970]
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
let fMessageId = "c134dd2e-afc2-4d18-9ab1-e6142a64af49"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to c134dd2e-afc2-4d18-9ab1-e6142a64af49]
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
let fMessageId = "6bbf218c-abc9-443c-a3bb-f59ef6bdd18c"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 6bbf218c-abc9-443c-a3bb-f59ef6bdd18c]
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
let fMessageId = "5328d3d8-827b-44a1-a047-eeb722d02c4c"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 5328d3d8-827b-44a1-a047-eeb722d02c4c]
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
let fMessageId = "af1d0f15-81a0-4b2e-8f6d-b868e7d59a9c"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to af1d0f15-81a0-4b2e-8f6d-b868e7d59a9c]
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
let fMessageId = "180931c3-0007-43a9-b8ca-d2db79b16cbe"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 180931c3-0007-43a9-b8ca-d2db79b16cbe]
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
let fMessageId = "14af998c-77ab-4957-a4af-9a32974768a7"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 14af998c-77ab-4957-a4af-9a32974768a7]
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
let fMessageId = "fa677d3f-21ff-4536-9d5e-99faa59bb090"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to fa677d3f-21ff-4536-9d5e-99faa59bb090]
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
let fMessageId = "fbef3a80-59e3-4607-a2b3-c9e94c00e48a"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to fbef3a80-59e3-4607-a2b3-c9e94c00e48a]
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
let fMessageId = "438fa602-37e6-4068-a15f-f98879c8bb72"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 438fa602-37e6-4068-a15f-f98879c8bb72]
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
let fMessageId = "3c4ab533-9c00-4254-8612-926e1989b1ea"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 3c4ab533-9c00-4254-8612-926e1989b1ea]
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
let fMessageId = "6501d8fa-52b7-4845-87f2-3e077b7acc73"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 6501d8fa-52b7-4845-87f2-3e077b7acc73]
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

