![Logo](img/logo.png "Logo")

**[↤ Developer Overview](../README.md)**

Troubleshooting
===

> This document contains a list of known issues, and how to solve them.

<img src="https://octodex.github.com/images/dinotocat.png" width="400" />

#### NOTHING YET :tada:

Working with Raw Data
---

Sometimes it is easer to just import the CSV into a Database so you can work with different queries and analyze the types of data you are working with.  Here are some helpful tips for doing that kind of work.

### Generate Tables

> **NOTE:** Make sure you update the file paths in the sample code above, e.g. change `/path/to/` to your actual path.

First, you'll need to create the Schema File to import:

```bash
pdp util --sql > /path/to/schema.sql
```

Next, you'll need to import that into the database:

```sql
source /path/to/schema.sql;
```

### Import CSV Into Database

Now that you have the `pdp_raw_data` table created, you can import the CSV directly into it:

```sql
-- Update Setting to Support Local Imports
SET GLOBAL local_infile = 1;

-- Purge Old Data
TRUNCATE TABLE `pdp_raw_data`;

-- Import New Data from CSV
LOAD DATA LOCAL INFILE '/path/to/pdp-csv-processor/src/police_data_portal.csv'
INTO TABLE `pdp_raw_data`
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;
```
