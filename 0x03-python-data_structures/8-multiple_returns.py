#!/usr/bin/python3
def multiple_returns(sentence):
    """returns length of sentence and it's first character"""
    if not sentence:
        return ((0, None))
    return ((len(sentecne), sentence[0]))
