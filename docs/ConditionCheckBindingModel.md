# FinacApi.ConditionCheckBindingModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **String** | Enter &#x27;CONTACTLESS&#x27;, &#x27;CVV2&#x27;, &#x27;BLOCKECOM&#x27;, &#x27;BLOCKMAGSTRIPE&#x27;, &#x27;BLOCKATM&#x27;, &#x27;BLOCKPOS&#x27;, &#x27;BLOCKMOTO&#x27;, &#x27;ENROLL3DS&#x27; | [optional] 
**action** | **String** | Action can be &#x27;ALLOW&#x27;, &#x27;DENY&#x27;, &#x27;RESET&#x27; | [optional] 
**actionedBy** | **String** | Which user was the call innated. | [optional] 
**blockType** | **String** | D for Domestic, I for International, Country Code or Country Code Group | [optional] 
**applyToLinkedCards** | **Boolean** | True if the settings have to be applied to all the linked cards | [optional] 
**conditionGroupNameToApply** | **String** | Name of the condition group to apply. When condition group applied &#x27;Action&#x27;, &#x27;Condition&#x27; and &#x27;BlockType&#x27; must not set. | [optional] 
