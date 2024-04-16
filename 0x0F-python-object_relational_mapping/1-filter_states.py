#!/usr/bin/python3
"""This module writes the findstate function"""
import MySQLdb
import sys


def findstate():

    """filters all states starting with the letter N"""
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
        if i[1][0] == 'N':
            print(i)
    cur.close()
    dbConnect.close()


if __name__ == "__main__":
    findstate()
