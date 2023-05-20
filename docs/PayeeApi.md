# FinacApi.PayeeApi

All URIs are relative to *https://staging-api.prepaidfinancialservices.com/finac*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPayeeIdConfirmPost**](PayeeApi.md#apiPayeeIdConfirmPost) | **POST** /api/Payee/{Id}/Confirm | Confirms Payee details
[**apiPayeeIdDelete**](PayeeApi.md#apiPayeeIdDelete) | **DELETE** /api/Payee/{Id} | Deletes Payee
[**apiPayeeIdGet**](PayeeApi.md#apiPayeeIdGet) | **GET** /api/Payee/{Id} | Confirms Payee details
[**apiPayeeIdPut**](PayeeApi.md#apiPayeeIdPut) | **PUT** /api/Payee/{Id} | Updates Payee details
[**apiPayeeIdResendOTPPost**](PayeeApi.md#apiPayeeIdResendOTPPost) | **POST** /api/Payee/{Id}/ResendOTP | Resend confirmation OTP

<a name="apiPayeeIdConfirmPost"></a>
# **apiPayeeIdConfirmPost**
> ConfirmPayeeViewModelValidResponsePackage apiPayeeIdConfirmPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Confirms Payee details

This endpoint will confirm the payee details linked to the cardholder id.       Sample request:                    POST /api/Payee/400000000000/Confirm      {          \&quot;payeeId\&quot;: \&quot;A84E1FE8-1234-1234-1234-DA7699183FA9\&quot;,          \&quot;kba\&quot;: \&quot;13966BB92642BCF01B68EF61B5E6681F94B6992A5FB97576E4875293B921678A\&quot;,          \&quot;otp\&quot;: \&quot;74BFBD5635A5886CD57644DB38E2F882\&quot;      }                Possible error to be thrown:    1. \&quot;Error Code not defined.\&quot;  2. \&quot;Payee not supplied.\&quot;  3. \&quot;Payee not found.\&quot;  4. \&quot;Cardholder not found.\&quot;  5. \&quot;Unsupported currency.\&quot;  6. \&quot;Payee already exists.\&quot;  7. \&quot;Currency is empty.\&quot;  8. \&quot;Failed to send SMS.\&quot;  9. \&quot;Payee validation failed.\&quot;  10. \&quot;Payee already confirmed.\&quot;  11. \&quot;Payee confirmation failed.\&quot;  12. \&quot;Failed to mark Payee as inactive.\&quot;  13. \&quot;Confirmation request is null.\&quot;  14. \&quot;Reconfirm Payee request is null.\&quot;  15. \&quot;New cardholder not found.\&quot;  16. \&quot;Failed to transfer Payees.\&quot;  17. \&quot;Payee not confirmed.\&quot;  18. \&quot;Payees already transferred.\&quot;  19. \&quot;No OTP details found.\&quot;  20. \&quot;No Payees found for cardholder.\&quot;  21. \&quot;unexpected general exception.\&quot;

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.PayeeApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "79f3da31-13cb-4efd-88d4-237936948ca5"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.ConfirmPayeeBindingModel() // ConfirmPayeeBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiPayeeIdConfirmPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 79f3da31-13cb-4efd-88d4-237936948ca5]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**ConfirmPayeeBindingModel**](ConfirmPayeeBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**ConfirmPayeeViewModelValidResponsePackage**](ConfirmPayeeViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiPayeeIdDelete"></a>
# **apiPayeeIdDelete**
> DeletePayeeViewModelValidResponsePackage apiPayeeIdDelete(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Deletes Payee

This endpoint will delete the payee.       Sample request:                    Delete /api/Payee      {          \&quot;payeeid\&quot;: \&quot;63ec1888-1234-1234-1234-f0cc30604b11\&quot;                }                Possible error to be thrown:    1. \&quot;Error Code not defined.\&quot;  2. \&quot;Payee not supplied.\&quot;  3. \&quot;Payee not found.\&quot;  4. \&quot;Cardholder not found.\&quot;  5. \&quot;Unsupported currency.\&quot;  6. \&quot;Payee already exists.\&quot;  7. \&quot;Currency is empty.\&quot;  8. \&quot;Failed to send SMS.\&quot;  9. \&quot;Payee validation failed.\&quot;  10. \&quot;Payee already confirmed.\&quot;  11. \&quot;Payee confirmation failed.\&quot;  12. \&quot;Failed to mark Payee as inactive.\&quot;  13. \&quot;Confirmation request is null.\&quot;  14. \&quot;Reconfirm Payee request is null.\&quot;  15. \&quot;New cardholder not found.\&quot;  16. \&quot;Failed to transfer Payees.\&quot;  17. \&quot;Payee not confirmed.\&quot;  18. \&quot;Payees already transferred.\&quot;  19. \&quot;No OTP details found.\&quot;  20. \&quot;No Payees found for cardholder.\&quot;  21. \&quot;unexpected general exception.\&quot;

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.PayeeApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "cae29382-23af-4c72-9b86-ffbff41252fd"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.DeletePayeeBindingModel() // DeletePayeeBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiPayeeIdDelete(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to cae29382-23af-4c72-9b86-ffbff41252fd]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**DeletePayeeBindingModel**](DeletePayeeBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**DeletePayeeViewModelValidResponsePackage**](DeletePayeeViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiPayeeIdGet"></a>
# **apiPayeeIdGet**
> GetPayeeViewModelValidResponsePackage apiPayeeIdGet(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Confirms Payee details

This endpoint will get the payee details, if the payee id is not empty, or else it will retreive all payees, linked to the cardholder id.       Sample request 1:                    GET /api/Payee/400000000000    Sample request 2:        GET /api/Payee/400000000000      {          \&quot;payeeid\&quot;: \&quot;63ec1888-1234-1234-1234-f0cc30604b11\&quot;           }                Possible error to be thrown:    1. \&quot;Error Code not defined.\&quot;  2. \&quot;Payee not supplied.\&quot;  3. \&quot;Payee not found.\&quot;  4. \&quot;Cardholder not found.\&quot;  5. \&quot;Unsupported currency.\&quot;  6. \&quot;Payee already exists.\&quot;  7. \&quot;Currency is empty.\&quot;  8. \&quot;Failed to send SMS.\&quot;  9. \&quot;Payee validation failed.\&quot;  10. \&quot;Payee already confirmed.\&quot;  11. \&quot;Payee confirmation failed.\&quot;  12. \&quot;Failed to mark Payee as inactive.\&quot;  13. \&quot;Confirmation request is null.\&quot;  14. \&quot;Reconfirm Payee request is null.\&quot;  15. \&quot;New cardholder not found.\&quot;  16. \&quot;Failed to transfer Payees.\&quot;  17. \&quot;Payee not confirmed.\&quot;  18. \&quot;Payees already transferred.\&quot;  19. \&quot;No OTP details found.\&quot;  20. \&quot;No Payees found for cardholder.\&quot;  21. \&quot;unexpected general exception.\&quot;

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.PayeeApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "b7f0a751-c4a7-4c95-b111-7d9979481ff0"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.GetPayeeBindingModel() // GetPayeeBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiPayeeIdGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to b7f0a751-c4a7-4c95-b111-7d9979481ff0]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**GetPayeeBindingModel**](GetPayeeBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**GetPayeeViewModelValidResponsePackage**](GetPayeeViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, application/_*+json
 - **Accept**: application/json

<a name="apiPayeeIdPut"></a>
# **apiPayeeIdPut**
> UpdatePayeeViewModelValidResponsePackage apiPayeeIdPut(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Updates Payee details

This endpoint will save the payee details and linked to the cardholder id.       Sample request:                    PUT /api/Payee      {          \&quot;Name\&quot;: \&quot;WLT00002\&quot;,          \&quot;Surname\&quot;: \&quot;WLT00052\&quot;      }                Possible error to be thrown:    1. \&quot;Error Code not defined.\&quot;  2. \&quot;Payee not supplied.\&quot;  3. \&quot;Payee not found.\&quot;  4. \&quot;Cardholder not found.\&quot;  5. \&quot;Unsupported currency.\&quot;  6. \&quot;Payee already exists.\&quot;  7. \&quot;Currency is empty.\&quot;  8. \&quot;Failed to send SMS.\&quot;  9. \&quot;Payee validation failed.\&quot;  10. \&quot;Payee already confirmed.\&quot;  11. \&quot;Payee confirmation failed.\&quot;  12. \&quot;Failed to mark Payee as inactive.\&quot;  13. \&quot;Confirmation request is null.\&quot;  14. \&quot;Reconfirm Payee request is null.\&quot;  15. \&quot;New cardholder not found.\&quot;  16. \&quot;Failed to transfer Payees.\&quot;  17. \&quot;Payee not confirmed.\&quot;  18. \&quot;Payees already transferred.\&quot;  19. \&quot;No OTP details found.\&quot;  20. \&quot;No Payees found for cardholder.\&quot;  21. \&quot;unexpected general exception.\&quot;

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.PayeeApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "75ff22b7-4ef3-4bf4-83b6-bc3cd3b561e0"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.UpdatePayeeBindingModel() // UpdatePayeeBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiPayeeIdPut(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 75ff22b7-4ef3-4bf4-83b6-bc3cd3b561e0]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**UpdatePayeeBindingModel**](UpdatePayeeBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**UpdatePayeeViewModelValidResponsePackage**](UpdatePayeeViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiPayeeIdResendOTPPost"></a>
# **apiPayeeIdResendOTPPost**
> ResendOTPPayeeViewModelValidResponsePackage apiPayeeIdResendOTPPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Resend confirmation OTP

This endpoint will resend the confirmation OTP code.    Sample request:                    POST /api/Payee/400000000000/ResendOTP      {          \&quot;payeeId\&quot;: \&quot;63ec1888-1234-1234-1234-f0cc30604b11\&quot;      }                Possible error to be thrown:    1. \&quot;Error Code not defined.\&quot;  2. \&quot;Payee not supplied.\&quot;  3. \&quot;Payee not found.\&quot;  4. \&quot;Cardholder not found.\&quot;  5. \&quot;Unsupported currency.\&quot;  6. \&quot;Payee already exists.\&quot;  7. \&quot;Currency is empty.\&quot;  8. \&quot;Failed to send SMS.\&quot;  9. \&quot;Payee validation failed.\&quot;  10. \&quot;Payee already confirmed.\&quot;  11. \&quot;Payee confirmation failed.\&quot;  12. \&quot;Failed to mark Payee as inactive.\&quot;  13. \&quot;Confirmation request is null.\&quot;  14. \&quot;Reconfirm Payee request is null.\&quot;  15. \&quot;New cardholder not found.\&quot;  16. \&quot;Failed to transfer Payees.\&quot;  17. \&quot;Payee not confirmed.\&quot;  18. \&quot;Payees already transferred.\&quot;  19. \&quot;No OTP details found.\&quot;  20. \&quot;No Payees found for cardholder.\&quot;  21. \&quot;unexpected general exception.\&quot;

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.PayeeApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "2069fa82-1ff8-41b3-b671-d5b1879cb0f2"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.ResendOTPPayeeBindingModel() // ResendOTPPayeeBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiPayeeIdResendOTPPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 2069fa82-1ff8-41b3-b671-d5b1879cb0f2]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**ResendOTPPayeeBindingModel**](ResendOTPPayeeBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**ResendOTPPayeeViewModelValidResponsePackage**](ResendOTPPayeeViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

