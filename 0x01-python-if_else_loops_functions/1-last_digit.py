#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
string = "Last digit of {} is {} ".format(number, abs(number) % 10)
if abs(number) % 10 > 5:
    print(string + "and is greater than 5")
elif abs(number) % 10 == 0:
    print(string + "and is 0")
elif abs(number) % 10 < 6 and abs(number) % 10 != 0:
    print(string + "and is less than 6 and not 0")
