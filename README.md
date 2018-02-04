# contract-monitor
Web interface to monitor new contracts created on the Ethereum blockchain.

## Architecture

The contract monitor is organized around 3 main components:
1. One or several Python workers which leverage web3.py API to read contract creations from the Ethereum blockchain
2. A MongoDB where the contract information is stored by the Python workers
3. A simple React front web interface which displays the results stored in MongoDB

Those 3 components are containerized using Docker.

## How to deploy using Docker

```
# Download the docker-stack file from this repository
curl https://raw.githubusercontent.com/ynouri/contract-monitor/master/docker-stack.yml -o docker-stack.yml

# Initialize a single machine Docker swarm
docker swarm init

# Deploy the stack described in the docker-stack file
docker stack deploy -c docker-stack.yml contract-monitor

```


