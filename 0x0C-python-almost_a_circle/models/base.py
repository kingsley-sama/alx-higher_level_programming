#!/usr/bin/python3
"""This module defines the Base class."""


class Base:
    """defines the Base class"""

    def __init__(self, id=0):
        self.__nb_objects = 0
        if id is not None:
            self.id = id
        else:
            self.__nb_objects += 1
            self.id = __nb_objects
