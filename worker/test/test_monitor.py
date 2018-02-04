import unittest
import worker.monitor

class TestMonitor(unittest.TestCase):

	def test_is_summary_non_empty_string(self):
		summary = worker.monitor.last_block_summary()
		self.assertTrue(summary)