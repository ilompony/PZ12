name: CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Check for 'Hello world in text files
        run: |
          cat text1.txt text2.txt | grep -q 'Hello world'
