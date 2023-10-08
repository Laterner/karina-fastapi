from database import get_db_connection 
from hashlib import sha256


def init():
    conn, status = get_db_connection()
    
    if status != 'successful': return status

    cursor = conn.cursor()

    # cursor.execute('DROP TABLE IF EXISTS products;')
    # cursor.execute('DROP TABLE IF EXISTS users;')
    # cursor.execute('DROP TABLE IF EXISTS carts;')
    cursor.execute('DROP TABLE IF EXISTS orders;')
    cursor.execute('DROP TABLE IF EXISTS order_items;')


    # cursor.execute('CREATE TABLE products( \
    #     id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY, \
    #     name VARCHAR, \
    #     category VARCHAR, \
    #     count INT, \
    #     price FLOAT, \
    #     description VARCHAR \
    # );')

    # cursor.execute('CREATE TABLE users( \
    #     id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY, \
    #     firstname VARCHAR(64), \
    #     lastname VARCHAR(64), \
    #     email VARCHAR(64), \
    #     password VARCHAR(64), \
    #     role VARCHAR(16) DEFAULT \'user\'\
    # );')

    # password = sha256('password'.encode()).hexdigest()
    # cursor.execute('INSERT INTO users \
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
    
    # cursor.execute('CREATE TABLE carts( \
    #     id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY, \
    #     uuid VARCHAR(63) , \
    #     product_id INT , \
    #     count INT \
    # );')
    try:
        cursor.execute('CREATE TABLE orders( \
            id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY, \
            user_uuid VARCHAR(63) , \
            order_uuid VARCHAR(63) , \
            status VARCHAR(63) \
        );')
        cursor.execute('CREATE TABLE order_items( \
            id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY, \
            order_uuid VARCHAR(63) , \
            product_id INT , \
            count INT \
        );')

        conn.commit()
        status = cursor.statusmessage

    except Exception as ex:
        status = 'failed by ' + ex

    finally:   
        print('status:', status) 
        
        cursor.close()
        conn.close()

        return status

if __name__ == '__main__':
    init()