#!/usr/bin/python3
j = 0
for i in range(26, 0, -1):
    if i % 2 == 0:
        j = i + 96
    else:
        j = i + 64
    print("{}".format(chr(j)), end='')
