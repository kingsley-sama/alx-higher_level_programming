#!/usr/bin/python3
"""This module defines the Base class."""


class Base:
    """defines the Base class"""

    __nb_objects = 0
    def __init__(self, id=None):
        if id is not None:
            self.id = id
        else:
            Base.__nb_objects += 1
            self.id = Base.__nb_objects


b= Base()
t = Base()
print(b.id)
print(t.id)
