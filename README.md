# contract-monitor
Web interface to monitor new contracts created on the Ethereum blockchain.

## Architecture

The contract monitor is organized around 3 main components:
1. One or several Python workers which leverage web3.py API to read contract creations from the Ethereum blockchain
2. A MongoDB where the contract information is stored by the Python workers
3. A simple React front web interface which displays the results stored in MongoDB

Those 3 components are containerized using Docker.
