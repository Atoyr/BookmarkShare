#!/bin/bash

# .envファイルのパス
ENV_FILE="supabase/.env"

# コマンド選択
case $1 in
  gen-types)
    echo "Generating Supabase TypeScript types..."
    dotenv -e $ENV_FILE -- supabase gen types typescript --local > app/utils/supabase/schema.ts
    ;;
  db-diff)
    if [ -z "$2" ]; then
      echo "Please provide a file name for the diff."
      exit 1
    fi
    echo "Generating database diff..."
    dotenv -e $ENV_FILE -- supabase db diff --use-migra -f $2
    ;;
  db-reset)
    echo "Reset database..."
    dotenv -e $ENV_FILE -- supabase db reset
    ;;
  db-dump)
    echp "Dumping database..."
    dotenv -e $ENV_FILE -- supabase db dump --local --data-only -f ./supabase/seed.sql
    ;;
  start)
    echo "Starting Supabase..."
    dotenv -e $ENV_FILE -- supabase start
    ;;
  stop)
    echo "Starting Supabase..."
    dotenv -e $ENV_FILE -- supabase stop
    ;;
  status)
    dotenv -e $ENV_FILE -- supabase status
    ;;
  *)
    echo "Usage: $0 {gen-types|db-diff|start}"
    ;;
esac

