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
	"incognito-dev-framework"
	"incognito-dev-framework/account"
    "incognito-dev-framework/rpcclient"
	"github.com/incognitochain/incognito-chain/blockchain"
	"github.com/incognitochain/incognito-chain/common"
	"github.com/incognitochain/incognito-chain/transaction"
)
func main() {
	sim := devframework.NewStandaloneSimulation("sim", F.Config{
        ShardNumber: 2,
	 })
	sim.GenerateBlock().NextRound()
	account1 := sim.NewAccountFromShard(0)
	_, err := sim.RPC.API_SendTxPRV(sim.GenesisAccount.PrivateKey, map[string]interface{}{
		account1.PaymentAddress: float64(100000000),
	}, -1, -1)
	if err != nil {
		panic(err)
	}
	sim.GenerateBlock().NextRound()
	//Create custom token
	result1, err := sim.RPC.API_SendTxCreateCustomToken(sim.GenesisAccount.PrivateKey, sim.GenesisAccount.PaymentAddress, 1, "pTest", "TES", 30000000000)
	if err != nil {
		panic(err)
	}
	fmt.Println(result1.TokenName, result1.TokenID)
	for i := 0; i < 50; i++ {
		sim.GenerateBlock().NextRound()
	}

	result2, err := sim.RPC.API_SendTxWithPTokenContributionV2(sim.GenesisAccount, result1.TokenID, "300000000", "testPAIR")
	if err != nil {
		panic(err)
	}

	for i := 0; i < 10; i++ {
		sim.GenerateBlock().NextRound()
	}

	_, err = sim.RPC.API_SendTxWithPRVContributionV2(sim.GenesisAccount, "100000000000", "testPAIR")
	if err != nil {
		panic(err)
	}
	for i := 0; i < 10; i++ {
		sim.GenerateBlock().NextRound()
	}

	result3, err := sim.RPC.API_GetPDEState(float64(sim.GetBlockchain().GetBeaconBestState().BeaconHeight))
	if err != nil {
		panic(err)
	}
	rBytes, err := json.Marshal(result4)
	if err != nil {
		panic(err)
	}
	fmt.Println(string(rBytes))

	_, err = sim.RPC.API_SendTxWithPRVCrossPoolTradeReq(account1, result1.TokenID, "1000000")
	if err != nil {
		panic(err)
	}
	for i := 0; i < 10; i++ {
		sim.GenerateBlock().NextRound()
	}

	prvID := "0000000000000000000000000000000000000000000000000000000000000004"
	_, err = sim.RPC.API_SendTxWithPTokenCrossPoolTradeReq(sim.GenesisAccount, result1.TokenID, prvID, "1000000000")
	if err != nil {
		panic(err)
	}
	for i := 0; i < 10; i++ {
		sim.GenerateBlock().NextRound()
	}

	fmt.Println("------------------------------------------------------------")
	bl, _ := sim.RPC.API_GetBalance(sim.GenesisAccount)
	fmt.Println("ICO", bl)
	fmt.Println("------------------------------------------------------------")
	bl1, _ := sim.RPC.API_GetBalance(acc1)
	fmt.Println("ACC1", bl1)

	fmt.Println("------------------------------------------------------------")
	result4, err := sim.RPC.API_GetPDEState(float64(sim.GetBlockchain().GetBeaconBestState().BeaconHeight))
	if err != nil {
		panic(err)
	}
	rBytes2, _ := json.Marshal(result4)
	fmt.Println(string(rBytes2))
}
```