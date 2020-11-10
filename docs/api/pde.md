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

<!--
API_CreateAndSendTxWithPDEFeeWithdrawalReq(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}) (jsonresult.CreateTransactionResult, error)

--- -->

## pToken Trade Request

API_CreateAndSendTxWithPTokenTradeReq(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}, p1 string, pPrivacy float64) (jsonresult.CreateTransactionTokenResult, error)

```go
beststate, err := sim.RPC.API_CreateAndSendTxWithPTokenTradeReq()
if err!=nil {
    return err
}
```

---

## pToken Cross-pool Trade Request

API_CreateAndSendTxWithPTokenCrossPoolTradeReq(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}, p1 string, pPrivacy float64) (jsonresult.CreateTransactionTokenResult, error)

```go
beststate, err := sim.RPC.API_CreateAndSendTxWithPTokenCrossPoolTradeReq()
if err!=nil {
    return err
}
```

---

## PRV Trade Request

API_CreateAndSendTxWithPRVTradeReq(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}) (jsonresult.CreateTransactionResult, error)

```go
beststate, err := sim.RPC.API_CreateAndSendTxWithPRVTradeReq()
if err!=nil {
    return err
}
```

---

## PRV Cross-pool Trade Request

API_CreateAndSendTxWithPRVCrossPoolTradeReq(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}) (jsonresult.CreateTransactionResult, error)

```go
beststate, err := sim.RPC.API_CreateAndSendTxWithPRVCrossPoolTradeReq()
if err!=nil {
    return err
}
```

---

## pToken Contribution

API_CreateAndSendTxWithPTokenContributionV2(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}, p1 string, pPrivacy float64) (jsonresult.CreateTransactionTokenResult, error)

```go
beststate, err := sim.RPC.API_CreateAndSendTxWithPTokenContributionV2()
if err!=nil {
    return err
}
```

---

## PRV Contribution

API_CreateAndSendTxWithPRVContributionV2(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}) (jsonresult.CreateTransactionResult, error)

```go
beststate, err := sim.RPC.API_CreateAndSendTxWithPRVContributionV2()
if err!=nil {
    return err
}
```

<!-- ---
###
API_CreateAndSendTxWithWithdrawalReqV2(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, reqInfo map[string]interface{}) (jsonresult.CreateTransactionResult, error) -->
