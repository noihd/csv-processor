#!/usr/bin/env bash

# Common Variables
APP='POLICE DATA PORTAL'
SOURCE_DIR='./src'
PROCESSED_DIR='./processed'

# Zip File Names
ZIP="$SOURCE_DIR/police_data_portal.csv.zip"

# CSV File Names
CSV="$SOURCE_DIR/police_data_portal.csv"
CSV_HEADERS="$PROCESSED_DIR/police_data_portal_headers.txt"
CSV_PREVIEW="$PROCESSED_DIR/police_data_portal_truncated.csv"

# Split CSV File Names
CSV_XWK="$PROCESSED_DIR/group-xwk.csv" # Agency Data
CSV_LEM="$PROCESSED_DIR/group-lem.csv" # Law Enforcement Management Data
CSV_UCR="$PROCESSED_DIR/group-ucr.csv" # Uniform Crime Reporting Data
CSV_CEN="$PROCESSED_DIR/group-cen.csv" # Census Data
CSV_VIC="$PROCESSED_DIR/group-vic.csv" # Vice News Data
CSV_LEO="$PROCESSED_DIR/group-leo.csv" # Police Employee Data
CSV_FE="$PROCESSED_DIR/group-fe.csv"   # Fatal Encounters Data
CSV_SIE="$PROCESSED_DIR/group-sie.csv" # Siegel Firearm Data

# Column Mappings ( splits CSV columns by column position )
XWK='1-52'
LEM='54-120,772-780'
UCR='121-145'
CEN='148-305'
VIC='306-314'
LEO='315-321,232-328'
FE='329-345,347-370,378-405,413-681,683-692,700-734,742-762,781-794'
SIE='763-771'

# Functions
function shutdown() {
  # Do whatever you need to do if command exited early
  echo -e "\n\n\033[38;5;196m× $APP Terminated\033[0m\n"
  exit 0
}

# Listen for Shutdown Event
trap shutdown SIGINT SIGTERM

echo -e "\n\033[48;5;22m $APP \033[0m\n"

# ============================================================
# STEP 1: UNZIP DATA SET IF IT WAS NOT ALREADY UNZIPPED
# ============================================================

# Check if we downloaded the zip file and did not unzip it
if [ -f "$ZIP" ] && [ ! -f "$CSV" ]; then
  echo "› Unzipping $ZIP File... ( this may take a minute )"
  unzip -qq -o $ZIP -d $SOURCE_DIR

  if [ -f "$CSV" ]; then
    echo "› Cleaning Up $ZIP Extraction..."
    rm -fr $SOURCE_DIR/__MACOSX
    rm $ZIP
  fi
fi

# ============================================================
# STEP 2: BREAK UP MASSIVE CSV INTO SMALLER CSV GROUP FILES
# ============================================================

# Make sure we have a CSV file
if [ -f "$CSV" ]; then
  # Remove Previously Exported Files
  echo '› Cleaning Previous Exports...'
  rm $PROCESSED_DIR/*

  # Export CSV Column Headers to their Own File
  echo "› Exporting CSV Headers to $CSV_HEADERS..."
  head -n 1 $CSV | tr ',' '\n' | tr -d '"' > $CSV_HEADERS

  # Make Sample File for Review
  echo "› Exporting 1,000 row preview to $CSV_PREVIEW..."
  head -n 1001 $CSV > $CSV_PREVIEW

  # Export XWK Columns
  echo "› Exporting XWK columns to $CSV_XWK..."
  cut -d, -f$XWK $CSV > $CSV_XWK

  # Export LEM Columns
  echo "› Exporting LEM columns to $CSV_LEM..."
  cut -d, -f$LEM $CSV > $CSV_LEM

  # Export UCR Columns
  echo "› Exporting UCR columns to $CSV_UCR..."
  cut -d, -f$UCR $CSV > $CSV_UCR

  # Export CEN Columns
  echo "› Exporting CEN columns to $CSV_CEN..."
  cut -d, -f$CEN $CSV > $CSV_CEN

  # Export VIC Columns
  echo "› Exporting VIC columns to $CSV_VIC..."
  cut -d, -f$VIC $CSV > $CSV_VIC

  # Export LEO Columns
  echo "› Exporting LEO columns to $CSV_LEO..."
  cut -d, -f$LEO $CSV > $CSV_LEO

  # Export FE Columns
  echo "› Exporting FE columns to $CSV_FE..."
  cut -d, -f$FE $CSV > $CSV_FE

  # Export SIE Columns
  echo "› Exporting SIE columns to $CSV_SIE..."
  cut -d, -f$SIE $CSV > $CSV_SIE
else
  echo -e "\n\033[38;5;196m× $CSV does not exist\033[0m\n"
  exit 1
fi

# ============================================================
# STEP 3: CONVERT EACH GROUP CSV FILE INTO SQL IMPORT
# ============================================================

# TODO: Create CSV to Model Converts for Each Group Type

echo -e "\n\033[38;5;34m✓ CSV Processing Complete\033[0m\n"