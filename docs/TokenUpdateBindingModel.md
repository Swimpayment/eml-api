# FinacApi.TokenUpdateBindingModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenUniqueReference** | **String** | Unique reference of the token to be updated. Conditional field, used for updating a single token and not used when CurrentAccountPan is present. | [optional] 
**currentAccountPan** | **String** | Current Account PAN of the token(s) to be updated. Conditional field, used for updating all tokens mapped to a single Account PAN and must not be present when TokenUniqueReference is present. | [optional] 
**newAccountPan** | **String** | New Account PAN to be applied to the updated token(s) if there is in fact a new Account PAN. Optional if updating Expiration Date or PAN Sequence Number. | [optional] 
**expirationDate** | **String** | New Account PAN expiration date. Conditional field, must not be present when IssuerProductConfigurationId is present. Optional if updating PAN mapping or PAN Sequence Number. | [optional] 
**accountPanSequenceNumber** | **String** | New PAN sequence number to be applied to the updated token(s). Conditional field, must not be present when IssuerProductConfigurationId is present. Optional if updating PAN mapping or Expiration Date. | [optional] 
**issuerProductConfigurationId** | **String** | New product configuration ID to be applied to the updated token(s). Conditional field, must not be present if any of the following are present - NewAccountPan, ExpirationDate, AccountPanSequenceNumber. | [optional] 
**updateWalletProviderIndicator** | **String** | Indicates whether the updated token information should be provided to the Wallet Provider. Valid values: \&quot;0\&quot; - Pass the updated information to the Wallet Provider. \&quot;1\&quot; - Do not pass the updated information to the Wallet Provider. Optional parameter.The default is 1 if not present. | [optional] 
**commentText** | **String** | Comment related to the updated token(s). Example: Update gold artwork | [optional] 
