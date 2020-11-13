---
id: tut-remote
title: Tutorial Remote Client
sidebar_label: Remote Client
---
```go
package main

import (
    devframework "incognito-dev-framework"
)
func main() {
    remote := devframework.NewRPCClient("23.234.324.2:8000")
}
```