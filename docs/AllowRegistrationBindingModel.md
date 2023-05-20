# FinacApi.AllowRegistrationBindingModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Cardholder id. | [optional] 
**issuingId** | **Number** | Id from issue log. | [optional] 
**bin** | **String** | Assigned by PFS. It is the first 8 digits of the cards on your program. | 
**distributorCode** | **String** | The unique identifier assigned by PFS, to your program. | 
**dateOfBirth** | **String** | Date of birth of cardholder, in \&quot;yyyy-MM-dd\&quot; format. | [optional] 
**email** | **String** | Cardholder email address. | [optional] 
**firstName** | **String** | First name of cardholder. | [optional] 
**lastName** | **String** | Last name of cardholder. | [optional] 
**mobile** | **String** | Cardholder mobile number. Mobile number dial code can also be added by separating mobile number and dial code with a |. | [optional] 
**address1** | **String** | First line of cardholder address. | [optional] 
**address2** | **String** | Second line of cardholder address. | [optional] 
**address3** | **String** | Third line of cardholder address. | [optional] 
**address4** | **String** | Fourth line of cardholder address. | [optional] 
**postCode** | **String** | Post code of cardholder. | [optional] 
**city** | **String** | City of cardholder address. | [optional] 
**countryCode** | **String** | Country code of cardholder address. | [optional] 
**registrationType** | [**UserRegistrationType**](UserRegistrationType.md) |  | [optional] 
**documentNumber** | **String** | Document number must be empty if the document details are not enabled. (if it is not applicable to your program) | [optional] 
**documentType** | **String** | Document type must be empty if the document details are not enabled. (if it is not applicable to your program) | [optional] 
**documentExpiryDate** | **String** | Document expiry date must be empty if the document details are not enabled. (if it is not applicable to your program) When used the following formats are accepted: \&quot;yyyy-MM-dd\&quot;, \&quot;yyyy/MM/dd\&quot;, \&quot;dd-MM-yyyy\&quot;, \&quot;dd/MM/yyyy\&quot;. | [optional] 
**countryOfIssuance** | **String** | Country of issuance in regulation with ISO 3166-1 alpha-2. Must be empty if the document details are not enabled. (if it is not applicable to your program) | [optional] 
**phone** | **String** | Land line of cardholder. Landline dial code can also be added by separating landline and dial code with a |. | [optional] 
