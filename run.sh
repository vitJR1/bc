#!/bin/bash

docker-compose -f postgres/docker-compose.db.yml up -d

echo "Database initialization..."
sleep 10

docker-compose -f docker-compose.api.yml up -d

echo "All containers started."
