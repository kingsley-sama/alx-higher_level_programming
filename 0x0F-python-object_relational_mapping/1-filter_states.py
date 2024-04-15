#!/usr/bin/python3
# List all states with a name starting with uppercase N
# Username, password, and database names are given as user args
# New updates should be commited properly
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
    cur.execute("""SELECT id,
    name FROM states WHERE name LIKE 'N%'
    ORDER BY id ASC;""")
    data = cur.fetchall()
    for i in data:
        print(i)
    cur.close()
    dbConnect.close()


if __name__ == "__main__":
    findstate()
