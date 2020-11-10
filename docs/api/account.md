---
id: account
title: Account
---

## New Account

NewAccount() account.Account

```go title="Example: creating a new account"
account := sim.NewAccount()
```

---

## New Account From Shard

NewAccountFromShard(sid int) account.Account

```go title="Example: creating a new account belong to shard 0"
account := sim.NewAccountFromShard(0)
```

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
