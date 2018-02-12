# contract-monitor
Web interface to monitor new contracts created on the Ethereum blockchain.

## TODO list
1. ~~Worker: refine the filtering of contract creation txs, based on input data~~
1. ~~Web & Worker: add a timestamp to txs so that they can be ordered by date. Has to be Mongoose/pymongo compatible~~
1. Web: add asynchronous refresh of the txs list
1. Web: refine CSS, add bootstrap
1. Worker: implement a strategy to handle all blocks without timing issues (e.g. loop on block numbers and trigger Celery tasks to analyze a block)
1. Scripts: refactorize the deploy script, understand why issues arise when webnet network is not deployed
1. Web: add the JSON GET API enabling to check tx details
1. Tests: design a test strategy for web and implement it
1. Fine tune production settings and deploy on AWS
1. Worker: in app.py, replace the print statements by a proper debugging logs (if possible, similar to JS debug module)

## Architecture

The contract monitor is organized around 3 main components:
1. One or several Python workers which leverage web3.py API to read contract creations from the Ethereum blockchain
2. A MongoDB where the contract information is stored by the Python workers
3. A simple React front web interface which displays the results stored in MongoDB

Those 3 components are containerized using Docker.

## How to deploy using Docker

```bash
# Download the docker-stack file from this repository
curl https://raw.githubusercontent.com/ynouri/contract-monitor/master/docker-stack.yml -o docker-stack.yml

# Initialize a single machine Docker swarm
docker swarm init

# Deploy the stack described in the docker-stack file
docker stack deploy -c docker-stack.yml contract-monitor

# Check if the MongoDB service deployment worked
docker service ps contract-monitor_mongodb --no-trunc

# Delete the stack
docker stack rm contract-monitor

```
