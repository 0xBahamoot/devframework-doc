---
id: event
title: Event
---

### Message received

OnReceive(msgType int, f func(msg interface{}))

```go title="msgType"
const (
	MSG_TX = iota
	MSG_TX_PRIVACYTOKEN

	MSG_BLOCK_SHARD
	MSG_BLOCK_BEACON
	MSG_BLOCK_XSHARD

	MSG_PEER_STATE

	MSG_BFT
)
```

```go
sim.OnReceive(devframework.MSG_BLOCK_SHARD, func(msg interface{}){
    fmt.Println("Received a shard block", msg)
})
```

---

### Block inserted

OnInserted(blkType int, f func(block interface{}))

```go title="blkType"
const (
	BLK_BEACON = iota
	BLK_SHARD
)
```

```go
sim.OnInserted(devframework.BLK_BEACON, func(block interface{}) {
    fmt.Println("A beacon block has been inserted", block)
})
```

---

### Specific block height inserted/finalized

OnNewBlockFromParticularHeight(chainID int, blkHeight int64, isFinalized bool, f func(bc \*blockchain.BlockChain, h common.Hash, height uint64))

```go
beaconChain := -1
var OnNewFinalState = func(bc *blockchain.BlockChain, blkHash common.Hash, blkHeight uint64) {
    fmt.Println("beacon block",blkHeight, "has been finalized")
}
sim.OnNewBlockFromParticularHeight(beaconChain, 100, true,OnNewFinalState)
```
