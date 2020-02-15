#!/usr/bin/env bash
set -e
if [ "$TRAVIS_BRANCH" = "master" ] && [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
  codeclimate-test-reporter < ./coverage/lcov.info
  gulp deployDoc
fi
