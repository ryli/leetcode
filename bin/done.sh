#!/bin/bash

# 题目难度
rating=$1
echo $rating

read -p "Enter question name:" finename

mv dev $finename
mv $finename "$rating/"

echo "Job done. $filename has been moved to $rating."

exit 0
