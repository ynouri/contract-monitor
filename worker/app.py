import os
import monitor
import time
from pymongo import MongoClient

if __name__ == '__main__':

    # Open MongoDB connection
    mongo_host = os.environ.get('MONGO_HOST','localhost')
    mongo_port = os.environ.get('MONGO_PORT','27017')
    client = MongoClient(mongo_host + ':' + mongo_port)
    db = client.TestDB2

    # Initialize block number where the worker starts
    block_number = 0

    # Check new blocks every second
    while True:
        print("Checking block number...")
        last_block_number = monitor.last_block_number()

        # Check if we're at a new block
        if last_block_number > block_number:
            block_number = last_block_number
            print("New block! -->", block_number)

            # Process the new block
            txs = monitor.contract_creation_txs(block_number)

            # Insert in mongodb
            print("Transactions with contract creation:")
            print(txs)
            if txs: db.txs.insert_many(txs)

        # Note: with this implementation
        time.sleep(1)
