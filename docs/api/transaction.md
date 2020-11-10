---
id: transaction
title: Transaction
---

:::note
When you create a new simulation instance we already pre-mined some PRV to an account called GenesisAccount for you.
:::

## PRV Transaction

CreateAndSendTransaction(privateKey string, receivers map[string]interface{}, fee float64, privacy float64) (jsonresult.CreateTransactionResult, error)

```go title="Example: sending 1000 PRV from Genesis Account to account2"
account := sim.GenesisAccount
account2 := sim.NewAccount()
receivers := map[string]interface{}{
		account2.PaymentAddress: 1000 * math.Pow(10,9),
}
tx, err := sim.RPC.API_CreateAndSendTransaction(account.PrivateKey, receivers, -1, 1)
if err != nil {
    return err
}
```

:::caution
Make sure you are sending from account that have PRV.
:::

---

## pToken Transaction

API_CreateAndSendPrivacyCustomTokenTransaction(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, tokenInfo map[string]interface{}, p1 string, pPrivacy float64) (jsonresult.CreateTransactionTokenResult, error)

### Mint ptoken

```go title="Example: mint 1000000 pTest for Genesis Account"
xxx
```

### Send pToken

```go title="Example: sending 1000 pTest from Genesis Account to account2"
tx, err := sim.RPC.API_CreateAndSendPrivacyCustomTokenTransaction(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, tokenInfo map[string]interface{}, p1 string, pPrivacy float64)
if err != nil {
    return err
}
```

---

## Get Transaction By Hash

API_GetTransactionHash(h string) (jsonresult.TransactionDetail, error)

```go
tx, err:= sim.RPC.API_GetTransactionHash(txHash)
if err != nil {
    return err
}
```
