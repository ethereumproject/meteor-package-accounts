#!/bin/sh
#
# This script helps to automatically synchronise a GitHub fork to the upstream repository

# Fetch upstream changes
git remote add upstream https://github.com/ethereum/meteor-package-accounts
git fetch upstream

# Prune deleted branches
git fetch -p

# Swap to master branch
git checkout master

# Merge in the changes from upstream/master
git merge upstream/master

# Check if any branches need pruning
git branch --merged master | grep -v 'master$'

if [ $? -eq 1 ]; then
        echo "No local branches need deleting"
else
        echo "Local branches need deleting"
        git branch --merged master | grep -v 'master$' | xargs git branch -d
fi

echo "Finished!"