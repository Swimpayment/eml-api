# FinacApi.AccountWalletBindingModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Wallet name. | [optional] 
**currencyCode** | **String** | Wallet currency. | [optional] 
**groupName** | **String** | Name of the group to apply.  The GroupName and the GroupSettings are mutually exclusive, have to provide only one of them. | [optional] 
**groupSettings** | [**[WalletSpendControlGroupSettingsModel]**](WalletSpendControlGroupSettingsModel.md) | GroupSettings to apply.  The GroupName and the GroupSettings are mutually exclusive, have to provide only one of them. | [optional] 
**walletType** | [**WalletTypeEcm**](WalletTypeEcm.md) |  | [optional] 
**defaultSpendWallet** | **Boolean** |  | [optional] 
