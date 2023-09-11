import os
import configparser


try:
    SERVER_HOSTNAME = os.environ['SERVER_HOSTNAME']
    SERVER_DATABASE = os.environ['SERVER_DATABASE']
    SERVER_PASSWORD = os.environ['SERVER_PASSWORD']
    SERVER_USER     = os.environ['SERVER_USER']
except:
    config = configparser.ConfigParser()
    config.read('conf.ini')

    SERVER_HOSTNAME = config['DEFAULT']['SERVER_HOSTNAME']
    SERVER_DATABASE = config['DEFAULT']['SERVER_DATABASE']
    SERVER_PASSWORD = config['DEFAULT']['SERVER_PASSWORD']
    SERVER_USER     = config['DEFAULT']['SERVER_USER']

print('API_HOST:', SERVER_HOSTNAME)