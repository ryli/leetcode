#!/bin/bash

# 题目难度
rating=$1

read -p "Enter question name:" finename

mv dev "$rating/$finename"

echo "Job done. $filename has been moved to $rating"

exit 0
