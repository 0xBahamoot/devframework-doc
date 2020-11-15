---
id: database
title: Database
---

```go title="Example: download BeaconChain database from a remote"
err := devframework.DownloadLatestBackup("http://127.0.0.1:9334",-1)
if err!=nil{
    return err
}
```