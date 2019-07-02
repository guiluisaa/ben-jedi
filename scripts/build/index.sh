#!/bin/bash
echo "📦  Building the application ..."!
npm run build --prefix ../../packages/shared-ui
webpack --mode production --env.ENVIRONMENT=live --config ./config/webpack.config.js