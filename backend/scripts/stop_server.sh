#!/bin/bash

pm2 stop backend-app || true

pm2 delete backend-app || true