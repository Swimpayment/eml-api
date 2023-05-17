# FinacApi.KBAApi

All URIs are relative to *https://staging-api.prepaidfinancialservices.com/finac*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiKBAIdDelete**](KBAApi.md#apiKBAIdDelete) | **DELETE** /api/KBA/{Id} | Delete KBA Answer
[**apiKBAIdPost**](KBAApi.md#apiKBAIdPost) | **POST** /api/KBA/{Id} | 
[**apiKBAIdPut**](KBAApi.md#apiKBAIdPut) | **PUT** /api/KBA/{Id} | 
[**apiKBAIdValidateKBAGet**](KBAApi.md#apiKBAIdValidateKBAGet) | **GET** /api/KBA/{Id}/Validate/{KBA} | 

<a name="apiKBAIdDelete"></a>
# **apiKBAIdDelete**
> KBADeleteViewModelValidResponsePackage apiKBAIdDelete(id, apiVersion, authorization, fMessageId, fOrigin)

Delete KBA Answer

Delete KBA Answer for a given Cardholder.

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.KBAApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "4c3994fa-ea44-443c-a99b-630a5932477c"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiKBAIdDelete(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 4c3994fa-ea44-443c-a99b-630a5932477c]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**KBADeleteViewModelValidResponsePackage**](KBADeleteViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiKBAIdPost"></a>
# **apiKBAIdPost**
> AddCardholderKBAViewModelValidResponsePackage apiKBAIdPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)



Set a KBA Answer for a given Cardholder to be used as an extra verification step for Cardholders.

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.KBAApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "336d1b9d-f5bd-4ec8-be77-ef66ee234800"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.KBAInsertBindingModel() // KBAInsertBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiKBAIdPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 336d1b9d-f5bd-4ec8-be77-ef66ee234800]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**KBAInsertBindingModel**](KBAInsertBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**AddCardholderKBAViewModelValidResponsePackage**](AddCardholderKBAViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiKBAIdPut"></a>
# **apiKBAIdPut**
> KBAUpdateViewModelValidResponsePackage apiKBAIdPut(id, apiVersion, authorization, fMessageId, fOrigin, opts)



Update a KBA Answer for a given Cardholder to be used as an extra verification step for Cardholders.  If KBA does not exists already, it will be inserted.

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.KBAApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "c278b75d-a94c-42a2-af77-f057ae139cf8"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.KBAUpdateBindingModel() // KBAUpdateBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiKBAIdPut(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to c278b75d-a94c-42a2-af77-f057ae139cf8]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**KBAUpdateBindingModel**](KBAUpdateBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**KBAUpdateViewModelValidResponsePackage**](KBAUpdateViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiKBAIdValidateKBAGet"></a>
# **apiKBAIdValidateKBAGet**
> KBAValidateViewModelValidResponsePackage apiKBAIdValidateKBAGet(id, KBA, apiVersion, authorization, fMessageId, fOrigin)



Validate KBA Answer for a given Cardholder.

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.KBAApi();
let id = "id_example"; // String | 
let KBA = "KBA_example"; // String | 
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "70adff27-4968-4883-903c-5cf751be03a2"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiKBAIdValidateKBAGet(id, KBA, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
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
 **KBA** | **String**|  | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to 70adff27-4968-4883-903c-5cf751be03a2]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**KBAValidateViewModelValidResponsePackage**](KBAValidateViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

