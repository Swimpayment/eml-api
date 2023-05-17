# FinacApi.AuthApi

All URIs are relative to *https://staging-api.prepaidfinancialservices.com/finac*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAuthJwtPost**](AuthApi.md#apiAuthJwtPost) | **POST** /api/Auth/Jwt | Authenticate

<a name="apiAuthJwtPost"></a>
# **apiAuthJwtPost**
> JwtTokenValidResponsePackage apiAuthJwtPost(apiVersion, fMessageId, fOrigin, opts)

Authenticate

Authenticate with username and password and obtain a JWT token..    To access API endpoints a JWT token must be obtained by calling this API. The JWT token duration is of 15 minutes.  The API returns the JWT token which must be added to the &#x27;Authorization&#x27; header of API calls, in the follwing way:        Authorization: Bearer eyJhbGciOiJIUzI1NiIXVCJ9TJV...r7E20RMHrHDcEfxjoYZgeFONFh7HgQ

### Example
```javascript
import {FinacApi} from 'finac_api';

let apiInstance = new FinacApi.AuthApi();
let apiVersion = "2.0"; // String | 
let fMessageId = "6440151c-7934-42c7-98d6-cdbeafc5f4b3"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.ApplicationUser() // ApplicationUser | Request body, see details under the 'Model' tab
};
apiInstance.apiAuthJwtPost(apiVersion, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 6440151c-7934-42c7-98d6-cdbeafc5f4b3]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**ApplicationUser**](ApplicationUser.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**JwtTokenValidResponsePackage**](JwtTokenValidResponsePackage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

