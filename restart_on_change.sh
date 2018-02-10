#!/usr/bin/env bash

docker service update contract-monitor_worker --force

while true
do
        fswatch -1 $conmon/worker
        docker service update contract-monitor_worker --force #--with-registry-auth
done
