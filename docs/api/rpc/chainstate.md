---
id: chainstate
title: Chain State
---

## Blockchain Info

API_GetBlockChainInfo() (\*jsonresult.GetBlockChainInfoResult, error)

```go title="Example: get blockchain info"
result,err := rpc.API_GetBlockChainInfo()
if err!=nil {
    return err
}
```

## Beacon BestState

API_GetBeaconBestState() (jsonresult.GetBeaconBestState, error)

```go title="Example: get beststate of beacon-chain"
beststate,err := rpc.API_GetBeaconBestState()
if err!=nil {
    return err
}
```

---

## Shard BestState

API_GetShardBestState(sid int) (jsonresult.GetShardBestState, error)

```go title="Example: get beststate of shard-chain 0"
beststate,err := rpc.API_GetShardBestState(0)
if err!=nil {
    return err
}
```
