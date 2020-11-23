---
id: vs
title: Modes
sidebar_label: Modes
---

### The Incognito Devframework has 3 modes:

**Simulation**: create a full simluated local environment Incognito Blockchain node with user's configuration. Available APIs: Sim, Event and RPC.

**App-node**: create a Incognito Blockchain full-node that can connect with existing Incognito Mainnet/Testnet or user's private Incognito Blockchain network. Available APIs: Event, RPC.

**Remote-Client**: create local cliWent that can interact with a remote Incognito Blockchain node with code. Available APIs: RPC.

---

## New Simulation Node

```go
type Config struct {
	ShardNumber   int
	RoundInterval int
}
```

```go title="Example: create a simulation name 'sim' with 2 ShardChains"
sim := devframework.NewStandaloneSimulation("sim", devframework.Config{
    ShardNumber: 2,
})
```

---

## New App Node

```go title="Example: start an app node with Mainnet's param"
node := devframework.NewAppNode("fullnode", devframework.MainNetParam, true)
```

---

## New Remote Client Node

```go
remote := devframework.NewRPCClient("1.2.3.4:8000")
```
