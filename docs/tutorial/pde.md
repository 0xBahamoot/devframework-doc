---
id: tut-pde
title: Tutorial PDE
sidebar_label: PDE
---

```go
package main

import (
	"encoding/json"
	"fmt"
	"github.com/0xkumi/incongito-dev-framework"
)

func main() {
	// create a new simulation name 'sim' with 2 shards
	sim := devframework.NewStandaloneSimulation("sim", devframework.Config{
		ShardNumber: 2,
	})
	// generate 2nd block after genesis block
	sim.GenerateBlock().NextRound()

	// send 100000000 PRV from genesis account to account1
	account1 := sim.NewAccountFromShard(0)
	_, err := sim.RPC.API_SendTxPRV(sim.GenesisAccount.PrivateKey, map[string]interface{}{
		account1.PaymentAddress: float64(100000000),
	}, -1, -1)
	if err != nil {
		panic(err)
	}

	// Generate block for chain to process transaction
	sim.GenerateBlock().NextRound()
	//Create 30000000000 units of custom token name pTest for genesis account
	result1, err := sim.RPC.API_SendTxCreateCustomToken(sim.GenesisAccount.PrivateKey, sim.GenesisAccount.PaymentAddress, 1, "pTest", "TES", 30000000000)
	if err != nil {
		panic(err)
	}
	fmt.Println(result1.TokenName, result1.TokenID)
	// Generate few blocks for chain to process transaction
	for i := 0; i < 5; i++ {
		sim.GenerateBlock().NextRound()
	}

	// Contribute 300000000 unit of pTest to pair 'testPAIR'
	_, err = sim.RPC.API_SendTxWithPTokenContributionV2(sim.GenesisAccount, result1.TokenID, "300000000", "testPAIR")
	if err != nil {
		panic(err)
	}

	// Generate few blocks for chain to process transaction
	for i := 0; i < 5; i++ {
		sim.GenerateBlock().NextRound()
	}

	// Contribute 100000000000 PRV to pair 'testPAIR'
	_, err = sim.RPC.API_SendTxWithPRVContributionV2(sim.GenesisAccount, "100000000000", "testPAIR")
	if err != nil {
		panic(err)
	}

	// Generate few blocks for chain to process transaction
	for i := 0; i < 5; i++ {
		sim.GenerateBlock().NextRound()
	}
	// Get chain PDEState
	result2, err := sim.RPC.API_GetPDEState(float64(sim.GetBlockchain().GetBeaconBestState().BeaconHeight))
	if err != nil {
		panic(err)
	}
	rBytes, err := json.Marshal(result2)
	if err != nil {
		panic(err)
	}
	fmt.Println(string(rBytes))

	// Send a trade request selling 1000000 PRV for at least 1 pTest token
	_, err = sim.RPC.API_SendTxWithPRVCrossPoolTradeReq(account1, result1.TokenID, "1000000", "1")
	if err != nil {
		panic(err)
	}

	// Generate few blocks for chain to process transaction
	for i := 0; i < 5; i++ {
		sim.GenerateBlock().NextRound()
	}


	// Send a trade request selling 1000000000 pTest for at least 1 PRV
	prvID := "0000000000000000000000000000000000000000000000000000000000000004"
	_, err = sim.RPC.API_SendTxWithPTokenCrossPoolTradeReq(sim.GenesisAccount, result1.TokenID, prvID, "1000000000")
	if err != nil {
		panic(err)
	}

	// Generate few blocks for chain to process transaction
	for i := 0; i < 5; i++ {
		sim.GenerateBlock().NextRound()
	}


	// Get balance of genesis account and account1
	fmt.Println("------------------------------------------------------------")
	bl, _ := sim.RPC.API_GetBalance(sim.GenesisAccount)
	fmt.Println("ICO", bl)
	fmt.Println("------------------------------------------------------------")
	bl1, _ := sim.RPC.API_GetBalance(account1)
	fmt.Println("ACC1", bl1)

	fmt.Println("------------------------------------------------------------")
	result3, err := sim.RPC.API_GetPDEState(float64(sim.GetBlockchain().GetBeaconBestState().BeaconHeight))
	if err != nil {
		panic(err)
	}
	rBytes2, _ := json.Marshal(result3)
	fmt.Println(string(rBytes2))
}
```
