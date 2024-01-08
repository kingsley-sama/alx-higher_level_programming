#!/usr/bin/python3
def print_list_integer(my_list=[]):
    """prints the integers in an array followed by a new line. Returns : 0"""
    for i in range(len(my_list)):
        print("{:d}".format(my_list[i]))
    return (0)
