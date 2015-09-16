#!/usr/bin/env bash
set -e
codeclimate-test-reporter < ./coverage/lcov.info
gulp deployDoc
