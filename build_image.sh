#!/usr/bin/env bash

if [ "$1" = "web" ]
then
  echo "Building web image"
  docker build -t contract-monitor_web:latest ./web

elif [ "$1" = "worker" ]
then
  echo "Building worker image"
  docker build -t contract-monitor_worker:latest ./worker
elif [ "$1" = "all" ]
then
  echo "Building all images: worker and web"
  docker build -t contract-monitor_worker:latest ./worker
  docker build -t contract-monitor_web:latest ./web
fi
