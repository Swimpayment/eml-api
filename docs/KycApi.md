# FinacApi.KycApi

All URIs are relative to *https://staging-api.prepaidfinancialservices.com/finac*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiKycIdCodeDetailsGet**](KycApi.md#apiKycIdCodeDetailsGet) | **GET** /api/Kyc/{Id}/CodeDetails | Code Details
[**apiKycIdCodePost**](KycApi.md#apiKycIdCodePost) | **POST** /api/Kyc/{Id}/Code | Generate Code
[**apiKycIdLinkPost**](KycApi.md#apiKycIdLinkPost) | **POST** /api/Kyc/{Id}/Link | Link
[**apiKycIdRedeemCodePatch**](KycApi.md#apiKycIdRedeemCodePatch) | **PATCH** /api/Kyc/{Id}/RedeemCode | Redeem Code
[**apiKycIdResendCodePost**](KycApi.md#apiKycIdResendCodePost) | **POST** /api/Kyc/{Id}/ResendCode | Resend Code
[**apiKycInitiateCheckPost**](KycApi.md#apiKycInitiateCheckPost) | **POST** /api/Kyc/InitiateCheck | Initiaite Check
[**apiKycUploadDocumentsPost**](KycApi.md#apiKycUploadDocumentsPost) | **POST** /api/Kyc/UploadDocuments | Upload Documents

<a name="apiKycIdCodeDetailsGet"></a>
# **apiKycIdCodeDetailsGet**
> KycCodeDetailsViewModelValidResponsePackage apiKycIdCodeDetailsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Code Details

Query the details of a KYC Code.    Sample request:                    GET /api/Kyc/400000000000/CodeDetails

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.KycApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "9a0a47c0-8d3d-4b88-adcb-c03fa2f66490"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'code': "code_example" // String | KYC Code
};
apiInstance.apiKycIdCodeDetailsGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 9a0a47c0-8d3d-4b88-adcb-c03fa2f66490]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **code** | **String**| KYC Code | [optional] 

### Return type

[**KycCodeDetailsViewModelValidResponsePackage**](KycCodeDetailsViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiKycIdCodePost"></a>
# **apiKycIdCodePost**
> KycGenerateCodeViewModelValidResponsePackage apiKycIdCodePost(id, apiVersion, authorization, fMessageId, fOrigin)

Generate Code

Generate a KYC Code.    Sample request:                    POST /api/Kyc/400000000000/Code      {      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.KycApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "d81fee94-b3c5-4d67-9bfe-29afd7cb0d81"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiKycIdCodePost(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to d81fee94-b3c5-4d67-9bfe-29afd7cb0d81]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**KycGenerateCodeViewModelValidResponsePackage**](KycGenerateCodeViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiKycIdLinkPost"></a>
# **apiKycIdLinkPost**
> KycLinkViewModelValidResponsePackage apiKycIdLinkPost(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Link

Additional cards or secondary cards using kycLink api to bypass eKYC for the same person.     The same person criteria:            •  First name          •  Last name           •  Date of birth       Limitation: the Bin/Distributor code should have the same KYC full product types    Sample request:                    POST /api/Kyc/400000000000/Link      {          \&quot;secondaryId\&quot;: \&quot;400000000000\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.KycApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "ab091159-0936-4e28-885e-034de945347f"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.KycLinkBindingModel() // KycLinkBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiKycIdLinkPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to ab091159-0936-4e28-885e-034de945347f]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**KycLinkBindingModel**](KycLinkBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**KycLinkViewModelValidResponsePackage**](KycLinkViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiKycIdRedeemCodePatch"></a>
# **apiKycIdRedeemCodePatch**
> KycRedeemCodeViewModelValidResponsePackage apiKycIdRedeemCodePatch(id, apiVersion, authorization, fMessageId, fOrigin, opts)

Redeem Code

Redeem a KYC Code.    Sample request:                    PATCH /api/Kyc/400000000000/RedeemCode/Code&#x3D;53149      {      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.KycApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "12729300-9be4-42db-a3da-1d0552e38a80"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'code': "code_example" // String | KYC Code.
};
apiInstance.apiKycIdRedeemCodePatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 12729300-9be4-42db-a3da-1d0552e38a80]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **code** | **String**| KYC Code. | [optional] 

### Return type

[**KycRedeemCodeViewModelValidResponsePackage**](KycRedeemCodeViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiKycIdResendCodePost"></a>
# **apiKycIdResendCodePost**
> KycResendCodeViewModelValidResponsePackage apiKycIdResendCodePost(id, apiVersion, authorization, fMessageId, fOrigin)

Resend Code

Resend a KYC Code.    Sample request:                    POST /api/Kyc/400000000000/ResendCode      {      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.KycApi();
let id = "id_example"; // String | Cardholder id.
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "b93d2812-46b6-4112-8145-69d431f11311"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request

apiInstance.apiKycIdResendCodePost(id, apiVersion, authorization, fMessageId, fOrigin, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to b93d2812-46b6-4112-8145-69d431f11311]
 **fOrigin** | **String**| Origin of request | [default to swagger]

### Return type

[**KycResendCodeViewModelValidResponsePackage**](KycResendCodeViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiKycInitiateCheckPost"></a>
# **apiKycInitiateCheckPost**
> InitiateCheckViewModelValidResponsePackage apiKycInitiateCheckPost(apiVersion, authorization, fMessageId, fOrigin, opts)

Initiaite Check

Process Ariad Next initiate check.    Sample request:                    POST /api/Kyc/InitiateCheck      {          \&quot;id\&quot;: \&quot;400000000000\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.KycApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "79c0ab36-57e1-4f13-862e-74683d1f105c"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.InitiateCheckBindingModel() // InitiateCheckBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiKycInitiateCheckPost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 79c0ab36-57e1-4f13-862e-74683d1f105c]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**InitiateCheckBindingModel**](InitiateCheckBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**InitiateCheckViewModelValidResponsePackage**](InitiateCheckViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiKycUploadDocumentsPost"></a>
# **apiKycUploadDocumentsPost**
> KYCUploadDocumentsViewModelValidResponsePackage apiKycUploadDocumentsPost(apiVersion, authorization, fMessageId, fOrigin, opts)

Upload Documents

Sample request:                    POST /api/Kyc/UploadDocuments      {          \&quot;id\&quot;: \&quot;400000000000\&quot;,          \&quot;useWebSolution\&quot; : false,          \&quot;language\&quot; : \&quot;EN\&quot;,          \&quot;successUrl\&quot; : \&quot;https://www.yourcompany.com/success\&quot;,          \&quot;failureURL\&quot; : \&quot;https://www.yourcompany.com/error\&quot;,      }            POST /api/Kyc/UploadDocuments      {          \&quot;issuingId\&quot;: \&quot;12345\&quot;      }                    Language parameter is optional, default value is \&quot;EN\&quot;      SuccessUrl parameter is optional      FailureURL parameter is optional

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.KycApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "eb39d7f0-3d24-4e42-b818-f336d4a05be4"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.KYCUploadDocumentsBindingModel() // KYCUploadDocumentsBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiKycUploadDocumentsPost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to eb39d7f0-3d24-4e42-b818-f336d4a05be4]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**KYCUploadDocumentsBindingModel**](KYCUploadDocumentsBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**KYCUploadDocumentsViewModelValidResponsePackage**](KYCUploadDocumentsViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

