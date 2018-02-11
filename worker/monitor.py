import web3
import json
import pandas as pd
from web3 import Web3, HTTPProvider, TestRPCProvider

# Infura provider + personal token
provider = 'https://mainnet.infura.io/GsYhDVGy443tx208GTyj'
web3 = Web3(HTTPProvider(provider))

# Returns the last block number
def last_block_number():
    return web3.eth.blockNumber

# Returns a dict of transactions involved in a contract creation
def contract_creation_txs(block_number):
    print("Block # " + str(block_number))
    block = web3.eth.getBlock(block_number, full_transactions=True)
    if not block:
        print("Block request failed (block # " + str(block_number) + ")")
        return []
    txs = []
    for tx in block.transactions:
        if tx.to == None:
            txs.append({
                'blockNumber': tx.blockNumber,
                'hash': tx.hash.hex(),
                'input': tx.input
            });
            print("https://etherscan.io/tx/" + tx.hash.hex())
    return txs

# Returns a summary of the last block
def last_block_summary():
    last_block = web3.eth.getBlock('latest')

    contract_txs = []
    for t in last_block.transactions:
        tx = web3.eth.getTransaction(t)
        if(tx.input != '0x'): contract_txs.append(tx)

    summary = """TEST 4!<br/>Last block number = {:,}<br/>
    Gas used = {:.3f} eth<br/>
    Average gas by tx = {:.3f} eth<br/>
    Number of txs = {}<br/>
    Number of txs with no 0x input = {}"""

    summary = summary.format(last_block.number,
                             last_block.gasUsed / 1e9,
                             last_block.gasUsed / len(last_block.transactions) / 1e9,
                             len(last_block.transactions),
                              len(contract_txs))

    return summary
