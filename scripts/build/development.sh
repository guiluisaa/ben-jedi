#!/bin/bash
echo "📦  Building the application ..."!
webpack --mode production --env.ENVIRONMENT=development --config ./webpack.config.js