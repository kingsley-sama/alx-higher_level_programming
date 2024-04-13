#!/usr/bin/python3
""" This module defines the connectDb function that conects to a database"""
import MySQLdb
import sys
a = sys.argv[1]
b = sys.argv[2]
c = sys.argv[3]


def connectDb(a, b, c):

    """this functions makes a connection to the database"""
    if (a and b and c):
        dbConnect = MySQLdb.connect(username=a, password=b, database=c)
        cur = dbConnect.cursor()
        cur.execute("SELECT * FROM states")
        data = cur.fetchall()
        for i in data:
            print(i)


if __name__ == "__main__":
    connectDb(a, b, c)
