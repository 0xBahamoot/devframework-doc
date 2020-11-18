---
id: account-rpc
title: Account
---

## Get Account Balance

API_GetBalance(account.Account) (uint64, error)

Example:

```go title="Example: get balance of Genesis Account"
balance, err := sim.RPC.API_GetBalance(sim.GenesisAccount)
if err!= nil {
    return err
}
```
