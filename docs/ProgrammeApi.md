# FinacApi.ProgrammeApi

All URIs are relative to *https://staging-api.prepaidfinancialservices.com/finac*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiProgrammeCorporateDepositCreditPost**](ProgrammeApi.md#apiProgrammeCorporateDepositCreditPost) | **POST** /api/Programme/CorporateDeposit/Credit | Credit Corporate Deposit
[**apiProgrammeCorporateDepositDebitPost**](ProgrammeApi.md#apiProgrammeCorporateDepositDebitPost) | **POST** /api/Programme/CorporateDeposit/Debit | Debit Corporate Deposit
[**apiProgrammeDistributorCodeAddCorporateCurrencyPost**](ProgrammeApi.md#apiProgrammeDistributorCodeAddCorporateCurrencyPost) | **POST** /api/Programme/{DistributorCode}/AddCorporateCurrency | Add Corporate Currency
[**apiProgrammeGetSpendControlGroupsPost**](ProgrammeApi.md#apiProgrammeGetSpendControlGroupsPost) | **POST** /api/Programme/GetSpendControlGroups | Get Spend Control Groups
[**apiProgrammeSpendControlGroupPost**](ProgrammeApi.md#apiProgrammeSpendControlGroupPost) | **POST** /api/Programme/SpendControlGroup | Create Spend Control Group

<a name="apiProgrammeCorporateDepositCreditPost"></a>
# **apiProgrammeCorporateDepositCreditPost**
> CorporateDepositViewModelValidResponsePackage apiProgrammeCorporateDepositCreditPost(apiVersion, authorization, fMessageId, fOrigin, opts)

Credit Corporate Deposit

Credit a corporate wallet.    Sample request:        POST /api/Programme/CorporateDeposit/Credit      {          \&quot;distributorCode\&quot;: \&quot;{{DC}}\&quot;,          \&quot;amount\&quot;: 200,          \&quot;currencyCode\&quot;: \&quot;GBP\&quot;,          \&quot;transactionDescription\&quot;: \&quot;Corporate Deposit\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.ProgrammeApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "8e8ab77a-61f1-4794-9ae1-7c9b5dc3c159"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.CorporateDepositBindingModel() // CorporateDepositBindingModel | 
};
apiInstance.apiProgrammeCorporateDepositCreditPost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 8e8ab77a-61f1-4794-9ae1-7c9b5dc3c159]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**CorporateDepositBindingModel**](CorporateDepositBindingModel.md)|  | [optional] 

### Return type

[**CorporateDepositViewModelValidResponsePackage**](CorporateDepositViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiProgrammeCorporateDepositDebitPost"></a>
# **apiProgrammeCorporateDepositDebitPost**
> CorporateDepositViewModelValidResponsePackage apiProgrammeCorporateDepositDebitPost(apiVersion, authorization, fMessageId, fOrigin, opts)

Debit Corporate Deposit

Debit a corporate wallet.    Sample request:        POST /api/Programme/CorporateDeposit/Debit      {          \&quot;distributorCode\&quot;: \&quot;{{DC}}\&quot;,          \&quot;amount\&quot;: 200,          \&quot;currencyCode\&quot;: \&quot;GBP\&quot;,          \&quot;transactionDescription\&quot;: \&quot;Corporate Deposit\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.ProgrammeApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "42a58d8c-2e28-4992-9ffd-e5c380d5e466"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.CorporateDepositBindingModel() // CorporateDepositBindingModel | 
};
apiInstance.apiProgrammeCorporateDepositDebitPost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 42a58d8c-2e28-4992-9ffd-e5c380d5e466]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**CorporateDepositBindingModel**](CorporateDepositBindingModel.md)|  | [optional] 

### Return type

[**CorporateDepositViewModelValidResponsePackage**](CorporateDepositViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiProgrammeDistributorCodeAddCorporateCurrencyPost"></a>
# **apiProgrammeDistributorCodeAddCorporateCurrencyPost**
> AddCorporateCurrencyViewModelValidResponsePackage apiProgrammeDistributorCodeAddCorporateCurrencyPost(distributorCode, apiVersion, authorization, fMessageId, fOrigin, opts)

Add Corporate Currency

Adding a new corporate trade wallet on the requested distributor code using the currency/currencies provided.    Sample request:                    POST /api/Programme/{DistributorCode}/AddCorporateCurrency      {          \&quot;currencies\&quot;: [              \&quot;EUR\&quot;          ]      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.ProgrammeApi();
let distributorCode = "distributorCode_example"; // String | 
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "dad76ede-9089-4146-b56d-bd4e99a860c4"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.AddCorporateCurrencyBindingModel() // AddCorporateCurrencyBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiProgrammeDistributorCodeAddCorporateCurrencyPost(distributorCode, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **distributorCode** | **String**|  | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to dad76ede-9089-4146-b56d-bd4e99a860c4]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**AddCorporateCurrencyBindingModel**](AddCorporateCurrencyBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**AddCorporateCurrencyViewModelValidResponsePackage**](AddCorporateCurrencyViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiProgrammeGetSpendControlGroupsPost"></a>
# **apiProgrammeGetSpendControlGroupsPost**
> GetSpendControlGroupsViewModelValidResponsePackage apiProgrammeGetSpendControlGroupsPost(apiVersion, authorization, fMessageId, fOrigin, opts)

Get Spend Control Groups

Gets predefined limit groups which can be used when setting limits via the SpendControl API.    This endpoint works for Trace cards.

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.ProgrammeApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "4eb26113-0bc3-4a5b-af30-15274c81d768"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.GetSpendControlGroupsBindingModel() // GetSpendControlGroupsBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiProgrammeGetSpendControlGroupsPost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 4eb26113-0bc3-4a5b-af30-15274c81d768]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**GetSpendControlGroupsBindingModel**](GetSpendControlGroupsBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**GetSpendControlGroupsViewModelValidResponsePackage**](GetSpendControlGroupsViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiProgrammeSpendControlGroupPost"></a>
# **apiProgrammeSpendControlGroupPost**
> CreateSpendControlGroupViewModelValidResponsePackage apiProgrammeSpendControlGroupPost(apiVersion, authorization, fMessageId, fOrigin, opts)

Create Spend Control Group

Creates a predefined limits groups which can be used when setting limits via the SpendControl API.  Each limit value has to be set, as &#x27;null&#x27; (&#x3D; not setting the limit) means the limit is disabled.    This endpoint works for Trace cards.

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.ProgrammeApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "c10f36ef-6d98-46f5-b3a0-39db9e5e51c2"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.CreateSpendControlGroupBindingModel() // CreateSpendControlGroupBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiProgrammeSpendControlGroupPost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to c10f36ef-6d98-46f5-b3a0-39db9e5e51c2]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**CreateSpendControlGroupBindingModel**](CreateSpendControlGroupBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**CreateSpendControlGroupViewModelValidResponsePackage**](CreateSpendControlGroupViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

