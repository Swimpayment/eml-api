# FinacApi.ThreeDSApi

All URIs are relative to *https://staging-api.prepaidfinancialservices.com/finac*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiThreeDSIdGet**](ThreeDSApi.md#apiThreeDSIdGet) | **GET** /api/ThreeDS/{Id} | Get enrollment details
[**apiThreeDSIdSecurityDetailsPatch**](ThreeDSApi.md#apiThreeDSIdSecurityDetailsPatch) | **PATCH** /api/ThreeDS/{Id}/SecurityDetails | Update 3DS security details
[**apiThreeDSIdValidatePost**](ThreeDSApi.md#apiThreeDSIdValidatePost) | **POST** /api/ThreeDS/{Id}/Validate | Validate Security Answer

<a name="apiThreeDSIdGet"></a>
# **apiThreeDSIdGet**
> EnrollmentDetailsThreeDSViewModelValidResponsePackage apiThreeDSIdGet(id, apiVersion, authorization, fMessageId, fOrigin)

Get enrollment details

Retrieves the enrollment details of the cardholder from our 3DS provider.    Sample request:            GET /api/ThreeDS/400000000000

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.ThreeDSApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "77a5b523-d0d6-4c0a-93df-1d5f42efe00f"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiThreeDSIdGet(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 77a5b523-d0d6-4c0a-93df-1d5f42efe00f]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**EnrollmentDetailsThreeDSViewModelValidResponsePackage**](EnrollmentDetailsThreeDSViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiThreeDSIdSecurityDetailsPatch"></a>
# **apiThreeDSIdSecurityDetailsPatch**
> UpdateSecurityDetailsThreeDSViewModelValidResponsePackage apiThreeDSIdSecurityDetailsPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Update 3DS security details

This endpoints offers to create or update security details for 3DS enrollment. The security answer needs to be encrypted.    The encryption algorithm used is AES.  The cipher mode used is ECB.  No IV is required.    Security answer is always required while security question is optional. If security question is not provided, the flow will check the current enrollment  details and if no security question is found, the default value from our configurations per bin/distributor code will be assigned.    Sample request:            PATCH /api/ThreeDS/400000000000/SecurityDetails      {          \&quot;securityQuestion\&quot;: \&quot;Favourite Football Team\&quot;,          \&quot;securityAnswer\&quot;: \&quot;F4FE2C36F2C4082FC5B9AC3FCB3634B2\&quot;,      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.ThreeDSApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "46d04b7c-7677-4f9f-8e05-da82d3fbe7cb"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.UpdateSecurityDetailsThreeDSBindingModel() // UpdateSecurityDetailsThreeDSBindingModel | 
};
apiInstance.apiThreeDSIdSecurityDetailsPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 46d04b7c-7677-4f9f-8e05-da82d3fbe7cb]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**UpdateSecurityDetailsThreeDSBindingModel**](UpdateSecurityDetailsThreeDSBindingModel.md)|  | [optional] 

### Return type

[**UpdateSecurityDetailsThreeDSViewModelValidResponsePackage**](UpdateSecurityDetailsThreeDSViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiThreeDSIdValidatePost"></a>
# **apiThreeDSIdValidatePost**
> ValidateSecurityAnswerThreeDSViewModelValidResponsePackage apiThreeDSIdValidatePost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Validate Security Answer

Validates security answer for a given cardholder id. The security answer needs to be encrypted.    The encryption algorithm used is AES.  The cipher mode used is ECB.  No IV is required.    Sample request:            POST /api/ThreeDS/400000000000/Validate      {          \&quot;securityAnswer\&quot;: \&quot;F4FE2C36F2C4082FC5B9AC3FCB3634B2\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.ThreeDSApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "f9fba561-797c-4f60-a8fb-3f399504f5c7"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.ValidateSecurityAnswerThreeDSBindingModel() // ValidateSecurityAnswerThreeDSBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiThreeDSIdValidatePost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to f9fba561-797c-4f60-a8fb-3f399504f5c7]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**ValidateSecurityAnswerThreeDSBindingModel**](ValidateSecurityAnswerThreeDSBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**ValidateSecurityAnswerThreeDSViewModelValidResponsePackage**](ValidateSecurityAnswerThreeDSViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

