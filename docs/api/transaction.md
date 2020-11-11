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
### Mint ptoken
API_SendTxCreateCustomToken(privateKey string, receiverPaymentAddress string, privacy float64, tokenName string, tokenSymbol string, tokenAmount uint64) (*jsonresult.CreateTransactionTokenResult, error)

```go title="Example: mint 30000000000 pTest for Genesis Account"
result, err := sim.RPC.API_SendTxCreateCustomToken(sim.GenesisAccount.PrivateKey, sim.GenesisAccount.PaymentAddress, 1, "pTest", "TES", 30000000000)
if err != nil {
    panic(err)
}
```

### Send pToken
API_SendTxCustomToken(privateKey string, tokenID string, receivers map[string]interface{}, fee float64, privacy float64) (*jsonresult.CreateTransactionTokenResult, error)

```go title="Example: sending 100000 pTest from Genesis Account to account1"
account1 := sim.NewAccount()
tx, err := sim.RPC.API_SendTxCustomToken(sim.GenesisAccount.PrivateKey, result1.TokenID, map[string]interface{}{
    account1.PaymentAddress: float64(100000),
}, -1, 1)
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
