#!/usr/bin/python3

def no_c(my_string):
    """Replaces all occurrences of C and c in my_string."""
    for i in range(len(my_string)):
        if my_string[i] == 'c' or my_string[i] == 'C':
            my_string = my_string[:i] + '\0' + my_string[i + 1:]
    return my_string
