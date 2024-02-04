#!/bin/usr/python3
"""
contains the Square class
"""


class Square:
    """defines a Square"""
    def __init__(self, size=0):
        if isinstance(size, int) is not True:
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")
        self._size = size

    def size(self):
        """retrieves size"""
        return (self._size)

    def size(self, value):
        """sets size"""
        self._size = value

    def area(self):
        """Returns the area a square"""
        return (self._size * self._size)
