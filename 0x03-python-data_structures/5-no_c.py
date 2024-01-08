#!/usr/bin/python3
i = 0
def no_c(my_string):
    while my_string[i] != '\0':
        print(my_string[i])
        i += 1
    print('\0')
