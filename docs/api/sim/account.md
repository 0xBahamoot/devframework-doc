---
id: account-sim
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
