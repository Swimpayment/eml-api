# FinacApi.IssueBindingModelV2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **String** | First name of cardholder. | 
**middleInitial** | **String** | Middle name of cardholder. | [optional] 
**lastName** | **String** | Last name of cardholder. | 
**address1** | **String** | First line of cardholder address. | 
**address2** | **String** | Second line of cardholder address. | [optional] 
**address3** | **String** | Third line of cardholder address. | [optional] 
**address4** | **String** | Fourth line of cardholder address. | [optional] 
**city** | **String** | City of cardholder. | [optional] 
**county** | **String** | County of cardholder. | [optional] 
**state** | **String** | State of cardholder. | [optional] 
**zipCode** | **String** | Zip code of cardholder. | [optional] 
**countryCode** | **String** | Country code of cardholder, in regulation with ISO 3166-1 alpha-2. | 
**dateOfBirth** | **String** | Date of birth of cardholder, in \&quot;yyyy-MM-dd\&quot; format. | 
**landline** | **String** | Land line of cardholder. Landline dial code can also be added by separating landline and dial code with a |. | [optional] 
**securityQuestion** | **String** | Security question for cardholder. | [optional] 
**securityAnswer** | **String** | Security answer for cardholder. | [optional] 
**securityField3** | **String** |  | [optional] 
**securityField4** | **String** |  | [optional] 
**email** | **String** | Cardholder email address. | [optional] 
**userDefined1** | **String** | Open entry field – Available for Client&#x27;s to pass end-user’s ID | [optional] 
**userDefined2** | **String** | Product type (0, 1, 2). Set to 1 if KYC process has not been complete. Set to 2 if process is complete, or when linking a card. 1 &#x3D; SDD, 2 &#x3D; KYC\&quot; | [optional] 
**userDefined3** | **String** | Always set to &#x27;SOLO&#x27; - relevant when creating a parent/child link between cards | [optional] 
**userDefined4** | **String** | Open entry field | [optional] 
**socialSecurityNumber** | **String** | Social security number of cardholder. | [optional] 
**distributorCode** | **String** | The unique identifier assigned by PFS, to your program | 
**companyName** | **String** | The name of Cardholder&#x27;s company of employment. Fourth Emboss line on card | [optional] 
**cardStyle** | **String** | Identifies different cards within your program. Fee structures can vary between card styles. | 
**embossName** | **String** | Name to be embossed on card. | [optional] 
**expirationDate** | **String** | Expiration date of card, in \&quot;yyMM\&quot; format. | [optional] 
**isProducePlastic** | **Boolean** |  | [optional] 
**deliveryType** | **String** | Determines the type of card created (VC &#x3D; Virtual - PC &#x3D; Physical) | [optional] 
**secondaryAddress1** | **String** |  | [optional] 
**secondaryAddress2** | **String** |  | [optional] 
**secondaryAddress3** | **String** |  | [optional] 
**secondaryAddress4** | **String** |  | [optional] 
**secondaryCity** | **String** |  | [optional] 
**secondaryCounty** | **String** |  | [optional] 
**secondaryZipCode** | **String** |  | [optional] 
**secondaryCountryCode** | **String** |  | [optional] 
**bin** | **String** | Assigned by PFS. It is the first 8 digits of the cards on your program. | 
**nationality** | **String** | Cardholder nationality. | [optional] 
**countryOfIssuance** | **String** | Country of issuance in regulation with ISO 3166-1 alpha-2. Must be empty if the document details are not enabled. (if it is not applicable to your program) | [optional] 
**documentNumber** | **String** | Document number must be empty if the document details are not enabled. (if it is not applicable to your program) | [optional] 
**documentType** | **String** | Document type must be empty if the document details are not enabled. (if it is not applicable to your program) | [optional] 
**documentExpiryDate** | **String** | Document expiry date must be empty if the document details are not enabled. (if it is not applicable to your program) When used the following formats are accepted: \&quot;yyyy-MM-dd\&quot;, \&quot;yyyy/MM/dd\&quot;, \&quot;dd-MM-yyyy\&quot;, \&quot;dd/MM/yyyy\&quot;. | [optional] 
**gender** | **String** | Cardholder gender (M or m, F or f). | [optional] 
**userDefined** | **{String: String}** | Open entry dictionary - For adding custom cardholder data to an account | [optional] 
**title** | **String** | Cardholder title. | [optional] 
**username** | **String** | Cardholder username. | [optional] 
**password** | **String** | Cardholder password. | [optional] 
**mobileNo** | **String** | Cardholder mobile number. Mobile number dial code can also be added by separating mobile number and dial code with a |. | [optional] 
**walletName** | **String** | Name given to wallet, used for Trace processor only | [optional] 
**cardholderIdToLink** | **String** | A linked Card will be created. By default the card will be linked to the default wallet of the referenced card.    When WalletName parameter is also provided the card will be linked to that wallet, or if that wallet does not exists, it will be created.   The curreny of the referenced wallet and the issued card&#x27;s default currency must match.    Can be used for Trace cards only. | [optional] 
**useDefaultSpendWallet** | **Boolean** | If a &#x27;ControlledSpend&#x27; wallet is present and no matching wallet is found during transaction processing, and if true, the &#x27;Spend&#x27; wallet will be used instead.    Can be used for Trace cards only. | [optional] 
**currencies** | **[String]** | If a Multicurrency card, pass currencies here for currency purses to be created on Issue. | [optional] 
