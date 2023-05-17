# FinacApi.SetCardholderLevelLimitBindingModelV2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limitName** | **String** | Limit to be set on, where values can be &#x27;Pos&#x27;, &#x27;Cash&#x27;. | 
**limitCount** | **Number** | Transaction count within the limit Period. | 
**limitAmount** | **Number** | Transactions total amount within the limit Period. | 
**limitPeriod** | **String** | Limit time period, where values can be {D, W, M, C, Y}. | 
**removeLimit** | **Boolean** | Remove the configured cardholder level limit. | [optional] 
