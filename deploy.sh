#!/bin/bash

# Build Frontend
cd frontend
npm install
npm run build

# Deploy Backend
cd ../backend
npm install
npm start
