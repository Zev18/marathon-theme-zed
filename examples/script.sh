#!/bin/bash

# ANSI color squares - basic 8 colors
echo "ANSI Colors:"
echo "-------------------------------"
# Top row of squares
for color in {0..7}; do
    echo -ne "\033[4${color}m \033[4${color}m \033[4${color}m  \033[0m"
done
echo
# Bottom row of squares
for color in {0..7}; do
    echo -ne "\033[4${color}m \033[4${color}m \033[4${color}m  \033[0m"
done
echo -e "\n"
