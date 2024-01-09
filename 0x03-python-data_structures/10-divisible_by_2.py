#!/usr/bin/python3
def divisible_by_2(my_list=[]):
    """returns true if an index of my_list is a multiple of 2"""
    new_list = []
    for i in range(len(my_list)):
        if my_list[i] % 2 == 0:
            new_list.append(True)
        else:
            new_list.append(False)
    return (new_list)
