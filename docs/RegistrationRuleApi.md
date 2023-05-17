# FinacApi.RegistrationRuleApi

All URIs are relative to *https://staging-api.prepaidfinancialservices.com/finac*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiRegistrationRuleGet**](RegistrationRuleApi.md#apiRegistrationRuleGet) | **GET** /api/RegistrationRule | Get Registration Rules
[**apiRegistrationRulePost**](RegistrationRuleApi.md#apiRegistrationRulePost) | **POST** /api/RegistrationRule | Add Registration Rule
[**apiRegistrationRuleUserRegistrationRuleIdDelete**](RegistrationRuleApi.md#apiRegistrationRuleUserRegistrationRuleIdDelete) | **DELETE** /api/RegistrationRule/{UserRegistrationRuleId} | Delete Registration Rule

<a name="apiRegistrationRuleGet"></a>
# **apiRegistrationRuleGet**
> GetRegistrationRulesViewModelValidResponsePackage apiRegistrationRuleGet(apiVersion, authorization, fMessageId, fOrigin, opts)

Get Registration Rules

Retrieves all registration rules

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.RegistrationRuleApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "a7c12a49-bfd5-4006-9c25-39805ec68862"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'pageNo': 56, // Number | 
  'pageSize': 56, // Number | 
  'includeArchived': true // Boolean | 
};
apiInstance.apiRegistrationRuleGet(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to a7c12a49-bfd5-4006-9c25-39805ec68862]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **pageNo** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **includeArchived** | **Boolean**|  | [optional] 

### Return type

[**GetRegistrationRulesViewModelValidResponsePackage**](GetRegistrationRulesViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiRegistrationRulePost"></a>
# **apiRegistrationRulePost**
> AddRegistrationRuleViewModelValidResponsePackage apiRegistrationRulePost(apiVersion, authorization, fMessageId, fOrigin, opts)

Add Registration Rule

Add new registration rule

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.RegistrationRuleApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "60a1c83f-84da-497f-bb3e-903925aba01f"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.AddRegistrationRuleBindingModel() // AddRegistrationRuleBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiRegistrationRulePost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 60a1c83f-84da-497f-bb3e-903925aba01f]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**AddRegistrationRuleBindingModel**](AddRegistrationRuleBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**AddRegistrationRuleViewModelValidResponsePackage**](AddRegistrationRuleViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiRegistrationRuleUserRegistrationRuleIdDelete"></a>
# **apiRegistrationRuleUserRegistrationRuleIdDelete**
> DeleteRegistrationRuleViewModelValidResponsePackage apiRegistrationRuleUserRegistrationRuleIdDelete(userRegistrationRuleId, apiVersion, authorization, fMessageId, fOrigin, opts)

Delete Registration Rule

Delete registration rule

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.RegistrationRuleApi();
let userRegistrationRuleId = "userRegistrationRuleId_example"; // String | 
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "1d0bf75b-c251-4d33-99de-2a0258ebab99"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'cSRId': "cSRId_example" // String | 
};
apiInstance.apiRegistrationRuleUserRegistrationRuleIdDelete(userRegistrationRuleId, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **userRegistrationRuleId** | **String**|  | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 1d0bf75b-c251-4d33-99de-2a0258ebab99]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **cSRId** | **String**|  | [optional] 

### Return type

[**DeleteRegistrationRuleViewModelValidResponsePackage**](DeleteRegistrationRuleViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

