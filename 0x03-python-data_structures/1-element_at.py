#!/usr/bin/python3

def element_at(my_list, idx):
    """returns element at index: idx of my_list array"""
    if idx < 0:
        return (None)
    elif idx >= len(my_list):
        return (None)
    else:
        return (my_list[idx])
