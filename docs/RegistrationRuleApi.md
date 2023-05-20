# FinacApi.RegistrationRuleApi

All URIs are relative to *https://staging-api.prepaidfinancialservices.com/finac*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiRegistrationRuleCountPost**](RegistrationRuleApi.md#apiRegistrationRuleCountPost) | **POST** /api/RegistrationRule/Count | Registered Details Count
[**apiRegistrationRuleGet**](RegistrationRuleApi.md#apiRegistrationRuleGet) | **GET** /api/RegistrationRule | Get Registration Rules
[**apiRegistrationRulePost**](RegistrationRuleApi.md#apiRegistrationRulePost) | **POST** /api/RegistrationRule | Add Registration Rule
[**apiRegistrationRuleRevertBlockDelete**](RegistrationRuleApi.md#apiRegistrationRuleRevertBlockDelete) | **DELETE** /api/RegistrationRule/RevertBlock | Remove blacklist block
[**apiRegistrationRuleUserRegistrationRuleIdAuditGet**](RegistrationRuleApi.md#apiRegistrationRuleUserRegistrationRuleIdAuditGet) | **GET** /api/RegistrationRule/{UserRegistrationRuleId}/Audit | Get Registration Rule Audit
[**apiRegistrationRuleUserRegistrationRuleIdDelete**](RegistrationRuleApi.md#apiRegistrationRuleUserRegistrationRuleIdDelete) | **DELETE** /api/RegistrationRule/{UserRegistrationRuleId} | Delete Registration Rule

<a name="apiRegistrationRuleCountPost"></a>
# **apiRegistrationRuleCountPost**
> RegisteredDetailsCountViewModelValidResponsePackage apiRegistrationRuleCountPost(apiVersion, authorization, fMessageId, fOrigin, opts)

Registered Details Count

Registered details count    Sample request:                    POST /api/RegistrationRule/Count      {          \&quot;firstName\&quot;: \&quot;Name\&quot;,          \&quot;lastName\&quot;: \&quot;Surname\&quot;,          \&quot;address1\&quot;: \&quot;Street address 1\&quot;,          \&quot;address2\&quot;: \&quot;street address 2\&quot;,          \&quot;city\&quot;: \&quot;Victoria\&quot;,          \&quot;zipCode\&quot;: \&quot;VIC7896\&quot;,          \&quot;countryCode\&quot;: \&quot;MT\&quot;,          \&quot;dateofbirth\&quot;: \&quot;1992-01-20\&quot;,          \&quot;email\&quot;: \&quot;namesurname@gmail.com\&quot;,          \&quot;distributorCode\&quot;: \&quot;399\&quot;,          \&quot;bin\&quot;: \&quot;59190995\&quot;,          \&quot;countryOfIssuance\&quot;: \&quot;ES\&quot;,          \&quot;documentNumber\&quot;: \&quot;12345678Z\&quot;,          \&quot;documentType\&quot;: \&quot;National Id\&quot;,          \&quot;documentExpiryDate\&quot;: \&quot;2024-10-24\&quot;,          \&quot;mobile\&quot;: \&quot;356|522553336\&quot;,          \&quot;phone\&quot;: \&quot;356|522553336\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.RegistrationRuleApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "18f6d9cd-87ef-41ee-be4d-c1ab5ad5ebba"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.RegisteredDetailsCountBindingModel() // RegisteredDetailsCountBindingModel | Request body, see details under the 'Model' tab
};
apiInstance.apiRegistrationRuleCountPost(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 18f6d9cd-87ef-41ee-be4d-c1ab5ad5ebba]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**RegisteredDetailsCountBindingModel**](RegisteredDetailsCountBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**RegisteredDetailsCountViewModelValidResponsePackage**](RegisteredDetailsCountViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiRegistrationRuleGet"></a>
# **apiRegistrationRuleGet**
> GetRegistrationRulesViewModelValidResponsePackage apiRegistrationRuleGet(apiVersion, authorization, fMessageId, fOrigin, opts)

Get Registration Rules

Retrieves all registration rules    Sample request:                    GET /api/RegistrationRule?PageSize&#x3D;5&amp;PageNo&#x3D;1

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.RegistrationRuleApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "1097a219-8890-489d-aaf9-7a9daa014460"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'firstName': "firstName_example", // String | First name of cardholder.
  'lastName': "lastName_example", // String | Last name of cardholder.
  'dateOfBirth': "dateOfBirth_example", // String | Date of birth of cardholder in \"yyyy-MM-dd\" format.
  'mobile': "mobile_example", // String | Cardholder mobile number. Mobile number dial code can also be added by separating mobile number and dial code with a |.
  'phone': "phone_example", // String | Land line of cardholder. Landline dial code can also be added by separating landline and dial code with a |.
  'email': "email_example", // String | Cardholder email address.
  'documentNumber': "documentNumber_example", // String | Document number of cardholder.
  'documentType': "documentType_example", // String | Document type of cardholder.
  'documentExpiryDate': "documentExpiryDate_example", // String | Document expiry date of cardholder in \"yyyy-MM-dd\" format.
  'countryOfIssuance': "countryOfIssuance_example", // String | Document country of issuance of cardholder in regulation with ISO 3166-1 alpha-2.
  'address1': "address1_example", // String | First line of cardholder address.
  'address2': "address2_example", // String | 
  'zipCode': "zipCode_example", // String | Post code of cardholder.
  'city': "city_example", // String | City of cardholder address.
  'countryCode': "countryCode_example", // String | Country code of cardholder address.
  'pageNo': 56, // Number | 
  'pageSize': 56, // Number | 
  'includeArchived': true, // Boolean | If true, archived (deleted) rules will be returned. By default false.
  'includeNullValues': true // Boolean | If true, any fields provided in the query string can have null and empty values. If false, NULL values from the fields provided in the query string will be removed. By default true.
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
 **fMessageId** | **String**| Unique identifier | [default to 1097a219-8890-489d-aaf9-7a9daa014460]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **firstName** | **String**| First name of cardholder. | [optional] 
 **lastName** | **String**| Last name of cardholder. | [optional] 
 **dateOfBirth** | **String**| Date of birth of cardholder in \&quot;yyyy-MM-dd\&quot; format. | [optional] 
 **mobile** | **String**| Cardholder mobile number. Mobile number dial code can also be added by separating mobile number and dial code with a |. | [optional] 
 **phone** | **String**| Land line of cardholder. Landline dial code can also be added by separating landline and dial code with a |. | [optional] 
 **email** | **String**| Cardholder email address. | [optional] 
 **documentNumber** | **String**| Document number of cardholder. | [optional] 
 **documentType** | **String**| Document type of cardholder. | [optional] 
 **documentExpiryDate** | **String**| Document expiry date of cardholder in \&quot;yyyy-MM-dd\&quot; format. | [optional] 
 **countryOfIssuance** | **String**| Document country of issuance of cardholder in regulation with ISO 3166-1 alpha-2. | [optional] 
 **address1** | **String**| First line of cardholder address. | [optional] 
 **address2** | **String**|  | [optional] 
 **zipCode** | **String**| Post code of cardholder. | [optional] 
 **city** | **String**| City of cardholder address. | [optional] 
 **countryCode** | **String**| Country code of cardholder address. | [optional] 
 **pageNo** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **includeArchived** | **Boolean**| If true, archived (deleted) rules will be returned. By default false. | [optional] 
 **includeNullValues** | **Boolean**| If true, any fields provided in the query string can have null and empty values. If false, NULL values from the fields provided in the query string will be removed. By default true. | [optional] 

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

Add new registration rule    Sample request:                    POST /api/RegistrationRule      {          \&quot;firstName\&quot;: \&quot;Name\&quot;,          \&quot;lastName\&quot;: \&quot;Surname\&quot;,          \&quot;address1\&quot;: \&quot;Street address 1\&quot;,          \&quot;address2\&quot;: \&quot;street address 2\&quot;,          \&quot;address3\&quot;: \&quot;\&quot;,          \&quot;address4\&quot;: \&quot;\&quot;,          \&quot;city\&quot;: \&quot;Victoria\&quot;,          \&quot;zipCode\&quot;: \&quot;VIC7896\&quot;,          \&quot;countryCode\&quot;: \&quot;MT\&quot;,          \&quot;dateofbirth\&quot;: \&quot;1992-01-20\&quot;,          \&quot;email\&quot;: \&quot;namesurname@gmail.com\&quot;,          \&quot;distributorCode\&quot;: \&quot;399\&quot;,          \&quot;bin\&quot;: \&quot;59190995\&quot;,          \&quot;countryOfIssuance\&quot;: \&quot;ES\&quot;,          \&quot;documentNumber\&quot;: \&quot;12345678Z\&quot;,          \&quot;documentType\&quot;: \&quot;National Id\&quot;,          \&quot;documentExpiryDate\&quot;: \&quot;2024-10-24\&quot;,          \&quot;blockType\&quot;: \&quot;Permanent\&quot;,          \&quot;note\&quot;: \&quot;Registration rule note\&quot;,          \&quot;reason\&quot;: \&quot;Adding new rule\&quot;,          \&quot;origin\&quot;: \&quot;API\&quot;,          \&quot;csrid\&quot;: \&quot;12345\&quot;,          \&quot;mobile\&quot;: \&quot;356|522553336\&quot;,          \&quot;phone\&quot;: \&quot;356|522553336\&quot;,          \&quot;isBlacklisted\&quot;: false      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.RegistrationRuleApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "b7598e72-ab01-4c59-a762-c95d7bc1a12c"; // String | Unique identifier
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
 **fMessageId** | **String**| Unique identifier | [default to b7598e72-ab01-4c59-a762-c95d7bc1a12c]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**AddRegistrationRuleBindingModel**](AddRegistrationRuleBindingModel.md)| Request body, see details under the &#x27;Model&#x27; tab | [optional] 

### Return type

[**AddRegistrationRuleViewModelValidResponsePackage**](AddRegistrationRuleViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiRegistrationRuleRevertBlockDelete"></a>
# **apiRegistrationRuleRevertBlockDelete**
> DeleteBlacklistBlockViewModelValidResponsePackage apiRegistrationRuleRevertBlockDelete(apiVersion, authorization, fMessageId, fOrigin, opts)

Remove blacklist block

Remove blacklist block from cardholder that was blocked.    Sample request:                    DELETE /api/RegistrationRule/RevertBlock      {          \&quot;BlockId\&quot;: 5369,          \&quot;Csr\&quot;: 75,          \&quot;reason\&quot;: \&quot;Block not required\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.RegistrationRuleApi();
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "0c6d2958-1514-4412-9c7b-ef7af49486c5"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.DeleteBlacklistBlockBindingModel() // DeleteBlacklistBlockBindingModel | 
};
apiInstance.apiRegistrationRuleRevertBlockDelete(apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 0c6d2958-1514-4412-9c7b-ef7af49486c5]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**DeleteBlacklistBlockBindingModel**](DeleteBlacklistBlockBindingModel.md)|  | [optional] 

### Return type

[**DeleteBlacklistBlockViewModelValidResponsePackage**](DeleteBlacklistBlockViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiRegistrationRuleUserRegistrationRuleIdAuditGet"></a>
# **apiRegistrationRuleUserRegistrationRuleIdAuditGet**
> GetRegistrationRuleAuditViewModelValidResponsePackage apiRegistrationRuleUserRegistrationRuleIdAuditGet(userRegistrationRuleId, apiVersion, authorization, fMessageId, fOrigin, opts)

Get Registration Rule Audit

Retrieves audit for registration rule using the filters passed in the query string if any.    Sample request:                    GET /api/RegistrationRule/79/Audit?DateOfBirth&#x3D;2023-04-11&amp;IncludeNullValues&#x3D;true&amp;PageSize&#x3D;5&amp;PageNo&#x3D;1

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.RegistrationRuleApi();
let userRegistrationRuleId = "userRegistrationRuleId_example"; // String | 
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "6a77aa71-6b4d-4ffb-936b-484c8d731a92"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'firstName': "firstName_example", // String | First name of cardholder.
  'lastName': "lastName_example", // String | Last name of cardholder.
  'dateOfBirth': "dateOfBirth_example", // String | Date of birth of cardholder in \"yyyy-MM-dd\" format.
  'mobile': "mobile_example", // String | Cardholder mobile number. Mobile number dial code can also be added by separating mobile number and dial code with a |.
  'phone': "phone_example", // String | Land line of cardholder. Landline dial code can also be added by separating landline and dial code with a |.
  'email': "email_example", // String | Cardholder email address.
  'documentNumber': "documentNumber_example", // String | Document number of cardholder.
  'documentType': "documentType_example", // String | Document type of cardholder.
  'documentExpiryDate': "documentExpiryDate_example", // String | Document expiry date of cardholder in \"yyyy-MM-dd\" format.
  'countryOfIssuance': "countryOfIssuance_example", // String | Document country of issuance of cardholder in regulation with ISO 3166-1 alpha-2.
  'address1': "address1_example", // String | First line of cardholder address.
  'address2': "address2_example", // String | 
  'zipCode': "zipCode_example", // String | Post code of cardholder.
  'city': "city_example", // String | City of cardholder address.
  'countryCode': "countryCode_example", // String | Country code of cardholder address.
  'isReversed': true, // Boolean | If true, only reversed actions will be returned. If false, only blacklisted actions will be returned and null (not provided) will return all.
  'includeNullValues': true, // Boolean | If true, any fields provided in the query string can have null and empty values. If false, NULL values from the fields provided in the query string will be removed. By default true.
  'pageNo': 56, // Number | 
  'pageSize': 56 // Number | 
};
apiInstance.apiRegistrationRuleUserRegistrationRuleIdAuditGet(userRegistrationRuleId, apiVersion, authorization, fMessageId, fOrigin, opts, (error, data, response) => {
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
 **fMessageId** | **String**| Unique identifier | [default to 6a77aa71-6b4d-4ffb-936b-484c8d731a92]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **firstName** | **String**| First name of cardholder. | [optional] 
 **lastName** | **String**| Last name of cardholder. | [optional] 
 **dateOfBirth** | **String**| Date of birth of cardholder in \&quot;yyyy-MM-dd\&quot; format. | [optional] 
 **mobile** | **String**| Cardholder mobile number. Mobile number dial code can also be added by separating mobile number and dial code with a |. | [optional] 
 **phone** | **String**| Land line of cardholder. Landline dial code can also be added by separating landline and dial code with a |. | [optional] 
 **email** | **String**| Cardholder email address. | [optional] 
 **documentNumber** | **String**| Document number of cardholder. | [optional] 
 **documentType** | **String**| Document type of cardholder. | [optional] 
 **documentExpiryDate** | **String**| Document expiry date of cardholder in \&quot;yyyy-MM-dd\&quot; format. | [optional] 
 **countryOfIssuance** | **String**| Document country of issuance of cardholder in regulation with ISO 3166-1 alpha-2. | [optional] 
 **address1** | **String**| First line of cardholder address. | [optional] 
 **address2** | **String**|  | [optional] 
 **zipCode** | **String**| Post code of cardholder. | [optional] 
 **city** | **String**| City of cardholder address. | [optional] 
 **countryCode** | **String**| Country code of cardholder address. | [optional] 
 **isReversed** | **Boolean**| If true, only reversed actions will be returned. If false, only blacklisted actions will be returned and null (not provided) will return all. | [optional] 
 **includeNullValues** | **Boolean**| If true, any fields provided in the query string can have null and empty values. If false, NULL values from the fields provided in the query string will be removed. By default true. | [optional] 
 **pageNo** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 

### Return type

[**GetRegistrationRuleAuditViewModelValidResponsePackage**](GetRegistrationRuleAuditViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiRegistrationRuleUserRegistrationRuleIdDelete"></a>
# **apiRegistrationRuleUserRegistrationRuleIdDelete**
> DeleteRegistrationRuleViewModelValidResponsePackage apiRegistrationRuleUserRegistrationRuleIdDelete(userRegistrationRuleId, apiVersion, authorization, fMessageId, fOrigin, opts)

Delete Registration Rule

Delete registration rule    Sample request:                    DELETE /api/RegistrationRule/67      {          \&quot;csrId\&quot;: \&quot;2020202\&quot;,          \&quot;reason\&quot;: \&quot;new requirements\&quot;      }

### Example
```javascript
import {FinacApi} from 'finac_api';
let defaultClient = FinacApi.ApiClient.instance;


let apiInstance = new FinacApi.RegistrationRuleApi();
let userRegistrationRuleId = "userRegistrationRuleId_example"; // String | 
let apiVersion = "2.0"; // String | 
let authorization = "Bearer [jwttoken]"; // String | Access token
let fMessageId = "e4708d41-16d0-4dba-8a0a-e10f327a03ad"; // String | Unique identifier
let fOrigin = "swagger"; // String | Origin of request
let opts = { 
  'body': new FinacApi.DeleteRegistrationRuleBindingModel() // DeleteRegistrationRuleBindingModel | 
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
 **fMessageId** | **String**| Unique identifier | [default to e4708d41-16d0-4dba-8a0a-e10f327a03ad]
 **fOrigin** | **String**| Origin of request | [default to swagger]
 **body** | [**DeleteRegistrationRuleBindingModel**](DeleteRegistrationRuleBindingModel.md)|  | [optional] 

### Return type

[**DeleteRegistrationRuleViewModelValidResponsePackage**](DeleteRegistrationRuleViewModelValidResponsePackage.md)

### Authorization

[jwt_auth](../README.md#jwt_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

