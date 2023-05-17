# FinacApi.TokenSearchBindingModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountPan** | **String** | When present, the search will return tokens for the Account matching this Primary Account Number (PAN), for any Wallet Provider or device. PAN will be minimum 9 digits and maximum 19 digits. Cannot be used together with any of the following search request parameters:TokenUniqueReference, Token, PaymentAppInstanceId, CommentId, or AlternateAccountIdentifier.  Example: 5412345678901234 | [optional] 
**tokenUniqueReference** | **String** | A unique reference assigned following the allocation of a token used to identify the token for the duration of its lifetime. When present, the search will return one specific matching token. The TUR field will be a 48 char string. Cannot be used together with any of the following search request parameters: AccountPan, Token, PaymentAppInstanceId, CommentId, or AlternateAccountIdentifier.  Example: DWSPMC00000000010906a349d9ca4eb1a4d53e3c90a11d9c | [optional] 
