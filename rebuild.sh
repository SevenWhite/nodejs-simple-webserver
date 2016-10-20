#!/usr/bin/env bash

docker rmi sevenwhite/nodejs-simple-webserver
docker build -t sevenwhite/nodejs-simple-webserver .