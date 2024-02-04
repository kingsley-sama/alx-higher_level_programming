#!/usr/bin/python3

"""This module defines the Square class"""


class Square:
    """Square Class"""
    def __init__(self, size=0):
        if isinstance(size, int) is not True:
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")
        self._size = size

    @property
    def size(self):
        """gets size"""
        return (size)

    @size.setter
    def size(self, value):
        """sets size"""
        if isinstance(value, int) is not True:
            raise TypeError("size must be an integer")
        self._size = value

    def area(self):
        return (self._size * self._size)

    def my_print(self):
        for i in range(0, self._size):
            for j in range(0, self._size):
                print("#", end='')
            print("")
