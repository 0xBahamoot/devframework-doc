---
id: tut-lightnode
title: Tutorial Light Node
sidebar_label: Light Node
---

```go
package main

import (
	"fmt"

	devframework "github.com/0xkumi/incognito-dev-framework"
	"github.com/incognitochain/incognito-chain/blockchain"
	"github.com/incognitochain/incognito-chain/common"
)

func main() {
	node := devframework.NewAppNode("fullnode", devframework.MainNetParam, true, false)
    chainID := 0
    // we will print what block height from chainID 0 just be stored
	var OnNewShardBlock = func(bc *blockchain.BlockChain, h common.Hash, height uint64) {
		fmt.Println("Shard", chainID, height)
	}
	node.OnNewBlockFromParticularHeight(chainID, -1, true, OnNewShardBlock)
	select {}
}

```
