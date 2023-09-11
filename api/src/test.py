import requests
import random
import math
import datetime

def ch(a):
    k = 0
    for i in range(2, a // 2+1):
        if (a % i == 0):
            k = k+1
    if k <= 0:
        return True
    else:
        return False
    

time_s = datetime.datetime.now()

for a in range(2_0000):
    k = 0
    for i in range(2, a // 2+1):
        if (a % i == 0):
            k = k+1
    if k <= 0:
        print (True)
    else:
        print (False)

time_e = datetime.datetime.now()

print(time_e - time_s)