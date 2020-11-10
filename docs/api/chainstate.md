---
id: chainstate
title: Chain State
---

## Beacon BestState

API_GetBeaconBestState() (jsonresult.GetBeaconBestState, error)

```go title="Example: get beststate of beacon-chain"
beststate,err := sim.RPC.API_GetBeaconBestState()
if err!=nil {
    return err
}
```

---

## Shard BestState

API_GetShardBestState(sid int) (jsonresult.GetShardBestState, error)

```go title="Example: get beststate of shard-chain 0"
beststate,err := sim.RPC.API_GetShardBestState(0)
if err!=nil {
    return err
}
```
