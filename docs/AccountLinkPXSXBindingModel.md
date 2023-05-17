# FinacApi.AccountLinkPXSXBindingModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Cardholder ID | 
**secondaryId** | **String** | Secondary Cardholder ID | 
**validateOnly** | **Boolean** | If &#x27;True&#x27; checks if the two accounts can be linked.  If &#x27;False&#x27;, will attempt to link the two accounts.The default value is false. | [optional] 
**firstName** | **String** | First name of the Cardholder | [optional] 
**lastName** | **String** | Last name of the Cardholder | [optional] 
**dob** | **String** | Date of Birth \&quot;yyyy-MM-dd\&quot; | [optional] 
**email** | **String** | Email | [optional] 
**phone** | **String** | Home Phone Number | [optional] 
**mobileNo** | **String** | Mobile Number | [optional] 
**address1** | **String** | Address line 1 | [optional] 
**address2** | **String** | Address line 2 | [optional] 
**address3** | **String** | Address line 3 | [optional] 
**postCode** | **String** | Post Code | [optional] 
**country** | **String** | Country code ISO 1366-1, 3 character long country code | [optional] 
**isSecondaryAccountDetailsCustom** | **Boolean** | If &#x27;True&#x27; the details of the secondary card will be overwritten with the data entered in the remaining fields.   If &#x27;False&#x27; the data on the secondary card will not be altered | [optional] 
