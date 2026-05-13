#!/bin/bash

cd /home/ubuntu/backend-app

pm2 delete backend-app || true

pm2 start app.js --name backend-app

pm2 save