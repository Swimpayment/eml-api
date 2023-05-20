# FinacApi.DepositBindingModelV2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyCode** | **String** | Currency code of amount (ISO-4217 3 char). | 
**settlementCurrencyCode** | **String** | Currency code of amount (ISO-4217 3 char). | [optional] 
**transactionDescription** | **String** | Varies depending on the type of load:    Prefund: \&quot;Deposit To Card API\&quot;   Debit: \&quot;Web load by debit card\&quot;   Credit: \&quot;Web load by credit card\&quot;    Expected format: ^[a-zA-Z0-9* -.+]{1,30}$ | 
**terminalOwner** | **String** | Open entry field - can be filled with your custom description. Any data passed here will be shown on your statements.    Expected format: ^[\\w\\s .]{0,30}$ | [optional] 
**terminalLocation** | **String** | Open entry field - can be filled with your custom description. Any data passed here will be shown on your statements.    Expected format: ^[\\w\\s .]{0,30}$ | [optional] 
**terminalCity** | **String** | Open entry field    Expected format: ^[\\w\\s .]{0,20}$ | [optional] 
**terminalState** | **String** | Open entry field    Expected format: ^[\\w\\s .]{0,6}$ | [optional] 
**terminalId** | **String** | Open entry field    Expected format: ^[\\w\\s *_/]{0,20}$ | [optional] 
**countryCode** | **String** | Country code, in ISO-1366-1 format. | [optional] 
**feeDescription** | **String** | Description for fee. | [optional] 
**feeCode** | **String** | Populate as shown when loading via:    - Credit Card &#x3D; **WCR  - Debit Card &#x3D; **WDB  - straight from Prefund Wallet &#x3D; **API | 
**reason** | **String** | Expected format: ^[\\w\\s\\-/&#x60;&#x27;(),.]{1,50}$ | [optional] 
**voucherCode** | **String** | Voucher code for deposit amount.    Expected format: ^[a-fA-F0-9]{1,10}$ | [optional] 
**udfs** | **{String: String}** | For example, can be used to pass AcquirerTransactionId (key) with an Id (value) | [optional] 
**amount** | **Number** | Amount to debit or credit.    Required when &#x27;VoucherCode&#x27; is not present. Can not be a negative value. | [optional] 
**settlementAmount** | **Number** |  | [optional] 
**flatFee** | **Number** | Flat fee amount. | [optional] 
