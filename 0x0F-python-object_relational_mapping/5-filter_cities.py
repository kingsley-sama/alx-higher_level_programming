#!/usr/bin/python3
""" This module defines the connectDb function that conects to a database"""
import MySQLdb
import sys


def connectDb():

    """this functions makes a connection to the database"""
    dbConnect = MySQLdb.connect(user=sys.argv[1],
                                password=sys.argv[2],
                                database=sys.argv[3],
                                host="localhost",
                                port=3306)
    cur = dbConnect.cursor()
    cur.execute("""SELECT states.name, cities.name FROM cities INNER JOIN states
    ON cities.state_id = states.id
    ORDER BY cities.id ASC;""")
    data = cur.fetchall()
    for i in data:
        if i[0] == sys.argv[4]:
            print("{}, ".format(i[1]), end='')
    print("")
    cur.close()
    dbConnect.close()


if __name__ == "__main__":
    connectDb()
