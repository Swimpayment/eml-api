# FinacApi.MessageApi

All URIs are relative to *https://staging-api.prepaidfinancialservices.com/finac*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiMessageLookupMessageIdGet**](MessageApi.md#apiMessageLookupMessageIdGet) | **GET** /api/Message/Lookup/{MessageId} | Message Response LookUp

<a name="apiMessageLookupMessageIdGet"></a>
# **apiMessageLookupMessageIdGet**
> MessageLookupViewModelValidResponsePackage apiMessageLookupMessageIdGet(messageId, apiVersion, authorization, fMessageId, fOrigin)

Message Response LookUp

Returns the description of an API call from a given message ID.    Sample request:        GET /api/Message/Lookup/503c116c-bc6f-4bdb-a547-ff0641121fa9

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.MessageApi();
let messageId = "messageId_example"; // String | 
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "f3f1e517-4870-4f22-a022-c675a1eaf7c8"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiMessageLookupMessageIdGet(messageId, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
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
 **messageId** | **String**|  | 
 **apiVersion** | **String**|  | [default to 2.0]
 **authorization** | **String**| Access token | [default to Bearer [jwttoken]]
 **fMessageId** | **String**| Unique identifier | [default to f3f1e517-4870-4f22-a022-c675a1eaf7c8]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**MessageLookupViewModelValidResponsePackage**](MessageLookupViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

