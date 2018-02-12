#!/usr/bin/env bash
docker tag contract-monitor_web:latest nouri/contract-monitor_web:$1
docker tag contract-monitor_worker:latest nouri/contract-monitor_worker:$1

docker push nouri/contract-monitor_web:$1
docker push nouri/contract-monitor_worker:$1
