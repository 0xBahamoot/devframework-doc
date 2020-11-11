---
id: pde
title: Privacy Decentralized Exchange
sidebar_label: PDE
---

## PDE state

API_GetPDEState(beaconHeight float64) (jsonresult.CurrentPDEState, error)

```go title="Example: We want to get PDE state at beacon height 100"
pdestate, err := sim.RPC.API_GetPDEState(100)
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
beststate, err := sim.RPC.API_SendTxWithPTokenTradeReq()
if err!=nil {
    return err
}
```

---

## pToken Cross-pool Trade Request

API_SendTxWithPTokenCrossPoolTradeReq(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}, p1 string, pPrivacy float64) (jsonresult.CreateTransactionTokenResult, error)

```go
beststate, err := sim.RPC.API_SendTxWithPTokenCrossPoolTradeReq()
if err!=nil {
    return err
}
```

---

## PRV Trade Request

API_SendTxWithPRVTradeReq(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}) (jsonresult.CreateTransactionResult, error)

```go
beststate, err := sim.RPC.API_SendTxWithPRVTradeReq()
if err!=nil {
    return err
}
```

---

## PRV Cross-pool Trade Request

API_SendTxWithPRVCrossPoolTradeReq(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}) (jsonresult.CreateTransactionResult, error)

```go
beststate, err := sim.RPC.API_SendTxWithPRVCrossPoolTradeReq()
if err!=nil {
    return err
}
```

---

## pToken Contribution

API_SendTxWithPTokenContributionV2(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}, p1 string, pPrivacy float64) (jsonresult.CreateTransactionTokenResult, error)

```go
beststate, err := sim.RPC.API_SendTxWithPTokenContributionV2()
if err!=nil {
    return err
}
```

---

## PRV Contribution

API_SendTxWithPRVContributionV2(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}) (jsonresult.CreateTransactionResult, error)

```go
beststate, err := sim.RPC.API_SendTxWithPRVContributionV2()
if err!=nil {
    return err
}
```

<!-- TODO -->
<!-- ---
###
API_CreateAndSendTxWithWithdrawalReqV2(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}) (jsonresult.CreateTransactionResult, error) -->
