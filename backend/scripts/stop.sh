#!/bin/bash

echo "Stopping backend..."

pkill -f "node" || true
pkill -f "pm2" || true