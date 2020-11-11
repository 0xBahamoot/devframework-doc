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

```go title="Example: we use Genesis Account PRV to stake for Account1(miner1) and reward will go to Account1"
Account1 := sim.NewAccountFromShard(0)
committeeKey1, _ := account.BuildCommitteePubkey(Account1.PrivateKey, sim.GenesisAccount.PaymentAddress)
stake1 := rpcclient.StakingTxParam{
    Name:         "miner1",
    CommitteeKey: committeeKey1,
    BurnAddr:     sim.GetBlockchain().GetBurningAddress(sim.GetBlockchain().BeaconChain.GetFinalViewHeight()),
    StakerPrk:    sim.GenesisAccount.PrivateKey,
    MinerPrk:     Account1.PrivateKey,
    RewardAddr:   Account1.PaymentAddress,
    StakeShard:   true,
    AutoRestake:  true,
}

result, err = sim.RPC.API_SendTxStaking(stake1)
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
```go title="Example: request stop auto-staking for Account1"
unstake1 := rpcclient.StopStakingParam{
    BurnAddr:  sim.GetBlockchain().GetBurningAddress(sim.GetBlockchain().BeaconChain.GetFinalViewHeight()),
    StakerPrk: sim.GenesisAccount.PrivateKey,
    MinerPrk:  Account1.PrivateKey,
}
if _, err := sim.RPC.API_SendTxStopAutoStake(unstake1); err != nil {
    panic(err)
}
```
