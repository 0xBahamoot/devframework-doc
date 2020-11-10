---
id: staking
title: Staking
---

## Committee PublicKey State

GetCommitteePublicKeyState(userPk \*incognitokey.CommitteePublicKey) (role string, chainID int)

```go title="Example: get committee public-key state"
// build committee public-key from miner's private-key and staker's paymentAddress
committeePubkey, err := account.BuildCommitteePubkey(minerPrivateKey, stakerPaymentAddress)
if err!=nil {
    return err
}
beststate, err := sim.GetCommitteePublicKeyState(committeePubkey)
if err!=nil {
    return err
}
```

---

## Reward Amount

API_GetRewardAmount(paymentAddress string) (map[string]uint64, error)

```go
reward, err := sim.RPC.API_GetRewardAmount(account.PaymentAddress)
if err!=nil {
    return err
}
```

---

## Withdraw Reward

API_WithdrawReward(privateKey string, paymentAddress string) (\*jsonresult.CreateTransactionResult, error)

```go
result, err := sim.RPC.API_WithdrawReward(account.PrivateKey, account.PaymentAddress)
if err!=nil {
    return err
}
```

---

## Stake

API_CreateAndSendStakingTransaction(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, stakeInfo map[string]interface{}) (jsonresult.CreateTransactionResult, error)

```go
beststate, err := sim.RPC.API_CreateAndSendStakingTransaction()
if err!=nil {
    return err
}
```

---

## Stop AutoStaking

API_CreateAndSendStopAutoStakingTransaction(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, stopStakeInfo map[string]interface{}) (jsonresult.CreateTransactionResult, error) -->

```go
beststate, err := sim.RPC.API_CreateAndSendStopAutoStakingTransaction()
if err!=nil {
    return err
}
```
