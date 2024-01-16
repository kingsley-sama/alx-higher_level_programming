#!/usr/bin/python3
import sys
if __name__ == "__main__":
    argv = sys.argv
    a = len(argv)
    if a == 1:
        print("0 arguments.")
    else:
        print("{} argument{}".format(a - 1, 's' if a > 2 else ''))
    for i in range(1, a):
        print("{} : {}".format(i, argv[i]))
