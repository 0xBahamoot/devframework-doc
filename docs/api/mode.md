---
id: simulation
title: Simulation
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

```go
node := devframework.NewAppNode("appnode", devframework.MODE_MAINNET, nil, "51.91.72.45:9330", true)
```

---

## New Remote Client Node

```go
remote := devframework.NewRPCClient("0.0.0.0:8000")
```
