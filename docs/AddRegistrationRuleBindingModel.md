# FinacApi.AddRegistrationRuleBindingModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **String** | First name of cardholder. | [optional] 
**lastName** | **String** | Last name of cardholder. | [optional] 
**dateOfBirth** | **String** | Date of birth of cardholder, in \&quot;yyyy-MM-dd\&quot; format. | [optional] 
**mobile** | **String** | Cardholder mobile number. Mobile number dial code can also be added by separating mobile number and dial code with a |. | [optional] 
**phone** | **String** | Land line of cardholder. Landline dial code can also be added by separating landline and dial code with a |. | [optional] 
**email** | **String** | Cardholder email address. | [optional] 
**documentNumber** | **String** | Document number must be empty if the document details are not enabled. (if it is not applicable to your program) | [optional] 
**documentType** | **String** | Document type must be empty if the document details are not enabled. (if it is not applicable to your program) | [optional] 
**countryOfIssuance** | **String** | Country of issuance in regulation with ISO 3166-1 alpha-2. Must be empty if the document details are not enabled. (if it is not applicable to your program) | [optional] 
**address1** | **String** | First line of cardholder address. | [optional] 
**address2** | **String** | Second line of cardholder address. | [optional] 
**address3** | **String** | Third line of cardholder address. | [optional] 
**address4** | **String** | Fourth line of cardholder address. | [optional] 
**zipCode** | **String** | Post code of cardholder. | [optional] 
**city** | **String** | City of cardholder address. | [optional] 
**countryCode** | **String** | Country code of cardholder address. | [optional] 
**bin** | **String** | Assigned by EML. It is the first 8 digits of the cards on your program. | 
**distributorCode** | **String** | The unique identifier assigned by EML, to your program. | 
**isBlacklisted** | **Boolean** | Registration rule is blacklisted or whitelisted. Default is true (blacklisted). | [optional] 
**csrId** | **String** | CSR Id. | 
**note** | **String** |  | 
**blockType** | **String** | Whether registration rule is temporary or permanent. Default is permanent. | 
**blockExpiryDate** | **String** | Registration rule expiry date. Only applicable if BlockType is &#x27;temporary&#x27;. | [optional] 
**origin** | **String** |  | 
**reason** | **String** | Reason on inserting this registration rule. | 