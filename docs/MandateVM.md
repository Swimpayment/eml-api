# FinacApi.MandateVM

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mandateId** | **Number** |  | [optional] 
**merchantName** | **String** |  | [optional] 
**debitingIBAN** | **String** |  | [optional] 
**mandateUsername** | **String** |  | [optional] 
**insertedDateTime** | **String** |  | [optional] 
**updatedDateTime** | **String** |  | [optional] 
**lastActivityDateTime** | **String** |  | [optional] 
**referenceNumber** | **String** |  | [optional] 
**reason** | **String** |  | [optional] 
**status** | **String** | Status of the mandate. Values can be:    1 - Pending - A new mandate has been received, this will be the starting status.    2 - Blocked - Changes if the client requests the mandate to be blocked.    3 - Cancelled - Changes if the client requests the mandate to be cancelled.    4 - Expired - If a direct debit has not been received within a certain time, the status of Expired will be assigned. | [optional] 
