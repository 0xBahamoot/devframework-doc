---
id: pde
title: Privacy Decentralized Exchange
sidebar_label: PDE
---

## PDE state

API_GetPDEState(beaconHeight float64) (jsonresult.CurrentPDEState, error)

```go title="Example: We want to get PDE state at beacon height 100"
pdestate, err := rpc.API_GetPDEState(100)
if err!=nil {
    return err
}
```

---

<!-- TODO -->
<!--
API_CreateAndSendTxWithPDEFeeWithdrawalReq(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}) (jsonresult.CreateTransactionResult, error)

--- -->

## pToken Trade Request

API_SendTxWithPTokenTradeReq(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}, p1 string, pPrivacy float64) (jsonresult.CreateTransactionTokenResult, error)

```go
beststate, err := rpc.API_SendTxWithPTokenTradeReq()
if err!=nil {
    return err
}
```

---

## pToken Cross-pool Trade Request

API_SendTxWithPTokenCrossPoolTradeReq(acount account.Account, tokenID string, buyTokenID string, amount string) (\*jsonresult.CreateTransactionTokenResult, error)

```go title="Example: buy PRV by selling 1000000000 pToken"
account1 := account.NewAccountFromPrivatekey("account1 private key")
PRVID := "0000000000000000000000000000000000000000000000000000000000000004"
tokenToBuy := PRVID
tokenToSell := "3fd331ddefb789ca7552f489710666bebfcd824a6ea68443054527d02acc8fa0"
result, err := rpc.API_SendTxWithPTokenCrossPoolTradeReq(account1, tokenToSell, tokenToBuy, "1000000000")
if err!=nil {
    return err
}
```

---

## PRV Trade Request

API_SendTxWithPRVTradeReq(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}) (jsonresult.CreateTransactionResult, error)

```go
beststate, err := rpc.API_SendTxWithPRVTradeReq()
if err!=nil {
    return err
}
```

---

## PRV Cross-pool Trade Request

API_SendTxWithPRVCrossPoolTradeReq(account account.Account, buyTokenID string, amount string) (\*jsonresult.CreateTransactionResult, error)

```go title="Example: buy pToken with 1000000 PRV"
account1 := account.NewAccountFromPrivatekey("account1 private key")
tokenToBuy := "3fd331ddefb789ca7552f489710666bebfcd824a6ea68443054527d02acc8fa0"
prvSellAmount := "1000000"
result, err := rpc.API_SendTxWithPRVCrossPoolTradeReq(account1, tokenToBuy, prvSellAmount)
if err!=nil {
    return err
}
```

---

## pToken Contribution

API_SendTxWithPTokenContributionV2(account account.Account, tokenID string, tokenAmount string, pairID string) (\*jsonresult.CreateTransactionTokenResult, error)

```go title="Example: contribute 300000000 pToken to testPair"
account1 := account.NewAccountFromPrivatekey("account1 private key")
contributeTokenID := "3fd331ddefb789ca7552f489710666bebfcd824a6ea68443054527d02acc8fa0"
contributeAmount := "300000000"
pairID := "testPair"
result, err := rpc.API_SendTxWithPTokenContributionV2(account1, contributeTokenID, contributeAmount, pairID)
if err!=nil {
    return err
}
```

---

## PRV Contribution

API_SendTxWithPRVContributionV2(account account.Account, prvAmount string, pairID string) (\*jsonresult.CreateTransactionResult, error)

```go title="Example: contribute 100000000000 PRV to testPair"
account1 := account.NewAccountFromPrivatekey("account1 private key")
contributeAmount := "100000000000"
pairID := "testPair"
result, err := rpc.API_SendTxWithPRVContributionV2(account1, contributeAmount, pairID)
if err!=nil {
    return err
}
```

## <!-- TODO -->

### Withdraw Liquidity

API_SendTxWithWithdrawalReqV2(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}) (jsonresult.CreateTransactionResult, error)

```go
result, err := rpc.API_SendTxWithWithdrawalReqV2()
```
