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
let fMessageId = "22390735-121d-4114-9a78-19ca8afe14b4"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 22390735-121d-4114-9a78-19ca8afe14b4]
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
let fMessageId = "65907e7f-8822-4f6a-b3ca-8409d6b79ef3"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 65907e7f-8822-4f6a-b3ca-8409d6b79ef3]
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
let fMessageId = "5b2abbe2-2b4a-4861-b06f-f96cd3069d68"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 5b2abbe2-2b4a-4861-b06f-f96cd3069d68]
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
let fMessageId = "00198f31-0838-40ac-9cf1-55ae281400e3"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 00198f31-0838-40ac-9cf1-55ae281400e3]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**KBAValidateViewModelValidResponsePackage**](KBAValidateViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

