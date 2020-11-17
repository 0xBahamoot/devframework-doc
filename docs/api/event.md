---
id: event
title: Event
---

### Message received

OnReceive(msgType int, f func(msg interface{}))

### Block inserted

OnInserted(blkType int, f func(msg interface{}))

### Specific block height inserted/finalized

OnNewBlockFromParticularHeight(chainID int, blkHeight int64, isFinalized bool, f func(bc \*blockchain.BlockChain, h common.Hash, height uint64))
