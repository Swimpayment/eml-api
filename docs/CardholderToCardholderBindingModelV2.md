# FinacApi.CardholderToCardholderBindingModelV2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | From cardholder id. | [optional] 
**toId** | **String** | To cardholder id. | [optional] 
**amount** | **Number** | Amount to transfer. | [optional] 
**currencyCode** | **String** | Currency code, ISO-4217 3 letters | [optional] 
**toCurrencyCode** | **String** | Currency code, ISO-4217 3 letters | [optional] 
**terminalOwner** | **String** | Open entry field - can be filled with your custom description. This field is shown on your statements. | [optional] 
**terminalLocation** | **String** | Open entry field - can be filled with your custom description. This field is shown on your statements. | [optional] 
**terminalCity** | **String** | Open entry field | [optional] 
**terminalState** | **String** | Open entry field | [optional] 
**terminalId** | **String** | Open entry field | [optional] 
**countryCode** | **String** | Required in multicurrency programs only. ISO 1366-1 three character country code | [optional] 
**description** | **String** | Must be filled with whitelisted description. &#x27;Card To Card Transfer&#x27; is whitelisted as default | [optional] 
**feeCode** | **String** | Describes the type of transaction.    - Card to Card &#x3D; **WTR  - Card to Account &#x3D; **CTA   - Account to Card &#x3D; **ATC  - Account to Account &#x3D; **WTR | [optional] 
