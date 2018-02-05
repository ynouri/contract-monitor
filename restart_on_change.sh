#!/usr/bin/env bash

while true
do
        fswatch -1 $conmon/worker 
        docker service update contract-monitor_worker --force #--with-registry-auth
done
