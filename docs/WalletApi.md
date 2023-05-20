# FinacApi.WalletApi

All URIs are relative to *https://staging-api.prepaidfinancialservices.com/finac*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiWalletIdPatch**](WalletApi.md#apiWalletIdPatch) | **PATCH** /api/Wallet/{Id} | Wallet Spend Control
[**apiWalletIdPost**](WalletApi.md#apiWalletIdPost) | **POST** /api/Wallet/{Id} | Create Wallet
[**apiWalletWalletSpendControlGroupGet**](WalletApi.md#apiWalletWalletSpendControlGroupGet) | **GET** /api/Wallet/WalletSpendControlGroup | Wallet Spend Control Group Get
[**apiWalletWalletSpendControlGroupPost**](WalletApi.md#apiWalletWalletSpendControlGroupPost) | **POST** /api/Wallet/WalletSpendControlGroup | Wallet Spend Control Group Create

<a name="apiWalletIdPatch"></a>
# **apiWalletIdPatch**
> WalletSpendControlUpdateViewModelValidResponsePackage apiWalletIdPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Wallet Spend Control

Sets the Wallet Spend Control settings at TRACE API    Sample request        PATCH /Account/400000000000            {          \&quot;walletId\&quot; : \&quot;WLT002\&quot;,          \&quot;groupName\&quot; : \&quot;TestGroup\&quot;      }          PATCH /Account/400000000000            {          \&quot;walletId\&quot; : \&quot;WLT002\&quot;,          \&quot;groupSettings\&quot; : [              {                  \&quot;source\&quot;: [                      \&quot;POS\&quot;,                      \&quot;ATM\&quot;,                      \&quot;Ecommerce\&quot;                  ],                  \&quot;allowedMerchantCategory\&quot;: [                      \&quot;0\&quot;,                      \&quot;01\&quot;,                      \&quot;02\&quot;                  ],                  \&quot;allowedCardAcceptor\&quot;: [                      \&quot;string\&quot;,                      \&quot;021\&quot;                  ]              },              {                  \&quot;source\&quot;: [                      \&quot;Moto\&quot;,                      \&quot;API\&quot;                  ],                  \&quot;allowedMerchantCategory\&quot;: [                      \&quot;0\&quot;,                      \&quot;01\&quot;,                      \&quot;02\&quot;                  ],                  \&quot;allowedCardAcceptor\&quot;: [                      \&quot;string\&quot;,                      \&quot;021\&quot;                  ]              }           ]      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.WalletApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "ffadfa0c-9a81-4905-a268-2a417ea87081"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.WalletSpendControlUpdateBindingModel() // WalletSpendControlUpdateBindingModel | 
};
apiInstance.apiWalletIdPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to ffadfa0c-9a81-4905-a268-2a417ea87081]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**WalletSpendControlUpdateBindingModel**](WalletSpendControlUpdateBindingModel.md)|  | [optional] 

### Return type

[**WalletSpendControlUpdateViewModelValidResponsePackage**](WalletSpendControlUpdateViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiWalletIdPost"></a>
# **apiWalletIdPost**
> AccountWalletViewModelValidResponsePackage apiWalletIdPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Create Wallet

Creates a wallet for the given account.

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.WalletApi();
let id = "id_example"; // String | Cardholder id.    Expected format: ^[\\d]{12}$|^$
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "83606cca-fbe9-4f3e-b382-9429b8f61ef0"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.AccountWalletBindingModel() // AccountWalletBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiWalletIdPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **id** | **String**| Cardholder id.    Expected format: ^[\\d]{12}$|^$ | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 83606cca-fbe9-4f3e-b382-9429b8f61ef0]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**AccountWalletBindingModel**](AccountWalletBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**AccountWalletViewModelValidResponsePackage**](AccountWalletViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiWalletWalletSpendControlGroupGet"></a>
# **apiWalletWalletSpendControlGroupGet**
> WalletSpendControlGroupGetViewModelValidResponsePackage apiWalletWalletSpendControlGroupGet(apiVersion, authorization, fMessageId, fOrigin, opts)

Wallet Spend Control Group Get

Get Wallet Spend Control Groups by Bin and/or DistributorCode and/or GroupName    Sample request:        GET /Wallet/WalletSpendControlGroup?Bin&#x3D;{{BIN}}&amp;DistributorCode&#x3D;{{DC}}&amp;GroupName&#x3D;TestGroup

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.WalletApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "5d0699b7-dc1b-48e5-9281-fa6a2a1fbf77"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'bin': "bin_example", // String | Assigned by PFS. It is the first 8 digits of the cards on your program.
  'distributorCode': "distributorCode_example", // String | The unique identifier assigned by PFS, to your program
  'groupName': "groupName_example" // String | Name of the group
};
apiInstance.apiWalletWalletSpendControlGroupGet(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 5d0699b7-dc1b-48e5-9281-fa6a2a1fbf77]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **bin** | **String**| Assigned by PFS. It is the first 8 digits of the cards on your program. | [optional] 
 **distributorCode** | **String**| The unique identifier assigned by PFS, to your program | [optional] 
 **groupName** | **String**| Name of the group | [optional] 

### Return type

[**WalletSpendControlGroupGetViewModelValidResponsePackage**](WalletSpendControlGroupGetViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiWalletWalletSpendControlGroupPost"></a>
# **apiWalletWalletSpendControlGroupPost**
> WalletSpendControlGroupInsertViewModelValidResponsePackage apiWalletWalletSpendControlGroupPost(apiVersion, authorization, fMessageId, fOrigin, opts)

Wallet Spend Control Group Create

Creates a Wallet Spend Control Group    Sample request:        POST /Wallet/WalletSpendControlGroup      {         \&quot;bin\&quot;: \&quot;{{BIN}}\&quot;,         \&quot;distributorCode\&quot;: \&quot;{{DC}}\&quot;,         \&quot;groupName\&quot;: \&quot;TestGroup\&quot;,         \&quot;groupSettings\&quot;: [             {                  \&quot;source\&quot;: [\&quot;POS\&quot;, \&quot;ATM\&quot;, \&quot;Ecommerce\&quot;, \&quot;Moto\&quot;, \&quot;API\&quot;],               \&quot;allowedMerchantCategory\&quot;: [\&quot;0\&quot;, \&quot;01\&quot;, \&quot;02\&quot;],                  \&quot;allowedCardAcceptor\&quot;: [\&quot;string\&quot;, \&quot;021\&quot;],                  \&quot;allowedPostalCode\&quot; : [\&quot;C15 1234\&quot;],                  \&quot;allowedTerminalId\&quot;: [\&quot;Term1234\&quot;]             },             {                  \&quot;source\&quot;: [\&quot;POS\&quot;, \&quot;ATM\&quot;, \&quot;Ecommerce\&quot;, \&quot;Moto\&quot;, \&quot;API\&quot;],               \&quot;allowedMerchantCategory\&quot;: [\&quot;0\&quot;, \&quot;01\&quot;, \&quot;02\&quot;],               \&quot;allowedCardAcceptor\&quot;: [\&quot;string\&quot;, \&quot;021\&quot;]             }         ]      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.WalletApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "e2444202-1d4c-41c0-8317-bea027a4c8af"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.WalletSpendControlGroupInsertBindingModel() // WalletSpendControlGroupInsertBindingModel | 
};
apiInstance.apiWalletWalletSpendControlGroupPost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to e2444202-1d4c-41c0-8317-bea027a4c8af]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**WalletSpendControlGroupInsertBindingModel**](WalletSpendControlGroupInsertBindingModel.md)|  | [optional] 

### Return type

[**WalletSpendControlGroupInsertViewModelValidResponsePackage**](WalletSpendControlGroupInsertViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

