#!/usr/bin/env bash

tag_and_push_web() {
  docker tag contract-monitor_web:latest nouri/contract-monitor_web:$1
  docker push nouri/contract-monitor_web:$1
}

tag_and_push_worker() {
  docker tag contract-monitor_worker:latest nouri/contract-monitor_worker:$1
  docker push nouri/contract-monitor_worker:$1
}


if [ "$1" = "web" ]
then
  tag_and_push_web $2
elif [ "$1" = "worker" ]
then
  tag_and_push_worker $2
elif [ "$1" = "all" ]
then
  tag_and_push_web $2
  tag_and_push_worker $2
fi
