from database import get_db_connection 
from hashlib import sha256


def init():
    conn = get_db_connection()
    cur = conn.cursor()

    # cur.execute('DROP TABLE IF EXISTS products;')
    # cur.execute('DROP TABLE IF EXISTS users;')
    cur.execute('DROP TABLE IF EXISTS carts;')


    # cur.execute('CREATE TABLE products( \
    #     id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY, \
    #     name VARCHAR, \
    #     category VARCHAR, \
    #     count INT, \
    #     price FLOAT, \
    #     description VARCHAR \
    # );')

    # cur.execute('CREATE TABLE users( \
    #     id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY, \
    #     firstname VARCHAR(64), \
    #     lastname VARCHAR(64), \
    #     email VARCHAR(64), \
    #     password VARCHAR(64), \
    #     role VARCHAR(16) DEFAULT \'user\'\
    # );')

    # password = sha256('password'.encode()).hexdigest()
    # cur.execute('INSERT INTO users \
    #         ( firstname, lastname, email, password, role )'
    #         'VALUES (%s, %s, %s, %s, %s);',
    #         (
    #             'firstname', 
    #             'lastname', 
    #             'admin@test.ru', 
    #             password,
    #             'admin'
    #         )
    # )
    
    cur.execute('CREATE TABLE carts( \
        id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY, \
        uuid VARCHAR(63) , \
        product_id INT , \
        count INT \
    );')
    
    conn.commit()

    cur.close()
    conn.close()

if __name__ == '__main__':
    init()