#!/usr/bin/python3
"""This module defines the Rectangle class."""
from models.base import Base


class Rectangle(Base):
    """defines the Rectangle  sub_class"""

    def __init__(self, width, height, x=0, y=0, id=None):
        super().__init__(id)
        self.__width = width
        self.__height = height
        self.__x = x
        self.__y = y
