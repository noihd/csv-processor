#!/bin/bash
#
# description: Import SQL files to MySQL
#
# author: Peter Schmalfeldt <me@peterschmalfeldt.com>

__error(){
    TEXT=$( echo $1 | tr '\n' ' ')
    echo -e "\033[38;5;196m×\033[0m $TEXT"
}

__notice(){
    TEXT=$( echo $1 | tr '\n' ' ')
    echo -e "\033[38;5;220m→\033[0m $TEXT"
}

__output(){
    TEXT=$( echo $1 | tr '\n' ' ')
    echo -e "› $TEXT"
}

__success(){
    TEXT=$( echo $1 | tr '\n' ' ')
    echo -e "\033[38;5;34m✓\033[0m $TEXT"
}

# Disable Debugging by default
DEBUG=''

# Import MySQL Settings
if [ -f .env ]; then
  export $(cat .env | sed 's/#.*//g' | xargs)
else
  __error "Missing .env File ( Copy .env.example to .env & Update )"
  exit 1
fi

# Check if we want to enable MySQL debugging
if [ "$MYSQL_DEBUG" = true ]; then
  DEBUG='--verbose'
fi

# Import Agency SQL and Compress
if [ -f ./sql/agency.sql.gz ]; then
  read -p "Import Agency to MySQL? " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    __output "Unzipping ./sql/agency.sql.gz"
    gunzip ./sql/agency.sql.gz

    __output "MySQL Importing: ./sql/agency.sql"
    mysql --host=$MYSQL_HOST --port=$MYSQL_PORT --user=$MYSQL_USER --password=$MYSQL_PASS $DEBUG --show-warnings=false $MYSQL_DATABASE < ./sql/agency.sql
    gzip ./sql/agency.sql

    __success "Agency Import Complete"
  else
    __output "Skipped Agency"
  fi
else
  __notice "Skipping Agency ( missing ./sql/agency.sql.gz )"
fi

# Import AnnualDeaths SQL and Compress
if [ -f ./sql/annual_deaths.sql.gz ]; then
  read -p "Import AnnualDeaths to MySQL? " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    __output "Unzipping ./sql/annual_deaths.sql.gz"
    gunzip ./sql/annual_deaths.sql.gz

    __output "MySQL Importing: ./sql/annual_deaths.sql"
    mysql --host=$MYSQL_HOST --port=$MYSQL_PORT --user=$MYSQL_USER --password=$MYSQL_PASS $DEBUG --show-warnings=false $MYSQL_DATABASE < ./sql/annual_deaths.sql
    gzip ./sql/annual_deaths.sql

    __success "AnnualDeaths Import Complete"
  else
    __output "Skipped AnnualDeaths"
  fi
else
  __notice "Skipping AnnualDeaths ( missing ./sql/annual_deaths.sql.gz )"
fi

# Import AnnualOfficerDeaths SQL and Compress
if [ -f ./sql/annual_officer_deaths.sql.gz ]; then
  read -p "Import AnnualOfficerDeaths to MySQL? " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    __output "Unzipping ./sql/annual_officer_deaths.sql.gz"
    gunzip ./sql/annual_officer_deaths.sql.gz

    __output "MySQL Importing: ./sql/annual_officer_deaths.sql"
    mysql --host=$MYSQL_HOST --port=$MYSQL_PORT --user=$MYSQL_USER --password=$MYSQL_PASS $DEBUG --show-warnings=false $MYSQL_DATABASE < ./sql/annual_officer_deaths.sql
    gzip ./sql/annual_officer_deaths.sql

    __success "AnnualOfficerDeaths Import Complete"
  else
    __output "Skipped AnnualOfficerDeaths"
  fi
else
  __notice "Skipping AnnualOfficerDeaths ( missing ./sql/annual_officer_deaths.sql.gz )"
fi

