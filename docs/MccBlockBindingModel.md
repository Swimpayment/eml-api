# FinacApi.MccBlockBindingModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mcc** | **String** | Single Merchant Category Code to be blocked. Required if MccGroup is not filled. | [optional] 
**mccGroup** | **String** | Group of MCCs that can be blocked simultaneously. Required if Mcc is not filled. | [optional] 
**applyToLinkedCards** | **Boolean** | Apply MCC to all linked cards on account or only for the Cardholder id provided. | [optional] 
