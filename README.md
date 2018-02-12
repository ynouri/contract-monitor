# contract-monitor
Web interface to monitor new contracts created on the Ethereum blockchain.
A live instance should be available at http://aws.nouri.io/

## Architecture

The contract monitor is organized around 3 main components:
1. A Python worker which leverages web3.py API to identify contract creations transactions from the Ethereum blockchain
2. An Express Node.js backend web server, rendering the main page with Pug and serving a simple transaction list GET API.
3. A MongoDB instance where the minimal transaction information is stored by the Python worker and interfaced with the Express server.

Those 3 components are containerized using Docker.

## How to deploy using Docker Swarm

```bash
# Download the docker-stack file from this repository
curl -H 'Cache-Control: no-cache' https://raw.githubusercontent.com/ynouri/contract-monitor/master/docker-stack-prod.yml -o docker-stack-prod.yml

# Initialize a single machine Docker swarm
docker swarm init

# Deploy the stack described in the docker-stack file
docker stack deploy -c docker-stack-prod.yml contract-monitor

# Check that the 3 main services are correctly deployed
docker service ps contract-monitor_mongodb --no-trunc
docker service ps contract-monitor_web --no-trunc
docker service ps contract-monitor_worker --no-trunc

# Inspect the logs of web and worker
docker service logs contract-monitor_web -f
docker service logs contract-monitor_worker -f

# Delete the stack
docker stack rm contract-monitor

```

## TODO list
1. ~~Worker: refine the filtering of contract creation txs, based on input data~~
1. ~~Web & Worker: add a timestamp to txs so that they can be ordered by date. Has to be Mongoose/pymongo compatible~~
1. ~Web: add asynchronous refresh of the txs list~
1. ~Web: refine CSS, add bootstrap~
1. Worker: implement a strategy to handle all blocks without timing issues (e.g. loop on block numbers and trigger Celery tasks to analyze a block)
1. Scripts: refactorize the deploy script, understand why issues arise when webnet network is not deployed
1. Web: add the JSON GET API enabling to check tx details
1. Tests: design a test strategy for web and implement it
1. ~Fine tune production settings and deploy on AWS~
1. Worker: in app.py, replace the print statements by a proper debugging logs (if possible, similar to JS debug module)