# Import Characteristics SQL and Compress
if [ -f ./sql/characteristics.sql.gz ]; then
  read -p "Import Characteristics to MySQL? " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    __output "Unzipping ./sql/characteristics.sql.gz"
    gunzip ./sql/characteristics.sql.gz

    __output "MySQL Importing: ./sql/characteristics.sql"
    mysql --host=$MYSQL_HOST --port=$MYSQL_PORT --user=$MYSQL_USER --password=$MYSQL_PASS $DEBUG --show-warnings=false $MYSQL_DATABASE < ./sql/characteristics.sql
    gzip ./sql/characteristics.sql

    __success "Characteristics Import Complete"
  else
    __output "Skipped Characteristics"
  fi
else
  __notice "Skipping Characteristics ( missing ./sql/characteristics.sql.gz )"
fi

# Import Crimes SQL and Compress
if [ -f ./sql/crimes.sql.gz ]; then
  read -p "Import Crimes to MySQL? " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    __output "Unzipping ./sql/crimes.sql.gz"
    gunzip ./sql/crimes.sql.gz

    __output "MySQL Importing: ./sql/crimes.sql"
    mysql --host=$MYSQL_HOST --port=$MYSQL_PORT --user=$MYSQL_USER --password=$MYSQL_PASS $DEBUG --show-warnings=false $MYSQL_DATABASE < ./sql/crimes.sql
    gzip ./sql/crimes.sql

    __success "Crimes Import Complete"
  else
    __output "Skipped Crimes"
  fi
else
  __notice "Skipping Crimes ( missing ./sql/crimes.sql.gz )"
fi

# Import Demographics SQL and Compress
if [ -f ./sql/demographics.sql.gz ]; then
  read -p "Import Demographics to MySQL? " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    __output "Unzipping ./sql/demographics.sql.gz"
    gunzip ./sql/demographics.sql.gz

    __output "MySQL Importing: ./sql/demographics.sql"
    mysql --host=$MYSQL_HOST --port=$MYSQL_PORT --user=$MYSQL_USER --password=$MYSQL_PASS $DEBUG --show-warnings=false $MYSQL_DATABASE < ./sql/demographics.sql
    gzip ./sql/demographics.sql

    __success "Demographics Import Complete"
  else
    __output "Skipped Demographics"
  fi
else
  __notice "Skipping Demographics ( missing ./sql/demographics.sql.gz )"
fi

# Import FirearmLaws SQL and Compress
if [ -f ./sql/firearm_laws.sql.gz ]; then
  read -p "Import FirearmLaws to MySQL? " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    __output "Unzipping ./sql/firearm_laws.sql.gz"
    gunzip ./sql/firearm_laws.sql.gz

    __output "MySQL Importing: ./sql/firearm_laws.sql"
    mysql --host=$MYSQL_HOST --port=$MYSQL_PORT --user=$MYSQL_USER --password=$MYSQL_PASS $DEBUG --show-warnings=false $MYSQL_DATABASE < ./sql/firearm_laws.sql
    gzip ./sql/firearm_laws.sql

    __success "FirearmLaws Import Complete"
  else
    __output "Skipped FirearmLaws"
  fi
else
  __notice "Skipping FirearmLaws ( missing ./sql/firearm_laws.sql.gz )"
fi

# Import Gunshots SQL and Compress
if [ -f ./sql/gunshots.sql.gz ]; then
  read -p "Import Gunshots to MySQL? " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    __output "Unzipping ./sql/gunshots.sql.gz"
    gunzip ./sql/gunshots.sql.gz

    __output "MySQL Importing: ./sql/gunshots.sql"
    mysql --host=$MYSQL_HOST --port=$MYSQL_PORT --user=$MYSQL_USER --password=$MYSQL_PASS $DEBUG --show-warnings=false $MYSQL_DATABASE < ./sql/gunshots.sql
    gzip ./sql/gunshots.sql

    __success "Gunshots Import Complete"
  else
    __output "Skipped Gunshots"
  fi
else
  __notice "Skipping Gunshots ( missing ./sql/gunshots.sql.gz )"
fi
