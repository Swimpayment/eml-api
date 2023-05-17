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
let fMessageId = "dc150688-c6cf-4295-97d6-aec9b8ab8b01"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to dc150688-c6cf-4295-97d6-aec9b8ab8b01]
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
let fMessageId = "367c080a-540a-4d11-927d-a332e839c8f1"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 367c080a-540a-4d11-927d-a332e839c8f1]
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
let fMessageId = "64d93f79-737b-474a-8234-7d8cf0148d83"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 64d93f79-737b-474a-8234-7d8cf0148d83]
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
let fMessageId = "0374105e-fa55-45fa-ba2f-c01aceddd118"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 0374105e-fa55-45fa-ba2f-c01aceddd118]
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
let fMessageId = "c4b715b6-0416-4d4f-956a-e254908c8997"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to c4b715b6-0416-4d4f-956a-e254908c8997]
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
let fMessageId = "49a5befd-ddcc-4918-b419-2e7ab1c70816"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to 49a5befd-ddcc-4918-b419-2e7ab1c70816]
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
let fMessageId = "a0216aca-b837-404e-b7c6-23b771d8ecce"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to a0216aca-b837-404e-b7c6-23b771d8ecce]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**KYCUploadDocumentsBindingModel**](KYCUploadDocumentsBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**KYCUploadDocumentsViewModelValidResponsePackage**](KYCUploadDocumentsViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

