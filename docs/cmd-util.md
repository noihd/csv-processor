![Logo](img/logo.png "Logo")

**[↤ Developer Overview](../README.md#developer-overview)**

`pdp util`
---

> Developer Utilities

#### Output Mapping Info for Model

You can generate mapping details about a specific model a few handy ways:

```bash
pdp util --model agency
pdp util -m agency
pdp util --model agency --format table
pdp util -m agency -f table
```

**FLAGS:**

Name     | Param      | Alias | Default  | Options         | Definition
---------|------------|-------|----------|-----------------|-------------------------------------
Model    | `--model`  | `-m`  | `null`   | `agency`        | Which Model to Generate Details
Format   | `--format` | `-f`  | `json`   | `json`, `table` | `table` Renders Markdown Table
