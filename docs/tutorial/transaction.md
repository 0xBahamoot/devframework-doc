---
id: tut-tx
title: Tutorial Transaction
sidebar_label: Transaction
---

```go
package main

import (
	"encoding/json"
	"fmt"
	"github.com/0xkumi/incognito-dev-framework"
	"github.com/0xkumi/incognito-dev-framework/account"
	"github.com/0xkumi/incognito-dev-framework/rpcclient"
	"github.com/incognitochain/incognito-chain/blockchain"
	"github.com/incognitochain/incognito-chain/common"
	"github.com/incognitochain/incognito-chain/transaction"
)
func main() {
	  // create a new simulation name 'sim' with 2 shards
    sim := devframework.NewStandaloneSimulation("sim", F.Config{
        ShardNumber: 2,
    })
    // generate 2nd block after genesis block
    sim.GenerateBlock().NextRound()

    acc1 := sim.NewAccountFromShard(0)
    acc2 := sim.NewAccountFromShard(1)

    // send 1000 PRV to acc1 and 3000 PRV to acc2 from genesis account
    result, err := sim.RPC.API_SendTxPRV(sim.GenesisAccount.PrivateKey, map[string]interface{}{
    acc1.PaymentAddress: float64(1000),
    acc2.PaymentAddress: float64(3000),
    }, -1, 1)
    if err != nil {
      panic(err)
    }
    fmt.Println("Tx:",result)

	  // Generate few blocks for chain to process transaction
    for i := 0; i < 4; i++ {
        sim.GenerateBlock().NextRound()
    }

    // get balance of genesis account, acc1 and acc2
    bl0, err := sim.RPC.API_GetBalance(sim.GenesisAccount)
    if err != nil {
		panic(err)
    }
    fmt.Println("GenesisAccount balance:", bl0)
    bl1, err := sim.RPC.API_GetBalance(acc1)
    if err != nil {
		panic(err)
    }
    fmt.Println("Account1 balance:", bl1)
    bl2, err := sim.RPC.API_GetBalance(acc2)
    if err != nil {
		panic(err)
    }
    fmt.Println("Account2 balance:", bl2)
```
