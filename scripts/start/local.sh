#!/bin/bash
echo "🚀  Bootstraping the application! ..."
webpack-dev-server --mode development --env.ENVIRONMENT=local --config ./config/webpack.config.js