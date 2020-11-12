---
id: simulation
title: Simulation
---

## Disable Log

```go
devframework.DisableLog(true)
```
---

## New Simulation Node
```go
type Config struct {
	ShardNumber   int
	RoundInterval int
}
```
```go
sim := devframework.NewStandaloneSimulation("sim", devframework.Config{
    ShardNumber: 2,
})
```
---

## New Remote Client Node
```go
remote := devframework.NewRPCClient("0.0.0.0:8000")
```