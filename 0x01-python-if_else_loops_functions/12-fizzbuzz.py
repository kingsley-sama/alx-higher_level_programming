#!/usr/bin/python3
for i in range(1, 101):
    if i < 100:
        if i % 3 == 0 and i % 5 != 0:
            print("Fizz", end=" ")
        elif i % 3 != 0 and i % 5 == 0:
            print("Buzz", end=" ")
        elif i % 3 == 0 and i % 5 == 0:
            print("Fizzbuzz", end=" ")
        else:
            print(f"{i}", end=" ")
    else:
        print("Buzz", end=" ")