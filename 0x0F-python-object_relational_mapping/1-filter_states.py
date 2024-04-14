#!/usr/bin/python3
""" This module defines filter state that returns all states starting with N"""
import MySQLdb
import sys


def findstate():

    """this functions makes a connection to the database and filters state"""
    dbConnect = MySQLdb.connect(user=sys.argv[1],
                                password=sys.argv[2],
                                database=sys.argv[3],
                                host="localhost",
                                port=3306)
    cur = dbConnect.cursor()
    cur.execute("SELECT * FROM states WHERE name LIKE 'N%'")
    data = cur.fetchall()
    for i in data:
        print(i)
    cur.close()
    dbConnect.close()


if __name__ == "__main__":
    findstate()
