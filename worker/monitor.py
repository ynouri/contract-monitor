import web3
import json
import pandas as pd
from web3 import Web3, HTTPProvider, TestRPCProvider

def last_block_summary():

	provider = 'https://mainnet.infura.io/GsYhDVGy443tx208GTyj'
	web3 = Web3(HTTPProvider(provider))
	last_block = web3.eth.getBlock('latest')

	contract_txs = []
	for t in last_block.transactions:
		tx = web3.eth.getTransaction(t)
		if(tx.input != '0x'): contract_txs.append(tx)

	summary = """Last block number = {:,}
	Gas used = {:.3f} eth
	Average gas by tx = {:.3f} eth
	Number of txs = {}
	Number of txs with no 0x input = {}"""

	summary = summary.format(last_block.number,
							 last_block.gasUsed / 1e9,
							 last_block.gasUsed / len(last_block.transactions) / 1e9,
							 len(last_block.transactions),
							 len(contract_txs))

	return summary

