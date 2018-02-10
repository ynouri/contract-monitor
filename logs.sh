docker ps -f name=contract-monitor_worker -q | xargs docker logs -f
