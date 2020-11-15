---
id: block
title: Block
---

```go
sim.GenerateBlock().NextRound()
```

```go
type Hook struct {
	Create     func(chainID int, doCreate func(time time.Time) (blk common.BlockInterface, err error))
	Validation func(chainID int, block common.BlockInterface, doValidation func(blk common.BlockInterface) error)
	Insert     func(chainID int, block common.BlockInterface, doInsert func(blk common.BlockInterface) error)
}
```

```go title="generate block with hook"
sim.GenerateBlock(devframework.Hook{
    Create:     func(chainID int, doCreate func(time time.Time) (blk common.BlockInterface, err error)) {
        fmt.Println("block create hook")
    },
    Validation: func(chainID int, block common.BlockInterface, doValidation func(common.BlockInterface) error) {
        fmt.Println("block validation hook")
    },
    Insert     func(chainID int, block common.BlockInterface, doInsert func(blk common.BlockInterface) error){
        fmt.Println("block insert hook")
    },
}
}).NextRound()
```