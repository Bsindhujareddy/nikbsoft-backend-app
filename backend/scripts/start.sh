#!/bin/bash

echo "Starting backend..."

cd /home/ubuntu/backend

# Install PM2 if not exists
npm install -g pm2

pm2 start app.js --name backend-app
pm2 save