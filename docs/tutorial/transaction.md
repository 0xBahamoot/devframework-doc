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
	"github.com/0xkumi/incongito-dev-framework"
	"github.com/0xkumi/incongito-dev-framework/account"
	"github.com/0xkumi/incongito-dev-framework/rpcclient"
	"github.com/incognitochain/incognito-chain/blockchain"
	"github.com/incognitochain/incognito-chain/common"
	"github.com/incognitochain/incognito-chain/transaction"
)
func main() {
    sim := devframework.NewStandaloneSimulation("sim", F.Config{
        ShardNumber: 2,
    })
    sim.GenerateBlock().NextRound()
    acc1 := sim.NewAccountFromShard(0)
    acc2 := sim.NewAccountFromShard(1)

    result, err := sim.RPC.API_SendTxPRV(sim.GenesisAccount.PrivateKey, map[string]interface{}{
    acc1.PaymentAddress: float64(1000),
    acc2.PaymentAddress: float64(3000),
	}, -1, 1)
	if err != nil {
		panic(err)
    }
    fmt.Println("Tx:",result)

    for i := 0; i < 4; i++ {
        sim.GenerateBlock().NextRound()
    }

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
