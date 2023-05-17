# FinacApi.SpendControlBindingModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyCode** | **String** | Currency code (ISO-4217) 3 letter currency code    If not provided, the limit will be set for the account’s default currency. | [optional] 
**limits** | [**SpendControlEcmLimits**](SpendControlEcmLimits.md) |  | [optional] 
**spendControlGroupName** | **String** | The name of a pre-defined limit setting, created with the Create Spend Control Group API    Either SpendControlGroupName or Limits is required (both cannot be set at the same time) | [optional] 
**applyToLinkedCards** | **Boolean** | If set to Ture the setting will be applied to all cards which are linked to the Cardholder&#x27;s account.   Default is false so the change will be applied to a single card. | [optional] 
