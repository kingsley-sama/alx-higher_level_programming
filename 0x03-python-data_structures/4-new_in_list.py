#!/usr/bin/python3
def new_in_list(my_list, idx, element):
    """replaces element at index : idx. without modyfying my_list"""
    new_list = my_list
    if idx < 0 or idx >= len(my_list):
        return (my_list)
    else:
        new_list[idx] = element
        return (new_list)
