---
id: account-rpc
title: Account
---

## Get Account Balance

API_GetBalance(account.Account) (uint64, error)

Example:

```go title="Example: get balance of Account 1"
account1 := account.NewAccountFromPrivatekey("account1 private key")
balance, err := srpc.API_GetBalance(account1)
if err!= nil {
    return err
}
```

## Defragment Account

### PRV

API_DefragmentAccountPRV(privateKey string, maxValue uint64, fee uint64, privacy bool) (\*jsonresult.CreateTransactionResult, error)

```go
account1 := account.NewAccountFromPrivatekey("account1 private key")
result, err := rpc.API_DefragmentAccountPRV(account1.PrivateKey, 10000000, -1, true)
if err!= nil {
    return err
}
```

### Token

API_DefragmentAccountToken(privateKey string, tokenID string, fee uint64, privacy bool) (\*jsonresult.CreateTransactionTokenResult, error)

```go
account1 := account.NewAccountFromPrivatekey("account1 private key")
tokenID := "abc"
result, err := rpc.API_DefragmentAccountToken(account1.PrivateKey, tokenID, -1, true)
if err!= nil {
    return err
}
```
