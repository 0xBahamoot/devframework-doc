---
id: block-rpc
title: Block
---

## Retrieve Shard Block

API_RetrieveShardBlock(hash string, verbosity string) (\*jsonresult.GetShardBlockResult, error)

### By Hash

```go title="Example: get shard block with hash '123' and verbosity level of '2'"
blockHash := "123"
result,err := rpc.API_RetrieveShardBlock(blockHash, "2")
if err!=nil {
    return err
}
```

API_RetrieveShardBlockByHeight(shardID byte, height uint64, verbosity string) ([]\*jsonresult.GetShardBlockResult, error)

### By Height

```go title="Example: get shard block of shard 0 with height 100 and verbosity level of '2'"
blockHeight := uint64(100)
shardID := byte(0)
result,err := rpc.API_RetrieveShardBlock(shardID, blockHeight, "2")
if err!=nil {
    return err
}
```

---

## Retrieve Beacon Block

API_RetrieveBeaconBlock(hash string) (\*jsonresult.GetBeaconBlockResult, error)

### By Hash

```go title="Example: get beacon block with hash '123'"
blockHash := "123"
result,err := rpc.API_RetrieveBeaconBlock(blockHash)
if err!=nil {
    return err
}
```

API_RetrieveBeaconBlockByHeight(height uint64) ([]\*jsonresult.GetBeaconBlockResult, error)

### By Height

```go title="Example: get beacon block with height 100"
blockHeight := 100
result,err := rpc.API_RetrieveBeaconBlockByHeight(blockHeight)
if err!=nil {
    return err
}
```
