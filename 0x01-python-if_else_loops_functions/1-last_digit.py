#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
string = f"Last digit of {number} is {number % 10} "
if number > 5:
    print(string + "and is greater than 5")
elif number == 0:
    print(string + "and is 0")
elif number < 6 and number != 0:
    print(string + "and is less than 6 and not 0")
