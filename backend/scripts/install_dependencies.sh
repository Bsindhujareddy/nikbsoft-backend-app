#!/bin/bash

sudo chown -R ubuntu:ubuntu /home/ubuntu/frontend-app

cd /home/ubuntu/frontend-app

rm -rf node_modules
rm -f package-lock.json

npm cache clean --force

npm install