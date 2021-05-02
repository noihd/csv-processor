#!/bin/bash
#
# description: Generate SQL Exports
#
# author: Peter Schmalfeldt <me@peterschmalfeldt.com>

# Clean Old Files
rm -fr ./sql/*.sql
rm -fr ./sql/*.sql.gz

# Generate Agency SQL and Compress
./bin/cli.js parse -m Agency
gzip ./sql/agency.sql

# Generate AnnualDeaths SQL and Compress
./bin/cli.js parse -m AnnualDeaths
gzip ./sql/annual_deaths.sql

# Generate AnnualOfficerDeaths SQL and Compress
./bin/cli.js parse -m AnnualOfficerDeaths
gzip ./sql/annual_officer_deaths.sql

# Generate Characteristics SQL and Compress
./bin/cli.js parse -m Characteristics
gzip ./sql/characteristics.sql

# Generate Crimes SQL and Compress
./bin/cli.js parse -m Crimes
gzip ./sql/crimes.sql

# Generate Demographics SQL and Compress
./bin/cli.js parse -m Demographics
gzip ./sql/demographics.sql

# Generate FirearmLaws SQL and Compress
./bin/cli.js parse -m FirearmLaws
gzip ./sql/firearm_law.sql

# Generate Gunshots SQL and Compress
./bin/cli.js parse -m Gunshots
gzip ./sql/gunshots.sql
