#!/bin/sh

# To migrate the backend with the database we need to wait until the db is up so we can run "npx prisma migrate dev --name create-operation-table", so we got this script to tell the backend dockerfile to wait.

set -e

host="$1"
shift
cmd="$@"

until pg_isready -h "$host"; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec $cmd