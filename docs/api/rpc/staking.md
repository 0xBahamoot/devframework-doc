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
result, err := rpc.API_GetPublicKeyRole(committeePubkey.GetMiningKeyBase58("bls"))
if err!=nil {
    return err
}
```

---

## Reward Amount

API_GetRewardAmount(paymentAddress string) (map[string]uint64, error)

```go
result, err := rpc.API_GetRewardAmount(account.PaymentAddress)
if err!=nil {
    return err
}
```

---

## Withdraw Reward

API_WithdrawReward(privateKey string, paymentAddress string) (\*jsonresult.CreateTransactionResult, error)

```go
result, err := rpc.API_WithdrawReward(account.PrivateKey, account.PaymentAddress)
if err!=nil {
    return err
}
```

---

## Stake

API_SendTxStaking(stake StakingParam) (jsonresult.CreateTransactionResult, error)

```go
type StakingTxParam struct {
	CommitteeKey *incognitokey.CommitteePublicKey
	BurnAddr     string
	StakerPrk    string
	MinerPrk     string
	RewardAddr   string
	StakeShard   bool
	AutoRestake  bool
	Name         string
}
```

```go title="Example: we use Genesis Account PRV to stake for account1(miner1) and reward will go to account1"
account1 := account.NewAccountFromPrivatekey("account1 private key")
committeeKey1, _ := account.BuildCommitteePubkey(account1.PrivateKey, account1.PaymentAddress)
burnAddr,err := rpc.GetBurningAddress(0)
if err != nil {
    return err
}
stake1 := rpcclient.StakingTxParam{
    Name:         "miner1",
    CommitteeKey: committeeKey1,
    BurnAddr:     burnAddr,
    StakerPrk:    account1.PrivateKey,
    MinerPrk:     account1.PrivateKey,
    RewardAddr:   account1.PaymentAddress,
    StakeShard:   true,
    AutoRestake:  true,
}

result, err = rpc.API_SendTxStaking(stake1)
if err != nil {
    return err
}
```

---

## Stop AutoStaking

API_CreateAndSendStopAutoStakingTransaction(privateKey string, receivers map[string]interface{}, fee float64, privacy float64, stopStakeInfo map[string]interface{}) (jsonresult.CreateTransactionResult, error) -->

```go
type StopStakingParam struct {
	BurnAddr  string
	StakerPrk string
	MinerPrk  string
}
```

```go title="Example: request stop auto-staking for account1"
account1 := account.NewAccountFromPrivatekey("account1 private key")
burnAddr,err := rpc.GetBurningAddress(0)
if err != nil {
    return err
}
unstake1 := rpcclient.StopStakingParam{
    BurnAddr:  burnAddr,
    StakerPrk: account1.PrivateKey,
    MinerPrk:  account1.PrivateKey,
}
result, err := rpc.API_SendTxStopAutoStake(unstake1)
if err != nil {
    return err
}
```
