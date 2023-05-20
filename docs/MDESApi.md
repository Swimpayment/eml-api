# FinacApi.MDESApi

All URIs are relative to *https://staging-api.prepaidfinancialservices.com/finac*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiMDESIdSearchPost**](MDESApi.md#apiMDESIdSearchPost) | **POST** /api/MDES/{Id}/Search | MDES Search
[**apiMDESIdTransactionsGet**](MDESApi.md#apiMDESIdTransactionsGet) | **GET** /api/MDES/{Id}/Transactions | MDES Transactions
[**apiMDESIdUpdatePatch**](MDESApi.md#apiMDESIdUpdatePatch) | **PATCH** /api/MDES/{Id}/Update | MDES Update Token

<a name="apiMDESIdSearchPost"></a>
# **apiMDESIdSearchPost**
> TokenSearchViewModelValidResponsePackage apiMDESIdSearchPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

MDES Search

Provides the ability to search for tokens based on CardholderId, Account PAN, or Token Unique Reference.   Returns all of the tokens associated with an account according to the scope of the indicated search request criteria.   The response includes key state and informational data for each token, including the Token Unique Reference which is needed for subsequent token lifecycle management activities.

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.MDESApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "61cfb485-ef16-4d5c-9778-ce0cae211116"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.TokenSearchBindingModel() // TokenSearchBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiMDESIdSearchPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 61cfb485-ef16-4d5c-9778-ce0cae211116]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**TokenSearchBindingModel**](TokenSearchBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**TokenSearchViewModelValidResponsePackage**](TokenSearchViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiMDESIdTransactionsGet"></a>
# **apiMDESIdTransactionsGet**
> TokenTransactionsViewModelValidResponsePackage apiMDESIdTransactionsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts)

MDES Transactions

Used to retrieve transactions performed by a token. It only returns transactions performed within the last 30 days, to help identify a particular token, or to identify a particular recent transaction. It is not intended to provide the full transaction history of a token or Account PAN.

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.MDESApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "79ffbb8a-90df-497c-8222-d318006dfe6b"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'tokenUniqueReference': "tokenUniqueReference_example" // String | Unique reference of the token to be updated. Used to retrieve transactions performed by a token.
};
apiInstance.apiMDESIdTransactionsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 79ffbb8a-90df-497c-8222-d318006dfe6b]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **tokenUniqueReference** | **String**| Unique reference of the token to be updated. Used to retrieve transactions performed by a token. | [optional] 

### Return type

[**TokenTransactionsViewModelValidResponsePackage**](TokenTransactionsViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiMDESIdUpdatePatch"></a>
# **apiMDESIdUpdatePatch**
> TokenUpdateViewModelValidResponsePackage apiMDESIdUpdatePatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

MDES Update Token

Ability to update an account PAN, PSN, expiry date, product configuration, or comments associated to one or all provisioned tokens

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.MDESApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "d09fc106-6313-4aa4-9ba1-af65c6af0623"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.TokenUpdateBindingModel() // TokenUpdateBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiMDESIdUpdatePatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to d09fc106-6313-4aa4-9ba1-af65c6af0623]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**TokenUpdateBindingModel**](TokenUpdateBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**TokenUpdateViewModelValidResponsePackage**](TokenUpdateViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

