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
let fMessageId = "325c8c1b-c09f-4c43-9a8c-2cb07c131638"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 325c8c1b-c09f-4c43-9a8c-2cb07c131638]
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
let fMessageId = "c8ea1c0f-0b95-4a3b-9673-096af346696c"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to c8ea1c0f-0b95-4a3b-9673-096af346696c]
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
let fMessageId = "6755978f-0968-4a51-980d-bbb4441bdb02"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 6755978f-0968-4a51-980d-bbb4441bdb02]
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
let fMessageId = "660c28dd-d111-4f11-912e-2e90a90478fb"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 660c28dd-d111-4f11-912e-2e90a90478fb]
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
let fMessageId = "40c16f14-01a5-4227-9326-ac16cf091784"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 40c16f14-01a5-4227-9326-ac16cf091784]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**CreateSpendControlGroupBindingModel**](CreateSpendControlGroupBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**CreateSpendControlGroupViewModelValidResponsePackage**](CreateSpendControlGroupViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

