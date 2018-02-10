#!/usr/bin/env bash

docker stack rm contract-monitor
docker stack deploy -c docker-stack.yml contract-monitor
